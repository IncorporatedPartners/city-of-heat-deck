import React, { useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FLOW } from './data';

export const SlideBackground = ({ src, opacity = 'opacity-30', children }: { src: string; opacity?: string; children?: React.ReactNode }) => (
  <div className="absolute inset-0 z-0">
    <img src={src} alt="" className={`w-full h-full object-cover ${opacity} grayscale`} />
    <div className="absolute inset-0 bg-gradient-to-t from-coh-bg via-coh-bg/70 to-coh-bg/80" />
    <div className="bg-grid-pattern absolute inset-0 opacity-40" />
    {children}
  </div>
);

export const Header = ({ leftTitle, leftSub, centerTitle, centerSub, rightContent }: any) => (
  <header className="flex justify-between items-start px-8 py-5 border-b border-coh-border/50 bg-coh-bg/60 backdrop-blur-sm z-50 relative shrink-0">
    <div className="flex flex-col gap-1 w-1/3">
      <div className="font-bebas text-2xl tracking-widest text-white flex gap-2">
        COH <span className="text-coh-orange">//</span> 01 {leftTitle && <span className="text-coh-orange ml-2 text-xl">&gt; {leftTitle}</span>}
      </div>
      {leftSub && <div className="font-mono text-[10px] text-coh-orange tracking-widest">{leftSub}</div>}
    </div>
    <div className="flex flex-col gap-1 items-center text-center w-1/3">
      {centerTitle && <div className="font-bebas text-3xl tracking-widest text-white">{centerTitle}</div>}
      {centerSub && <div className="font-mono text-[10px] text-coh-gray tracking-widest uppercase">{centerSub}</div>}
    </div>
    <div className="flex justify-end items-start w-1/3">
      {rightContent}
    </div>
  </header>
);

export const FooterNav = ({ prev, next, page, onPrev, onNext, currentIndex, total }: any) => (
  <footer className="flex justify-between items-center px-8 py-5 border-t border-coh-border/50 bg-coh-bg/60 backdrop-blur-sm z-50 relative shrink-0">
    <div className="flex items-center gap-4 w-1/3">
      {prev && (
        <button onClick={onPrev} className="flex items-center gap-4 hover:opacity-70 transition-opacity text-left cursor-pointer">
          <div className="font-mono text-[10px] text-coh-gray tracking-widest uppercase">PREVIOUS: {prev}</div>
        </button>
      )}
    </div>
    <div className="flex flex-col items-center gap-2 w-1/3">
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-coh-orange scale-125' : 'bg-coh-border'}`} />
        ))}
      </div>
      <div className="font-mono text-[10px] text-coh-gray tracking-widest uppercase">{page}</div>
    </div>
    <div className="flex justify-end items-center gap-4 w-1/3">
      {next && (
        <button onClick={onNext} className="flex items-center gap-4 hover:opacity-70 transition-opacity text-right cursor-pointer">
          <div className="h-px w-12 bg-coh-orange" />
          <div className="font-mono text-[10px] text-coh-orange tracking-widest uppercase">NEXT: {next}</div>
        </button>
      )}
    </div>
  </footer>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentIndex = FLOW.findIndex(f => f.path === location.pathname);
  const current = FLOW[currentIndex] || FLOW[0];
  const prev = currentIndex > 0 ? FLOW[currentIndex - 1] : null;
  const next = currentIndex < FLOW.length - 1 ? FLOW[currentIndex + 1] : null;

  const goNext = useCallback(() => {
    if (next && !isScrolling.current) {
      isScrolling.current = true;
      navigate(next.path);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => { isScrolling.current = false; }, 800);
    }
  }, [next, navigate]);

  const goPrev = useCallback(() => {
    if (prev && !isScrolling.current) {
      isScrolling.current = true;
      navigate(prev.path);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => { isScrolling.current = false; }, 800);
    }
  }, [prev, navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Scroll/wheel navigation — snaps to next/prev slide
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev]);

  return (
    <div className="bg-coh-bg text-coh-light font-sans h-screen flex flex-col relative overflow-hidden">
      <Header
        leftTitle={current.name}
        centerSub="CONFIDENTIAL PITCH DECK // 2025"
        rightContent={<div className="font-mono text-[10px] text-coh-orange tracking-widest">SECURE_ACCESS [GRANTED]</div>}
      />
      <main className="flex-1 relative z-10 overflow-hidden">
        {children}
      </main>
      <FooterNav
        prev={prev?.name}
        next={next?.name}
        page={current.page}
        currentIndex={currentIndex}
        total={FLOW.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
};

export const Watermark = ({ text, small }: { text: string; small?: boolean }) => (
  <div className={small ? 'watermark-text-small' : 'watermark-text'}>{text}</div>
);
