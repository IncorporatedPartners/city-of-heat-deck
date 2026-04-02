import { SlideBackground } from '../components';
import { BACKDROPS, GALLERY } from '../data';

export const DossierSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src={BACKDROPS.dossier} opacity="opacity-10" />

    <div className="flex-1 relative p-3 md:p-6 z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-2 md:gap-3 h-full">
        {GALLERY.map((img, i) => (
          <div key={i} className={`${img.span} relative group overflow-hidden border border-coh-border/50`}>
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {img.label && (
              <div className="absolute bottom-4 left-4">
                {img.sub && <div className="font-mono text-[10px] text-coh-orange tracking-widest uppercase mb-1">{img.sub}</div>}
                <div className="font-mono text-[10px] text-white tracking-widest uppercase bg-black/80 px-2 py-1 border border-coh-border inline-block">{img.label}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
