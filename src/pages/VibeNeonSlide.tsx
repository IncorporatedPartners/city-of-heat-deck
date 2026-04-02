export const VibeNeonSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <div className="absolute top-6 left-8 z-20">
      <div className="font-mono text-[10px] text-coh-orange tracking-widest uppercase">VISUAL LANGUAGE // NEON NOIR</div>
    </div>

    <div className="flex-1 flex flex-col gap-1 p-1">
      {/* Top — Ocean Drive aerial, full width */}
      <div className="flex-[1] relative overflow-hidden group">
        <img
          src="/Maimi_We9bIIjOeHaiYJDE2lii.jpeg"
          alt="Ocean Drive"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="absolute bottom-6 left-8 font-mono text-[10px] text-white/80 tracking-widest uppercase">
          OCEAN DRIVE // EXT. NIGHT
        </div>
      </div>

      {/* Bottom row — two images side by side */}
      <div className="flex-[1] flex gap-1">
        <div className="flex-1 relative overflow-hidden group">
          <img
            src="/Maimi_wBRppd8RlzRUH4nqCmiq.jpeg"
            alt="Neon Club"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            SC_12 // NIGHTLIFE_EXT
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <img
            src="/Maimi_WBhHu4zmbWKDuOGDOPyR.jpeg"
            alt="Motorcycle Neon"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            TRANSIT_REF_03
          </div>
        </div>
      </div>
    </div>
  </div>
);
