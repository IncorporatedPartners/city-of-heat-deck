import { SlideBackground, Watermark } from '../components';

const OPPORTUNITIES = [
  {
    title: 'PREMIUM ENSEMBLE SPACE',
    note: 'A Miami crime world built for layered performances, recurring arcs, and high-impact guest turns.',
  },
  {
    title: 'MAJOR ROLES CAN ENTER CLEANLY',
    note: 'Power brokers, law enforcement, family figures, rivals, and political operators can expand the world without breaking the core story.',
  },
  {
    title: 'WORLD ALREADY BREATHING',
    note: 'Rooms, streets, cars, clubs, and pressure are already visible in the materials.',
  },
  {
    title: 'CULTURALLY SPECIFIC MIAMI',
    note: 'The show uses Miami as a pressure system: street economy, nightlife, family, corruption, Caribbean influence, and heat.',
  },
  {
    title: 'FIVE-SEASON RUNWAY',
    note: 'The narrative scales from survival and territory to infrastructure, politics, legacy, and control.',
  },
  {
    title: 'PRODUCER-FRIENDLY WORLD',
    note: 'A flexible universe for strategic attachments, producing partners, and premium distribution conversations.',
  },
];

export const CapitalSlide = () => (
  <div className="h-full flex relative overflow-hidden bg-coh-bg">
    <SlideBackground src="/Maimi_IjcDd3EMeUOyAtSjpgT2.png" opacity="opacity-8" />
    <Watermark text="OPPORTUNITY" small />

    <div className="flex-1 flex flex-col md:flex-row relative z-10 p-6 md:p-12 items-center max-w-7xl mx-auto w-full overflow-y-auto">
      <div className="w-full md:w-5/12 pr-0 md:pr-12 flex flex-col justify-center mb-8 md:mb-0">
        <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-4 md:mb-8 uppercase">
          TALENT OPPORTUNITY // SERIES PRESENTATION
        </div>

        <h2 className="font-bebas text-[3.5rem] md:text-[7.5rem] text-white leading-[0.85] tracking-tight mb-4">
          ROOM FOR
          <br />
          <span className="text-coh-orange">MAJOR TALENT</span>
        </h2>

        <p className="text-coh-gray text-sm leading-relaxed mb-6 md:mb-10 max-w-md">
          <span className="text-white italic">City of Heat</span> already has a defined world, attached ensemble, and visual identity. The next strategic move is attaching elevated talent who can deepen the package, expand the audience signal, and bring new authority to the series.
        </p>

        <a
          href="mailto:donellharris58@gmail.com,benmarc@visionbankfilms.com?subject=City%20of%20Heat%20-%20Talent%20Attachment"
          className="bg-coh-orange text-white font-bebas text-xl md:text-2xl tracking-[0.2em] px-6 md:px-10 py-4 md:py-5 hover:bg-coh-orange/90 transition-colors uppercase w-full md:w-fit cursor-pointer text-center inline-block"
        >
          DISCUSS ATTACHMENT
        </a>
      </div>

      <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {OPPORTUNITIES.map((item, i) => (
          <div key={item.title} className="bg-coh-panel/75 border border-coh-border p-4 md:p-5 hover:border-coh-orange/50 transition-all duration-500">
            <div className="font-mono text-[9px] text-coh-orange tracking-widest mb-2">
              {String(i + 1).padStart(2, '0')} // OPPORTUNITY
            </div>
            <div className="font-bebas text-2xl md:text-3xl text-white tracking-widest leading-none mb-3">{item.title}</div>
            <p className="text-coh-gray text-xs leading-relaxed">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
