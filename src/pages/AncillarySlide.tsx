import { ArrowRight } from 'lucide-react';
import { SlideBackground, Watermark } from '../components';
import { BACKDROPS } from '../data';

export const AncillarySlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src={BACKDROPS.ancillary} opacity="opacity-15" />
    <Watermark text="PROTOCOL" />

    <div className="flex-1 flex flex-col justify-center p-12 relative z-10">
      <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
        <div>
          <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 uppercase">MICRODRAMA STRATEGY</div>
          <p className="text-coh-light text-sm leading-relaxed mb-8">
            Microdramas positioned as 10% of revenue focus supporting the main theatrical product. Designed for audience acquisition and universe expansion.
          </p>

          <div className="space-y-3">
            {[
              { title: 'CASE FILES', format: '15-20s // TIKTOK & REELS', metric: '2.5M+ VIEWS', label: 'PROJ. ENGAGEMENT' },
              { title: 'MISSION BRIEFINGS', format: '30-45s // YOUTUBE SHORTS', metric: '1.2M+ VIEWS', label: 'PROJ. ENGAGEMENT' },
              { title: 'RAW FOOTAGE', format: '45-60s // EXCLUSIVE PLATFORMS', metric: '15% CTR', label: 'PROJ. CONVERSION' },
            ].map((item) => (
              <div key={item.title} className="bg-coh-panel/80 border border-coh-border p-4 flex justify-between items-center">
                <div>
                  <div className="font-bebas text-2xl text-white tracking-widest mb-1">{item.title}</div>
                  <div className="font-mono text-[10px] text-coh-gray tracking-widest">{item.format}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-1">{item.label}</div>
                  <div className="font-bebas text-xl text-white tracking-widest">{item.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-coh-panel/80 border border-coh-border p-6">
            <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-6 uppercase text-center">ECOSYSTEM FLOW</div>
            <div className="flex items-center justify-between text-center">
              <div className="flex-1">
                <div className="font-bebas text-xl text-white tracking-widest">SOCIAL</div>
                <div className="font-mono text-[8px] text-coh-gray">AWARENESS</div>
              </div>
              <ArrowRight className="w-4 h-4 text-coh-orange mx-2" />
              <div className="flex-1">
                <div className="font-bebas text-xl text-white tracking-widest">CONVERSION</div>
                <div className="font-mono text-[8px] text-coh-gray">ENGAGEMENT</div>
              </div>
              <ArrowRight className="w-4 h-4 text-coh-orange mx-2" />
              <div className="flex-1">
                <div className="font-bebas text-xl text-coh-orange tracking-widest">MAIN FEATURE</div>
                <div className="font-mono text-[8px] text-coh-gray">MONETIZATION</div>
              </div>
            </div>
          </div>

          <div className="bg-coh-panel/80 border border-coh-border p-6">
            <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 uppercase">REVENUE SPLIT</div>
            <div className="flex h-8 w-full bg-coh-border mb-2">
              <div className="h-full bg-white flex items-center px-2 font-mono text-[10px] text-black font-bold" style={{ width: '90%' }}>MAIN FEATURE (90%)</div>
              <div className="h-full bg-coh-orange flex items-center justify-center font-mono text-[10px] text-white font-bold" style={{ width: '10%' }}>10%</div>
            </div>
          </div>

          <div className="bg-coh-panel/80 border border-coh-border p-6 flex-1">
            <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 uppercase">RELEASE CADENCE</div>
            <div className="flex justify-between items-end border-b border-coh-border pb-2 mb-2">
              <div className="font-mono text-[8px] text-coh-gray">T-MINUS 60 DAYS</div>
              <div className="font-mono text-[8px] text-coh-gray">T-MINUS 30 DAYS</div>
              <div className="font-mono text-[8px] text-coh-orange">PREMIERE</div>
            </div>
            <div className="relative h-2 w-full bg-coh-border mb-4">
              <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-2 h-2 bg-coh-gray rounded-full" />
              <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-2 h-2 bg-coh-gray rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-coh-orange rounded-full shadow-[0_0_10px_rgba(255,90,0,0.8)]" />
            </div>
            <div className="flex justify-between">
              <div className="font-mono text-[8px] text-white w-1/3 pr-2">CASE FILES (TIKTOK) LAUNCH</div>
              <div className="font-mono text-[8px] text-white w-1/3 text-center px-2">MISSION BRIEFINGS (YT) LAUNCH</div>
              <div className="font-mono text-[8px] text-coh-orange w-1/3 text-right pl-2">FEATURE FILM RELEASE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
