import React, { useState } from 'react';
import { MapPin, CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { SCOTTISH_POSTCODE_REGIONS } from '../data/scottishRegions';

interface CoverageMapProps {
  onSelectPostcode: (code: string) => void;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ onSelectPostcode }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('EH');

  const regionsList = Object.values(SCOTTISH_POSTCODE_REGIONS);
  const current = SCOTTISH_POSTCODE_REGIONS[selectedRegion] || regionsList[0];

  return (
    <section id="coverage" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-scot-blue text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-scot-blue" />
            100% Scottish Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Local MCS Certified Installation Across Scotland
          </h2>
          <p className="mt-4 text-base text-slate-600">
            From the Scottish Borders to the Highlands and Islands, our accredited Scottish teams handle everything: technical surveys, slate roof mounting, and grid connection with SP Energy Networks & SSEN.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Region list selector */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Select Your Scottish Council / Postcode Area:
            </div>
            <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
              {regionsList.map((reg) => (
                <button
                  key={reg.code}
                  onClick={() => setSelectedRegion(reg.code)}
                  className={`w-full p-3 rounded-xl text-left flex items-center justify-between transition-all ${
                    selectedRegion === reg.code
                      ? 'bg-scot-blue text-white shadow-sm font-bold'
                      : 'hover:bg-slate-50 text-slate-700 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                      selectedRegion === reg.code ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {reg.code}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm">{reg.name}</div>
                      <div className={`text-[11px] ${selectedRegion === reg.code ? 'text-blue-100' : 'text-slate-400'}`}>
                        Hub: {reg.majorCity}
                      </div>
                    </div>
                  </div>
                  {reg.ruralBonusEligible && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      selectedRegion === reg.code ? 'bg-amber-400 text-slate-950' : 'bg-amber-100 text-amber-800'
                    }`}>
                      Rural Uplift
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details Card for Selected Region */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 shadow-md border border-slate-200/90 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-scot-blue bg-blue-50 px-2 py-0.5 rounded">
                  Postcode Area [{current.code}]
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">{current.name}</h3>
                <p className="text-xs text-slate-500">Regional Distribution: {current.code.startsWith('IV') || current.code.startsWith('AB') || current.code.startsWith('PH') || current.code.startsWith('KW') ? 'SSEN (Scottish & Southern)' : 'SP Energy Networks'}</p>
              </div>

              <button
                onClick={() => onSelectPostcode(current.code + '1 1AA')}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Calculate For {current.code}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500">Average Sunshine</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">{current.sunshineHoursAvg} hrs/yr</div>
                <div className="text-[11px] text-slate-400">Met Office certified</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500">Typical Solar Yield</div>
                <div className="text-xl font-bold text-emerald-600 mt-0.5">{current.typicalAnnualYieldKwhPerKwp} kWh/kWp</div>
                <div className="text-[11px] text-slate-400">High efficiency N-type</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500">Scottish Grant Status</div>
                <div className="text-sm font-bold text-scot-blue mt-1">
                  {current.ruralBonusEligible ? 'Up to £9,000 Uplift' : 'Standard £7,500 HES'}
                </div>
                <div className="text-[11px] text-slate-400">Home Energy Scotland</div>
              </div>
            </div>

            {/* Local Scottish Installer Guarantee */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200/60 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-scot-blue" />
                Local Scottish Installation Crew & Full Grid Clearance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We employ local Scottish electricians and roofing specialists who understand Scottish stone properties, slate preservation, high wind loading calculations (Scottish Building Standards), and DNO grid approvals.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-700">
                <span className="flex items-center gap-1">✓ Slate tile hooks & flashing</span>
                <span className="flex items-center gap-1">✓ Scaffolding included</span>
                <span className="flex items-center gap-1">✓ 1-Day average installation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
