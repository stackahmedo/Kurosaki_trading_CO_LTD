import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { ShieldCheck, Search, Activity, FileCheck2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

const PROCESS_ICONS = [Search, Activity, FileCheck2];

export default function Quality() {
  const { t } = useLanguage();
  const { content } = useSiteContent();
  const q = content.quality;

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-forest" />
          <h1 className="font-serif text-4xl font-bold mb-6">{t(q.title.ja, q.title.en)}</h1>
          <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed">
            {t(q.subtitle.ja, q.subtitle.en)}
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-charcoal">
            {t(q.processTitle.ja, q.processTitle.en)}
          </h2>
          <div className="w-12 h-1 bg-deepRed mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {q.processes.map((proc, idx) => {
              const Icon = PROCESS_ICONS[idx % PROCESS_ICONS.length];
              return (
                <div
                  key={proc.id}
                  className="bg-white border border-borderGray p-8 text-left relative overflow-hidden group hover:border-forest/50 transition-colors"
                >
                  <Icon className="w-10 h-10 text-forest mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-4 font-serif">{t(proc.title.ja, proc.title.en)}</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">{t(proc.description.ja, proc.description.en)}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-forest translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-borderGray p-8 md:p-12 mb-24">
          <h2 className="font-serif text-2xl font-bold mb-8 text-charcoal text-center">
            {t(q.coldChain.title.ja, q.coldChain.title.en)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {q.coldChain.paragraphs.map((p, idx) => (
                <p key={idx} className="text-charcoal/80 leading-relaxed">
                  {t(p.ja, p.en)}
                </p>
              ))}
            </div>
            <div className="bg-lightGray flex items-center justify-center p-8 border border-borderGray/50 min-h-[220px] overflow-hidden">
              {q.coldChain.imageUrl ? (
                <img src={q.coldChain.imageUrl} alt="Cold Chain" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center">
                  <div className="font-mono text-xs text-charcoal/50 mb-3 uppercase tracking-wider">
                    Cold Chain Flow
                  </div>
                  <div className="flex flex-wrap gap-2 items-center justify-center text-forest font-bold text-sm">
                    <span>{t('農場', 'Farm')}</span> &rarr; <span>{t('加工工場', 'Factory')}</span> &rarr;{' '}
                    <span>{t('低温物流', 'Logistics')}</span> &rarr; <span>{t('厨房', 'Kitchen')}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center bg-forest p-12 text-white">
          <h2 className="font-serif text-2xl font-bold mb-4">{t(q.cta.title.ja, q.cta.title.en)}</h2>
          <p className="text-warmWhite/80 mb-8 max-w-2xl mx-auto">
            {t(q.cta.description.ja, q.cta.description.en)}
          </p>
          <Button to="/contact?type=quality" variant="outline" className="border-white text-white hover:bg-white hover:text-forest">
            {t(q.cta.buttonLabel.ja, q.cta.buttonLabel.en)}
          </Button>
        </div>
      </div>
    </div>
  );
}
