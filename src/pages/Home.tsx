import React from 'react';
import { useLanguage } from '../context/LanguageContext';
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
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* SECTION 1 - HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-warmWhite overflow-hidden shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 xl:col-span-7"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-[1px] w-6 bg-deepRed"></div>
                <span className="text-deepRed text-[11px] font-bold uppercase tracking-[0.2em]">
                  {language === 'ja' ? '総合食品ソリューション' : 'INTEGRATED FOOD SOLUTIONS'}
                </span>
              </div>
              
              <h1 className="text-[32px] md:text-5xl lg:text-[44px] font-serif text-charcoal leading-[1.3] mb-8 tracking-tight">
                {language === 'ja' ? (
                  <>農場から食卓まで、<br />すべてのソリューションを。</>
                ) : (
                  <>From Farm to Kitchen,<br />All Solutions.</>
                )}
              </h1>

              <div className="pr-4 md:pr-12 mb-10 max-w-xl">
                <p className="text-charcoal/80 text-[15px] md:text-[16px] leading-[1.8]">
                  {language === 'ja' ? (
                    '農業、生産、調達、加工、品質管理、物流まで。食のサプライチェーンを一貫して支えます。'
                  ) : (
                    'We support the entire food supply chain, from farming and sourcing to processing, quality control, logistics, and delivery.'
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/solutions" variant="primary" size="lg" className="w-full sm:w-auto h-12 px-8">
                  {language === 'ja' ? '事業内容を見る' : 'Explore Our Solutions'}
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8">
                  {language === 'ja' ? 'お問い合わせ' : 'Contact Us'}
                </Button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-5 xl:col-span-5 flex justify-end"
            >
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[460px] bg-lightGray overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
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
              {[
                { icon: Sprout, ja: '農業・生産', en: 'Farming' },
                { icon: Search, ja: '商品調達', en: 'Product Sourcing' },
                { icon: Factory, ja: '製造・加工', en: 'Manufacturing' },
                { icon: ShieldCheck, ja: '包装・品質管理', en: 'Packaging & QC' },
                { icon: Ship, ja: '物流・輸出入', en: 'Logistics' },
                { icon: Utensils, ja: '業務用食品供給', en: 'Kitchen Supply' }
              ].map((step, idx) => (
                <div key={idx} className="flex-1 flex lg:items-center">
                  <div className="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-3 w-full group">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-[13px] font-bold group-hover:bg-white group-hover:text-forest transition-colors">
                      0{idx + 1}
                    </div>
                    <span className="text-[14px] lg:text-[13px] font-bold tracking-tighter lg:text-center">
                      {t(step.ja, step.en)}
                    </span>
                  </div>
                  {idx < 5 && (
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
              <h2 className="font-serif text-3xl md:text-[36px] font-bold mb-8 text-charcoal leading-[1.4]">
                {t('食の未来を支える、\n信頼のパートナー', 'A Trusted Partner\nSupporting the Future of Food')}
              </h2>
              <div className="w-12 h-1 bg-deepRed mb-8"></div>
              <p className="text-charcoal/80 leading-[1.8] mb-10 text-[16px]">
                {t(
                  '国内外の生産者、メーカー、物流事業者と連携し、商品調達から業務用供給までを一貫して支援します。',
                  'By collaborating with domestic and international producers, manufacturers, and logistics operators, we provide integrated support from product sourcing to professional food supply.'
                )}
              </p>
              <Button to="/about" variant="outline" className="h-12 px-8 border border-borderGray">
                {t('会社概要を見る', 'View Company Profile')}
              </Button>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-lightGray rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
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
              {t('黒崎トレーディングが選ばれる理由', 'Why Choose Kurosaki Trading')}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto mb-8"></div>
            <p className="text-[16px] text-charcoal/80 max-w-3xl mx-auto leading-[1.8] whitespace-pre-line">
              {t(
                '商品調達から加工、包装、輸入、保管、配送まで。\nお客様の事業に必要な食のサプライチェーンを一つの窓口で支援します。',
                'From product sourcing to processing, packaging, import, storage, and delivery.\nWe support your food supply chain through a single contact point.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Package,
                titleJa: '一貫した対応',
                titleEn: 'Integrated Process',
                descJa: '商品調達、加工、包装、輸入、保管、配送まで、複数の工程を一つの窓口で支援します。',
                descEn: 'We support multiple processes from sourcing to delivery through a single window.'
              },
              {
                icon: Search,
                titleJa: '国内外の調達力',
                titleEn: 'Global Sourcing',
                descJa: 'お客様の条件に合わせて、国内外のメーカーやサプライヤーから適切な商品を調達します。',
                descEn: 'We source appropriate products from domestic and global suppliers based on your requirements.'
              },
              {
                icon: Building2,
                titleJa: '法人ニーズへの柔軟な対応',
                titleEn: 'Flexible for B2B Needs',
                descJa: '商品仕様、数量、包装形態、納期など、業務用・卸売向けのご要望に対応します。',
                descEn: 'We accommodate B2B and wholesale requests regarding specs, quantity, packaging, and delivery.'
              },
              {
                icon: ShieldCheck,
                titleJa: '品質管理',
                titleEn: 'Quality Control',
                descJa: 'サプライヤー選定から入荷、保管、配送まで、各工程で品質と安全を確認します。',
                descEn: 'We verify quality and safety at each stage from supplier selection to delivery.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-borderGray p-6 lg:p-8 flex flex-col items-start">
                <feature.icon className="w-8 h-8 text-forest mb-6" strokeWidth={1.5} />
                <h3 className="text-[18px] font-bold text-charcoal mb-4">
                  {t(feature.titleJa, feature.titleEn)}
                </h3>
                <p className="text-[14px] text-charcoal/70 leading-[1.7]">
                  {t(feature.descJa, feature.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - CORE SERVICES */}
      <section className="py-24 lg:py-32 bg-white border-t border-borderGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h3 className="text-[12px] font-bold text-deepRed uppercase tracking-[0.2em] mb-4">
                {t('一貫した供給ネットワーク', 'Integrated Supply Network')}
              </h3>
              <h2 className="text-3xl lg:text-[36px] font-serif text-forest leading-[1.4] mb-8">
                {t('一つの信頼で、\nすべてをつなぐ。', 'One Source.\nEndless Solutions.')}
              </h2>
              <p className="text-[16px] text-charcoal/80 leading-[1.8] pr-4">
                {t(
                  '国内外の生産者と業務用厨房をつなぎ、調達から供給までの品質を一貫して管理します。',
                  'We connect domestic and international producers with professional kitchens, ensuring consistent quality management from sourcing to supply.'
                )}
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {[
                { icon: Sprout, ja: '農業・生産', en: 'Farming & Production', descJa: '自社農場及び契約農家との連携により、安全で高品質な原材料の安定供給を実現します。', descEn: 'Partnering with contract farmers to produce sustainable, high-quality agricultural products.' },
                { icon: Search, ja: '商品調達', en: 'Product Sourcing', descJa: '世界中のネットワークを活かし、最適な食材を安定的に調達。', descEn: 'Leveraging our global network to stably source optimal ingredients.' },
                { icon: Factory, ja: '製造・加工', en: 'Manufacturing & Processing', descJa: '最新設備の自社・提携工場で、顧客ニーズに合わせた加工を実施。', descEn: 'Processing tailored to customer needs at our state-of-the-art affiliated factories.' },
                { icon: ShieldCheck, ja: '包装・品質管理', en: 'Packaging & QC', descJa: '最新の設備による徹底した衛生管理と、厳格な検査基準に基づく品質保証体制を構築。', descEn: 'Packaging tech that preserves freshness and safety, paired with strict international quality inspections.' },
                { icon: Ship, ja: '物流・輸出入', en: 'Logistics & Trade', descJa: '国内外のネットワークを駆使し、コールドチェーンを遵守した迅速かつ確実な物流を提供します。', descEn: 'Cold chain with strict temperature control and smooth trade procedures.' },
                { icon: Utensils, ja: '業務用食品供給', en: 'Kitchen Supply', descJa: '外食・ホテル・中食産業へ、必要な食材を必要な形でお届け。', descEn: 'Delivering necessary ingredients in required formats to restaurants, hotels, and catering industries.' },
              ].map((sol, idx) => (
                <Link key={idx} to={`/solutions#${idx}`} className="bg-white p-6 md:p-8 border border-borderGray flex flex-col hover:border-forest transition-colors h-[260px]">
                  <div className="flex-grow">
                    <div className="w-7 h-7 mb-6 text-forest">
                      <sol.icon strokeWidth={1.5} className="w-full h-full" />
                    </div>
                    <h4 className="text-[18px] lg:text-[20px] font-bold text-forest mb-4">{t(sol.ja, sol.en)}</h4>
                    <p className="text-[14px] text-charcoal/70 leading-[1.7] line-clamp-3">
                      {t(sol.descJa, sol.descEn)}
                    </p>
                  </div>
                  <span className="text-[13px] font-medium text-deepRed mt-4 flex items-center group-hover:underline">
                    {t('詳しく見る', 'Learn More')} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4.5 - INDUSTRIES WE SUPPORT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
              {t('さまざまな事業者の食材調達を支援します', 'Industries We Support')}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto mb-8"></div>
            <p className="text-[16px] text-charcoal/80 max-w-3xl mx-auto leading-[1.8]">
              {t(
                '飲食店、食品小売、卸売、製造事業者など、幅広い法人のお客様に商品調達と供給サービスを提供します。',
                'We provide product sourcing and supply services to a wide range of corporate clients, including restaurants, food retailers, wholesalers, and manufacturers.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Utensils, titleJa: 'レストラン・飲食店', titleEn: 'Restaurants & Dining' },
              { icon: Building, titleJa: 'ホテル・宿泊施設', titleEn: 'Hotels & Accommodation' },
              { icon: Truck, titleJa: 'ケータリング事業者', titleEn: 'Catering Businesses' },
              { icon: Store, titleJa: '食品小売店', titleEn: 'Food Retailers' },
              { icon: ShoppingCart, titleJa: 'スーパーマーケット', titleEn: 'Supermarkets' },
              { icon: PackageSearch, titleJa: '食品卸売事業者', titleEn: 'Food Wholesalers' },
              { icon: Factory, titleJa: '食品メーカー', titleEn: 'Food Manufacturers' },
              { icon: MonitorSmartphone, titleJa: 'EC・通販事業者', titleEn: 'E-commerce & Mail Order' },
            ].map((industry, idx) => (
              <div key={idx} className="bg-lightGray/30 border border-borderGray p-5 flex items-center space-x-4 hover:border-forest transition-colors">
                <industry.icon className="w-6 h-6 text-forest shrink-0" strokeWidth={1.5} />
                <span className="text-[15px] font-bold text-charcoal">
                  {t(industry.titleJa, industry.titleEn)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4.75 - SOURCING CAPABILITIES */}
      <section className="py-24 lg:py-32 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
                {t('ご要望に合わせた商品調達', 'Customized Product Sourcing')}
              </h2>
              <div className="w-12 h-1 bg-deepRed mb-8"></div>
              <p className="text-[16px] text-charcoal/80 leading-[1.8] mb-10">
                {t(
                  '商品名が分からない場合でも、用途、予算、数量、希望納期などをお知らせいただければ、条件に合う商品をご提案します。',
                  'Even if you don\'t know the specific product name, let us know your intended use, budget, quantity, and desired delivery date, and we will propose products that meet your criteria.'
                )}
              </p>
              <Button to="/contact?type=sourcing" variant="primary" className="h-12 px-8 shadow-none border border-forest">
                {t('商品調達について相談する', 'Consult About Sourcing')}
              </Button>
            </div>
            
            <div className="bg-white border border-borderGray p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  { ja: '希望商品・カテゴリー', en: 'Desired Product/Category' },
                  { ja: '原産国', en: 'Country of Origin' },
                  { ja: '内容量・包装仕様', en: 'Volume & Packaging Specs' },
                  { ja: 'ケース単位・業務用容量', en: 'Case Units & Commercial Sizes' },
                  { ja: '最低発注数量', en: 'Minimum Order Quantity' },
                  { ja: '希望納期', en: 'Desired Delivery Date' },
                  { ja: '保管温度', en: 'Storage Temperature' },
                  { ja: 'ラベル・表示対応', en: 'Labeling & Display Support' },
                  { ja: 'プライベートブランド相談', en: 'Private Brand Consultation' },
                  { ja: '輸入・国内配送相談', en: 'Import & Domestic Delivery' },
                ].map((item, idx) => (
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
            {[
              {
                icon: Apple,
                enTitle: 'Food & Grocery',
                jaTitle: '食品・食料品',
                enDesc: 'Japanese and Asian food products, pantry staples, and specialty grocery items for retail and wholesale.',
                jaDesc: '小売および卸売向けの日本・アジア食品、パントリーの必需品、特産食料品。'
              },
              {
                icon: Award,
                enTitle: 'Halal Products',
                jaTitle: 'ハラール製品',
                enDesc: 'Certified halal food, cosmetics, and household goods for Muslim consumers and international markets.',
                jaDesc: 'ムスリムの消費者や国際市場向けの、ハラール認証を受けた食品、化粧品、日用品。'
              },
              {
                icon: HomeIcon,
                enTitle: 'Household Goods',
                jaTitle: '日用品・生活雑貨',
                enDesc: 'Quality home goods including kitchenware, cleaning products, storage solutions, and living essentials.',
                jaDesc: 'キッチン用品、清掃用品、収納、生活必需品などの高品質な家庭用品。'
              },
              {
                icon: HeartPulse,
                enTitle: 'Daily Essentials',
                jaTitle: '衛生・生活必需品',
                enDesc: 'Personal care, hygiene, health, and everyday consumer goods from trusted manufacturers.',
                jaDesc: '信頼できるメーカーのパーソナルケア、衛生用品、健康、日常の消費財。'
              },
              {
                icon: Globe,
                enTitle: 'Imported Products',
                jaTitle: '輸入商品',
                enDesc: 'Curated internationally sourced products for Japanese and regional consumer markets.',
                jaDesc: '日本の消費者や地域市場向けに国際的に調達された厳選商品。'
              },
              {
                icon: Package,
                enTitle: 'Wholesale Items',
                jaTitle: '卸売商品',
                enDesc: 'Bulk quantity products for wholesale buyers, distributors, and retail chain procurement teams.',
                jaDesc: '卸売業者、ディストリビューター、小売チェーンの調達チーム向けのバルク商品。'
              }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white p-8 lg:p-10 flex flex-col items-start border border-borderGray text-left shadow-sm rounded-none">
                <cat.icon className="w-7 h-7 mb-6 text-forest" strokeWidth={1.5} />
                <h3 className="text-[18px] lg:text-[20px] font-bold text-charcoal mb-4">
                  {language === 'ja' ? cat.jaTitle : cat.enTitle}
                </h3>
                <p className="text-[14px] text-charcoal/70 leading-[1.7] mb-6 flex-grow">
                  {language === 'ja' ? cat.jaDesc : cat.enDesc}
                </p>
                <span className="text-[13px] font-medium text-deepRed flex items-center group-hover:underline cursor-pointer">
                  {t('詳しく見る', 'Learn More')} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            ))}
          </div>

          <div className="border border-borderGray p-10 lg:p-16 text-center bg-white rounded-none">
            <h3 className="text-[24px] lg:text-[28px] font-serif font-bold text-charcoal mb-6">
              {language === 'ja' ? 'お探しの商品はございますか？' : 'Looking for a Specific Product?'}
            </h3>
            <p className="text-[16px] text-charcoal/80 mb-10 max-w-2xl mx-auto leading-[1.8]">
              {language === 'ja' 
                ? '幅広いカテゴリーの商品調達に対応しています。商品仕様、数量、納期などをお知らせください。' 
                : 'We can source products across many categories. Please let us know product specifications, volume, and delivery timeline.'}
            </p>
            <Button to="/contact?type=sourcing" variant="primary" className="h-12 px-8 shadow-none border border-forest">
              {language === 'ja' ? '調達の見積もりを依頼する' : 'Request Sourcing Quote'}
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6 - BUSINESS PROCESS */}
      <section className="py-24 lg:py-32 bg-white border-t border-borderGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
              {t('ご相談から納品までの流れ', 'Process from Inquiry to Delivery')}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto"></div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-borderGray z-0"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 relative z-10">
              {[
                { 
                  titleJa: 'お問い合わせ', titleEn: 'Inquiry',
                  descJa: '必要な商品、数量、納期、包装仕様などをお知らせください。',
                  descEn: 'Please let us know the required products, quantity, delivery date, and packaging specifications.'
                },
                { 
                  titleJa: '内容確認', titleEn: 'Confirmation',
                  descJa: 'ご希望条件を確認し、調達方法や対応可能なサービスを整理します。',
                  descEn: 'We will confirm your requirements and organize sourcing methods and available services.'
                },
                { 
                  titleJa: '商品調査・お見積もり', titleEn: 'Research & Quotation',
                  descJa: 'サプライヤー、価格、仕様、納期を確認し、お見積もりをご案内します。',
                  descEn: 'We will confirm suppliers, prices, specifications, and delivery dates, and provide a quotation.'
                },
                { 
                  titleJa: 'ご発注・手配', titleEn: 'Order & Arrangement',
                  descJa: '内容確定後、商品調達、加工、包装、輸入、物流手配を進めます。',
                  descEn: 'Once confirmed, we will proceed with sourcing, processing, packaging, import, and logistics arrangements.'
                },
                { 
                  titleJa: '検品・納品', titleEn: 'Inspection & Delivery',
                  descJa: '品質、数量、包装状態を確認したうえで、ご指定先へ納品します。',
                  descEn: 'After confirming quality, quantity, and packaging condition, we will deliver to your specified location.'
                }
              ].map((step, idx) => (
                <div key={idx} className="flex-1 flex flex-col lg:items-center relative group">
                  <div className="flex flex-row lg:flex-col items-start lg:items-center w-full">
                    <div className="w-14 h-14 bg-white border border-borderGray text-forest flex items-center justify-center text-[18px] font-serif font-bold rounded-full mb-0 lg:mb-6 shrink-0 group-hover:border-forest group-hover:bg-forest group-hover:text-white transition-all z-10 shadow-sm">
                      0{idx + 1}
                    </div>
                    
                    <div className="ml-6 lg:ml-0 lg:text-center w-full">
                      <h4 className="text-[18px] font-bold text-charcoal mb-3">{t(step.titleJa, step.titleEn)}</h4>
                      <p className="text-[14px] text-charcoal/70 leading-[1.7]">{t(step.descJa, step.descEn)}</p>
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
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" 
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-8 text-charcoal leading-[1.4]">
                {t('品質管理方針', 'Quality Management Policy')}
              </h2>
              <div className="w-12 h-1 bg-deepRed mb-8"></div>
              
              <p className="text-[16px] text-charcoal/80 leading-[1.8] mb-10 whitespace-pre-line">
                {t(
                  '黒崎トレーディングでは、商品の安全性、品質、表示、保管条件を重要な管理項目として位置づけています。\n\nサプライヤー確認、商品情報確認、入荷時検品、保管温度管理、出荷前確認を通じて、安定した商品供給を目指します。',
                  'At Kurosaki Trading, we position product safety, quality, labeling, and storage conditions as critical management items.\n\nThrough supplier verification, product information confirmation, receiving inspection, storage temperature control, and pre-shipment checks, we aim for a stable product supply.'
                )}
              </p>
                            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {[
                  { ja: '商品仕様書の確認', en: 'Product Specification Check' },
                  { ja: '原材料・アレルゲン情報', en: 'Ingredient & Allergen Info' },
                  { ja: '原産国表示', en: 'Country of Origin Labeling' },
                  { ja: '賞味期限管理', en: 'Expiration Date Management' },
                  { ja: 'ロット管理', en: 'Lot Management' },
                  { ja: '保管温度', en: 'Storage Temperature' },
                  { ja: '包装状態', en: 'Packaging Condition' },
                  { ja: '輸入関連書類', en: 'Import-related Documents' },
                  { ja: 'トレーサビリティ', en: 'Traceability' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-forest mt-0.5 mr-3 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[15px] text-charcoal/80 leading-[1.6]">{t(item.ja, item.en)}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-8 bg-white border border-borderGray">
                <p className="text-[14px] text-charcoal/70 leading-[1.6]">
                  {language === 'ja' 
                    ? '品質管理・認証対応については、商品や取引条件に応じて個別にご案内します。' 
                    : 'We will provide individual guidance on quality management and certification compliance based on the product and transaction conditions.'}
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
              {t('日本と世界をつなぐ調達・物流ネットワーク', 'Global Supply and Logistics Network')}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto mb-8"></div>
            <p className="text-[16px] text-charcoal/80 max-w-3xl mx-auto leading-[1.8]">
              {t(
                '国内外のサプライヤーと連携し、商品調達、輸入、保管、国内配送まで一貫して対応します。',
                'Working with domestic and international suppliers, we provide integrated support from product sourcing, import, storage, to domestic delivery.'
              )}
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] lg:h-[600px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-contain bg-center opacity-60">
             {/* Map Legend */}
             <div className="absolute bottom-4 left-4 lg:bottom-10 lg:left-10 bg-white/90 p-4 border border-borderGray backdrop-blur-sm">
               <div className="flex items-center space-x-3 mb-2">
                 <div className="w-3 h-3 bg-deepRed rounded-full shadow-[0_0_0_2px_rgba(200,33,43,0.2)]"></div>
                 <span className="text-[12px] font-medium text-charcoal uppercase tracking-wider">{t('日本本社', 'Japan HQ')}</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-3 h-3 bg-forest rounded-full"></div>
                 <span className="text-[12px] font-medium text-charcoal uppercase tracking-wider">{t('提携地域', 'Partner Regions')}</span>
               </div>
             </div>
             
             {/* Abstract Map Dots */}
             <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-forest rounded-full"></div>
             <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-forest rounded-full"></div>
             <div className="absolute top-[25%] left-[50%] w-3 h-3 bg-forest rounded-full"></div>
             <div className="absolute top-[60%] left-[80%] w-4 h-4 bg-deepRed rounded-full shadow-[0_0_0_4px_rgba(200,33,43,0.2)]"></div> {/* Japan Highlight */}
             <div className="absolute top-[70%] left-[85%] w-3 h-3 bg-forest rounded-full"></div>
             <div className="absolute top-[35%] left-[75%] w-3 h-3 bg-forest rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SECTION 13 - INFORMATION FOR QUOTE */}
      <section className="py-24 lg:py-32 bg-lightGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-borderGray p-8 lg:p-12">
            <div className="text-center mb-10">
              <FileText className="w-10 h-10 text-charcoal/30 mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="font-serif text-2xl lg:text-[28px] font-bold mb-4 text-charcoal">
                {t('お問い合わせ時にお知らせください', 'Information Required for a Quote')}
              </h2>
              <p className="text-[15px] text-charcoal/70 leading-[1.8]">
                {t(
                  '以下の情報をお知らせいただくと、商品調査とお見積もりをスムーズに進められます。',
                  'Providing the following information will help us proceed smoothly with product research and quotation.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10 border-t border-borderGray pt-8">
              {[
                { ja: '商品名または商品カテゴリー', en: 'Product Name or Category' },
                { ja: '希望数量', en: 'Desired Quantity' },
                { ja: '希望価格帯', en: 'Target Price Range' },
                { ja: '希望納期', en: 'Desired Delivery Date' },
                { ja: '納品場所', en: 'Delivery Location' },
                { ja: '包装・容量', en: 'Packaging & Volume' },
                { ja: '原産国の希望', en: 'Preferred Country of Origin' },
                { ja: '必要な認証・規格', en: 'Required Certifications/Standards' },
                { ja: '使用目的', en: 'Intended Use' },
                { ja: '参考画像または商品資料', en: 'Reference Images or Documents' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-forest mt-0.5 mr-3 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[15px] text-charcoal/80 leading-[1.6]">{t(item.ja, item.en)}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button to="/contact?type=quote" variant="primary" className="h-12 px-10 shadow-none border border-forest">
                {t('見積もりを依頼する', 'Request a Quote')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 - FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal">
              {t('よくあるご質問', 'Frequently Asked Questions')}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto"></div>
          </div>

          <div className="space-y-0 border-t border-borderGray">
            {[
              {
                qJa: '少量から注文できますか？', qEn: 'Can I order in small quantities?',
                aJa: '商品やサプライヤーによって最低発注数量が異なります。ご希望の商品と数量をお知らせください。',
                aEn: 'Minimum order quantities vary depending on the product and supplier. Please let us know your desired product and quantity.'
              },
              {
                qJa: '商品名が分からなくても相談できますか？', qEn: 'Can I consult without knowing the specific product name?',
                aJa: 'はい。用途、予算、数量、納期などをもとに、条件に合う商品をお探しします。',
                aEn: 'Yes. Based on your intended use, budget, quantity, delivery date, etc., we will look for products that meet your criteria.'
              },
              {
                qJa: '海外からの商品調達は可能ですか？', qEn: 'Is it possible to source products from overseas?',
                aJa: '商品、原産国、輸入条件を確認したうえで、対応可否をご案内します。',
                aEn: 'We will inform you of availability after confirming the product, country of origin, and import conditions.'
              },
              {
                qJa: 'オリジナル包装に対応できますか？', qEn: 'Can you handle custom packaging?',
                aJa: '商品や発注数量によって対応可能です。包装仕様やデザインのご希望をお知らせください。',
                aEn: 'It is possible depending on the product and order quantity. Please let us know your desired packaging specifications and design.'
              },
              {
                qJa: 'ハラール商品を探してもらえますか？', qEn: 'Can you find halal products?',
                aJa: 'はい。必要な認証、原産国、商品カテゴリーを確認し、条件に合う商品を調査します。',
                aEn: 'Yes. We will investigate products that meet your criteria after confirming required certifications, country of origin, and product category.'
              },
              {
                qJa: '見積もりには何が必要ですか？', qEn: 'What is required for a quotation?',
                aJa: '商品名、数量、納品場所、希望納期、包装仕様などをご連絡ください。',
                aEn: 'Please provide the product name, quantity, delivery location, desired delivery date, packaging specifications, etc.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="group border-b border-borderGray">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none py-6 text-charcoal hover:text-forest transition-colors">
                  <span className="text-[16px] pr-8">{t(faq.qJa, faq.qEn)}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-charcoal/40" />
                  </span>
                </summary>
                <div className="text-charcoal/70 text-[15px] leading-[1.8] pb-6 pt-0 opacity-0 group-open:animate-fadeIn">
                  {t(faq.aJa, faq.aEn)}
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
            {t('商品調達や業務用供給について、お気軽にご相談ください。', 'Please feel free to contact us regarding product sourcing and professional supply.')}
          </h2>
          <p className="text-[16px] text-warmWhite/80 mb-12 leading-[1.8]">
            {t(
              '商品カテゴリー、数量、納期、包装仕様など、ご希望の条件をお知らせください。',
              'Please let us know your desired conditions such as product category, quantity, delivery date, and packaging specifications.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" variant="outline" className="h-14 px-12 min-w-[180px] bg-white text-forest border-white hover:bg-warmWhite hover:text-forest text-[16px]">
              {t('お問い合わせ', 'Contact Us')}
            </Button>
            <Button to="/contact?type=quote" variant="outline" className="h-14 px-12 min-w-[180px] bg-transparent text-white border-white hover:bg-white hover:text-forest text-[16px]">
              {t('見積もりを依頼する', 'Request a Quote')}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
