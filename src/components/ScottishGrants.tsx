import React from 'react';
import { Award, CheckCircle2, FileText, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

interface ScottishGrantsProps {
  onOpenQuoteModal: () => void;
}

export const ScottishGrants: React.FC<ScottishGrantsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="grants" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-scot-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            Scottish Funding Schemes 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Scottish Government Grants & Interest-Free Loans
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Scotland offers some of the most generous renewable energy incentives in the UK through Home Energy Scotland (funded by the Scottish Government).
          </p>
        </div>

        {/* 3 Main Funding Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {/* Card 1: Home Energy Scotland Grant */}
          <div className="relative rounded-3xl bg-slate-50 border-2 border-scot-blue/30 p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-3.5 left-7 bg-scot-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Primary Grant
            </div>
            <div className="pt-2 mb-4">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">Up to £7,500</span>
              <span className="text-xs text-slate-500 block mt-1">Or up to £9,000 for designated rural Scottish homes</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Home Energy Scotland (HES) Grant</h3>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Scottish Government grant towards clean energy improvements when installed by an MCS certified installer. Non-repayable cash funding.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Up to £7,500 core grant funding</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>£1,500 rural uplift bonus (Highlands, Islands, Borders)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Our team provides all required MCS paperwork</span>
              </li>
            </ul>
          </div>

          {/* Card 2: 0% Interest Loan */}
          <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="pt-2 mb-4">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600">0% Interest</span>
              <span className="text-xs text-slate-500 block mt-1">Scottish Government Clean Energy Loan</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Interest-Free Funding Up To £6,000</h3>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Spread the remaining cost of your solar panels and battery storage over 5 to 10 years without paying a single penny in interest charges.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero percent (0% APR) fixed for duration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Repayments offset by your monthly electricity bill savings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Administered by Energy Saving Trust Scotland</span>
              </li>
            </ul>
          </div>

          {/* Card 3: 0% VAT & SEG Export */}
          <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="pt-2 mb-4">
              <span className="text-3xl sm:text-4xl font-black text-amber-500">0% VAT + SEG</span>
              <span className="text-xs text-slate-500 block mt-1">Tax relief + export cash payments</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Zero VAT Relief & Export Income</h3>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Solar PV and domestic batteries enjoy 0% VAT on hardware and installation, plus Smart Export Guarantee payments for surplus electricity.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Saves ~£1,400+ instantly compared to standard 20% VAT</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Earn up to 15p/kWh from energy suppliers for exported power</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full compatibility with Scottish Power, Octopus, British Gas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4-Step Grant Process Bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-scot-darkblue to-scot-blue text-white shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">How We Handle Your Scottish Grant Application</h3>
              <p className="text-blue-100 text-sm">
                We make the process simple. Our certified Scottish team prepares all necessary technical surveys and MCS certificates.
              </p>
            </div>

            <div className="grid sm:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/15">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 font-black flex items-center justify-center mx-auto mb-3 text-sm">
                  1
                </div>
                <h4 className="font-bold text-sm text-white mb-1">Free Survey</h4>
                <p className="text-xs text-blue-200">Instant online calculation & virtual Scottish roof survey.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/15">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 font-black flex items-center justify-center mx-auto mb-3 text-sm">
                  2
                </div>
                <h4 className="font-bold text-sm text-white mb-1">Grant Proposal</h4>
                <p className="text-xs text-blue-200">We produce an official MCS quote ready for Home Energy Scotland submission.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/15">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 font-black flex items-center justify-center mx-auto mb-3 text-sm">
                  3
                </div>
                <h4 className="font-bold text-sm text-white mb-1">HES Approval</h4>
                <p className="text-xs text-blue-200">Receive your official Scottish Government funding confirmation letter.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/15">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 font-black flex items-center justify-center mx-auto mb-3 text-sm">
                  4
                </div>
                <h4 className="font-bold text-sm text-white mb-1">MCS Install</h4>
                <p className="text-xs text-blue-200">Installed in 1 day by local Scottish engineers and connected to grid.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={onOpenQuoteModal}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-lg text-sm inline-flex items-center gap-2"
              >
                <span>Check Your Scottish Grant Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
