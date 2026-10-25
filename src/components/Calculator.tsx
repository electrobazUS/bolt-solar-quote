import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Home, 
  Compass, 
  BatteryCharging, 
  Car, 
  PoundSterling, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Leaf, 
  Info, 
  HelpCircle,
  Building,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import { CalculatorState, PropertyType, RoofOrientation, RoofMaterial } from '../types';
import { calculateScottishSolar } from '../utils/calculatorEngine';
import { extractScottishRegion, SCOTTISH_POSTCODE_REGIONS } from '../data/scottishRegions';

interface CalculatorProps {
  initialPostcode?: string;
  onProceedToQuote: (state: CalculatorState) => void;
}

export const SolarCalculator: React.FC<CalculatorProps> = ({
  initialPostcode = 'EH1 1AA',
  onProceedToQuote,
}) => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    postcode: initialPostcode,
    propertyType: 'detached',
    monthlyBill: 160,
    roofOrientation: 'south',
    roofMaterial: 'slate',
    includeBattery: true,
    includeEvCharger: false,
    occupancyCount: 3,
  });

  const [activeTab, setActiveTab] = useState<'financial' | 'specs' | 'environmental'>('financial');

  // Generate unique IDs for accessibility
  const postcodeId = useId();
  const billId = useId();

  const detectedRegion = extractScottishRegion(calculatorState.postcode);
  const results = calculateScottishSolar(calculatorState);

  const updateState = <K extends keyof CalculatorState>(key: K, value: CalculatorState[K]) => {
    setCalculatorState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-scot-blue text-xs font-bold tracking-wide uppercase mb-3">
            <Calculator className="w-4 h-4" />
            Scottish Solar & Battery Calculator 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Solar Savings in Scotland
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tailored specifically for Scottish daylight irradiance, roof types, and Scottish Government grant schemes.
          </p>
        </div>

        {/* Main Grid: Controls on Left, Live Results Card on Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-7">
            {/* Postcode & Region selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={postcodeId} className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>1. Scottish Postcode</span>
                  <span className="text-xs font-normal text-slate-500">(Determines solar irradiance & grant zone)</span>
                </label>
                <span className="text-xs font-bold text-scot-blue bg-blue-50 px-2.5 py-1 rounded-md">
                  {detectedRegion.name}
                </span>
              </div>
              <div className="flex gap-2">
                <input
                  id={postcodeId}
                  type="text"
                  value={calculatorState.postcode}
                  onChange={(e) => updateState('postcode', e.target.value.toUpperCase())}
                  placeholder="e.g. EH12 5AA or G2 8AH"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-scot-blue focus:border-scot-blue font-semibold uppercase text-slate-800"
                />
              </div>
              {/* Quick Scottish city chips */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2.5 text-xs">
                <span className="text-slate-400">Quick select:</span>
                {['EH (Edinburgh)', 'G (Glasgow)', 'AB (Aberdeen)', 'DD (Dundee)', 'IV (Highlands)'].map((city) => {
                  const prefix = city.split(' ')[0];
                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => updateState('postcode', prefix + '1 1AA')}
                      className={`px-2 py-1 rounded text-[11px] font-medium border transition-colors ${
                        calculatorState.postcode.startsWith(prefix)
                          ? 'bg-scot-blue text-white border-scot-blue'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {city}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2.5">
                2. Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {(
                  [
                    { id: 'detached', label: 'Detached', icon: <Home className="w-4 h-4" /> },
                    { id: 'semi-detached', label: 'Semi-Detached', icon: <Building className="w-4 h-4" /> },
                    { id: 'terraced', label: 'Terraced', icon: <Building className="w-4 h-4" /> },
                    { id: 'bungalow', label: 'Bungalow', icon: <Home className="w-4 h-4" /> },
                    { id: 'flat', label: 'Flat / Other', icon: <Building className="w-4 h-4" /> },
                  ] as { id: PropertyType; label: string; icon: React.ReactNode }[]
                ).map((prop) => (
                  <button
                    key={prop.id}
                    type="button"
                    onClick={() => updateState('propertyType', prop.id)}
                    className={`flex items-center gap-2 p-3 rounded-xl border text-left text-sm font-medium transition-all ${
                      calculatorState.propertyType === prop.id
                        ? 'border-scot-blue bg-blue-50/70 text-scot-blue font-bold ring-1 ring-scot-blue'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    {prop.icon}
                    <span>{prop.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Electricity Bill Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={billId} className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <PoundSterling className="w-4 h-4 text-emerald-600" />
                  3. Current Monthly Electricity Bill
                </label>
                <span className="text-base font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  £{calculatorState.monthlyBill} / mo
                </span>
              </div>
              <input
                id={billId}
                type="range"
                min="50"
                max="500"
                step="10"
                value={calculatorState.monthlyBill}
                onChange={(e) => updateState('monthlyBill', Number(e.target.value))}
                aria-label="Current Monthly Electricity Bill"
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-scot-blue"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>£50/mo</span>
                <span>£160/mo (Scottish Avg)</span>
                <span>£300/mo</span>
                <span>£500+/mo</span>
              </div>
            </div>

            {/* Roof Orientation & Scottish Roof Material */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-scot-blue" />
                  4. Roof Orientation
                </label>
                <select
                  value={calculatorState.roofOrientation}
                  onChange={(e) => updateState('roofOrientation', e.target.value as RoofOrientation)}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm font-medium focus:ring-2 focus:ring-scot-blue"
                >
                  <option value="south">South Facing (Optimal 100%)</option>
                  <option value="southeast-southwest">South-East / South-West (95%)</option>
                  <option value="east-west">East / West Split (84%)</option>
                  <option value="flat-north">Flat Roof / North Slope (70%)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-scot-blue" />
                  5. Roof Material
                </label>
                <select
                  value={calculatorState.roofMaterial}
                  onChange={(e) => updateState('roofMaterial', e.target.value as RoofMaterial)}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm font-medium focus:ring-2 focus:ring-scot-blue"
                >
                  <option value="slate">Traditional Scottish Slate</option>
                  <option value="tile">Concrete / Clay Tile</option>
                  <option value="metal">Metal / Standing Seam</option>
                  <option value="flat">Flat Roof (Ballast Mount)</option>
                </select>
              </div>
            </div>

            {/* Battery & EV Toggles */}
            <div className="pt-2 space-y-3">
              <label className="block text-sm font-bold text-slate-900">
                6. Energy Upgrades & Smart Storage
              </label>

              {/* Battery Option */}
              <div
                onClick={() => updateState('includeBattery', !calculatorState.includeBattery)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                  calculatorState.includeBattery
                    ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className={`mt-0.5 p-2 rounded-xl shrink-0 ${
                  calculatorState.includeBattery ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                      Include Home Battery Storage (Recommended)
                      <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full">
                        Saves +£450/yr extra
                      </span>
                    </span>
                    <input
                      type="checkbox"
                      checked={calculatorState.includeBattery}
                      onChange={() => {}}
                      className="w-5 h-5 accent-emerald-600 rounded cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Stores excess Scottish daylight generation to power your home at night, and charges from cheap 7p/kWh off-peak night electricity tariffs.
                  </p>
                </div>
              </div>

              {/* EV Charger Option */}
              <div
                onClick={() => updateState('includeEvCharger', !calculatorState.includeEvCharger)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                  calculatorState.includeEvCharger
                    ? 'border-scot-blue bg-blue-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className={`mt-0.5 p-2 rounded-xl shrink-0 ${
                  calculatorState.includeEvCharger ? 'bg-scot-blue text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  <Car className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">
                      Add 7kW Smart EV Home Charger
                    </span>
                    <input
                      type="checkbox"
                      checked={calculatorState.includeEvCharger}
                      onChange={() => {}}
                      className="w-5 h-5 accent-scot-blue rounded cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Charge your electric car directly with 100% free Scottish sunshine or overnight super-off-peak tariffs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 relative overflow-hidden">
              {/* Scottish saltire badge corner */}
              <div className="absolute top-0 right-0 bg-scot-blue text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
                <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 {detectedRegion.name}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-lg text-white">Your Custom Scottish Estimate</h3>
              </div>

              {/* Big Savings Highlight */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-800/60 p-4 rounded-2xl border border-slate-700/80 mb-5">
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                  Estimated Total Annual Savings
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                    £{results.totalAnnualSavings.toLocaleString()}
                  </span>
                  <span className="text-slate-300 font-semibold text-sm">/ year</span>
                </div>
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Cuts approx {Math.min(85, Math.round((results.totalAnnualSavings / (calculatorState.monthlyBill * 12)) * 100))}% off your current annual bills
                </p>
              </div>

              {/* Tab Selector */}
              <div className="flex border-b border-slate-700 mb-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('financial')}
                  className={`pb-2.5 px-3 border-b-2 transition-colors ${
                    activeTab === 'financial'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Financial Breakdown
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2.5 px-3 border-b-2 transition-colors ${
                    activeTab === 'specs'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  System Specs
                </button>
                <button
                  onClick={() => setActiveTab('environmental')}
                  className={`pb-2.5 px-3 border-b-2 transition-colors ${
                    activeTab === 'environmental'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Carbon Saved
                </button>
              </div>

              {/* Tab 1: Financial */}
              {activeTab === 'financial' && (
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Bill Reduction (Self-Use)</span>
                    <span className="font-semibold text-white">£{results.annualSavingsSelfUse}/yr</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Smart Export Guarantee (SEG)</span>
                    <span className="font-semibold text-emerald-400">+£{results.annualSavingsExport}/yr</span>
                  </div>
                  {calculatorState.includeBattery && (
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Off-Peak Battery Arbitrage</span>
                      <span className="font-semibold text-emerald-400">+£240/yr</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Home Energy Scotland Grant (Est.)</span>
                    <span className="font-bold text-amber-400">-£{results.homeEnergyScotlandGrant.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Estimated Payback Time</span>
                    <span className="font-bold text-white bg-slate-800 px-2.5 py-0.5 rounded">
                      ~{results.paybackYears} Years
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-300 font-medium">Estimated 25-Year Value</span>
                    <span className="font-extrabold text-amber-400 text-lg">
                      £{results.twentyFiveYearSavings.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 2: System Specs */}
              {activeTab === 'specs' && (
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Recommended Array</span>
                    <span className="font-semibold text-white">{results.recommendedPanels}x 435W N-Type Panels</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">System Capacity</span>
                    <span className="font-semibold text-white">{results.systemSizeKw} kWp</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Battery Storage</span>
                    <span className="font-semibold text-white">
                      {calculatorState.includeBattery ? `${results.batteryCapacityKwh} kWh LFP` : 'Not Selected'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Estimated Annual Yield</span>
                    <span className="font-semibold text-amber-400">{results.estimatedAnnualGenerationKwh.toLocaleString()} kWh / year</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Scottish Grid Connection</span>
                    <span className="font-semibold text-white">G98 / G99 Fast Track</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Environmental */}
              {activeTab === 'environmental' && (
                <div className="space-y-4 py-2">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Carbon Saved per Year</div>
                      <div className="text-xl font-bold text-emerald-400">{results.co2SavedTonnesPerYear} Tonnes CO₂e</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Equivalent Trees Planted</div>
                      <div className="text-xl font-bold text-emerald-400">{results.treesEquivalent} Mature Scottish Trees / year</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => onProceedToQuote(calculatorState)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group"
                >
                  <span>Lock In This Quote & Check Grants</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  No sales pressure • Written quote valid for 30 days • MCS certified
                </p>
              </div>
            </div>

            {/* Grant Uplift Callout */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-scot-blue shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-scot-blue font-semibold block">Scottish Government Grant Notice:</strong>
                Home Energy Scotland provides grant funding & interest-free loans for energy efficiency measures. If your home is in a designated rural area, you may qualify for the rural grant uplift of up to £9,000.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
