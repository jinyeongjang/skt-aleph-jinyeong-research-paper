import React from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../lib/utils';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={cn('border-t border-neutral-200/80 bg-white py-10 text-xs text-neutral-600', className)}>
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} 장진영. SKT ALEPH 1기 수강생 포트폴리오.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none"
        >
          <span>맨 위로</span>
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
