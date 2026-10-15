import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Quote } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const companyInfo = [
    { labelJa: '会社名', labelEn: 'Company Name', valJa: '黒崎トレーディング株式会社（ｸﾛｻｷﾄﾚｰﾃﾞｨﾝｸﾞｶﾌﾞｼｷｶﾞｲｼｬ）', valEn: 'Kurosaki Trading Co., Ltd.' },
    { labelJa: '英文会社名', labelEn: 'English Company Name', valJa: 'Kurosaki Trading Co., Ltd.', valEn: 'Kurosaki Trading Co., Ltd.' },
    { labelJa: '法人番号', labelEn: 'Corporate Number', valJa: '3010501042099', valEn: '3010501042099' },
    { labelJa: '代表者', labelEn: 'Representative', valJa: '月岡　勇人', valEn: 'Hayato Tsukioka' },
    { labelJa: '設立年月', labelEn: 'Established', valJa: '平成30年１月１９日', valEn: 'January 19, 2018' },
    { labelJa: '資本金', labelEn: 'Capital', valJa: '￥5,000,000', valEn: '¥5,000,000' },
    { labelJa: '所在地', labelEn: 'Address', valJa: '東京都葛飾区西新小岩1丁目２番１１号キクヤビル１F', valEn: 'Kikuya Bldg 1F, 1-2-11 Nishi-Shinkoiwa, Katsushika-ku, Tokyo' },
    { labelJa: '電話番号', labelEn: 'Phone Number', valJa: '03 6657 6728', valEn: '03 6657 6728 (+81-3-6657-6728)' },
    { labelJa: 'メールアドレス', labelEn: 'Email Address', valJa: 'kurosakitrading@gmail.com', valEn: 'kurosakitrading@gmail.com' },
    { labelJa: '営業時間', labelEn: 'Business Hours', valJa: '情報準備中', valEn: 'Information in preparation' },
    { 
      labelJa: '事業内容', 
      labelEn: 'Business Activities', 
      valJa: '・飲食店舗経営\n・輸入米穀、国産米の卸売り', 
      valEn: '• Restaurant Management\n• Wholesale of Imported and Domestic Rice' 
    },
    { labelJa: '対応地域', labelEn: 'Service Area', valJa: '全世界', valEn: 'Worldwide' },
    { labelJa: '主要取引銀行', labelEn: 'Main Banks', valJa: '三井住友銀行', valEn: 'Sumitomo Mitsui Banking Corporation (SMBC)' },
    { labelJa: '許認可', labelEn: 'Licenses & Approvals', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '適格請求書発行事業者番号', labelEn: 'Invoice Issuer Registration Number', valJa: 'T3010501042099', valEn: 'T3010501042099' },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="font-serif text-3xl lg:text-[40px] font-bold mb-6 text-charcoal">
          {t('会社概要', 'About Us')}
        </h1>
        <div className="w-12 h-1 bg-deepRed mx-auto"></div>
      </div>

      {/* 代表者からのメッセージ */}
      <section className="mb-20">
        <div className="bg-white border border-borderGray p-8 lg:p-12 shadow-sm relative overflow-hidden">
          <Quote className="absolute right-6 top-6 w-16 h-16 text-forest/10 -scale-x-100 pointer-events-none" />
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[2px] w-6 bg-deepRed"></div>
            <span className="text-deepRed text-xs font-bold uppercase tracking-[0.2em]">
              {t('代表挨拶', 'LEADERSHIP MESSAGE')}
            </span>
          </div>

          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-charcoal mb-8">
            {t('代表者からのメッセージ', 'Message from the President')}
          </h2>

          <div className="space-y-5 text-charcoal/85 text-[15px] lg:text-[16px] leading-relaxed lg:leading-loose">
            <p>
              {t(
                '弊社のWebサイトをご覧いただき、誠にありがとうございます。',
                'Thank you very much for visiting our website.'
              )}
            </p>
            <p>
              {t(
                '近年、食の多様化やグローバル化に伴い、外食産業や食料品小売店の皆様が求められる「米」のニーズも大きく変化しております。伝統的な国産米の深い味わいから、本格的なエスニック料理や多国籍メニューに欠かせない輸入米穀まで、その選択肢はかつてないほど広がっています。',
                'In recent years, with the diversification and globalization of food culture, the rice needs of restaurant operators and food retailers have evolved considerably. From the deep flavor of traditional domestic Japanese rice to imported grains essential for authentic ethnic and international dishes, the range of choices has broadened like never before.'
              )}
            </p>
            <p>
              {t(
                '私たちは、世界・日本全国の信頼できるサプライヤーと確固たるネットワークを築き、品質管理の徹底されたお米をお届けしています。単に米を供給するだけでなく、お米のプロとして「どのような料理にどの銘柄が合うか」「コストと品質のバランスをどう取るか」という仕入れのお悩みに寄り添い、確実で安定した供給をお約束いたします。',
                'We have established strong networks with trusted suppliers both across Japan and around the world, delivering rice under rigorous quality control. Beyond simply supplying rice, as rice professionals, we actively support your procurement decisions—helping identify the ideal grain for each cuisine and balancing cost with culinary excellence—while guaranteeing reliable, consistent supply.'
              )}
            </p>
            <p>
              {t(
                '貴店の味とビジネスを足元から支えるパートナーとして、ぜひお気軽にご相談ください。',
                'As a dedicated partner supporting your flavors and business from the ground up, please feel free to consult with us.'
              )}
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-borderGray/60 flex flex-col items-end text-right">
            <span className="text-xs text-muted font-medium mb-1">
              {t('代表取締役', 'President & Representative Director')}
            </span>
            <span className="font-serif text-xl font-bold text-charcoal tracking-wide">
              {t('月岡 勇人', 'Hayato Tsukioka')}
            </span>
          </div>
        </div>
      </section>
      
      {/* 会社概要 テーブル */}
      <section>
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-[2px] w-6 bg-deepRed"></div>
          <span className="text-deepRed text-xs font-bold uppercase tracking-[0.2em]">
            {t('企業情報', 'OVERVIEW')}
          </span>
        </div>

        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-charcoal mb-8">
          {t('会社情報', 'Company Profile')}
        </h2>

        <div className="bg-white border border-borderGray p-8 lg:p-12 shadow-sm">
          <div className="divide-y divide-borderGray">
            {companyInfo.map((item, idx) => (
              <div key={idx} className="py-5 flex flex-col sm:flex-row items-start">
                <div className="w-full sm:w-1/3 font-bold text-charcoal mb-2 sm:mb-0 text-[15px]">
                  {t(item.labelJa, item.labelEn)}
                </div>
                <div className="w-full sm:w-2/3 text-charcoal/80 bg-lightGray/50 p-3 sm:p-0 sm:bg-transparent rounded-sm text-[15px] leading-relaxed whitespace-pre-line">
                  {item.labelJa === 'メールアドレス' ? (
                    <a href={`mailto:${item.valJa}`} className="text-forest hover:underline">
                      {t(item.valJa, item.valEn)}
                    </a>
                  ) : item.labelJa === '電話番号' ? (
                    <a href="tel:0366576728" className="text-forest hover:underline">
                      {t(item.valJa, item.valEn)}
                    </a>
                  ) : (
                    t(item.valJa, item.valEn)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
