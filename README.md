# Solar Quote Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿☀️

**Solar Quote Scotland** is a modern, high-performance web application designed for Scottish homeowners and businesses to compare, calculate, and request official solar photovoltaic (PV) and battery storage quotes tailored to Scottish weather, roofs, and Scottish Government grant schemes.

Ready to be uploaded to **Bolt.new** or deployed via Vercel, Netlify, or GitHub Pages.

---

## 🌟 Key Features

1. **🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scottish Postcode & Irradiance Calculator**
   - Automatically detects Scottish regions (Edinburgh, Glasgow, Aberdeen, Dundee, Highlands & Islands, Borders, Fife, Ayrshire, etc.)
   - Calibrates solar yield based on Met Office sunshine hours (e.g. Dundee's 1,520 hrs/yr vs Central Belt 1,410 hrs/yr)
   - Accurately handles traditional Scottish Slate vs Concrete/Clay Tile roofing considerations

2. **💰 Scottish Government Grants & Loan Explainer**
   - **Home Energy Scotland (HES)** grant calculations: up to **£7,500** standard, or **£9,000** with the Scottish rural uplift
   - **0% Interest Clean Energy Loans** up to £6,000 administered by Energy Saving Trust Scotland
   - **0% VAT** relief and **Smart Export Guarantee (SEG)** export payments (15p/kWh+)

3. **🌧️ "Does Solar Work in Scotland?" Science Section**
   - Busts the myth that solar panels require hot sunshine
   - Explains N-Type TOPCon diffuse light absorption in rainy/cloudy Scottish conditions
   - 17+ hours of long summer daylight benefits

4. **🔋 Smart Battery Storage & Off-Peak Tariffs**
   - Overnight off-peak charging (e.g. Octopus Go 7p/kWh or Scottish Power off-peak)
   - Emergency Power Supply (EPS) storm backup for Scottish winter outages

5. **📦 Curated Turnkey Scottish Packages**
   - *Scottish Suburban* (4.35 kWp)
   - *Scottish Independence* (5.22 kWp + 9.6 kWh Battery)
   - *Highland & Rural Estate* (7.04 kWp + 14.4 kWh Battery + EV Charger)

6. **📄 Interactive Quote Lead Generation Modal**
   - Real-time client-side quote reference generator
   - Printable / PDF summary receipt with savings breakdown

---

## 🚀 Getting Started

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## ⚡ Bolt.new & GitHub Integration

This repository is connected to:
```
https://github.com/electrobazUS/bolt-solar-quote.git
```

To run directly on [Bolt.new](https://bolt.new):
- Import this GitHub repository into Bolt.
- Bolt will detect Vite + React + Tailwind CSS and launch the project instantly.

---

## 🛡️ Accreditations & Standards
- **MCS (Microgeneration Certification Scheme)** compliant calculation formulas
- **RECC (Renewable Energy Consumer Code)** member standards
- **DNO G98 / G99** compliant application processes for SP Energy Networks & SSEN
