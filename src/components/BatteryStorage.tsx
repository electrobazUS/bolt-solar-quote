import React from 'react';
import { BatteryCharging, Zap, ShieldAlert, TrendingDown, Sun, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BatteryStorageProps {
  onOpenQuoteModal: () => void;
}

export const BatteryStorage: React.FC<BatteryStorageProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="batteries" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Explainer and Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <BatteryCharging className="w-4 h-4 text-emerald-600" />
              Smart Battery Storage Systems
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why A Battery is A Game-Changer For Scottish Homes
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              In Scotland, pairing solar PV with modern Lithium Iron Phosphate (LFP) battery storage boosts your green self-consumption from <strong className="text-slate-900">35% up to 85%+</strong>. You can even charge the battery overnight on super-cheap 7p/kWh off-peak Scottish electricity tariffs.
            </p>

            {/* Key benefits list */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Overnight Tariff Arbitrage</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    During darker Scottish winter months, automatically charge your battery overnight at 7p/kWh (Octopus Go / Scottish Power off-peak) and power your home through expensive peak daytime hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-xl bg-blue-100 text-scot-blue shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Storm & Power Cut Backup Protection</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Scottish winter storms can trigger rural and suburban grid outages. Our systems feature Emergency Power Supply (EPS) gateways to keep your fridge, lights, heating pumps, and WiFi running.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">0% VAT & 6,000 Cycle Life (15+ Years)</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Safe, cobalt-free Lithium Iron Phosphate chemistry with 10 to 15-year manufacturers’ warranties. Eligible for Scottish zero-VAT relief.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow transition-colors inline-flex items-center gap-2 text-sm"
              >
                <span>Add Battery Storage To Your Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Diagram / Battery Comparison */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Leading Brands We Install</span>
                  <h3 className="text-xl font-bold text-white">Tier-1 Scottish Approved Batteries</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              {/* Supported brands */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">GivEnergy All-in-One & Gen 3</div>
                    <div className="text-xs text-slate-400">UK-engineered, full EPS backup, modular 5.2 - 13.5 kWh</div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Top UK Pick</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Tesla Powerwall 3</div>
                    <div className="text-xs text-slate-400">Integrated 20kW peak inverter, 13.5 kWh capacity</div>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">Premium</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Solax & Fox ESS Hybrid</div>
                    <div className="text-xs text-slate-400">Affordable high-yield LFP stackable storage</div>
                  </div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Great Value</span>
                </div>
              </div>

              {/* Daily Energy Cycle Graphic */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-2 text-xs">
                <div className="font-semibold text-slate-300">How 24-Hour Scottish Storage Works:</div>
                <div className="flex items-center justify-between text-slate-400 pt-1">
                  <span>00:00 - 05:00</span>
                  <span className="text-emerald-400 font-semibold">Charges on 7p off-peak tariff</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>08:00 - 16:00</span>
                  <span className="text-amber-400 font-semibold">Charges free from Scottish daylight</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>16:00 - 23:00</span>
                  <span className="text-blue-400 font-semibold">Runs home, avoiding expensive 28p peak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
