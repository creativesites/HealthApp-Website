# Zambia Health Sanctuary Web Portal 🇿🇲
> **A Highly Polished, HPCZ-Verified Healthcare Specialist Directory & Marketing Website**

This is the official Next.js web presence for **Zambia Health Sanctuary**. It is built with high visual parity to the native Android showcase application, adapting its **Calm Light Design System** into a refined, professional web architecture.

## 🌟 Key Features

- **Accredited Specialist Directory**: A static, filterable directory of clinical psychologists, psychiatrists, dietitians, physiotherapists, and general practitioners practicing across **Lusaka**, **Kitwe**, and **Ndola**.
- **Accreditation and Compliance (HPCZ)**: Highlights official credentials of medical professionals registered with the Health Professions Council of Zambia.
- **Dynamic Specialty Auras**: Restorative color washes (Auras) mapped procedurally to specific specialist directories (e.g., healing Sage/Mint for Mental Health, Sky Blue for General Medicine).
- **Zambia-First Economics**: Complete visibility into pricing structured in **Zambian Kwacha (ZMW)** and clinic contact channels.
- **Showcase APK Delivery**: Hosts and serves the ready-to-install debug Android APK directly for patients wishing to experience real-time Mobile Money simulations, scheduling, and teleconsultation.

## 🎨 Visual Design System (Calm Light Web Edition)

To align with modern web polish mandates, this directory features a high-end, sophisticated aesthetic that **strictly avoids pill shapes, emoji glyphs, and casual visual clutter**:

- **Canvas backdrop**: `#FBFAF7` (Warm Ivory Canvas)
- **Primary Typography**: `#0B2545` (Ink Navy - deep, readable editorial weight)
- **Secondary Details**: `#4A5A70` (Slate - calm clinical secondary text)
- **Soft Accent Colors**: `#1F5FBF` (Sphere Blue), `#2EA84F` (Clinical Emerald)
- **Aura Washes**: Soft radial gradients representing clinical peace and reassurance.
- **Rounded Radii**: Defined at `12px` (Small), `20px` (Standard), and `28px` (Prominent) for clean, professional corners.

## 🛠️ Technology Stack & Architecture

- **Framework**: Next.js 15+ / 16 (App Router)
- **Styling**: Tailwind CSS v4 (configured via modern custom `@theme` layers in CSS)
- **Language**: TypeScript (fully typed interfaces for Practices, Practitioners, and Services)
- **Data Integration**: Sourced mock databases directly ported from the native Kotlin repositories (`MockRepositories.kt`) for high schema synchrony.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0 or newer
- npm or yarn

### Installation
```bash
# Navigate to the website directory
cd healthcare-website

# Install modern dependencies
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the dynamic web app.

### Production Compiling and Static Exports
To compile the production build:
```bash
npm run build
```
This performs full production compilation and pre-renders static page paths for optimal speed and SEO performance.

## 📜 Regulatory Disclaimer
All practitioners listed are mock records based on actual clinical credentials. In the production Android environment, registrations are securely cross-checked with the official register of the Health Professions Council of Zambia (HPCZ).
