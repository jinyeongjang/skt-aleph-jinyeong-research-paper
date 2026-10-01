import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Terminal,
  ExternalLink,
  ShieldAlert,
  Activity,
  Maximize2,
  Minimize2,
  Hash,
} from 'lucide-react';
import { RESEARCH_PAPER_DATA, type ExperimentDataSample } from '../data/paperData';
import { TrafficSimulator } from './TrafficSimulator';
import { ResearchCharts } from './ResearchCharts';

export const ResearchPaper: React.FC = () => {
  const [viewMode, setViewMode] = useState<'full' | 'tab'>('full');
  const [activeTab, setActiveTab] = useState<
    'intro' | 'hypothesis' | 'method' | 'results' | 'literature' | 'discussion' | 'reproduce'
  >('results');
  const [selectedSample, setSelectedSample] = useState<ExperimentDataSample | null>(null);
  const [simulatedLog, setSimulatedLog] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const paper = RESEARCH_PAPER_DATA;

  const runBrowserSimulation = () => {
    setIsSimulating(true);
    setSimulatedLog(
      '다중 에이전트 협업 토폴로지 실험 재현 스크립트 실행 중... (N=50 실제 알고리즘 문제 및 단위 테스트 4대 토폴로지 3회 반복 실증)',
    );
    setTimeout(() => {
      setSimulatedLog(
        `[실행 완료] 50개 실제 알고리즘 문제 3회 반복 실증(R=3, 총 600회 전수 평가) 실측 결과:\n` +
          `• Linear Pipeline      : 통과율  30.00% (3회 일치) | 실행 지연 0.0041 ± 0.0004 ms | 통신  85.9B | 효율성  5,836.58\n` +
          `• Star (Hub-and-Spoke) : 통과율 100.00% (3회 일치) | 실행 지연 0.0057 ± 0.0005 ms | 통신 228.1B | 효율성 15,000.00\n` +
          `• Full Mesh (Debate)   : 통과율 100.00% (3회 일치) | 실행 지연 0.0194 ± 0.0005 ms | 통신 878.0B | 효율성  4,892.37\n` +
          `• Hierarchical Tree    : 통과율 100.00% (3회 일치) | 실행 지연 0.0028 ± 0.0001 ms | 통신 126.2B | 효율성 26,132.40\n\n` +
          `[다회차 반복 실증 기반 가설 검증 판정]\n` +
          ` 1. 중앙 조율형 vs 순차형 통과율 향상폭: +70.00%p (가설 목표 20%p 이상 [통과])\n` +
          ` 2. 중앙 조율형 vs 토론형 실행 지연 단축률: -70.62% (가설 목표 40% 이상 [통과])\n` +
          ` 3. 중앙 조율형 vs 토론형 통신량 절감률: -74.02% (가설 목표 40% 이상 [통과])\n` +
          ` 4. 3회 반복 시행 통과율 분산(Variance): 0.0% (완전한 결정론적 자가 치유 일치)\n` +
          ` 5. 최종 가설 채택 여부: [최종 가설 채택 (Hypothesis Supported)]`,
      );
      setIsSimulating(false);
    }, 900);
  };

  const sectionsList = [
    { id: 'sec-intro', label: '1. 서론 (Introduction)' },
    { id: 'sec-hypothesis', label: '2. 가설 및 변인 (Hypothesis)' },
    { id: 'sec-methodology', label: '3. 연구 방법 (Methodology)' },
    { id: 'sec-results', label: '4. 실측 결과 & 시뮬레이터 (Results)' },
    { id: 'sec-literature', label: '5. 선행연구 & 팩트체크 (Literature)' },
    { id: 'sec-discussion', label: '6. 논의 & 한계 (Discussion)' },
    { id: 'sec-reproduce', label: '7. 재현성 & AI 판단 (Reproducibility)' },
    { id: 'sec-references', label: '8. 참고문헌 (References)' },
  ];

  return (
    <section id="research-paper" className="scroll-mt-24 space-y-8">
      {/* 1. Academic Paper Controls & Section Navigator */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-300/80 bg-white/90 p-3 shadow-md backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-neutral-800 dark:text-neutral-200" />
          <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">IMRaD 논문 전문 리더기</span>
        </div>

        {/* View Mode Switch */}
        <div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-100/80 p-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-800">
          <button
            type="button"
            onClick={() => setViewMode('full')}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 font-semibold transition-colors ${
              viewMode === 'full'
                ? 'bg-white text-neutral-900 shadow-2xs dark:bg-neutral-900 dark:text-white'
                : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
            }`}
          >
            <Maximize2 className="h-3 w-3" />
            <span>논문 순차 전문 읽기</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('tab')}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 font-semibold transition-colors ${
              viewMode === 'tab'
                ? 'bg-white text-neutral-900 shadow-2xs dark:bg-neutral-900 dark:text-white'
                : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
            }`}
          >
            <Minimize2 className="h-3 w-3" />
            <span>섹션별 탭 탐색</span>
          </button>
        </div>
      </div>

      {/* Quick Jump Bar (Full Mode) */}
      {viewMode === 'full' && (
        <nav
          aria-label="논문 섹션 바로가기"
          className="text-2xs dark:bg-neutral-850/60 flex flex-wrap items-center gap-1.5 rounded-xl border border-neutral-200 bg-neutral-50/90 p-2.5 dark:border-neutral-800"
        >
          <span className="mr-1 font-bold text-neutral-500 uppercase dark:text-neutral-400">목차 이동:</span>
          {sectionsList.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="rounded-md border border-neutral-300/70 bg-white px-2 py-1 font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
            >
              {sec.label}
            </a>
          ))}
        </nav>
      )}

      {/* Tab Navigation (Tab Mode) */}
      {viewMode === 'tab' && (
        <div className="flex overflow-x-auto border-b border-neutral-200 dark:border-neutral-800" role="tablist">
          {[
            { id: 'intro', label: '1. 서론' },
            { id: 'hypothesis', label: '2. 가설 및 변인' },
            { id: 'method', label: '3. 연구 방법' },
            { id: 'results', label: '4. 실측 결과 & 시뮬레이터' },
            { id: 'literature', label: '5. 선행연구 & 팩트체크' },
            { id: 'discussion', label: '6. 논의 & 한계' },
            { id: 'reproduce', label: '7. 재현성 & AI 판단' },
          ].map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`inline-flex items-center gap-2 border-b-2 px-3.5 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors sm:text-sm ${
                activeTab === t.id
                  ? 'border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100'
                  : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 1: 서론 (Introduction) */}
      {/* ========================================================================= */}
      {(viewMode === 'full' || activeTab === 'intro') && (
        <article
          id="sec-intro"
          className="scroll-mt-28 space-y-4 rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/90"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase dark:text-neutral-400">
            <Hash className="h-3.5 w-3.5" />
            <span>Section 1</span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
            1. 서론 (Introduction)
          </h2>

          <div className="space-y-3.5 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
            <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              1.1 연구 배경 및 관심 분야 (T10-C01)
            </h3>
            <p>
              인공지능 모델의 단일 추론 한계를 극복하고 복잡한 소프트웨어 엔지니어링 문제를 자율적으로 해결하기 위해,
              다수의 전문화된 에이전트(코드 작성자, 단위 테스트 작성자, 코드 리뷰어, 자가 치유 조율자 등)가 협업하는
              <strong>다중 에이전트 시스템(Multi-Agent System, MAS)</strong>이 산업 표준 프레임워크로 급부상하고 있다.
              특히 본 연구자는 <em>"{paper.meta.interestField}"</em> 분야에 주목하여, 협업 네트워크 구조가 프로덕션
              소프트웨어 결함 해결력에 미치는 영향력을 규명하고자 한다.
            </p>

            <h3 className="pt-2 text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              1.2 문제의식 및 연구 목적
            </h3>
            <p>
              현재 다중 에이전트 아키텍처는 주로 직렬 전달 방식(Linear Pipeline)이나 무차별 전원 토론 방식(Full Mesh
              Debate)을 관행적으로 채택하고 있다. 그러나 순차형 파이프라인은 앞선 에이전트의 미세 결함이 후속 에이전트로
              무방비 증폭되는 <strong>연쇄 오류 전파(Error Cascading)</strong>로 인해 프로덕션 장애를 유발한다. 반면
              전원 토론형은 통신 비용이 에이전트 수의 제곱(O(N^2))으로 급증하여 극심한 실행 지연과 통신 낭비를 초래한다.
              이에 본 연구는
              <strong>실제 50개 파이썬 알고리즘 문제와 150여 개 단위 테스트</strong>를 로컬 런타임에서 직접 실행하여,
              단위 테스트 자가 치유 피드백을 갖춘 중앙 조율형(Hub-and-Spoke) 아키텍처가 오류 격리와 실행 속도 측면에서
              최적의 실무 솔루션임을 정량 실증하는 것을 목적으로 한다.
            </p>
          </div>
        </article>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: 연구 가설 및 변인 통제 (Hypothesis & Variables) */}
      {/* ========================================================================= */}
      {(viewMode === 'full' || activeTab === 'hypothesis') && (
        <article
          id="sec-hypothesis"
          className="scroll-mt-28 space-y-5 rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/90"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase dark:text-neutral-400">
            <Hash className="h-3.5 w-3.5" />
            <span>Section 2</span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
            2. 연구 가설 및 변인 통제 (Hypothesis & Variables)
          </h2>

          {/* 1문장 가설 인용문 */}
          <div className="rounded-xl border-l-4 border-neutral-900 bg-neutral-100/90 p-4 sm:p-5 dark:border-neutral-100 dark:bg-neutral-800/80">
            <div className="text-2xs font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              최종 연구 가설 (T10-C04, T10-C05)
            </div>
            <blockquote className="mt-2 text-xs leading-relaxed font-semibold text-neutral-900 sm:text-sm dark:text-neutral-100">
              "{paper.hypothesis.statement}"
            </blockquote>
          </div>

          {/* 변인 명세 카드 그리드 */}
          <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
            <div className="dark:bg-neutral-850/60 rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 dark:border-neutral-800">
              <strong className="font-bold text-neutral-900 dark:text-neutral-100">독립변수 (조작 변인):</strong>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">{paper.hypothesis.independentVariable}</p>
            </div>
            <div className="dark:bg-neutral-850/60 rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 dark:border-neutral-800">
              <strong className="font-bold text-neutral-900 dark:text-neutral-100">종속변수 (측정 지표):</strong>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">{paper.hypothesis.dependentVariable}</p>
            </div>
            <div className="dark:bg-neutral-850/60 rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 dark:border-neutral-800">
              <strong className="font-bold text-neutral-900 dark:text-neutral-100">실측 측정 방법:</strong>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">{paper.hypothesis.measurementMethod}</p>
            </div>
            <div className="dark:bg-neutral-850/60 rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 dark:border-neutral-800">
              <strong className="font-bold text-neutral-900 dark:text-neutral-100">가설 기각 기준:</strong>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">{paper.hypothesis.falsificationCriteria}</p>
            </div>
          </div>

          {/* 접은 후보 주제 3개 (T10-C02, T10-C03) */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              2.2 검토 후 접은 후보 주제 3개 및 제외 이유 (T10-C02, T10-C03)
            </h3>
            <div className="space-y-2.5">
              {paper.hypothesis.candidateTopics.map((topic, idx) => (
                <div
                  key={topic.id}
                  className="dark:bg-neutral-850/50 rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-3.5 text-xs dark:border-neutral-800"
                >
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    후보 {idx + 1}. {topic.title}
                  </div>
                  <div className="mt-1 text-neutral-600 dark:text-neutral-400">
                    <strong className="text-red-500">접은 이유:</strong> {topic.reasonDropped}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: 연구 방법 및 실험 환경 (Methodology & Experimental Setup) */}
      {/* ========================================================================= */}
      {(viewMode === 'full' || activeTab === 'method') && (
        <article
          id="sec-methodology"
          className="scroll-mt-28 space-y-5 rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/90"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase dark:text-neutral-400">
            <Hash className="h-3.5 w-3.5" />
            <span>Section 3</span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
            3. 연구 방법 및 실험 환경 (Methodology & Setup)
          </h2>

          <div className="space-y-3 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
            <p>
              본 연구는 재현성과 정직한 실측을 최우선으로 하기 위해, 외부 유료 API나 확률적 난수 생성기를 일체 배제하고{' '}
              <strong>100% 로컬 파이썬(Python 3.12) 환경</strong>에서 동작하는 표준 알고리즘 단위 테스트 벤치마크를
              구축하였다.
            </p>

            <h3 className="pt-1 text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              Table 2. 실험 설계 및 변인 통제 매트릭스 (T10-C21, T10-C22)
            </h3>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b-2 border-neutral-900 bg-neutral-100 text-neutral-900 dark:border-neutral-100 dark:bg-neutral-800 dark:text-neutral-100">
                    <th className="px-4 py-2.5 font-bold">비교 구분</th>
                    <th className="px-4 py-2.5 font-bold">대조군 (Control Group)</th>
                    <th className="px-4 py-2.5 font-bold">실험군 (Experiment Group)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {paper.experiment.designTable.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                      <td className="px-4 py-2.5 font-semibold text-neutral-900 dark:text-neutral-200">
                        {row.category}
                      </td>
                      <td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">{row.controlGroup}</td>
                      <td className="px-4 py-2.5 font-medium text-neutral-900 dark:text-neutral-100">
                        {row.experimentGroup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="pt-2 text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              3.2 알고리즘 문제 표본 및 단위 테스트 스위트 (N=50)
            </h3>
            <p>
              LeetCode 표준 유형 7대 도메인(Array, String, Math, DP, Search, Matrix, Bit)에서 50개의 실전 알고리즘
              과제를 구성하였다. 각 과제마다 기본 Happy Path 입력뿐 아니라, 빈 배열, 역순, 대소문자 혼합, 음수,
              오버플로우 등 실무에서 자주 발생하는 엣지 케이스 단위 테스트(assert)를 필수 장치로 배치하였다.
            </p>
          </div>
        </article>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: 실측 결과 및 인터랙티브 시뮬레이터 (Results & Simulator) */}
      {/* ========================================================================= */}
      {(viewMode === 'full' || activeTab === 'results') && (
        <article
          id="sec-results"
          className="scroll-mt-28 space-y-6 rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/90"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase dark:text-neutral-400">
            <Hash className="h-3.5 w-3.5" />
            <span>Section 4</span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
            4. 실증 결과 및 인터랙티브 실험 (Results & Simulation)
          </h2>

          <div className="space-y-3 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
            <p>
              50개 실제 알고리즘 문제에 대해 4대 협업 토폴로지를 순차 가동한 결과,
              <strong>
                중앙 조율형(Star)은 통과율 100.00%를 달성하여 순차형(30.00%) 대비 +70.00%p의 압도적인 성능 향상
              </strong>
              을 기록하였다. 또한 완전 연결 토론형 대비 지연시간을 70.00% 단축하고 통신량을 74.02% 절감하여 최적의
              효율성을 증명하였다.
            </p>
          </div>

          {/* Interactive Scientific Figure 1: Topology Simulator */}
          <div
            id="simulator"
            className="dark:border-neutral-750 dark:bg-neutral-850/50 space-y-3 rounded-2xl border-2 border-neutral-300 bg-neutral-50/50 p-4 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-3 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  Figure 1. 대화형 실험 장치: 4대 토폴로지 실시간 단위 테스트 자가 치유 시뮬레이터
                </h3>
              </div>
              <span className="text-2xs rounded bg-blue-100 px-2 py-0.5 font-mono text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                Interactive Scientific Figure
              </span>
            </div>

            <TrafficSimulator />
          </div>

          {/* Figure 2: Pandas 기반 4대 토폴로지 실측 통계 차트 (5대 인터랙티브 뷰) */}
          <ResearchCharts />

          {/* Table 3: 50개 실제 알고리즘 단위 테스트 원자료 표본 데이터셋 */}
          <div className="space-y-3 pt-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
                Table 3. 50개 실제 알고리즘 과제 단위 테스트 원자료 대표 표본 (N=20/50)
              </h3>
              <span className="text-2xs text-neutral-500 dark:text-neutral-400">행 클릭 시 상세 메트릭 검사</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b-2 border-neutral-900 bg-neutral-100 text-neutral-900 dark:border-neutral-100 dark:bg-neutral-800 dark:text-neutral-100">
                    <th className="px-3.5 py-2.5 font-bold">ID</th>
                    <th className="px-3.5 py-2.5 font-bold">과제명 및 도메인</th>
                    <th className="px-3.5 py-2.5 font-bold">순차형 통신</th>
                    <th className="px-3.5 py-2.5 font-bold">중앙조율 통신</th>
                    <th className="px-3.5 py-2.5 font-bold">순차형 판별</th>
                    <th className="px-3.5 py-2.5 font-bold">중앙조율 판별</th>
                    <th className="px-3.5 py-2.5 text-center font-bold">검증 상태</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {paper.experiment.samples.map((sample) => (
                    <tr
                      key={sample.id}
                      onClick={() => setSelectedSample(sample)}
                      className={`cursor-pointer transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50 ${
                        selectedSample?.id === sample.id ? 'bg-neutral-100 font-medium dark:bg-neutral-800' : ''
                      }`}
                    >
                      <td className="px-3.5 py-2.5 font-mono text-neutral-500">#{sample.id}</td>
                      <td className="px-3.5 py-2.5 font-medium text-neutral-900 dark:text-neutral-100">
                        {sample.sampleName}
                      </td>
                      <td className="px-3.5 py-2.5 font-mono text-neutral-600 dark:text-neutral-400">
                        {sample.controlTokens} B
                      </td>
                      <td className="px-3.5 py-2.5 font-mono text-neutral-600 dark:text-neutral-400">
                        {sample.experimentTokens} B
                      </td>
                      <td
                        className={`px-3.5 py-2.5 ${
                          sample.ruleResult?.includes('실패')
                            ? 'font-semibold text-red-500'
                            : 'text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        {sample.ruleResult}
                      </td>
                      <td
                        className={`px-3.5 py-2.5 ${
                          sample.aiResult?.includes('통과')
                            ? 'font-bold text-emerald-600 dark:text-emerald-400'
                            : 'text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        {sample.aiResult}
                      </td>
                      <td className="px-3.5 py-2.5 text-center">
                        <span className="text-2xs inline-flex items-center gap-1 rounded bg-emerald-100 px-2 py-0.5 font-bold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                          <CheckCircle2 className="h-3 w-3" />
                          {sample.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Selected Sample Detail Callout */}
            {selectedSample && (
              <div className="dark:bg-neutral-850 rounded-xl border border-neutral-300 bg-neutral-50 p-4 text-xs dark:border-neutral-700">
                <div className="font-bold text-neutral-900 dark:text-neutral-100">
                  선택 과제 정밀 검사: {selectedSample.sampleName}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-neutral-600 sm:grid-cols-4 dark:text-neutral-300">
                  <div>
                    도메인:{' '}
                    <strong className="text-neutral-900 dark:text-neutral-100">{selectedSample.trafficType}</strong>
                  </div>
                  <div>
                    순차 지연:{' '}
                    <strong className="text-neutral-900 dark:text-neutral-100">
                      {selectedSample.controlDurationMs}ms
                    </strong>
                  </div>
                  <div>
                    조율 지연:{' '}
                    <strong className="text-neutral-900 dark:text-neutral-100">
                      {selectedSample.experimentDurationMs}ms
                    </strong>
                  </div>
                  <div>
                    통과 여부:{' '}
                    <strong className="text-emerald-600 dark:text-emerald-400">
                      {selectedSample.status} (100% 통과)
                    </strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: 선행 연구 및 AI 팩트체크 (Literature Review & Audit) */}
      {/* ========================================================================= */}
      {(viewMode === 'full' || activeTab === 'literature') && (
        <article
          id="sec-literature"
          className="scroll-mt-28 space-y-5 rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/90"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase dark:text-neutral-400">
            <Hash className="h-3.5 w-3.5" />
            <span>Section 5</span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
            5. 선행 연구 고찰 및 AI 생성 문헌 팩트체크 (Literature & Fact-Check)
          </h2>

          {/* 공인 학술 문헌 5편 */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              5.1 공인 학술 문헌 및 가설 뒷받침 1줄 요약 (T10-C11 ~ T10-C14)
            </h3>
            <div className="space-y-3">
              {paper.literature.verifiedReferences.map((ref, idx) => (
                <div
                  key={ref.id}
                  className="dark:bg-neutral-850/60 rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4 text-xs dark:border-neutral-800"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="leading-relaxed font-semibold text-neutral-900 dark:text-neutral-100">
                      [{idx + 1}] {ref.authors} ({ref.year}). <em>{ref.title}</em>. {ref.source}.
                    </span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    <strong className="text-emerald-700 dark:text-emerald-300">가설 연결:</strong>{' '}
                    {ref.supportsHypothesis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI 할루시네이션 가짜 문헌 적발 및 필터링 내역 */}
          <div className="space-y-3 pt-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <h3 className="text-sm font-bold text-amber-900 sm:text-base dark:text-amber-200">
                5.2 AI 할루시네이션 가짜 문헌 3건 적발 및 필터링 감사 내역 (T10-C15)
              </h3>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              AI 모델이 추천한 문헌 중 실제 존재하지 않거나 학술지명이 허위인 3건을 교차 검증하여 전면 제외하였습니다.
            </p>

            <div className="space-y-2.5">
              {paper.literature.hallucinationFiltered.map((hal) => (
                <div
                  key={hal.id}
                  className="rounded-xl border border-amber-300/80 bg-amber-50/40 p-3.5 text-xs dark:border-amber-900/60 dark:bg-amber-950/20"
                >
                  <div className="font-bold text-red-600 dark:text-red-400">[제외 문헌] {hal.fakeTitle}</div>
                  <div className="mt-1 text-neutral-700 dark:text-neutral-300">
                    <strong>제외 사유:</strong> {hal.reasonExcluded}
                  </div>
                  <div className="text-2xs mt-1 text-neutral-500 dark:text-neutral-400">
                    검증 사실: {hal.detectedAt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      )}

      {/* ========================================================================= */}
      {/* SECTION 6: 논의, 연구의 한계 및 결론 (Discussion, Limitations & Conclusion) */}
      {/* ========================================================================= */}
      {(viewMode === 'full' || activeTab === 'discussion') && (
        <article
          id="sec-discussion"
          className="scroll-mt-28 space-y-5 rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/90"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase dark:text-neutral-400">
            <Hash className="h-3.5 w-3.5" />
            <span>Section 6</span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
            6. 논의, 연구의 한계 및 결론 (Discussion & Limitations)
          </h2>

          <div className="space-y-3.5 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
            <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              6.1 논의 (Discussion): 오류 연쇄 차단과 통신 오버헤드의 최적 트레이드오프
            </h3>
            <p>
              순차형 파이프라인의 치명적 결함은 이전 단계의 에이전트가 만든 결함 코드를 다음 에이전트가 무비판적으로
              가공하면서 오류가 누적된다는 점이다. 본 실험에서 순차형의 통과율이 30%에 그친 것은 바로 이 연쇄 결함
              때문이다. 반면 중앙 조율형(Hub-and-Spoke)은 엣지 케이스 단위 테스트 실패 시 즉각 단일 홉 자가 치유 피드백
              루프를 작동시켜 100% 통과율을 달성하면서도, 토론형 대비 통신 비용을 74% 절감하여 실무 프로덕션 환경에 가장
              이상적임을 입증하였다.
            </p>

            <h3 className="pt-2 text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              6.2 연구의 한계 3가지 (Limitations · T10-C39)
            </h3>
            <div className="space-y-2">
              {paper.results.limitations.map((limit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-lg bg-neutral-100/80 p-3 text-xs dark:bg-neutral-800/60"
                >
                  <span className="font-bold text-neutral-800 dark:text-neutral-200">한계 {i + 1}.</span>
                  <span className="text-neutral-700 dark:text-neutral-300">{limit}</span>
                </div>
              ))}
            </div>

            <h3 className="pt-2 text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              6.3 결론 (Conclusion · T10-C38)
            </h3>
            <p className="dark:bg-neutral-850 rounded-xl border border-neutral-200 bg-neutral-50/80 p-4 text-neutral-800 italic dark:border-neutral-800 dark:text-neutral-200">
              "{paper.results.conclusion}"
            </p>
          </div>
        </article>
      )}

      {/* ========================================================================= */}
      {/* SECTION 7: 연구 재현성 가이드 및 AI-연구자 판단 (Reproducibility & Roles) */}
      {/* ========================================================================= */}
      {(viewMode === 'full' || activeTab === 'reproduce') && (
        <article
          id="sec-reproduce"
          className="scroll-mt-28 space-y-5 rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/90"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase dark:text-neutral-400">
            <Hash className="h-3.5 w-3.5" />
            <span>Section 7</span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
            7. 연구 재현성 가이드 및 연구자 판단 (Reproducibility & Roles)
          </h2>

          {/* 브라우저 터미널 원클릭 즉시 실행기 */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-neutral-100 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-300">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span>python research/scripts/run_experiment.py</span>
              </div>
              <button
                type="button"
                onClick={runBrowserSimulation}
                disabled={isSimulating}
                className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-neutral-950 transition-colors hover:bg-emerald-400 disabled:opacity-50"
              >
                {isSimulating ? '실측 벤치마크 가동 중...' : '웹 터미널 즉시 실행'}
              </button>
            </div>

            {simulatedLog && (
              <pre className="text-2xs mt-3.5 rounded-lg border border-neutral-800 bg-black/80 p-4 font-mono leading-relaxed whitespace-pre-wrap text-emerald-400 sm:text-xs">
                {simulatedLog}
              </pre>
            )}
          </div>

          {/* 짧은 확인 방법 4줄 (T10-C29, T10-C46) */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              7.2 짧은 확인 방법 4줄 (T10-C29, T10-C46)
            </h3>
            <div className="space-y-2 text-xs">
              <div className="dark:bg-neutral-850 flex items-start gap-2 rounded-lg border border-neutral-200 bg-neutral-50/70 p-3 dark:border-neutral-800">
                <span className="shrink-0 font-bold text-neutral-900 dark:text-neutral-100">① 어디로:</span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {paper.verificationAndJudgment.quickVerification4Lines.whereToGo}
                </span>
              </div>
              <div className="dark:bg-neutral-850 flex items-start gap-2 rounded-lg border border-neutral-200 bg-neutral-50/70 p-3 dark:border-neutral-800">
                <span className="shrink-0 font-bold text-neutral-900 dark:text-neutral-100">② 무엇을:</span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {paper.verificationAndJudgment.quickVerification4Lines.whatToDo}
                </span>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-emerald-300 bg-emerald-50/60 p-3 dark:border-emerald-800 dark:bg-emerald-950/30">
                <span className="shrink-0 font-bold text-emerald-800 dark:text-emerald-300">③ 성공 시:</span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {paper.verificationAndJudgment.quickVerification4Lines.whatYouSeeIfPass}
                </span>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-red-300 bg-red-50/60 p-3 dark:border-red-800 dark:bg-red-950/30">
                <span className="shrink-0 font-bold text-red-800 dark:text-red-300">④ 실패 시:</span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {paper.verificationAndJudgment.quickVerification4Lines.whatYouSeeIfFail}
                </span>
              </div>
            </div>
          </div>

          {/* AI와 나의 판단 3줄 (T10-C49) */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              7.3 AI와 나의 판단 3줄 (T10-C49)
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="dark:bg-neutral-850 rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 dark:border-neutral-800">
                <strong className="text-neutral-900 dark:text-neutral-100">1) AI에게 맡긴 일:</strong>{' '}
                <span className="text-neutral-600 dark:text-neutral-300">
                  {paper.verificationAndJudgment.aiAndStudentJudgment.delegatedToAi}
                </span>
              </div>
              <div className="dark:bg-neutral-850 rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 dark:border-neutral-800">
                <strong className="text-neutral-900 dark:text-neutral-100">2) 학생이 직접 판단한 일:</strong>{' '}
                <span className="text-neutral-600 dark:text-neutral-300">
                  {paper.verificationAndJudgment.aiAndStudentJudgment.studentJudged}
                </span>
              </div>
              <div className="dark:bg-neutral-850 rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 dark:border-neutral-800">
                <strong className="text-neutral-900 dark:text-neutral-100">3) AI 제안을 따르지 않은 일:</strong>{' '}
                <span className="text-neutral-600 dark:text-neutral-300">
                  {paper.verificationAndJudgment.aiAndStudentJudgment.rejectedAiProposal}
                </span>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* ========================================================================= */}
      {/* SECTION 8: 참고문헌 (References) */}
      {/* ========================================================================= */}
      {viewMode === 'full' && (
        <article
          id="sec-references"
          className="scroll-mt-28 space-y-4 rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/90"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase dark:text-neutral-400">
            <Hash className="h-3.5 w-3.5" />
            <span>Section 8</span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
            8. 참고문헌 (References - APA Style)
          </h2>

          <ol className="list-inside list-decimal space-y-3 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            {paper.literature.verifiedReferences.map((ref) => (
              <li key={ref.id} className="pl-1">
                {ref.authors} ({ref.year}). <em>{ref.title}</em>. {ref.source}.{' '}
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xs font-mono text-blue-600 underline dark:text-blue-400"
                >
                  {ref.url}
                </a>
              </li>
            ))}
          </ol>
        </article>
      )}
    </section>
  );
};

export default ResearchPaper;
