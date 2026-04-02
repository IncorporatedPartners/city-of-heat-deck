import { SlideBackground, Watermark } from '../components';
import { BACKDROPS, CAST_PRIMARY, CAST_SUPPORTING } from '../data';

export const RosterSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src={BACKDROPS.roster} opacity="opacity-10" />
    <Watermark text="ROSTER" />

    <div className="flex-1 p-6 relative z-10 flex flex-col justify-center gap-4 max-w-[1400px] mx-auto w-full">
      {/* Primary Cast — 5 larger cards with hover drawer */}
      <div className="grid grid-cols-5 gap-4">
        {CAST_PRIMARY.map((char, i) => (
          <div key={char.id} className="group relative flex flex-col bg-coh-panel/60 border border-coh-border overflow-hidden hover:border-coh-orange/50 transition-all duration-500">
            <div className="h-48 relative overflow-hidden">
              <img src={char.image} alt={char.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-coh-bg via-coh-bg/20 to-transparent" />
              <div className="absolute inset-0 bg-coh-orange/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-2 left-2 bg-coh-orange text-white font-mono text-[7px] px-1.5 py-0.5 tracking-widest">ASSET_0{i + 1}</div>

              {/* Hover drawer — slides up from bottom */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-coh-bg/95 backdrop-blur-sm border-t border-coh-orange/40 p-3">
                <p className="text-coh-gray text-[10px] leading-relaxed">{char.desc}</p>
              </div>
            </div>
            <div className="p-3 flex flex-col flex-1">
              <div className="font-mono text-[8px] text-coh-orange tracking-widest mb-0.5 uppercase">{char.codename}</div>
              <div className="font-bebas text-3xl text-white tracking-widest leading-none mb-0.5">{char.name}</div>
              <div className="font-mono text-[8px] text-coh-gray tracking-widest uppercase mb-1">{char.role}</div>
              <div className="mt-auto flex justify-between items-center">
                <div className="font-mono text-[8px] text-white tracking-widest">{char.actor}</div>
                <div className={`font-mono text-[7px] px-1.5 py-0.5 border tracking-widest uppercase
                  ${char.status === 'ATTACHED' ? 'text-green-500 border-green-500/30 bg-green-500/10' :
                    'text-yellow-500 border-yellow-500/30 bg-yellow-500/10'}`}>
                  {char.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Supporting Cast — compact cards with hover drawer */}
      <div className="grid grid-cols-4 gap-3">
        {CAST_SUPPORTING.map((char) => (
          <div key={char.id} className="group relative flex bg-coh-panel/60 border border-coh-border overflow-hidden hover:border-coh-orange/50 transition-all duration-500">
            <div className="w-20 shrink-0 relative overflow-hidden">
              <img src={char.image} alt={char.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coh-bg/30" />
            </div>
            <div className="p-2.5 flex flex-col flex-1 min-w-0 relative">
              <div className="font-bebas text-xl text-white tracking-widest leading-none mb-0.5">{char.name}</div>
              <div className="font-mono text-[7px] text-coh-orange tracking-widest uppercase mb-1">{char.role}</div>
              <div className="mt-auto flex justify-between items-center gap-1">
                <div className="font-mono text-[7px] text-white tracking-widest truncate">{char.actor}</div>
                <div className={`font-mono text-[6px] px-1 py-0.5 border tracking-widest uppercase shrink-0
                  ${char.status === 'ATTACHED' ? 'text-green-500 border-green-500/30 bg-green-500/10' :
                    char.status === 'WISH LIST' ? 'text-coh-orange border-coh-orange/30 bg-coh-orange/10' :
                    char.status === 'CASTING' ? 'text-blue-400 border-blue-400/30 bg-blue-400/10' :
                    'text-yellow-500 border-yellow-500/30 bg-yellow-500/10'}`}>
                  {char.status}
                </div>
              </div>

              {/* Hover overlay for supporting cast */}
              <div className="absolute inset-0 bg-coh-bg/95 backdrop-blur-sm p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-center">
                <div className="font-bebas text-lg text-coh-orange tracking-widest leading-none mb-1">{char.name}</div>
                <p className="text-coh-gray text-[9px] leading-relaxed">{char.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
