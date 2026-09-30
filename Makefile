SHELL := /bin/bash
.DEFAULT_GOAL := help
NPM ?= npm
MERGE_METHOD ?= merge
ALLOW_NON_MERGE_METHOD ?= false

export COMMIT_TITLE COMMIT_BODY_FILE PR_TITLE PR_BODY_FILE MERGE_METHOD ALLOW_NON_MERGE_METHOD

.PHONY: help install dev build serve clear check format verify git-governance-check git-governance-pr-check governance-test

help: ## Show available targets
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z0-9_.-]+:.*##/ {printf "  %-26s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install locked dependencies
	$(NPM) ci

dev: ## Start the Docusaurus development server (English locale)
	$(NPM) run start

build: ## Build every locale into build/
	$(NPM) run build

serve: ## Serve the production build locally
	$(NPM) run serve

clear: ## Clear Docusaurus caches and generated output
	$(NPM) run clear

check: ## Check formatting and TypeScript
	$(NPM) run format:check
	$(NPM) run typecheck

format: ## Format source and documentation
	$(NPM) run format

verify: check build ## Run the full pre-commit verification (check + build)

git-governance-check: ## Validate branch, commit, worklog, and PR metadata
	bash ./scripts/validate-git-governance.sh

git-governance-pr-check: ## Validate actual PR metadata and every authored commit
	bash ./scripts/validate-git-governance.sh --event-file "$(GITHUB_EVENT_PATH)"

governance-test: ## Test the git governance validator
	python3 -m unittest discover -s scripts -p 'test_*.py'
