import { SlideBackground, Watermark } from '../components';
import { BACKDROPS, TONE_COMPS, THEMES, CORE_ARCHETYPES } from '../data';

export const SynopsisSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src={BACKDROPS.synopsis} opacity="opacity-25" />
    <Watermark text="SYNOPSIS" />

    <div className="flex-1 flex flex-col md:flex-row relative z-10 overflow-y-auto md:overflow-hidden">
      {/* Left — Text Content */}
      <div className="w-full md:w-7/12 p-4 md:p-10 flex flex-col justify-center">
        <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 uppercase">SEASON ONE // SERIES OVERVIEW</div>

        <h2 className="font-bebas text-2xl md:text-4xl leading-[0.9] max-w-3xl mb-8 tracking-wide">
          <span className="text-white">WHEN A ROBBERY GOES WRONG AND MISTAKEN IDENTITY IGNITES A WAR, </span>
          <span className="text-coh-orange">ALLIANCES FRACTURE ACROSS MIAMI</span>
          <span className="text-white"> — AND THE CONSEQUENCES REACH EVERYONE.</span>
        </h2>

        <div className="bg-coh-panel/80 border border-coh-border p-5 max-w-2xl mb-5">
          <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-3 uppercase">SEASON ONE OVERVIEW</div>
          <p className="text-coh-gray text-sm leading-relaxed">
            Season One centers on a destabilized power structure in Miami's underworld. When a dominant force weakens, a vacuum forms — and ambitious players move quickly to claim territory, influence, and control. At the center of the storm is <span className="text-white font-medium">Malik</span>, a rising street entrepreneur forced to navigate shifting alliances, escalating rivalries, and mounting pressure from both the streets and law enforcement.
          </p>
        </div>

        {/* Core Character Archetypes */}
        <div className="flex flex-col md:flex-row gap-3 mb-5">
          {CORE_ARCHETYPES.map(arch => (
            <div key={arch.title} className="bg-coh-panel/60 border border-coh-border px-4 py-3 flex-1">
              <div className="font-bebas text-lg text-white tracking-widest leading-tight">{arch.title}</div>
              <div className="font-mono text-[8px] text-coh-gray tracking-wide mt-1 leading-relaxed">{arch.desc}</div>
            </div>
          ))}
        </div>

        {/* Tone Comps */}
        <div className="flex flex-wrap gap-3 mb-4">
          {TONE_COMPS.map(comp => (
            <div key={comp.title} className="bg-coh-panel/60 border border-coh-border px-3 py-2 flex-1 min-w-[calc(50%-0.75rem)] md:min-w-0">
              <div className="font-bebas text-lg text-white tracking-widest">{comp.title}</div>
              <div className="font-mono text-[8px] text-coh-orange tracking-widest uppercase">{comp.aspect}</div>
            </div>
          ))}
        </div>

        {/* Themes */}
        <div className="flex flex-wrap gap-2">
          {THEMES.map(theme => (
            <div key={theme} className="border border-coh-border px-3 py-1.5 font-mono text-[9px] text-coh-orange tracking-widest uppercase bg-coh-panel/50">
              {theme}
            </div>
          ))}
        </div>
      </div>

      {/* Right — Mood Images */}
      <div className="w-full md:w-5/12 p-3 md:p-6 flex flex-col gap-4 relative z-10 h-64 md:h-auto overflow-hidden">
        <div className="flex-1 relative overflow-hidden border border-coh-border/50 group">
          <img src="/Maimi_d64kmb8ngeElSOAX59UW.jpeg" alt="Mood" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-coh-orange/10 mix-blend-overlay" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-coh-orange tracking-widest uppercase bg-black/80 px-2 py-1 border border-coh-orange">MOOD_REF_01</div>
        </div>
        <div className="hidden md:flex gap-4 h-1/3">
          <div className="flex-1 relative overflow-hidden border border-coh-border/50 group">
            <img src="/Maimi_dttjoNUZMngG70zG0Z1f.jpeg" alt="Night Drive" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="flex-1 relative overflow-hidden border border-coh-border/50 group">
            <img src="/Maimi_G4dWeMpVbmmoRjl1fYwc.jpeg" alt="Confrontation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
        <div className="bg-coh-panel/80 border border-coh-border p-4">
          <p className="text-coh-gray text-xs leading-relaxed italic">
            "Miami is more than a backdrop — it's a pressure system. From the streets to the system, loyalty is currency — and betrayal is inevitable."
          </p>
          <div className="font-mono text-[8px] text-coh-orange tracking-widest mt-2 uppercase">UNIQUELY MIAMI — CULTURALLY LAYERED, CARIBBEAN-INFLUENCED, BILINGUAL</div>
        </div>
      </div>
    </div>
  </div>
);
