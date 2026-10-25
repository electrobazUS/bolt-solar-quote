import React, { useState } from 'react';
import { Sun, ArrowRight, ShieldCheck, Zap, PiggyBank, Sparkles, CheckCircle2 } from 'lucide-react';
import { extractScottishRegion } from '../data/scottishRegions';

interface HeroProps {
  onQuickStart: (postcode: string) => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickStart, onOpenQuoteModal }) => {
  const [postcode, setPostcode] = useState('');
  const detectedRegion = postcode ? extractScottishRegion(postcode) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickStart(postcode);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-scot-navy to-slate-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-scot-blue/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Postcode Lead Generator */}
          <div className="lg:col-span-7 space-y-6">
            {/* Scottish Grant Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-scot-blue/30 border border-blue-400/40 text-blue-200 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm">
              <span className="text-sm">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
              <span>Updated for 2026 Scottish Home Energy Schemes</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Harness Solar in Scotland. <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Cut Your Energy Bills by up to 80%.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Scotland’s daylight works wonders for modern high-efficiency N-Type solar panels. 
              Combine with Scottish Government Home Energy grants up to <strong className="text-white">£7,500 – £9,000</strong> and 
              interest-free funding to power your home through all seasons.
            </p>

            {/* Quick Postcode Quote Form Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Enter Your Scottish Postcode for an Instant Custom Estimate
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="e.g. EH1 1AA, G1 2DH, AB10 1XG, IV1 1ST..."
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium uppercase text-sm sm:text-base tracking-wider"
                    />
                    {detectedRegion && postcode.length >= 2 && (
                      <div className="absolute right-3 top-3.5 text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded">
                        {detectedRegion.name}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 text-sm sm:text-base shrink-0"
                  >
                    Calculate My Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {detectedRegion && detectedRegion.ruralBonusEligible && (
                  <p className="text-xs text-emerald-400 flex items-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Eligible for Scottish Rural Home Energy Grant uplift (up to £9,000 funding support)!</span>
                  </p>
                )}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>✓ 100% Free & No Obligation</span>
                  <span>✓ MCS Accredited Installers Only</span>
                  <span>✓ Scottish Grid (SP Energy & SSEN) Ready</span>
                </div>
              </form>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Smart Export Guarantee (SEG) 15p/kWh</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>0% VAT on Solar Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>25-Year Performance Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scottish Solar Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 p-6 sm:p-7 shadow-2xl">
              {/* Highlight ribbon */}
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-scot-blue to-blue-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-blue-400/30">
                <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scottish Home Spec</span>
              </div>

              <div className="flex items-center gap-3 pb-5 border-b border-slate-700">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-white">Scottish Solar & Battery Setup</h2>
                  <p className="text-xs text-slate-400">Optimised for Scottish irradiance & rainy conditions</p>
                </div>
              </div>

              {/* Specs breakdown */}
              <div className="space-y-4 py-5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-xs text-slate-400">Solar Array</div>
                      <div className="text-sm font-semibold text-white">12x 435W All-Black Monocrystalline</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">5.22 kWp</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div className="flex items-center gap-2.5">
                    <PiggyBank className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs text-slate-400">Battery Storage</div>
                      <div className="text-sm font-semibold text-white">9.6 kWh GivEnergy / Solax LFP</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Night Saver</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-xs text-slate-400">Estimated Annual Yield</div>
                      <div className="text-sm font-semibold text-white">Central Scotland & Highlands</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">4,650 kWh/yr</span>
                </div>
              </div>

              {/* Estimated financial outcome summary */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/70 to-slate-900 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-300 font-medium">Estimated Annual Bill Saving</span>
                  <span className="text-lg font-extrabold text-emerald-400">£1,260 / year</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Home Energy Scotland Grant</span>
                  <span className="font-semibold text-white">Up to £2,500 – £9,000</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Smart Export Guarantee (SEG)</span>
                  <span className="font-semibold text-white">+£190/yr extra cash back</span>
                </div>
              </div>

              <div className="pt-5">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3 px-4 rounded-xl bg-scot-blue hover:bg-blue-600 text-white font-bold text-sm text-center transition-colors flex items-center justify-center gap-2 shadow"
                >
                  Request Full Technical Survey Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
