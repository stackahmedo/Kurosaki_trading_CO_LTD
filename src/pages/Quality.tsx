import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Search, Activity, FileCheck2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Quality() {
  const { t } = useLanguage();
  
  const processes = [
    { icon: Search, ja: 'サプライヤー審査', en: 'Supplier Screening', descJa: '国内外の生産者や製造委託先に対して、当社独自の厳格な監査を実施。基準を満たしたパートナーのみと取引を行います。', descEn: 'We conduct our own strict audits of domestic and international producers and contract manufacturers. We only partner with those who meet our standards.' },
    { icon: Activity, ja: '生産・製造管理', en: 'Production Control', descJa: '各工程での温度管理、衛生管理を徹底。異常を検知した場合は直ちに出荷を停止し、原因を究明する体制を構築しています。', descEn: 'Strict temperature and hygiene control at every process. We have a system to immediately stop shipments and investigate causes if abnormalities are detected.' },
    { icon: FileCheck2, ja: '成分・残留農薬検査', en: 'Ingredient & Pesticide Testing', descJa: '外部の第三者機関と連携し、定期的な成分分析、微生物検査、残留農薬検査を実施。科学的根拠に基づいた安全性を担保します。', descEn: 'We conduct regular ingredient analysis, microbial testing, and pesticide residue testing in collaboration with third-party organizations to ensure science-based safety.' },
  ];

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-forest" />
          <h1 className="font-serif text-4xl font-bold mb-6">{t('品質管理', 'Quality Assurance')}</h1>
          <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed">
            {t(
              '「食の安全は、すべての前提である」という理念のもと、農場から食卓まで、一切の妥協のない品質管理体制を敷いています。',
              'Under the philosophy that "Food safety is the premise of everything," we have established an uncompromising quality control system from farm to kitchen.'
            )}
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-charcoal">{t('品質管理プロセス', 'Quality Control Process')}</h2>
          <div className="w-12 h-1 bg-deepRed mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((proc, idx) => (
              <div key={idx} className="bg-white border border-borderGray p-8 text-left relative overflow-hidden group hover:border-forest/50 transition-colors">
                <proc.icon className="w-10 h-10 text-forest mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-4 font-serif">{t(proc.ja, proc.en)}</h3>
                <p className="text-charcoal/80 text-sm leading-relaxed">{t(proc.descJa, proc.descEn)}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-forest translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-borderGray p-8 md:p-12 mb-24">
          <h2 className="font-serif text-2xl font-bold mb-8 text-charcoal text-center">{t('コールドチェーン管理とトレーサビリティ', 'Cold Chain Management & Traceability')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <p className="text-charcoal/80 leading-relaxed mb-6">
                 {t(
                   '商品の特性に応じた常温・冷蔵・冷凍の3温度帯管理を徹底。収穫から加工、輸送、お客様の元へ届くまでの全工程において、途切れることのない温度管理（コールドチェーン）を実現しています。',
                   'We ensure strict management in 3 temperature zones (ambient, chilled, frozen) according to product characteristics. We achieve an uninterrupted cold chain throughout all processes from harvest to processing, transport, and delivery to the customer.'
                 )}
               </p>
               <p className="text-charcoal/80 leading-relaxed">
                 {t(
                   'また、独自のシステムによりロット単位でのトレーサビリティを確保。万が一の問題発生時にも、速やかに原因箇所を特定し、影響範囲を最小限に抑えます。',
                   'In addition, our proprietary system ensures traceability at the lot level. In the unlikely event of a problem, we can quickly identify the source and minimize the impact.'
                 )}
               </p>
            </div>
            <div className="bg-lightGray flex items-center justify-center p-8 border border-borderGray/50">
               {/* Diagram placeholder */}
               <div className="text-center">
                 <div className="font-mono text-xs text-charcoal/50 mb-2">[ SUPPLY CHAIN DIAGRAM PLACEHOLDER ]</div>
                 <div className="flex space-x-2 items-center justify-center text-forest">
                   <span>Farm</span> &rarr; <span>Factory</span> &rarr; <span>Logistics</span> &rarr; <span>Kitchen</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-forest p-12 text-white">
          <h2 className="font-serif text-2xl font-bold mb-4">{t('品質に関するお問い合わせ', 'Quality Inquiries')}</h2>
          <p className="text-warmWhite/80 mb-8 max-w-2xl mx-auto">
            {t('製品の規格書、安全証明書、各種認証情報に関するご質問はこちらから承ります。', 'For questions regarding product specifications, safety certificates, and certifications, please contact us.')}
          </p>
          <Button to="/contact?type=quality" variant="outline" className="border-white text-white hover:bg-white hover:text-forest">
             {t('お問い合わせへ進む', 'Proceed to Contact Form')}
          </Button>
        </div>

      </div>
    </div>
  );
}
