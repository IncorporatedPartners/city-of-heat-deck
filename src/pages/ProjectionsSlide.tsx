import { SlideBackground, Watermark } from '../components';
import { BACKDROPS } from '../data';

export const ProjectionsSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src={BACKDROPS.projections} opacity="opacity-15" />
    <Watermark text="ROI" />

    <div className="flex-1 flex flex-col justify-center items-center p-12 relative z-10">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between font-mono text-[10px] text-coh-gray tracking-widest mb-6 px-6">
          <span>SCENARIO</span>
          <span>GROSS REVENUE</span>
          <span>INVESTOR ROI</span>
        </div>

        <div className="space-y-3">
          <div className="bg-coh-panel/80 border border-coh-border p-6 flex justify-between items-center">
            <div className="font-bebas text-3xl text-white tracking-widest w-1/3">CONSERVATIVE</div>
            <div className="font-mono text-lg text-coh-light w-1/3 text-center">$1.2M</div>
            <div className="font-mono text-lg text-green-500 w-1/3 text-right">120%</div>
          </div>
          <div className="bg-coh-panel/80 border border-coh-border p-6 flex justify-between items-center border-l-4 border-l-coh-orange">
            <div className="font-bebas text-3xl text-coh-orange tracking-widest w-1/3">BASE CASE</div>
            <div className="font-mono text-lg text-coh-light w-1/3 text-center">$2.5M</div>
            <div className="font-mono text-lg text-green-500 w-1/3 text-right">180%</div>
          </div>
          <div className="bg-coh-panel/80 border border-coh-border p-6 flex justify-between items-center">
            <div className="font-bebas text-3xl text-white tracking-widest w-1/3">OPTIMISTIC</div>
            <div className="font-mono text-lg text-coh-light w-1/3 text-center">$5.0M+</div>
            <div className="font-mono text-lg text-green-500 w-1/3 text-right">350%+</div>
          </div>
        </div>

        <div className="mt-12 bg-coh-panel/80 border border-coh-border p-6">
          <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 uppercase">COMPARABLE TITLES</div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'MOONLIGHT', budget: '$1.5M', gross: '$65M', roi: '4,233%' },
              { title: 'GET OUT', budget: '$4.5M', gross: '$255M', roi: '5,567%' },
              { title: 'TANGERINE', budget: '$100K', gross: '$1M', roi: '900%' },
            ].map(comp => (
              <div key={comp.title} className="text-center">
                <div className="font-bebas text-2xl text-white tracking-widest mb-2">{comp.title}</div>
                <div className="font-mono text-[9px] text-coh-gray tracking-widest">BUDGET: {comp.budget}</div>
                <div className="font-mono text-[9px] text-coh-gray tracking-widest">GROSS: {comp.gross}</div>
                <div className="font-mono text-[9px] text-green-500 tracking-widest">ROI: {comp.roi}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
