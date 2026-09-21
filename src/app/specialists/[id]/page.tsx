import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AuraBackground, AuraType } from '../../../components/AuraBackground';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { practitioners, services, SpecialtyInfo } from '../../../data/mockData';

interface ProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

// Maps practitioner specialties to unique, ambient color washes (Auras)
function getAuraForSpecialty(specialty: string): AuraType {
  switch (specialty) {
    case 'MENTAL_HEALTH':
    case 'PSYCHIATRY':
      return 'Sessions'; // Restorative sage/mint wash
    case 'NUTRITION':
    case 'PHYSIOTHERAPY':
    case 'OCCUPATIONAL_THERAPY':
    case 'SPEECH_THERAPY':
      return 'SelfCare'; // Restorative lilac/lavender wash
    case 'GENERAL_PRACTICE':
    case 'DENTAL':
      return 'Discovery'; // Soft sky blue wash
    default:
      return 'Neutral';
  }
}

export default async function SpecialistProfile({ params }: ProfilePageProps) {
  const { id } = await params;
  
  // Find the practitioner from mock data
  const practitioner = practitioners.find((p) => p.id === id);

  if (!practitioner) {
    notFound();
  }

  // Filter clinical services offered by this practitioner
  const practitionerServices = services.filter((s) => s.practitionerId === practitioner.id);

  const auraType = getAuraForSpecialty(practitioner.primarySpecialty);
  const specialtyLabel = SpecialtyInfo[practitioner.primarySpecialty]?.displayName || practitioner.primarySpecialty;

  return (
    <AuraBackground aura={auraType}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate uppercase tracking-wider">
          <Link href="/" className="hover:text-ink-navy transition-colors">Home</Link>
          <span className="text-hairline">/</span>
          <Link href="/specialists" className="hover:text-ink-navy transition-colors">Specialists</Link>
          <span className="text-hairline">/</span>
          <span className="text-ink-navy">{practitioner.title} {practitioner.fullName}</span>
        </div>

        {/* Profile Header Card */}
        <section className="bg-white border border-hairline rounded-hero p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Avatar Area */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-64 bg-mist-surface rounded-hero border border-hairline overflow-hidden shadow-md flex items-center justify-center">
              {practitioner.imagePath ? (
                <Image
                  src={practitioner.imagePath}
                  alt={practitioner.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <span className="text-5xl font-bold text-sphere-blue">{practitioner.avatarInitials}</span>
              )}
            </div>
          </div>

          {/* Details Area */}
          <div className="lg:col-span-8 flex flex-col items-start gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-sphere-blue bg-sphere-blue/5 border border-sphere-blue/10 px-3.5 py-1.5 rounded-small tracking-wider uppercase">
                {specialtyLabel}
              </span>
              {practitioner.isVerified && (
                <span className="text-xs font-bold text-emerald bg-emerald/5 border border-emerald/10 px-3.5 py-1.5 rounded-small tracking-wider uppercase">
                  HPCZ Accredited
                </span>
              )}
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-ink-navy tracking-tight">
                {practitioner.title} {practitioner.fullName}
              </h1>
              <p className="text-sm font-semibold text-soft-slate mt-2">
                {practitioner.credentials.join(' • ')}
              </p>
            </div>

            <div className="flex items-center gap-4 border-y border-hairline w-full py-4 my-2">
              <div>
                <span className="text-[10px] font-bold text-soft-slate tracking-widest uppercase block">Consultation Rate</span>
                <span className="text-lg font-extrabold text-ink-navy">ZMW {practitioner.startingPriceZmw.toFixed(2)}</span>
              </div>
              <div className="h-8 w-[1px] bg-hairline"></div>
              <div>
                <span className="text-[10px] font-bold text-soft-slate tracking-widest uppercase block">Reviews</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <svg className="w-4 h-4 text-honey-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="text-sm font-bold text-ink-navy">{practitioner.rating}</span>
                  <span className="text-xs text-soft-slate">({practitioner.reviewCount} patient consultations)</span>
                </div>
              </div>
            </div>

            {/* Verification and Regulatory Info */}
            <div className="text-xs text-slate bg-mist-surface border border-hairline p-4 rounded-standard w-full flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <span className="font-bold block text-ink-navy">Verified Licensing & Accreditation</span>
                <span className="block mt-0.5 text-soft-slate font-medium leading-relaxed">
                  Registered via {practitioner.verificationBody}. Verified for clinical practice in {practitioner.location.city}, Zambia.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Main profile content (Left col) */}
          <section className="lg:col-span-8 flex flex-col gap-8">
            {/* Professional Biography */}
            <div className="bg-white border border-hairline rounded-hero p-8 md:p-10 shadow-sm flex flex-col gap-4">
              <h2 className="text-xl font-extrabold text-ink-navy tracking-tight uppercase text-xs tracking-wider border-b border-hairline pb-4">
                Professional Biography
              </h2>
              <p className="text-sm md:text-base text-slate leading-relaxed">
                {practitioner.bio}
              </p>
            </div>

            {/* Consultation Style */}
            <div className="bg-white border border-hairline rounded-hero p-8 md:p-10 shadow-sm flex flex-col gap-4">
              <h2 className="text-xl font-extrabold text-ink-navy tracking-tight uppercase text-xs tracking-wider border-b border-hairline pb-4">
                Clinical Consultation Style
              </h2>
              <p className="text-sm md:text-base text-slate leading-relaxed">
                {practitioner.consultationStyle}
              </p>
            </div>

            {/* Services & Pricing Offered */}
            <div className="bg-white border border-hairline rounded-hero p-8 md:p-10 shadow-sm flex flex-col gap-6">
              <h2 className="text-xl font-extrabold text-ink-navy tracking-tight uppercase text-xs tracking-wider border-b border-hairline pb-4">
                Services & Consultations Provided
              </h2>
              {practitionerServices.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {practitionerServices.map((service) => (
                    <div key={service.id} className="bg-canvas border border-hairline rounded-standard p-6 hover:shadow-sm transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-3">
                        <h3 className="text-base font-bold text-ink-navy tracking-tight">
                          {service.name}
                        </h3>
                        <span className="text-base font-extrabold text-ink-navy bg-white border border-hairline px-4 py-2 rounded-small whitespace-nowrap shadow-sm">
                          ZMW {service.priceZmw.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-slate leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-[11px] font-bold tracking-wider uppercase text-soft-slate border-t border-hairline/65 pt-4">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-soft-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {service.durationMinutes} Minutes
                        </span>
                        <span className="h-4 w-[1px] bg-hairline"></span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-soft-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          {service.supportedConsultationTypes.map(t => t === 'ONLINE' ? 'Virtual Audio/Video' : 'In-Person Clinic Visit').join(' & ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-soft-slate">No services listed for this specialist.</p>
              )}
            </div>
          </section>

          {/* Booking & Clinic Details Sidebar (Right col) */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            {/* Booking CTA Panel */}
            <div className="bg-dark-matte text-white border border-dark-matte-border rounded-hero p-8 shadow-md flex flex-col gap-6">
              <span className="text-[10px] font-bold tracking-widest text-emerald uppercase bg-emerald/10 border border-emerald/20 px-3 py-1.5 rounded-small self-start">
                Secure Care Booking
              </span>
              <h3 className="text-lg font-bold tracking-tight">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-soft-slate leading-relaxed">
                Booking clinical appointments, processing mobile money transactions (MTN MoMo, Airtel, Zamtel), and engaging in secure patient-specialist video consultations require our dedicated Android application to guarantee strict privacy.
              </p>
              <div className="border-t border-dark-matte-border pt-4">
                <a
                  href="/zambia-health-v1.apk"
                  download
                  className="w-full py-3.5 bg-emerald hover:bg-emerald/90 text-white font-bold tracking-wider uppercase text-xs rounded-standard transition-all duration-300 shadow-md flex items-center justify-center gap-2.5"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Get Android Showcase App
                </a>
              </div>
            </div>

            {/* Clinic & Location Details */}
            <div className="bg-white border border-hairline rounded-hero p-8 shadow-sm flex flex-col gap-6">
              <h3 className="text-sm font-bold text-ink-navy uppercase tracking-wider border-b border-hairline pb-3">
                Clinic Affiliation
              </h3>
              <div className="flex flex-col gap-4">
                {practitioner.practice ? (
                  <>
                    <div>
                      <span className="text-[10px] font-bold text-soft-slate uppercase block">Practice Name</span>
                      <span className="text-sm font-bold text-ink-navy block mt-0.5">{practitioner.practice.name}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-soft-slate uppercase block">Address</span>
                      <span className="text-xs text-slate block mt-1 leading-relaxed">
                        {practitioner.practice.location.physicalAddress || `${practitioner.practice.location.area}, ${practitioner.practice.location.city}`}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-soft-slate uppercase block">Clinic Telephone</span>
                      <span className="text-xs text-slate block mt-0.5">{practitioner.practice.phone}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-soft-slate uppercase block">Clinic Email</span>
                      <span className="text-xs text-slate block mt-0.5">{practitioner.practice.email}</span>
                    </div>
                  </>
                ) : (
                  <div>
                    <span className="text-[10px] font-bold text-soft-slate uppercase block">General Location</span>
                    <span className="text-xs text-slate block mt-1">
                      {practitioner.location.area}, {practitioner.location.city}, Zambia
                    </span>
                  </div>
                )}

                <div className="border-t border-hairline pt-4 mt-2">
                  <span className="text-[10px] font-bold text-soft-slate uppercase block">Languages Spoken</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {practitioner.languages.map((lang) => (
                      <span key={lang} className="text-[10px] font-bold text-slate bg-mist-surface border border-hairline px-3 py-1 rounded-small">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </AuraBackground>
  );
}
