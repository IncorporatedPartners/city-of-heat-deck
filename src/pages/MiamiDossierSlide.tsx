import { MIAMI_DOSSIER } from '../data';

export const MiamiDossierSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden bg-coh-bg">
    <div className="absolute top-4 left-4 md:top-7 md:left-7 z-20 font-mono text-[10px] text-coh-orange tracking-widest uppercase">
      MIAMI CULTURE // DONK EDITION
    </div>

    <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-3 p-3 md:p-6">
      {MIAMI_DOSSIER.map((img, i) => (
        <div key={i} className="flex-1 relative group overflow-hidden border border-coh-border/50">
          <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-coh-orange/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {img.label && (
            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
              {img.sub && <div className="font-mono text-[10px] md:text-xs text-coh-orange tracking-widest uppercase mb-1">{img.sub}</div>}
              <div className="font-bebas text-2xl md:text-4xl text-white tracking-widest uppercase">{img.label}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
