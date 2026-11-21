import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useSiteContent } from '../../context/SiteContentContext';
import { Button } from '../ui/Button';
import { SocialIcon } from '../ui/SocialIcons';

export function Footer() {
  const { t } = useLanguage();
  const { content } = useSiteContent();
  const g = content.global;

  const corporateLinks = content.pages.filter(
    (p) => p.enabled && p.showInFooter && p.footerGroup === 'corporate'
  );
  const businessLinks = content.pages.filter(
    (p) => p.enabled && p.showInFooter && p.footerGroup === 'business'
  );
  const bottomLinks = content.pages.filter(
    (p) => p.enabled && p.showInFooter && p.footerGroup === 'bottom'
  );
  const contactPage = content.pages.find((p) => p.builtInKey === 'contact' && p.enabled);
  const activeSocials = (g.socialLinks ?? []).filter((s) => s.enabled && s.url.trim() !== '');

  return (
    <footer className="bg-charcoal text-white pt-20 shrink-0 border-t-4 border-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center p-1">
                <img src={g.logoUrl} alt={g.shortName.en} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg leading-tight tracking-tight text-white">
                  {t(g.shortName.ja, g.shortName.en)}
                </span>
              </div>
            </Link>
            <p className="text-[14px] text-white/70 mb-8 leading-[1.8]">
              {t(g.footerDescription.ja, g.footerDescription.en)}
            </p>
            {contactPage && (
              <Button
                to={contactPage.path}
                variant="primary"
                size="sm"
                className="w-full sm:w-auto bg-white text-forest hover:bg-lightGray border-none h-11 px-6 font-bold"
              >
                {t(contactPage.navLabel.ja, contactPage.navLabel.en)}
              </Button>
            )}
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold mb-6 text-white text-[15px]">{t('企業情報', 'Corporate')}</h4>
            <ul className="space-y-4 text-[14px] text-white/70">
              {corporateLinks.map((p) => (
                <li key={p.id}>
                  <Link to={p.path} className="hover:text-white transition-colors">
                    {t(p.navLabel.ja, p.navLabel.en)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-white text-[15px]">{t('事業領域', 'Business Areas')}</h4>
            <ul className="space-y-4 text-[14px] text-white/70">
              {businessLinks.map((p) => (
                <li key={p.id}>
                  <Link to={p.path} className="hover:text-white transition-colors">
                    {t(p.navLabel.ja, p.navLabel.en)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold mb-6 text-white text-[15px]">{t('お問い合わせ', 'Contact')}</h4>
            <ul className="space-y-3 text-[14px] text-white/70">
              <li className="leading-relaxed whitespace-pre-line">
                {t(g.address.ja, g.address.en)}
              </li>
              <li className="pt-2">
                <a href={`tel:${g.phone}`} className="hover:text-white transition-colors">
                  Tel: {t(g.phoneDisplay.ja, g.phoneDisplay.en)}
                </a>
              </li>
              <li>
                <a href={`mailto:${g.email}`} className="hover:text-white transition-colors">
                  Email: {g.email}
                </a>
              </li>
            </ul>
            {activeSocials.length > 0 && (
              <div className="mt-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-3">
                  {t('公式SNS', 'Follow Us')}
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {activeSocials.map((soc) => {
                    const href = /^https?:\/\//i.test(soc.url.trim())
                      ? soc.url.trim()
                      : `https://${soc.url.trim()}`;
                    return (
                      <a
                        key={soc.id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={soc.label || soc.platform}
                        title={soc.label || soc.platform}
                        className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-forest hover:border-forest transition-all"
                      >
                        <SocialIcon platform={soc.platform} className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0E1613]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] tracking-wider text-white/50 uppercase">
              &copy; {new Date().getFullYear()} {g.copyright}
            </p>
            <div className="flex space-x-6 text-[12px] font-medium tracking-wider text-white/70">
              {bottomLinks.map((p) => (
                <Link key={p.id} to={p.path} className="hover:text-white transition-colors">
                  {t(p.navLabel.ja, p.navLabel.en)}
                </Link>
              ))}
              <Link to="/admin" className="hover:text-white transition-colors opacity-60 hover:opacity-100">
                {t('管理画面', 'Admin')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
