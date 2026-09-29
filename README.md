# 🎓 SKT ALEPH 장진영 연구 논문 & 포트폴리오 (Research Paper)

> **SKT ALEPH 1기 인공지능 엔지니어링 과정**  
> AI 코딩 에이전트의 정적 분석(AST Linter) 피드백 루프가 코드 리팩토링 수렴성에 미치는 영향을 다룬 **연구 논문(과제 10)** 및 학술 DOCX / 재현 패키지(ZIP) 인터랙티브 웹 시스템입니다.

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
  - **단일 ZIP 재현 패키지 (T10-C48)**: 논문 원고(`PAPER.md`, `.docx`), 원자료(`JSON`, `CSV`), 재현 스크립트(`run_experiment.py`) 일체를 단일 ZIP 파일로 패키징
  - **표본 데이터셋(N=10) 인터랙티브 데이터 테이블**: 조작 조건(린트 피드백 주입)에 따른 A/B군 수정 반복 횟수(-63.2% 수렴) 및 지연시간 비교
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
│   │   ├── raw_experiment_data.csv                # 원자료 10개 표본 CSV
│   │   └── raw_experiment_data.json               # 원자료 10개 표본 JSON
│   ├── scripts/
│   │   ├── run_experiment.py                      # 재현 및 통계 계산 스크립트
│   │   ├── generate_docx_paper.py                 # DOCX 생성 파이썬 스크립트
│   │   └── build_reproduction_zip.py              # ZIP 패키징 빌드 스크립트
│   └── README.md                                  # 재현 가이드 문서
├── src/
│   ├── components/
│   │   ├── Header.tsx          # 상단 고정 헤더, 네비게이션 앵커, 테마/모션 토글
│   │   ├── Hero.tsx            # 첫 화면 인트로 및 퀵 CTA
│   │   ├── ResearchPaper.tsx   # 🎓 과제 10 논문 IMRaD 리더, 가설 랩, 팩트체크, 재현 4-탭
│   │   ├── RitualAgent.tsx     # 🤖 과제 9 리추얼 기록 뷰어 & 서사 컴포넌트
│   │   ├── Projects.tsx        # 프로젝트 갤러리 섹션
│   │   ├── Contact.tsx         # 공식 소통 채널 (GitHub, Email)
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
   - 공식 논문 원고 [`PAPER.md`](PAPER.md) 또는 배포 웹사이트([https://skt-aleph-jinyeong-research-paper.vercel.app](https://skt-aleph-jinyeong-research-paper.vercel.app)) 상단의 `#research-paper` 섹션(4개 탭) 및 [DOCX 논문 다운로드] / [재현 ZIP 패키지] 버튼에서 확인합니다.
2. **② 무엇을 하나요 (3단계 이내)**:
   - **1단계**: [DOCX 논문 다운로드] 버튼을 클릭하여 `skt-aleph-jinyeong-research-paper.docx` 원고를 다운로드하거나 웹 탭 1에서 IMRaD 전문(표지, 초록, 서론, 방법, 결과, 논의, 참고문헌)을 읽습니다.
   - **2단계**: [가설 랩 & 데이터셋] 탭에서 가설, 검토 후 접은 주제 3개 및 이유, N=10 표본 데이터 테이블과 통계 요약 지표(-63.2% 감소)를 확인합니다.
   - **3단계**: [선행연구 & 팩트체크] 탭에서 공인 문헌 5편과 AI 할루시네이션 가짜 문헌 3건 적발 내역을 확인하거나, [재현 스튜디오] 탭에서 원클릭 재현 스크립트를 실행합니다.
3. **③ 무엇이 보이면 통과**:
   - 논문 표지에 저자(`장진영`)가 명시되어 있고, 1문장 가설, IMRaD 본문, 공인 참고문헌(APA), 제외된 가짜 문헌 3건, 표본 수 N=10 원자료 통계치(3.80회 ➔ 1.40회, 63.2% 감소율), DOCX 파일 및 1개의 ZIP 파일이 정상적으로 다운로드/열람되면 통과입니다.
4. **④ 안 될 때**:
   - 웹 접속 시 흰 화면이나 404 오류가 발생하거나, DOCX/ZIP 다운로드 링크가 깨지거나, 비밀번호 입력창이 나타나 접근이 차단되는 경우입니다.

---

### 3. AI와 나의 판단 3줄 (T10-C49)

1. **① AI에게 맡긴 일**:
   - 표본 10개 컴포넌트의 리팩토링 반복 횟수 통계 연산 스크립트 작성, APA 스타일 참고문헌 서식 정리, Oxlint/Prettier 정적 검증 파이프라인 자동화를 맡겼습니다.
2. **② 학생이 직접 판단한 일**:
   - 1주일 내 데이터 수집 가능성과 실무 재현성을 고려하여 AST 린터 피드백 루프 가설을 최종 채택하고, AI가 생성한 가짜 문헌 3건을 Crossref/DOI 교차 검증을 통해 직접 적발하여 제외했습니다.
3. **③ AI 제안을 따르지 않은 일**:
   - AI가 초기에 제안한 복잡하고 검증 불가능한 클라우드 분산 벤치마크 설계를 기각하고, 로컬 환경에서 100% 동일하게 재현 가능한 독립형 데이터셋 및 파이썬 통계 파이프라인으로 단순화했습니다.

---

### 4. 가설 도출 및 탈락 주제 3개 (T10-C01 ~ T10-C10)

- **관심 분야:** AI 코딩 에이전트 기반 코드 리팩토링 및 정적 분석 AST 피드백 루프
- **검토 후 접은 주제 3개 및 이유:**
  1. _대규모 모놀리식 백엔드 아키텍처 자동 분해_: 1주일 내 프로덕션 수준의 검증 환경 구축 불가로 접음.
  2. _프롬프트 온도가 개발자 코드 작성 심리에 미치는 영향_: 주관적 심리 척도의 객관적 측정 어려움으로 접음.
  3. _멀티모달 LLM을 활용한 UI 디자인 피그마 자동 퍼블리싱_: 표준화된 픽셀 정합도 측정 오픈소스 부재로 접음.
- **최종 1문장 가설 (T10-C04):**  
  `"AI 에이전트에게 AST 린터의 오류 피드백을 실시간 제공하면, 정적 분석 오류 0건에 도달하기까지의 코드 수정 반복 횟수가 50% 이상 감소할 것이다."`

---

### 5. 선행연구 및 AI 할루시네이션 필터링 기록 (T10-C11 ~ T10-C20)

- **공인 참고문헌 (APA Style):**
  1. Chen, M., et al. (2021). _Evaluating Large Language Models Trained on Code_. arXiv:2107.03374.
  2. Xia, C. S., & Zhang, L. (2023). _Keep the Conversation Going: Fixing Bugs in Code with Conversation_. ESEC/FSE 2023.
  3. Olausson, T. X., et al. (2024). _Is Self-Repair a Silver Bullet for Code Generation?_ ICLR 2024.
  4. Fan, A., et al. (2023). _Automated Repair in the Era of Large Language Models_. IEEE TSE.
  5. Madaan, A., et al. (2024). _Self-Refine: Iterative Refinement with Self-Feedback_. NeurIPS 2023.
- **AI 할루시네이션 가짜 문헌 적발 및 필터링 내역 (T10-C15):**
  1. `[제외] Auto-Lint-LLM: Zero-Shot AST Repair in Software Engineering (2024)`: Crossref/DOI 조회 결과 실존하지 않는 가공의 논문으로 확인되어 제외.
  2. `[제외] Empirical Evaluation of TypeScript Static Analysis with GPT-4 (2023)`: 제목은 유사하나 실제 본문은 C++ 컴파일러 분석에 관한 연구로 불일치하여 제외.
  3. `[제외] Real-time Linter Feedback Convergence Rate in LLM Agents (2025)`: 미래 연도로 생성되었으며 기재된 주 저자가 해당 분야 연구자가 아닌 허위 저자로 확인되어 제외.

---

### 6. 실험 설계와 원자료 결과 요약 (T10-C21 ~ T10-C40)

- **실험 설계 (N=10):**
  - **조작 변인:** 피드백 방식 (통제군: 단순 재시도 vs 실험군: AST 린터 에러 메시지 및 규칙 ID 주입)
  - **통제 변인:** 대상 모델(Claude 3.5 Sonnet 고정), 온도(Temperature=0.2 고정), 표본 10개 컴포넌트 고정
- **결과 통계 지표:**
  - 통제군 평균 반복 횟수: **3.80회** ➔ 실험군 평균 반복 횟수: **1.40회** (**-63.2% 수렴, 가설 목표 50% 초과 달성**)
  - 통제군 평균 소요 시간: **3,180ms** ➔ 실험군 평균 소요 시간: **1,185ms** (**-62.7% 단축**)
- **연구의 한계 3가지 (T10-C39):**
  1. 표본이 React/TypeScript 10개 컴포넌트에 한정되어 타 언어/프레임워크로의 일반화에 추가 연구 필요.
  2. 단일 파일 범위를 벗어나는 외부 타입 선언(`.d.ts`) 결함의 경우 AST 피드백 효과가 제한적임.
  3. 런타임 비즈니스 로직의 완벽한 동작 여부를 위해서는 E2E 테스트 검증이 추가로 요구됨.

---

### 7. 과제 10 완주 체크리스트 (T10-C01 ~ T10-C51)

- [x] **관심 분야와 접은 후보 주제 3개 및 접은 이유를 명시했습니다 (T10-C01 ~ T10-C03)**
- [x] **독립변수와 종속변수가 드러난 1문장 가설을 작성했습니다 (T10-C04, T10-C05)**
- [x] **공인 참고문헌 목록(APA)과 가설 뒷받침 1줄을 수록했습니다 (T10-C11 ~ T10-C14)**
- [x] **AI 할루시네이션 가짜 문헌 3건을 직접 적발하고 제외 사유를 기록했습니다 (T10-C15)**
- [x] **조작 변인과 통제 변인이 분리된 실험 설계표와 표본 N=10을 명시했습니다 (T10-C21 ~ T10-C24)**
- [x] **원자료 파일(CSV/JSON)과 실행 재현 스크립트를 포함했습니다 (T10-C25 ~ T10-C28)**
- [x] **결과 통계 표와 가설 일치/불일치 예외 사례를 객관적으로 분석했습니다 (T10-C31 ~ T10-C36)**
- [x] **1문단 이상의 결론과 연구의 한계 3가지를 명시했습니다 (T10-C38 ~ T10-C40)**
- [x] **표지, 초록, IMRaD 본문, 참고문헌을 갖춘 단일 원고(`PAPER.md`)를 작성했습니다 (T10-C41 ~ T10-C45)**
- [x] **실제 표준 학술 서식 DOCX 파일 다운로드를 지원합니다 (condi 10-7)**
- [x] **원자료와 스크립트를 포함한 1개의 단일 ZIP 재현 패키지를 제공합니다 (T10-C48)**
- [x] **AI와 나의 판단 3줄 및 짧은 확인 방법 4줄을 작성했습니다 (T10-C46, T10-C49)**
- [x] **무로그인 시크릿 웹 브라우저에서 즉시 열람 및 다운로드가 가능합니다 (T10-C51)**
