import { ArrowRight } from 'lucide-react';
import { SlideBackground, Watermark } from '../components';

const AUDIENCE_SIGNALS = [
  { title: 'CRIME DRAMA AUDIENCE', detail: 'Grounded ensemble worlds, street economies, family stakes, and morally complicated leads.' },
  { title: 'MIAMI CULTURE SIGNAL', detail: 'Nightlife, cars, neighborhoods, Caribbean influence, heat, pressure, and city-specific texture.' },
  { title: 'CASTING MOMENTUM', detail: 'A fully attached ensemble gives larger names a real package to evaluate, not just a concept.' },
];

const MATERIALS = [
  { title: 'MIAMI AFTER DARK', status: 'LIVE', note: 'Rooms, cars, clubs, pressure' },
  { title: 'SERIES WORLD', status: 'DEFINED', note: 'Characters, engine, five-season runway' },
  { title: 'TALENT PATHS', status: 'OPEN', note: 'Guest, recurring, producing conversations' },
];

export const AncillarySlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src="/Maimi_We9bIIjOeHaiYJDE2lii.jpeg" opacity="opacity-15" />
    <Watermark text="AUDIENCE" />

    <div className="relative z-10 h-full p-4 md:p-6 overflow-y-auto">
      <div className="h-full min-h-[760px] md:min-h-0 grid grid-cols-1 md:grid-cols-12 gap-4">
        <section className="md:col-span-5 bg-coh-panel/80 border border-coh-border p-5 md:p-7 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="font-mono text-[10px] md:text-xs text-coh-orange tracking-widest mb-4 uppercase">
              AUDIENCE STRATEGY // PUBLIC-FACING PACKAGE
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl text-white leading-[0.88] tracking-wide mb-5">
              A MIAMI
              <br />
              <span className="text-coh-orange">CRIME WORLD</span>
              <br />
              BUILT TO SCALE
            </h2>
            <p className="text-coh-gray text-sm md:text-base leading-relaxed max-w-md">
              A serious crime world needs weight: an attached ensemble, cultural specificity, and enough room for recognizable talent to enter with authority.
            </p>
          </div>

          <div className="mt-8 border border-coh-border bg-black/30 p-4">
            <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 uppercase">INDUSTRY PATH</div>
            <div className="flex items-center justify-between text-center">
              <div className="flex-1">
                <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest">WORLD</div>
                <div className="font-mono text-[8px] text-coh-gray tracking-widest">HEAT</div>
              </div>
              <ArrowRight className="w-5 h-5 text-coh-orange mx-2 shrink-0" />
              <div className="flex-1">
                <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest">TALENT</div>
                <div className="font-mono text-[8px] text-coh-gray tracking-widest">SIGNAL</div>
              </div>
              <ArrowRight className="w-5 h-5 text-coh-orange mx-2 shrink-0" />
              <div className="flex-1">
                <div className="font-bebas text-2xl md:text-3xl text-coh-orange tracking-widest">MARKET</div>
                <div className="font-mono text-[8px] text-coh-gray tracking-widest">PACKAGE</div>
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-7 grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-4 min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AUDIENCE_SIGNALS.map((item, i) => (
              <div key={item.title} className="bg-coh-panel/80 border border-coh-border p-4 md:p-5 hover:border-coh-orange/50 transition-all duration-500">
                <div className="font-mono text-[8px] text-coh-orange tracking-widest mb-3">0{i + 1} // SIGNAL</div>
                <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest leading-none mb-3">{item.title}</div>
                <p className="text-coh-gray text-[11px] md:text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden border border-coh-border bg-black min-h-[220px]">
            <img src="/Maimi_pe1Q1A1GVHNfIgtobMoK.gif" alt="" className="absolute inset-0 w-full h-full object-cover opacity-45 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
            <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-center max-w-3xl">
              <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-3 uppercase">WHY IT TRAVELS</div>
              <h3 className="font-bebas text-4xl md:text-5xl text-white tracking-widest leading-none mb-4">
                STREET PRESSURE, FAMILY STAKES, SYSTEMIC HEAT
              </h3>
              <p className="text-coh-gray text-sm leading-relaxed">
                City of Heat gives audiences a familiar premium crime lane with a specific Miami identity: cultural texture, velocity, and a character web that can absorb bigger names without feeling bolted on.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MATERIALS.map((item) => (
              <div key={item.title} className="bg-coh-panel/80 border border-coh-border p-4 md:p-5">
                <div className="font-mono text-[8px] md:text-[9px] text-coh-orange tracking-widest mb-2 uppercase">{item.status}</div>
                <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest leading-none mb-2">{item.title}</div>
                <div className="font-mono text-[8px] md:text-[9px] text-coh-gray tracking-widest">{item.note}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);
