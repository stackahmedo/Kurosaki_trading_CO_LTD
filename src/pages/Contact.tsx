import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const { t } = useLanguage();
  const { content, addInquiry } = useSiteContent();
  const [searchParams] = useSearchParams();
  const c = content.contact;
  const g = content.global;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [department, setDepartment] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam === 'sourcing') setInquiryType('Product Sourcing');
    else if (typeParam === 'quality') setInquiryType('Packaging and Quality Control');
    else if (typeParam === 'quote') setInquiryType('Wholesale');
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      inquiryType,
      companyName,
      department,
      contactPerson,
      country,
      email,
      phone,
      product,
      quantity,
      message,
    });
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setInquiryType('');
    setCompanyName('');
    setDepartment('');
    setContactPerson('');
    setCountry('');
    setEmail('');
    setPhone('');
    setProduct('');
    setQuantity('');
    setMessage('');
    setIsSubmitted(false);
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
          <h2 className="font-serif text-3xl font-bold mb-4">
            {t(c.submittedTitle.ja, c.submittedTitle.en)}
          </h2>
          <p className="text-charcoal/80 mb-8 leading-relaxed">
            {t(c.submittedMessage.ja, c.submittedMessage.en)}
          </p>
          <Button onClick={resetForm} variant="outline" className="cursor-pointer">
            {t('戻る', 'Return')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold mb-4 text-forest">{t(c.title.ja, c.title.en)}</h1>
        <p className="text-charcoal/80">{t(c.subtitle.ja, c.subtitle.en)}</p>
      </div>

      <div className="bg-white border border-borderGray p-8 md:p-12 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6 border-b border-borderGray pb-8">
            <div>
              <label htmlFor="inquiry-type" className="block text-sm font-bold text-charcoal mb-2">
                {t('お問い合わせ種類', 'Inquiry Type')} <span className="text-deepRed">*</span>
              </label>
              <select
                id="inquiry-type"
                required
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full h-11 px-4 border border-borderGray bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
              >
                <option value="">{t('選択してください', 'Please select')}</option>
                {c.inquiryTypes.map((type, idx) => (
                  <option key={idx} value={type.en}>
                    {t(type.ja, type.en)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6 border-b border-borderGray pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company-name" className="block text-sm font-bold text-charcoal mb-2">
                  {t('貴社名', 'Company Name')} <span className="text-deepRed">*</span>
                </label>
                <input
                  id="company-name"
                  required
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-bold text-charcoal mb-2">
                  {t('部署名', 'Department')}
                </label>
                <input
                  id="department"
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-person" className="block text-sm font-bold text-charcoal mb-2">
                  {t('ご担当者様名', 'Contact Person')} <span className="text-deepRed">*</span>
                </label>
                <input
                  id="contact-person"
                  required
                  type="text"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-bold text-charcoal mb-2">
                  {t('国・地域', 'Country or Region')} <span className="text-deepRed">*</span>
                </label>
                <input
                  id="country"
                  required
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2">
                  {t('メールアドレス', 'Email Address')} <span className="text-deepRed">*</span>
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-2">
                  {t('電話番号', 'Telephone')} <span className="text-deepRed">*</span>
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="product" className="block text-sm font-bold text-charcoal mb-2">
                  {t('対象商品・サービス', 'Product or Service Required')}
                </label>
                <input
                  id="product"
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-bold text-charcoal mb-2">
                  {t('想定数量', 'Estimated Quantity')}
                </label>
                <input
                  id="quantity"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full h-11 px-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2">
                {t('お問い合わせ内容', 'Message')} <span className="text-deepRed">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border border-borderGray focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
              ></textarea>
            </div>
          </div>

          <div className="pt-4 flex flex-col items-center">
            <label className="flex items-center space-x-3 mb-8 cursor-pointer">
              <input type="checkbox" required className="w-5 h-5 border-borderGray text-forest focus:ring-forest" />
              <span className="text-sm text-charcoal/80">
                {t('プライバシーポリシーに同意する', 'I agree to the Privacy Policy')} <span className="text-deepRed">*</span>
              </span>
            </label>
            <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto md:min-w-[200px] cursor-pointer">
              {t('送信する', 'Submit')}
            </Button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center text-sm text-charcoal/60 space-y-1">
        <p>{t(`営業時間: ${g.businessHours.ja}`, `Business Hours: ${g.businessHours.en}`)}</p>
        <p>{t(`お電話でのお問い合わせ: ${g.phoneDisplay.ja}`, `Contact by Phone: ${g.phoneDisplay.en}`)}</p>
        <p>{t(`メールでのお問い合わせ: ${g.email}`, `Email: ${g.email}`)}</p>
      </div>
    </div>
  );
}
