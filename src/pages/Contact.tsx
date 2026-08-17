import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { ja: '商品調達について', en: 'Product Sourcing' },
    { ja: '卸売について', en: 'Wholesale' },
    { ja: '製造・加工について', en: 'Manufacturing and Processing' },
    { ja: '包装・品質管理について', en: 'Packaging and Quality Control' },
    { ja: '輸入・輸出について', en: 'Import and Export' },
    { ja: '物流について', en: 'Logistics' },
    { ja: '業務用食品供給について', en: 'Foodservice Supply' },
    { ja: 'プライベートブランドについて', en: 'Private Label' },
    { ja: '取引・パートナーシップについて', en: 'Business Partnership' },
    { ja: 'その他', en: 'Other' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center justify-center text-center">
        <div>
          <div className="w-16 h-16 bg-forest/10 text-forest rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl font-bold mb-4">{t('お問い合わせを受け付けました', 'Inquiry Submitted')}</h2>
          <p className="text-charcoal/80 mb-8 leading-relaxed">
            {t(
              'この度はお問い合わせいただき、誠にありがとうございます。担当者より通常3営業日以内にご連絡いたします。',
              'Thank you for your inquiry. Our representative will contact you within 3 business days.'
            )}
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            {t('戻る', 'Return')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold mb-4 text-forest">{t('お問い合わせ', 'Contact Us')}</h1>
        <p className="text-charcoal/80">
          {t('法人取引、商品調達、お見積もり等に関するご相談はこちらから承ります。', 'For B2B inquiries, product sourcing, and quotation requests, please use the form below.')}
        </p>
      </div>

      <div className="bg-white border border-borderGray p-8 md:p-12 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-6 border-b border-borderGray pb-8">
            <div>
              <label className="block text-sm font-bold text-charcoal mb-2">
                {t('お問い合わせ種類', 'Inquiry Type')} <span className="text-deepRed">*</span>
              </label>
              <select required className="w-full h-11 px-4 border border-borderGray bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors">
                <option value="">{t('選択してください', 'Please select')}</option>
                {inquiryTypes.map((type, idx) => (
                  <option key={idx} value={type.en}>{t(type.ja, type.en)}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6 border-b border-borderGray pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">
                  {t('貴社名', 'Company Name')} <span className="text-deepRed">*</span>
                </label>
                <input required type="text" className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">
                  {t('部署名', 'Department')}
                </label>
                <input type="text" className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">
                  {t('ご担当者様名', 'Contact Person')} <span className="text-deepRed">*</span>
                </label>
                <input required type="text" className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">
                  {t('国・地域', 'Country or Region')} <span className="text-deepRed">*</span>
                </label>
                <input required type="text" className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">
                  {t('メールアドレス', 'Email Address')} <span className="text-deepRed">*</span>
                </label>
                <input required type="email" className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">
                  {t('電話番号', 'Telephone')} <span className="text-deepRed">*</span>
                </label>
                <input required type="tel" className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">
                  {t('対象商品・サービス', 'Product or Service Required')}
                </label>
                <input type="text" className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">
                  {t('想定数量', 'Estimated Quantity')}
                </label>
                <input type="text" className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-charcoal mb-2">
                {t('お問い合わせ内容', 'Message')} <span className="text-deepRed">*</span>
              </label>
              <textarea required rows={6} className="w-full p-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"></textarea>
            </div>
          </div>

          <div className="pt-4 flex flex-col items-center">
            <label className="flex items-center space-x-3 mb-8 cursor-pointer">
              <input type="checkbox" required className="w-5 h-5 border-borderGray text-forest focus:ring-forest" />
              <span className="text-sm text-charcoal/80">
                {t('プライバシーポリシーに同意する', 'I agree to the Privacy Policy')} <span className="text-deepRed">*</span>
              </span>
            </label>
            <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto md:min-w-[200px]">
              {t('送信する', 'Submit')}
            </Button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center text-sm text-charcoal/60">
        <p>{t('営業時間: 平日 9:00 - 18:00', 'Business Hours: Weekdays 9:00 - 18:00 (JST)')}</p>
        <p className="mt-2">{t('お電話でのお問い合わせ: 03-XXXX-XXXX', 'Contact by Phone: +81-3-XXXX-XXXX')}</p>
      </div>
    </div>
  );
}
