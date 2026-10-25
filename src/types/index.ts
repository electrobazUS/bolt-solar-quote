export type PropertyType = 'detached' | 'semi-detached' | 'terraced' | 'bungalow' | 'flat';
export type RoofOrientation = 'south' | 'southeast-southwest' | 'east-west' | 'flat-north';
export type RoofMaterial = 'slate' | 'tile' | 'metal' | 'flat';

export interface ScottishRegion {
  code: string;
  name: string;
  majorCity: string;
  sunshineHoursAvg: number;
  ruralBonusEligible: boolean;
  typicalAnnualYieldKwhPerKwp: number;
}

export interface CalculatorState {
  postcode: string;
  propertyType: PropertyType;
  monthlyBill: number; // in GBP £
  roofOrientation: RoofOrientation;
  roofMaterial: RoofMaterial;
  includeBattery: boolean;
  includeEvCharger: boolean;
  occupancyCount: number;
}

export interface CalculationBreakdown {
  recommendedPanels: number;
  systemSizeKw: number;
  batteryCapacityKwh: number;
  estimatedAnnualGenerationKwh: number;
  estimatedSelfConsumptionKwh: number;
  estimatedExportKwh: number;
  annualSavingsSelfUse: number;
  annualSavingsExport: number;
  totalAnnualSavings: number;
  estimatedSystemCostGross: number;
  homeEnergyScotlandGrant: number;
  netEstimatedCost: number;
  paybackYears: number;
  co2SavedTonnesPerYear: number;
  treesEquivalent: number;
  twentyFiveYearSavings: number;
}

export interface QuoteLead {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  streetAddress: string;
  propertyType: PropertyType;
  preferredContact: 'phone' | 'email' | 'whatsapp';
  notes?: string;
  calculatedEstimate?: CalculationBreakdown;
}
