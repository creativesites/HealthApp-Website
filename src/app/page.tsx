import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuraBackground } from '../components/AuraBackground';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PractitionerCard } from '../components/PractitionerCard';
import { practitioners } from '../data/mockData';

export default function Home() {
  // Feature top 3 practitioners on the home page
  const featuredPractitioners = practitioners.slice(0, 3);

  return (
    <AuraBackground aura="Discovery">
      <Navbar />

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <span className="text-xs font-bold tracking-widest text-sphere-blue uppercase bg-sphere-blue/5 border border-sphere-blue/10 px-4 py-2 rounded-small shadow-sm">
            Zambia&apos;s Digital Healthcare Future
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink-navy leading-[1.1] tracking-tight">
            Accredited Medical Specialists. <br />
            <span className="text-emerald">At Your Fingertips.</span>
          </h1>
          <p className="text-base md:text-lg text-slate leading-relaxed max-w-2xl">
            Zambia Health Sanctuary bridges the gap between patient communities and accredited medical professionals. Connect securely, consult online or in-person, and manage your clinical care journey in one streamlined experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/zambia-health-v1.apk"
              download
              className="px-8 py-4 bg-ink-navy hover:bg-sphere-blue text-white font-bold tracking-wider uppercase text-xs rounded-standard text-center transition-all duration-300 shadow-md flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3l-2.03-2.03c.57-.7.907-1.58.907-2.52C16.4 8.5 14.4 6.5 12 6.5S7.6 8.5 7.6 10.75s2 4.25 4.4 4.25c.94 0 1.82-.337 2.52-.907l2.03 2.03c.2.2.51.2.71 0l.27-.27c.19-.19.19-.51-.01-.71zM12 13.5c-1.517 0-2.75-1.233-2.75-2.75S10.483 8 12 8s2.75 1.233 2.75 2.75S13.517 13.5 12 13.5z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 13v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.84-.63 3.53-1.7 4.93z" />
              </svg>
              Download Android APK
            </a>
            <Link
              href="/specialists"
              className="px-8 py-4 bg-white border border-hairline hover:bg-mist-surface text-ink-navy font-bold tracking-wider uppercase text-xs rounded-standard text-center transition-all duration-300 shadow-sm"
            >
              Browse Directory
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-8 pt-8 border-t border-hairline w-full">
            <div>
              <span className="text-2xl md:text-3xl font-extrabold text-ink-navy block">100%</span>
              <span className="text-[10px] font-bold tracking-widest text-soft-slate uppercase">HPCZ Accredited</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-extrabold text-ink-navy block">ZMW</span>
              <span className="text-[10px] font-bold tracking-widest text-soft-slate uppercase">Local Economics</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-2xl md:text-3xl font-extrabold text-ink-navy block">24/7</span>
              <span className="text-[10px] font-bold tracking-widest text-soft-slate uppercase">Support Access</span>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] bg-white border border-hairline rounded-hero shadow-xl overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-discovery-aura to-white/10 opacity-65 z-0" />
          <div className="relative z-10 w-full h-full">
            <Image
              src="/images/80b61d5c-35e3-4a07-a723-80c971d28f31.png"
              alt="Zambia Health Sanctuary Application Interface"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </header>

      {/* Core Platform Pillars */}
      <section className="bg-white border-y border-hairline py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-emerald uppercase block mb-3">Designed with Purpose</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-navy tracking-tight">
              An Infrastructure for Trustworthy Care
            </h2>
            <p className="text-sm md:text-base text-slate leading-relaxed mt-4">
              We understand that healthcare requires absolute transparency. Our digital ecosystem is tailored specifically for the Zambian environment, ensuring seamless workflows and robust security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-canvas border border-hairline rounded-prominent p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-emerald/10 border border-emerald/20 flex items-center justify-center rounded-standard text-emerald mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink-navy mb-3">HPCZ Accreditations</h3>
              <p className="text-sm text-slate leading-relaxed">
                Zero clinical workarounds. Every doctor, clinical psychologist, dietitian, and therapist listed is strictly verified with their official Health Professions Council of Zambia registration credentials.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-canvas border border-hairline rounded-prominent p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-sphere-blue/10 border border-sphere-blue/20 flex items-center justify-center rounded-standard text-sphere-blue mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink-navy mb-3">Zambian Kwacha Pricing</h3>
              <p className="text-sm text-slate leading-relaxed">
                No foreign currency conversion surprises. All pricing is clearly outlined in Zambian Kwacha (ZMW). Native Mobile Money checkout simulations represent real-world MTN MoMo, Airtel, and Zamtel channels.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-canvas border border-hairline rounded-prominent p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-honey-gold/10 border border-honey-gold/20 flex items-center justify-center rounded-standard text-honey-gold-Dark mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink-navy mb-3">Bidirectional Synchrony</h3>
              <p className="text-sm text-slate leading-relaxed">
                Consultation notes completed by specialists flow instantly into patient summaries. Agreed Care Goals, prescribed steps, and upcoming clinical reviews align perfectly across both user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Specialists Directory Preview */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-sphere-blue uppercase block mb-3">Accredited Specialists</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-navy tracking-tight">
              Consult with Verified Practitioners
            </h2>
            <p className="text-sm md:text-base text-slate leading-relaxed mt-2 max-w-2xl">
              Browse profiles, read detailed credentials, review pricing, and see clinical consultation options across Lusaka, Kitwe, and Ndola.
            </p>
          </div>
          <Link
            href="/specialists"
            className="px-6 py-3 bg-ink-navy text-white hover:bg-sphere-blue text-xs font-bold tracking-wider uppercase rounded-standard transition-all duration-300 shadow-sm inline-block text-center whitespace-nowrap"
          >
            View Full Directory
          </Link>
        </div>

        {/* Practitioner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPractitioners.map((practitioner) => (
            <PractitionerCard key={practitioner.id} practitioner={practitioner} />
          ))}
        </div>
      </section>

      {/* Dual Role Experience Showcase */}
      <section className="bg-mist-surface border-t border-hairline py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-sphere-blue uppercase block mb-3">Two Roles, One Network</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-navy tracking-tight">
              A Bidirectional Clinical Workflow Engine
            </h2>
            <p className="text-sm md:text-base text-slate leading-relaxed mt-4">
              Zambia Health Sanctuary offers a dynamic dual-sided architecture. With a single tap, switch between a therapeutic patient sanctuary and an advanced, professional clinician workspace.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-white border border-hairline rounded-standard flex items-center justify-center text-sphere-blue flex-shrink-0 font-bold text-xs shadow-sm">
                  1
                </div>
                <div>
                  <h4 className="text-base font-bold text-ink-navy">Patient Sanctuary</h4>
                  <p className="text-sm text-slate mt-1">
                    Book appointments, track care plans, maintain a private mental wellness journal, complete structured mood check-ins, and message specialists securely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-white border border-hairline rounded-standard flex items-center justify-center text-emerald flex-shrink-0 font-bold text-xs shadow-sm">
                  2
                </div>
                <div>
                  <h4 className="text-base font-bold text-ink-navy">Clinician Practice Workspace</h4>
                  <p className="text-sm text-slate mt-1">
                    Manage appointments, inspect patient intake profiles, compile encounter observations, share care goals, and review licensing credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature List Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-hairline p-6 rounded-prominent shadow-sm">
              <h4 className="text-sm font-extrabold text-ink-navy tracking-wide uppercase mb-3 text-sphere-blue">Patient Core Flows</h4>
              <ul className="text-xs text-slate space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sphere-blue rounded-full"></div>
                  Search & Filter by Specialty
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sphere-blue rounded-full"></div>
                  Real-time Multi-slot Booking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sphere-blue rounded-full"></div>
                  Mock Mobile Money Checkout
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sphere-blue rounded-full"></div>
                  Interactive Care Plan Sync
                </li>
              </ul>
            </div>

            <div className="bg-white border border-hairline p-6 rounded-prominent shadow-sm">
              <h4 className="text-sm font-extrabold text-ink-navy tracking-wide uppercase mb-3 text-emerald">Clinician Core Flows</h4>
              <ul className="text-xs text-slate space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald rounded-full"></div>
                  Patient Medical Cards Overview
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald rounded-full"></div>
                  Clinical Intake Dossier
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald rounded-full"></div>
                  Encounter Note Composer
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald rounded-full"></div>
                  Flexible Availability Setup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="bg-dark-matte text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(46,168,79,0.12),transparent_70%)] z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <span className="text-[10px] font-bold tracking-widest text-emerald uppercase bg-emerald/10 border border-emerald/20 px-3 py-1.5 rounded-small">
            Android Showcase APK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Experience the North Star Showcase Journey?
          </h2>
          <p className="text-sm md:text-base text-soft-slate max-w-2xl leading-relaxed">
            Download our ready-to-install debug APK directly to your Android device to test the bidirectional message sync, instant patient-specialist role switcher, and Mobile Money simulations.
          </p>
          <a
            href="/zambia-health-v1.apk"
            download
            className="px-8 py-4 bg-emerald hover:bg-emerald/90 text-white font-bold tracking-wider uppercase text-xs rounded-standard transition-all duration-300 shadow-md flex items-center gap-3"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Android App Showcase
          </a>
        </div>
      </section>

      <Footer />
    </AuraBackground>
  );
}
