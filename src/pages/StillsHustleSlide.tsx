export const StillsHustleSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
      <div className="font-mono text-[10px] text-coh-orange tracking-widest uppercase">PRODUCTION STILLS // THE HUSTLE</div>
    </div>

    <div className="flex-1 flex flex-col gap-1 p-1">
      {/* Top — close-up driving, full width cinematic */}
      <div className="flex-[2] relative overflow-hidden">
        <img
          src="/Maimi_gx22zFQdnwUdJnxF2sBs.jpeg"
          alt="Behind the wheel"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 font-mono text-[10px] text-white/80 tracking-widest uppercase">
          SC_06 // INT. VEHICLE — DAY
        </div>
      </div>

      {/* Bottom row — three images */}
      <div className="flex-[1] flex gap-1">
        <div className="flex-1 relative overflow-hidden">
          <img
            src="/Maimi_9xLn6V3n6CSaXRcnisVw.jpeg"
            alt="Motel hustle"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            SC_14 // EXT. MOTEL — NIGHT
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <img
            src="/Maimi_3j1Nd6m0W60C48yythHv.jpeg"
            alt="Crew convertible"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
            SC_19 // THE CREW
          </div>
        </div>
        <div className="flex-1 md:flex-none md:w-48 md:shrink-0 relative overflow-hidden">
          <img
            src="/Maimi_lIW8YCHhrU0twi1U2uuW.jpeg"
            alt="Oldsmobile detail"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  </div>
);
