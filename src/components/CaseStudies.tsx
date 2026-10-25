import React from 'react';
import { Star, MapPin, PoundSterling, Quote, ShieldCheck } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const testimonials = [
    {
      name: 'Callum & Morag MacLeod',
      location: 'Morningside, Edinburgh (EH10)',
      property: 'Traditional 4-bed Slate Roof Detached',
      system: '12x 435W Panels + 9.6 kWh Battery Storage',
      savings: '£1,340 saved in Year 1',
      grant: 'Received Home Energy Scotland Support',
      review:
        'We were worried about installing solar on an older Edinburgh slate roof, but the team took immense care with the slate hooks and flashings. Our electricity bill dropped from £210/mo to just £45/mo on average, and during sunny summer months we actually make money selling power back.',
      rating: 5,
    },
    {
      name: 'Donald Morrison',
      location: 'Inverness, Scottish Highlands (IV2)',
      property: 'Modern 3-bed Highland Bungalow',
      system: '14x Panels + 13.5 kWh Tesla Powerwall',
      savings: '£1,680 annual bill reduction',
      grant: 'Qualified for £9,000 Scottish Rural Uplift',
      review:
        'Living in the Highlands, the rural grant uplift made this an absolute no-brainer. The backup battery also proved priceless when Storm Arwen took out power lines nearby—our heating, water pump, and lights stayed on completely uninterrupted.',
      rating: 5,
    },
    {
      name: 'Fiona Stewart',
      location: 'Bearsden, Greater Glasgow (G61)',
      property: 'Semi-Detached Tile Roof',
      system: '10x 435W High-Yield Solar Array',
      savings: '£890 saved annually',
      grant: '0% Interest Scottish Government Loan',
      review:
        'Super clear Scottish solar quote with no hard-sell salesmen. The calculation tool was accurate down to within £50 of our actual metered generation. The installation was finished in a single day.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 fill-emerald-700 text-emerald-700" />
            Scottish Homeowner Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Scottish Homes. Real Bill Reductions.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            See how homeowners from Edinburgh to Inverness are cutting energy bills with Solar Quote Scotland.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-7 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 / 5</span>
                </div>

                <Quote className="w-8 h-8 text-slate-200 mb-2" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="font-bold text-sm text-slate-900">{t.name}</div>
                <div className="flex items-center gap-1.5 text-xs text-scot-blue font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{t.location}</span>
                </div>
                <div className="text-[11px] text-slate-500">{t.property}</div>
                
                <div className="pt-2 flex flex-wrap items-center justify-between gap-1 text-xs">
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {t.savings}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {t.grant}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
