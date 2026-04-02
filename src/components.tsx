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
  <header className="flex justify-between items-start px-4 py-3 md:px-8 md:py-5 border-b border-coh-border/50 bg-coh-bg/60 backdrop-blur-sm z-50 relative shrink-0">
    <div className="flex flex-col gap-1 w-full md:w-1/3">
      <div className="font-bebas text-lg md:text-2xl tracking-widest text-white flex gap-2 items-center">
        COH <span className="text-coh-orange">//</span> 01 {leftTitle && <span className="text-coh-orange ml-1 md:ml-2 text-sm md:text-xl truncate">&gt; {leftTitle}</span>}
      </div>
      {leftSub && <div className="font-mono text-[9px] md:text-[10px] text-coh-orange tracking-widest">{leftSub}</div>}
    </div>
    <div className="hidden md:flex flex-col gap-1 items-center text-center w-1/3">
      {centerTitle && <div className="font-bebas text-3xl tracking-widest text-white">{centerTitle}</div>}
      {centerSub && <div className="font-mono text-[10px] text-coh-gray tracking-widest uppercase">{centerSub}</div>}
    </div>
    <div className="hidden md:flex justify-end items-start w-1/3">
      {rightContent}
    </div>
  </header>
);

export const FooterNav = ({ prev, next, page, onPrev, onNext, currentIndex, total }: any) => (
  <footer className="flex justify-between items-center px-4 py-3 md:px-8 md:py-5 border-t border-coh-border/50 bg-coh-bg/60 backdrop-blur-sm z-50 relative shrink-0">
    <div className="hidden md:flex items-center gap-4 w-1/3">
      {prev && (
        <button onClick={onPrev} className="flex items-center gap-4 hover:opacity-70 transition-opacity text-left cursor-pointer">
          <div className="font-mono text-[10px] text-coh-gray tracking-widest uppercase">PREVIOUS: {prev}</div>
        </button>
      )}
    </div>
    <div className="flex flex-col items-center gap-1 md:gap-2 w-full md:w-1/3">
      <div className="flex gap-1 md:gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${i === currentIndex ? 'bg-coh-orange scale-125' : 'bg-coh-border'}`} />
        ))}
      </div>
      <div className="font-mono text-[9px] md:text-[10px] text-coh-gray tracking-widest uppercase">{page}</div>
    </div>
    <div className="hidden md:flex justify-end items-center gap-4 w-1/3">
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
  const touchStart = useRef<{ x: number; y: number } | null>(null);

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

  // Touch/swipe navigation for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Only trigger if horizontal swipe is dominant and exceeds threshold
      if (absDeltaX > 50 && absDeltaX > absDeltaY * 1.5) {
        if (deltaX < 0) goNext();
        else goPrev();
      }
      touchStart.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrev]);

  return (
    <div className="bg-coh-bg text-coh-light font-sans h-screen flex flex-col relative overflow-hidden">
      <Header
        leftTitle={current.name}
        centerSub="CONFIDENTIAL PITCH DECK // 2026"
        rightContent={<div className="font-mono text-[10px] text-coh-orange tracking-widest">SECURE_ACCESS [GRANTED]</div>}
      />
      <main className="flex-1 relative z-10 overflow-y-auto md:overflow-hidden">
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
