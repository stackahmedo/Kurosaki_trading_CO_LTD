import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export function CaseStudies() {
  const { t, language } = useLanguage();

  const caseStudies = [
    {
      industryJa: '飲食店向け業務用食材の調達',
      industryEn: 'Commercial Food Sourcing for Restaurants',
      challengeJa: '高品質で安定した食材の確保',
      challengeEn: 'Securing high-quality and stable ingredients',
      serviceJa: '国内外のサプライヤー選定と品質確認',
      serviceEn: 'Supplier selection and quality verification',
      categoryJa: '肉類・水産品',
      categoryEn: 'Meat & Seafood',
      resultJa: '安定供給とコスト削減を実現',
      resultEn: 'Achieved stable supply and cost reduction',
      relatedServiceJa: '商品調達',
      relatedServiceEn: 'Product Sourcing',
    },
    {
      industryJa: '小売店向け輸入商品の供給',
      industryEn: 'Imported Product Supply for Retailers',
      challengeJa: '他社と差別化できる商品の導入',
      challengeEn: 'Introduction of products for differentiation',
      serviceJa: '海外トレンドのリサーチと輸入手配',
      serviceEn: 'Overseas trend research and import arrangements',
      categoryJa: '加工食品・菓子',
      categoryEn: 'Processed Foods & Snacks',
      resultJa: '新規顧客の獲得に貢献',
      resultEn: 'Contributed to acquiring new customers',
      relatedServiceJa: '物流・輸出入',
      relatedServiceEn: 'Logistics & Trade',
    },
    {
      industryJa: 'オリジナル商品の企画・包装',
      industryEn: 'Custom Product Planning & Packaging',
      challengeJa: '自社ブランド商品の立ち上げ',
      challengeEn: 'Launching a private brand product',
      serviceJa: '商品仕様の提案から包装デザイン、製造手配まで一貫対応',
      serviceEn: 'End-to-end support from specification proposal to packaging design and manufacturing',
      categoryJa: '飲料・調味料',
      categoryEn: 'Beverages & Seasonings',
      resultJa: '予定納期内で商品化を実現',
      resultEn: 'Realized commercialization within the scheduled timeframe',
      relatedServiceJa: '製造・加工',
      relatedServiceEn: 'Manufacturing & Processing',
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal leading-[1.4]">
            {t('取引・調達事例', 'Case Studies')}
          </h2>
          <div className="w-12 h-1 bg-deepRed mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="border border-borderGray bg-white flex flex-col hover:border-forest transition-colors cursor-pointer group">
              <div className="h-48 bg-lightGray w-full relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                  Image Placeholder
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-grow flex flex-col">
                <div className="text-[12px] font-bold text-deepRed mb-2 uppercase tracking-wider">
                  {t(study.categoryJa, study.categoryEn)}
                </div>
                <h3 className="text-[18px] font-bold text-charcoal mb-4 line-clamp-2 leading-[1.5]">
                  {t(study.industryJa, study.industryEn)}
                </h3>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div>
                    <span className="text-[12px] text-charcoal/50 font-bold block mb-1">Challenge</span>
                    <p className="text-[14px] text-charcoal/80 leading-[1.6]">{t(study.challengeJa, study.challengeEn)}</p>
                  </div>
                  <div>
                    <span className="text-[12px] text-charcoal/50 font-bold block mb-1">Service</span>
                    <p className="text-[14px] text-charcoal/80 leading-[1.6]">{t(study.serviceJa, study.serviceEn)}</p>
                  </div>
                  <div>
                    <span className="text-[12px] text-charcoal/50 font-bold block mb-1">Result</span>
                    <p className="text-[14px] font-medium text-forest leading-[1.6]">{t(study.resultJa, study.resultEn)}</p>
                  </div>
                </div>

                <div className="border-t border-borderGray pt-4 mt-auto">
                  <span className="text-[13px] font-medium text-charcoal flex items-center group-hover:text-forest transition-colors">
                    {t('事例の詳細を見る', 'View Case Study Details')} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
