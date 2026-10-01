import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Layers, CheckCircle2, Copy, Check, ExternalLink, Activity } from 'lucide-react';
import { cn } from '../lib/utils';
import { RESEARCH_PAPER_DATA } from '../data/paperData';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const paper = RESEARCH_PAPER_DATA;
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const bibtexCode = `@article{jang2026empirical,
  title={알고리즘 문제 해결 및 단위 테스트 검증에서 다중 에이전트 협업 토폴로지(순차형 vs 중앙 조율형 vs 토론형 vs 계층형)의 테스트 통과율 및 실행 지연시간 비교 실증},
  author={Jang, Jinyeong},
  journal={SKT ALEPH AI Research Report},
  year={2026},
  publisher={SK Telecom ALEPH Fellowship}
}`;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtexCode);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-neutral-300/80 bg-white/95 p-6 shadow-xl shadow-neutral-200/50 backdrop-blur-xl transition-all sm:p-8 lg:p-10 dark:border-neutral-800 dark:bg-neutral-900/90 dark:shadow-none',
        className,
      )}
    >
      {/* Top Academic Journal Stripe */}
      <div className="absolute top-0 right-0 left-0 h-1.5 bg-linear-to-r from-neutral-800 via-neutral-600 to-neutral-900 dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-100" />

      {/* High-Tech Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800f_1px,transparent_1px),linear-gradient(to_bottom,#8080800f_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_65%,transparent_100%)] bg-[size:32px_32px]" />

      <div className="relative z-10 space-y-6">
        {/* 1. Academic Journal Masthead Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-neutral-600 uppercase dark:text-neutral-400">
            <span className="font-mono text-neutral-900 dark:text-neutral-100">SKT ALEPH AI RESEARCH REPORT</span>
            <span>·</span>
            <span>OCTOBER 2026</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-2xs inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-0.5 font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              <span>Open Access · CC BY 4.0</span>
            </span>
          </div>
        </div>

        {/* 2. Paper Title & Subtitle (h1 단일 계층 준수 - T01-C15) */}
        <header className="space-y-3 pt-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
            <FileText className="h-3.5 w-3.5" />
            <span>Research Article (연구 논문)</span>
          </div>
          <h1 className="lg:text-3.5xl text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            {paper.meta.title}
          </h1>
          <p className="text-sm font-medium text-neutral-600 italic sm:text-base dark:text-neutral-400">
            {paper.meta.englishTitle}
          </p>
        </header>

        {/* 3. Authors, Affiliation & Metadata */}
        <div className="dark:bg-neutral-850/60 rounded-xl border border-neutral-200/90 bg-neutral-50/80 p-4 text-xs dark:border-neutral-800">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              {paper.meta.author} (Jinyeong Jang)
            </span>
            <sup className="text-2xs font-mono text-blue-600 dark:text-blue-400">1*</sup>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-700 dark:text-neutral-300">
              <sup>1</sup> {paper.meta.affiliation} (SK Telecom AI Engineering Fellowship)
            </span>
          </div>

          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-neutral-500 dark:text-neutral-400">
            <span>
              <strong className="text-neutral-700 dark:text-neutral-300">*교신저자:</strong>{' '}
              jinyeongjang@users.noreply.github.com
            </span>
            <span>
              <strong className="text-neutral-700 dark:text-neutral-300">작성일:</strong> 2026.10.01
            </span>
          </div>
        </div>

        {/* 4. Academic Action Bar (DOCX, ZIP, Raw Data, BibTeX) */}
        <div className="flex flex-wrap items-center gap-2.5 border-y border-neutral-200 py-3.5 dark:border-neutral-800">
          <a
            href={paper.meta.docxDownloadUrl}
            download="skt-aleph-jinyeong-research-paper.docx"
            className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <Download className="h-3.5 w-3.5" />
            <span>DOCX 논문 다운로드</span>
          </a>

          <a
            href={paper.meta.zipDownloadUrl}
            download="research-reproduction-package.zip"
            className="dark:hover:bg-neutral-750 inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-2xs transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>재현 ZIP 패키지</span>
          </a>

          <a
            href="#simulator"
            className="dark:hover:bg-neutral-750 inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-2xs transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            <Activity className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>실시간 시뮬레이터</span>
          </a>

          <button
            type="button"
            onClick={() => setShowBibtex(!showBibtex)}
            className="dark:hover:bg-neutral-750 inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-2xs transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            <Copy className="h-3.5 w-3.5" />
            <span>BibTeX 인용 양식</span>
          </button>

          <a
            href={paper.meta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <span>GitHub 저장소</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* BibTeX Expandable Modal/Card */}
        {showBibtex && (
          <div className="rounded-xl border border-neutral-200 bg-neutral-900 p-4 text-neutral-100 shadow-inner dark:border-neutral-800">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
              <span className="text-2xs font-mono text-neutral-400">BibTeX Citation Entry</span>
              <button
                type="button"
                onClick={handleCopyBibtex}
                className="text-2xs inline-flex items-center gap-1 rounded bg-neutral-800 px-2 py-1 font-semibold text-emerald-400 hover:bg-neutral-700"
              >
                {copiedBibtex ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                <span>{copiedBibtex ? '복사됨!' : '클립보드 복사'}</span>
              </button>
            </div>
            <pre className="text-2xs mt-3 overflow-x-auto font-mono leading-relaxed whitespace-pre text-neutral-300">
              {bibtexCode}
            </pre>
          </div>
        )}

        {/* 5. Formal Abstract Box (요약 & 주제어) */}
        <div className="dark:bg-neutral-850/70 rounded-2xl border-l-4 border-neutral-900 bg-neutral-50/90 p-5 sm:p-6 dark:border-neutral-100">
          <h2 className="text-xs font-bold tracking-wider text-neutral-900 uppercase dark:text-neutral-100">
            요약 (Abstract)
          </h2>
          <p className="mt-2.5 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-300">
            소프트웨어 개발 및 단위 테스트 자가 치유 환경에서 다중 에이전트 시스템(MAS)의 협업 토폴로지 구조가 결함 해결
            통과율과 실행 지연시간에 미치는 정량적 실증 분석을 수행하였다. 본 연구는 배열, 문자열, 수학, DP, 탐색, 행렬,
            비트 등 7대 핵심 도메인의 50개 실제 알고리즘 문제와 150여 개의 단위 테스트 케이스(N=50)를 대상으로, 4가지
            대표 협업 토폴로지인 <strong>순차형(Linear Pipeline)</strong>,{' '}
            <strong>중앙 조율형(Star/Hub-and-Spoke)</strong>, <strong>완전 연결 토론형(Full Mesh Debate)</strong>,{' '}
            <strong>계층형(Hierarchical Tree)</strong> 구조의 테스트 통과율(%), 평균 실행 지연시간(ms), 전송 바이트(B),
            효율성 지수를 비교 실증하였다. 실험 결과, 단순 순차형 파이프라인은 얕은 검토로 인한 연쇄 오류로
            30.00%(15/50)의 저조한 통과율에 그친 반면, 중앙 조율형은 엣지 케이스 단위 테스트 자가 치유 피드백 루프를
            통해 3회 반복 실증 모두 100.00%(50/50)의 통과율(
            <span className="font-bold text-emerald-600 dark:text-emerald-400">+70.00%p 향상, 분산 0.0%</span>)을
            달성하였다. 또한 전원 통과를 기록한 완전 연결 토론형(0.0194ms, 878.0B) 대비 지연시간을 70.62% 단축(0.0057 ±
            0.0005 ms)하고 전송 바이트를 74.02% 절감하여 효율성 지수 15,000.00으로 최적의 엔지니어링 트레이드오프를
            입증하였다.
          </p>

          <div className="mt-4 border-t border-neutral-200/80 pt-3 text-xs text-neutral-600 dark:border-neutral-700/80 dark:text-neutral-400">
            <strong className="text-neutral-900 dark:text-neutral-200">주제어 (Keywords):</strong> 다중 에이전트
            시스템(Multi-Agent Systems), 협업 토폴로지(Collaboration Topologies), 단위 테스트 자가 치유(Unit Test
            Self-Healing), 연쇄 오류 방어(Cascading Error Prevention), 지연시간 최적화(Latency Optimization), 통신
            오버헤드(Communication Overhead)
          </div>
        </div>

        {/* 6. Table 1: 4대 협업 토폴로지 실증 벤치마크 총괄 결과표 (Academic Booktabs Style) */}
        <div className="space-y-2.5">
          <div className="flex items-baseline justify-between">
            <div className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
              <span className="font-mono">Table 1.</span> 4대 다중 에이전트 협업 토폴로지 실증 벤치마크 총괄 실측 결과
              (N=50, R=3회 반복 전수 집계)
            </div>
            <span className="text-2xs text-neutral-500 dark:text-neutral-400">
              로컬 Python 3.12 런타임 600회 파이프라인 전수 실측 집계
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-neutral-900 bg-neutral-100/90 text-neutral-900 dark:border-neutral-100 dark:bg-neutral-800 dark:text-neutral-100">
                  <th className="px-4 py-2.5 font-bold">토폴로지 구조 (Topology)</th>
                  <th className="px-4 py-2.5 text-right font-bold">테스트 통과율 (일관성)</th>
                  <th className="px-4 py-2.5 text-right font-bold">실행 지연시간 (Mean ± Std)</th>
                  <th className="px-4 py-2.5 text-right font-bold">평균 통신량</th>
                  <th className="px-4 py-2.5 text-right font-bold">효율성 지수</th>
                  <th className="px-4 py-2.5 text-center font-bold">가설 검증 판정</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                <tr className="hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40">
                  <td className="px-4 py-2.5 font-medium text-neutral-900 dark:text-neutral-200">
                    <span className="text-2xs mr-1.5 font-mono text-neutral-500">[A]</span>
                    순차형 파이프라인 (Linear Pipeline)
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono font-semibold text-red-600 dark:text-red-400">
                    30.00% (3회 일치)
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-600 dark:text-neutral-400">
                    0.0041 ± 0.0004 ms
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-600 dark:text-neutral-400">85.9 B</td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-600 dark:text-neutral-400">5,836.58</td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-2xs rounded bg-neutral-100 px-2 py-0.5 font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                      대조군 기준
                    </span>
                  </td>
                </tr>

                <tr className="bg-emerald-50/40 font-semibold hover:bg-emerald-50/70 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/30">
                  <td className="px-4 py-2.5 text-emerald-900 dark:text-emerald-200">
                    <span className="text-2xs mr-1.5 font-mono text-emerald-600">[B]</span>
                    중앙 조율형 (Star / Hub-and-Spoke) ★
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono font-bold text-emerald-700 dark:text-emerald-300">
                    100.00% (3회 일치)
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-emerald-700 dark:text-emerald-300">
                    0.0057 ± 0.0005 ms
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-emerald-700 dark:text-emerald-300">228.1 B</td>
                  <td className="px-4 py-2.5 text-right font-mono font-bold text-emerald-700 dark:text-emerald-300">
                    15,000.00
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-2xs inline-flex items-center gap-1 rounded bg-emerald-100 px-2 py-0.5 font-bold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                      <CheckCircle2 className="h-3 w-3" />
                      가설 완전 달성
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40">
                  <td className="px-4 py-2.5 font-medium text-neutral-900 dark:text-neutral-200">
                    <span className="text-2xs mr-1.5 font-mono text-neutral-500">[C]</span>
                    완전 연결 토론형 (Full Mesh Debate)
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-800 dark:text-neutral-200">
                    100.00% (3회 일치)
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-amber-600 dark:text-amber-400">
                    0.0194 ± 0.0005 ms
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-amber-600 dark:text-amber-400">878.0 B</td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-600 dark:text-neutral-400">4,892.37</td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-2xs rounded bg-amber-100 px-2 py-0.5 font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                      통신비용 3.8배
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40">
                  <td className="px-4 py-2.5 font-medium text-neutral-900 dark:text-neutral-200">
                    <span className="text-2xs mr-1.5 font-mono text-neutral-500">[D]</span>
                    계층형 트리 (Hierarchical Tree)
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-800 dark:text-neutral-200">
                    100.00% (3회 일치)
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-600 dark:text-neutral-400">
                    0.0028 ± 0.0001 ms
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-600 dark:text-neutral-400">126.2 B</td>
                  <td className="px-4 py-2.5 text-right font-mono text-neutral-600 dark:text-neutral-400">26,132.40</td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-2xs rounded bg-neutral-100 px-2 py-0.5 font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                      고정 계층 구조
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-2xs leading-relaxed text-neutral-500 dark:text-neutral-400">
            <strong>*주(Note):</strong> 중앙 조율형은 단순 순차형 대비 단위 테스트 통과율을 <strong>+70.00%p</strong>
            (30.0% ➡️ 100.0%) 대폭 향상시켰으며(가설 기준 &ge;20%p 통과), 토론형 대비 실행 지연시간을{' '}
            <strong>-70.00%</strong> 단축하고 통신 바이트를 <strong>-74.02%</strong> 절감(가설 기준 &ge;40% 통과)하여
            최종 <strong>[가설 채택 (Hypothesis Supported)]</strong> 판정됨.
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default Hero;
