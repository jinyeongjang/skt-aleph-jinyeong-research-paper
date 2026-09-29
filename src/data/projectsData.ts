// src/data/projectsData.ts
// SKT ALEPH 1기 장진영 수강생의 전체 과제 및 실전 프로젝트 갤러리 데이터

export interface ProjectItem {
  id: string;
  taskNumber: string;
  taskBadge: string;
  title: string;
  subtitle: string;
  category: '보안 & 인증' | '웹 & 인터랙션' | 'AI & 벤치마크' | '데이터 & 대시보드';
  status: '배포 완료' | '검증 100% 통과' | '운영 중';
  period: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  keyFeatures: string[];
  quickVerification: {
    whereToGo: string;
    whatToDo: string;
    whatShowsSuccess: string;
    whatShowsFailure: string;
  };
  aiAndJudgment: {
    delegatedToAi: string;
    studentJudged: string;
    rejectedAiProposal: string;
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'task-10',
    taskNumber: '과제 10',
    taskBadge: '과제 10',
    title: 'AI와 함께 쓰는 첫 논문 — 가설에서 결론까지',
    subtitle: 'AST 린터 피드백 루프 기반 AI 코드 리팩토링 수렴성 연구 및 DOCX/ZIP 재현 시스템',
    category: 'AI & 벤치마크',
    status: '배포 완료',
    period: '2026.09 (ALEPH 10주차)',
    description:
      'AI 에이전트의 코드 리팩토링 루프에 Oxlint/TypeScript AST 린터의 오류 피드백을 제공할 때 정적 분석 오류 0건 도달에 필요한 수정 반복 횟수가 63.2% 감소함을 실증한 연구 논문입니다. 학술 IMRaD 전문 뷰어, DOCX 파일 다운로드, N=10 원자료 데이터셋, 및 ZIP 재현 패키지를 통합 제공합니다.',
    techStack: ['React 19', 'TypeScript 5.8', 'Python docx', 'Oxlint', 'Tailwind CSS v4', 'Vite 8'],
    liveUrl: 'https://skt-aleph-jinyeong-research-paper.vercel.app',
    githubUrl: 'https://github.com/jinyeongjang/skt-aleph-jinyeong-research-paper',
    keyFeatures: [
      '가설 정의 및 IMRaD 표준 학술 논문 전문 뷰어 (초록, 서론, 방법, 결과, 논의, 참고문헌)',
      '실제 학술 논문 형식의 DOCX 파일 자동 생성 및 브라우저 원클릭 다운로드 지원',
      '표본 데이터셋(N=10) 인터랙티브 데이터 테이블 및 통계 요약 지표 (63.2% 감소율)',
      'AI 할루시네이션 가짜 논문 3건 적발 및 필터링 제외 내역 공개',
      '단일 ZIP 재현 패키지(원자료 CSV/JSON, 재현 스크립트, DOCX, PAPER.md) 제공',
    ],
    quickVerification: {
      whereToGo:
        'https://skt-aleph-jinyeong-research-paper.vercel.app 접속 후 [연구 논문] 섹션(#research-paper)으로 이동합니다.',
      whatToDo:
        '1) [DOCX 논문 다운로드] 버튼을 눌러 원고를 다운로드하거나, 2) [가설 랩 & 데이터셋] 탭에서 10개 표본 지표를 확인합니다.',
      whatShowsSuccess: 'DOCX 파일이 정상 다운로드되고, 웹에서 논문 전문 및 통계 지표(-63.2%)가 표시되면 통과입니다.',
      whatShowsFailure: '다운로드 링크가 404로 실패하거나 데이터가 렌더링되지 않는 경우입니다.',
    },
    aiAndJudgment: {
      delegatedToAi:
        '통계 데이터 연산 스크립트 작성, APA 스타일 참고문헌 서식 정리, Oxlint/Prettier 코드 포맷팅 자동화를 맡겼습니다.',
      studentJudged:
        '1주일 내 데이터 수집 가능성을 고려하여 AST 피드백 루프 가설을 최종 선택하고, AI가 생성한 가짜 논문 3건을 직접 적발하여 제외했습니다.',
      rejectedAiProposal:
        'AI가 초기에 제안한 복잡하고 검증 불가능한 클라우드 분산 벤치마크 설계를 기각하고, 로컬 재현성이 100% 보장되는 자체 데이터셋 파이프라인을 구축했습니다.',
    },
  },
  {
    id: 'task-1-8',
    taskNumber: '과제 1 & 과제 8',
    taskBadge: '과제 1 · 8',
    title: 'SKT ALEPH 포트폴리오 & WebAuthn 패스키 비공개 금고',
    subtitle: 'FIDO2 무암호화 패스키 인증 및 STAR 모델 기반 실전 포트폴리오',
    category: '보안 & 인증',
    status: '배포 완료',
    period: '2026.08 ~ 2026.09 (ALEPH 1주차 & 8주차)',
    description:
      '개발자 장진영의 핵심 가치관과 실무 역량을 공유하는 반응형 포트폴리오 웹입니다. FIDO2 / WebAuthn 표준 비대칭 공개키 암호학(ECDSA P-256)을 적용하여 비밀번호 입력창 없이 생체 인증 및 하드웨어 보안키(Windows Hello, Touch ID, YubiKey)로 비공개 연구실 자료를 안전하게 보호합니다.',
    techStack: ['React 19', 'TypeScript 5.9', 'Tailwind CSS v4', 'WebAuthn / FIDO2', 'Web Crypto API', 'Vite 8'],
    liveUrl: 'https://skt-aleph-jinyeongjang-myblog.vercel.app',
    githubUrl: 'https://github.com/jinyeongjang/skt-aleph-jinyeongjang-myblog',
    keyFeatures: [
      '비밀번호 입력칸 0개 — 순수 FIDO2 / WebAuthn ECDSA P-256 비대칭 공개키 서명 인증',
      '32바이트 암호학적 1회용 챌린지 발급 및 즉시 소모로 재전송 공격(Replay Attack) 원천 차단',
      'Windows Hello, Touch ID, YubiKey 5대 프리셋 및 하드웨어 생체인식 스캔 지원',
      '다중 패스키 등록·기기 관리 UI 및 단일 패스키 삭제 후 로그인 복원력 완비',
      '타 계정 토큰 침범(IDOR) 시 HTTP 403 거절 및 데이터 변경 0건 보장',
    ],
    quickVerification: {
      whereToGo: 'https://skt-aleph-jinyeongjang-myblog.vercel.app 접속 후 [패스키 금고] 탭(#vault)으로 이동합니다.',
      whatToDo:
        '1) [새 패스키 등록]에서 Windows Hello 또는 원클릭 프리셋으로 키 쌍을 등록합니다. 2) [비공개 금고 열기]를 눌러 서명 검증을 진행합니다. 3) 보안 검증 랩에서 [타인 토큰 접근(IDOR)]을 시도합니다.',
      whatShowsSuccess:
        '비밀번호 창 없이 패스키 서명 성공 후 비공개 연구 노트가 잠금 해제되고, IDOR 시도 시 403 Forbidden 차단 배너가 정상 노출되면 통과입니다.',
      whatShowsFailure:
        '비밀번호 입력창이 나타나거나, 서명 실패 시 비공개 데이터가 노출되거나, 타인 토큰으로 비공개 자료가 열리는 경우입니다.',
    },
    aiAndJudgment: {
      delegatedToAi:
        'W3C WebAuthn Level 2 명세 기반 DER-to-P1363 서명 변환 함수 스캐폴딩, 4대 보안 거절 시나리오 시뮬레이션 엔진 및 Oxlint/Prettier 품질 자동화를 맡겼습니다.',
      studentJudged:
        '생체 인증 하드웨어가 없는 환경에서도 평가위원이 즉시 검증할 수 있도록 Web Crypto API 기반의 순수 클라이언트 1-클릭 키 생성 엔진과 하드웨어 스캔의 듀얼 모드를 직접 판단하여 설계했습니다.',
      rejectedAiProposal:
        'AI가 초기 제안한 외부 상용 인증 SaaS SDK 도입을 기각하고, 보안 학습 원리 체득을 위해 W3C 표준 Web Crypto API 기반의 순수 자체 암호학 엔진을 구현했습니다.',
    },
  },
  {
    id: 'task-2',
    taskNumber: '과제 2',
    taskBadge: '과제 2',
    title: 'CYBER DODGER 30s (사이버 닷저 30초 레이싱)',
    subtitle: '3D 원근 콕핏 HUD 기반 30초 완결 사이버 레이싱 아케이드',
    category: '웹 & 인터랙션',
    status: '배포 완료',
    period: '2026.09 (ALEPH 2주차)',
    description:
      '30초 동안 3개 레인 사이를 고속 질주하며 보안 버그(장애물)를 회피하고 데이터 패킷을 수집하는 3D 원근법 사이버 레이싱 아케이드 미니게임입니다. 소실점 수렴 3D 트랙, 뱅킹 물리 슈퍼카, 속도계/타코미터/전송량 적산 계기판이 통합된 단일 메인 콘솔 뷰를 제공합니다.',
    techStack: ['React 19.2', 'TypeScript 5.8', 'Tailwind CSS v4', 'HTML5 Canvas / CSS 3D', 'Framer Motion', 'Vite 8'],
    liveUrl: 'https://skt-aleph-minigame-jinyeongjang.vercel.app',
    githubUrl: 'https://github.com/jinyeongjang/SKT_ALEPH_jinyeongjang_minigame',
    keyFeatures: [
      '소실점(Horizon) 수렴 3D 사다리꼴 트랙 및 조향 뱅킹 물리(rotateZ, rotateY, skewX) 시뮬레이션',
      '30초 제한시간 서바이벌 (HP 3개 쉴드 및 15개 패킷 수집 시 조기 전송 승리)',
      '실시간 가속 대역폭 속도계 (140 ~ 300+ Gbps) 및 원형 SVG 타코미터 아크 게이지',
      '주행 거리와 패킷 수집량에 따라 실시간 적산되는 디지털 전송량(MB) 계기판',
      '로컬스토리지 손상 시 기본값으로 복구하는 자가 치유(Self-Healing) 시스템',
    ],
    quickVerification: {
      whereToGo: 'https://skt-aleph-minigame-jinyeongjang.vercel.app 에 접속합니다.',
      whatToDo:
        '1) [게임 시작] 버튼을 누릅니다. 2) 방향키(←/→) 또는 A/D 키로 장애물을 피하며 패킷을 수집합니다. 3) 30초 생존 또는 패킷 15개를 수집합니다.',
      whatShowsSuccess:
        '30초 완주 또는 패킷 15개 수집 시 승리 연출과 함께 최종 스코어 및 전송량(MB)이 표기되면 통과입니다.',
      whatShowsFailure: '장애물 3회 충돌 시 쉴드(HP 0) 소진 및 차량 손상 배너와 함께 재시작 버튼이 표시됩니다.',
    },
    aiAndJudgment: {
      delegatedToAi:
        '3D 원근 좌표 변환 수학 공식 계산, Framer Motion 키프레임 뱅킹 인터랙션 보간 및 20회 난이도 시뮬레이션 데이터 수집을 맡겼습니다.',
      studentJudged:
        '첫 화면에서 부가 설명으로 화면을 가리지 않고 오직 레이싱 콕핏 콘솔 뷰 하나에 100% 몰입할 수 있도록 단일 콘솔 극대화 레이아웃을 직접 결정했습니다.',
      rejectedAiProposal:
        'AI가 제안한 과도한 WebGL 3D 엔진(Three.js) 라이브러리 의존성을 배제하고, 가벼운 번들 용량과 60FPS 보장을 위해 순수 CSS 3D Transform과 경량 Canvas 하이브리드 엔진을 선택했습니다.',
    },
  },
  {
    id: 'task-3',
    taskNumber: '과제 3',
    taskBadge: '과제 3',
    title: 'ToonsCard Studio (짤·카드 스튜디오)',
    subtitle: '캔버스 직접 조작(Direct Manipulation) 기반 다중 화면비 고화질 이미지 생성기',
    category: '웹 & 인터랙션',
    status: '배포 완료',
    period: '2026.09 (ALEPH 3주차)',
    description:
      '이미지와 문구를 조합해 밈·카드·SNS 게시용 고화질 이미지를 제작하고 파일로 즉시 다운로드하는 직관적인 웹 스튜디오입니다. 1:1, 4:5, 9:16 다중 화면비 지원, 캔버스 위 마우스 직접 드래그 이동/리사이즈/인라인 텍스트 수정 및 극단 입력 12건 전수 검증을 완료했습니다.',
    techStack: ['React 19.2', 'TypeScript 5.x', 'Tailwind CSS v4', 'HTML5 Canvas 2D', 'Framer Motion', 'Vite 8'],
    liveUrl: 'https://skt-aleph-jinyeongjang-toons-card.vercel.app',
    githubUrl: 'https://github.com/jinyeongjang/skt-aleph-jinyeongjang-toons-card',
    keyFeatures: [
      '1:1(정사각형), 4:5(피드), 9:16(숏폼) 화면비 지원 및 화면과 다운로드 파일 좌표 100% 일치',
      '캔버스 위 요소 직접 드래그 이동, 4개 코너 리사이즈 핸들, 더블클릭 인라인 텍스트 수정',
      'Pointer Capture 기술 적용으로 캔버스 바깥 마우스 이탈 시에도 끊김 없는 조작 보장',
      'grapheme 기반 지능형 break-word 줄바꿈으로 초장문 텍스트 이탈 결함 해결',
      '불변 고유 UUID 기반 템플릿 CRUD 및 로컬스토리지 영구 보존',
    ],
    quickVerification: {
      whereToGo: 'https://skt-aleph-jinyeongjang-toonscard.vercel.app 에 접속합니다.',
      whatToDo:
        '1) [이미지 업로드(PNG/JPEG)]로 사진을 불러옵니다. 2) 캔버스 위 문구를 드래그하거나 더블클릭해 문구를 수정합니다. 3) [PNG 다운로드] 버튼을 누릅니다.',
      whatShowsSuccess:
        '화면의 실시간 캔버스 미리보기와 내려받은 PNG 파일의 문구 위치, 크기, 줄바꿈이 100% 일치하면 통과입니다.',
      whatShowsFailure:
        '미지원 파일(.gif/.pdf 등) 업로드 시 작업을 안전하게 보존하며 상단에 빨간색 거부 사유 배너가 나타납니다.',
    },
    aiAndJudgment: {
      delegatedToAi:
        'Canvas 2D 렌더링 컨텍스트 수학 공식 설계, 다중 화면비 스케일링 비율 연산 및 Prettier/Oxlint 자동화 검증을 맡겼습니다.',
      studentJudged:
        '공백 없는 초장문 영문 입력 시 캔버스 우측으로 글자가 삐져나가는 결함을 해결하기 위해 grapheme 기반의 지능형 break-word 줄바꿈 알고리즘을 직접 채택하고 적용했습니다.',
      rejectedAiProposal:
        'AI가 초기 제안한 외부 웹폰트 CDN 비동기 fetch 방식을 기각하고, 오프라인 및 시크릿 창 100% 무결점 렌더링을 보장하기 위해 시스템 표준 폰트 스택 및 document.fonts.ready 동기화 가드를 채택했습니다.',
    },
  },
  {
    id: 'task-4',
    taskNumber: '과제 4',
    taskBadge: '과제 4',
    title: '오늘의 진짜 정보판 (Real Information Board)',
    subtitle: '실시간 기온 관측 & 장애 상황(Stale) 직전 정상값 보존 정보판',
    category: '데이터 & 대시보드',
    status: '배포 완료',
    period: '2026.09 (ALEPH 4주차)',
    description:
      'Open-Meteo 서울 실시간 기온 API를 연동하여 매일의 관측값을 기록하고 어제와 비교하며, 네트워크 장애나 API 오류가 발생할 때도 직전 정상값을 보존하고 정직하게 설명하는 고신뢰성 정보판 시스템입니다.',
    techStack: ['React 19.2', 'TypeScript 5.x', 'Tailwind CSS v4', 'Open-Meteo API', 'Framer Motion', 'Vite 8'],
    liveUrl: 'https://skt-aleph-jinyeong-today-dashboard.vercel.app',
    githubUrl: 'https://github.com/jinyeongjang/skt-aleph-jinyeong-today-dashboard',
    keyFeatures: [
      '외부 API 키 유출 위험이 없는 완전 무키(Keyless) Open-Meteo 실시간 기온 API 연동',
      '값, 단위(°C), 출처 시각, 조회 시각, Asia/Seoul 시간대 등 필수 메타데이터 6종 완비',
      '5종 장애 시뮬레이션(타임아웃/오프라인/호출제한/스키마변경) 및 직전 정상값 불변 보존',
      '동일 날짜 다회 조회 시 단일 행 원자적 갱신 및 1차 제출 기준값 보존',
      'Asia/Seoul 기준 익일 조회 시 신규 행 자동 생성 및 어제 대비 Delta 정밀 산출',
    ],
    quickVerification: {
      whereToGo: 'https://skt-aleph-jinyeong-today-dashboard.vercel.app 에 접속합니다.',
      whatToDo:
        '1) [실제 동적 조회]를 눌러 서울 기온을 확인합니다. 2) 5종 시험기에서 [느린 외부 응답(TIMEOUT)]을 실행해 stale 상태를 확인합니다. 3) [다시 시도]를 눌러 fresh 정상 복구를 확인합니다.',
      whatShowsSuccess:
        '메타데이터 6종이 표시되고, 장애 시에도 값이 사라지지 않고 주황색 Stale 배지와 원천 오류 안내가 뜨면 통과입니다.',
      whatShowsFailure: '네트워크 단절 시 화면이 백화되거나 값이 null로 초기화되는 경우입니다.',
    },
    aiAndJudgment: {
      delegatedToAi:
        'Open-Meteo API 정규화 파서, 9종 공식 합성 fixture 기반 장애 상태 전이 엔진 및 KST 날짜 원자적 갱신 로직 구현을 맡겼습니다.',
      studentJudged:
        '보안 침해 위험을 원천 차단하기 위해 유료 API 키가 필요 없는 Keyless 공개 원천을 선택하고, 1차 제출값과 최신 갱신값이 공존하는 검사 서랍 설계를 직접 지시했습니다.',
      rejectedAiProposal:
        'AI가 초기에 제안한 별도 백엔드 프록시 서버 구성을 배제하고, 무로그인 공개 정적 웹 요건을 만족하기 위해 브라우저 로컬 저장 및 클라이언트 결정론적 복구 구조를 채택했습니다.',
    },
  },
  {
    id: 'task-5',
    taskNumber: '과제 5',
    taskBadge: '과제 5',
    title: '대화가 끊겨도 이어지는 프로젝트 (LLM Handover Benchmark)',
    subtitle: '7칸 인수인계 계약 기반 멀티 LLM(Claude ➔ Gemini) 협업 벤치마크',
    category: 'AI & 벤치마크',
    status: '검증 100% 통과',
    period: '2026.09 (ALEPH 5주차)',
    description:
      '이전 세션의 대화 전문 없이 7칸 인수인계 문서(HANDOVER.md)만으로 Claude 3.7에서 Gemini 3.8 Flash로 작업을 이양하여 사전 고정 검사 10개를 100% 완주한 무로그인 공개 비교 벤치마크 시스템입니다.',
    techStack: ['React 19.2', 'TypeScript 5.x', 'Tailwind CSS v4', 'Multi-LLM Pipeline', 'Vitest / Node', 'Vite 8'],
    liveUrl: 'https://skt-aleph-jinyeong-llm-talk.vercel.app',
    githubUrl: 'https://github.com/jinyeongjang/skt-aleph-jinyeong-llm-talk',
    keyFeatures: [
      '대화 전문 없이 7칸 인수인계 문서만으로 작업 재개 및 10대 고정 검사 전수 PASS',
      'Model A(Claude 3.7 Sonnet) ➔ Model B(Gemini 3.8 Flash) 4대 커밋 해시 고정 완주',
      '공통 상한(60분, 25회) 대비 실측 28분/14회 및 22분/11회로 안전 완주 입증',
      '전국 3대 권역(서울·부산·제주) 멀티 관측소 연동 및 이상 기온(±3.0°C) 감지',
      '문서 변경 내역 추적 및 SHA-256 무결성 검증 체계 구축',
    ],
    quickVerification: {
      whereToGo: 'https://skt-aleph-jinyeong-llm-talk.vercel.app 에 접속합니다.',
      whatToDo:
        '1) [사전 고정 10대 검사]에서 [전체 10개 검사 실시간 실행]을 누릅니다. 2) [블라인드 해제]를 눌러 모델별 소요 시간/호출 수를 확인합니다. 3) [7칸 인수인계] 탭을 확인합니다.',
      whatShowsSuccess:
        '10대 검사 10/10 PASS 초록 배지, 블라인드 비교표의 공통 상한 내 완주 수치, 7항목 완비가 보이면 통과입니다.',
      whatShowsFailure:
        '원천 장애 시 해당 관측소만 Stale 처리되며, 문서 누락 발생 시 변경 전후 기록이 화면에 표시됩니다.',
    },
    aiAndJudgment: {
      delegatedToAi:
        '멀티 관측소 정규화 수집기, 10대 고정 검사 스위트 자동 실행 엔진, 이상 기온 경보 알고리즘 및 Oxlint/Prettier 자동화를 맡겼습니다.',
      studentJudged:
        '이전 세션의 대화 컨텍스트 일체 없이도 다른 모델이 작업을 즉각 이어받을 수 있도록 7칸 인수인계 계약을 엄격히 정의하고 블라인드 측정 기준을 직접 수립했습니다.',
      rejectedAiProposal:
        'AI가 제안한 복잡한 중앙 세션 공유 서버나 벡터 DB 검색 방식을 배제하고, 결정론적 인수인계 마크다운 문서를 통한 단일 책임 이양 구조를 채택했습니다.',
    },
  },
  {
    id: 'task-6-7',
    taskNumber: '과제 6 & 과제 7',
    taskBadge: '과제 6 · 7',
    title: '플랜두씨 다이어리 1 & 2 (Plan-Do-See Diary)',
    subtitle: 'PBKDF2 암호화·JWT 세션·IDOR 방어 & 5일 연속 관찰 다이어리',
    category: '보안 & 인증',
    status: '운영 중',
    period: '2026.09 (ALEPH 6~7주차)',
    description:
      '계획(Plan) ➔ 실행(Do) ➔ 돌아보기(See)로 이어지는 다이어리 웹에 PBKDF2-SHA256 단방향 암호화 인증, Bearer JWT 세션 관리, 멀티테넌트 데이터 완벽 격리(IDOR 방어) 및 5일 연속 관찰 기록과 3일차 계획 규칙 변경을 적용한 풀스택 웹 애플리케이션입니다.',
    techStack: [
      'React 19.2',
      'TypeScript 5.x',
      'Tailwind CSS v4',
      'PBKDF2-SHA256',
      'Bearer JWT',
      'Supabase PostgreSQL',
      'Vite 8',
    ],
    liveUrl: 'https://skt-aleph-jinyeong-plans-diary.vercel.app',
    githubUrl: 'https://github.com/jinyeongjang/skt-aleph-jinyeong-plans-diary',
    keyFeatures: [
      '계획(Plan) ➔ 실행(Do) ➔ 돌아보기(See) 순환 다이어리 및 5일 연속 관찰 기록',
      'PBKDF2-SHA256 100,000회 반복 솔트 해싱으로 비밀번호 평문 노출 0건 보장',
      'Bearer JWT 세션 관리 및 Row Level Security(RLS)를 통한 완벽한 멀티테넌트 격리',
      '타 계정 토큰으로 비인가 데이터 접근 시도 시 HTTP 403 Forbidden 반환',
      '사전 고정 20대 자동화 검사(20/20 PASS) 및 3일차 계획 규칙 변경 수기 검산 완비',
    ],
    quickVerification: {
      whereToGo: 'https://skt-aleph-jinyeong-plans-diary.vercel.app 에 접속합니다.',
      whatToDo:
        '1) 첫 화면에서 [1-클릭 데모 로그인]을 누릅니다. 2) [5일 연속 관찰 기록] 탭에서 5일치 PDS 및 3일차 규칙 변경을 확인합니다. 3) [20대 자동화 검사]를 실행합니다.',
      whatShowsSuccess:
        '무로그인 첫 화면 열람, 로그인 후 5일치 기록 열람, 20대 자동화 검사 20/20 PASS가 표시되면 통과입니다.',
      whatShowsFailure: '비인가 토큰 접근 시 401/403 차단 안내가 뜨며, 평문 비밀번호 노출은 0건입니다.',
    },
    aiAndJudgment: {
      delegatedToAi:
        'Web Crypto API 기반 PBKDF2 단방향 해싱 엔진, JWT 서명/검증 파이프라인, 20대 자동화 검사 스위트 및 Supabase RLS 정책 작성을 맡겼습니다.',
      studentJudged:
        '평가위원이 별도 가입 없이 즉시 기능을 체험할 수 있도록 1-클릭 데모 계정 프리셋을 설계하고, 3일차 계획 규칙 변경에 대한 수기 검산 명세서를 직접 작성했습니다.',
      rejectedAiProposal:
        'AI가 제안한 비밀번호 평문 임시 캐싱 방식을 즉각 폐기하고, 메모리 상에서도 평문이 보존되지 않도록 단방향 솔트 해싱 즉시 소멸 구조를 적용했습니다.',
    },
  },
];
