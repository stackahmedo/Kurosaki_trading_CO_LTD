import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function News() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    { id: 'All', ja: 'すべて', en: 'All' },
    { id: 'Corporate', ja: '会社情報', en: 'Corporate' },
    { id: 'Products', ja: '商品情報', en: 'Products' },
    { id: 'Quality', ja: '品質管理', en: 'Quality' },
    { id: 'Sustainability', ja: 'サステナビリティ', en: 'Sustainability' },
  ];

  const newsItems = [
    { id: 1, date: '2023.10.15', catId: 'Corporate', titleJa: '東京本社移転のお知らせ', titleEn: 'Notice of Tokyo Head Office Relocation', excerptJa: '業務拡大に伴い、東京本社を丸の内へ移転いたしました。', excerptEn: 'Due to business expansion, our Tokyo head office has relocated to Marunouchi.' },
    { id: 2, date: '2023.09.01', catId: 'Products', titleJa: '新規取り扱い：オーガニック野菜シリーズ', titleEn: 'New Product Line: Organic Vegetable Series', excerptJa: '契約農家と共同開発した、業務用のオーガニック野菜シリーズの提供を開始します。', excerptEn: 'We are launching a new organic vegetable series for foodservice, co-developed with contract farmers.' },
    { id: 3, date: '2023.07.20', catId: 'Sustainability', titleJa: 'フードロス削減に向けた新プロジェクト', titleEn: 'New Project for Food Loss Reduction', excerptJa: '未利用食材を活用した新しい加工食品の開発プロジェクトをスタートしました。', excerptEn: 'We have started a new project to develop processed foods utilizing unused ingredients.' },
    { id: 4, date: '2023.05.10', catId: 'Quality', titleJa: '新設加工センターにてHACCP認証取得', titleEn: 'HACCP Certification Acquired at New Processing Center', excerptJa: 'より一層の品質管理強化のため、新設の関東加工センターにおいてHACCP認証を取得しました。', excerptEn: 'To further strengthen quality control, our new Kanto Processing Center has acquired HACCP certification.' },
    { id: 5, date: '2023.04.01', catId: 'Corporate', titleJa: '代表取締役社長 交代のお知らせ', titleEn: 'Notice of Change in President and CEO', excerptJa: '新代表取締役社長の就任についてお知らせいたします。', excerptEn: 'Notice regarding the appointment of our new President and CEO.' },
  ];

  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.catId === activeCategory);

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6">{t('お知らせ', 'News & Updates')}</h1>
        </div>
      </div>

      <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center border-b border-borderGray pb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 text-sm font-medium transition-colors rounded-full border ${
                activeCategory === cat.id 
                  ? 'bg-forest text-white border-forest' 
                  : 'bg-white text-charcoal border-borderGray hover:bg-lightGray'
              }`}
            >
              {t(cat.ja, cat.en)}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-6">
          {filteredNews.map(news => {
            const catInfo = categories.find(c => c.id === news.catId);
            return (
              <a key={news.id} href="#" className="block group bg-white border border-borderGray hover:border-forest/50 transition-colors p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
                  <time className="text-charcoal/60 font-mono text-sm">{news.date}</time>
                  <span className="text-xs font-bold text-forest uppercase tracking-wider px-2 py-1 bg-forest/5 self-start sm:self-auto">
                    {catInfo ? t(catInfo.ja, catInfo.en) : ''}
                  </span>
                </div>
                <h2 className="text-xl font-bold font-serif mb-3 group-hover:text-deepRed transition-colors">
                  {language === 'ja' ? news.titleJa : news.titleEn}
                </h2>
                <p className="text-charcoal/80 text-sm mb-6 leading-relaxed">
                  {language === 'ja' ? news.excerptJa : news.excerptEn}
                </p>
                <div className="text-forest text-sm font-medium flex items-center group-hover:text-deepRed transition-colors">
                  {t('続きを読む', 'Read More')} <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </a>
            );
          })}
        </div>
        
        {/* Pagination Placeholder */}
        <div className="flex justify-center mt-16 space-x-2">
          <button className="w-10 h-10 border border-borderGray flex items-center justify-center hover:bg-lightGray transition-colors disabled:opacity-50">&lt;</button>
          <button className="w-10 h-10 border border-forest bg-forest text-white flex items-center justify-center">1</button>
          <button className="w-10 h-10 border border-borderGray flex items-center justify-center hover:bg-lightGray transition-colors">2</button>
          <button className="w-10 h-10 border border-borderGray flex items-center justify-center hover:bg-lightGray transition-colors">&gt;</button>
        </div>

      </div>
    </div>
  );
}
