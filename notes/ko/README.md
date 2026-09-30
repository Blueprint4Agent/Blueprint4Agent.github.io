# B4Agent Manual

이 저장소는 B4Agent 매뉴얼을 관리합니다. B4Agent 풀스택 블루프린트(B4FastAPI + B4React, B4SpringBoot 예정)의 문서입니다.
사이트는 [Docusaurus](https://docusaurus.io/)로 구성되며 GitHub Pages로 배포됩니다.

## Project Scope

매뉴얼은 `sidebars.ts`에서 Getting Started, Features, Environment & Options, Verification, Backends로 구성됩니다. 필수 섹션은 `AGENTS.md`를 참고합니다.

문서는 아래 파일에서 시작합니다.

- `docs/getting-started/overview.mdx` (`/docs`로 제공)
- `i18n/ko/docusaurus-plugin-content-docs/current/getting-started/overview.mdx`

Locale별 저장소 notes는 `notes/<locale>/` 아래에서 관리합니다.
현재 추가 locale은 `ko`입니다.

## Requirements

- Node.js 20 이상
- npm

## Installation

```bash
make install
```

## Local Development

```bash
make dev
```

로컬 Docusaurus 개발 서버를 시작합니다.
대부분의 콘텐츠와 스타일 변경은 서버를 재시작하지 않아도 반영됩니다.

## Build

```bash
make build
```

빌드 명령은 `build/`에 정적 산출물을 생성합니다.
`build/`는 생성 산출물이므로 커밋하지 않습니다.

## Make Targets

`make help`로 전체 타깃을 확인합니다.

```bash
make install                 # 잠긴 의존성 설치 (npm ci)
make dev                     # 개발 서버 실행
make build                   # 모든 locale을 build/에 빌드
make serve                   # 프로덕션 빌드를 로컬에서 서빙
make check                   # Prettier 포맷 검사와 TypeScript 검사
make format                  # 소스와 문서 포맷 적용
make verify                  # 커밋 전 전체 검증: check + build
make git-governance-check    # 브랜치, 커밋, worklog, PR 메타데이터 검증
make governance-test         # 거버넌스 검증기 테스트
```

모든 커밋 전에 `make verify`를 실행합니다.

## Contribution Workflow

작업은 작업 단위로 나누고, `main`에 바로 또는 `<type>/<kebab-title>` 브랜치에서 단위별로 커밋합니다. `main`에 push하면 배포 전에 `make verify`와 Git 거버넌스 검사가 실행됩니다.
UI 변경은 현재 B4React 기반 스타일을 유지합니다.
모든 커밋에는 `.github/WORKLOG_TEMPLATE.md` 기반의 `worklog/NNNN-title.md` 항목이 포함됩니다.
PR은 `.github/pull_request_template.md`를 사용하며 `.github/workflows/check.yml`과 `.github/workflows/governance.yml`로 검증됩니다.
전체 규칙은 `AGENTS.md`를 참고합니다.

## Documentation Policy

- 신규 문서는 영어를 기본으로 작성합니다.
- 사용자/운영 관점의 문서를 추가할 때는 지원되는 모든 추가 locale의 번역본을 함께 추가합니다.
- Docusaurus 문서는 `i18n/<locale>/` 아래에 번역본을 추가합니다.
- `README.md`, `AGENTS.md` 같은 저장소 단위 notes는 `notes/<locale>/` 아래에 번역본을 추가합니다.
- 현재 추가 locale은 `ko`입니다.
- 동작, 구조, 규칙이 바뀌면 영어 문서와 locale별 문서를 같은 작업 사이클에서 동기화합니다.
- 문서 페이지를 추가하거나 이동할 때는 `sidebars.ts`를 함께 확인합니다.

## Repository Hygiene

생성 파일과 로컬 도구 산출물은 Git에서 제외합니다.

- `node_modules/`
- `build/`
- `.docusaurus/`
- `.playwright-mcp/`
- 로그, 캐시, 로컬 환경 파일

커밋 전에는 아래 명령으로 상태를 확인합니다.

```bash
git status --short
```

## Deployment

배포는 GitHub Actions로 처리합니다.
`main`에 push하면 `.github/workflows/deploy.yml`이 실행되고, Docusaurus 사이트를 빌드한 뒤 `build/`를 Pages artifact로 업로드하여 GitHub Pages에 배포합니다.

GitHub Pages source는 legacy `main` branch root가 아니라 GitHub Actions로 설정되어야 합니다.

공개 사이트 URL은 아래와 같습니다.

- `https://blueprint4agent.github.io/`

Docusaurus production 설정은 아래 값을 기준으로 합니다.

- `url`: `https://blueprint4agent.github.io`
- `baseUrl`: `/`
