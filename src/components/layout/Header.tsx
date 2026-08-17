import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', ja: 'ホーム', en: 'Home' },
    { to: '/about', ja: '会社概要', en: 'About Us' },
    { to: '/solutions', ja: '事業内容', en: 'Solutions' },
    { to: '/products', ja: '商品・取扱分野', en: 'Products' },
    { to: '/quality', ja: '品質管理', en: 'Quality Assurance' },
    { to: '/sustainability', ja: 'サステナビリティ', en: 'Sustainability' },
    { to: '/news', ja: 'お知らせ', en: 'News' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-borderGray shrink-0',
        isScrolled ? 'h-[60px]' : 'h-[72px]'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.svg" alt="KUROSAKI TRADING" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-[14px] font-bold leading-tight tracking-wider text-forest">
              {t('黒崎トレーディング株式会社', 'KUROSAKI TRADING CO., LTD.')}
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-[13px] font-semibold transition-colors py-1',
                  isActive 
                    ? 'text-deepRed border-b-2 border-deepRed' 
                    : 'text-charcoal hover:text-forest'
                )}
              >
                {language === 'ja' ? link.ja : link.en}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-[12px] font-medium">
            <button
              onClick={() => setLanguage('ja')}
              className={language === 'ja' ? 'text-forest border-b border-forest pb-0.5' : 'text-charcoal/40 hover:text-forest cursor-pointer transition-colors pb-0.5'}
            >
              日本語
            </button>
            <span className="text-borderGray">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={language === 'en' ? 'text-forest border-b border-forest pb-0.5' : 'text-charcoal/40 hover:text-forest cursor-pointer transition-colors pb-0.5'}
            >
              EN
            </button>
          </div>
          
          <Button to="/contact" variant="primary" size="sm">
            {language === 'ja' ? 'お問い合わせ' : 'Contact Us'}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-borderGray shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'block py-2 text-base font-semibold transition-colors',
                  isActive ? 'text-deepRed' : 'text-charcoal'
                )}
              >
                {language === 'ja' ? link.ja : link.en}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-borderGray flex flex-col space-y-4">
            <div className="flex items-center justify-end space-x-4 py-2">
              <div className="flex items-center space-x-2 text-[14px] font-medium">
                <button
                  onClick={() => setLanguage('ja')}
                  className={language === 'ja' ? 'text-forest border-b border-forest pb-0.5' : 'text-charcoal/40 hover:text-forest transition-colors pb-0.5'}
                >
                  日本語
                </button>
                <span className="text-borderGray">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'text-forest border-b border-forest pb-0.5' : 'text-charcoal/40 hover:text-forest transition-colors pb-0.5'}
                >
                  EN
                </button>
              </div>
            </div>
            <Button to="/contact" variant="primary" className="w-full">
              {language === 'ja' ? 'お問い合わせ' : 'Contact Us'}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
