import { SlideBackground, Watermark } from '../components';
import { BACKDROPS, ARC } from '../data';

export const StoryArcSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src={BACKDROPS.arc} opacity="opacity-20" />
    <Watermark text="NARRATIVE" />

    <div className="flex-1 p-8 relative z-10 flex items-center">
      <div className="grid grid-cols-4 gap-5 w-full max-w-7xl mx-auto h-full max-h-[85%]">
        {ARC.map((act, i) => (
          <div key={act.title} className="group relative flex flex-col border border-coh-border overflow-hidden hover:border-coh-orange/50 transition-all duration-500">
            {/* Act Background Image */}
            <div className="h-2/5 relative overflow-hidden">
              <img
                src={act.image}
                alt={act.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coh-bg via-coh-bg/50 to-transparent" />
              <div className="absolute inset-0 bg-coh-orange/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {i === ARC.length - 1 && (
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-coh-orange shadow-[0_0_15px_rgba(255,90,0,0.8)]" />
              )}
            </div>

            {/* Act Content */}
            <div className="flex-1 bg-coh-panel/80 p-6 flex flex-col">
              <div className="font-mono text-[9px] text-coh-orange tracking-widest mb-3 uppercase">{act.act}</div>
              <h3 className="font-bebas text-3xl text-white tracking-widest mb-3">{act.title}</h3>
              <p className="text-coh-gray text-xs leading-relaxed flex-1">{act.desc}</p>

              {/* Timeline dot */}
              <div className="mt-4 pt-4 border-t border-coh-border/50">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${i === ARC.length - 1 ? 'bg-coh-orange shadow-[0_0_10px_rgba(255,90,0,0.5)]' : i === 0 ? 'bg-coh-orange' : 'bg-coh-border'}`} />
                  <div className="h-px flex-1 bg-coh-border" />
                  <div className="font-mono text-[8px] text-coh-gray tracking-widest">SEQ_{String(i + 1).padStart(2, '0')}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
