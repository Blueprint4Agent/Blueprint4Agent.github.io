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
2. 이 저장소에 추가될 Docusaurus 설정 및 빌드/배포 가이드
3. `docs/` 하위 기능별 문서

## Repository Hygiene

- 생성된 Docusaurus 산출물과 로컬 의존성 폴더는 커밋하지 않습니다.
- `node_modules/`, `build/`, `.docusaurus/`, 로컬 캐시, 로그, `.playwright-mcp/` 같은 도구 산출물은 버전 관리에서 제외합니다.
- 소스 파일, 문서, 설정, 정적 에셋, lockfile만 의도한 프로젝트 자산으로 커밋합니다.
- 첫 커밋 전과 큰 문서 변경 전에는 `git status --short`로 의도한 파일만 스테이징되는지 확인합니다.

## Verification

- Docusaurus 설정, 내비게이션, 스타일, 문서 구조를 변경한 뒤에는 `npm run build`를 실행합니다.
- 레이아웃이나 시각적 변경은 영향을 받은 페이지를 데스크톱 뷰포트와 모바일 뷰포트에서 확인합니다.
- 검증을 완료하지 못한 경우 handoff 또는 pull request notes에 이유를 남깁니다.

## Documentation Sync

구현 변경으로 동작, 구조, 규칙이 바뀌면 관련 문서를 같은 작업 사이클에서 함께 업데이트하세요.
