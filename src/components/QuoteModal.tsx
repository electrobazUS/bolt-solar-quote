import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sun, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  Download, 
  Printer, 
  Sparkles,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CalculatorState, CalculationBreakdown, QuoteLead } from '../types';
import { calculateScottishSolar } from '../utils/calculatorEngine';
import { extractScottishRegion } from '../data/scottishRegions';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  calculatorState?: CalculatorState;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  calculatorState,
}) => {
  const [formState, setFormState] = useState<QuoteLead>({
    fullName: '',
    email: '',
    phone: '',
    postcode: calculatorState?.postcode || 'EH1 1AA',
    streetAddress: '',
    propertyType: calculatorState?.propertyType || 'detached',
    preferredContact: 'phone',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  if (!isOpen) return null;

  const currentCalc = calculatorState ? calculateScottishSolar(calculatorState) : null;
  const region = extractScottishRegion(formState.postcode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast submission
    setTimeout(() => {
      const randomRef = 'SQS-' + Math.floor(100000 + Math.random() * 900000);
      setQuoteReference(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#005EB8', '#F59E0B', '#10B981'],
        });
      } catch (err) {
        // Confetti optional
      }
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-scot-darkblue to-scot-blue text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                {isSubmitted ? 'Your Scottish Solar Quote is Ready' : 'Request Official Scottish Solar Proposal'}
              </h3>
            </div>
            <p className="text-xs text-blue-100 mt-1">
              {isSubmitted
                ? `Reference Number: ${quoteReference}`
                : '100% Free • MCS Certified • Home Energy Scotland Compliant'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Summary box of configured system */}
              {currentCalc && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div>
                    <div className="text-[11px] text-slate-500">System Size</div>
                    <div className="text-sm font-extrabold text-slate-900">{currentCalc.systemSizeKw} kWp</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">Battery Storage</div>
                    <div className="text-sm font-extrabold text-emerald-600">
                      {calculatorState?.includeBattery ? `${currentCalc.batteryCapacityKwh} kWh LFP` : 'None'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">Annual Savings</div>
                    <div className="text-sm font-extrabold text-amber-600">£{currentCalc.totalAnnualSavings}/yr</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">Est. Grant</div>
                    <div className="text-sm font-extrabold text-scot-blue">£{currentCalc.homeEnergyScotlandGrant}</div>
                  </div>
                </div>
              )}

              {/* Form Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Callum MacDonald"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-scot-blue text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="callum@example.co.uk"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-scot-blue text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="07123 456789"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-scot-blue text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Scottish Postcode *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. EH10 4BF"
                        value={formState.postcode}
                        onChange={(e) => setFormState({ ...formState, postcode: e.target.value.toUpperCase() })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm uppercase font-semibold focus:ring-2 focus:ring-scot-blue text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Street Address or Town
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 14 High Street"
                      value={formState.streetAddress}
                      onChange={(e) => setFormState({ ...formState, streetAddress: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-scot-blue text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['phone', 'email', 'whatsapp'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormState({ ...formState, preferredContact: method })}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold capitalize transition-all ${
                          formState.preferredContact === method
                            ? 'bg-scot-blue text-white border-scot-blue'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Special Notes or Roof Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Scotch slate roof, listed building status, interested in heat pump combination..."
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-scot-blue"
                  />
                </div>
              </div>

              {/* Trust disclaimer */}
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-[11px] text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-scot-blue shrink-0 mt-0.5" />
                <span>
                  Your information is kept private under UK GDPR. We do not sell data. A local MCS certified Scottish solar specialist will review your property roof via satellite imagery.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-base shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Generating Scottish Proposal...</span>
                ) : (
                  <>
                    <span>Submit & Claim Grant Eligibility</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Confirmation & Success Screen */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-scot-blue bg-blue-50 px-3 py-1 rounded-full uppercase">
                  Quote Ref: {quoteReference}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  Thank You, {formState.fullName || 'Homeowner'}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Your customized Scottish solar assessment has been generated and sent to <strong className="text-slate-900">{formState.email}</strong>.
                </p>
              </div>

              {/* Summary Receipt Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 max-w-md mx-auto text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Scottish Region:</span>
                  <span className="font-bold text-slate-900">{region.name}</span>
                </div>
                {currentCalc && (
                  <>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">System Proposed:</span>
                      <span className="font-bold text-slate-900">{currentCalc.systemSizeKw} kWp ({currentCalc.recommendedPanels} Panels)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Battery Capacity:</span>
                      <span className="font-bold text-emerald-600">{calculatorState?.includeBattery ? `${currentCalc.batteryCapacityKwh} kWh LFP` : 'Solar Only'}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Estimated Annual Saving:</span>
                      <span className="font-black text-amber-600 text-sm">£{currentCalc.totalAnnualSavings} / year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">HES Grant Assistance:</span>
                      <span className="font-bold text-scot-blue">Eligible up to £{currentCalc.homeEnergyScotlandGrant}</span>
                    </div>
                  </>
                )}
              </div>

              {/* What Happens Next */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-700" />
                  What Happens Next?
                </div>
                <p className="text-amber-800 leading-relaxed">
                  1. A Scottish MCS design engineer will conduct a high-resolution satellite roof assessment within 24 hours.
                  <br />
                  2. We will contact you via your preferred channel ({formState.preferredContact}) to review your exact Home Energy Scotland grant paperwork.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  Print / Save Summary
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
