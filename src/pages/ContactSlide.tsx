import { SlideBackground, Watermark } from '../components';

export const ContactSlide = () => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <SlideBackground src="/Maimi_mMLhoQnjBxC9pe1dehPq.jpeg" opacity="opacity-15" />
    <Watermark text="CITY OF HEAT" />

    <div className="flex-1 flex flex-col justify-center items-center relative z-10 text-center px-4 md:px-8">
      <div className="font-mono text-xs md:text-sm text-coh-orange tracking-widest mb-4 md:mb-6 uppercase">SEASON ONE // SERIES PRESENTATION</div>

      <h2 className="font-bebas text-6xl md:text-9xl text-white tracking-widest mb-4">NEXT CONVERSATION</h2>

      <p className="text-coh-gray text-sm md:text-base leading-relaxed max-w-xl mb-8 md:mb-12">
        City of Heat is ready for strategic talent, producing partners, and premium series conversations. For sizzle access, series materials, or role discussions, connect with the creative team.
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-10 md:mb-16 w-full md:w-auto items-center">
        <a
          href="mailto:donellharris58@gmail.com?subject=City%20of%20Heat%20-%20Sizzle%20Reel%20Request"
          className="bg-coh-orange text-white font-mono text-xs md:text-sm px-6 md:px-8 py-3 md:py-4 tracking-widest uppercase hover:bg-white hover:text-coh-orange transition-colors cursor-pointer w-full md:w-auto text-center"
        >
          REQUEST SIZZLE REEL
        </a>
        <a
          href="mailto:benmarc@visionbankfilms.com?subject=City%20of%20Heat%20-%20Talent%20Conversation"
          className="border border-coh-orange text-coh-orange font-mono text-xs md:text-sm px-6 md:px-8 py-3 md:py-4 tracking-widest uppercase hover:bg-coh-orange hover:text-white transition-colors cursor-pointer w-full md:w-auto text-center"
        >
          DISCUSS ATTACHMENT
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-16 font-mono text-[10px] md:text-xs tracking-widest uppercase mb-8">
        <div className="text-center">
          <div className="text-coh-orange mb-2">CREATED BY & EXECUTIVE PRODUCER</div>
          <div className="text-white text-sm md:text-base">DONELL HARRIS</div>
        </div>
        <div className="text-center">
          <div className="text-coh-orange mb-2">EXECUTIVE PRODUCER & DIRECTOR</div>
          <div className="text-white text-sm md:text-base">MARCUS "BENMARC" TURNER</div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <img src="/cclear-studios-logo.png" alt="C-Clear Studios" className="h-14 md:h-16 w-auto opacity-80" />
        <div className="font-mono text-[9px] md:text-[10px] text-coh-gray tracking-widest uppercase">
          INDUSTRY PRESENTATION
        </div>
      </div>
    </div>
  </div>
);
