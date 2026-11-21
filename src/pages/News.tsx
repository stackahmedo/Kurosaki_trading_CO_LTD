import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { ArrowRight, ChevronUp } from 'lucide-react';

export default function News() {
  const { t, language } = useLanguage();
  const { content } = useSiteContent();
  const newsData = content.news;

  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredNews =
    activeCategory === 'All'
      ? newsData.items
      : newsData.items.filter((item) => item.categoryId === activeCategory);

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6">{t(newsData.title.ja, newsData.title.en)}</h1>
        </div>
      </div>

      <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center border-b border-borderGray pb-8">
          {newsData.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 text-sm font-medium transition-colors rounded-full border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-forest text-white border-forest'
                  : 'bg-white text-charcoal border-borderGray hover:bg-lightGray'
              }`}
            >
              {t(cat.label.ja, cat.label.en)}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-6">
          {filteredNews.map((news) => {
            const catInfo = newsData.categories.find((c) => c.id === news.categoryId);
            const isExpanded = expandedId === news.id;
            return (
              <article
                key={news.id}
                onClick={() => setExpandedId(isExpanded ? null : news.id)}
                className="block group bg-white border border-borderGray hover:border-forest/50 transition-colors p-6 sm:p-8 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
                  <time className="text-charcoal/60 font-mono text-sm">{news.date}</time>
                  <span className="text-xs font-bold text-forest uppercase tracking-wider px-2 py-1 bg-forest/5 self-start sm:self-auto">
                    {catInfo ? t(catInfo.label.ja, catInfo.label.en) : ''}
                  </span>
                </div>
                <h2 className="text-xl font-bold font-serif mb-3 group-hover:text-deepRed transition-colors">
                  {language === 'ja' ? news.title.ja : news.title.en}
                </h2>
                <p className="text-charcoal/80 text-sm mb-4 leading-relaxed">
                  {language === 'ja' ? news.excerpt.ja : news.excerpt.en}
                </p>
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-borderGray text-charcoal/85 text-sm leading-relaxed whitespace-pre-line mb-4">
                    {language === 'ja' ? news.content.ja : news.content.en}
                  </div>
                )}
                <div className="text-forest text-sm font-medium flex items-center group-hover:text-deepRed transition-colors">
                  {isExpanded ? (
                    <>
                      {t('閉じる', 'Close')} <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      {t('続きを読む', 'Read More')} <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
