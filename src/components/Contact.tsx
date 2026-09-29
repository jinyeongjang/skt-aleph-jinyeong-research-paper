import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, ArrowUpRight, Check, Copy } from 'lucide-react';
import { cn } from '../lib/utils';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ContactProps {
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className }) => {
  const [copied, setCopied] = useState(false);
  const email = 'jinyeongjang@users.noreply.github.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={cn('scroll-mt-24 space-y-6 border-t border-neutral-200/80 pt-14', className)}
    >
      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">Contact</span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">연락처</h2>
        <p className="text-sm text-neutral-600">궁금한 점은 편하게 연락해 주세요.</p>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {/* 이메일 카드 */}
        <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300">
          <div>
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800">
                <Mail className="h-4 w-4" />
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none"
                title="이메일 주소 복사"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-neutral-900" />
                    <span className="font-medium text-neutral-900">복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900">공식 이메일</h3>
            <p className="mt-1 text-xs text-neutral-600 sm:text-sm">GitHub 연동 공식 이메일</p>
          </div>
          <a
            href={`mailto:${email}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none"
          >
            <span className="break-all">{email}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </div>

        {/* 블로그 / SNS 카드 */}
        <a
          href="https://skt-aleph-jinyeongblog.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800">
                <Globe className="h-4 w-4" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900" />
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900">기술 블로그</h3>
            <p className="mt-1 text-xs text-neutral-600 sm:text-sm">SKT ALEPH 학습 과정과 기술 회고를 기록하는 공간</p>
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 underline underline-offset-4 transition-colors group-hover:text-neutral-600">
            <span>skt-aleph-jinyeongblog.vercel.app 방문하기</span>
          </span>
        </a>

        {/* GitHub 카드 */}
        <a
          href="https://github.com/jinyeongjang"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none sm:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800">
                <GithubIcon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-semibold text-neutral-900">GitHub</h3>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-neutral-900 underline underline-offset-4 group-hover:text-neutral-600">
              <span className="hidden sm:inline">github.com/jinyeongjang</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
