export type SpecialtyCategory = 
  | 'MENTAL_HEALTH'
  | 'GENERAL_PRACTICE'
  | 'DENTAL'
  | 'NUTRITION'
  | 'PHYSIOTHERAPY'
  | 'PSYCHIATRY'
  | 'OCCUPATIONAL_THERAPY'
  | 'SPEECH_THERAPY'
  | 'OTHER';

export const SpecialtyInfo: Record<SpecialtyCategory, { displayName: string; icon: string }> = {
  MENTAL_HEALTH: { displayName: 'Mental Health', icon: '🧠' },
  GENERAL_PRACTICE: { displayName: 'General Practice', icon: '🩺' },
  DENTAL: { displayName: 'Dental Care', icon: '🦷' },
  NUTRITION: { displayName: 'Nutrition & Diet', icon: '🥗' },
  PHYSIOTHERAPY: { displayName: 'Physiotherapy', icon: '🏃' },
  PSYCHIATRY: { displayName: 'Psychiatry', icon: '⚕️' },
  OCCUPATIONAL_THERAPY: { displayName: 'Occupational Therapy', icon: '♿' },
  SPEECH_THERAPY: { displayName: 'Speech Therapy', icon: '🗣️' },
  OTHER: { displayName: 'Specialist Care', icon: '🏥' }
};

export type ConsultationType = 'ONLINE' | 'IN_PERSON';

export const ConsultationTypeLabels: Record<ConsultationType, string> = {
  ONLINE: 'Online Video / Audio',
  IN_PERSON: 'In-Person Clinic Visit'
};

export interface ZambianLocation {
  city: string; // e.g. "Lusaka", "Kitwe", "Ndola"
  area: string; // e.g. "Woodlands", "Rhodes Park", "Riverside"
  physicalAddress?: string;
}

export interface Practice {
  id: string;
  name: string;
  location: ZambianLocation;
  phone: string;
  email: string;
  isVerified: boolean;
}

export interface HealthcareService {
  id: string;
  practitionerId: string;
  name: string;
  description: string;
  durationMinutes: number;
  priceZmw: number;
  supportedConsultationTypes: ConsultationType[];
}

export interface Practitioner {
  id: string;
  fullName: string;
  title: string;
  credentials: string[];
  primarySpecialty: SpecialtyCategory;
  secondarySpecialties?: SpecialtyCategory[];
  isVerified: boolean;
  verificationBody: string;
  bio: string;
  consultationStyle: string;
  languages: string[];
  practice?: Practice;
  location: ZambianLocation;
  startingPriceZmw: number;
  rating: number;
  reviewCount: number;
  supportedConsultationTypes: ConsultationType[];
  avatarInitials: string;
  imagePath: string; // Path in public directory
}

export const practices: Practice[] = [
  {
    id: "prac_lusaka_wellbeing",
    name: "Lusaka Integrated Wellness Clinic",
    location: {
      city: "Lusaka",
      area: "Woodlands",
      physicalAddress: "Plot 4921, Lake Road, Woodlands"
    },
    phone: "+260 97 1234567",
    email: "info@lusakawellness.demo.zm",
    isVerified: true
  },
  {
    id: "prac_copperbelt_care",
    name: "Copperbelt Health & Therapy Associates",
    location: {
      city: "Kitwe",
      area: "Riverside",
      physicalAddress: "Jambo Drive, Riverside, Kitwe"
    },
    phone: "+260 96 7654321",
    email: "kitwe@copperbelthealth.demo.zm",
    isVerified: true
  },
  {
    id: "prac_ndola_specialists",
    name: "Ndola Specialist Polyclinic",
    location: {
      city: "Ndola",
      area: "Kansenshi",
      physicalAddress: "Broadway Road, Kansenshi"
    },
    phone: "+260 95 9876543",
    email: "care@ndolaspecialists.demo.zm",
    isVerified: true
  }
];

