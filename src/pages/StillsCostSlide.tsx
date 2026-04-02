export const StillsCostSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <div className="absolute top-6 left-8 z-20">
      <div className="font-mono text-[10px] text-coh-orange tracking-widest uppercase">PRODUCTION STILLS // THE COST</div>
    </div>

    <div className="flex-1 flex flex-col gap-1 p-1">
      {/* Top row — two stills side by side */}
      <div className="flex-[1] flex gap-1">
        <div className="flex-[3] relative overflow-hidden">
          <img
            src="/Maimi_5ZA3YVMMfOgK8VER6EEU.jpeg"
            alt="Masked shooters"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            SC_31 // THE ROBBERY
          </div>
        </div>
        <div className="flex-[2] relative overflow-hidden">
          <img
            src="/Maimi_0CEc2gel9eajlYtVDg7O.gif"
            alt="Hands detail"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            DETAIL_REF_07
          </div>
        </div>
      </div>

      {/* Bottom — two stills, weight and isolation */}
      <div className="flex-[1] flex gap-1">
        <div className="flex-1 relative overflow-hidden">
          <img
            src="/Maimi_3V8rd14zKX6O5S0lYMZD.jpeg"
            alt="Alone at car"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            SC_27 // EXT. GAS STATION — NIGHT
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <img
            src="/Maimi_23MOMvmSSWKB15O2pWTz.jpeg"
            alt="Motel isolation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            SC_34 // INT. MOTEL — THE WEIGHT
          </div>
        </div>
      </div>
    </div>
  </div>
);
