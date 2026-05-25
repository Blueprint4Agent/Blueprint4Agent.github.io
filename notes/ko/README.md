# Blueprint4Agent Documentation Hub

이 저장소는 Blueprint4Agent의 조직 단위 문서 사이트를 관리합니다.
사이트는 [Docusaurus](https://docusaurus.io/)로 구성되며 GitHub Pages로 배포됩니다.

이 사이트는 공통 프로젝트 맥락, 문서화 규칙, 운영 기준을 문서화합니다.
저장소별 세부 구현 문서는 해당 프로젝트 저장소에서 관리해야 합니다.

## Project Scope

Blueprint4Agent 문서에는 최소한 아래 기준 콘텐츠가 포함되어야 합니다.

- Project Overview
- Project Purpose
- Project Composition: B4F, B4B, Docusaurus documentation site

현재 문서는 아래 파일에서 시작합니다.

- `docs/about-b4a/what-is-b4a.mdx`
- `i18n/ko/docusaurus-plugin-content-docs/current/about-b4a/what-is-b4a.mdx`

Locale별 저장소 notes는 `notes/<locale>/` 아래에서 관리합니다.
현재 추가 locale은 `ko`입니다.

## Requirements

- Node.js 20 이상
- npm

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

로컬 Docusaurus 개발 서버를 시작합니다.
대부분의 콘텐츠와 스타일 변경은 서버를 재시작하지 않아도 반영됩니다.

## Build

```bash
npm run build
```

빌드 명령은 `build/`에 정적 산출물을 생성합니다.
`build/`는 생성 산출물이므로 커밋하지 않습니다.

## Useful Commands

```bash
npm run start
npm run build
npm run serve
npm run typecheck
npm run format:check
npm run check
```

넓은 범위의 변경 전에는 가능하면 `npm run check`를 사용합니다.
Docusaurus 설정, 사이드바, 내비게이션, 스타일, 문서 구조를 변경한 뒤에는 `npm run build`를 실행합니다.

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

```bash
npm run deploy
```

GitHub Pages 배포 설정은 아래 값을 기준으로 합니다.

- `url`: `https://blueprint4agent.github.io`
- `baseUrl`: `/`

릴리스 프로세스에 맞춰 저장소의 GitHub Pages workflow 또는 Docusaurus 배포 명령을 사용합니다.
