import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-b from-blue-50/60 via-slate-50/40 to-white/80 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all sm:p-8 lg:p-9 dark:border-slate-800/80 dark:from-slate-900/80 dark:via-slate-950/60 dark:to-[#070b12] dark:shadow-none',
        className,
      )}
    >
      {/* Top Accent Gradient Line (Hero2 스타일) */}
      <div className="absolute top-0 right-0 left-0 h-1.5 bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500" />

      {/* High-Tech Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800f_1px,transparent_1px),linear-gradient(to_bottom,#8080800f_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_65%,transparent_100%)] bg-[size:32px_32px]" />

      {/* Decorative Glow Orbs (Hero2 스타일) */}
      <div className="pointer-events-none absolute top-12 left-1/2 -ml-64 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl motion-reduce:hidden sm:h-96 sm:w-96 dark:bg-blue-600/15" />
      <div className="pointer-events-none absolute top-20 right-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl motion-reduce:hidden sm:h-80 sm:w-80 dark:bg-purple-600/15" />
      <div className="pointer-events-none absolute top-36 left-8 h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl motion-reduce:hidden dark:bg-cyan-600/10" />

      <div className="relative z-10 space-y-4 sm:space-y-5">
        {/* 상태 뱃지 (글래스모피즘 & Hero2 스타일) */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-blue-50/90 px-3 py-1 text-xs font-bold text-blue-700 shadow-2xs backdrop-blur-sm dark:border-blue-800/80 dark:bg-blue-950/70 dark:text-blue-300">
          <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>SKT ALEPH 1기 · 네트워크, 보안 및 인프라, AI</span>
        </div>

        {/* 메인 타이틀 (Hero2 그라데이션 타이포그래피) */}
        <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
          <span className="block font-extrabold text-slate-900 sm:inline dark:text-white">안녕하세요 👋 </span>
          <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            SKT ALEPH 수강생 장진영입니다.
          </span>
        </h1>

        {/* 서브타이틀 설명 문구 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs leading-relaxed font-medium tracking-tight text-slate-600 sm:text-sm md:text-base dark:text-slate-300"
        >
          SKT-ALEPH 수업 내용을 기반으로 배웠던 네트워크, 보안, 인프라 및 AI 실습을 기록하는 개발자 포트폴리오입니다.
        </motion.p>

        {/* 태그 칩 (Hero2 스타일) */}
        <div className="flex flex-wrap gap-1.5 pt-0.5 sm:gap-2">
          {['#책임감', '#소명_성취', '#배움과_나눔', '#SW_AI교육운영', '#보안_인프라'].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-lg border border-slate-200/80 bg-slate-100/80 px-2.5 py-1 text-xs font-semibold text-slate-600 transition-colors duration-150 hover:border-blue-300/60 hover:bg-blue-50/60 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-400 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA 액션 버튼 그룹 (Hero2 스타일 - 인터랙티브 모션 강화) */}
        <div className="flex flex-wrap items-center gap-2 pt-1 sm:gap-2.5">
          <motion.a
            href="#research-paper"
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group inline-flex items-center gap-1.5 rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 px-3.5 py-2 text-xs font-bold text-white shadow-sm shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 hover:shadow-md hover:shadow-blue-500/35 sm:px-4 sm:text-sm"
          >
            <FileText className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
            <span>연구 논문 (과제 10)</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/90 px-3.5 py-2 text-xs font-bold text-slate-800 shadow-2xs transition-all duration-200 hover:bg-slate-100 hover:shadow-xs sm:px-4 sm:text-sm dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <Mail className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
            <span>연락처 및 소통</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
