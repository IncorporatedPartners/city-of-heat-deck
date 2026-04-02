import { useState } from 'react';
import { Watermark } from '../components';

export const TrailerSlide = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-coh-bg">
      <Watermark text="TRAILER" />

      {/* Background still frame */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Maimi_Bdmb7mlgbzjDYvFgJ3RD.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coh-bg via-coh-bg/80 to-coh-bg/60" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        {/* Video Container — full width */}
        <div className="w-full h-full relative bg-black overflow-hidden group flex items-center justify-center">
          {!isPlaying ? (
            <>
              {/* Poster / Preview Frame — full bleed */}
              <video
                src="/COH_Trailer.mp4"
                className="w-full h-full object-contain bg-black"
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black/50" />

              {/* Film grain overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />

              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
              >
                <div className="relative">
                  <div className="w-28 h-28 rounded-full border-2 border-coh-orange/60 flex items-center justify-center group-hover/btn:border-coh-orange group-hover/btn:scale-110 transition-all duration-500 bg-black/30 backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[24px] border-l-coh-orange border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-2 group-hover/btn:border-l-white transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 w-28 h-28 rounded-full border border-coh-orange/30 animate-ping" />
                </div>
              </button>

              {/* Bottom overlay text */}
              <div className="absolute bottom-8 left-10 right-10 flex justify-between items-end">
                <div>
                  <div className="font-bebas text-3xl text-white tracking-widest">OFFICIAL TRAILER</div>
                  <div className="font-mono text-[9px] text-coh-orange tracking-widest uppercase">SEASON ONE // CITY OF HEAT</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[8px] text-coh-gray tracking-widest uppercase">
                    DIRECTED BY <span className="text-white">MARCUS "BENMARC" TURNER</span>
                  </div>
                </div>
              </div>

              {/* Top corner labels */}
              <div className="absolute top-6 left-8 font-mono text-[8px] text-coh-orange tracking-widest uppercase">
                PREVIEW // CONFIDENTIAL
              </div>
              <div className="absolute top-6 right-8 font-mono text-[8px] text-coh-gray tracking-widest uppercase">
                4K ANAMORPHIC
              </div>
            </>
          ) : (
            <video
              src="/COH_Trailer.mp4"
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
            />
          )}
        </div>

        {/* Below video — metadata strip */}
        <div className="w-full px-10 py-4 flex justify-between items-center bg-coh-bg/80 border-t border-coh-border/30 shrink-0">
          <div className="flex gap-10">
            <div>
              <div className="font-mono text-[9px] text-coh-orange tracking-widest uppercase mb-1">CREATED BY</div>
              <div className="font-mono text-[10px] text-white tracking-widest">DONELL HARRIS</div>
            </div>
            <div>
              <div className="font-mono text-[9px] text-coh-orange tracking-widest uppercase mb-1">EP / DIRECTOR</div>
              <div className="font-mono text-[10px] text-white tracking-widest">MARCUS "BENMARC" TURNER</div>
            </div>
            <div>
              <div className="font-mono text-[9px] text-coh-orange tracking-widest uppercase mb-1">PRODUCTION</div>
              <div className="font-mono text-[10px] text-white tracking-widest">C-CLEAR PRODUCTIONS</div>
            </div>
          </div>
          <div className="border border-coh-border px-4 py-2">
            <div className="font-mono text-[9px] text-coh-gray tracking-widest uppercase">
              TRAILER STATUS: <span className="text-green-500">LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
