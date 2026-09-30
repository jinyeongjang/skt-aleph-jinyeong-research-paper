import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Layers,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingDown,
  Clock,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { RESEARCH_PAPER_DATA } from '../data/paperData';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const paper = RESEARCH_PAPER_DATA;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-linear-to-b from-blue-50/60 via-slate-50/40 to-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all sm:p-8 lg:p-10 dark:border-neutral-800/80 dark:from-neutral-900/90 dark:via-neutral-950/70 dark:to-[#070b12] dark:shadow-none',
        className,
      )}
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 right-0 left-0 h-1.5 bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500" />

      {/* High-Tech Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800f_1px,transparent_1px),linear-gradient(to_bottom,#8080800f_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_65%,transparent_100%)] bg-[size:32px_32px]" />

      {/* Decorative Glow Orbs */}
      <div className="pointer-events-none absolute top-12 left-1/2 -ml-64 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl motion-reduce:hidden sm:h-96 sm:w-96 dark:bg-blue-600/15" />
      <div className="pointer-events-none absolute top-20 right-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl motion-reduce:hidden sm:h-80 sm:w-80 dark:bg-purple-600/15" />
      <div className="pointer-events-none absolute top-36 left-8 h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl motion-reduce:hidden dark:bg-cyan-600/10" />

      <div className="relative z-10 space-y-6">
        {/* 상태 뱃지 & 과제 태그 */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/90 px-3 py-1 text-xs font-semibold text-blue-800 backdrop-blur-sm dark:border-blue-900/60 dark:bg-blue-950/70 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>과제 10 · AI 실증 연구 논문</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-xs font-semibold text-emerald-800 backdrop-blur-sm dark:border-emerald-900/60 dark:bg-emerald-950/70 dark:text-emerald-300">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span>가설 검증 완료 (63.2% 수렴 단축)</span>
          </div>
        </div>

        {/* 메인 타이틀 (h1 단일 계층 준수 - T01-C15) */}
        <div className="space-y-2">
          <h1 className="text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-neutral-50">
            {paper.meta.title}
          </h1>
          <p className="text-xs font-medium text-neutral-500 italic sm:text-sm dark:text-neutral-400">
            {paper.meta.englishTitle}
          </p>
        </div>

        {/* 연구 요약 & 저자 정보 */}
        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-300">
            AI 코딩 에이전트의 코드 리팩토링 루프에 AST 린터(Oxlint/tsc)의 정밀한 오류 진단 피드백을 실시간 주입하여,
            린트 오류 0건 도달에 필요한 반복 수정 횟수를 <strong>63.2% 단축</strong>하고 자가 치유(Self-Healing)
            파이프라인의 효율성을 규명한 실증 연구입니다.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="rounded-md border border-neutral-200 bg-white/80 px-2.5 py-1 font-medium shadow-2xs dark:border-neutral-800 dark:bg-neutral-900/80">
              <strong className="text-neutral-900 dark:text-neutral-200">연구자:</strong> {paper.meta.author} (
              {paper.meta.affiliation})
            </span>
            <span className="rounded-md border border-neutral-200 bg-white/80 px-2.5 py-1 font-medium shadow-2xs dark:border-neutral-800 dark:bg-neutral-900/80">
              <strong className="text-neutral-900 dark:text-neutral-200">발행일:</strong> {paper.meta.date}
            </span>
            <span className="rounded-md border border-neutral-200 bg-white/80 px-2.5 py-1 font-medium shadow-2xs dark:border-neutral-800 dark:bg-neutral-900/80">
              <strong className="text-neutral-900 dark:text-neutral-200">검증 표본:</strong> N=
              {paper.experiment.sampleCount} (100% 통과)
            </span>
          </div>
        </div>

        {/* 4대 핵심 실험 결과 요약 카드 (Hero & ResearchPaper 연계) */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-3.5 shadow-xs backdrop-blur-sm sm:p-4 dark:border-neutral-800 dark:bg-neutral-900/80">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
              <TrendingDown className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>수렴 반복 감소</span>
            </div>
            <div className="mt-1.5 text-xl font-extrabold text-emerald-600 sm:text-2xl dark:text-emerald-400">
              -{paper.experiment.iterationReductionRate.toFixed(1)}%
            </div>
            <p className="text-2xs mt-0.5 text-neutral-500 dark:text-neutral-400">
              {paper.experiment.controlAvgIterations.toFixed(1)}회 →{' '}
              {paper.experiment.experimentAvgIterations.toFixed(1)}회
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-3.5 shadow-xs backdrop-blur-sm sm:p-4 dark:border-neutral-800 dark:bg-neutral-900/80">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
              <Clock className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>평균 수렴 시간</span>
            </div>
            <div className="mt-1.5 text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
              {paper.experiment.experimentAvgDurationMs.toFixed(0)}
              <span className="text-sm font-normal text-neutral-500">ms</span>
            </div>
            <p className="text-2xs mt-0.5 text-neutral-500 dark:text-neutral-400">
              통제군 {paper.experiment.controlAvgDurationMs.toFixed(0)}ms 대비 단축
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-3.5 shadow-xs backdrop-blur-sm sm:p-4 dark:border-neutral-800 dark:bg-neutral-900/80">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>표본 통과율</span>
            </div>
            <div className="mt-1.5 text-xl font-extrabold text-indigo-600 sm:text-2xl dark:text-indigo-400">100%</div>
            <p className="text-2xs mt-0.5 text-neutral-500 dark:text-neutral-400">10개 컴포넌트 린트 0건</p>
          </div>

          <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-3.5 shadow-xs backdrop-blur-sm sm:p-4 dark:border-neutral-800 dark:bg-neutral-900/80">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>통계적 유의성</span>
            </div>
            <div className="mt-1.5 text-xl font-extrabold text-neutral-900 sm:text-2xl dark:text-neutral-100">
              p &lt; 0.001
            </div>
            <p className="text-2xs mt-0.5 text-neutral-500 dark:text-neutral-400">가설 강력 지지 채택</p>
          </div>
        </div>

        {/* CTA 액션 버튼 그룹 */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <motion.a
            href="#research-paper"
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 hover:shadow-md hover:shadow-blue-500/35 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none sm:text-sm"
          >
            <FileText className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
            <span>논문 전문 열람 (IMRaD)</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>

          <motion.a
            href={paper.meta.docxDownloadUrl}
            download="skt-aleph-jinyeong-research-paper.docx"
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-white/95 px-4 py-2.5 text-xs font-bold text-neutral-800 shadow-2xs transition-all duration-200 hover:bg-neutral-100 hover:shadow-xs focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none sm:text-sm dark:border-neutral-700 dark:bg-neutral-800/95 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            <Download className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
            <span>DOCX 다운로드</span>
          </motion.a>

          <motion.a
            href={paper.meta.zipDownloadUrl}
            download="research-reproduction-package.zip"
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-white/95 px-4 py-2.5 text-xs font-bold text-neutral-800 shadow-2xs transition-all duration-200 hover:bg-neutral-100 hover:shadow-xs focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none sm:text-sm dark:border-neutral-700 dark:bg-neutral-800/95 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            <Layers className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
            <span>재현 ZIP 패키지</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-200/80 bg-white/80 px-4 py-2.5 text-xs font-semibold text-neutral-700 shadow-2xs transition-all duration-200 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none sm:text-sm dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Mail className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
            <span>소통 및 문의</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
