import React, { useState } from 'react';
import { Sun, Phone, Menu, X, ShieldCheck, Zap, Award } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onScrollToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onScrollToCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Scottish Government Grants Top Banner */}
      <div className="bg-gradient-to-r from-scot-darkblue via-scot-blue to-scot-darkblue text-white px-4 py-2 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
            <span className="font-semibold text-amber-300">Home Energy Scotland 2026/2027:</span>
            <span className="hidden sm:inline">Grants up to £7,500 (£9,000 for rural areas) + Interest-free loans available.</span>
            <span className="sm:hidden">Grants up to £7,500 - £9,000 available.</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> MCS Certified & RECC Approved
            </span>
            <a
              href="tel:08004880214"
              className="flex items-center gap-1 text-white hover:text-amber-300 transition-colors font-semibold bg-white/10 px-2.5 py-0.5 rounded-full"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>0800 488 0214</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-scot-blue to-scot-darkblue flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 text-amber-400 animate-spin-slow" />
              <div className="absolute -bottom-1 -right-1 text-xs">🏴󠁧󠁢󠁳󠁣󠁴󠁿</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-slate-900 tracking-tight">Solar Quote</span>
                <span className="font-extrabold text-xl text-scot-blue">Scotland</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide uppercase">
                MCS Certified Home Solar & Battery
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <button
              onClick={onScrollToCalculator}
              className="hover:text-scot-blue transition-colors flex items-center gap-1"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              Instant Quote
            </button>
            <a href="#grants" className="hover:text-scot-blue transition-colors flex items-center gap-1">
              <Award className="w-4 h-4 text-scot-blue" />
              Scottish Grants
            </a>
            <a href="#scotland-solar" className="hover:text-scot-blue transition-colors">
              Does It Work In Scotland?
            </a>
            <a href="#packages" className="hover:text-scot-blue transition-colors">
              Packages
            </a>
            <a href="#batteries" className="hover:text-scot-blue transition-colors">
              Battery Storage
            </a>
            <a href="#coverage" className="hover:text-scot-blue transition-colors">
              Areas Covered
            </a>
            <a href="#faq" className="hover:text-scot-blue transition-colors">
              FAQs
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm flex items-center gap-2"
            >
              <Sun className="w-4 h-4 text-slate-950" />
              Get Free Estimate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToCalculator();
            }}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 font-semibold text-scot-blue flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-500" />
            Instant Scottish Solar Calculator
          </button>
          <a
            href="#grants"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Scottish Government Grants (£7,500 - £9,000)
          </a>
          <a
            href="#scotland-solar"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Scottish Weather & Solar Facts
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Solar & Battery Packages
          </a>
          <a
            href="#batteries"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Battery Storage & Tariffs
          </a>
          <a
            href="#coverage"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Scottish Regions Covered
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Frequently Asked Questions
          </a>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl shadow text-center"
            >
              Get Free Scottish Solar Quote
            </button>
            <a
              href="tel:08004880214"
              className="w-full py-2.5 text-center text-sm font-semibold text-scot-blue bg-blue-50 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Scottish Advice: 0800 488 0214
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
