# 매뉴얼 대기 항목

English: [Manual backlog](../manual-backlog.md)

이 파일은 게시되지 않습니다. 아직 진행 중인 B4FastAPI 작업을 기록해 두고, 각 항목이 `main`에 반영되면 바로 매뉴얼을 갱신할 수 있게 합니다.

기준: 매뉴얼은 B4FastAPI `2a62b52`와 고정된 B4React `d4878ea`(2026-10-08)를 설명합니다.

## 사용 방법

1. 항목이 병합되면 B4FastAPI `main`과 고정된 B4React 커밋에서 실제 동작을 확인합니다. 아래 초안은 의도한 설계이며 검증된 사실이 아닙니다.
2. 모든 `<verify: ...>` 표시를 구현된 값으로 바꾸거나 해당 줄을 지웁니다.
3. 초안을 대상 페이지에 영어와 한국어로 같은 커밋에 넣고, `make verify`를 실행한 뒤 worklog를 추가합니다.
4. 기능과 아키텍처만 설명합니다. 이슈, PR, 변경 이유는 적지 않습니다.
5. 같은 커밋에서 이 파일(두 언어 모두)의 해당 항목을 삭제합니다.

## 진행 중 항목

| 추적          | 주제                              | 대상 페이지                                                     |
| ------------- | --------------------------------- | --------------------------------------------------------------- |
| B4FastAPI #95 | 남은 결제 안내 메일               | `features/email.mdx`, `features/billing.mdx`                    |
| B4FastAPI #93 | 결제 생명주기 점검                | `features/billing.mdx`                                          |
| B4FastAPI #91 | 관리자 Observability 화면(후순위) | `features/admin-and-roles.mdx`, `environment/observability.mdx` |
| B4FastAPI #94 | Stripe 외 결제 제공자(조사)       | 제공자 인터페이스를 도입하는 경우에만 `features/billing.mdx`    |
| B4FastAPI #87 | 위 항목들의 총괄                  | 페이지 없음, 모든 항목이 끝나면 이 파일 정리                    |

---

### 남은 결제 안내 메일 (#95)

이미 문서화됨: 환영 메일, 삭제 코드, 계정 삭제 안내, 구독 시작, 요금제 변경, 구독 해지(암호화 아웃박스, `features/email.mdx#lifecycle-email`).

**대상:** `docs/features/email.mdx`의 알림 표(`## Lifecycle email`), 새 이벤트가 필요하면 `docs/features/billing.mdx`의 웹훅 문단.

**추가할 행(구현된 것만):**

```mdx
| 결제 실패 | <verify: invoice.payment_failed, 첫 실패만?> |
| 갱신 예정 | <verify: invoice.upcoming, 갱신 N일 전> |
| 갱신 완료 | <verify: 갱신 시의 invoice.paid> |
```

"갱신과 결제 실패는 메일을 보내지 않습니다." 문장은 구현된 규칙으로 바꿉니다. 예: "중복 발송을 막기 위해 해당 이벤트의 Stripe 기본 고객 메일은 <verify: 켜짐/꺼짐>입니다."

**발송 실패 추적이 추가되면 넣을 섹션:**

```mdx
### 발송 실패

시도 횟수를 모두 소진한 알림은 <verify: 보관 위치>에 <verify: 항목>과 함께 남습니다. <verify: 역할>은 <verify: 화면 또는 명령>에서 이를 <verify: 조회/재처리>할 수 있습니다. 수신자 정보는 암호화된 상태로 72시간 보존 정책을 따릅니다.
```

**완료 시 확인:** 이벤트 목록, 이벤트별 중복 방지 키, Stripe 기본 메일과의 관계, 재시도와 실패 보관 방식, 매니저 권한(매니저가 접근하게 되면 `features/admin-and-roles.mdx` 권한표에 행 추가).

---

### 결제 생명주기 점검 (#93)

**대상:** `docs/features/billing.mdx`

점검 작업이므로 바뀐 동작만 매뉴얼에 반영합니다. 반영 가능성이 큰 곳:

- `## Subscription lifecycle`: 추가·삭제된 전이나 바뀐 적용 시점
- `## Errors`: 새로 생기거나 이름이 바뀐 오류 코드
- `## Webhooks and the subscription snapshot`: 필요한 이벤트, 순서 보장, 동기화 간격이나 배치 크기(`<verify: 300초, 50개>`)
- `## Operating notes`: 부분 스케줄 생성 등 새로운 운영자 정리 절차

B4FastAPI `notes/billing.md`에 상태 전이표가 생기면 Mermaid `stateDiagram-v2` 하나로 요약하고, 표를 복사하지 말고 가이드로 링크합니다.

**완료 시 확인:** `2a62b52` 대비 `notes/billing.md`, `services/billing.py` 변경을 비교하고 결제 페이지의 모든 숫자를 다시 확인합니다.

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

### Stripe 외 결제 제공자 (#94, 조사)

조사 자체로는 매뉴얼 변경이 없습니다. 제공자 인터페이스나 두 번째 제공자가 구현될 때만 갱신합니다.

- `docs/features/billing.mdx`: 소개와 `## Architecture` 다이어그램을 일반화(`BillingService` → `<verify: 제공자 인터페이스>` → Stripe / `<verify: 제공자>`)하고, Stripe 전용 섹션은 `## Stripe` 아래로 옮깁니다.
- `docs/environment/environment-variables.mdx`: 제공자 선택 변수와 새 제공자의 키
- `docs/environment/runtime-modes.mdx`: `STRIPE_ENABLED`가 일반 스위치로 바뀌면 기능 스위치 행

---

## 원본 불일치 메모

- B4FastAPI `Makefile`의 `celery-beat` 도움말은 아직 "no business schedules enabled by default"라고 하지만, Beat는 `lifecycle-mail-outbox`(60초)와 `billing-reconciliation`(300초)을 실행합니다. 매뉴얼은 실제 스케줄을 설명합니다. 도움말이 수정되면 `make-commands.mdx`를 다시 확인합니다.
