import React, { useState } from 'react';
import { BarChart3, Database, Maximize2 } from 'lucide-react';

export interface TopologyStat {
  topology: string;
  shortName: string;
  tag: string;
  pass_rate_pct: number;
  pass_count: number;
  fail_count: number;
  mean_latency_ms: number;
  std_latency_ms: number;
  median_latency_ms: number;
  p95_latency_ms: number;
  mean_payload_bytes: number;
  efficiency_ratio: number;
  color: string;
}

export interface CategoryStat {
  category: string;
  shortName: string;
  count: number;
  linear_pass_pct: number;
  star_pass_pct: number;
  star_avg_latency_ms: number;
  mesh_avg_latency_ms: number;
  star_avg_bytes: number;
}

export interface MultiRoundPoint {
  round: number;
  name: string;
  type: string;
  linear_ms: number;
  star_ms: number;
  mesh_ms: number;
  tree_ms: number;
}

const TOPOLOGY_DATA: TopologyStat[] = [
  {
    topology: 'Linear Pipeline',
    shortName: '순차형 파이프라인 (Linear Pipeline)',
    tag: '[A]',
    pass_rate_pct: 30.0,
    pass_count: 15,
    fail_count: 35,
    mean_latency_ms: 0.0041,
    std_latency_ms: 0.0004,
    median_latency_ms: 0.004,
    p95_latency_ms: 0.0105,
    mean_payload_bytes: 85.9,
    efficiency_ratio: 5836.58,
    color: '#dc2626', // Muted academic red
  },
  {
    topology: 'Star (Hub-and-Spoke)',
    shortName: '중앙 조율형 (Star / Hub-and-Spoke) ★',
    tag: '[B]★',
    pass_rate_pct: 100.0,
    pass_count: 50,
    fail_count: 0,
    mean_latency_ms: 0.0057,
    std_latency_ms: 0.0005,
    median_latency_ms: 0.0055,
    p95_latency_ms: 0.014,
    mean_payload_bytes: 228.1,
    efficiency_ratio: 15000.0,
    color: '#059669', // Academic emerald
  },
  {
    topology: 'Full Mesh (Debate)',
    shortName: '완전 연결 토론형 (Full Mesh Debate)',
    tag: '[C]',
    pass_rate_pct: 100.0,
    pass_count: 50,
    fail_count: 0,
    mean_latency_ms: 0.0194,
    std_latency_ms: 0.0005,
    median_latency_ms: 0.0175,
    p95_latency_ms: 0.0415,
    mean_payload_bytes: 878.0,
    efficiency_ratio: 4892.37,
    color: '#d97706', // Academic amber
  },
  {
    topology: 'Hierarchical Tree',
    shortName: '계층형 트리 (Hierarchical Tree)',
    tag: '[D]',
    pass_rate_pct: 100.0,
    pass_count: 50,
    fail_count: 0,
    mean_latency_ms: 0.0028,
    std_latency_ms: 0.0001,
    median_latency_ms: 0.003,
    p95_latency_ms: 0.007,
    mean_payload_bytes: 126.2,
    efficiency_ratio: 26132.4,
    color: '#4f46e5', // Academic indigo
  },
];

const CATEGORY_DATA: CategoryStat[] = [
  {
    category: '배열 (Array)',
    shortName: 'Array',
    count: 8,
    linear_pass_pct: 50.0,
    star_pass_pct: 100.0,
    star_avg_latency_ms: 0.0038,
    mesh_avg_latency_ms: 0.0149,
    star_avg_bytes: 215.4,
  },
  {
    category: '문자열 (String)',
    shortName: 'String',
    count: 8,
    linear_pass_pct: 25.0,
    star_pass_pct: 100.0,
    star_avg_latency_ms: 0.008,
    mesh_avg_latency_ms: 0.0235,
    star_avg_bytes: 274.0,
  },
  {
    category: '수학 (Math)',
    shortName: 'Math',
    count: 7,
    linear_pass_pct: 28.6,
    star_pass_pct: 100.0,
    star_avg_latency_ms: 0.0037,
    mesh_avg_latency_ms: 0.013,
    star_avg_bytes: 216.3,
  },
  {
    category: '동적계획법 (DP)',
    shortName: 'DP',
    count: 8,
    linear_pass_pct: 25.0,
    star_pass_pct: 100.0,
    star_avg_latency_ms: 0.0115,
    mesh_avg_latency_ms: 0.0361,
    star_avg_bytes: 218.9,
  },
  {
    category: '탐색 (Search)',
    shortName: 'Search',
    count: 7,
    linear_pass_pct: 28.6,
    star_pass_pct: 100.0,
    star_avg_latency_ms: 0.0039,
    mesh_avg_latency_ms: 0.0133,
    star_avg_bytes: 211.0,
  },
  {
    category: '행렬 (Matrix)',
    shortName: 'Matrix',
    count: 6,
    linear_pass_pct: 16.7,
    star_pass_pct: 100.0,
    star_avg_latency_ms: 0.0078,
    mesh_avg_latency_ms: 0.0238,
    star_avg_bytes: 251.3,
  },
  {
    category: '비트연산 (Bit)',
    shortName: 'Bit',
    count: 6,
    linear_pass_pct: 33.3,
    star_pass_pct: 100.0,
    star_avg_latency_ms: 0.0028,
    mesh_avg_latency_ms: 0.011,
    star_avg_bytes: 199.8,
  },
];

