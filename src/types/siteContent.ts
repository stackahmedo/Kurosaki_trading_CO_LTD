export interface Bilingual {
  ja: string;
  en: string;
}

export interface ThemeSettings {
  forest: string;
  deepForest: string;
  deepRed: string;
  charcoal: string;
  warmWhite: string;
}

export type SocialPlatform =
  | 'facebook'
  | 'instagram'
  | 'x'
  | 'linkedin'
  | 'youtube'
  | 'line'
  | 'tiktok'
  | 'website';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  label: string;
  url: string;
  enabled: boolean;
}

export interface GlobalSettings {
  companyName: Bilingual;
  shortName: Bilingual;
  logoUrl: string;
  faviconUrl: string;
  footerDescription: Bilingual;
  address: Bilingual;
  phone: string;
  phoneDisplay: Bilingual;
  email: string;
  businessHours: Bilingual;
  copyright: string;
  socialLinks: SocialLink[];
}

export interface ProcessStepItem {
  id: string;
  title: Bilingual;
  description?: Bilingual;
}

export interface FeatureCardItem {
  id: string;
  title: Bilingual;
  description: Bilingual;
}

export interface FaqItem {
  id: string;
  question: Bilingual;
  answer: Bilingual;
}

export interface HomePageContent {
  hero: {
    badge: Bilingual;
    title: Bilingual;
    subtitle: Bilingual;
    primaryCta: Bilingual;
    secondaryCta: Bilingual;
    imageUrl: string;
  };
  processSteps: ProcessStepItem[];
  companyIntro: {
    title: Bilingual;
    description: Bilingual;
    buttonLabel: Bilingual;
    imageUrl: string;
  };
  whyChoose: {
    title: Bilingual;
    subtitle: Bilingual;
    features: FeatureCardItem[];
  };
  coreServices: {
    badge: Bilingual;
    title: Bilingual;
    description: Bilingual;
    services: FeatureCardItem[];
  };
  industries: {
    title: Bilingual;
    description: Bilingual;
    items: Bilingual[];
  };
  sourcing: {
    title: Bilingual;
    description: Bilingual;
    buttonLabel: Bilingual;
    checklist: Bilingual[];
  };
  productCategories: {
    items: FeatureCardItem[];
    ctaTitle: Bilingual;
    ctaDescription: Bilingual;
    ctaButton: Bilingual;
  };
  deliveryProcess: {
    title: Bilingual;
    steps: FeatureCardItem[];
  };
  qualityPolicy: {
    title: Bilingual;
    description: Bilingual;
    imageUrl: string;
    checklist: Bilingual[];
    note: Bilingual;
  };
  globalNetwork: {
    title: Bilingual;
    description: Bilingual;
    mapImageUrl: string;
  };
  quoteInfo: {
    title: Bilingual;
    description: Bilingual;
    checklist: Bilingual[];
    buttonLabel: Bilingual;
  };
  faq: {
    title: Bilingual;
    items: FaqItem[];
  };
  finalCta: {
    title: Bilingual;
    buttonLabel: Bilingual;
  };
}

export interface CompanyInfoRow {
  id: string;
  label: Bilingual;
  value: Bilingual;
  type?: 'text' | 'email' | 'phone';
}

export interface AboutPageContent {
  title: Bilingual;
  message: {
    badge: Bilingual;
    heading: Bilingual;
    paragraphs: Bilingual[];
    role: Bilingual;
    presidentName: Bilingual;
  };
  profile: {
    badge: Bilingual;
    heading: Bilingual;
    rows: CompanyInfoRow[];
  };
}

export interface SolutionItem {
  id: string;
  title: Bilingual;
  description: Bilingual;
  benefits: Bilingual[];
  imageUrl: string;
}

export interface SolutionsPageContent {
  title: Bilingual;
  subtitle: Bilingual;
  items: SolutionItem[];
}

export interface ProductItem {
  id: string;
  category: Bilingual;
  name: Bilingual;
  origin: Bilingual;
  storage: Bilingual;
  wholesale: Bilingual;
  imageUrl: string;
  description: Bilingual;
}

export interface ProductsPageContent {
  title: Bilingual;
  subtitle: Bilingual;
  categories: Bilingual[];
  items: ProductItem[];
}

export interface QualityPageContent {
  title: Bilingual;
  subtitle: Bilingual;
  processTitle: Bilingual;
  processes: FeatureCardItem[];
  coldChain: {
    title: Bilingual;
    paragraphs: Bilingual[];
    imageUrl: string;
  };
  cta: {
    title: Bilingual;
    description: Bilingual;
    buttonLabel: Bilingual;
  };
}

export interface SustainabilityKpi {
  id: string;
  label: Bilingual;
  value: string;
  description: Bilingual;
}

export interface SustainabilityPageContent {
  title: Bilingual;
  subtitle: Bilingual;
  initiativesTitle: Bilingual;
  initiatives: FeatureCardItem[];
  targetsTitle: Bilingual;
  kpis: SustainabilityKpi[];
}

export interface NewsItem {
  id: string;
  date: string;
  categoryId: string;
  title: Bilingual;
  excerpt: Bilingual;
  content: Bilingual;
}

export interface NewsCategory {
  id: string;
  label: Bilingual;
}

export interface NewsPageContent {
  title: Bilingual;
  categories: NewsCategory[];
  items: NewsItem[];
}

export interface ContactPageContent {
  title: Bilingual;
  subtitle: Bilingual;
  inquiryTypes: Bilingual[];
  submittedTitle: Bilingual;
  submittedMessage: Bilingual;
}

export interface SitemapPageContent {
  badge: string;
  title: Bilingual;
  subtitle: Bilingual;
  ctaTitle: Bilingual;
  ctaDescription: Bilingual;
  ctaButton: Bilingual;
}

export interface ContactInquiry {
  id: string;
  createdAt: string;
  read: boolean;
  inquiryType: string;
  companyName: string;
  department: string;
  contactPerson: string;
  country: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

export type BuiltInPageKey =
  | 'home'
  | 'about'
  | 'solutions'
  | 'products'
  | 'quality'
  | 'sustainability'
  | 'news'
  | 'contact'
  | 'sitemap';

export interface CustomPageSection {
  id: string;
  heading: Bilingual;
  body: Bilingual;
  imageUrl: string;
}

export interface ManagedPage {
  id: string;
  builtInKey?: BuiltInPageKey;
  path: string;
  navLabel: Bilingual;
  enabled: boolean;
  showInHeader: boolean;
  showInFooter: boolean;
  footerGroup: 'corporate' | 'business' | 'bottom' | 'none';
  title?: Bilingual;
  subtitle?: Bilingual;
  heroImageUrl?: string;
  sections?: CustomPageSection[];
}

export interface SiteContent {
  theme: ThemeSettings;
  global: GlobalSettings;
  pages: ManagedPage[];
  home: HomePageContent;
  about: AboutPageContent;
  solutions: SolutionsPageContent;
  products: ProductsPageContent;
  quality: QualityPageContent;
  sustainability: SustainabilityPageContent;
  news: NewsPageContent;
  contact: ContactPageContent;
  sitemap: SitemapPageContent;
}