export const practitioners: Practitioner[] = [
  {
    id: "doc_chileshe_01",
    fullName: "Mutale Chileshe",
    title: "Clinical Psychologist",
    credentials: ["HPCZ Registered", "MSc Clinical Psychology (UNZA)", "10+ Yrs Experience"],
    primarySpecialty: "MENTAL_HEALTH",
    secondarySpecialties: ["PSYCHIATRY"],
    isVerified: true,
    verificationBody: "Health Professions Council of Zambia (HPCZ Registry)",
    bio: "Warm, collaborative clinical psychologist specializing in stress management, cognitive behavioral therapy, anxiety, and family support. Practicing in Lusaka with both virtual and physical consultation options.",
    consultationStyle: "Empathetic, structured, culturally attuned, evidence-based CBT.",
    languages: ["English", "Bemba", "Nyanja"],
    practice: practices[0],
    location: { city: "Lusaka", area: "Woodlands" },
    startingPriceZmw: 400.0,
    rating: 4.9,
    reviewCount: 38,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"],
    avatarInitials: "MC",
    imagePath: "/images/images (2).jpeg"
  },
  {
    id: "doc_mwansa_02",
    fullName: "Dr. Thandiwe Mwansa",
    title: "Specialist Psychiatrist",
    credentials: ["MBChB", "MMed Psychiatry", "HPCZ Specialist Licensure"],
    primarySpecialty: "PSYCHIATRY",
    secondarySpecialties: ["MENTAL_HEALTH"],
    isVerified: true,
    verificationBody: "HPCZ Specialist Medical Board",
    bio: "Senior consulting psychiatrist focused on adult mental wellness, mood regulation, clinical depression, and holistic patient-centered treatment plans.",
    consultationStyle: "Clinical precision combined with deep compassion and thorough diagnostic assessment.",
    languages: ["English", "Nyanja"],
    practice: practices[0],
    location: { city: "Lusaka", area: "Rhodes Park" },
    startingPriceZmw: 550.0,
    rating: 4.8,
    reviewCount: 27,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"],
    avatarInitials: "TM",
    imagePath: "/images/images (1).jpeg"
  },
  {
    id: "doc_lungu_03",
    fullName: "Dr. Joseph Lungu",
    title: "General Practitioner",
    credentials: ["MBChB (CBU SOM)", "Postgrad Public Health", "HPCZ Registered"],
    primarySpecialty: "GENERAL_PRACTICE",
    isVerified: true,
    verificationBody: "HPCZ Medical Board",
    bio: "Experienced primary care physician dedicated to preventative health, lifestyle medicine, hypertension management, and general family consultations across the Copperbelt.",
    consultationStyle: "Thorough, approachable, focused on clear patient education.",
    languages: ["English", "Bemba", "Lamba"],
    practice: practices[1],
    location: { city: "Kitwe", area: "Riverside" },
    startingPriceZmw: 300.0,
    rating: 4.9,
    reviewCount: 52,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"],
    avatarInitials: "JL",
    imagePath: "/images/images.jpeg"
  },
  {
    id: "doc_banda_04",
    fullName: "Chileshe Banda",
    title: "Senior Physiotherapist",
    credentials: ["BSc Physiotherapy", "Sports Injury Cert", "HPCZ Registered"],
    primarySpecialty: "PHYSIOTHERAPY",
    isVerified: true,
    verificationBody: "HPCZ Allied Health Directorate",
    bio: "Specialist in musculoskeletal rehabilitation, chronic back pain recovery, postural alignment, and post-operative mobility therapy.",
    consultationStyle: "Active movement therapy, ergonomic coaching, hands-on rehab.",
    languages: ["English", "Nyanja", "Tonga"],
    practice: practices[2],
    location: { city: "Ndola", area: "Kansenshi" },
    startingPriceZmw: 350.0,
    rating: 4.7,
    reviewCount: 19,
    supportedConsultationTypes: ["IN_PERSON", "ONLINE"],
    avatarInitials: "CB",
    imagePath: "/images/images (3).jpeg"
  },
  {
    id: "doc_zulu_05",
    fullName: "Nalukui Zulu",
    title: "Clinical Nutritionist & Dietitian",
    credentials: ["BSc Dietetics & Human Nutrition", "Diabetes Educator Cert"],
    primarySpecialty: "NUTRITION",
    isVerified: true,
    verificationBody: "Nutritionists Association of Zambia / HPCZ",
    bio: "Certified clinical dietitian providing customized meal architectures for diabetes, metabolic health, digestive disorders, and maternal nutrition in Zambia.",
    consultationStyle: "Practical Zambian food-based nutrition plans, sustainable lifestyle habits.",
    languages: ["English", "Bemba", "Lozi"],
    practice: practices[0],
    location: { city: "Lusaka", area: "Kabulonga" },
    startingPriceZmw: 350.0,
    rating: 4.9,
    reviewCount: 31,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"],
    avatarInitials: "NZ",
    imagePath: "/images/images (4).jpeg"
  },
  {
    id: "doc_phiri_06",
    fullName: "Dr. Kondwani Phiri",
    title: "Dental Surgeon",
    credentials: ["BDS Dental Surgery", "HPCZ Dental Registry"],
    primarySpecialty: "DENTAL",
    isVerified: true,
    verificationBody: "HPCZ Dental Council",
    bio: "Gentle, modern dental surgery specializing in preventative dentistry, oral health assessments, restorative care, and emergency pain relief.",
    consultationStyle: "Gentle, anxiety-free dentistry with modern digital imaging.",
    languages: ["English", "Nyanja", "Tumbuka"],
    practice: practices[0],
    location: { city: "Lusaka", area: "Longacres" },
    startingPriceZmw: 450.0,
    rating: 4.8,
    reviewCount: 44,
    supportedConsultationTypes: ["IN_PERSON"],
    avatarInitials: "KP",
    imagePath: "/images/images (5).jpeg"
  }
];