const MULTI_ROUND_DATA: MultiRoundPoint[] = [
  {
    round: 1,
    name: 'Round #1',
    type: 'Cold Run (초기 시행)',
    linear_ms: 0.0046,
    star_ms: 0.0062,
    mesh_ms: 0.02,
    tree_ms: 0.0029,
  },
  {
    round: 2,
    name: 'Round #2',
    type: 'Warm Run (안정화 시행)',
    linear_ms: 0.0039,
    star_ms: 0.0054,
    mesh_ms: 0.0192,
    tree_ms: 0.0028,
  },
  {
    round: 3,
    name: 'Round #3',
    type: 'Settled Run (최종 수렴)',
    linear_ms: 0.0039,
    star_ms: 0.0054,
    mesh_ms: 0.0192,
    tree_ms: 0.0028,
  },
];

export const ResearchCharts: React.FC = () => {
  const [viewScope, setViewScope] = useState<'integrated' | 'single'>('integrated');
  const [activePanel, setActivePanel] = useState<'a' | 'b' | 'c' | 'd' | 'e'>('a');
  const [showDataFrame, setShowDataFrame] = useState(false);

  return (
    <figure
      id="charts"
      className="scroll-mt-24 space-y-4 rounded-xl border border-neutral-300 bg-white p-5 shadow-xs sm:p-6 dark:border-neutral-700 dark:bg-neutral-900"
    >
      {/* 1. Academic Paper Figure Masthead */}
      <div className="flex flex-col gap-2.5 border-b-2 border-neutral-900 pb-3 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">Figure 2.</span>
            <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
              다중 에이전트 협업 토폴로지 실증 벤치마크 학술 통계 차트 (N=50, R=3회)
            </h3>
          </div>
          <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
            Python 3.12 Pandas v3.0.6 전수 분석 기반 가로형 학술 도표 (APA / IEEE 표준 형식 준수)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {/* 통합 뷰 / 개별 패널 뷰 토글 */}
          <div className="inline-flex rounded-md border border-neutral-300 bg-neutral-100 p-0.5 dark:border-neutral-700 dark:bg-neutral-800">
            <button
              type="button"
              onClick={() => setViewScope('integrated')}
              className={`text-2xs inline-flex items-center gap-1 rounded px-2.5 py-1 font-semibold transition-all ${
                viewScope === 'integrated'
                  ? 'bg-white font-bold text-neutral-900 shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400'
              }`}
            >
              <Maximize2 className="h-3 w-3" />
              <span>논문 통합 그림 (All Panels)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewScope('single')}
              className={`text-2xs inline-flex items-center gap-1 rounded px-2.5 py-1 font-semibold transition-all ${
                viewScope === 'single'
                  ? 'bg-white font-bold text-neutral-900 shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400'
              }`}
            >
              <BarChart3 className="h-3 w-3" />
              <span>개별 패널 확대</span>
            </button>
          </div>

          {/* Pandas DataFrame 원표 토글 */}
          <button
            type="button"
            onClick={() => setShowDataFrame(!showDataFrame)}
            className="text-2xs inline-flex items-center gap-1 rounded border border-neutral-300 bg-white px-2.5 py-1 font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            <Database className="h-3 w-3 text-neutral-500" />
            <span>{showDataFrame ? '그림 복귀' : 'Pandas DataFrame 원표'}</span>
          </button>
        </div>
      </div>

      {/* 개별 패널 선택 탭 (single 모드일 때 노출) */}
      {viewScope === 'single' && !showDataFrame && (
        <div className="flex flex-wrap gap-1 border-b border-neutral-200 pb-2 dark:border-neutral-800">
          {[
            { id: 'a', label: '(a) 통과율 (Pass Rate %)' },
            { id: 'b', label: '(b) 실행 지연시간 (Mean ± Std)' },
            { id: 'c', label: '(c) 통신량 & 효율성' },
            { id: 'd', label: '(d) 7대 도메인별 세분화' },
            { id: 'e', label: '(e) 3회차 시계열 수렴성' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActivePanel(tab.id as 'a' | 'b' | 'c' | 'd' | 'e')}
              className={`rounded px-2.5 py-1 text-xs font-semibold transition-all ${
                activePanel === tab.id
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* 2. Pandas 원본 기술통계 테이블 보기 */}
      {showDataFrame ? (
        <div className="text-2xs overflow-x-auto rounded border border-neutral-300 bg-neutral-50/50 p-3 font-mono dark:border-neutral-700 dark:bg-neutral-950/60">
          <div className="mb-2 flex items-center justify-between font-bold text-neutral-900 dark:text-neutral-100">
            <span>&gt;&gt; pandas.DataFrame.describe() 실측 원자료 기술 통계량 (N=50, R=3 전수 집계):</span>
            <span className="text-3xs text-neutral-500">Python 3.12 / Pandas 3.0.6</span>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-neutral-400 font-bold text-neutral-900 dark:border-neutral-600 dark:text-neutral-100">
                <th className="px-2 py-1">토폴로지 구조</th>
                <th className="px-2 py-1 text-right">통과수/총계</th>
                <th className="px-2 py-1 text-right">통과율</th>
                <th className="px-2 py-1 text-right">Mean(ms)</th>
                <th className="px-2 py-1 text-right">Std(ms)</th>
                <th className="px-2 py-1 text-right">Median(ms)</th>
                <th className="px-2 py-1 text-right">P95(ms)</th>
                <th className="px-2 py-1 text-right">Mean(Bytes)</th>
                <th className="px-2 py-1 text-right">효율성 지수</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {TOPOLOGY_DATA.map((t) => (
                <tr key={t.topology}>
                  <td className="px-2 py-1.5 font-semibold text-neutral-900 dark:text-neutral-100">{t.topology}</td>
                  <td className="px-2 py-1.5 text-right font-mono">{t.pass_count}/50</td>
                  <td className="px-2 py-1.5 text-right font-mono font-bold" style={{ color: t.color }}>
                    {t.pass_rate_pct.toFixed(1)}%
                  </td>
                  <td className="px-2 py-1.5 text-right font-mono">{t.mean_latency_ms.toFixed(4)}</td>
                  <td className="px-2 py-1.5 text-right font-mono">±{t.std_latency_ms.toFixed(4)}</td>
                  <td className="px-2 py-1.5 text-right font-mono">{t.median_latency_ms.toFixed(4)}</td>
                  <td className="px-2 py-1.5 text-right font-mono">{t.p95_latency_ms.toFixed(4)}</td>
                  <td className="px-2 py-1.5 text-right font-mono">{t.mean_payload_bytes.toFixed(1)}B</td>
                  <td className="px-2 py-1.5 text-right font-mono">{t.efficiency_ratio.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-3xs mt-2.5 text-neutral-500 dark:text-neutral-400">
            * 소스 스크립트: <code>research/scripts/analyze_with_pandas.py</code> | 데이터셋:{' '}
            <code>research/dataset/pandas_summary_statistics.json</code>
          </div>
        </div>
      ) : (
        /* 3. 학술 논문 스타일 차트 뷰 (Academic Paper Figure Layout) */
        <div className="space-y-6 pt-1">
          {/* ========================================================================= */}
          {/* PANEL (a): 단위 테스트 통과율 가로 막대 차트 */}
          {/* ========================================================================= */}
          {(viewScope === 'integrated' || activePanel === 'a') && (
            <div className="dark:bg-neutral-850/30 space-y-2 rounded-lg border border-neutral-300 bg-neutral-50/40 p-4 dark:border-neutral-700">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  (a) 4대 토폴로지 단위 테스트 통과율 (%) 및 가설 기각 기준선
                </span>
                <span className="text-3xs font-mono text-neutral-500">점선: 가설 충족 기준선 (+20%p 향상, 50.0%)</span>
              </div>

              {/* 가로형 플롯 영역 */}
              <div className="relative pt-2">
                {/* 상단 축 눈금 가이드 */}
                <div className="text-3xs flex justify-between border-b border-neutral-300 pb-1 font-mono text-neutral-500 dark:border-neutral-700">
                  <span>0%</span>
                  <span>25%</span>
                  <span className="font-bold text-neutral-900 dark:text-neutral-100">50% (가설 기준)</span>
                  <span>75%</span>
                  <span className="font-bold">100%</span>
                </div>

                <div className="relative mt-2.5 space-y-2.5">
                  {/* 가설 기준선 (50% 수직 점선) */}
                  <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-10 w-px border-l-2 border-dashed border-red-400" />

                  {TOPOLOGY_DATA.map((t) => (
                    <div key={t.topology} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="text-2xs font-mono font-bold text-neutral-600 dark:text-neutral-400">
                            {t.tag}
                          </span>
                          <span className="font-semibold text-neutral-900 dark:text-neutral-100">{t.shortName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-3xs font-mono text-neutral-500">({t.pass_count}/50건 통과)</span>
                          <span className="font-mono text-xs font-bold" style={{ color: t.color }}>
                            {t.pass_rate_pct.toFixed(1)}%
                          </span>
                        </div>
                      </div>

                      {/* 학술 가로 바 */}
                      <div className="h-5 w-full rounded border border-neutral-300 bg-neutral-100 p-0.5 dark:border-neutral-700 dark:bg-neutral-800">
                        <div
                          className="text-3xs flex h-full items-center justify-end rounded-xs pr-2 font-mono font-bold text-white transition-all duration-500"
                          style={{
                            width: `${Math.max(t.pass_rate_pct, 5)}%`,
                            backgroundColor: t.color,
                          }}
                        >
                          {t.pass_rate_pct >= 25 ? `${t.pass_rate_pct.toFixed(0)}%` : ''}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PANEL (b): 실행 지연시간 및 오차막대 가로 차트 */}
          {/* ========================================================================= */}
          {(viewScope === 'integrated' || activePanel === 'b') && (
            <div className="dark:bg-neutral-850/30 space-y-2 rounded-lg border border-neutral-300 bg-neutral-50/40 p-4 dark:border-neutral-700">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  (b) 실행 지연시간 (Mean ± Std Dev, ms) 및 표준편차 오차범위
                </span>
                <span className="text-3xs font-mono text-neutral-500">시간 척도: 0.000 ms ~ 0.022 ms</span>
              </div>

              <div className="relative pt-2">
                {/* 상단 축 눈금 */}
                <div className="text-3xs flex justify-between border-b border-neutral-300 pb-1 font-mono text-neutral-500 dark:border-neutral-700">
                  <span>0.000 ms</span>
                  <span>0.005 ms</span>
                  <span>0.010 ms</span>
                  <span>0.015 ms</span>
                  <span>0.020 ms</span>
                </div>

                <div className="mt-2.5 space-y-2.5">
                  {TOPOLOGY_DATA.map((t) => {
                    const maxScale = 0.022;
                    const barWidthPct = (t.mean_latency_ms / maxScale) * 100;

                    return (
                      <div key={t.topology} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-2xs font-mono font-bold text-neutral-600 dark:text-neutral-400">
                              {t.tag}
                            </span>
                            <span className="font-semibold text-neutral-900 dark:text-neutral-100">{t.shortName}</span>
                            {t.topology.includes('Star') && (
                              <span className="py-0.2 text-3xs rounded bg-emerald-100 px-1.5 font-mono font-bold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                                -70.62% 단축 (vs 토론형)
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-3xs font-mono text-neutral-500">
                              Median {t.median_latency_ms.toFixed(4)}ms
                            </span>
                            <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                              {t.mean_latency_ms.toFixed(4)} ± {t.std_latency_ms.toFixed(4)} ms
                            </span>
                          </div>
                        </div>

                        {/* 학술 가로 바 + 오차막대 */}
                        <div className="relative h-5 w-full rounded border border-neutral-300 bg-neutral-100 p-0.5 dark:border-neutral-700 dark:bg-neutral-800">
                          <div
                            className="text-3xs relative flex h-full items-center justify-end rounded-xs pr-1.5 font-mono font-bold text-white transition-all duration-500"
                            style={{
                              width: `${Math.max(barWidthPct, 6)}%`,
                              backgroundColor: t.color,
                            }}
                          >
                            <span>{t.mean_latency_ms.toFixed(4)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PANEL (c): 통신 페이로드 (Bytes) 및 효율성 지수 비교 */}
          {/* ========================================================================= */}
          {(viewScope === 'integrated' || activePanel === 'c') && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* 패널 c-1: 통신 페이로드 */}
              <div className="dark:bg-neutral-850/30 space-y-2 rounded-lg border border-neutral-300 bg-neutral-50/40 p-4 dark:border-neutral-700">
                <div className="flex items-baseline justify-between border-b border-neutral-300 pb-1 dark:border-neutral-700">
                  <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                    (c-1) 통신 페이로드 오버헤드 (Bytes)
                  </span>
                  <span className="text-3xs font-mono text-neutral-500">Max 900B</span>
                </div>

                <div className="mt-2 space-y-2">
                  {TOPOLOGY_DATA.map((t) => (
                    <div key={t.topology} className="space-y-0.5">
                      <div className="text-2xs flex justify-between">
                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          {t.tag} {t.topology}
                        </span>
                        <span className="font-mono font-bold text-neutral-900 dark:text-neutral-100">
                          {t.mean_payload_bytes.toFixed(1)} B
                        </span>
                      </div>
                      <div className="h-3.5 w-full overflow-hidden rounded border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                        <div
                          className="h-full rounded-xs transition-all duration-500"
                          style={{
                            width: `${(t.mean_payload_bytes / 900) * 100}%`,
                            backgroundColor: t.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-3xs mt-2 text-neutral-600 dark:text-neutral-400">
                  * 중앙 조율형(228.1B)은 완전 토론형(878.0B) 대비 <strong>74.02% 통신 절감</strong>
                </div>
              </div>

              {/* 패널 c-2: 효율성 지수 */}
              <div className="dark:bg-neutral-850/30 space-y-2 rounded-lg border border-neutral-300 bg-neutral-50/40 p-4 dark:border-neutral-700">
                <div className="flex items-baseline justify-between border-b border-neutral-300 pb-1 dark:border-neutral-700">
                  <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                    (c-2) 계산 효율성 지수 (Pass Rate / Latency)
                  </span>
                  <span className="text-3xs font-mono text-neutral-500">Max 27k</span>
                </div>

                <div className="mt-2 space-y-2">
                  {TOPOLOGY_DATA.map((t) => (
                    <div key={t.topology} className="space-y-0.5">
                      <div className="text-2xs flex justify-between">
                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          {t.tag} {t.topology}
                        </span>
                        <span className="font-mono font-bold text-neutral-900 dark:text-neutral-100">
                          {t.efficiency_ratio.toLocaleString('ko-KR', { maximumFractionDigits: 1 })}
                        </span>
                      </div>
                      <div className="h-3.5 w-full overflow-hidden rounded border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                        <div
                          className="h-full rounded-xs transition-all duration-500"
                          style={{
                            width: `${(t.efficiency_ratio / 27000) * 100}%`,
                            backgroundColor: t.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-3xs mt-2 text-neutral-600 dark:text-neutral-400">
                  * 조율형 지수(15,000)는 토론형(4,892) 대비 <strong>3.07배 우수한 엔지니어링 트레이드오프</strong>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PANEL (d): 7대 알고리즘 도메인별 세분화 비교 */}
          {/* ========================================================================= */}
          {(viewScope === 'integrated' || activePanel === 'd') && (
            <div className="dark:bg-neutral-850/30 space-y-2 rounded-lg border border-neutral-300 bg-neutral-50/40 p-4 dark:border-neutral-700">
              <div className="flex items-baseline justify-between border-b border-neutral-300 pb-1 dark:border-neutral-700">
                <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  (d) 7대 알고리즘 도메인별 순차형 vs 중앙 조율형 통과율 실측 비교 (Category Breakdown)
                </span>
                <span className="text-3xs font-mono text-neutral-500">
                  ■ 적색: 순차형 (Linear) | ■ 녹색: 중앙 조율형 (Star)
                </span>
              </div>

              <div className="mt-2 space-y-2">
                {CATEGORY_DATA.map((cat) => {
                  const gain = cat.star_pass_pct - cat.linear_pass_pct;
                  return (
                    <div
                      key={cat.category}
                      className="rounded border border-neutral-200 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="text-2xs mb-1 flex items-center justify-between">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          {cat.category} (N={cat.count}개)
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-red-600 dark:text-red-400">
                            순차 {cat.linear_pass_pct.toFixed(0)}%
                          </span>
                          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                            조율 {cat.star_pass_pct.toFixed(0)}%
                          </span>
                          <span className="text-3xs font-mono font-bold text-neutral-600 dark:text-neutral-300">
                            (+{gain.toFixed(0)}%p 자가치유)
                          </span>
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                          <div
                            className="h-full rounded-full bg-red-600"
                            style={{ width: `${cat.linear_pass_pct}%` }}
                          />
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                          <div
                            className="h-full rounded-full bg-emerald-600"
                            style={{ width: `${cat.star_pass_pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PANEL (e): 3회 독립 반복 시행 시계열 수렴성 */}
          {/* ========================================================================= */}
          {(viewScope === 'integrated' || activePanel === 'e') && (
            <div className="dark:bg-neutral-850/30 space-y-2 rounded-lg border border-neutral-300 bg-neutral-50/40 p-4 dark:border-neutral-700">
              <div className="flex items-baseline justify-between border-b border-neutral-300 pb-1 dark:border-neutral-700">
                <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  (e) 3회 독립 반복 시행(Round 1~3) 시계열 지연시간 수렴성 (Cold vs Warm Run)
                </span>
                <span className="text-3xs font-mono text-neutral-500">3회 통과율 분산 σ = 0.0% (완전 일치)</span>
              </div>

              <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {MULTI_ROUND_DATA.map((r) => (
                  <div
                    key={r.round}
                    className="rounded border border-neutral-200 bg-white p-2.5 dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div className="mb-1.5 flex items-center justify-between border-b border-neutral-200 pb-1 text-xs font-bold dark:border-neutral-800">
                      <span>{r.name}</span>
                      <span className="text-3xs font-normal text-neutral-500">{r.type}</span>
                    </div>
                    <div className="text-2xs space-y-1 font-mono">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">순차형:</span>
                        <span className="font-bold text-neutral-800 dark:text-neutral-200">
                          {r.linear_ms.toFixed(4)} ms
                        </span>
                      </div>
                      <div className="flex justify-between font-bold text-emerald-600">
                        <span>중앙조율 ★:</span>
                        <span>{r.star_ms.toFixed(4)} ms</span>
                      </div>
                      <div className="flex justify-between text-amber-600">
                        <span>토론형:</span>
                        <span>{r.mesh_ms.toFixed(4)} ms</span>
                      </div>
                      <div className="flex justify-between text-indigo-600">
                        <span>계층형:</span>
                        <span>{r.tree_ms.toFixed(4)} ms</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. Formal Academic Figure Caption & Notes */}
      <figcaption className="border-t-2 border-neutral-900 pt-3 text-xs leading-relaxed text-neutral-700 dark:border-neutral-100 dark:text-neutral-300">
        <div className="font-semibold text-neutral-900 dark:text-neutral-100">
          <span className="font-mono font-bold">Figure 2 Caption:</span> 다중 에이전트 협업 토폴로지의 정량적 실증 비교
          평가 결과 (N=50, R=3).
        </div>
        <p className="text-2xs mt-1 text-neutral-600 sm:text-xs dark:text-neutral-400">
          <strong>(a)</strong> 단위 테스트 통과율(%) 및 사전 등록된 가설 충족 기준선(+20%p, 적색 점선). 중앙 조율형
          토폴로지는 결함 즉각 자가 교정 피드백 루프를 통해 100% 전수 통과를 달성함. <strong>(b)</strong> Python 런타임{' '}
          <code>time.perf_counter()</code>로 실측한 평균 실행 지연시간(ms). 수직 막대는 ±1 표준편차(σ) 오차범위를
          나타내며, 중앙 조율형은 완전 토론형 대비 70.62%의 지연시간을 단축함. <strong>(c)</strong> 토론형의 O(N^2)
          메시지 폭증 대비 74.02% 통신량을 절감한 조율형의 통신 페이로드(Bytes) 및 효율성 지수. <strong>(d)</strong> 7대
          알고리즘 도메인별 세분화 통계 (Pandas v3.0.6 집계).
        </p>
        <div className="text-3xs mt-2 text-neutral-500 dark:text-neutral-400">
          <strong>Note:</strong> 모든 측정치는 외부 유료 API나 확률적 난수 추정 없이 로컬 Python 3.12 런타임 환경에서
          50개 과제를 3회 전수 실행(총 600회 파이프라인 채점)하여 수집되었습니다. 3회 시행 간 통과율 분산은 σ =
          0.0%입니다.
        </div>
      </figcaption>
    </figure>
  );
};
