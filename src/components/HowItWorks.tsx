import React from 'react';
import { ClipboardCheck, FileCheck, Wrench, Zap, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <ClipboardCheck className="w-6 h-6 text-scot-blue" />,
      title: 'Free Custom Estimate',
      desc: 'Use our Scottish solar calculator or request a custom report tailored to your postcode, roof tilt, and current energy spend.',
    },
    {
      num: '02',
      icon: <FileCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Survey & Grant Check',
      desc: 'We conduct a satellite & technical survey, confirming roof suitability (slate or tile) and preparing your Home Energy Scotland grant paperwork.',
    },
    {
      num: '03',
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'DNO Grid Application',
      desc: 'We submit your connection paperwork directly to SP Energy Networks or SSEN for fast G98/G99 clearance.',
    },
    {
      num: '04',
      icon: <Wrench className="w-6 h-6 text-scot-blue" />,
      title: '1-Day MCS Installation',
      desc: 'Our certified Scottish installation team installs your panels and battery in typically one day, fully certified with 25-year warranties.',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            Simple 4-Step Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Solar Quote to Grid Connection
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We handle every stage: Scottish planning compliance, DNO approvals, Home Energy Scotland applications, and certified handover.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, i) => (
            <div key={i} className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
              <div className="text-3xl font-black text-slate-200 mb-2 font-mono">{st.num}</div>
              <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-100 inline-block mb-4">
                {st.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