export const services: HealthcareService[] = [
  {
    id: "srv_cbt_50",
    practitionerId: "doc_chileshe_01",
    name: "Individual Psychological Counselling",
    description: "Confidential 50-minute one-on-one session addressing stress, anxiety, life transitions, or mood concerns.",
    durationMinutes: 50,
    priceZmw: 400.0,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"]
  },
  {
    id: "srv_couples_cbt",
    practitionerId: "doc_chileshe_01",
    name: "Relationship & Couples Support",
    description: "Structured 75-minute joint consultation focusing on communication dynamics and relationship health.",
    durationMinutes: 75,
    priceZmw: 600.0,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"]
  },
  {
    id: "srv_psych_eval",
    practitionerId: "doc_mwansa_02",
    name: "Psychiatric Assessment & Medical Review",
    description: "Comprehensive clinical psychiatric diagnostic evaluation and medication review session.",
    durationMinutes: 60,
    priceZmw: 550.0,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"]
  },
  {
    id: "srv_gp_telehealth",
    practitionerId: "doc_lungu_03",
    name: "General Medical Consultation",
    description: "Full general health review, symptom assessment, chronic medication review, or laboratory referral.",
    durationMinutes: 30,
    priceZmw: 300.0,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"]
  },
  {
    id: "srv_physio_eval",
    practitionerId: "doc_banda_04",
    name: "Physiotherapy & Musculoskeletal Assessment",
    description: "Hands-on diagnostic assessment of joint, spine, or muscle impairment with targeted exercise prescription.",
    durationMinutes: 45,
    priceZmw: 350.0,
    supportedConsultationTypes: ["IN_PERSON", "ONLINE"]
  },
  {
    id: "srv_nutrition_consult",
    practitionerId: "doc_zulu_05",
    name: "Personalized Dietary Care Plan",
    description: "Nutritional assessment, blood sugar & dietary analysis, and customized meal plan for local Zambian foods.",
    durationMinutes: 45,
    priceZmw: 350.0,
    supportedConsultationTypes: ["ONLINE", "IN_PERSON"]
  },
  {
    id: "srv_dental_checkup",
    practitionerId: "doc_phiri_06",
    name: "Comprehensive Dental Examination",
    description: "Thorough oral hygiene check, digital charting, screening, and diagnostic plan.",
    durationMinutes: 40,
    priceZmw: 450.0,
    supportedConsultationTypes: ["IN_PERSON"]
  }
];
