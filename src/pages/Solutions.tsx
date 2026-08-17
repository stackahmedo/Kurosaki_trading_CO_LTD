import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sprout, Search, Factory, ShieldCheck, Ship, Utensils, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const { t, language } = useLanguage();

  const solutions = [
    { 
      id: 'farming',
      icon: Sprout, 
      ja: '農業・生産', 
      en: 'Farming & Production', 
      descJa: '契約農家と連携し、持続可能で高品質な農産物を生産。土壌作りから収穫まで、厳密な基準に基づいて管理しています。', 
      descEn: 'Partnering with contract farmers to produce sustainable, high-quality agricultural products. We manage everything from soil preparation to harvesting based on strict standards.',
      benefitsJa: ['安定した収穫量', '無農薬・減農薬対応', 'トレーサビリティの確保'],
      benefitsEn: ['Stable yields', 'Pesticide-free / Reduced-pesticide options', 'Guaranteed traceability']
    },
    { 
      id: 'sourcing',
      icon: Search, 
      ja: '商品調達', 
      en: 'Sourcing', 
      descJa: '世界中のネットワークを活かし、最適な食材を安定的に調達。長年のパートナーシップにより、競争力のある価格と高品質を両立します。', 
      descEn: 'Leveraging our global network to stably source optimal ingredients. Long-standing partnerships allow us to balance competitive pricing with high quality.',
      benefitsJa: ['世界各国の特産品調達', '価格変動リスクの低減', '安定供給の実現'],
      benefitsEn: ['Sourcing global specialties', 'Mitigating price fluctuation risks', 'Ensuring stable supply']
    },
    { 
      id: 'manufacturing',
      icon: Factory, 
      ja: '製造・加工', 
      en: 'Manufacturing & Processing', 
      descJa: '最新設備の自社および提携工場で、顧客ニーズに合わせた加工を実施。小ロットから大量生産まで柔軟に対応します。', 
      descEn: 'Processing tailored to customer needs at our state-of-the-art affiliated factories. We flexibly handle everything from small batches to mass production.',
      benefitsJa: ['オーダーメイド加工', 'HACCP対応の衛生管理', '規格外品の活用提案'],
      benefitsEn: ['Custom processing', 'HACCP-compliant hygiene management', 'Proposals for utilizing off-spec products']
    },
    { 
      id: 'packaging',
      icon: ShieldCheck, 
      ja: '包装・品質管理', 
      en: 'Packaging & Quality Control', 
      descJa: '鮮度と安全を保つ最先端の包装技術と、国際基準に基づく厳格な品質検査。お客様のブランド価値を守ります。', 
      descEn: 'State-of-the-art packaging technology that preserves freshness and safety, paired with strict international quality inspections. We protect your brand value.',
      benefitsJa: ['鮮度保持パッケージ', '微生物・残留農薬検査', '環境配慮型素材の提案'],
      benefitsEn: ['Freshness-preserving packaging', 'Microbial / Pesticide residue testing', 'Eco-friendly material proposals']
    },
    { 
      id: 'logistics',
      icon: Ship, 
      ja: '物流・輸出入', 
      en: 'Logistics, Import & Export', 
      descJa: '徹底した温度管理によるコールドチェーンと、スムーズな貿易手続き。最適なルートでスピーディにお届けします。', 
      descEn: 'Cold chain with strict temperature control and smooth trade procedures. We deliver swiftly using optimal routes.',
      benefitsJa: ['3温度帯（常温・冷蔵・冷凍）対応', '通関手続きの代行', 'ジャストインタイム配送'],
      benefitsEn: ['3-temperature zones (ambient, chilled, frozen)', 'Customs clearance agency', 'Just-in-time delivery']
    },
    { 
      id: 'kitchen',
      icon: Utensils, 
      ja: '業務用食品供給', 
      en: 'Foodservice and Kitchen Supply', 
      descJa: '外食・ホテル・中食産業へ、必要な食材を必要な形でお届け。現場のオペレーション効率化に貢献します。', 
      descEn: 'Delivering necessary ingredients in required formats to restaurants, hotels, and catering industries. We contribute to operational efficiency in professional kitchens.',
      benefitsJa: ['調理済みキットの提供', 'メニュー開発サポート', '小分け・ポーションカット'],
      benefitsEn: ['Pre-cooked kit provision', 'Menu development support', 'Portion cutting']
    },
  ];

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6">{t('事業内容', 'Solutions')}</h1>
          <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed">
            {t(
              '農場から食卓までを一貫してサポートする、6つのコアソリューション。複雑なフードサプライチェーンにおけるあらゆる課題を解決します。', 
              'Six core solutions supporting the integrated supply chain from farm to kitchen. We solve any challenge within the complex food supply chain.'
            )}
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {solutions.map((sol, index) => (
            <div key={sol.id} id={index.toString()} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <sol.icon className="w-12 h-12 text-forest mb-6" strokeWidth={1.5} />
                <h2 className="font-serif text-3xl font-bold mb-6 text-charcoal">{t(sol.ja, sol.en)}</h2>
                <div className="w-12 h-1 bg-deepRed mb-8"></div>
                <p className="text-charcoal/80 leading-relaxed mb-8 text-lg">
                  {t(sol.descJa, sol.descEn)}
                </p>
                <div className="bg-white border border-borderGray p-6 mb-8">
                  <h3 className="font-bold mb-4 font-serif">{t('お客様のメリット', 'Customer Benefits')}</h3>
                  <ul className="space-y-3">
                    {(language === 'ja' ? sol.benefitsJa : sol.benefitsEn).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center text-charcoal/80">
                        <ArrowRight className="w-4 h-4 text-forest mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1 relative h-[400px]' : 'relative h-[400px]'}>
                <div className="absolute inset-0 bg-lightGray rounded-sm">
                  {/* Image placeholder */}
                  <div className="w-full h-full bg-forest/10 flex items-center justify-center">
                    <span className="text-forest/30 font-serif font-bold text-xl uppercase tracking-widest">{t(sol.ja, sol.en)} Image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
