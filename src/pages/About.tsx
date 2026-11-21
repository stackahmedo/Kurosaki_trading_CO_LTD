import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { Quote } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();
  const { content } = useSiteContent();
  const about = content.about;

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="font-serif text-3xl lg:text-[40px] font-bold mb-6 text-charcoal">
          {t(about.title.ja, about.title.en)}
        </h1>
        <div className="w-12 h-1 bg-deepRed mx-auto"></div>
      </div>

      {/* Leadership Message */}
      <section className="mb-20">
        <div className="bg-white border border-borderGray p-8 lg:p-12 shadow-sm relative overflow-hidden">
          <Quote className="absolute right-6 top-6 w-16 h-16 text-forest/10 -scale-x-100 pointer-events-none" />

          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[2px] w-6 bg-deepRed"></div>
            <span className="text-deepRed text-xs font-bold uppercase tracking-[0.2em]">
              {t(about.message.badge.ja, about.message.badge.en)}
            </span>
          </div>

          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-charcoal mb-8">
            {t(about.message.heading.ja, about.message.heading.en)}
          </h2>

          <div className="space-y-5 text-charcoal/85 text-[15px] lg:text-[16px] leading-relaxed lg:leading-loose">
            {about.message.paragraphs.map((para, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {t(para.ja, para.en)}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-borderGray/60 flex flex-col items-end text-right">
            <span className="text-xs text-muted font-medium mb-1">
              {t(about.message.role.ja, about.message.role.en)}
            </span>
            <span className="font-serif text-xl font-bold text-charcoal tracking-wide">
              {t(about.message.presidentName.ja, about.message.presidentName.en)}
            </span>
          </div>
        </div>
      </section>

      {/* Company Profile Table */}
      <section>
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-[2px] w-6 bg-deepRed"></div>
          <span className="text-deepRed text-xs font-bold uppercase tracking-[0.2em]">
            {t(about.profile.badge.ja, about.profile.badge.en)}
          </span>
        </div>

        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-charcoal mb-8">
          {t(about.profile.heading.ja, about.profile.heading.en)}
        </h2>

        <div className="bg-white border border-borderGray p-8 lg:p-12 shadow-sm">
          <div className="divide-y divide-borderGray">
            {about.profile.rows.map((item) => (
              <div key={item.id} className="py-5 flex flex-col sm:flex-row items-start">
                <div className="w-full sm:w-1/3 font-bold text-charcoal mb-2 sm:mb-0 text-[15px]">
                  {t(item.label.ja, item.label.en)}
                </div>
                <div className="w-full sm:w-2/3 text-charcoal/80 bg-lightGray/50 p-3 sm:p-0 sm:bg-transparent rounded-sm text-[15px] leading-relaxed whitespace-pre-line">
                  {item.type === 'email' ? (
                    <a href={`mailto:${item.value.en}`} className="text-forest hover:underline">
                      {t(item.value.ja, item.value.en)}
                    </a>
                  ) : item.type === 'phone' ? (
                    <a href={`tel:${content.global.phone}`} className="text-forest hover:underline">
                      {t(item.value.ja, item.value.en)}
                    </a>
                  ) : (
                    t(item.value.ja, item.value.en)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
