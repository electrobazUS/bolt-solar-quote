import { ScottishRegion } from '../types';

export const SCOTTISH_POSTCODE_REGIONS: Record<string, ScottishRegion> = {
  'EH': {
    code: 'EH',
    name: 'Edinburgh & Lothians',
    majorCity: 'Edinburgh',
    sunshineHoursAvg: 1450,
    ruralBonusEligible: false,
    typicalAnnualYieldKwhPerKwp: 920,
  },
  'G': {
    code: 'G',
    name: 'Greater Glasgow & Clyde',
    majorCity: 'Glasgow',
    sunshineHoursAvg: 1380,
    ruralBonusEligible: false,
    typicalAnnualYieldKwhPerKwp: 880,
  },
  'AB': {
    code: 'AB',
    name: 'Aberdeen & Aberdeenshire',
    majorCity: 'Aberdeen',
    sunshineHoursAvg: 1470,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 940,
  },
  'DD': {
    code: 'DD',
    name: 'Dundee & Angus',
    majorCity: 'Dundee',
    sunshineHoursAvg: 1520, // Dundee is officially Scotland's sunniest city!
    ruralBonusEligible: false,
    typicalAnnualYieldKwhPerKwp: 960,
  },
  'IV': {
    code: 'IV',
    name: 'Inverness & Highlands',
    majorCity: 'Inverness',
    sunshineHoursAvg: 1320,
    ruralBonusEligible: true, // Scottish rural grant uplift (£9,000 max)
    typicalAnnualYieldKwhPerKwp: 860,
  },
  'PH': {
    code: 'PH',
    name: 'Perth & Kinross / Highlands',
    majorCity: 'Perth',
    sunshineHoursAvg: 1420,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 900,
  },
  'FK': {
    code: 'FK',
    name: 'Falkirk & Stirling',
    majorCity: 'Stirling',
    sunshineHoursAvg: 1390,
    ruralBonusEligible: false,
    typicalAnnualYieldKwhPerKwp: 890,
  },
  'KY': {
    code: 'KY',
    name: 'Kingdom of Fife',
    majorCity: 'Dunfermline / St Andrews',
    sunshineHoursAvg: 1480,
    ruralBonusEligible: false,
    typicalAnnualYieldKwhPerKwp: 930,
  },
  'KA': {
    code: 'KA',
    name: 'Ayrshire & Arran',
    majorCity: 'Ayr',
    sunshineHoursAvg: 1410,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 900,
  },
  'TD': {
    code: 'TD',
    name: 'Scottish Borders',
    majorCity: 'Galashiels / Melrose',
    sunshineHoursAvg: 1440,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 915,
  },
  'DG': {
    code: 'DG',
    name: 'Dumfries & Galloway',
    majorCity: 'Dumfries',
    sunshineHoursAvg: 1430,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 910,
  },
  'PA': {
    code: 'PA',
    name: 'Paisley, Argyll & Bute',
    majorCity: 'Paisley / Oban',
    sunshineHoursAvg: 1350,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 870,
  },
  'KW': {
    code: 'KW',
    name: 'Caithness & Orkney',
    majorCity: 'Wick / Kirkwall',
    sunshineHoursAvg: 1280,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 830,
  },
  'HS': {
    code: 'HS',
    name: 'Outer Hebrides (Western Isles)',
    majorCity: 'Stornoway',
    sunshineHoursAvg: 1260,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 820,
  },
  'ZE': {
    code: 'ZE',
    name: 'Shetland Islands',
    majorCity: 'Lerwick',
    sunshineHoursAvg: 1190,
    ruralBonusEligible: true,
    typicalAnnualYieldKwhPerKwp: 800,
  }
};

export const DEFAULT_SCOTTISH_REGION: ScottishRegion = {
  code: 'SCOT',
  name: 'Central Scotland Average',
  majorCity: 'Central Belt',
  sunshineHoursAvg: 1410,
  ruralBonusEligible: false,
  typicalAnnualYieldKwhPerKwp: 900,
};

export function extractScottishRegion(postcode: string): ScottishRegion {
  const cleaned = postcode.trim().toUpperCase().replace(/\s+/g, '');
  if (!cleaned) return DEFAULT_SCOTTISH_REGION;

  // Check 2-letter prefixes first (e.g. EH, AB, DD, IV, etc.)
  const twoLetter = cleaned.substring(0, 2);
  if (SCOTTISH_POSTCODE_REGIONS[twoLetter]) {
    return SCOTTISH_POSTCODE_REGIONS[twoLetter];
  }

  // Check 1-letter prefix (G for Glasgow)
  const oneLetter = cleaned.substring(0, 1);
  if (SCOTTISH_POSTCODE_REGIONS[oneLetter]) {
    return SCOTTISH_POSTCODE_REGIONS[oneLetter];
  }

  return DEFAULT_SCOTTISH_REGION;
}
