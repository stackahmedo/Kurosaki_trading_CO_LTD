import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Leaf, Recycle, Users, Sprout } from 'lucide-react';

export default function Sustainability() {
  const { t } = useLanguage();
  
  const initiatives = [
    { icon: Leaf, ja: '持続可能な調達', en: 'Sustainable Sourcing', descJa: '環境に配慮した農法を実践する生産者との取引を優先し、農薬・化学肥料の使用低減を推進しています。', descEn: 'We prioritize working with producers who practice eco-friendly farming and promote the reduction of pesticides and chemical fertilizers.' },
    { icon: Recycle, ja: '食品ロスの削減と資源循環', en: 'Reducing Food Loss & Resource Circulation', descJa: '規格外品の加工品への転用や、AIを活用した需要予測による在庫最適化により、サプライチェーン全体での食品ロス削減に努めています。', descEn: 'We strive to reduce food loss across the supply chain by repurposing off-spec products into processed foods and optimizing inventory using AI demand forecasting.' },
    { icon: Sprout, ja: '環境配慮型パッケージング', en: 'Eco-friendly Packaging', descJa: '鮮度保持機能と環境負荷低減を両立する新素材の導入を進め、プラスチック使用量の削減を段階的に実施しています。', descEn: 'We are phasing in new materials that balance freshness preservation with reduced environmental impact, gradually reducing plastic usage.' },
    { icon: Users, ja: '地域社会・生産者との共生', en: 'Community & Producer Coexistence', descJa: '適正な価格での継続的な取引を通じて、生産者の経営安定化と地域農業の持続的な発展を支援しています。', descEn: 'Through continuous trading at fair prices, we support the financial stability of producers and the sustainable development of regional agriculture.' },
  ];

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-forest text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-warmWhite" />
          <h1 className="font-serif text-4xl font-bold mb-6">{t('サステナビリティ', 'Sustainability')}</h1>
          <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed">
            {t(
              '次世代へ豊かな食環境を引き継ぐために。私たちは、サプライチェーン全体で環境負荷の低減と持続可能な社会の実現に取り組みます。',
              'To pass on a rich food environment to the next generation. We are working across the supply chain to reduce environmental impact and realize a sustainable society.'
            )}
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6 text-charcoal">{t('4つの重点取り組み', '4 Key Initiatives')}</h2>
            <div className="w-12 h-1 bg-deepRed mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {initiatives.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 bg-white p-8 border border-borderGray">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-lightGray rounded-full flex items-center justify-center text-forest">
                    <item.icon strokeWidth={1.5} className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 font-serif">{t(item.ja, item.en)}</h3>
                  <p className="text-charcoal/80 leading-relaxed text-sm">{t(item.descJa, item.descEn)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-charcoal text-white p-12">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">{t('目標と進捗', 'Targets and Progress')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/20 p-6 text-center">
               <div className="text-sm text-warmWhite/60 mb-2 uppercase tracking-wider">{t('食品ロス削減', 'Food Loss Reduction')}</div>
               <div className="font-serif text-4xl font-bold text-warmWhite mb-4">[ XX ]%</div>
               <p className="text-sm text-warmWhite/80">{t('2030年までの削減目標（2020年比）', 'Reduction target by 2030 (vs 2020)')}</p>
            </div>
            <div className="border border-white/20 p-6 text-center">
               <div className="text-sm text-warmWhite/60 mb-2 uppercase tracking-wider">{t('環境配慮型包装', 'Eco-Packaging')}</div>
               <div className="font-serif text-4xl font-bold text-warmWhite mb-4">[ XX ]%</div>
               <p className="text-sm text-warmWhite/80">{t('2030年までの切り替え目標', 'Transition target by 2030')}</p>
            </div>
            <div className="border border-white/20 p-6 text-center">
               <div className="text-sm text-warmWhite/60 mb-2 uppercase tracking-wider">{t('持続可能な調達率', 'Sustainable Sourcing Rate')}</div>
               <div className="font-serif text-4xl font-bold text-warmWhite mb-4">[ XX ]%</div>
               <p className="text-sm text-warmWhite/80">{t('2030年までの主要原材料達成目標', 'Target for key ingredients by 2030')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
