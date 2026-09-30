"""Unit tests for the pure validation rules in validate_git_governance.py."""

import unittest

import validate_git_governance as gov

BODY = "\n\nChanges:\n- Update docs.\n\nAffected Files:\n- docs/\n\nVerification:\n- make verify\n"
PR_BODY = "\n".join(
    f"## {heading}\n\nFilled.\n"
    for heading in ("Summary", "Scope", "Reason", "Verification", "Documentation", "Risk / Impact")
)


class GovernanceRulesTest(unittest.TestCase):
    def test_branch_names(self):
        self.assertTrue(gov.BRANCH.fullmatch("docs/features-pages"))
        self.assertFalse(gov.BRANCH.fullmatch("main"))
        self.assertFalse(gov.BRANCH.fullmatch("docs/Features_Pages"))

    def test_commit_message_requires_title_and_body_sections(self):
        self.assertEqual(gov.check_message("docs: add pages" + BODY, "t"), "docs: add pages")
        with self.assertRaises(ValueError):
            gov.check_message("Add pages" + BODY, "t")
        with self.assertRaises(ValueError):
            gov.check_message("docs: add pages\n\nChanges:\n- x\n", "t")

    def test_worklog_must_match_commit_title(self):
        log = (
            "# Commit Title\n\ndocs: add pages\n\n# Changed File Scope\n\ndocs/\n\n"
            "# Reason\n\nWhy.\n\n# Impact\n\nWhat.\n\n# Verification\n\nmake verify\n"
        )
        files = {"worklog/0001-add-pages.md": log}
        gov.check_worklogs(list(files), files.__getitem__, "docs: add pages", "t")
        with self.assertRaises(ValueError):
            gov.check_worklogs(list(files), files.__getitem__, "docs: other", "t")
        with self.assertRaises(ValueError):
            gov.check_worklogs(["docs/a.mdx"], files.__getitem__, "docs: add pages", "t")

    def test_pull_request_title_and_sections(self):
        gov.check_pr("[docs] Add feature pages", PR_BODY)
        with self.assertRaises(ValueError):
            gov.check_pr("docs: add feature pages", PR_BODY)
        with self.assertRaises(ValueError):
            gov.check_pr("[docs] Add feature pages", "## Summary\n\nOnly.\n")


if __name__ == "__main__":
    unittest.main()
