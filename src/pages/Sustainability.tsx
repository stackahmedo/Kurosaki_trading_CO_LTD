import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { Leaf, Recycle, Users, Sprout } from 'lucide-react';

const INITIATIVE_ICONS = [Leaf, Recycle, Sprout, Users];

export default function Sustainability() {
  const { t } = useLanguage();
  const { content } = useSiteContent();
  const s = content.sustainability;

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-forest text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-warmWhite" />
          <h1 className="font-serif text-4xl font-bold mb-6">{t(s.title.ja, s.title.en)}</h1>
          <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed">
            {t(s.subtitle.ja, s.subtitle.en)}
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6 text-charcoal">
              {t(s.initiativesTitle.ja, s.initiativesTitle.en)}
            </h2>
            <div className="w-12 h-1 bg-deepRed mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {s.initiatives.map((item, idx) => {
              const Icon = INITIATIVE_ICONS[idx % INITIATIVE_ICONS.length];
              return (
                <div key={item.id} className="flex flex-col sm:flex-row gap-6 bg-white p-8 border border-borderGray">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-lightGray rounded-full flex items-center justify-center text-forest">
                      <Icon strokeWidth={1.5} className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-serif">{t(item.title.ja, item.title.en)}</h3>
                    <p className="text-charcoal/80 leading-relaxed text-sm">{t(item.description.ja, item.description.en)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-charcoal text-white p-12">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">
            {t(s.targetsTitle.ja, s.targetsTitle.en)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {s.kpis.map((kpi) => (
              <div key={kpi.id} className="border border-white/20 p-6 text-center">
                <div className="text-sm text-warmWhite/60 mb-2 uppercase tracking-wider">
                  {t(kpi.label.ja, kpi.label.en)}
                </div>
                <div className="font-serif text-4xl font-bold text-warmWhite mb-4">{kpi.value}</div>
                <p className="text-sm text-warmWhite/80">{t(kpi.description.ja, kpi.description.en)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
