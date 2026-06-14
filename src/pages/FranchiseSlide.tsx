import { SlideBackground, Watermark } from '../components';
import { CORE_ARCHETYPES } from '../data';

const SEASONS = [
  { num: '01', title: 'SURVIVAL', desc: 'Street-level ambition. A robbery gone wrong ignites a war across Miami - and every alliance is tested.', status: 'IN PRODUCTION' },
  { num: '02', title: 'EXPANSION', desc: 'New territory, new enemies. Malik moves beyond the block as the stakes - and the surveillance - escalate.', status: 'DEVELOPMENT' },
  { num: '03', title: 'INFRASTRUCTURE', desc: 'From street-level hustle to infrastructure-level control. The game becomes about supply chains, politics, and power brokering.', status: 'CONCEPT' },
  { num: '04', title: 'EMPIRE', desc: 'The weight of an empire. Internal fractures threaten everything built - loyalty becomes the most expensive currency.', status: 'CONCEPT' },
  { num: '05', title: 'LEGACY', desc: 'The final reckoning. Every decision, every betrayal, every sacrifice converges in a battle for legacy over territory.', status: 'CONCEPT' },
];

export const FranchiseSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src="/Maimi_qeKiEXBlHLDCyCU9zhDb.jpeg" opacity="opacity-10" />
    <Watermark text="UNIVERSE" />

    <div className="flex-1 flex flex-col md:flex-row relative z-10 overflow-y-auto">
      <div className="w-full md:w-5/12 p-5 md:p-10 flex flex-col justify-center">
        <div className="font-mono text-[10px] md:text-xs text-coh-orange tracking-widest mb-3 md:mb-4 uppercase">
          FRANCHISE ARCHITECTURE // 5-SEASON ARC
        </div>

        <h2 className="font-bebas text-4xl md:text-6xl leading-[0.9] mb-4 md:mb-6 tracking-wide">
          <span className="text-white">NOT JUST A SERIES - </span>
          <span className="text-coh-orange">AN EXPANDING UNIVERSE</span>
        </h2>

        <div className="bg-coh-panel/80 border border-coh-border p-4 md:p-5 mb-4 md:mb-6">
          <p className="text-coh-gray text-xs md:text-sm leading-relaxed">
            City of Heat is designed as a <span className="text-white font-medium">five-season narrative arc</span>, evolving from street-level survival to infrastructure-level control. A scalable world built on ambition, consequence, and control - with spin-off potential and digital extensions baked into the IP from day one.
          </p>
        </div>

        <div className="bg-coh-panel/60 border border-coh-border p-3 md:p-4 mb-4 md:mb-6">
          <div className="font-mono text-[9px] text-coh-orange tracking-widest mb-2 md:mb-3 uppercase">SCALABLE IP</div>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {['SPIN-OFFS', 'DIGITAL EXTENSIONS', 'MERCHANDISE', 'SOUNDTRACK IP', 'GAMING POTENTIAL'].map((tag) => (
              <div key={tag} className="border border-coh-orange/30 px-1.5 md:px-2 py-0.5 md:py-1 font-mono text-[7px] md:text-[8px] text-coh-orange tracking-widest bg-coh-orange-dim">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="border-l-2 border-coh-orange pl-3 md:pl-4 mb-4 md:mb-6">
          <p className="text-coh-gray text-[11px] md:text-xs leading-relaxed italic">
            "Every season deepens the world. Every character carries weight forward. The audience invests not in a story - but in a universe."
          </p>
        </div>

        <div className="font-mono text-[7px] md:text-[8px] text-coh-gray tracking-wider uppercase space-y-0.5">
          <div>CREATED BY <span className="text-white">DONELL HARRIS</span></div>
          <div>EP / DIRECTOR <span className="text-white">MARCUS "BENMARC" TURNER</span></div>
        </div>

        <h3 className="font-bebas text-2xl md:text-3xl text-coh-orange tracking-widest uppercase mt-4 md:mt-6 mb-2 md:mb-3">SEASON ONE OVERVIEW</h3>
        <p className="text-coh-gray text-[11px] md:text-xs leading-relaxed mb-3 md:mb-4">
          Season One centers on a destabilized power structure in Miami's underworld. When a dominant force weakens, a vacuum forms - and ambitious players move quickly to claim territory, influence, and control. At the center of the storm is Malik, a rising street entrepreneur forced to navigate shifting alliances, escalating rivalries, and mounting pressure from both the streets and law enforcement.
        </p>
        <div className="flex flex-col gap-2">
          {CORE_ARCHETYPES.map((arch) => (
            <div key={arch.title} className="border border-coh-border p-2.5 md:p-3 bg-coh-panel/60">
              <div className="font-mono text-[8px] md:text-[9px] text-coh-orange tracking-widest mb-1">{arch.title}</div>
              <p className="text-coh-gray text-[10px] md:text-[11px] leading-relaxed">{arch.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-7/12 p-4 md:p-8 flex flex-col justify-center gap-2 md:gap-3">
        {SEASONS.map((season, i) => (
          <div
            key={season.num}
            className={`flex items-stretch border border-coh-border/50 bg-coh-panel/60 overflow-hidden transition-all hover:border-coh-orange/50 ${i === 0 ? 'border-coh-orange/80' : ''}`}
          >
            <div className={`w-14 md:w-20 flex items-center justify-center shrink-0 ${i === 0 ? 'bg-coh-orange' : 'bg-coh-panel'}`}>
              <div className={`font-bebas text-2xl md:text-3xl tracking-widest ${i === 0 ? 'text-black' : 'text-coh-border'}`}>
                S{season.num}
              </div>
            </div>
            <div className="flex-1 p-3 md:p-4 flex items-center gap-3 md:gap-6">
              <div className="flex-1">
                <div className="font-bebas text-lg md:text-xl tracking-widest text-white mb-0.5 md:mb-1">{season.title}</div>
                <p className="text-coh-gray text-[11px] md:text-xs leading-relaxed">{season.desc}</p>
              </div>
              <div className={`font-mono text-[7px] md:text-[8px] tracking-widest px-1.5 md:px-2 py-0.5 md:py-1 border shrink-0 ${i === 0 ? 'text-coh-orange border-coh-orange bg-coh-orange-dim' : 'text-coh-gray border-coh-border'}`}>
                {season.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
