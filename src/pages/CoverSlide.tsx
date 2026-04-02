import { useState, useEffect } from 'react';
import { Watermark } from '../components';

// Skyline repeats 3x, others play once
const COVER_GIFS = [
  '/Maimi_1t9mw2JfVNe0ZRNOWXU3.gif',
  '/Maimi_pe1Q1A1GVHNfIgtobMoK.gif',
  '/Maimi_1t9mw2JfVNe0ZRNOWXU3.gif',
  '/Maimi_CSbGgtMOzwYeQYjwi2Ht.gif',
  '/Maimi_1t9mw2JfVNe0ZRNOWXU3.gif',
  '/Maimi_0CEc2gel9eajlYtVDg7O.gif',
];

const CYCLE_DURATION = 6000; // ms per GIF

export const CoverSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % COVER_GIFS.length);
    }, CYCLE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col md:flex-row relative overflow-hidden">
      {/* Looping GIF Background */}
      {COVER_GIFS.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-coh-bg/90 via-coh-bg/60 to-coh-bg/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-coh-bg/80 via-transparent to-coh-bg/40" />
        </div>
      ))}

      <Watermark text="COH" />

      {/* Left — Title */}
      <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center relative z-10">
        <div className="font-mono text-xs text-coh-orange tracking-widest mb-6 md:mb-12 uppercase">SEASON ONE // FINISHING FUND</div>

        <div className="flex flex-col mb-6 md:mb-12">
          <h1 className="font-bebas text-[5rem] md:text-[11rem] leading-[0.8] text-white tracking-tighter">CITY</h1>
          <h1 className="font-bebas text-[5rem] md:text-[11rem] leading-[0.8] text-outline-orange tracking-tighter">OF</h1>
          <h1 className="font-bebas text-[5rem] md:text-[11rem] leading-[0.8] text-coh-orange tracking-tighter">HEAT</h1>
        </div>

        <div className="border-l-2 border-coh-orange pl-4 md:pl-6 mb-6 md:mb-10 max-w-md">
          <p className="text-coh-light text-sm md:text-base leading-relaxed">
            In the relentless heat of Miami, a rising street entrepreneur is drawn into a volatile city-wide power struggle where ambition collides with loyalty, rivals circle for control, and one miscalculation could ignite a war that reshapes the streets — and the system behind them.
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
            <div className="text-coh-gray">POST-PRODUCTION</div>
          </div>
          <div>
            <div className="text-coh-orange mb-2">THE ASK</div>
            <div className="text-coh-gray">$500,000</div>
          </div>
        </div>

        {/* GIF progress indicators — mobile (below stats) */}
        <div className="flex md:hidden gap-2 mt-6">
          {COVER_GIFS.map((_, i) => (
            <div key={i} className="relative w-12 h-0.5 bg-white/20 overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 bg-coh-orange transition-all ${i === activeIndex ? 'animate-fill-bar' : i < activeIndex ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right — GIF progress indicators (desktop only) */}
      <div className="hidden md:flex w-1/2 relative z-10 items-end justify-end p-12">
        <div className="flex gap-2">
          {COVER_GIFS.map((_, i) => (
            <div key={i} className="relative w-12 h-0.5 bg-white/20 overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 bg-coh-orange transition-all ${i === activeIndex ? 'animate-fill-bar' : i < activeIndex ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
