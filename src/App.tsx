import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResearchPaper } from './components/ResearchPaper';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-neutral-100/50 font-sans text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-5xl space-y-10 px-4 pt-20 pb-12 outline-none sm:space-y-12 sm:px-6 sm:pt-24 sm:pb-16"
      >
        <Hero />
        <ResearchPaper />
      </main>
      <Footer />
    </div>
  );
};

export default App;
