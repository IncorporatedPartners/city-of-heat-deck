import type { FC } from 'react';
import { SlideBackground, Watermark } from '../components';
import { CAST_MEMBERS } from '../data';

type CastMember = (typeof CAST_MEMBERS)[number];

const ensemble = CAST_MEMBERS.filter((member) => member.tier === 'ensemble');

const EnsembleCard: FC<{ char: CastMember; index: number }> = ({ char, index }) => {
  const longName = char.name.length > 10;

  return (
    <div className="group bg-coh-panel/70 border border-coh-border hover:border-coh-orange/50 transition-all duration-500 overflow-hidden flex min-h-[128px] md:min-h-0 md:h-full">
      <div className="w-28 md:w-32 shrink-0 relative overflow-hidden bg-black">
        <img src={char.image} alt={char.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coh-bg/60" />
        <div className="absolute top-2 left-2 bg-black/75 border border-coh-border px-1.5 py-0.5 font-mono text-[6px] text-coh-orange tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </div>
        {char.missingHeadshot && (
          <div className="absolute bottom-2 left-2 right-2 bg-black/80 border border-coh-border px-1 py-0.5 font-mono text-[5px] text-coh-gray tracking-widest text-center">
            HEADSHOT PENDING
          </div>
        )}
      </div>
      <div className="p-3 min-w-0 flex flex-col justify-center">
        <div className={`font-bebas text-white tracking-widest leading-[0.92] break-words ${longName ? 'text-[1.65rem] md:text-[1.9rem] xl:text-[2.05rem]' : 'text-2xl md:text-3xl'}`}>
          {char.name}
        </div>
        <div className="font-mono text-[7px] md:text-[8px] text-coh-light tracking-widest truncate mt-1">{char.actor}</div>
        <div className="font-mono text-[7px] text-coh-orange tracking-widest uppercase truncate mt-1">{char.role}</div>
        <p className="hidden lg:block text-coh-gray text-[9px] leading-relaxed line-clamp-3 mt-2">{char.desc}</p>
        <div className="mt-2 self-start font-mono text-[5px] md:text-[6px] px-1 py-0.5 border tracking-widest uppercase text-green-500 border-green-500/30 bg-green-500/10">
          {char.status}
        </div>
      </div>
    </div>
  );
};

export const EnsembleSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden bg-coh-bg">
    <SlideBackground src="/Maimi_TmCRWGMyK7NhROS9QrR2.jpeg" opacity="opacity-10" />
    <Watermark text="ENSEMBLE" small />

    <div className="flex-1 p-3 md:p-5 relative z-10 max-w-[1540px] mx-auto w-full overflow-y-auto">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <div className="w-1 h-5 bg-coh-orange" />
        <h2 className="font-bebas text-xl md:text-2xl tracking-widest text-white">THE CIRCLE</h2>
        <div className="flex-1 h-px bg-coh-border/50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:min-h-[calc(100vh-180px)]">
        <section className="md:col-span-5 bg-coh-panel/75 border border-coh-orange/40 overflow-hidden flex flex-col">
          <div className="relative aspect-video bg-black overflow-hidden">
            <video
              src="/COH_Trailer_web.mp4"
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/Maimi_gx22zFQdnwUdJnxF2sBs.jpeg"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/40" />
            <div className="pointer-events-none absolute top-3 left-3 right-3 flex justify-between gap-3 font-mono text-[7px] md:text-[8px] tracking-widest uppercase">
              <span className="text-coh-orange">MIAMI AFTER DARK</span>
              <span className="text-coh-gray">SEASON ONE</span>
            </div>
          </div>
          <div className="p-4 md:p-5 border-t border-coh-border bg-black/20 flex-1 flex flex-col justify-between gap-5">
            <div>
              <div className="font-mono text-[8px] text-coh-orange tracking-widest uppercase mb-3">MIAMI AFTER DARK</div>
              <div className="font-bebas text-4xl md:text-6xl text-white tracking-widest leading-[0.9]">
                THE CITY
                <br />
                <span className="text-coh-orange">PULLS EVERYBODY IN</span>
              </div>
              <p className="max-w-md text-coh-gray text-[11px] md:text-sm leading-relaxed mt-4">
                Rooms turn hot. Cars idle outside. Every name on the street carries a debt, a favor, or a threat.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['LOYALTY TESTED', 'POWER MOVES', 'HEAT RISING'].map((label, i) => (
                <div key={label} className="border border-coh-border bg-coh-bg/60 p-3">
                  <div className="font-mono text-[7px] text-coh-orange tracking-widest mb-1">{String(i + 1).padStart(2, '0')}</div>
                  <div className="font-bebas text-xl text-white tracking-widest leading-none">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-coh-border bg-black/30">
            {['ATTACHED CAST', 'MIAMI AFTER DARK', 'SEASON ONE'].map((label) => (
              <div key={label} className="p-3 border-r border-coh-border last:border-r-0">
                <div className="font-mono text-[7px] text-coh-orange tracking-widest uppercase">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 auto-rows-fr content-stretch">
          {ensemble.map((char, index) => (
            <EnsembleCard key={char.id} char={char} index={index} />
          ))}
        </section>
      </div>
    </div>
  </div>
);
