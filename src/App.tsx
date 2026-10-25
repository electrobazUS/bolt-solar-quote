import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { SolarCalculator } from './components/Calculator';
import { ScottishGrants } from './components/ScottishGrants';
import { ScottishWeatherSection } from './components/ScottishWeatherSection';
import { Packages } from './components/Packages';
import { ShopSection } from './components/ShopSection';
import { BatteryStorage } from './components/BatteryStorage';
import { CoverageMap } from './components/CoverageMap';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudies } from './components/CaseStudies';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CalculatorState } from './types';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [calculatorPostcode, setCalculatorPostcode] = useState('EH1 1AA');
  const [currentCalcState, setCurrentCalcState] = useState<CalculatorState | undefined>();

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroQuickStart = (postcode: string) => {
    if (postcode.trim()) {
      setCalculatorPostcode(postcode.trim().toUpperCase());
    }
    scrollToCalculator();
  };

  const handleProceedToQuote = (state: CalculatorState) => {
    setCurrentCalcState(state);
    setIsQuoteModalOpen(true);
  };

  const handleSelectPackageOrProduct = (name: string) => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-scot-blue selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onScrollToCalculator={scrollToCalculator}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onQuickStart={handleHeroQuickStart}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* Scottish & UK Trust Badges */}
        <TrustBar />

        {/* Interactive Scottish Solar Calculator */}
        <SolarCalculator
          initialPostcode={calculatorPostcode}
          onProceedToQuote={handleProceedToQuote}
        />

        {/* Scottish Government Grants & Loans */}
        <ScottishGrants onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* Scottish Solar & Hardware Shop Section */}
        <ShopSection onSelectProduct={handleSelectPackageOrProduct} />

        {/* Scottish Weather Explainer */}
        <ScottishWeatherSection />

        {/* Curated Turnkey Packages */}
        <Packages onSelectPackage={handleSelectPackageOrProduct} />

        {/* Battery Storage & Off-peak Tariffs */}
        <BatteryStorage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* Coverage Across Scotland */}
        <CoverageMap
          onSelectPostcode={(code) => {
            setCalculatorPostcode(code);
            scrollToCalculator();
          }}
        />

        {/* How It Works */}
        <HowItWorks />

        {/* Scottish Real Case Studies */}
        <CaseStudies />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToCalculator={scrollToCalculator}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        calculatorState={currentCalcState}
      />
    </div>
  );
}

export default App;
