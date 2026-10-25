import React, { useState } from 'react';
import { Sun, Phone, Menu, X, ShieldCheck, Zap, Award, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onScrollToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onScrollToCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Scottish Government Grants Compact Top Strip */}
      <div className="bg-gradient-to-r from-scot-darkblue via-scot-blue to-scot-darkblue text-white px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-xs">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
            <span className="font-bold text-amber-300 shrink-0">HES 2026:</span>
            <span className="truncate">Scottish Grants up to £7,500 – £9,000 + 0% Interest Loans</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <span className="hidden md:flex items-center gap-1 text-slate-200">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> MCS Certified
            </span>
            <a
              href="tel:08004880214"
              className="flex items-center gap-1 text-white hover:text-amber-300 font-semibold bg-white/10 px-2 py-0.5 rounded-full text-[11px]"
            >
              <Phone className="w-2.5 h-2.5 text-amber-300" />
              <span>0800 488 0214</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Compact Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-scot-blue to-scot-darkblue flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Sun className="w-5 h-5 text-amber-400" />
              <div className="absolute -bottom-1 -right-1 text-[9px] leading-none">🏴󠁧󠁢󠁳󠁣󠁴󠁿</div>
            </div>
            <div>
              <div className="flex items-center gap-1 leading-none">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">Solar Quote</span>
                <span className="font-extrabold text-base sm:text-lg text-scot-blue">Scotland</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide leading-none mt-0.5">
                MCS Certified Home Solar
              </p>
            </div>
          </a>

          {/* Compact Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs sm:text-[13px] font-semibold text-slate-700">
            <button
              onClick={onScrollToCalculator}
              className="hover:text-scot-blue transition-colors flex items-center gap-1 py-1"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Calculator
            </button>
            <a href="#shop" className="hover:text-scot-blue transition-colors flex items-center gap-1 py-1 font-bold text-scot-blue">
              <ShoppingBag className="w-3.5 h-3.5" />
              Shop
            </a>
            <a href="#grants" className="hover:text-scot-blue transition-colors flex items-center gap-1 py-1">
              <Award className="w-3.5 h-3.5 text-scot-blue" />
              Grants
            </a>
            <a href="#scotland-solar" className="hover:text-scot-blue transition-colors py-1">
              Why Scotland
            </a>
            <a href="#packages" className="hover:text-scot-blue transition-colors py-1">
              Packages
            </a>
            <a href="#batteries" className="hover:text-scot-blue transition-colors py-1">
              Batteries
            </a>
            <a href="#coverage" className="hover:text-scot-blue transition-colors py-1">
              Coverage
            </a>
            <a href="#faq" className="hover:text-scot-blue transition-colors py-1">
              FAQ
            </a>
          </nav>

          {/* Action Buttons & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Prominent Shop Button on Menu */}
            <a
              href="#shop"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-slate-300 hover:border-scot-blue hover:text-scot-blue text-slate-800 font-bold text-xs sm:text-sm transition-all bg-white shadow-sm hover:shadow"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-scot-blue" />
              <span>Shop</span>
            </a>

            {/* Free Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-sm hover:shadow text-xs sm:text-sm flex items-center gap-1.5 transition-all transform hover:-translate-y-0.5"
            >
              <Sun className="w-3.5 h-3.5 text-slate-950" />
              <span>Get Free Quote</span>
            </button>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 shadow-lg animate-in slide-in-from-top-2 text-xs font-semibold">
          <a
            href="#shop"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 px-2.5 rounded-lg bg-blue-50 text-scot-blue font-bold"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Solar & Battery Shop
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToCalculator();
            }}
            className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-slate-50 text-slate-700 flex items-center gap-2"
          >
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            Solar Calculator
          </button>
          <a
            href="#grants"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-2.5 rounded-lg hover:bg-slate-50 text-slate-700"
          >
            Scottish Government Grants (£7.5k - £9k)
          </a>
          <a
            href="#scotland-solar"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-2.5 rounded-lg hover:bg-slate-50 text-slate-700"
          >
            Why Solar Works In Scotland
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-2.5 rounded-lg hover:bg-slate-50 text-slate-700"
          >
            Solar & Battery Packages
          </a>
          <a
            href="#batteries"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-2.5 rounded-lg hover:bg-slate-50 text-slate-700"
          >
            Battery Storage & Tariffs
          </a>
          <a
            href="#coverage"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-2.5 rounded-lg hover:bg-slate-50 text-slate-700"
          >
            Scottish Regions Covered
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-2.5 rounded-lg hover:bg-slate-50 text-slate-700"
          >
            FAQs
          </a>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-center font-bold text-scot-blue bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" /> Shop
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-lg text-center"
            >
              Get Free Quote
            </button>
            <a
              href="tel:08004880214"
              className="py-2 px-2.5 text-center font-bold text-slate-700 bg-slate-100 rounded-lg flex items-center justify-center gap-1 shrink-0"
              title="Call Free"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
