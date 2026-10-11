# Commit Title

chore(license): add the MIT License

# Changed File Scope

`LICENSE` (new), `README.md`, `notes/ko/README.md`, `package.json`, `package-lock.json` (root package `license` field).

# Reason

The manual repository had no license. B4FastAPI and B4React already use the MIT License with the holder "Blueprint4Agent contributors", so this repository adopts the same text.

# Impact

- `LICENSE` contains the same MIT text and copyright line as B4FastAPI and B4React.
- README (en/ko) has a License section that keeps third-party dependency and brand asset notices separate.
- `package.json` and the lockfile root declare `"license": "MIT"`; dependencies are unchanged.

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
- `npm ci --dry-run` succeeded with the updated lockfile.
