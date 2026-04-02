export const VibeStreetSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
      <div className="font-mono text-[10px] text-coh-orange tracking-widest uppercase">VISUAL LANGUAGE // STREET CODE</div>
    </div>

    <div className="flex-1 flex flex-col gap-1 p-1">
      {/* Top row — two images */}
      <div className="flex-[1] flex gap-1">
        <div className="flex-1 relative overflow-hidden group">
          <img
            src="/Maimi_XYx0f3oIxVCYzwgwl89D.jpeg"
            alt="Gold Donk"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            VEHICLE_ASSET_02 // DONK CULTURE
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <img
            src="/Maimi_TmCRWGMyK7NhROS9QrR2.jpeg"
            alt="Night Meet"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            SC_08 // THE CONNECT
          </div>
        </div>
      </div>

      {/* Bottom — Skate and Roll full width */}
      <div className="flex-[2] relative overflow-hidden group">
        <img
          src="/Maimi_miuGj7PmFCuCfjzWdjne.jpeg"
          alt="Skate and Roll"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 font-mono text-[10px] text-white/80 tracking-widest uppercase">
          SKATE & ROLL // EXT. NIGHT // CROWD REF
        </div>
      </div>
    </div>
  </div>
);
