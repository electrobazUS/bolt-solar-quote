import { CalculatorState, CalculationBreakdown } from '../types';
import { extractScottishRegion } from '../data/scottishRegions';

export function calculateScottishSolar(state: CalculatorState): CalculationBreakdown {
  const region = extractScottishRegion(state.postcode);

  // Determine system size based on property type & monthly bill
  let panelCount = 10;
  if (state.propertyType === 'terraced' || state.propertyType === 'flat') {
    panelCount = 8;
  } else if (state.propertyType === 'semi-detached') {
    panelCount = 10;
  } else if (state.propertyType === 'bungalow') {
    panelCount = 12;
  } else if (state.propertyType === 'detached') {
    panelCount = 14;
  }

  // Adjust panel count upwards if high electricity bill (£180+)
  if (state.monthlyBill > 200 && panelCount < 16) {
    panelCount += 2;
  } else if (state.monthlyBill > 280 && panelCount < 18) {
    panelCount += 4;
  } else if (state.monthlyBill < 90 && panelCount > 6) {
    panelCount -= 2;
  }

  const panelWattageKw = 0.435; // 435W Tier-1 all-black bifacial/monocrystalline
  const systemSizeKw = parseFloat((panelCount * panelWattageKw).toFixed(2));

  // Orientation efficiency factor
  let orientationFactor = 1.0;
  switch (state.roofOrientation) {
    case 'south':
      orientationFactor = 1.0;
      break;
    case 'southeast-southwest':
      orientationFactor = 0.95;
      break;
    case 'east-west':
      orientationFactor = 0.84;
      break;
    case 'flat-north':
      orientationFactor = 0.70;
      break;
  }

  // Regional yield in kWh per kWp installed
  const annualYieldPerKwp = region.typicalAnnualYieldKwhPerKwp * orientationFactor;
  const estimatedAnnualGenerationKwh = Math.round(systemSizeKw * annualYieldPerKwp);

  // Self consumption rates
  // With battery: 78% self-consumed, 22% exported
  // Without battery: 32% self-consumed, 68% exported
  const selfConsumptionPct = state.includeBattery ? 0.80 : 0.35;
  const estimatedSelfConsumptionKwh = Math.round(estimatedAnnualGenerationKwh * selfConsumptionPct);
  const estimatedExportKwh = estimatedAnnualGenerationKwh - estimatedSelfConsumptionKwh;

  // Electricity Tariff pricing (UK average standard variable cap: ~28.6p, SEG export ~15p)
  const unitRateImport = 0.286;
  const unitRateExport = 0.150; // Octopus Outgoing / Scottish Power SEG

  const annualSavingsSelfUse = Math.round(estimatedSelfConsumptionKwh * unitRateImport);
  const annualSavingsExport = Math.round(estimatedExportKwh * unitRateExport);

  // Extra battery benefit: charging cheap off-peak night rate (e.g. 7p vs 28.6p)
  const batteryOffPeakAnnualArbitrage = state.includeBattery ? 240 : 0;
  const totalAnnualSavings = annualSavingsSelfUse + annualSavingsExport + batteryOffPeakAnnualArbitrage;

  // System Cost Estimations (Scottish market competitive MCS pricing)
  // Base solar cost: ~£1,250 per kW installed
  let baseSolarCost = systemSizeKw * 1250 + 1200; // inverter, scaffolding, MCS certification, DNO application
  
  if (state.roofMaterial === 'slate') {
    // Scottish slate requires specialized hooks & flashing
    baseSolarCost += 400;
  }

  // Battery storage cost (e.g. 5.2kWh or 10kWh modular battery)
  const batteryCapacityKwh = state.includeBattery ? (systemSizeKw > 5.5 ? 9.6 : 5.12) : 0;
  const batteryCost = state.includeBattery ? (batteryCapacityKwh > 6 ? 4200 : 2700) : 0;

  // EV charger cost if checked
  const evChargerCost = state.includeEvCharger ? 850 : 0;

  const estimatedSystemCostGross = Math.round(baseSolarCost + batteryCost + evChargerCost);

  // Home Energy Scotland Grant & Interest-Free Loan Calculation
  // Scottish Government offers up to £2,500 grant for Solar PV + Battery systems
  // Or up to £7,500 / £9,000 when combined with clean heating (Heat Pump)
  // Plus interest-free loans up to £6,000 from Energy Saving Trust Scotland
  let homeEnergyScotlandGrant = 1250; // typical standalone grant support
  if (state.includeBattery) {
    homeEnergyScotlandGrant += 1250; // extra battery grant boost
  }
  if (region.ruralBonusEligible) {
    homeEnergyScotlandGrant += 500; // Scottish Highlands/Islands/Rural uplift
  }

  // Cap grant to not exceed 35% of total quote
  homeEnergyScotlandGrant = Math.min(homeEnergyScotlandGrant, Math.round(estimatedSystemCostGross * 0.35));

  const netEstimatedCost = Math.max(0, estimatedSystemCostGross - homeEnergyScotlandGrant);
  const paybackYears = parseFloat((netEstimatedCost / (totalAnnualSavings || 1)).toFixed(1));

  // Environmental impact
  // UK Grid carbon intensity: ~0.193 kg CO2e / kWh
  const co2SavedTonnesPerYear = parseFloat(((estimatedAnnualGenerationKwh * 0.193) / 1000).toFixed(2));
  const treesEquivalent = Math.round(co2SavedTonnesPerYear * 45); // ~45 trees planted per tonne CO2
  const twentyFiveYearSavings = Math.round(totalAnnualSavings * 25 * 1.02); // 25 year inflation adjusted

  return {
    recommendedPanels: panelCount,
    systemSizeKw,
    batteryCapacityKwh,
    estimatedAnnualGenerationKwh,
    estimatedSelfConsumptionKwh,
    estimatedExportKwh,
    annualSavingsSelfUse,
    annualSavingsExport,
    totalAnnualSavings,
    estimatedSystemCostGross,
    homeEnergyScotlandGrant,
    netEstimatedCost,
    paybackYears,
    co2SavedTonnesPerYear,
    treesEquivalent,
    twentyFiveYearSavings,
  };
}
