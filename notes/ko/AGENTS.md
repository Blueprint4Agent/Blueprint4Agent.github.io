# Agent Guide

이 저장소에서 변경 작업을 시작하기 전에 이 문서를 먼저 읽으세요.

## Repository Scope

이 저장소는 **Blueprint4Agent 전체 문서의 중앙 허브**입니다.
**Docusaurus 기반**으로 구성되고 **GitHub Pages**로 배포되는 조직 공통 문서 웹사이트를 관리합니다.

## Documentation Language Policy

- 신규 문서는 **영어를 기본**으로 작성합니다.
- 사용자/운영 관점의 문서를 추가할 때는 지원되는 모든 추가 locale의 번역본을 함께 제공합니다.
- Docusaurus 문서는 `i18n/<locale>/` 아래에 번역본을 추가합니다.
- `README.md`, `AGENTS.md` 같은 저장소 단위 notes는 `notes/<locale>/` 아래에 번역본을 추가합니다.
- 현재 추가 locale은 `ko`입니다.
- 동작, 구조, 규칙이 바뀌면 영어 문서와 locale별 문서를 같은 작업 사이클에서 동기화합니다.

## Docusaurus Writing Standard (De Facto)

- 이 저장소는 **프로젝트 문서 de facto 표준**을 사용합니다.
- 문서는 실무 적용 중심(implementation-first)으로 작성합니다.
- 스타일 변형보다 구조/이름의 일관성을 우선합니다.
- 명확한 섹션 헤더와 짧고 실행 가능한 문단을 사용합니다.
- 페이지 간 내비게이션을 예측 가능하게 유지하고 중복 내용을 피합니다.
- 페이지 추가/변경 시 사이드바/카테고리 구조의 일관성을 함께 확인합니다.

## Required Baseline Content

이 저장소의 조직 단위 문서에는 최소한 아래 항목이 포함되어야 합니다.

- `Project Overview`
- `Project Purpose`
- `Project Composition` (B4F, B4B, Docusaurus documentation site)

저장소별 상세 기술 문서는 각 저장소에서 별도로 관리합니다.

## Required Read Order

1. `AGENTS.md`
2. 설정, `make` 타깃, 배포는 `README.md`
3. `docs/` 하위 기능별 문서

## Repository Hygiene

- 생성된 Docusaurus 산출물과 로컬 의존성 폴더는 커밋하지 않습니다.
- `node_modules/`, `build/`, `.docusaurus/`, 로컬 캐시, 로그, `.playwright-mcp/` 같은 도구 산출물은 버전 관리에서 제외합니다.
- 소스 파일, 문서, 설정, 정적 에셋, lockfile만 의도한 프로젝트 자산으로 커밋합니다.
- 첫 커밋 전과 큰 문서 변경 전에는 `git status --short`로 의도한 파일만 스테이징되는지 확인합니다.

## Verification

검증은 루트 `Makefile`로 실행합니다(`make help`로 전체 타깃 확인).

1. 모든 커밋 전에 `make verify`를 실행합니다. `make check`(Prettier 포맷 검사, TypeScript)와 `make build`(모든 locale 빌드)를 함께 실행합니다.
2. `make check`가 포맷 문제를 보고하면 `make format`을 실행합니다. 검사를 통과시키기 위해 포맷을 수동으로 맞추지 않습니다.
3. 레이아웃이나 시각적 변경은 영향을 받은 페이지를 데스크톱·모바일 뷰포트와 라이트·다크 테마에서 확인합니다.
4. 실행한 명령과 결과를 커밋 worklog에 기록합니다. 검증을 완료하지 못한 경우 worklog와 pull request notes에 이유를 남깁니다.

## Work Units

작업은 리뷰 가능한 작업 단위로 나누고, 단위별로 커밋합니다.

1. 하나의 작업 단위는 하나의 의도를 다룹니다. 예: 하네스, UI/테마, 문서 섹션 하나, locale 동기화.
2. 각 단위는 단독으로 빌드되어야 하며, 커밋 전에 `make verify`를 실행합니다.
3. 영어 문서와 `ko` 번역은 같은 단위에 포함하여 모든 커밋에서 locale 동기화를 유지합니다.
4. 관련 없는 포맷, 의존성, 콘텐츠 변경을 한 단위에 섞지 않습니다.

## Worklog Policy (Required)

1. 모든 커밋에는 대응되는 `worklog/` 항목 파일이 있어야 합니다.
2. 파일명 형식: `<number>-<short-kebab-title>.md` (네 자리 번호, 예: `0002-b4react-theme.md`).
3. `.github/WORKLOG_TEMPLATE.md`를 사용합니다. 최소한 `# Commit Title`, `# Changed File Scope`, `# Reason`, `# Impact`, `# Verification`을 기록합니다.
4. `# Commit Title`은 실제 커밋 제목과 같아야 합니다.

## Git Governance

커밋하거나 PR을 열기 전에 저장소 하네스로 메타데이터를 검증합니다.

```sh
COMMIT_TITLE="docs: add feature pages" COMMIT_BODY_FILE=<file> make git-governance-check
PR_TITLE="[docs] Add feature pages" PR_BODY_FILE=<file> make git-governance-check
```

`COMMIT_TITLE` 없이 실행하면 현재 `HEAD` 커밋을 검증합니다. `make governance-test`는 검증기 자체를 테스트합니다.

- 브랜치 이름: `<type>/<short-kebab-title>`. 허용 type: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `ci`, `build`, `perf`, `style`, `revert`, `hotfix`.
- 커밋 제목: Conventional Commits, `<type>(optional-scope): <imperative summary>`.
- 커밋 본문에는 `Changes:`, `Affected Files:`, `Verification:` 섹션이 있어야 합니다.
- PR 제목: `[type] Concise PR title`. PR 설명에는 Summary, Scope, Reason, Verification, Documentation, Risk / Impact가 있어야 합니다(`.github/pull_request_template.md`).
- PR은 기본적으로 ready for review로 생성합니다. merge commit(`gh pr merge <number> --auto --merge`)을 사용하며, squash/rebase는 사용자의 명시적 요청이 있을 때만 사용합니다.
- PR에서는 `.github/workflows/check.yml`(`make verify`)과 `.github/workflows/governance.yml`(`make git-governance-pr-check`)이 실행됩니다. `main`에 push하면 `.github/workflows/deploy.yml`로 배포됩니다.

## Documentation Sync

구현 변경으로 동작, 구조, 규칙이 바뀌면 관련 문서를 같은 작업 사이클에서 함께 업데이트하세요.
