import React from 'react';
import { Shield, Award, CheckCircle2, Star, Zap, ThumbsUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const credentials = [
    {
      icon: <Award className="w-5 h-5 text-scot-blue" />,
      title: 'MCS Certified',
      subtitle: 'Required for Scottish Grants & SEG export',
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      title: 'RECC Accredited',
      subtitle: 'Renewable Energy Consumer Code member',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-amber-500" />,
      title: 'Home Energy Scotland',
      subtitle: 'Grant & Interest-Free Loan compliant',
    },
    {
      icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />,
      title: '4.9/5 TrustScore',
      subtitle: 'Over 2,400+ Scottish homeowners',
    },
    {
      icon: <Zap className="w-5 h-5 text-scot-blue" />,
      title: '25-Year Warranty',
      subtitle: 'Tier-1 High-Efficiency N-Type panels',
    },
    {
      icon: <ThumbsUp className="w-5 h-5 text-emerald-600" />,
      title: 'DNO Grid Application',
      subtitle: 'Handled with SP Energy & SSEN',
    },
  ];

  return (
    <div className="bg-slate-100/80 border-y border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 shadow-sm border border-slate-200/60"
            >
              <div className="p-2 rounded-lg bg-slate-50 shrink-0">
                {cred.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">{cred.title}</div>
                <div className="text-[11px] text-slate-500 leading-tight truncate">{cred.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
