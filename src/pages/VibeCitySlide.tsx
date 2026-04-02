export const VibeCitySlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
      <div className="font-mono text-[10px] text-coh-orange tracking-widest uppercase">VISUAL LANGUAGE // THE CITY</div>
    </div>

    <div className="flex-1 flex flex-col gap-1 p-1">
      {/* Top row — hero city shot */}
      <div className="flex-[1] relative overflow-hidden group">
        <img
          src="/Maimi_yNvfHOtXUTWwKa7qokHn.jpeg"
          alt="Miami Sign"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
          MIAMI // IDENTITY MARKER
        </div>
      </div>

      {/* Middle row — 3 images */}
      <div className="flex-[1] flex gap-1">
        <div className="flex-1 relative overflow-hidden group">
          <img
            src="/Maimi_Bdmb7mlgbzjDYvFgJ3RD.jpeg"
            alt="Miami Skyline"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 font-mono text-[9px] text-white/70 tracking-widest uppercase">
            DOWNTOWN // EXT. DUSK
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <img
            src="/Maimi_i3MaWmgrdLZac9JllQkX.jpeg"
            alt="Nightlife"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 font-mono text-[9px] text-white/70 tracking-widest uppercase">
            NIGHTLIFE // INT. CLUB
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <img
            src="/Maimi_8h5K495A9PXIuUxT3tAP.jpeg"
            alt="Vehicle Convoy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 font-mono text-[9px] text-white/70 tracking-widest uppercase">
            CONVOY // EXT. NIGHT
          </div>
        </div>
      </div>

      {/* Bottom row — 2 images */}
      <div className="flex-[1] flex gap-1">
        <div className="flex-[2] relative overflow-hidden group">
          <img
            src="/Maimi_miuGj7PmFCuCfjzWdjne.jpeg"
            alt="Street Scene"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 font-mono text-[9px] text-white/70 tracking-widest uppercase">
            OVERTOWN // EXT. DAY
          </div>
        </div>
        <div className="flex-[1] relative overflow-hidden group">
          <img
            src="/Maimi_nBGCcu5F7jW1aBi4hYP5.jpeg"
            alt="Miami Neon"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 font-mono text-[9px] text-white/70 tracking-widest uppercase">
            NEON // EXT. NIGHT
          </div>
        </div>
      </div>
    </div>
  </div>
);
