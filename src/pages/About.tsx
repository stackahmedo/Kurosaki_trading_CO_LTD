import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, language } = useLanguage();

  const companyInfo = [
    { labelJa: '会社名', labelEn: 'Company Name', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '英文会社名', labelEn: 'English Company Name', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '法人番号', labelEn: 'Corporate Number', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '代表者', labelEn: 'Representative', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '設立年月', labelEn: 'Established', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '資本金', labelEn: 'Capital', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '所在地', labelEn: 'Address', valJa: '東京都葛飾区西新小岩1丁目２番１１号キクヤビル１F', valEn: 'Kikuya Bldg 1F, 1-2-11 Nishishinkoiwa, Katsushika-ku, Tokyo' },
    { labelJa: '電話番号', labelEn: 'Phone Number', valJa: '03 6657 6728', valEn: '03 6657 6728' },
    { labelJa: 'メールアドレス', labelEn: 'Email Address', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '営業時間', labelEn: 'Business Hours', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '事業内容', labelEn: 'Business Activities', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '対応地域', labelEn: 'Service Area', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '主要取引銀行', labelEn: 'Main Banks', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '許認可', labelEn: 'Licenses & Approvals', valJa: '情報準備中', valEn: 'Information in preparation' },
    { labelJa: '適格請求書発行事業者番号', labelEn: 'Invoice Issuer Registration Number', valJa: '情報準備中', valEn: 'Information in preparation' },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl lg:text-[36px] font-bold mb-6 text-charcoal">
          {t('会社概要', 'Company Profile')}
        </h1>
        <div className="w-12 h-1 bg-deepRed mx-auto"></div>
      </div>
      
      <div className="bg-white border border-borderGray p-8 lg:p-12">
        <div className="divide-y divide-borderGray">
          {companyInfo.map((item, idx) => (
            <div key={idx} className="py-5 flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 font-bold text-charcoal mb-2 sm:mb-0">
                {t(item.labelJa, item.labelEn)}
              </div>
              <div className="w-full sm:w-2/3 text-charcoal/60 bg-lightGray/50 p-2 sm:p-0 sm:bg-transparent">
                {t(item.valJa, item.valEn)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
