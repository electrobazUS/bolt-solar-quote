import React, { useState } from 'react';
import { CloudRain, Sun, Zap, Check, HelpCircle, ThermometerSnowflake, Droplets, Clock } from 'lucide-react';

export const ScottishWeatherSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const weatherFacts = [
    {
      icon: <Sun className="w-6 h-6 text-amber-500" />,
      title: 'Light, Not Heat Powers Panels',
      desc: 'Solar photovoltaic (PV) cells require photons from daylight, not blistering heat. In fact, solar panels actually lose efficiency when temperatures exceed 25°C. Scotland’s cool, crisp climate is optimal for silicon semiconductor performance.',
    },
    {
      icon: <Clock className="w-6 h-6 text-scot-blue" />,
      title: '17+ Hours of Summer Daylight',
      desc: 'During Scottish late spring and summer months (May through August), Scotland experiences up to 17.5 hours of daylight each day. Your system generates huge surplus electricity that charges batteries or earns export payments.',
    },
    {
      icon: <CloudRain className="w-6 h-6 text-blue-500" />,
      title: 'Advanced Diffuse Light Absorption',
      desc: 'Our Tier-1 N-Type TOPCon panels are engineered for northern European latitudes. Even under typical Scottish overcast or cloudy skies, diffuse radiation generates 25% to 40% of peak rated output continuously.',
    },
    {
      icon: <Droplets className="w-6 h-6 text-cyan-500" />,
      title: 'Rain Keeps Panels Self-Cleaning',
      desc: 'Scotland’s frequent rainfall acts as a free, automated maintenance cycle, washing away dust, pollen, and debris so your array stays clean and operates at peak generation year-round with zero scrubbing needed.',
    },
  ];

  const comparisons = [
    { location: 'Dundee, Scotland', sunshineHours: '1,520 hrs/yr', note: "Scotland's sunniest city" },
    { location: 'Edinburgh & Lothians', sunshineHours: '1,450 hrs/yr', note: 'Higher yield than northern Germany' },
    { location: 'Aberdeen (Granite City)', sunshineHours: '1,470 hrs/yr', note: 'Consistent coastal daylight' },
    { location: 'Munich, Germany', sunshineHours: '1,700 hrs/yr', note: 'World benchmark for solar adoption' },
  ];

  return (
    <section id="scotland-solar" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            Busting The Scottish Solar Myth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            "Does Solar Really Work in Scottish Weather?"
          </h2>
          <p className="mt-4 text-base text-slate-300">
            The short answer is <strong className="text-amber-400">YES, exceptionally well.</strong> Germany is a global leader in solar adoption despite having comparable annual solar irradiance to Central Scotland.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {weatherFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/50 transition-colors"
            >
              <div className="p-3 rounded-xl bg-slate-900 inline-block mb-4">
                {fact.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{fact.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{fact.desc}</p>
            </div>
          ))}
        </div>

        {/* Daylight Irradiance Table / Comparison Card */}
        <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-1">
              Scottish Annual Sunshine & Daylight Comparison
            </h3>
            <p className="text-xs text-slate-400">
              Met Office climate records show Scotland’s eastern coast and Central Belt receive ample light for high annual kWh production.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {comparisons.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">{c.location}</div>
                <div className="text-xl font-extrabold text-amber-400">{c.sunshineHours}</div>
                <div className="text-[11px] text-slate-500 mt-1">{c.note}</div>
              </div>
            ))}
          </div>

          {/* Winter vs Summer breakdown pill */}
          <div className="mt-6 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
            <span className="flex items-center gap-2">
              <ThermometerSnowflake className="w-4 h-4 text-blue-400" />
              <span><strong>Winter tip:</strong> With a home battery, you charge cheaply at night on 7p off-peak rates during darker Scottish winter days!</span>
            </span>
            <span className="text-amber-400 font-semibold shrink-0">Year-Round Energy Independence</span>
          </div>
        </div>
      </div>
    </section>
  );
};
