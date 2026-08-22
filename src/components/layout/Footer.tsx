import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-charcoal text-white pt-20 shrink-0 border-t-4 border-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center p-1">
                <img src="/logo.svg" alt="KUROSAKI TRADING" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg leading-tight tracking-tight text-white">{t('黒崎トレーディング', 'KUROSAKI TRADING')}</span>
              </div>
            </Link>
            <p className="text-[14px] text-white/70 mb-8 leading-[1.8]">
              {t(
                '国内外の生産者と業務用厨房をつなぎ、調達から供給までの品質を一貫して管理します。',
                'Connecting domestic and international producers with professional kitchens, ensuring consistent quality.'
              )}
            </p>
            <Button to="/contact" variant="primary" size="sm" className="w-full sm:w-auto bg-white text-forest hover:bg-lightGray border-none h-11 px-6 font-bold">
              {t('お問い合わせ', 'Contact Us')}
            </Button>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold mb-6 text-white text-[15px]">{t('企業情報', 'Corporate')}</h4>
            <ul className="space-y-4 text-[14px] text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('黒崎トレーディングについて', 'About Us')}</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">{t('事業内容', 'Solutions')}</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">{t('お知らせ', 'News')}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-white text-[15px]">{t('事業領域', 'Business Areas')}</h4>
            <ul className="space-y-4 text-[14px] text-white/70">
              <li><Link to="/products" className="hover:text-white transition-colors">{t('商品・取扱分野', 'Products')}</Link></li>
              <li><Link to="/quality" className="hover:text-white transition-colors">{t('品質管理', 'Quality Assurance')}</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">{t('サステナビリティ', 'Sustainability')}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold mb-6 text-white text-[15px]">{t('お問い合わせ', 'Contact')}</h4>
            <ul className="space-y-3 text-[14px] text-white/70">
              <li className="leading-relaxed">
                {language === 'ja' ? (
                  <>〒124-0025<br />東京都葛飾区西新小岩1丁目２番１１号<br />キクヤビル１F</>
                ) : (
                  <>Kikuya Bldg 1F, 1-2-11<br />Nishishinkoiwa, Katsushika-ku<br />Tokyo 124-0025, Japan</>
                )}
              </li>
              <li className="pt-2">
                <a href="tel:0366576728" className="hover:text-white transition-colors">Tel: 03-6657-6728</a>
              </li>
              <li>
                <a href="mailto:kurosakitrading@gmail.com" className="hover:text-white transition-colors">Email: kurosakitrading@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 bg-[#0E1613]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] tracking-wider text-white/50 uppercase">
              &copy; {new Date().getFullYear()} KUROSAKI TRADING CO., LTD. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-[12px] font-medium tracking-wider text-white/70">
              <Link to="/privacy" className="hover:text-white transition-colors">{t('プライバシーポリシー', 'Privacy Policy')}</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">{t('サイトマップ', 'Sitemap')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
