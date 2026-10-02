export type ServiceId = 
  | 'creation-amenagement'
  | 'entretien-jardin'
  | 'terrasses-allees'
  | 'clotures-murets'
  | 'arrosage-automatique'
  | 'elagage-abattage';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  taxCreditEligible?: boolean;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  serviceId: ServiceId;
  serviceName: string;
  city: string;
  postalCode: string;
  year: string;
  description: string;
  beforeImage?: string;
  afterImage: string;
  duration?: string;
  materials?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  content: string;
  serviceProvided: string;
  verifiedGoogle: boolean;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  region: string;
  googleRating: number;
  googleReviewCount: number;
  googleMapsUrl: string;
  facebookUrl: string;
  workingHoursWeekday: string;
  workingHoursSaturday: string;
  taxCreditRate: number;
}

export interface QuoteFormData {
  serviceIds: ServiceId[];
  clientType: 'particulier' | 'professionnel' | 'copropriete';
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  postalCode: string;
  approximateAreaM2: string;
  timeline: 'urgent' | '1-2-mois' | 'printemps' | 'projet-en-reflexion';
  description: string;
  hasPhoto: boolean;
  photoUrl?: string;
}
