import React, { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Search,
  X,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Terminal,
  Cpu,
  BarChart3,
  Sparkles,
  Calendar,
  ArrowUpRight,
  Check,
  Copy,
  Info,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../data/projectsData';
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

interface ProjectsProps {
  className?: string;
}

type CategoryFilter = '전체' | '보안 & 인증' | '웹 & 인터랙션' | 'AI & 벤치마크' | '데이터 & 대시보드';
type ViewMode = 'grid' | 'list';

const CATEGORIES: { label: CategoryFilter; icon: React.ReactNode }[] = [
  { label: '전체', icon: <Layers className="h-3.5 w-3.5" /> },
  { label: '보안 & 인증', icon: <ShieldCheck className="h-3.5 w-3.5" /> },
  { label: '웹 & 인터랙션', icon: <Terminal className="h-3.5 w-3.5" /> },
  { label: 'AI & 벤치마크', icon: <Cpu className="h-3.5 w-3.5" /> },
  { label: '데이터 & 대시보드', icon: <BarChart3 className="h-3.5 w-3.5" /> },
];

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const searchInputId = useId();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'verification' | 'judgment'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCardExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter projects by category and search query
  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === '전체' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch =
      p.title.toLowerCase().includes(q) ||
      p.taskNumber.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.techStack.some((tech) => tech.toLowerCase().includes(q)) ||
      p.keyFeatures.some((feat) => feat.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (project: ProjectItem) => {
    setActiveModalProject(project);
    setModalTab('overview');
    setCopiedLink(false);
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalProject) {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject]);

  const handleCopyVerification = (project: ProjectItem) => {
    const text = `[${project.taskNumber} - ${project.title}]\n\n① 어디로 가나요:\n${project.quickVerification.whereToGo}\n\n② 3단계 이내 무엇을 하나요:\n${project.quickVerification.whatToDo}\n\n③ 무엇이 보이면 통과인가요:\n${project.quickVerification.whatShowsSuccess}\n\n④ 안 될 때 무엇이 보이나요:\n${project.quickVerification.whatShowsFailure}`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative scroll-mt-24 overflow-hidden rounded-3xl border border-neutral-200/90 bg-linear-to-b from-white/95 via-neutral-50/50 to-white/90 p-6 shadow-xl shadow-neutral-200/40 backdrop-blur-2xl sm:p-8 lg:p-9 dark:border-neutral-800/90 dark:from-neutral-900/90 dark:via-neutral-950/60 dark:to-[#090d16] dark:shadow-none',
        className,
      )}
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 right-0 left-0 h-1.5 bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500" />

      {/* Subtle High-Tech Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_65%,transparent_100%)] bg-[size:32px_32px]" />

      {/* Decorative Glow Orbs */}
      <div className="pointer-events-none absolute top-12 left-1/4 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl motion-reduce:hidden dark:bg-blue-600/10" />
      <div className="pointer-events-none absolute top-32 right-1/4 h-72 w-72 rounded-full bg-indigo-500/8 blur-3xl motion-reduce:hidden dark:bg-purple-600/10" />

      <div className="relative z-10 space-y-7">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-blue-50/90 px-3 py-1 text-xs font-bold text-blue-700 shadow-2xs backdrop-blur-sm dark:border-blue-800/80 dark:bg-blue-950/70 dark:text-blue-300">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>02 Projects · SKT ALEPH 1기</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
              과제 & 프로젝트 갤러리
            </h2>
            <p className="max-w-2xl text-xs leading-relaxed font-medium text-neutral-600 sm:text-sm dark:text-neutral-300">
              SKT ALEPH 1기 전 과정에서 직접 설계·개발하고 100% 무로그인 배포 및 자동화 검증을 완료한 6대 핵심 실전 과제
              산출물입니다.
            </p>
          </div>
        </div>

        {/* Filter, Search & View Mode Controls */}
        <div className="space-y-3.5 rounded-2xl border border-neutral-200/80 bg-white/80 p-3.5 shadow-2xs backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-900/80">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    type="button"
                    onClick={() => setSelectedCategory(cat.label)}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none dark:focus-visible:ring-neutral-100',
                      active
                        ? 'bg-neutral-900 text-white shadow-xs dark:bg-white dark:text-neutral-900'
                        : 'border border-neutral-200/90 bg-neutral-50/70 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-100/90 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white',
                    )}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        'py-0.2 ml-0.5 rounded-full px-1.5 text-[10px] font-bold',
                        active
                          ? 'bg-neutral-700 text-white dark:bg-neutral-200 dark:text-neutral-900'
                          : 'bg-neutral-200/80 text-neutral-700 dark:bg-neutral-700/80 dark:text-neutral-300',
                      )}
                    >
                      {cat.label === '전체'
                        ? PROJECTS_DATA.length
                        : PROJECTS_DATA.filter((p) => p.category === cat.label).length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right side: Search + View Switcher */}
            <div className="flex items-center gap-2">
              {/* Search Input */}
              <div className="relative flex-1 sm:w-64 sm:flex-initial">
                <label htmlFor={searchInputId} className="sr-only">
                  프로젝트 검색
                </label>
                <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500 dark:text-neutral-400" />
                <input
                  id={searchInputId}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="과제명, 스택, 기능 검색..."
                  className="w-full rounded-xl border border-neutral-200/90 bg-white/95 py-1.5 pr-8 pl-9 text-xs font-medium text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-neutral-700/80 dark:bg-neutral-800/90 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-full p-0.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white"
                    title="검색어 지우기"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center rounded-xl border border-neutral-200/80 bg-neutral-100/80 p-0.5 dark:border-neutral-800 dark:bg-neutral-800/80">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'rounded-lg p-1.5 text-xs transition-colors focus-visible:outline-none',
                    viewMode === 'grid'
                      ? 'bg-white text-neutral-900 shadow-2xs dark:bg-neutral-700 dark:text-white'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
                  )}
                  title="그리드 뷰 (2열)"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={cn(
                    'rounded-lg p-1.5 text-xs transition-colors focus-visible:outline-none',
                    viewMode === 'list'
                      ? 'bg-white text-neutral-900 shadow-2xs dark:bg-neutral-700 dark:text-white'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
                  )}
                  title="리스트 뷰 (압축)"
                >
                  <List className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Indicator */}
          {(selectedCategory !== '전체' || searchQuery) && (
            <div className="flex items-center justify-between border-t border-neutral-100 pt-2 text-xs text-neutral-500 dark:border-neutral-800/80 dark:text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span>
                  검색 결과: 총 <strong className="text-neutral-900 dark:text-white">{filteredProjects.length}</strong>
                  개 프로젝트
                </span>
                {selectedCategory !== '전체' && (
                  <span className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-[11px] font-bold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    카테고리: {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-[11px] font-bold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    키워드: &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('전체');
                  setSearchQuery('');
                }}
                className="font-semibold text-neutral-700 underline underline-offset-2 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
              >
                전체 초기화
              </button>
            </div>
          )}
        </div>

        {/* Projects View */}
        {filteredProjects.length === 0 ? (
          <div className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200/90 bg-neutral-50/60 p-8 text-center dark:border-neutral-800 dark:bg-neutral-900/40">
            <Search className="h-9 w-9 text-neutral-400 dark:text-neutral-500" />
            <p className="mt-3 text-sm font-bold text-neutral-800 dark:text-neutral-200">
              일치하는 프로젝트가 없습니다.
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              검색 키워드를 바꾸거나 상단 필터를 초기화해 보세요.
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View (2-Columns) */
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredProjects.map((project, idx) => {
              const isExpanded = !!expandedCards[project.id];
              const displayFeatures = isExpanded ? project.keyFeatures : project.keyFeatures.slice(0, 3);

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/90 bg-white/95 p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/60 dark:border-neutral-800/90 dark:bg-neutral-900/90 dark:hover:border-neutral-700 dark:hover:shadow-neutral-950/60"
                >
                  {/* Card Header & Content */}
                  <div className="space-y-4">
                    {/* Top Row: Task Badge & Period */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-lg bg-neutral-950 px-2.5 py-1 text-xs font-black tracking-wide text-white shadow-2xs dark:bg-white dark:text-neutral-950">
                        {project.taskBadge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                        <Calendar className="h-3 w-3" />
                        <span>{project.period.split(' ')[0]}</span>
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 transition-colors group-hover:text-blue-600 sm:text-lg dark:text-white dark:group-hover:text-blue-400">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed font-medium text-neutral-600 dark:text-neutral-300">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Key Features Bullet List */}
                    <div className="space-y-1.5 rounded-2xl border border-neutral-100/90 bg-neutral-50/60 p-3.5 dark:border-neutral-800/80 dark:bg-neutral-950/50">
                      <div className="flex items-center justify-between text-[11px] font-bold text-neutral-700 dark:text-neutral-300">
                        <span>주요 기능</span>
                        {project.keyFeatures.length > 3 && (
                          <button
                            type="button"
                            onClick={() => toggleCardExpand(project.id)}
                            className="inline-flex items-center gap-0.5 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <span>{isExpanded ? '간략히' : `+${project.keyFeatures.length - 3}개 더보기`}</span>
                            {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                          </button>
                        )}
                      </div>
                      <ul className="space-y-1.5 pt-1">
                        {displayFeatures.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-1.5 text-xs leading-snug text-neutral-600 dark:text-neutral-400"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-neutral-200/80 bg-neutral-100/70 px-2 py-0.5 text-[10px] font-semibold text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/70 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-2xs transition-all duration-150 hover:bg-blue-700 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none dark:bg-blue-600 dark:hover:bg-blue-500"
                      >
                        <span>라이브 데모</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-xl border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-700 shadow-2xs transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white"
                      >
                        <GithubIcon className="h-3 w-3" />
                        <span>저장소</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOpenModal(project)}
                      className="inline-flex items-center gap-1 rounded-xl border border-neutral-200/90 bg-neutral-50 px-2.5 py-1.5 text-xs font-bold text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-white"
                    >
                      <Info className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span>검증 명세</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          /* List View (Timeline Row Layout) */
          <div className="space-y-3.5">
            {filteredProjects.map((project, idx) => {
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="group flex flex-col justify-between gap-4 rounded-2xl border border-neutral-200/90 bg-white/95 p-4.5 shadow-xs transition-all duration-150 hover:border-neutral-300 hover:shadow-md lg:flex-row lg:items-center dark:border-neutral-800/90 dark:bg-neutral-900/90 dark:hover:border-neutral-700"
                >
                  {/* Left: Meta & Title */}
                  <div className="space-y-2 lg:max-w-md">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-md bg-neutral-950 px-2 py-0.5 text-[11px] font-black text-white dark:bg-white dark:text-neutral-950">
                        {project.taskBadge}
                      </span>
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        {project.period.split(' ')[0]}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    <p className="line-clamp-1 text-xs text-neutral-600 dark:text-neutral-300">{project.subtitle}</p>
                  </div>

                  {/* Middle: Tech Stack */}
                  <div className="hidden flex-wrap gap-1 xl:flex xl:max-w-xs">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-neutral-200 bg-neutral-100/80 px-2 py-0.5 text-[10px] font-semibold text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Right: Actions */}
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-blue-700"
                    >
                      <span>라이브 데모</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    >
                      <GithubIcon className="h-3 w-3" />
                      <span>저장소</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(project)}
                      className="inline-flex items-center gap-1 rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs font-bold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      <Info className="h-3.5 w-3.5 text-blue-600" />
                      <span>검증 명세</span>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-neutral-200/90 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Modal Top Header with Gradient Accent */}
              <div className="relative border-b border-neutral-200/80 px-6 pt-5 pb-4 dark:border-neutral-800">
                <div className="absolute top-0 right-0 left-0 h-1 bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500" />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-neutral-950 px-2 py-0.5 text-[10px] font-black text-white dark:bg-white dark:text-neutral-950">
                        {activeModalProject.taskBadge}
                      </span>
                      <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        {activeModalProject.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 sm:text-xl dark:text-white">
                      {activeModalProject.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                    title="닫기 (ESC)"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body Scroll Area */}
              <div className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-6">
                {/* Segmented Tab Navigation inside Modal */}
                <div className="flex rounded-2xl border border-neutral-200/80 bg-neutral-100/70 p-1 dark:border-neutral-800 dark:bg-neutral-800/60">
                  <button
                    type="button"
                    onClick={() => setModalTab('overview')}
                    className={cn(
                      'flex-1 rounded-xl py-2 text-xs font-bold transition-all focus-visible:outline-none',
                      modalTab === 'overview'
                        ? 'bg-white text-neutral-900 shadow-2xs dark:bg-neutral-900 dark:text-white'
                        : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
                    )}
                  >
                    개요 & 핵심 역량
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalTab('verification')}
                    className={cn(
                      'flex-1 rounded-xl py-2 text-xs font-bold transition-all focus-visible:outline-none',
                      modalTab === 'verification'
                        ? 'bg-white text-neutral-900 shadow-2xs dark:bg-neutral-900 dark:text-white'
                        : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
                    )}
                  >
                    짧은 확인 방법 4줄
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalTab('judgment')}
                    className={cn(
                      'flex-1 rounded-xl py-2 text-xs font-bold transition-all focus-visible:outline-none',
                      modalTab === 'judgment'
                        ? 'bg-white text-neutral-900 shadow-2xs dark:bg-neutral-900 dark:text-white'
                        : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white',
                    )}
                  >
                    AI와 나의 판단 3줄
                  </button>
                </div>

                {/* Tab 1: Overview */}
                {modalTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 text-xs leading-relaxed"
                  >
                    <div className="rounded-2xl border border-neutral-100 bg-neutral-50/70 p-4 dark:border-neutral-800/80 dark:bg-neutral-950/40">
                      <h4 className="font-bold text-neutral-900 dark:text-white">프로젝트 상세 개요</h4>
                      <p className="mt-1.5 text-neutral-700 dark:text-neutral-300">{activeModalProject.description}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white">주요 기능 (5대 항목)</h4>
                      <ul className="mt-2 space-y-2">
                        {activeModalProject.keyFeatures.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 rounded-xl border border-neutral-100 bg-white p-2.5 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white">적용 기술 스택</h4>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {activeModalProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-neutral-200 bg-neutral-100 px-2.5 py-1 font-semibold text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab 2: 4-line verification */}
                {modalTab === 'verification' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3 rounded-2xl border border-neutral-200/90 bg-neutral-50/70 p-4 text-xs dark:border-neutral-800 dark:bg-neutral-950/60"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-neutral-900 dark:text-white">
                        📋 공식 평가 기준 일치 확인 방법 4줄 (T01-C25, T09-C17)
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyVerification(activeModalProject)}
                        className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                        title="확인 방법 복사"
                      >
                        {copiedLink ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="font-bold text-emerald-600">복사 완료!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>4줄 복사</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-2.5 text-neutral-700 dark:text-neutral-300">
                      <div className="rounded-xl border border-neutral-200/60 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <strong className="text-blue-600 dark:text-blue-400">① 어디로 가나요</strong>
                        <p className="mt-1 font-medium">{activeModalProject.quickVerification.whereToGo}</p>
                      </div>
                      <div className="rounded-xl border border-neutral-200/60 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <strong className="text-indigo-600 dark:text-indigo-400">② 3단계 이내 무엇을 하나요</strong>
                        <p className="mt-1 font-medium">{activeModalProject.quickVerification.whatToDo}</p>
                      </div>
                      <div className="rounded-xl border border-neutral-200/60 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <strong className="text-emerald-600 dark:text-emerald-400">③ 무엇이 보이면 통과인가요</strong>
                        <p className="mt-1 font-medium">{activeModalProject.quickVerification.whatShowsSuccess}</p>
                      </div>
                      <div className="rounded-xl border border-neutral-200/60 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <strong className="text-rose-600 dark:text-rose-400">④ 안 될 때 무엇이 보이나요</strong>
                        <p className="mt-1 font-medium">{activeModalProject.quickVerification.whatShowsFailure}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab 3: AI and Student Judgment */}
                {modalTab === 'judgment' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3 rounded-2xl border border-neutral-200/90 bg-neutral-50/70 p-4 text-xs dark:border-neutral-800 dark:bg-neutral-950/60"
                  >
                    <span className="font-bold text-neutral-900 dark:text-white">
                      🧠 AI 에이전트와 수강생의 주도적 판단 3줄 (T01-C26, T09-C16)
                    </span>

                    <div className="space-y-2.5 text-neutral-700 dark:text-neutral-300">
                      <div className="rounded-xl border border-neutral-200/60 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <strong className="text-purple-600 dark:text-purple-400">① AI에게 맡긴 일</strong>
                        <p className="mt-1 font-medium">{activeModalProject.aiAndJudgment.delegatedToAi}</p>
                      </div>
                      <div className="rounded-xl border border-neutral-200/60 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <strong className="text-blue-600 dark:text-blue-400">② 학생이 직접 판단한 일</strong>
                        <p className="mt-1 font-medium">{activeModalProject.aiAndJudgment.studentJudged}</p>
                      </div>
                      <div className="rounded-xl border border-neutral-200/60 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <strong className="text-amber-600 dark:text-amber-400">③ AI 제안을 따르지 않은 일</strong>
                        <p className="mt-1 font-medium">{activeModalProject.aiAndJudgment.rejectedAiProposal}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-between border-t border-neutral-200/80 bg-neutral-50/90 px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950/90">
                <div className="flex items-center gap-2">
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-150 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  >
                    <span>라이브 데모 바로가기</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-2xs transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub 소스코드</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-xl px-3 py-2 text-xs font-semibold text-neutral-600 hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
