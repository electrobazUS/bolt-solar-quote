import React from 'react';
import { Sun, Phone, Mail, MapPin, ShieldCheck, Heart, ShoppingBag } from 'lucide-react';

interface FooterProps {
  onScrollToCalculator: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToCalculator, onOpenQuoteModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-scot-blue flex items-center justify-center text-amber-400 font-bold shadow">
                <Sun className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">Solar Quote</span>
                <span className="font-extrabold text-lg text-scot-blue ml-1">Scotland</span>
                <div className="text-[11px] text-slate-400">MCS Certified Scottish Solar & Storage</div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed pr-6 text-xs">
              Solar Quote Scotland is Scotland’s dedicated solar and battery comparison platform. 
              We connect Scottish homeowners with MCS accredited installers, unlock Scottish Government Home Energy grants up to £9,000, and ensure compliant grid connection across SP Energy Networks and SSEN.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">Freephone:</span>
                <a href="tel:08004880214" className="hover:text-amber-400 text-white font-bold">0800 488 0214</a>
                <span className="text-slate-500">(Mon–Sat 8am–8pm)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">Email:</span>
                <a href="mailto:info@solarquotescotland.co.uk" className="hover:text-amber-400">info@solarquotescotland.co.uk</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#shop" className="text-amber-400 hover:text-white font-semibold transition-colors flex items-center gap-1">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Shop Solar & Batteries
                </a>
              </li>
              <li>
                <button onClick={onScrollToCalculator} className="hover:text-white transition-colors">
                  Scottish Solar Calculator
                </button>
              </li>
              <li>
                <a href="#grants" className="hover:text-white transition-colors">
                  Home Energy Scotland Grants
                </a>
              </li>
              <li>
                <a href="#scotland-solar" className="hover:text-white transition-colors">
                  Does Solar Work in Scotland?
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Solar & Battery Packages
                </a>
              </li>
              <li>
                <a href="#batteries" className="hover:text-white transition-colors">
                  Battery Storage Tariffs
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Scottish Planning & FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Scottish Coverage Hubs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Scottish Hubs</h4>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li>Edinburgh & The Lothians (EH)</li>
              <li>Glasgow & Clyde Valley (G)</li>
              <li>Aberdeen & Aberdeenshire (AB)</li>
              <li>Dundee & Angus (DD)</li>
              <li>Inverness & Highlands (IV)</li>
              <li>Perthshire & Stirling (PH, FK)</li>
              <li>Kingdom of Fife (KY)</li>
              <li>Ayrshire & Borders (KA, TD, DG)</li>
            </ul>
          </div>

          {/* Accreditations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Accreditations</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>MCS Certified Network</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>RECC Consumer Code</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Home Energy Scotland Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>DNO G98 / G99 Compliant</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-center transition-colors"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 text-[11px] text-slate-500 space-y-2 leading-relaxed">
          <p>
            * Disclaimer: Savings and solar generation figures are estimates calculated based on UK Standard Assessment Procedure (SAP) and MCS standard irradiance data for Scotland. Actual generation varies depending on exact roof pitch, shading, orientation, and weather conditions. Home Energy Scotland (HES) grants and interest-free loans are subject to Scottish Government eligibility rules and funding availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-400">
            <div>
              © {new Date().getFullYear()} Solar Quote Scotland. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Cookie Preferences</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
