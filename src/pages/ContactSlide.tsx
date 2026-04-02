import { SlideBackground, Watermark } from '../components';
import { BACKDROPS } from '../data';

export const ContactSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src={BACKDROPS.contact} opacity="opacity-30" />
    <Watermark text="CITY OF HEAT" />

    <div className="flex-1 flex flex-col justify-center items-center relative z-10 text-center px-4 md:px-8">
      <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 md:mb-6 uppercase">SEASON ONE // FINISHING FUND</div>

      <h2 className="font-bebas text-5xl md:text-8xl text-white tracking-widest mb-4">NEXT STEPS</h2>

      <p className="text-coh-gray text-sm leading-relaxed max-w-xl mb-8 md:mb-12">
        City of Heat is ready for its final push. If you believe in bold, character-driven storytelling rooted in culture and consequence — let's talk.
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-10 md:mb-16 w-full md:w-auto items-center">
        <button className="bg-coh-orange text-white font-mono text-xs px-6 md:px-8 py-3 md:py-4 tracking-widest uppercase hover:bg-white hover:text-coh-orange transition-colors cursor-pointer w-full md:w-auto">
          REQUEST FULL SCRIPT
        </button>
        <button className="border border-coh-orange text-coh-orange font-mono text-xs px-6 md:px-8 py-3 md:py-4 tracking-widest uppercase hover:bg-coh-orange hover:text-white transition-colors cursor-pointer w-full md:w-auto">
          SCHEDULE SCREENING
        </button>
      </div>

      {/* Credits */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 font-mono text-[10px] tracking-widest uppercase mb-8">
        <div className="text-center">
          <div className="text-coh-orange mb-2">CREATED BY & EXECUTIVE PRODUCER</div>
          <div className="text-white">DONELL HARRIS</div>
        </div>
        <div className="text-center">
          <div className="text-coh-orange mb-2">EXECUTIVE PRODUCER & DIRECTOR</div>
          <div className="text-white">MARCUS "BENMARC" TURNER</div>
        </div>
      </div>

      <div className="font-mono text-[9px] text-coh-gray tracking-widest uppercase">
        C-CLEAR PRODUCTIONS // CONFIDENTIAL
      </div>
    </div>
  </div>
);
