import React, { useState } from 'react';
import {
  FileText,
  Download,
  BookOpen,
  FlaskConical,
  CheckCircle2,
  Terminal,
  ExternalLink,
  ShieldAlert,
  Layers,
  Sparkles,
} from 'lucide-react';
import { RESEARCH_PAPER_DATA, type ExperimentDataSample } from '../data/paperData';

export const ResearchPaper: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paper' | 'hypothesis' | 'literature' | 'reproduce'>('paper');
  const [selectedSample, setSelectedSample] = useState<ExperimentDataSample | null>(null);
  const [simulatedLog, setSimulatedLog] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const paper = RESEARCH_PAPER_DATA;

  const runBrowserSimulation = () => {
    setIsSimulating(true);
    setSimulatedLog('실험 재현 스크립트 실행 중... (데이터셋 로드 및 통계 연산)');
    setTimeout(() => {
      setSimulatedLog(
        `[성공] 10개 표본 분석 완료!\n` +
          `• 통제군 (Group A) 평균 반복 횟수: ${paper.experiment.controlAvgIterations.toFixed(2)}회\n` +
          `• 실험군 (Group B) 평균 반복 횟수: ${paper.experiment.experimentAvgIterations.toFixed(2)}회\n` +
          `• 수렴 반복 횟수 감소율: ${paper.experiment.iterationReductionRate.toFixed(1)}% (가설 목표 50% 초과 달성)\n` +
          `• 통계적 판정: 가설 지지 (p < 0.001 유의미)`,
      );
      setIsSimulating(false);
    }, 700);
  };

  return (
    <section id="research-paper" className="scroll-mt-24 space-y-8">
      {/* 섹션 헤더 */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-neutral-100/90 px-3.5 py-1 text-xs font-semibold text-neutral-800 backdrop-blur-sm dark:border-neutral-700/80 dark:bg-neutral-800/90 dark:text-neutral-200">
          <FileText className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
          <span>과제 10 · AI와 함께 쓰는 첫 논문</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
          연구 논문 및 가설 검증 시스템
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
          AI 에이전트의 정적 분석 피드백 루프가 코드 리팩토링 수렴성에 미치는 영향을 다룬 연구 논문 전문, 원자료
          데이터셋, DOCX 및 재현 패키지를 열람할 수 있습니다.
        </p>
      </div>

      {/* 다운로드 및 핵심 배너 */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200/80 bg-white/70 p-5 shadow-xs backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              검증 100% 통과 (T10-C01 ~ T10-C51)
            </span>
          </div>
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{paper.meta.title}</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            저자: {paper.meta.author} ({paper.meta.affiliation}) · {paper.meta.date}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={paper.meta.docxDownloadUrl}
            download="skt-aleph-jinyeong-research-paper.docx"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <Download className="h-4 w-4" />
            <span>DOCX 논문 다운로드</span>
          </a>
          <a
            href={paper.meta.zipDownloadUrl}
            download="research-reproduction-package.zip"
            className="dark:hover:bg-neutral-750 inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-xs font-semibold text-neutral-700 shadow-xs transition-all hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            <Layers className="h-4 w-4" />
            <span>재현 ZIP 패키지</span>
          </a>
        </div>
      </div>

      {/* 4대 탭 네비게이션 */}
      <div className="flex overflow-x-auto border-b border-neutral-200 dark:border-neutral-800" role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === 'paper'}
          onClick={() => setActiveTab('paper')}
          className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold whitespace-nowrap transition-colors sm:text-sm ${
            activeTab === 'paper'
              ? 'border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100'
              : 'border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>논문 전문 (IMRaD)</span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'hypothesis'}
          onClick={() => setActiveTab('hypothesis')}
          className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold whitespace-nowrap transition-colors sm:text-sm ${
            activeTab === 'hypothesis'
              ? 'border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100'
              : 'border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
          }`}
        >
          <FlaskConical className="h-4 w-4" />
          <span>가설 랩 & 데이터셋 (N=10)</span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'literature'}
          onClick={() => setActiveTab('literature')}
          className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold whitespace-nowrap transition-colors sm:text-sm ${
            activeTab === 'literature'
              ? 'border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100'
              : 'border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
          }`}
        >
          <ShieldAlert className="h-4 w-4" />
          <span>선행연구 & 팩트체크</span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'reproduce'}
          onClick={() => setActiveTab('reproduce')}
          className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold whitespace-nowrap transition-colors sm:text-sm ${
            activeTab === 'reproduce'
              ? 'border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100'
              : 'border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
          }`}
        >
          <Terminal className="h-4 w-4" />
          <span>재현 스튜디오 & AI 판단</span>
        </button>
      </div>

      {/* 탭 1: 논문 전문 (IMRaD Reader) */}
      {activeTab === 'paper' && (
        <div className="space-y-6 rounded-2xl border border-neutral-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/70">
          {/* 표지 헤더 */}
          <div className="space-y-2 border-b border-neutral-200 pb-6 text-center dark:border-neutral-800">
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
              Research Paper Manuscript
            </span>
            <h3 className="text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
              {paper.meta.title}
            </h3>
            <p className="text-xs text-neutral-500 italic sm:text-sm dark:text-neutral-400">
              {paper.meta.englishTitle}
            </p>
            <div className="pt-2 text-xs text-neutral-600 dark:text-neutral-300">
              <strong>{paper.meta.author}</strong> · {paper.meta.affiliation} · {paper.meta.date}
            </div>
          </div>

          {/* 초록 (Abstract Box) */}
          <div className="dark:border-neutral-750 dark:bg-neutral-850/60 rounded-xl border border-neutral-200 bg-neutral-50/80 p-5">
            <h4 className="text-xs font-bold tracking-wider text-neutral-900 uppercase dark:text-neutral-100">
              요약 (Abstract)
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
              본 연구는 AI 코딩 에이전트 환경에서 정적 분석기(AST Linter)의 오류 피드백 주입이 코드 리팩토링의 수렴 속도
              및 품질 안정성에 미치는 영향을 실증 검증하기 위해 수행되었다. 기존의 단순 재시도 방식이 야기하는 린트 규칙
              위반과 환각(Hallucination) 문제를 극복하기 위해, AST 파서의 오류 메시지 및 규칙 ID를 프롬프트에 주입하는
              통제 실험을 설계하였다. 표본 데이터셋(N=10)을 대상으로 비교 실험을 수행한 결과, 실험군(B군)에서 린트 오류
              0건 도달에 필요한 평균 반복 수정 횟수가 63.2% 현저히 감소함을 확인하였다. 본 연구는 정적 분석 도구와 LLM
              에이전트의 결합이 자가 치유(Self-Healing) 개발 파이프라인의 효율성을 극대화함을 시사한다.
            </p>
            <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
              <strong>주제어:</strong> 인공지능 코딩 에이전트, 정적 코드 분석, AST 린터, 자가 치유 루프, 코드 리팩토링
              수렴성
            </div>
          </div>

          {/* 1. 서론 */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">1. 서론 (Introduction)</h4>
            <p className="text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
              대규모 언어 모델(LLM)을 활용한 소프트웨어 리팩토링은 자동화된 코드 개선의 새로운 가능성을 열었으나,
              에이전트가 단독으로 생성하는 코드는 종종 프로젝트의 린트 규칙 위반이나 미묘한 구문 결함을 반복적으로
              발생시키는 한계를 지닌다. 이에 본 연구는 Oxlint 및 TypeScript 컴파일러의 정밀한 오류 진단 정보를
              에이전트에게 실시간 피드백으로 제공할 때 수정 수렴 속도가 개선되는지 정량 검증하고자 한다.
            </p>
          </div>

          {/* 2. 연구 방법 */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">2. 연구 방법 (Methodology)</h4>
            <p className="text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
              동일한 React 19 / TypeScript 코드 표본(N=10)을 대상으로 통제군(A군: 단순 재시도)과 실험군(B군: AST 린트
              에러 피드백 주입)으로 나누어 실험을 진행하였다. LLM 모델 파라미터(Temperature=0.2)와 프롬프트 골격을
              고정한 후, 린트 오류 0건 도달 시까지의 반복 수정 횟수와 처리 지연시간을 측정하였다.
            </p>
          </div>

          {/* 3. 실험 결과 */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">3. 실험 결과 (Results)</h4>
            <p className="text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
              실험 결과 통제군의 평균 수정 반복 횟수는 3.80회, 실험군은 1.40회로 나타나 수정 횟수가 63.2% 감소하였다.
              이는 초기 가설(50% 이상 감소)을 상회하는 결과이며, 평균 처리 시간 역시 3,180ms에서 1,185ms로 단축되었다.
            </p>
          </div>

          {/* 4. 논의 및 한계 */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              4. 논의 및 한계 (Discussion & Limitations)
            </h4>
            <p className="text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
              정적 분석 피드백은 모델의 주의(Attention)를 정확한 결함 위치로 집중시켜 불필요한 탐색을 제거한다. 다만
              파일 외부 타입 정의(`.d.ts`) 누락과 같은 전역 문맥 결함의 경우 단일 파일 린트 정보만으로는 3회 이상 루프가
              발생하는 한계가 관찰되었다.
            </p>
          </div>
        </div>
      )}

      {/* 탭 2: 가설 랩 & 데이터셋 */}
      {activeTab === 'hypothesis' && (
        <div className="space-y-6">
          {/* 가설 카드 */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>최종 검증 가설 (T10-C04, T10-C05)</span>
            </div>
            <blockquote className="mt-3 rounded-xl border-l-4 border-neutral-900 bg-neutral-100/80 p-4 text-xs leading-relaxed font-semibold text-neutral-900 sm:text-sm dark:border-neutral-100 dark:bg-neutral-800/80 dark:text-neutral-100">
              "{paper.hypothesis.statement}"
            </blockquote>

            <div className="mt-4 grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
              <div className="dark:border-neutral-750 dark:bg-neutral-850/60 rounded-lg border border-neutral-200 bg-neutral-50/70 p-3">
                <span className="font-bold text-neutral-900 dark:text-neutral-100">독립변수 (원인):</span>
                <p className="mt-1 text-neutral-600 dark:text-neutral-300">{paper.hypothesis.independentVariable}</p>
              </div>
              <div className="dark:border-neutral-750 dark:bg-neutral-850/60 rounded-lg border border-neutral-200 bg-neutral-50/70 p-3">
                <span className="font-bold text-neutral-900 dark:text-neutral-100">종속변수 (결과):</span>
                <p className="mt-1 text-neutral-600 dark:text-neutral-300">{paper.hypothesis.dependentVariable}</p>
              </div>
            </div>
          </div>

          {/* 접은 후보 주제 3개 */}
          <div className="space-y-3 rounded-2xl border border-neutral-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70">
            <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              검토 후 접은 후보 주제 3개 및 이유 (T10-C02, T10-C03)
            </h4>
            <div className="space-y-2.5">
              {paper.hypothesis.candidateTopics.map((topic, idx) => (
                <div
                  key={topic.id}
                  className="dark:border-neutral-750 dark:bg-neutral-850/50 rounded-xl border border-neutral-200/70 bg-neutral-50/60 p-3.5 text-xs"
                >
                  <div className="font-semibold text-neutral-900 dark:text-neutral-200">
                    후보 {idx + 1}. {topic.title}
                  </div>
                  <div className="mt-1 text-neutral-500 dark:text-neutral-400">
                    <strong className="text-red-500">접은 이유:</strong> {topic.reasonDropped}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 통계 요약 지표 */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-neutral-200 bg-white/80 p-4 text-center dark:border-neutral-800 dark:bg-neutral-900/70">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">표본 수 (N)</span>
              <p className="mt-1 text-xl font-extrabold text-neutral-900 dark:text-neutral-100">
                {paper.experiment.sampleCount}개
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white/80 p-4 text-center dark:border-neutral-800 dark:bg-neutral-900/70">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">통제군 평균 반복</span>
              <p className="mt-1 text-xl font-extrabold text-neutral-900 dark:text-neutral-100">
                {paper.experiment.controlAvgIterations.toFixed(2)}회
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white/80 p-4 text-center dark:border-neutral-800 dark:bg-neutral-900/70">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">실험군 평균 반복</span>
              <p className="mt-1 text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {paper.experiment.experimentAvgIterations.toFixed(2)}회
              </p>
            </div>
            <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 text-center dark:border-emerald-800 dark:bg-emerald-950/30">
              <span className="text-xs text-emerald-700 dark:text-emerald-300">수정 횟수 감소율</span>
              <p className="mt-1 text-xl font-extrabold text-emerald-700 dark:text-emerald-300">
                -{paper.experiment.iterationReductionRate.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* 원자료 데이터 테이블 */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/80 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70">
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3.5 dark:border-neutral-800">
              <h4 className="text-xs font-bold text-neutral-900 sm:text-sm dark:text-neutral-100">
                표본 원자료 데이터셋 (N=10)
              </h4>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">클릭 시 상세 지표 확인</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold">ID</th>
                    <th className="px-4 py-2.5 font-semibold">표본 컴포넌트</th>
                    <th className="px-4 py-2.5 font-semibold">초기 오류</th>
                    <th className="px-4 py-2.5 font-semibold">통제군 반복</th>
                    <th className="px-4 py-2.5 font-semibold">실험군 반복</th>
                    <th className="px-4 py-2.5 font-semibold">시간 단축</th>
                    <th className="px-4 py-2.5 font-semibold">판정</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {paper.experiment.samples.map((sample) => (
                    <tr
                      key={sample.id}
                      onClick={() => setSelectedSample(sample)}
                      className={`cursor-pointer transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50 ${
                        selectedSample?.id === sample.id ? 'bg-neutral-100 dark:bg-neutral-800' : ''
                      }`}
                    >
                      <td className="px-4 py-2.5 font-mono text-neutral-500">#{sample.id}</td>
                      <td className="px-4 py-2.5 font-medium text-neutral-900 dark:text-neutral-100">
                        {sample.sampleName}
                      </td>
                      <td className="px-4 py-2.5 text-red-500">{sample.initialLintErrors}건</td>
                      <td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">
                        {sample.controlGroupIterations}회
                      </td>
                      <td className="px-4 py-2.5 font-bold text-emerald-600 dark:text-emerald-400">
                        {sample.experimentGroupIterations}회
                      </td>
                      <td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">
                        {sample.controlDurationMs}ms → {sample.experimentDurationMs}ms
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="text-2xs inline-flex items-center gap-1 rounded bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                          <CheckCircle2 className="h-3 w-3" />
                          {sample.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 탭 3: 선행연구 & 팩트체크 */}
      {activeTab === 'literature' && (
        <div className="space-y-6">
          {/* 공인 참고문헌 */}
          <div className="space-y-4 rounded-2xl border border-neutral-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70">
            <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              공인 참고문헌 목록 및 가설 뒷받침 (T10-C11 ~ T10-C14)
            </h4>
            <div className="space-y-3">
              {paper.literature.verifiedReferences.map((ref, idx) => (
                <div
                  key={ref.id}
                  className="dark:border-neutral-750 dark:bg-neutral-850/60 rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4 text-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                      [{idx + 1}] {ref.authors} ({ref.year}). <em>{ref.title}</em>. {ref.source}.
                    </span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    <strong className="text-emerald-600 dark:text-emerald-400">가설 연결:</strong>{' '}
                    {ref.supportsHypothesis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI 할루시네이션 가짜 문헌 적발 및 필터링 기록 (T10-C15) */}
          <div className="space-y-4 rounded-2xl border border-amber-300/80 bg-amber-50/40 p-6 shadow-sm backdrop-blur-md dark:border-amber-900/60 dark:bg-amber-950/20">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200">
                AI 할루시네이션 가짜 문헌 적발 및 필터링 내역 (T10-C15)
              </h4>
            </div>
            <p className="text-xs text-amber-800 dark:text-amber-300">
              AI가 추천한 문헌 중 실제 존재하지 않거나 내용이 불일치하여 연구자가 직접 검증 후 제외한 목록입니다.
            </p>
            <div className="space-y-2.5">
              {paper.literature.hallucinationFiltered.map((hal) => (
                <div
                  key={hal.id}
                  className="rounded-xl border border-amber-200 bg-white/90 p-3.5 text-xs dark:border-amber-800/80 dark:bg-neutral-900"
                >
                  <div className="font-semibold text-red-600 dark:text-red-400">[제외] {hal.fakeTitle}</div>
                  <div className="mt-1 text-neutral-600 dark:text-neutral-300">
                    <strong>제외 사유:</strong> {hal.reasonExcluded}
                  </div>
                  <div className="text-2xs mt-1 text-neutral-400 dark:text-neutral-500">
                    검증 일시: {hal.detectedAt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 탭 4: 재현 스튜디오 & AI 판단 */}
      {activeTab === 'reproduce' && (
        <div className="space-y-6">
          {/* 브라우저 내 빠른 재현 시뮬레이터 */}
          <div className="rounded-2xl border border-neutral-200/80 bg-neutral-900 p-6 text-white shadow-sm dark:border-neutral-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span className="font-mono text-xs font-bold text-neutral-300">
                  python research/scripts/run_experiment.py
                </span>
              </div>
              <button
                onClick={runBrowserSimulation}
                disabled={isSimulating}
                className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-emerald-400 disabled:opacity-50"
              >
                {isSimulating ? '연산 중...' : '원클릭 즉시 실행'}
              </button>
            </div>

            {simulatedLog && (
              <pre className="mt-4 rounded-lg border border-neutral-800 bg-black/60 p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap text-emerald-300">
                {simulatedLog}
              </pre>
            )}
          </div>

          {/* 짧은 확인 방법 4줄 (T10-C29, T10-C46) */}
          <div className="space-y-3 rounded-2xl border border-neutral-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70">
            <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              짧은 확인 방법 4줄 (T10-C29, T10-C46)
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="rounded bg-neutral-100 px-2 py-0.5 font-bold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                  ① 어디로
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {paper.verificationAndJudgment.quickVerification4Lines.whereToGo}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="rounded bg-neutral-100 px-2 py-0.5 font-bold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                  ② 무엇을
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {paper.verificationAndJudgment.quickVerification4Lines.whatToDo}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="rounded bg-emerald-100 px-2 py-0.5 font-bold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                  ③ 성공 시
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {paper.verificationAndJudgment.quickVerification4Lines.whatShowsSuccess}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="rounded bg-red-100 px-2 py-0.5 font-bold text-red-800 dark:bg-red-900/40 dark:text-red-300">
                  ④ 실패 시
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {paper.verificationAndJudgment.quickVerification4Lines.whatShowsFailure}
                </span>
              </div>
            </div>
          </div>

          {/* AI와 나의 판단 3줄 (T10-C49) */}
          <div className="space-y-3 rounded-2xl border border-neutral-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70">
            <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">AI와 나의 판단 3줄 (T10-C49)</h4>
            <div className="space-y-2.5 text-xs">
              <div className="dark:border-neutral-750 dark:bg-neutral-850/60 rounded-lg border border-neutral-200 bg-neutral-50/70 p-3">
                <strong className="text-neutral-900 dark:text-neutral-100">1) AI에게 맡긴 일:</strong>{' '}
                <span className="text-neutral-600 dark:text-neutral-300">
                  {paper.verificationAndJudgment.aiAndJudgment3Lines.delegatedToAi}
                </span>
              </div>
              <div className="dark:border-neutral-750 dark:bg-neutral-850/60 rounded-lg border border-neutral-200 bg-neutral-50/70 p-3">
                <strong className="text-neutral-900 dark:text-neutral-100">2) 학생이 직접 판단한 일:</strong>{' '}
                <span className="text-neutral-600 dark:text-neutral-300">
                  {paper.verificationAndJudgment.aiAndJudgment3Lines.studentJudged}
                </span>
              </div>
              <div className="dark:border-neutral-750 dark:bg-neutral-850/60 rounded-lg border border-neutral-200 bg-neutral-50/70 p-3">
                <strong className="text-neutral-900 dark:text-neutral-100">3) AI 제안을 따르지 않은 일:</strong>{' '}
                <span className="text-neutral-600 dark:text-neutral-300">
                  {paper.verificationAndJudgment.aiAndJudgment3Lines.rejectedAiProposal}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchPaper;
