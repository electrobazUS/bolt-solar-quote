import React from 'react';
import { Check, Zap, Star, ShieldCheck, BatteryCharging, ArrowRight } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      name: 'Scottish Suburban Solar',
      subtitle: 'Ideal for 2-3 bed semi-detached or terraced homes',
      popular: false,
      badge: 'Best Value Entry',
      panels: '10x 435W N-Type All-Black Panels',
      systemSize: '4.35 kWp Capacity',
      battery: 'Optional / Battery-Ready Inverter',
      generation: '~3,900 kWh / year',
      estSavings: 'Save ~£750 / year',
      warranty: '25-Yr Performance, 12-Yr Inverter',
      grantEligibility: 'Eligible for Home Energy Scotland loans',
      features: [
        '10x High-yield Monocrystalline N-Type modules',
        'Solis / GivEnergy Smart Inverter',
        'Scottish Slate or Tile mounting kits',
        'WiFi real-time smartphone monitoring app',
        'DNO Scottish Power / SSEN grid application',
        'MCS Certificate & Building Compliance',
      ],
    },
    {
      name: 'Scottish Independence',
      subtitle: 'Most popular package for family homes & detached properties',
      popular: true,
      badge: 'Most Popular in Scotland',
      panels: '12x 435W Bifacial N-Type Panels',
      systemSize: '5.22 kWp Capacity',
      battery: '9.6 kWh LFP Battery Storage Included',
      generation: '~4,800 kWh / year',
      estSavings: 'Save ~£1,280 / year',
      warranty: '25-Yr Performance, 10-Yr Battery warranty',
      grantEligibility: 'Eligible for Scottish Grants up to £2,500 - £7,500',
      features: [
        '12x 435W Tier-1 All-Black Solar Panels',
        '9.6 kWh GivEnergy / Solax High-Cycle LFP Battery',
        'Smart off-peak overnight tariff automated charging',
        'Emergency Power Supply (EPS) for power cuts',
        'Full Scottish slate or tile roof flashing kit',
        'Complete MCS & HES documentation support',
      ],
    },
    {
      name: 'Highland & Rural Estate',
      subtitle: 'Maximum power & total energy security for larger Scottish homes',
      popular: false,
      badge: 'Maximum £9,000 Rural Grant Uplift',
      panels: '16x 440W Ultra-Black Panels',
      systemSize: '7.04 kWp Capacity',
      battery: '14.4 kWh High-Capacity Battery + EV Charger',
      generation: '~6,400 kWh / year',
      estSavings: 'Save ~£1,850+ / year',
      warranty: '30-Yr Performance, 15-Yr Inverter/Battery',
      grantEligibility: 'Eligible for £9,000 Scottish Rural Grant uplift',
      features: [
        '16x 440W High-Efficiency Solar Array',
        '14.4 kWh Expandable Lithium Iron Phosphate storage',
        '7kW Smart EV Home Fast Charger included',
        'Whole-home backup power transition switch',
        'Priority DNO grid approval handling',
        'Full Home Energy Scotland paperwork concierge',
      ],
    },
  ];

  return (
    <section id="packages" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-scot-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4 text-amber-500" />
            Turnkey Scottish Solar Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered For Scottish Climate & Homes
          </h2>
          <p className="mt-4 text-base text-slate-600">
            All packages include Scottish slate/tile certified bracket fittings, MCS registration, G98/G99 grid approval, and 25-year panel warranties.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-white border-2 border-amber-500 shadow-xl ring-2 ring-amber-500/20'
                  : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-slate-950" />
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="text-xs font-bold text-scot-blue uppercase tracking-wider mb-1">
                  {pkg.badge}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{pkg.name}</h3>
                <p className="text-xs text-slate-500 mt-1 mb-5">{pkg.subtitle}</p>

                {/* Key Spec Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">System Capacity:</span>
                    <span className="font-bold text-slate-900">{pkg.systemSize}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Battery Storage:</span>
                    <span className="font-bold text-emerald-600">{pkg.battery}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Annual Yield:</span>
                    <span className="font-bold text-slate-900">{pkg.generation}</span>
                  </div>
                  <div className="flex justify-between text-xs pt-1 border-t border-slate-200">
                    <span className="text-slate-700 font-semibold">Estimated Savings:</span>
                    <span className="font-extrabold text-amber-600 text-sm">{pkg.estSavings}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3 text-xs text-slate-700 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <div className="text-center text-[11px] text-slate-500 font-medium mb-3">
                  {pkg.grantEligibility}
                </div>
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
