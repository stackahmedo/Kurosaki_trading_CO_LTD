import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { Sprout, Search, Factory, ShieldCheck, Ship, Utensils, ArrowRight } from 'lucide-react';

const SOLUTION_ICONS = [Sprout, Search, Factory, ShieldCheck, Ship, Utensils];

export default function Solutions() {
  const { t } = useLanguage();
  const { content } = useSiteContent();
  const sol = content.solutions;

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6">{t(sol.title.ja, sol.title.en)}</h1>
          <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed">
            {t(sol.subtitle.ja, sol.subtitle.en)}
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {sol.items.map((item, index) => {
            const Icon = SOLUTION_ICONS[index % SOLUTION_ICONS.length];
            return (
              <div key={item.id} id={index.toString()} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <Icon className="w-12 h-12 text-forest mb-6" strokeWidth={1.5} />
                  <h2 className="font-serif text-3xl font-bold mb-6 text-charcoal">{t(item.title.ja, item.title.en)}</h2>
                  <div className="w-12 h-1 bg-deepRed mb-8"></div>
                  <p className="text-charcoal/80 leading-relaxed mb-8 text-lg">
                    {t(item.description.ja, item.description.en)}
                  </p>
                  <div className="bg-white border border-borderGray p-6 mb-8">
                    <h3 className="font-bold mb-4 font-serif">{t('お客様のメリット', 'Customer Benefits')}</h3>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-center text-charcoal/80">
                          <ArrowRight className="w-4 h-4 text-forest mr-2 shrink-0" />
                          {t(benefit.ja, benefit.en)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1 relative h-[400px]' : 'relative h-[400px]'}>
                  <div className="absolute inset-0 bg-lightGray rounded-sm overflow-hidden">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={t(item.title.ja, item.title.en)} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-forest/10 flex items-center justify-center">
                        <span className="text-forest/30 font-serif font-bold text-xl uppercase tracking-widest">
                          {t(item.title.ja, item.title.en)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
