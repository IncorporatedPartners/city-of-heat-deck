import { Watermark } from '../components';
import { FINANCIALS } from '../data';

export const CapitalSlide = () => (
  <div className="h-full flex relative overflow-hidden bg-coh-bg">
    <Watermark text="CAPITAL" />

    {/* Decorative circles in background */}
    <div className="absolute top-20 -left-20 w-64 h-64 rounded-full border border-coh-border/20 z-0" />
    <div className="absolute top-32 -left-8 w-48 h-48 rounded-full border border-coh-border/15 z-0" />
    <div className="absolute -bottom-10 left-24 w-40 h-40 rounded-full border border-coh-border/10 z-0" />

    <div className="flex-1 flex relative z-10 p-12 items-center max-w-7xl mx-auto w-full">
      {/* Left Side */}
      <div className="w-5/12 pr-12 flex flex-col justify-center">
        <div className="font-mono text-[10px] text-coh-orange tracking-widest mb-8 uppercase">
          FINISHING FUND // CONFIDENTIAL
        </div>

        <div className="mb-2">
          <div className="font-bebas text-[8rem] text-white leading-[0.85] tracking-tight">
            $500,000
          </div>
        </div>

        <div className="font-bebas text-4xl text-coh-gray tracking-[0.3em] uppercase mb-8 leading-tight">
          FINISHING<br />FUNDS
        </div>

        <p className="text-coh-gray text-sm leading-relaxed mb-10 max-w-sm">
          C-Clear Productions is seeking strategic capital to complete post-production and secure premium market positioning for <span className="text-white italic">City of Heat</span> Season 1.
        </p>

        <button className="bg-coh-orange text-white font-bebas text-2xl tracking-[0.2em] px-10 py-5 hover:bg-coh-orange/90 transition-colors uppercase w-fit cursor-pointer">
          REQUEST SCREENING
        </button>
      </div>

      {/* Right Side — Line Items */}
      <div className="w-7/12 flex flex-col justify-center">
        <div className="space-y-0">
          {FINANCIALS.map((item, i) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-5 border-b border-coh-border/30"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs text-coh-orange tracking-widest">
                  {String(i + 1).padStart(2, '0')} //
                </span>
                <span className="font-mono text-xs text-coh-gray tracking-widest uppercase">
                  {item.name}
                </span>
              </div>
              <div className="font-bebas text-4xl text-white tracking-wider">
                ${item.value.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex items-center justify-between pt-8 mt-2 border-t-2 border-coh-orange/60">
          <div className="font-mono text-xs text-coh-orange tracking-[0.3em] uppercase">
            TOTAL ALLOCATION
          </div>
          <div className="font-bebas text-5xl text-coh-orange tracking-wider italic">
            $500,000
          </div>
        </div>

        {/* Distribution Strategy Note */}
        <div className="mt-8 bg-coh-panel/60 border border-coh-border/50 p-5">
          <div className="font-mono text-[9px] text-coh-orange tracking-widest uppercase mb-3">
            DISTRIBUTION STRATEGY NOTES:
          </div>
          <p className="text-coh-gray text-xs leading-relaxed">
            Tier-1 Streaming positioning with a multi-territory digital rollout. Revenue waterfall projections available in the secondary data pack.
          </p>
        </div>
      </div>
    </div>
  </div>
);
