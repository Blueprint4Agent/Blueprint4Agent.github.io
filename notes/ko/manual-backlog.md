# 매뉴얼 대기 항목

English: [Manual backlog](../manual-backlog.md)

이 파일은 게시되지 않습니다. 아직 진행 중인 B4FastAPI 작업을 기록해 두고, 각 항목이 `main`에 반영되면 바로 매뉴얼을 갱신할 수 있게 합니다.

기준: 매뉴얼은 B4FastAPI `836d626`와 고정된 B4React `d32fce7`(2026-10-08)를 설명합니다.

## 사용 방법

1. 항목이 병합되면 B4FastAPI `main`과 고정된 B4React 커밋에서 실제 동작을 확인합니다. 아래 초안은 의도한 설계이며 검증된 사실이 아닙니다.
2. 모든 `<verify: ...>` 표시를 구현된 값으로 바꾸거나 해당 줄을 지웁니다.
3. 초안을 대상 페이지에 영어와 한국어로 같은 커밋에 넣고, `make verify`를 실행한 뒤 worklog를 추가합니다.
4. 기능과 아키텍처만 설명합니다. 이슈, PR, 변경 이유는 적지 않습니다.
5. 같은 커밋에서 이 파일(두 언어 모두)의 해당 항목을 삭제합니다.

## 진행 중 항목

| 추적          | 주제                              | 대상 페이지                                                     |
| ------------- | --------------------------------- | --------------------------------------------------------------- |
| B4FastAPI #91 | 관리자 Observability 화면(후순위) | `features/admin-and-roles.mdx`, `environment/observability.mdx` |
| B4FastAPI #87 | 위 항목들의 총괄                  | 페이지 없음, 모든 항목이 끝나면 이 파일 정리                    |

---

### 관리자 Observability 화면 (#91, 후순위)

**대상:** `docs/features/admin-and-roles.mdx`의 `## Server status` 뒤에 `## Observability` 섹션 추가, `docs/environment/observability.mdx`에서 링크.

**초안(한국어 페이지용):**

```mdx
## Observability

`<verify: 경로, 예: /admin/observability>`는 <verify: 관리자 전용?>으로 요청과 워커 상태를 요약합니다.

| 패널            | 출처                         | 표시 내용                                 |
| --------------- | ---------------------------- | ----------------------------------------- |
| 요청            | Prometheus `/metrics`        | <verify: 처리량, 오류율, 지연 백분위>     |
| 백그라운드 작업 | <verify: Celery 지표/프로브> | <verify: 큐 길이, 실패>                   |
| 트레이스        | Tempo                        | <verify: trace ID로 Grafana Explore 링크> |

- 데이터를 수집하지 못하면 정상이 아닌 확인 불가로 표시합니다.
- <verify: 보존 기간, 샘플링, 민감 정보 제외 기준>
- 기존 지표와 트레이싱을 읽으며 별도의 수집 경로를 추가하지 않습니다.
```

**완료 시 확인:** 경로와 역할, 지표 이름, Grafana 링크에 observability 프로필이 필요한지, 새 환경변수(`environment-variables.mdx`에 추가).

---

## 원본 불일치 메모

- B4FastAPI `Makefile`의 `celery-beat` 도움말은 아직 "no business schedules enabled by default"라고 하지만, Beat는 `lifecycle-mail-outbox`(60초)와 `billing-reconciliation`(300초)을 실행합니다. 매뉴얼은 실제 스케줄을 설명합니다. 도움말이 수정되면 `make-commands.mdx`를 다시 확인합니다.
