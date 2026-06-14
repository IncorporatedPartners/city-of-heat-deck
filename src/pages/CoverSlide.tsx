import { useEffect, useRef, useState } from 'react';
import { Watermark } from '../components';

const COVER_CLIPS = [
  '/clip_street.mp4',
  '/clip_crew.mp4',
  '/clip_club.mp4',
  '/clip_neon.mp4',
  '/clip_portrait.mp4',
];

const CYCLE_DURATION = 6000;

export const CoverSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % COVER_CLIPS.length);
    }, CYCLE_DURATION);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <div className="h-full flex flex-col md:flex-row relative overflow-hidden">
      {COVER_CLIPS.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        >
          <video
            ref={(el) => { videoRefs.current[i] = el; }}
            src={src}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
            preload={i < 2 ? 'auto' : 'metadata'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coh-bg/90 via-coh-bg/60 to-coh-bg/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-coh-bg/80 via-transparent to-coh-bg/40" />
        </div>
      ))}

      <Watermark text="COH" />

      <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center relative z-10">
        <div className="font-mono text-xs text-coh-orange tracking-widest mb-6 md:mb-12 uppercase">SEASON ONE // SERIES PRESENTATION</div>

        <div className="flex flex-col mb-6 md:mb-12">
          <h1 className="font-bebas text-[5rem] md:text-[11rem] leading-[0.8] text-white tracking-tighter">CITY</h1>
          <h1 className="font-bebas text-[5rem] md:text-[11rem] leading-[0.8] text-outline-orange tracking-tighter">OF</h1>
          <h1 className="font-bebas text-[5rem] md:text-[11rem] leading-[0.8] text-coh-orange tracking-tighter">HEAT</h1>
        </div>

        <div className="border-l-2 border-coh-orange pl-4 md:pl-6 mb-6 md:mb-10 max-w-md">
          <p className="text-coh-light text-sm md:text-base leading-relaxed">
            In the relentless heat of Miami, a rising street entrepreneur is drawn into a volatile city-wide power struggle where ambition collides with loyalty, rivals circle for control, and one miscalculation could ignite a war that reshapes the streets - and the system behind them.
          </p>
        </div>

        <div className="font-mono text-[9px] text-coh-gray tracking-wider mb-6 md:mb-10 max-w-md uppercase space-y-1">
          <div>CREATED BY &amp; EXECUTIVE PRODUCED BY <span className="text-white">DONELL HARRIS</span></div>
          <div>EXECUTIVE PRODUCER &amp; DIRECTOR <span className="text-white">MARCUS "BENMARC" TURNER</span></div>
        </div>

        <div className="flex gap-8 md:gap-24 font-mono text-[10px] tracking-widest uppercase">
          <div>
            <div className="text-coh-orange mb-2">FORMAT</div>
            <div className="text-coh-gray">DRAMA SERIES</div>
          </div>
          <div>
            <div className="text-coh-orange mb-2">STATUS</div>
            <div className="text-coh-gray">SIZZLE LIVE</div>
          </div>
          <div>
            <div className="text-coh-orange mb-2">PACKAGE</div>
            <div className="text-coh-gray">TALENT-READY</div>
          </div>
        </div>

        <div className="flex md:hidden gap-2 mt-6">
          {COVER_CLIPS.map((_, i) => (
            <div key={i} className="relative w-12 h-0.5 bg-white/20 overflow-hidden">
              <div className={`absolute inset-y-0 left-0 bg-coh-orange transition-all ${i === activeIndex ? 'animate-fill-bar' : i < activeIndex ? 'w-full' : 'w-0'}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex w-1/2 relative z-10 items-end justify-end p-12">
        <div className="flex gap-2">
          {COVER_CLIPS.map((_, i) => (
            <div key={i} className="relative w-12 h-0.5 bg-white/20 overflow-hidden">
              <div className={`absolute inset-y-0 left-0 bg-coh-orange transition-all ${i === activeIndex ? 'animate-fill-bar' : i < activeIndex ? 'w-full' : 'w-0'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
