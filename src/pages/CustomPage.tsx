import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ManagedPage } from '../types/siteContent';
import { Button } from '../components/ui/Button';

export default function CustomPage({ page }: { page: ManagedPage }) {
  const { t } = useLanguage();
  const title = page.title ?? page.navLabel;
  const subtitle = page.subtitle ?? { ja: '', en: '' };
  const sections = page.sections ?? [];

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24 relative overflow-hidden">
        {page.heroImageUrl && (
          <img
            src={page.heroImageUrl}
            alt={t(title.ja, title.en)}
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
        )}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            {t(title.ja, title.en)}
          </h1>
          <div className="w-12 h-1 bg-deepRed mx-auto mb-6"></div>
          {(subtitle.ja || subtitle.en) && (
            <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {t(subtitle.ja, subtitle.en)}
            </p>
          )}
        </div>
      </div>

      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {sections.length === 0 ? (
          <div className="bg-white border border-borderGray p-12 text-center text-charcoal/60">
            {t('コンテンツは管理画面から編集できます。', 'Edit this page content from the Admin Panel.')}
          </div>
        ) : (
          sections.map((sec) => (
            <section key={sec.id} className="bg-white border border-borderGray p-8 lg:p-12 shadow-sm">
              {(sec.heading.ja || sec.heading.en) && (
                <>
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    {t(sec.heading.ja, sec.heading.en)}
                  </h2>
                  <div className="w-10 h-1 bg-deepRed mb-6"></div>
                </>
              )}
              {sec.imageUrl && (
                <div className="mb-6 overflow-hidden border border-borderGray bg-lightGray">
                  <img
                    src={sec.imageUrl}
                    alt={t(sec.heading.ja, sec.heading.en)}
                    className="w-full max-h-[420px] object-cover"
                  />
                </div>
              )}
              <div className="text-charcoal/85 text-[15px] leading-[1.9] whitespace-pre-line">
                {t(sec.body.ja, sec.body.en)}
              </div>
            </section>
          ))
        )}

        <div className="bg-forest text-white p-8 lg:p-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">
            {t('お問い合わせ', 'Contact Us')}
          </h2>
          <p className="text-white/80 text-sm mb-6">
            {t(
              'ご質問やご相談がございましたら、お気軽にお問い合わせください。',
              'If you have any questions or inquiries, please feel free to contact us.'
            )}
          </p>
          <Button to="/contact" variant="primary" className="bg-white text-forest hover:bg-lightGray border-none font-bold">
            {t('お問い合わせフォームへ', 'Go to Contact Form')}
          </Button>
        </div>
      </div>
    </div>
  );
}
