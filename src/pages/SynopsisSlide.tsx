import { SlideBackground, Watermark } from '../components';
import { BACKDROPS, CORE_ARCHETYPES, THEMES, TONE_COMPS } from '../data';

const STORY_BEATS = [
  { label: 'INCITING MISTAKE', text: 'A robbery and mistaken identity turn a local move into a citywide fracture.' },
  { label: 'POWER VACUUM', text: 'Street operators, brokers, and law enforcement all try to shape the new order.' },
  { label: 'FAMILY COST', text: 'The violence reaches the people closest to Malik, turning ambition into consequence.' },
];

export const SynopsisSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" src="/clip_neon.mp4" />
    <div className="absolute inset-0 bg-black/80 z-[1]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-[2]" />
    <SlideBackground src={BACKDROPS.synopsis} opacity="opacity-10" />
    <Watermark text="SYNOPSIS" />

    <div className="relative z-10 h-full p-4 md:p-6 overflow-y-auto">
      <div className="h-full min-h-[760px] md:min-h-0 grid grid-cols-1 md:grid-cols-12 md:grid-rows-[minmax(0,1fr)_auto] gap-4">
        <section className="md:col-span-8 relative overflow-hidden border border-coh-border/60 bg-black min-h-[340px]">
          <img src="/still_night.jpg" alt="Character" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
          <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-8">
            <div>
              <div className="font-mono text-[10px] text-coh-orange tracking-[0.3em] mb-4 uppercase">City of Heat // Season One</div>
              <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl leading-[0.9] max-w-4xl tracking-wide">
                <span className="text-white">When a robbery goes wrong, </span>
                <span className="text-coh-orange">Miami fractures</span>
                <span className="text-white"> - and every alliance becomes a liability.</span>
              </h2>
            </div>
            <div className="max-w-2xl border-l-2 border-coh-orange pl-4 mt-8">
              <p className="text-coh-light text-sm md:text-base leading-relaxed">
                Season One centers on Malik, a rising street entrepreneur forced to navigate rival crews, family pressure, corrupt leverage, and a power structure that shifts faster than anyone can control.
              </p>
            </div>
          </div>
        </section>

        <section className="md:col-span-4 flex flex-col gap-4 min-h-0">
          <div className="bg-coh-panel/80 border border-coh-border p-4 md:p-5 flex-1">
            <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 uppercase">SERIES ENGINE</div>
            <div className="space-y-3">
              {STORY_BEATS.map((beat, i) => (
                <div key={beat.label} className="border-l-2 border-coh-orange/70 pl-3">
                  <div className="font-mono text-[8px] text-coh-orange tracking-widest mb-1">0{i + 1} // {beat.label}</div>
                  <p className="text-coh-gray text-[11px] md:text-xs leading-relaxed">{beat.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-coh-panel/70 border border-coh-border p-4 md:p-5">
            <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-3 uppercase">COMPARABLE LANE</div>
            <div className="grid grid-cols-2 gap-2">
              {TONE_COMPS.map((comp) => (
                <div key={comp.title} className="border border-coh-border/70 p-3">
                  <div className="font-bebas text-xl md:text-2xl text-white tracking-widest leading-none">{comp.title}</div>
                  <div className="font-mono text-[7px] text-coh-orange tracking-widest uppercase mt-2">{comp.aspect}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="md:col-span-7 bg-coh-panel/70 border border-coh-border p-4 md:p-5">
          <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-3 uppercase">CORE CHARACTER ARCHETYPES</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {CORE_ARCHETYPES.map((arch) => (
              <div key={arch.title} className="border border-coh-border/70 p-3">
                <div className="font-bebas text-lg md:text-xl text-white tracking-widest leading-tight">{arch.title}</div>
                <div className="font-mono text-[8px] text-coh-gray tracking-wide mt-2 leading-relaxed">{arch.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="md:col-span-5 bg-coh-panel/70 border border-coh-border p-4 md:p-5">
          <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-3 uppercase">CORE THEMES</div>
          <div className="flex flex-wrap gap-2">
            {THEMES.map((theme) => (
              <div key={theme} className="border border-coh-border px-3 py-1.5 font-mono text-[8px] text-coh-orange tracking-widest uppercase bg-black/30">
                {theme}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);
