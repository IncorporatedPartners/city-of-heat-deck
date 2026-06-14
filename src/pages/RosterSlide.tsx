import type { FC } from 'react';
import { SlideBackground, Watermark } from '../components';
import { CAST_MEMBERS } from '../data';

type CastMember = (typeof CAST_MEMBERS)[number];

const leads = CAST_MEMBERS.filter((member) => member.tier === 'lead');
const supporting = CAST_MEMBERS.filter((member) => member.tier === 'supporting');
const introducing = CAST_MEMBERS.find((member) => member.tier === 'introducing');

const supportImagePosition: Record<string, string> = {
  baybay: '50% 42%',
  tonyray: '50% 43%',
};

const StatusBadge: FC<{ status: string }> = ({ status }) => (
  <div className="self-start font-mono text-[6px] md:text-[7px] px-1.5 py-0.5 border tracking-widest uppercase text-green-500 border-green-500/30 bg-green-500/10">
    {status}
  </div>
);

const LeadCard: FC<{ char: CastMember }> = ({ char }) => (
  <div className="group md:col-span-6 min-h-[245px] bg-coh-panel/75 border border-coh-orange/40 hover:border-coh-orange transition-all duration-500 overflow-hidden flex">
    <div className="w-5/12 relative overflow-hidden bg-black">
      <img src={char.image} alt={char.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coh-bg/80" />
    </div>
    <div className="w-7/12 p-4 md:p-5 flex flex-col justify-between">
      <div>
        <div className="font-mono text-[8px] md:text-[9px] text-coh-orange tracking-widest mb-2 uppercase">MAIN CHARACTER</div>
        <div className="font-bebas text-4xl md:text-5xl text-white tracking-widest leading-none">{char.name}</div>
        <div className="font-mono text-[9px] md:text-[10px] text-coh-light tracking-widest mt-2 uppercase">{char.actor}</div>
        <div className="font-mono text-[8px] text-coh-orange tracking-widest mt-1 uppercase">{char.role}</div>
      </div>
      <p className="text-coh-gray text-[11px] md:text-xs leading-relaxed mt-4">{char.desc}</p>
      <StatusBadge status={char.status} />
    </div>
  </div>
);

const SupportingCard: FC<{ char: CastMember }> = ({ char }) => (
  <div className="group md:col-span-3 bg-coh-panel/70 border border-coh-border hover:border-coh-orange/60 transition-all duration-500 overflow-hidden">
    <div className="h-36 md:h-40 relative overflow-hidden bg-black">
      <img
        src={char.image}
        alt={char.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
        style={{ objectPosition: supportImagePosition[char.id] ?? '50% 25%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coh-bg via-transparent to-transparent" />
      <div className="absolute top-2 left-2 bg-coh-orange text-white font-mono text-[6px] px-1.5 py-0.5 tracking-widest">KEY CAST</div>
    </div>
    <div className="p-3">
      <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest leading-none truncate">{char.name}</div>
      <div className="font-mono text-[7px] md:text-[8px] text-coh-light tracking-widest truncate mt-1">{char.actor}</div>
      <div className="font-mono text-[7px] text-coh-orange tracking-widest uppercase truncate mt-1">{char.role}</div>
      <p className="text-coh-gray text-[9px] leading-relaxed line-clamp-2 mt-2">{char.desc}</p>
    </div>
  </div>
);

const IntroducingCard: FC<{ char: CastMember }> = ({ char }) => (
  <div className="md:col-span-4 bg-coh-panel/80 border border-coh-orange/50 overflow-hidden flex min-h-[132px]">
    <div className="w-32 md:w-36 shrink-0 relative overflow-hidden bg-black">
      <img src={char.image} alt={char.name} className="w-full h-full object-cover object-top grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coh-bg/70" />
    </div>
    <div className="p-3 md:p-4 min-w-0 flex flex-col justify-center">
      <div className="font-mono text-[7px] md:text-[8px] text-coh-orange tracking-widest uppercase mb-1">INTRODUCING // ACTING DEBUT</div>
      <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest leading-none truncate">{char.actor}</div>
      <div className="font-bebas text-xl md:text-2xl text-coh-orange tracking-widest leading-none mt-1">{char.name}</div>
      <div className="font-mono text-[6px] md:text-[7px] text-coh-light tracking-widest uppercase mt-2">{char.role}</div>
    </div>
  </div>
);

export const RosterSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src="/Maimi_cCl1nFsVkbSVULaJxUHC.jpeg" opacity="opacity-10" />
    <Watermark text="CAST" />

    <div className="flex-1 p-3 md:p-5 relative z-10 max-w-[1500px] mx-auto w-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-1 h-5 bg-coh-orange" />
        <h2 className="font-bebas text-xl md:text-2xl tracking-widest text-white">ATTACHED CAST</h2>
        <div className="font-mono text-[8px] md:text-[10px] text-green-500 tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-1">
          ALL CONFIRMED
        </div>
        <div className="flex-1 h-px bg-coh-border/50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {leads.map((char) => (
          <LeadCard key={char.id} char={char} />
        ))}

        <div className="md:col-span-12 flex items-center gap-3 mt-1">
          <div className="w-1 h-4 bg-coh-border" />
          <h3 className="font-bebas text-lg md:text-xl text-white tracking-widest">KEY SUPPORTING CAST</h3>
          <div className="flex-1 h-px bg-coh-border/50" />
        </div>

        {supporting.map((char) => (
          <SupportingCard key={char.id} char={char} />
        ))}

        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-3 mt-1">
          {introducing && <IntroducingCard char={introducing} />}

          <div className="md:col-span-8 bg-coh-panel/55 border border-coh-border p-4 md:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 content-center">
            <div>
              <div className="font-mono text-[8px] text-coh-orange tracking-widest uppercase mb-2">PRINCIPAL ANCHORS</div>
              <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest leading-none">MALIK + MS. LISA</div>
              <p className="text-coh-gray text-[10px] leading-relaxed mt-2">The emotional and narrative center of Season One.</p>
            </div>
            <div>
              <div className="font-mono text-[8px] text-coh-orange tracking-widest uppercase mb-2">PRESSURE POINTS</div>
              <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest leading-none">FAMILY. POWER. STREET CODE.</div>
              <p className="text-coh-gray text-[10px] leading-relaxed mt-2">The attached cast surrounds Malik with allies, rivals, operators, and consequences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
