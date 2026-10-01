# 과제 평가 기준 정의 및 검증 명세서 (CRITERIA.md)

본 문서는 **SKT ALEPH 포트폴리오**의 **과제 10: AI와 함께 쓰는 첫 논문 — 가설에서 결론까지**(`condi 10-1` ~ `condi 10-7` · `T10-C01` ~ `T10-C51`), **과제 9: 나를 말하는 에이전트**(`condi 9-1` ~ `condi 9-6` · `T09-C01` ~ `T09-C26`), **과제 8: 내 소개 페이지에 패스키 달기**(`condi-7` ~ `condi-12` · `T08-C01` ~ `T08-C53`), 및 과제 1(`condi-1` ~ `condi-6` · `T01-C01` ~ `T01-C26`)에 대한 세부 정의, 소스코드 매핑, 검증 절차를 정리한 공식 명세서입니다.

---

## 📑 목차

1. [과제 10: AI와 함께 쓰는 첫 논문 (T10-C01 ~ T10-C51)](#과제-10-ai와-함께-쓰는-첫-논문)
   - [카드 1: 질문을 가설로 (T10-C01 ~ T10-C10)](#과제-10-카드-1-질문을-가설로)
   - [카드 2: 논거 세우기 & 선행연구 (T10-C11 ~ T10-C20)](#과제-10-카드-2-논거-세우기)
   - [카드 3: 실험 설계와 실행 (T10-C21 ~ T10-C30)](#과제-10-카드-3-실험-설계와-실행)
   - [카드 4: 결과 해석 및 한계 (T10-C31 ~ T10-C40)](#과제-10-카드-4-결과-해석)
   - [카드 5: 논문으로 묶기 & 산출물 (T10-C41 ~ T10-C51, condi 10-7)](#과제-10-카드-5-논문으로-묶기)
2. [과제 9: 나를 말하는 에이전트 (T09-C01 ~ T09-C26)](#과제-9-나를-말하는-에이전트)
3. [과제 8: 무암호화 패스키(WebAuthn) 비공개 금고 (T08-C01 ~ T08-C53)](#과제-8-무암호화-패스키webauthn-비공개-금고)
4. [과제 1: 나를 소개하는 한 페이지 (T01-C01 ~ T01-C26)](#과제-1-나를-소개하는-한-페이지)
5. [자동화 검증 명령어](#자동화-검증-명령어)

---

# 과제 10: AI와 함께 쓰는 첫 논문

- **핵심 목표**: 관심 있는 주제 하나를 골라, AI와 함께 가설을 세우고 직접 데이터를 모아 검증한 뒤 한 편의 논문(DOCX / MD) 및 재현 패키지(ZIP)로 완성합니다.
- **구현 파일 및 산출물**:
  - 공식 단일 논문 원고: [`PAPER.md`](PAPER.md)
  - 실제 논문 형식 DOCX 파일: [`public/downloads/skt-aleph-jinyeong-research-paper.docx`](public/downloads/skt-aleph-jinyeong-research-paper.docx)
  - 단일 ZIP 재현 패키지: [`public/downloads/research-reproduction-package.zip`](public/downloads/research-reproduction-package.zip)
  - 원자료 데이터셋: [`research/dataset/raw_experiment_data.csv`](research/dataset/raw_experiment_data.csv), [`raw_experiment_data.json`](research/dataset/raw_experiment_data.json)
  - 재현 및 생성 스크립트: [`research/scripts/run_experiment.py`](research/scripts/run_experiment.py), [`generate_docx_paper.py`](research/scripts/generate_docx_paper.py), [`build_reproduction_zip.py`](research/scripts/build_reproduction_zip.py)
  - 웹 인터랙티브 논문 시스템: [`src/components/ResearchPaper.tsx`](src/components/ResearchPaper.tsx), [`src/data/paperData.ts`](src/data/paperData.ts)

---

## 과제 10 카드 1: 질문을 가설로

- **기준 문서**: `condition/condi 10-1.txt`, `condition/condi 10-2.txt`
- **구현 매핑**: `PAPER.md` 1장 & `paperData.ts` `hypothesis` & `ResearchPaper.tsx` 탭 2

| ID          | 평가 항목                | 정의 및 준수 기준                                                                                                      | 소스코드 매핑                                       |
| :---------- | :----------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| **T10-C01** | 관심 분야 명시           | 관심 분야("다중 에이전트 협업 토폴로지 아키텍처 및 소프트웨어 결함 격리·단위 테스트 자동 검증")가 제출물에 적혀 있음   | `PAPER.md` 1.1절, `paperData.ts`                    |
| **T10-C02** | 후보 주제 3개 이상 검토  | 검토한 후보 주제 3개(유료 LLM API 토론 패치 성공률, 단일 70B 모델 추론 속도, Monte Carlo 난수 가상 오류율)가 적혀 있음 | `PAPER.md` 1.2절, `paperData.ts` `candidateTopics`  |
| **T10-C03** | 후보 주제 접은 이유 명시 | 검토 후 접은 3개 주제 각각에 대해 접은 이유가 구체적으로 적혀 있음                                                     | `PAPER.md` 1.2절, `candidateTopics[].reasonDropped` |
| **T10-C04** | 최종 가설 1문장 명시     | 최종 가설이 명확한 1문장으로 적혀 있음                                                                                 | `PAPER.md` 1.3절, `paperData.ts` `statement`        |
| **T10-C05** | 가설 내 영향 관계 명시   | 독립변수(협업 토폴로지 구조)가 종속변수(단위 테스트 통과율 +20%p 향상, 실행 지연 및 통신량 -40% 절감)에 영향을 줌      | `PAPER.md` 1.3절                                    |
| **T10-C06** | 측정 방법 명시           | 가설에 나오는 표현(통과율 %, 지연시간 ms, 전송 페이로드 B)을 어떻게 측정하는지 적혀 있음                               | `PAPER.md` 2.2절, `paperData.ts`                    |
| **T10-C07** | 기각 기준 명시           | 가설이 틀렸다면 어떤 결과(통과율 향상폭 20%p 미만 또는 오버헤드 절감 40% 미만)가 나올지가 적혀 있음                    | `PAPER.md` 2.3절, `falsificationCriteria`           |
| **T10-C08** | 수집 기간 및 범위 명시   | 데이터를 모은 기간(2026.09.28 ~ 10.01)과 표본 범위(N=50개 알고리즘 과제, R=3회 반복 실증)가 적혀 있음                  | `PAPER.md` 2.2절, `dataCollectionPeriod`            |
| **T10-C09** | AI와 가설 다듬은 과정    | AI에게 질문을 던지고 3대 질문을 통해 좁혀간 대화 과정이 적혀 있음                                                      | `PAPER.md` 1.4절, `aiRefinementProcess`             |
| **T10-C10** | 최종 가설 선정 이유      | 왜 이 가설을 최종으로 골랐는지가 적혀 있음 (외부 API/난수 없이 로컬 런타임에서 100% 동일 재현 가능)                    | `PAPER.md` 1.4절, `finalSelectionReason`            |

---

## 과제 10 카드 2: 논거 세우기

- **기준 문서**: `condition/condi 10-3.txt`
- **구현 매핑**: `PAPER.md` 5장 & `paperData.ts` `literature` & `ResearchPaper.tsx` 탭 3

| ID          | 평가 항목                   | 정의 및 준수 기준                                                         | 소스코드 매핑                             |
| :---------- | :-------------------------- | :------------------------------------------------------------------------ | :---------------------------------------- |
| **T10-C11** | 참고문헌 목록 수록          | 참고문헌 목록(MetaGPT, AutoGen, Multiagent Debate 등 5편)이 제출물에 있음 | `PAPER.md` 5.1절, `verifiedReferences`    |
| **T10-C12** | 저자 및 연도 명시           | 각 문헌의 저자와 발표 연도가 빠짐없이 적혀 있음                           | `verifiedReferences[].authors`, `.year`   |
| **T10-C13** | 출처 명시                   | 각 문헌의 출처가 학술지/기관/URL(DOI) 가운데 하나로 적혀 있음             | `verifiedReferences[].source`, `.url`     |
| **T10-C14** | 가설 뒷받침 1줄 명시        | 각 문헌이 가설의 어느 부분을 뒷받침하는지 1줄씩 적혀 있음                 | `verifiedReferences[].supportsHypothesis` |
| **T10-C15** | 제외 문헌 및 사유 기록      | AI 할루시네이션 가짜 문헌 3건을 적발하고 왜 뺐는지 기록되어 있음          | `PAPER.md` 5.2절, `hallucinationFiltered` |
| **T10-C16** | 실험/데이터 검증 연구 포함  | 실험이나 데이터로 검증된 실증 연구(MetaGPT ICLR 2024 등)가 포함되어 있음  | `verifiedReferences`                      |
| **T10-C17** | 기존 사실 vs 신규 주장 구분 | 이미 알려진 사실과 본 연구가 새로 주장하는 것이 명확히 구분되어 있음      | `PAPER.md` 1장/4장, `knownVsNovelClaim`   |
| **T10-C18** | 인용 문헌 일치              | 본문에서 인용한 문헌이 참고문헌 목록에 모두 있음                          | `PAPER.md` 본문 및 5장 전수 대조          |
| **T10-C19** | 참고문헌 표기 일관성        | 참고문헌 표기 형식이 APA 표준 스타일로 일관됨                             | `PAPER.md` 5.1절 APA 스타일               |
| **T10-C20** | 출처 확인 방법 명시         | 출처를 확인한 방법(Google Scholar, DBLP, Crossref DOI, arXiv)이 적혀 있음 | `PAPER.md` 5.3절, `factCheckMethod`       |

---

## 과제 10 카드 3: 실험 설계와 실행

- **기준 문서**: `condition/condi 10-4.txt`
- **구현 매핑**: `PAPER.md` 2장 & `research/dataset/` & `research/scripts/` & `ResearchPaper.tsx` 탭 2

| ID          | 평가 항목                  | 정의 및 준수 기준                                                                       | 소스코드 매핑                               |
| :---------- | :------------------------- | :-------------------------------------------------------------------------------------- | :------------------------------------------ |
| **T10-C21** | 실험 설계 표 수록          | 실험 설계가 4개 토폴로지 비교 표 형식으로 제출물에 있음                                 | `PAPER.md` 2.1절 표, `designTable`          |
| **T10-C22** | 조작 변인과 통제 변인 구분 | 바꾼 조건(토폴로지 구조)과 고정한 조건(50개 과제, 동일 런타임, 동일 assert)이 명확 구분 | `designTable` (조작/통제 구분)              |
| **T10-C23** | 표본 수 / 반복 횟수 명시   | 반복 횟수(R=3)와 표본 수(N=50개 과제, 총 600회 파이프라인 구동)가 명시되어 있음         | `PAPER.md` 2.2절, `sampleCount`             |
| **T10-C24** | 측정한 값 명시             | 측정한 값(단위 테스트 통과율 %, 실행 지연시간 ms, 전송 바이트 B, 결함 교정 건수) 명시   | `PAPER.md` 2.2절, `metrics`                 |
| **T10-C25** | 원자료 파일 포함           | 원자료 파일(CSV / JSON)이 제출물에 포함되어 있음                                        | `research/dataset/raw_experiment_data.*`    |
| **T10-C26** | 표본 건수 일치             | 원자료 건수가 설계에 적힌 표본 수와 정확히 일치함 (50건 일치)                           | `raw_experiment_data.json` 50건 일치        |
| **T10-C27** | 공개 데이터 출처/날짜      | 자체 수집 및 공개 스펙 출처와 생성 날짜가 적혀 있음                                     | `paperData.ts` `meta.dateRange`             |
| **T10-C28** | 실행 스크립트 포함         | 실행 절차 및 재현 스크립트가 제출물에 포함되어 있음                                     | `research/scripts/run_experiment.py`        |
| **T10-C29** | 짧은 확인 방법 명시        | 결과를 다시 확인할 수 있는 4줄 확인 방법이 적혀 있음                                    | `PAPER.md` 6.1절, `quickVerification4Lines` |
| **T10-C30** | 설계 변경 내역 기록        | 도중 설계 변경(3회 반복 측정 도입 및 Pandas 통계 파이프라인 추가) 내역이 적혀 있음      | `PAPER.md` 2.1절 및 3.3절                   |

---

## 과제 10 카드 4: 결과 해석

- **기준 문서**: `condition/condi 10-5.txt`
- **구현 매핑**: `PAPER.md` 3장/4장 & `paperData.ts` `results` & `ResearchPaper.tsx` 탭 2/4 & `ResearchCharts.tsx`

| ID          | 평가 항목               | 정의 및 준수 기준                                                                             | 소스코드 매핑                            |
| :---------- | :---------------------- | :-------------------------------------------------------------------------------------------- | :--------------------------------------- |
| **T10-C31** | 결과 표/통계 정리       | 결과가 통계 표 및 그래프 형태로 정리되어 있음                                                 | `ResearchPaper.tsx` 및 `ResearchCharts`  |
| **T10-C32** | 가설 일치/불일치 구분   | 가설대로 나온 부분(통과율 100%, 지연/통신량 절감)과 순차형 취약점(통과율 30%)이 구분되어 있음 | `results.matchedCases`, `unmatchedCases` |
| **T10-C33** | 가설 지지 여부 판단     | 데이터가 가설을 뒷받침하는지에 대한 판단([최종 가설 채택])이 명시되어 있음                    | `PAPER.md` 3.2절, `results.summary`      |
| **T10-C34** | 판단 근거 원자료 수치   | 판단 근거가 원자료의 어느 값(순차 30% vs 조율 100%, 토론 0.0194ms vs 0.0057ms)인지 드러남     | `PAPER.md` 3.1절                         |
| **T10-C35** | 다른 결과 빠짐없이 수록 | 가설과 다른 예외 결과(순차형 35건 전파 결함, 계층형 8건 워커 폴백)가 누락 없이 실려 있음      | `PAPER.md` 3.2절, `unmatchedCases`       |
| **T10-C36** | 다르게 나온 이유 검토   | 다르게 나온 이유(단방향 파이프라인의 상향 피드백 부재 및 얕은 승인)가 검토되어 있음           | `unmatchedCases.analyzedReason`          |
| **T10-C37** | 가설 고친 과정 기록     | 초기 가설과 실제 실험 후 정밀화된 가설 전/후가 기록되어 있음                                  | `PAPER.md` 1.3절/4.1절                   |
| **T10-C38** | 1문단 이상 최종 결론    | 최종 결론이 1문단 이상으로 충실히 적혀 있음                                                   | `PAPER.md` 4.1절, `results.conclusion`   |
| **T10-C39** | 연구의 한계 명시        | 이 연구로 말할 수 없는 3가지 한계(알고리즘 스케일링, 인메모리 프로세스, 고정 토폴로지) 명시   | `PAPER.md` 4.2절, `results.limitations`  |
| **T10-C40** | 원자료 기반 결론        | 결론이 원자료에 없는 과장된 주장을 하지 않음                                                  | `PAPER.md` 4.1절 전수 검증               |

---

## 과제 10 카드 5: 논문으로 묶기 및 제출 산출물

- **기준 문서**: `condition/condi 10-6.txt`, `condition/condi 10-7.txt`
- **구현 매핑**: `PAPER.md` & `public/downloads/` & `ResearchPaper.tsx` 탭 4 & `Hero.tsx`

| ID             | 평가 항목               | 정의 및 준수 기준                                                      | 소스코드 매핑                                             |
| :------------- | :---------------------- | :--------------------------------------------------------------------- | :-------------------------------------------------------- |
| **T10-C41**    | 표지 필수 정보          | 제목, 작성자(`장진영`), 작성일(`2026.10.01`)이 표지에 있음             | `PAPER.md` 표지, `docx` 헤더, UI                          |
| **T10-C42**    | 초록(Abstract) 수록     | 초록이 논문 맨 앞에 있음                                               | `PAPER.md` 초록 섹션, `docx` 요약 박스                    |
| **T10-C43**    | 초록 필수 요소 포함     | 문제의식, 방법, 결과가 모두 초록에 들어 있음                           | `PAPER.md` 요약 텍스트                                    |
| **T10-C44**    | IMRaD 본문 순서 준수    | 본문이 서론·방법·결과·논의 순서로 구성됨                               | `PAPER.md` 1장~4장 순서 준수                              |
| **T10-C45**    | 참고문헌 위치 준수      | 참고문헌 목록이 본문 뒤에 배치되어 있음                                | `PAPER.md` 5장 참고문헌                                   |
| **T10-C46**    | 재현 방법 수록          | 재현 방법이 제출물에 명확히 적혀 있음                                  | `PAPER.md` 6.1절, `research/README.md`                    |
| **T10-C47**    | 원자료/스크립트 포함    | 원자료와 실행 절차가 제출 파일 안에 함께 있음                          | `research/dataset/`, `research/scripts/`                  |
| **T10-C48**    | 1개 ZIP 패키지 제공     | 제출물이 1개의 ZIP 파일(`research-reproduction-package.zip`)임         | `public/downloads/research-reproduction-package.zip`      |
| **T10-C49**    | AI 판단 3줄 구분 기술   | AI에게 맡긴 일, 직접 판단한 일, 거절한 일이 3줄로 분리되어 있음        | `PAPER.md` 6.2절, `aiAndJudgment3Lines`                   |
| **T10-C50**    | 자리표시자 0건          | 미완성 표시나 자리표시자가 제출물에 없음                               | 전수 마크다운/코드 검증 통과                              |
| **T10-C51**    | 무로그인 시크릿 웹 열람 | 시크릿 창에서 계정 생성/로그인/인증 없이 즉시 열림                     | Vercel 정적 웹 배포 100%                                  |
| **condi 10-7** | **실제 DOCX 파일 제공** | 사용자가 실제 논문 형식인 DOCX 파일로 다운로드하여 읽을 수 있도록 지원 | `public/downloads/skt-aleph-jinyeong-research-paper.docx` |

---

---

# 과제 8: 무암호화 패스키(WebAuthn) 비공개 금고

- **기준 조건 문서**: `condition/condi-7.txt` ~ `condition/condi-12.txt`
- **구현 파일**: [`src/components/PasskeyVault.tsx`](src/components/PasskeyVault.tsx), [`src/lib/passkey/server.ts`](src/lib/passkey/server.ts), [`src/lib/passkey/crypto.ts`](src/lib/passkey/crypto.ts), [`src/lib/passkey/client.ts`](src/lib/passkey/client.ts)

| ID          | 평가 항목                  | 정의 및 준수 기준                                               | 소스코드 매핑                                |
| :---------- | :------------------------- | :-------------------------------------------------------------- | :------------------------------------------- |
| **T08-C13** | 공개/비공개 영역 시각 분리 | 공개 소개 페이지와 패스키 비공개 구역의 경계가 명확히 분리됨    | `PasskeyVault.tsx` 독립 섹션 보더 및 락 배지 |
| **T08-C14** | 비공개 항목 3개 이상       | 비공개 금고 내 4개 모의 비공개 데이터(기획서, 취업메모 등) 구성 | `server.ts` `privateData`                    |
| **T08-C15** | 미로그인 시 비공개 미노출  | 패스키 인증 전에는 비공개 데이터 본문이 렌더링되지 않음         | `PasskeyVault.tsx` `authToken ? ... : ...`   |
| **T08-C16** | 비인가 요청 시 거절        | 토큰 없이 직접 API 호출 시 즉시 거절됨                          | `server.ts` `getPrivateData(token)`          |
| **T08-C17** | 거절 응답 401/403          | 인증 토큰 미보유 시 401, IDOR 권한 불일치 시 403 반환           | `server.ts` HTTP 401 / 403 반환              |
| **T08-C18** | 초기 HTML 비공개 미포함    | 초기 번들에 비공개 텍스트가 하드코딩되지 않음                   | 클라이언트 인증 후 API 동적 fetch            |
| **T08-C19** | 서버 챌린지 생성/보관      | 등록 시 32바이트 고유 챌린지 생성 및 보관                       | `server.ts` `createRegisterChallenge`        |
| **T08-C21** | 서버에 공개키만 저장       | 서버 DB에 오직 공개키(ECDSA P-256)만 저장됨                     | `server.ts` `verifyRegister()`               |
| **T08-C23** | 개인키 서버 미전송 보장    | TPM/Secure Enclave 생성 개인키는 서버로 절대 안 나감            | Web Crypto / WebAuthn 분리 설계              |
| **T08-C27** | 로그인 시 새 챌린지 생성   | 매 로그인마다 새로운 1회용 챌린지 발급                          | `server.ts` `createLoginChallenge`           |
| **T08-C31** | 쓴 챌린지 재사용 차단      | 1회 소모된 챌린지로 재요청 시 401 차단 (Replay 방어)            | `server.ts` `challengeRecord.used` 체크      |
| **T08-C35** | 비밀번호 입력 필드 0건     | 전체 서비스 어디에도 `type="password"` 입력창 없음              | 전 컴포넌트 코드 감사 통과 (0건)             |
| **T08-C37** | 타 계정 접근(IDOR) 시 403  | A계정 토큰으로 B계정 데이터 조회 시 403 Forbidden               | `server.ts` `getPrivateData` IDOR 검증       |
| **T08-C42** | 1개 계정 다중 패스키       | 주 기기와 백업 기기 등 2개 이상 패스키 등록 지원                | `server.ts` `user.credentials[]` 다중 배열   |
| **T08-C44** | 1개 삭제 후 잔여키 로그인  | 1개 패스키 삭제 후 남은 패스키로 정상 로그인 보장               | `server.ts` `deletePasskey()`                |
| **T08-C47** | 설명서 6항목 분리 기술     | ① 무엇으로 ~ ⑥ 아직 못 막은 것 6대 항목 정리                    | README.md 과제 8 제출서 섹션 4               |

---

# 과제 1: 나를 소개하는 한 페이지

- **구현 파일**: [`src/components/About.tsx`](src/components/About.tsx), [`src/components/Hero.tsx`](src/components/Hero.tsx), [`src/components/Strengths.tsx`](src/components/Strengths.tsx)

| ID          | 평가 항목              | 정의 및 준수 기준                                        | 소스코드 매핑                            |
| :---------- | :--------------------- | :------------------------------------------------------- | :--------------------------------------- |
| **T01-C01** | 무로그인 공개 화면     | 인증 장벽 없이 브라우저 시크릿 창에서 즉시 열람          | Vite 정적 웹 배포                        |
| **T01-C03** | 대상과 목적 1문장 명시 | 소개 상단에 대상과 목적을 정의하는 1문장 명시            | `About.tsx` 상단 블록 인용문             |
| **T01-C04** | 공개 정보 3개 이상     | 실제 프로젝트 데모, 직무 기술 스택, STAR 경험 명시       | `About.tsx` 공개 정보 점검표 (3건)       |
| **T01-C05** | 비공개 정보 3개 이상   | 주민번호/상세주소, 개인 연락처, 보안 키 비공개 명시      | `About.tsx` 비공개 정보 점검표 (3건)     |
| **T01-C06** | STAR 기반 상황 기술    | 강점별 문제가 발생했던 배경이나 협업 상황 기술           | `Strengths.tsx` STAR 모델 카드           |
| **T01-C10** | 1366×768 첫 화면 노출  | 첫 화면(Above the Fold)에 소개·활동·근거 3요소 동시 노출 | `Hero.tsx` 3분할 퀵 프리뷰 카드          |
| **T01-C14** | Tab 이동 및 초점 표시  | 건너뛰기 링크(Skip to content) 및 대화형 요소 초점 링    | `Header.tsx` Skip Link + `focus-visible` |
| **T01-C16** | 텍스트 명암비 4.5:1    | 흰 배경 기준 WCAG AA 4.5:1 명암비 준수                   | `text-neutral-500` 이상 전수 적용        |
| **T01-C22** | 움직임 줄이기/끄기     | 헤더 애니메이션 토글 및 prefers-reduced-motion 연동      | `Header.tsx` 애니메이션 토글 버튼        |

---

## 자동화 검증 명령어

```bash
# 1. Prettier 코드 스타일 자동 정렬
npm run format

# 2. Oxlint 초고속 정적 품질 분석 (경고/오류 0건)
npm run lint

# 3. TypeScript 컴파일 & Vite 프로덕션 빌드 (오류 0건)
npm run build
```
