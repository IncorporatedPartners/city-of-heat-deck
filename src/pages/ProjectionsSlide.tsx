import { SlideBackground, Watermark } from '../components';

const POSITIONING = [
  { title: 'GROUND LEVEL', signal: 'MIAMI STREETS', note: 'Authentic neighborhood pressure, loyalty codes, and street economy stakes.' },
  { title: 'SYSTEM LEVEL', signal: 'POWER STRUCTURE', note: 'Law enforcement, supply routes, nightlife, and political leverage pushing against the core crew.' },
  { title: 'PREMIUM LEVEL', signal: 'TALENT PACKAGE', note: 'A filmed tone piece and attached ensemble positioned for elevated casting conversations.' },
];

export const ProjectionsSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src="/Maimi_CSbGgtMOzwYeQYjwi2Ht.gif" opacity="opacity-15" />
    <Watermark text="POSITIONING" small />

    <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 relative z-10">
      <div className="w-full max-w-5xl">
        <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-6 uppercase">MARKET POSITION // SERIES PACKAGE</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {POSITIONING.map((item) => (
            <div key={item.title} className="bg-coh-panel/80 border border-coh-border p-5 md:p-6 hover:border-coh-orange/50 transition-all duration-500">
              <div className="font-bebas text-3xl text-white tracking-widest mb-2">{item.title}</div>
              <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4">{item.signal}</div>
              <p className="text-coh-gray text-xs leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-coh-panel/80 border border-coh-border p-5 md:p-6">
          <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 uppercase">COMPARABLE AUDIENCE LANE</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['SNOWFALL', 'POWER', 'THE WIRE', 'NARCOS'].map((title) => (
              <div key={title} className="text-center border border-coh-border/50 p-4">
                <div className="font-bebas text-2xl text-white tracking-widest">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
