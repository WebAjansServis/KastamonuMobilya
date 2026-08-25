export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'mutfak' | 'gomme-dolap' | 'vestiyer' | 'banyo' | 'ozel-mobilya' | 'tamirat';
  categoryLabel: string;
  image: string;
  description: string;
  location?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  platform: 'Google' | 'Yandex';
  rating: number;
  comment: string;
  date: string;
  serviceType?: string;
  verified: boolean;
}

export interface ServiceArea {
  name: string;
  desc: string;
  distance: string;
  popularServices: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormState {
  name: string;
  phone: string;
  serviceType: string;
  dimensions?: string;
  materialPreference?: string;
  notes: string;
}
