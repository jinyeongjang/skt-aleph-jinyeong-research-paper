# 🎓 SKT ALEPH 장진영 연구 논문 & 포트폴리오 (Research Paper)

> **SKT ALEPH 1기 인공지능 엔지니어링 과정**  
> 알고리즘 문제 해결 및 단위 테스트 검증에서 다중 에이전트 협업 토폴로지(순차형 vs 중앙 조율형 vs 토론형 vs 계층형)의 테스트 통과율 및 실행 지연시간 비교 실증을 다룬 **연구 논문(과제 10)** 및 학술 DOCX / 재현 패키지(ZIP) 인터랙티브 웹 시스템입니다.

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-black?style=flat&logo=vercel)](https://skt-aleph-jinyeong-research-paper.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github)](https://github.com/jinyeongjang/skt-aleph-jinyeong-research-paper)
[![Research Paper](https://img.shields.io/badge/Manuscript-PAPER.md-blue?style=flat&logo=markdown)](PAPER.md)
[![DOCX Download](https://img.shields.io/badge/Download-DOCX%20Paper-blue?style=flat&logo=microsoftword)](public/downloads/skt-aleph-jinyeong-research-paper.docx)
[![ZIP Package](https://img.shields.io/badge/Download-Reproduction%20ZIP-orange?style=flat)](public/downloads/research-reproduction-package.zip)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![Oxlint](https://img.shields.io/badge/Oxlint-Passing-00C7B7?style=flat)](https://oxc.rs)

---

## 📑 목차 (Table of Contents)

1. [🌟 핵심 특징 (Key Highlights)](#-핵심-특징-key-highlights)
2. [📂 프로젝트 구조 및 컴포넌트 아키텍처](#-프로젝트-구조-및-컴포넌트-아키텍처)
3. [🎓 과제 10: AI와 함께 쓰는 첫 논문 — 제출서 (Submission)](#-과제-10-ai와-함께-쓰는-첫-논문--제출서-submission)
   - [1. 제출 링크 및 논문 산출물](#1-제출-링크-및-논문-산출물)
   - [2. 재현·통과 확인 4가지 (T10-C29, T10-C46)](#2-재현통과-확인-4가지-t10-c29-t10-c46)
   - [3. AI와 나의 판단 3줄 (T10-C49)](#3-ai와-나의-판단-3줄-t10-c49)
   - [4. 가설 도출 및 탈락 주제 3개 (T10-C01 ~ T10-C10)](#4-가설-도출-및-탈락-주제-3개-t10-c01--t10-c10)
   - [5. 선행연구 및 AI 할루시네이션 필터링 기록 (T10-C11 ~ T10-C20)](#5-선행연구-및-ai-할루시네이션-필터링-기록-t10-c11--t10-c20)
   - [6. 실험 설계와 원자료 결과 요약 (T10-C21 ~ T10-C40)](#6-실험-설계와-원자료-결과-요약-t10-c21--t10-c40)
   - [7. 과제 10 완주 체크리스트 (T10-C01 ~ T10-C51)](#7-과제-10-완주-체크리스트-t10-c01--t10-c51)
4. [🤖 과제 9: 나를 말하는 에이전트](#-과제-9-나를-말하는-에이전트)
5. [💻 로컬 개발 및 품질 검증 스크립트](#-로컬-개발-및-품질-검증-스크립트)

---

## 🌟 핵심 특징 (Key Highlights)

- **AI와 함께 쓰는 첫 논문 (과제 10 · T10-C01 ~ T10-C51, condi 10-7)**:
  - **IMRaD 표준 학술 논문 전문 뷰어**: 표지, 10줄 요약 초록, 서론, 연구 방법, 실험 결과, 논의, 참고문헌 전문을 지원하는 모던 논문 리더
  - **실제 DOCX 파일 자동 생성 및 다운로드 (condi 10-7)**: `python-docx` 기반 표준 학술 규격(여백 2.54cm, 초록 박스, IMRaD 다단 서식)의 DOCX 파일 즉시 다운로드 제공
  - **단일 ZIP 재현 패키지 (T10-C48)**: 논문 원고(`PAPER.md`, `.docx`), 원자료(`JSON`, `CSV`), 재현 스크립트(`run_experiment.py`, `analyze_with_pandas.py`) 일체를 단일 ZIP 파일로 패키징
  - **50개 과제 실측 벤치마크 및 Pandas 기술 통계 분석**: 3회 반복 실증(R=3, 총 600회 실행) 기반 중앙 조율형(+70.0%p 통과율 향상) 및 토론형 대비 지연시간 70.62% 단축, 통신량 74.02% 절감 실증
  - **학술 논문 규격 멀티 패널 통계 차트 (Figure 2, Panel a~e)**: 오차 막대($\pm 1\sigma$), 가설 기준선, 7대 도메인별 세분화 차트 및 공식 캡션 제공
  - **AI 할루시네이션 가짜 문헌 적발 및 필터링 (T10-C15)**: AI가 제안한 가짜 논문 3건을 실물 DOI/Crossref 대조 후 적발·제외한 내역 투명 공개
- **반응형 모던 레이아웃 & 웹 접근성**:
  - 모노크롬 & 은은한 글래스모피즘 스타일 및 상단 헤더 고정
  - 다크/라이트 모드 테마 전환 및 `prefers-reduced-motion` 모션 감속 지원
  - 시크릿 창 무로그인 즉시 열람 및 WCAG AA 4.5:1 이상 명암비 준수

---

## 📂 프로젝트 구조 및 컴포넌트 아키텍처

```text
skt-aleph-jinyeong-research-paper/
├── condition/                  # 과제 평가 기준 공식 명세 텍스트 (condi 10-1 ~ 10-7)
├── public/                     # 정적 웹 에셋 및 다운로드 산출물
│   └── downloads/
│       ├── skt-aleph-jinyeong-research-paper.docx  # 📄 학술 표준 DOCX 논문 파일
│       └── research-reproduction-package.zip      # 📦 단일 ZIP 재현 패키지
├── research/                   # 연구 원자료 데이터셋 및 자동화 스크립트
│   ├── dataset/
│   │   ├── raw_experiment_data.csv                # 원자료 50개 과제 3회 반복 실측 CSV
│   │   ├── raw_experiment_data.json               # 원자료 50개 과제 실측 JSON
│   │   ├── pandas_summary_statistics.json         # Pandas 기술 통계 요약 데이터
│   │   └── pandas_category_breakdown.csv          # 7대 도메인별 세분화 CSV
│   ├── scripts/
│   │   ├── run_experiment.py                      # 3회 반복 재현 및 통계 계산 스크립트
│   │   ├── analyze_with_pandas.py                 # Pandas 심층 기술 통계 분석 스크립트
│   │   ├── generate_docx_paper.py                 # DOCX 생성 파이썬 스크립트
│   │   └── build_reproduction_zip.py              # ZIP 패키징 빌드 스크립트
│   └── README.md                                  # 재현 가이드 문서
├── src/
│   ├── components/
│   │   ├── Header.tsx          # 상단 고정 헤더, 네비게이션 앵커, 테마/모션 토글
│   │   ├── Hero.tsx            # 첫 화면 인트로 및 핵심 4대 지표 퀵 CTA
│   │   ├── ResearchPaper.tsx   # 🎓 과제 10 논문 IMRaD 리더, 가설 랩, 팩트체크, 재현 4-탭
│   │   ├── ResearchCharts.tsx  # 📊 Figure 2 학술 멀티 패널 실측 통계 차트 (Panel a~e)
│   │   ├── RitualAgent.tsx     # 🤖 과제 9 리추얼 기록 뷰어 & 서사 컴포넌트
│   │   ├── Projects.tsx        # 프로젝트 갤러리 섹션
│   │   └── Footer.tsx          # 푸터 및 저작권 명시
│   ├── data/
│   │   ├── paperData.ts        # 📊 과제 10 논문 메타데이터, 가설, 원자료, 선행연구 데이터
│   │   ├── projectsData.ts     # 과제 1/8/9/10 프로젝트 데이터
│   │   └── ritualData.ts       # 리추얼 데이터 모듈
│   ├── lib/
│   │   └── utils.ts            # 유틸리티 함수
│   ├── App.tsx                 # 최상위 레이아웃
│   ├── index.css               # Tailwind CSS v4 스타일시트
│   └── main.tsx                # React 애플리케이션 진입점
├── CRITERIA.md                 # T10-C01~C51 + T09-C01~C26 + T08-C01~C53 평가 기준 공식 명세서
├── GEMINI.md                   # 프로젝트 품질 표준 및 AI 가이드라인 (Rules Specification)
├── PAPER.md                    # 📄 과제 10 공식 단일 논문 원고 (Markdown 형식)
├── package.json                # 의존성 및 빌드 스크립트 정의
├── vite.config.ts              # Vite 설정
└── README.md                   # 프로젝트 종합 포트폴리오 및 과제 10 제출서
```

---

## 🎓 과제 10: AI와 함께 쓰는 첫 논문 — 제출서 (Submission)

### 1. 제출 링크 및 논문 산출물

- **결과물 주소 (무로그인 공개 웹 · T10-C51)**: [https://skt-aleph-jinyeong-research-paper.vercel.app](https://skt-aleph-jinyeong-research-paper.vercel.app)
- **소스 주소 (GitHub 공개 레포지토리)**: [https://github.com/jinyeongjang/skt-aleph-jinyeong-research-paper](https://github.com/jinyeongjang/skt-aleph-jinyeong-research-paper)
- **공식 논문 원고 (단일 MD 파일 · T10-C41 ~ T10-C45)**: [`PAPER.md`](PAPER.md)
- **실제 DOCX 파일 (다운로드 지원 · condi 10-7)**: [`public/downloads/skt-aleph-jinyeong-research-paper.docx`](public/downloads/skt-aleph-jinyeong-research-paper.docx)
- **단일 ZIP 재현 패키지 (T10-C48)**: [`public/downloads/research-reproduction-package.zip`](public/downloads/research-reproduction-package.zip)

---

### 2. 재현·통과 확인 4가지 (T10-C29, T10-C46)

1. **① 어디서 확인하나요**:
   - 공식 논문 원고 [`PAPER.md`](PAPER.md) 또는 배포 웹사이트([https://skt-aleph-jinyeong-research-paper.vercel.app](https://skt-aleph-jinyeong-research-paper.vercel.app)) 상단의 `#research-paper` 섹션(4개 탭), `#charts` 학술 통계 도표 및 [DOCX 논문 다운로드] / [재현 ZIP 패키지] 버튼에서 확인합니다.
2. **② 무엇을 하나요 (3단계 이내)**:
   - **1단계**: [DOCX 논문 다운로드] 버튼을 클릭하여 `skt-aleph-jinyeong-research-paper.docx` 원고를 다운로드하거나 웹 탭 1에서 IMRaD 전문(표지, 초록, 서론, 방법, 결과, 논의, 참고문헌)을 읽습니다.
   - **2단계**: [가설 랩 & 데이터셋] 탭 및 `#charts` 섹션에서 4대 토폴로지 비교 표, Figure 2 멀티 패널 차트(Panel a~e), Pandas 기술 통계 및 N=50 원자료 데이터 테이블을 확인합니다.
   - **3단계**: [선행연구 & 팩트체크] 탭에서 공인 문헌 5편과 AI 할루시네이션 가짜 문헌 3건 적발 내역을 확인하거나, 터미널에서 `python research/scripts/run_experiment.py`를 실행합니다.
3. **③ 무엇이 보이면 통과**:
   - 논문 표지에 저자(`장진영`)가 명시되어 있고, 1문장 가설, IMRaD 본문, 공인 참고문헌(APA), 제외된 가짜 문헌 3건, 표본 수 N=50 원자료 통계치(순차 30.00% vs 조율 100.00%, 지연시간 70.62% 단축, 통신량 74.02% 절감), DOCX 파일 및 1개의 ZIP 파일이 정상적으로 다운로드/열람되면 통과입니다.
4. **④ 안 될 때**:
   - 웹 접속 시 흰 화면이나 404 오류가 발생하거나, DOCX/ZIP 다운로드 링크가 깨지거나, 비밀번호 입력창이 나타나 접근이 차단되는 경우입니다.

---

### 3. AI와 나의 판단 3줄 (T10-C49)

1. **① AI에게 맡긴 일**:
   - 50개 알고리즘 단위 테스트 벤치마크 테스트 케이스 및 각 토폴로지별 에이전트 인터페이스 코드 초안 작성, APA 참고문헌 서식 정렬 자동화
2. **② 학생이 직접 판단한 일**:
   - 외부 유료 API나 확률적 난수 추정(`random.random()`)을 전면 배제하고, 실제 파이썬 런타임 단위 테스트(`assert`)와 `time.perf_counter()`를 통해 100% 정직한 로컬 실측 연구로 전환한 것
3. **③ AI 제안을 따르지 않은 일**:
   - AI가 추천한 가상의 최신 학술지 논문 3편을 전수 팩트체크하여 완전한 할루시네이션임을 밝혀내고 전면 퇴출한 뒤 실제 ICLR, ICML 공인 논문으로 교체한 것

---

### 4. 가설 도출 및 탈락 주제 3개 (T10-C01 ~ T10-C10)

- **관심 분야:** 다중 에이전트 협업 토폴로지 아키텍처 및 소프트웨어 결함 격리·단위 테스트 자동 검증
- **검토 후 접은 주제 3개 및 이유:**
  1. _유료 LLM API(GPT-4o) 다중 에이전트 토론의 소프트웨어 패치 성공률 실측_: 외부 API 과금이 지속 발생하며 서버 혼잡도에 따라 지연시간 측정 오차가 커 통제 변인 고정이 어려워 제외함.
  2. _단일 대형 모델(70B) 로컬 서빙과 경량 모델 앙상블의 추론 속도 비교_: 48GB 이상의 고가 GPU 인프라가 강제되어 일반 PC 환경에서 동일한 재현 신뢰성을 보장하기 어려워 접음.
  3. _난수 기반 확률 모델(Monte Carlo)을 이용한 가상 다중 에이전트 오류율 예측_: 실제 코드를 실행하고 테스트하는 것이 아니라 `random.random()` 가상 난수에 의존하므로 실제 소프트웨어 결함과 연산 지연시간을 대변하지 못해 최종 탈락시킴.
- **최종 1문장 가설 (T10-C04):**  
  `"알고리즘 문제 해결 및 단위 테스트 검증 환경에서, 단순 순차형(Linear Pipeline) 토폴로지 대비 중앙 조율형(Star/Hub-and-Spoke) 토폴로지는 엣지 케이스 단위 테스트 피드백 루프를 통해 테스트 통과율을 20%p 이상 향상시키면서도, 완전 연결 토론형(Full Mesh) 대비 실행 지연시간 및 통신 오버헤드를 40% 이상 절감하여 최적의 효율성을 달성한다."`

---

### 5. 선행연구 및 AI 할루시네이션 필터링 기록 (T10-C11 ~ T10-C20)

- **공인 참고문헌 (APA Style):**
  1. Hong, S., et al. (2024). _MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework_. ICLR 2024.
  2. Wu, Q., et al. (2023). _AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation_. arXiv:2308.08155.
  3. Du, Y., et al. (2023). _Improving Factuality and Reasoning in Language Models through Multiagent Debate_. ICML 2023.
  4. Wang, L., et al. (2024). _A Survey on Large Language Model based Autonomous Agents_. Frontiers of Computer Science.
  5. Talebirad, Y., & Nadiri, A. (2023). _Multi-Agent Collaboration: Harnessing the Power of Intelligent LLM-based Agents_. arXiv:2306.03314.
- **AI 할루시네이션 가짜 문헌 적발 및 필터링 내역 (T10-C15):**
  1. `[제외] Optimal Network Topologies for Autonomous Multi-Agent Reasoning Systems (2024)`: 실재하지 않는 가상의 저널(IEEE Transactions on AI Agents) 도용으로 확인되어 제외.
  2. `[제외] Token Economics and Graph Efficiency in Large Language Model Swarms (2023)`: 인용 DOI가 무관한 1998년 생물학 논문으로 리다이렉트되어 즉시 폐기.
  3. `[제외] Hierarchical Hub-and-Spoke Architectures for Zero-Error LLM Orchestration (2024)`: 저널 색인 검색 결과 해당 저자 및 제목의 아티클이 전무하여 AI 창작 가짜 문헌으로 확정하고 제외.

---

### 6. 실험 설계와 원자료 결과 요약 (T10-C21 ~ T10-C40)

- **실험 설계 (N=50, R=3회 반복, 총 600회 실행):**
  - **조작 변인:** 다중 에이전트 협업 토폴로지 (순차형 vs 중앙 조율형 vs 토론형 vs 계층형)
  - **통제 변인:** 동일 50개 실제 알고리즘 문제, 동일 Python 3.12 런타임 환경, 동일 `assert` 채점기
- **결과 통계 지표:**
  - 순차형 통과율: **30.00%** ➔ 중앙 조율형 통과율: **100.00%** (**+70.00%p 향상, 목표 20%p 초과 달성**)
  - 완전 연결 토론형 지연시간: **0.0194ms** ➔ 중앙 조율형 지연시간: **0.0057ms** (**-70.62% 단축, 목표 40% 초과 달성**)
  - 완전 연결 토론형 전송량: **878.0B** ➔ 중앙 조율형 전송량: **228.1B** (**-74.02% 절감, 목표 40% 초과 달성**)
  - **[최종 가설 채택 (Hypothesis Supported)]**
- **연구의 한계 3가지 (T10-C39):**
  1. 50개 표준 알고리즘(배열, 문자열, DP 등)을 대상으로 하였으므로 대규모 레거시 엔터프라이즈 코드베이스로의 일반화에 추가 연구 필요.
  2. 단일 프로세스 인메모리 함수 호출 통신 환경으로 실제 분산 네트워크 소켓 상의 지연은 추가 고려 필요.
  3. 런타임 실패에 따라 토폴로지가 자율 승격(Escalation)되는 동적 가변 토폴로지는 본 연구 범위에서 제외됨.

---

### 7. 과제 10 완주 체크리스트 (T10-C01 ~ T10-C51)

- [x] **관심 분야와 접은 후보 주제 3개 및 접은 이유를 명시했습니다 (T10-C01 ~ T10-C03)**
- [x] **독립변수와 종속변수가 드러난 1문장 가설을 작성했습니다 (T10-C04, T10-C05)**
- [x] **공인 참고문헌 목록(APA)과 가설 뒷받침 1줄을 수록했습니다 (T10-C11 ~ T10-C14)**
- [x] **AI 할루시네이션 가짜 문헌 3건을 직접 적발하고 제외 사유를 기록했습니다 (T10-C15)**
- [x] **조작 변인과 통제 변인이 분리된 실험 설계표와 표본 N=50(R=3회)을 명시했습니다 (T10-C21 ~ T10-C24)**
- [x] **원자료 파일(CSV/JSON)과 실행 재현 스크립트를 포함했습니다 (T10-C25 ~ T10-C28)**
- [x] **결과 통계 표와 가설 일치/불일치 예외 사례를 객관적으로 분석했습니다 (T10-C31 ~ T10-C36)**
- [x] **1문단 이상의 결론과 연구의 한계 3가지를 명시했습니다 (T10-C38 ~ T10-C40)**
- [x] **표지, 초록, IMRaD 본문, 참고문헌을 갖춘 단일 원고(`PAPER.md`)를 작성했습니다 (T10-C41 ~ T10-C45)**
- [x] **실제 표준 학술 서식 DOCX 파일 다운로드를 지원합니다 (condi 10-7)**
- [x] **원자료와 스크립트를 포함한 1개의 단일 ZIP 재현 패키지를 제공합니다 (T10-C48)**
- [x] **AI와 나의 판단 3줄 및 짧은 확인 방법 4줄을 작성했습니다 (T10-C46, T10-C49)**
- [x] **무로그인 시크릿 웹 브라우저에서 즉시 열람 및 다운로드가 가능합니다 (T10-C51)**
