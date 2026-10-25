import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileCheck, Shield, CloudRain, Sun, Info } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need planning permission for solar panels in Scotland?',
      a: 'In the vast majority of cases, NO. Under Scottish Permitted Development Rights (PDR), rooftop solar PV is classed as permitted development for standard houses and flats, provided panels do not protrude more than 200mm from the roof plane. If your home is a Listed Building or located in a Conservation Area (such as parts of Edinburgh New Town or Glasgow West End), planning or listed building consent may be required. Our technical team handles this check for you free of charge.',
    },
    {
      q: 'How do I claim the Scottish Government Home Energy Scotland Grant?',
      a: 'The Home Energy Scotland (HES) scheme offers grants up to £7,500 (plus an extra £1,500 rural uplift for homes in eligible Scottish postcodes like Highlands, Borders, Aberdeenshire, and Islands) alongside interest-free loans up to £6,000. To qualify, you must own your Scottish home and use an MCS certified installer. You must have grant approval before work starts—our team provides the exact compliant quotation and helps you submit your application.',
    },
    {
      q: 'Can solar panels be installed on traditional Scottish slate roofs?',
      a: 'Yes, absolutely. A significant proportion of Scottish properties feature Scotch or Welsh slate. Installing solar on slate requires specialized slate brackets, lead/aluminum flashings, and skilled tradesmen so no slates are damaged or broken. Our Scottish roofing teams specialize specifically in slate preservation and watertight integration.',
    },
    {
      q: 'How well do solar panels work during dark Scottish winters?',
      a: 'Scotland experiences shorter daylight hours in December and January. While output is naturally lower than midsummer, modern Tier-1 N-Type panels still produce power from morning daylight. Furthermore, when paired with a home battery, you can charge your battery overnight at super-cheap 7p/kWh off-peak electricity tariffs (such as Octopus Go or Scottish Power EV rates), maintaining low energy bills even on the darkest days.',
    },
    {
      q: 'Who connects my solar system to the Scottish electricity grid?',
      a: 'In Scotland, the grid is operated by either SP Energy Networks (Central Belt & South of Scotland) or SSEN (Northern Scotland & Highlands). Under engineering recommendation G98 (systems up to 3.68kW single phase) or G99 (larger solar arrays with high-capacity batteries), we handle all grid notifications and prior approvals with your network operator on your behalf.',
    },
    {
      q: 'What is the Smart Export Guarantee (SEG) and how much will I earn?',
      a: 'Under the UK Smart Export Guarantee, licensed energy suppliers in Scotland (such as Octopus Energy, Scottish Power, British Gas, and OVO) are legally required to pay you for every kilowatt-hour (kWh) of green electricity you export to the grid. Typical export tariffs range between 15p to 24p per kWh, earning typical Scottish homes £150 to £350 extra cash per year.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-scot-blue text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            Scottish Solar FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Everything you need to know about solar panels, battery storage, and government funding in Scotland.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-slate-50/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180 text-scot-blue' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
