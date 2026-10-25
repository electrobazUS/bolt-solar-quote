import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  Star, 
  ShieldCheck, 
  Zap, 
  Battery, 
  Sun, 
  Car, 
  Layers, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'all' | 'systems' | 'batteries' | 'panels' | 'inverters';
  price: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  specs: string[];
  description: string;
  inStock: boolean;
}

interface ShopSectionProps {
  onSelectProduct: (productName: string) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'systems' | 'batteries' | 'panels' | 'inverters'>('all');

  const products: Product[] = [
    {
      id: 'prod-1',
      name: 'Scottish Independence 5.22kW + 9.6kWh Battery Kit',
      category: 'systems',
      price: '£6,995',
      badge: 'Best Seller in Scotland',
      rating: 5,
      reviewsCount: 142,
      specs: [
        '12x 435W N-Type All-Black Panels',
        '9.6 kWh GivEnergy Gen 3 Battery',
        'Hybrid Inverter & WiFi Monitoring',
        'Scottish Slate / Tile Mounting Kit',
      ],
      description: 'Our most popular turnkey system. Designed for typical Scottish 3-4 bedroom homes with off-peak tariff automation.',
      inStock: true,
    },
    {
      id: 'prod-2',
      name: 'GivEnergy All-in-One 13.5kWh Home Storage',
      category: 'batteries',
      price: '£4,850',
      badge: 'Top UK Battery',
      rating: 5,
      reviewsCount: 89,
      specs: [
        '13.5 kWh Usable LFP Capacity',
        '6.0 kW Continuous Power Output',
        'Emergency Power Supply (EPS) Backup',
        '12-Year Warranty with 0% VAT',
      ],
      description: 'Premium British-engineered home battery system. Stores cheap 7p overnight electricity to power your home during peak hours.',
      inStock: true,
    },
    {
      id: 'prod-3',
      name: 'Tesla Powerwall 3 (13.5kWh + 20kW Inverter)',
      category: 'batteries',
      price: '£7,200',
      badge: 'Premium Flagship',
      rating: 5,
      reviewsCount: 64,
      specs: [
        'Integrated 20kW Solar Inverter',
        '13.5 kWh Usable Energy Storage',
        'Instant Blackout Protection Transition',
        '10-Year Comprehensive Tesla Warranty',
      ],
      description: 'Next-generation all-in-one solar and battery powerhouse with high surge capacity for heat pumps and electric cars.',
      inStock: true,
    },
    {
      id: 'prod-4',
      name: '435W All-Black Monocrystalline N-Type Panels (Pallet of 10)',
      category: 'panels',
      price: '£1,150',
      badge: 'High Diffuse Yield',
      rating: 5,
      reviewsCount: 110,
      specs: [
        '10x 435W Monocrystalline Modules',
        '22.3% Ultra-high Efficiency',
        'Engineered for Scottish Overcast Days',
        '25-Year Linear Power Warranty',
      ],
      description: 'Tier-1 bifacial panels optimized for northern latitudes, capturing high diffuse light under cloudy and rainy Scottish skies.',
      inStock: true,
    },
    {
      id: 'prod-5',
      name: 'Scottish Suburban 4.35kW Turnkey Solar PV Kit',
      category: 'systems',
      price: '£4,250',
      badge: 'Great Value Entry',
      rating: 4.9,
      reviewsCount: 95,
      specs: [
        '10x 435W Tier-1 All-Black Solar Panels',
        'Solis 3.6kW Single Phase Inverter',
        'Full Scottish Wind-Load Fixing Kit',
        'Smart Export Guarantee (SEG) Ready',
      ],
      description: 'Cost-effective solar package for Scottish semi-detached and terraced homes looking to lower monthly bills immediately.',
      inStock: true,
    },
    {
      id: 'prod-6',
      name: 'Myenergi Zappi 7kW Smart EV Home Charger',
      category: 'inverters',
      price: '£785',
      badge: 'Solar Compatible',
      rating: 5,
      reviewsCount: 153,
      specs: [
        '7kW Fast Charging Speed (32A)',
        'Eco & Eco+ 100% Solar Power Modes',
        'Tethered 6.5m Cable with Type 2 Plug',
        'Home Energy Scotland Grant Compatible',
      ],
      description: 'Smart EV charger that directs 100% surplus Scottish solar electricity straight into your car battery.',
      inStock: true,
    },
    {
      id: 'prod-7',
      name: 'Solis 5kW Hybrid 5G Inverter with WiFi',
      category: 'inverters',
      price: '£980',
      badge: 'SP Energy & SSEN Approved',
      rating: 4.8,
      reviewsCount: 78,
      specs: [
        'Dual MPPT Tracker Architecture',
        'G98 / G99 Grid Code Compliant',
        'Fast Switching Time for Battery Storage',
        '10-Year UK Inverter Warranty',
      ],
      description: 'Reliable hybrid solar inverter compatible with leading lithium batteries, featuring real-time mobile app tracking.',
      inStock: true,
    },
    {
      id: 'prod-8',
      name: 'Traditional Scottish Slate Roof Mounting Kit (12 Panels)',
      category: 'systems',
      price: '£340',
      badge: 'Scottish Slate Spec',
      rating: 5,
      reviewsCount: 42,
      specs: [
        'Heavy-duty Marine Grade Stainless Slate Hooks',
        'Lead Flashing & Weather-Tight Seals',
        'Black Anodized Aluminum Railings',
        'Certified to Scottish Wind BS EN 1991',
      ],
      description: 'Specially engineered for Scottish heritage slate roofs, preventing cracked slates and ensuring 100% watertight protection.',
      inStock: true,
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <ShoppingBag className="w-4 h-4 text-amber-600" />
            Scottish Solar & Hardware Store
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Shop Solar Panels, Batteries & Complete Kits
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Order hardware with delivery anywhere in Scotland, or select full turnkey MCS certified installation (all eligible for 0% VAT relief).
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Equipment' },
              { id: 'systems', label: 'Complete Solar Kits' },
              { id: 'batteries', label: 'Home Batteries' },
              { id: 'panels', label: 'Solar Panels' },
              { id: 'inverters', label: 'Inverters & EV' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-scot-blue text-white shadow-sm ring-2 ring-scot-blue/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Badge & Stock */}
                <div className="flex items-center justify-between mb-3">
                  {prod.badge ? (
                    <span className="text-[10px] font-extrabold text-scot-blue bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {prod.badge}
                    </span>
                  ) : <span />}
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    In Stock (Scotland)
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-scot-blue transition-colors">
                  {prod.name}
                </h3>

                {/* Ratings */}
                <div className="flex items-center gap-1 mb-3 text-amber-400 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-bold text-slate-700 ml-0.5">{prod.rating}.0</span>
                  <span className="text-slate-400 text-[11px]">({prod.reviewsCount} reviews)</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {prod.description}
                </p>

                {/* Specs */}
                <div className="space-y-1.5 pb-4 border-b border-slate-100 mb-4 text-[11px] text-slate-700">
                  {prod.specs.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xl font-black text-slate-900">{prod.price}</span>
                    <span className="text-[10px] text-slate-500 font-semibold block">0% VAT Relief</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    Free Delivery
                  </span>
                </div>

                <button
                  onClick={() => onSelectProduct(prod.name)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-scot-blue text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Enquire / Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scotland Delivery & Installation Notice */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-white shadow-sm text-scot-blue shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Need Installation With Your Hardware?</div>
              <p className="text-slate-600 mt-0.5">
                All shop items can be purchased as supply-only or bundled with MCS certified Scottish installation to qualify for Home Energy Scotland grants.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectProduct('Custom Scottish Hardware Bundle')}
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-sm transition-colors text-xs flex items-center gap-1.5"
          >
            <span>Request Bundle Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
