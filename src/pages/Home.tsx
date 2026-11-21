import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Search,
  Factory,
  ShieldCheck,
  Ship,
  Utensils,
  CheckCircle2,
  Globe,
  ArrowRight,
  Package,
  Apple,
  Award,
  Home as HomeIcon,
  HeartPulse,
  Building,
  Building2,
  Truck,
  Store,
  ShoppingCart,
  PackageSearch,
  MonitorSmartphone,
  FileText,
  ChevronDown,
} from 'lucide-react';
import { motion } from 'motion/react';

const WHY_ICONS = [Package, Search, Building2, ShieldCheck];
const SERVICE_ICONS = [Sprout, Search, Factory, ShieldCheck, Ship, Utensils];
const INDUSTRY_ICONS = [Utensils, Building, Truck, Store, ShoppingCart, PackageSearch, Factory, MonitorSmartphone];
const CATEGORY_ICONS = [Apple, Award, HomeIcon, HeartPulse, Globe, Package];

export default function Home() {
  const { t } = useLanguage();
  const { content } = useSiteContent();
  const home = content.home;

  return (
    <div>
      {/* SECTION 1 - HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-warmWhite overflow-hidden shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 xl:col-span-7"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-[1px] w-6 bg-deepRed"></div>
                <span className="text-deepRed text-[11px] font-bold uppercase tracking-[0.2em]">
                  {t(home.hero.badge.ja, home.hero.badge.en)}
                </span>
              </div>

              <h1 className="text-[32px] md:text-5xl lg:text-[44px] font-serif text-charcoal leading-[1.3] mb-8 tracking-tight whitespace-pre-line">
                {t(home.hero.title.ja, home.hero.title.en)}
              </h1>

              <div className="pr-4 md:pr-12 mb-10 max-w-xl">
                <p className="text-charcoal/80 text-[15px] md:text-[16px] leading-[1.8]">
                  {t(home.hero.subtitle.ja, home.hero.subtitle.en)}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/solutions" variant="primary" size="lg" className="w-full sm:w-auto h-12 px-8">
                  {t(home.hero.primaryCta.ja, home.hero.primaryCta.en)}
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8">
                  {t(home.hero.secondaryCta.ja, home.hero.secondaryCta.en)}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-5 xl:col-span-5 flex justify-end"
            >
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[460px] bg-lightGray overflow-hidden rounded-sm">
                <img
                  src={home.hero.imageUrl}
                  alt="Food Supply Chain"
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - BUSINESS PROCESS */}
      <section className="py-12 bg-forest text-white shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-6 lg:gap-0">
              {home.processSteps.map((step, idx) => (
                <div key={step.id} className="flex-1 flex lg:items-center">
                  <div className="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-3 w-full group">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-[13px] font-bold group-hover:bg-white group-hover:text-forest transition-colors">
                      0{idx + 1}
                    </div>
                    <span className="text-[14px] lg:text-[13px] font-bold tracking-tighter lg:text-center">
                      {t(step.title.ja, step.title.en)}
                    </span>
                  </div>
                  {idx < home.processSteps.length - 1 && (
                    <div className="hidden lg:block h-[1px] bg-white/20 w-full mx-4 mt-[-36px]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - COMPANY INTRODUCTION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-[36px] font-bold mb-8 text-charcoal leading-[1.4] whitespace-pre-line">
                {t(home.companyIntro.title.ja, home.companyIntro.title.en)}
              </h2>
              <div className="w-12 h-1 bg-deepRed mb-8"></div>
              <p className="text-charcoal/80 leading-[1.8] mb-10 text-[16px]">
                {t(home.companyIntro.description.ja, home.companyIntro.description.en)}
              </p>
              <Button to="/about" variant="outline" className="h-12 px-8 border border-borderGray">
                {t(home.companyIntro.buttonLabel.ja, home.companyIntro.buttonLabel.en)}
              </Button>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-lightGray rounded-sm overflow-hidden">
                <img
                  src={home.companyIntro.imageUrl}
                  alt="Business Meeting"
                  className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 hover:grayscale-0 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3.5 - WHY CHOOSE KUROSAKI TRADING */}
      <section className="py-24 lg:py-32 bg-lightGray border-t border-borderGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
              {t(home.whyChoose.title.ja, home.whyChoose.title.en)}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto mb-8"></div>
            <p className="text-[16px] text-charcoal/80 max-w-3xl mx-auto leading-[1.8] whitespace-pre-line">
              {t(home.whyChoose.subtitle.ja, home.whyChoose.subtitle.en)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.whyChoose.features.map((feature, idx) => {
              const Icon = WHY_ICONS[idx % WHY_ICONS.length];
              return (
                <div key={feature.id} className="bg-white border border-borderGray p-6 lg:p-8 flex flex-col items-start">
                  <Icon className="w-8 h-8 text-forest mb-6" strokeWidth={1.5} />
                  <h3 className="text-[18px] font-bold text-charcoal mb-4">
                    {t(feature.title.ja, feature.title.en)}
                  </h3>
                  <p className="text-[14px] text-charcoal/70 leading-[1.7]">
                    {t(feature.description.ja, feature.description.en)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - CORE SERVICES */}
      <section className="py-24 lg:py-32 bg-white border-t border-borderGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h3 className="text-[12px] font-bold text-deepRed uppercase tracking-[0.2em] mb-4">
                {t(home.coreServices.badge.ja, home.coreServices.badge.en)}
              </h3>
              <h2 className="text-3xl lg:text-[36px] font-serif text-forest leading-[1.4] mb-8 whitespace-pre-line">
                {t(home.coreServices.title.ja, home.coreServices.title.en)}
              </h2>
              <p className="text-[16px] text-charcoal/80 leading-[1.8] pr-4">
                {t(home.coreServices.description.ja, home.coreServices.description.en)}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {home.coreServices.services.map((sol, idx) => {
                const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
                return (
                  <Link
                    key={sol.id}
                    to={`/solutions#${idx}`}
                    className="group bg-white p-6 md:p-8 border border-borderGray flex flex-col hover:border-forest transition-colors h-[260px]"
                  >
                    <div className="flex-grow">
                      <div className="w-7 h-7 mb-6 text-forest">
                        <Icon strokeWidth={1.5} className="w-full h-full" />
                      </div>
                      <h4 className="text-[18px] lg:text-[20px] font-bold text-forest mb-4">
                        {t(sol.title.ja, sol.title.en)}
                      </h4>
                      <p className="text-[14px] text-charcoal/70 leading-[1.7] line-clamp-3">
                        {t(sol.description.ja, sol.description.en)}
                      </p>
                    </div>
                    <span className="text-[13px] font-medium text-deepRed mt-4 flex items-center group-hover:underline">
                      {t('詳しく見る', 'Learn More')} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5 - INDUSTRIES WE SUPPORT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
              {t(home.industries.title.ja, home.industries.title.en)}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto mb-8"></div>
            <p className="text-[16px] text-charcoal/80 max-w-3xl mx-auto leading-[1.8]">
              {t(home.industries.description.ja, home.industries.description.en)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {home.industries.items.map((industry, idx) => {
              const Icon = INDUSTRY_ICONS[idx % INDUSTRY_ICONS.length];
              return (
                <div
                  key={idx}
                  className="bg-lightGray/30 border border-borderGray p-5 flex items-center space-x-4 hover:border-forest transition-colors"
                >
                  <Icon className="w-6 h-6 text-forest shrink-0" strokeWidth={1.5} />
                  <span className="text-[15px] font-bold text-charcoal">
                    {t(industry.ja, industry.en)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4.75 - SOURCING CAPABILITIES */}
      <section className="py-24 lg:py-32 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
                {t(home.sourcing.title.ja, home.sourcing.title.en)}
              </h2>
              <div className="w-12 h-1 bg-deepRed mb-8"></div>
              <p className="text-[16px] text-charcoal/80 leading-[1.8] mb-10">
                {t(home.sourcing.description.ja, home.sourcing.description.en)}
              </p>
              <Button to="/contact?type=sourcing" variant="primary" className="h-12 px-8 shadow-none border border-forest">
                {t(home.sourcing.buttonLabel.ja, home.sourcing.buttonLabel.en)}
              </Button>
            </div>

            <div className="bg-white border border-borderGray p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {home.sourcing.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-forest mt-0.5 mr-3 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[15px] text-charcoal/80 leading-[1.6]">{t(item.ja, item.en)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - PRODUCT CATEGORIES */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {home.productCategories.items.map((cat, idx) => {
              const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
              return (
                <Link
                  key={cat.id}
                  to="/products"
                  className="group bg-white p-8 lg:p-10 flex flex-col items-start border border-borderGray hover:border-forest transition-colors text-left shadow-sm rounded-none"
                >
                  <Icon className="w-7 h-7 mb-6 text-forest" strokeWidth={1.5} />
                  <h3 className="text-[18px] lg:text-[20px] font-bold text-charcoal mb-4">
                    {t(cat.title.ja, cat.title.en)}
                  </h3>
                  <p className="text-[14px] text-charcoal/70 leading-[1.7] mb-6 flex-grow">
                    {t(cat.description.ja, cat.description.en)}
                  </p>
                  <span className="text-[13px] font-medium text-deepRed flex items-center group-hover:underline">
                    {t('詳しく見る', 'Learn More')} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="border border-borderGray p-10 lg:p-16 text-center bg-white rounded-none">
            <h3 className="text-[24px] lg:text-[28px] font-serif font-bold text-charcoal mb-6">
              {t(home.productCategories.ctaTitle.ja, home.productCategories.ctaTitle.en)}
            </h3>
            <p className="text-[16px] text-charcoal/80 mb-10 max-w-2xl mx-auto leading-[1.8]">
              {t(home.productCategories.ctaDescription.ja, home.productCategories.ctaDescription.en)}
            </p>
            <Button to="/contact?type=sourcing" variant="primary" className="h-12 px-8 shadow-none border border-forest">
              {t(home.productCategories.ctaButton.ja, home.productCategories.ctaButton.en)}
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6 - DELIVERY PROCESS */}
      <section className="py-24 lg:py-32 bg-white border-t border-borderGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
              {t(home.deliveryProcess.title.ja, home.deliveryProcess.title.en)}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto"></div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-borderGray z-0"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 relative z-10">
              {home.deliveryProcess.steps.map((step, idx) => (
                <div key={step.id} className="flex-1 flex flex-col lg:items-center relative group">
                  <div className="flex flex-row lg:flex-col items-start lg:items-center w-full">
                    <div className="w-14 h-14 bg-white border border-borderGray text-forest flex items-center justify-center text-[18px] font-serif font-bold rounded-full mb-0 lg:mb-6 shrink-0 group-hover:border-forest group-hover:bg-forest group-hover:text-white transition-all z-10 shadow-sm">
                      0{idx + 1}
                    </div>

                    <div className="ml-6 lg:ml-0 lg:text-center w-full">
                      <h4 className="text-[18px] font-bold text-charcoal mb-3">{t(step.title.ja, step.title.en)}</h4>
                      <p className="text-[14px] text-charcoal/70 leading-[1.7]">
                        {t(step.description.ja, step.description.en)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - QUALITY ASSURANCE */}
      <section className="py-24 lg:py-32 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 border border-borderGray bg-white p-2">
                <img
                  src={home.qualityPolicy.imageUrl}
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-8 text-charcoal leading-[1.4]">
                {t(home.qualityPolicy.title.ja, home.qualityPolicy.title.en)}
              </h2>
              <div className="w-12 h-1 bg-deepRed mb-8"></div>

              <p className="text-[16px] text-charcoal/80 leading-[1.8] mb-10 whitespace-pre-line">
                {t(home.qualityPolicy.description.ja, home.qualityPolicy.description.en)}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {home.qualityPolicy.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-forest mt-0.5 mr-3 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[15px] text-charcoal/80 leading-[1.6]">{t(item.ja, item.en)}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-8 bg-white border border-borderGray">
                <p className="text-[14px] text-charcoal/70 leading-[1.6]">
                  {t(home.qualityPolicy.note.ja, home.qualityPolicy.note.en)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - GLOBAL NETWORK */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
              {t(home.globalNetwork.title.ja, home.globalNetwork.title.en)}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto mb-8"></div>
            <p className="text-[16px] text-charcoal/80 max-w-3xl mx-auto leading-[1.8]">
              {t(home.globalNetwork.description.ja, home.globalNetwork.description.en)}
            </p>
          </div>

          <div
            className="relative w-full max-w-5xl mx-auto h-[400px] lg:h-[600px] bg-no-repeat bg-contain bg-center opacity-60"
            style={{ backgroundImage: `url('${home.globalNetwork.mapImageUrl}')` }}
          >
            <div className="absolute bottom-4 left-4 lg:bottom-10 lg:left-10 bg-white/90 p-4 border border-borderGray backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-deepRed rounded-full shadow-[0_0_0_2px_rgba(200,33,43,0.2)]"></div>
                <span className="text-[12px] font-medium text-charcoal uppercase tracking-wider">
                  {t('日本本社', 'Japan HQ')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-forest rounded-full"></div>
                <span className="text-[12px] font-medium text-charcoal uppercase tracking-wider">
                  {t('提携地域', 'Partner Regions')}
                </span>
              </div>
            </div>

            <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-forest rounded-full"></div>
            <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-forest rounded-full"></div>
            <div className="absolute top-[25%] left-[50%] w-3 h-3 bg-forest rounded-full"></div>
            <div className="absolute top-[60%] left-[80%] w-4 h-4 bg-deepRed rounded-full shadow-[0_0_0_4px_rgba(200,33,43,0.2)]"></div>
            <div className="absolute top-[70%] left-[85%] w-3 h-3 bg-forest rounded-full"></div>
            <div className="absolute top-[35%] left-[75%] w-3 h-3 bg-forest rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SECTION 9 - INFORMATION FOR QUOTE */}
      <section className="py-24 lg:py-32 bg-lightGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-borderGray p-8 lg:p-12">
            <div className="text-center mb-10">
              <FileText className="w-10 h-10 text-charcoal/30 mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="font-serif text-2xl lg:text-[28px] font-bold mb-4 text-charcoal">
                {t(home.quoteInfo.title.ja, home.quoteInfo.title.en)}
              </h2>
              <p className="text-[15px] text-charcoal/70 leading-[1.8]">
                {t(home.quoteInfo.description.ja, home.quoteInfo.description.en)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10 border-t border-borderGray pt-8">
              {home.quoteInfo.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-forest mt-0.5 mr-3 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[15px] text-charcoal/80 leading-[1.6]">{t(item.ja, item.en)}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button to="/contact?type=quote" variant="primary" className="h-12 px-10 shadow-none border border-forest">
                {t(home.quoteInfo.buttonLabel.ja, home.quoteInfo.buttonLabel.en)}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 - FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal">
              {t(home.faq.title.ja, home.faq.title.en)}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto"></div>
          </div>

          <div className="space-y-0 border-t border-borderGray">
            {home.faq.items.map((faq) => (
              <details key={faq.id} className="group border-b border-borderGray">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none py-6 text-charcoal hover:text-forest transition-colors">
                  <span className="text-[16px] pr-8">{t(faq.question.ja, faq.question.en)}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-charcoal/40" />
                  </span>
                </summary>
                <div className="text-charcoal/70 text-[15px] leading-[1.8] pb-6 pt-0">
                  {t(faq.answer.ja, faq.answer.en)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - FINAL CTA */}
      <section className="py-24 lg:py-32 bg-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-[36px] font-bold mb-8 leading-[1.4]">
            {t(home.finalCta.title.ja, home.finalCta.title.en)}
          </h2>
          <Button to="/contact" variant="primary" size="lg" className="bg-white text-forest hover:bg-lightGray border-none h-12 px-10 font-bold">
            {t(home.finalCta.buttonLabel.ja, home.finalCta.buttonLabel.en)}
          </Button>
        </div>
      </section>
    </div>
  );
}
