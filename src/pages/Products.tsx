import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { Search, Filter, ChevronDown } from 'lucide-react';

export default function Products() {
  const { t } = useLanguage();
  
  const categories = [
    { ja: 'すべて', en: 'All' },
    { ja: '農産物・生鮮食品', en: 'Agricultural & Fresh' },
    { ja: '冷凍食品', en: 'Frozen Foods' },
    { ja: '加工食品', en: 'Processed Foods' },
    { ja: '調味料・スパイス', en: 'Seasonings & Spices' },
    { ja: '業務用食材', en: 'Foodservice Ingredients' },
  ];

  const products = [
    { id: 1, catJa: '農産物・生鮮食品', catEn: 'Agricultural & Fresh', nameJa: '厳選 国産コシヒカリ', nameEn: 'Premium Domestic Koshihikari Rice', originJa: '日本', originEn: 'Japan', storageJa: '常温', storageEn: 'Ambient' },
    { id: 2, catJa: '冷凍食品', catEn: 'Frozen Foods', nameJa: '業務用 冷凍ブロッコリー', nameEn: 'Commercial Frozen Broccoli', originJa: '中国', originEn: 'China', storageJa: '冷凍', storageEn: 'Frozen' },
    { id: 3, catJa: '加工食品', catEn: 'Processed Foods', nameJa: 'オーガニック トマトピューレ', nameEn: 'Organic Tomato Puree', originJa: 'イタリア', originEn: 'Italy', storageJa: '常温', storageEn: 'Ambient' },
    { id: 4, catJa: '調味料・スパイス', catEn: 'Seasonings & Spices', nameJa: '特撰 濃口醤油（業務用）', nameEn: 'Special Dark Soy Sauce (Bulk)', originJa: '日本', originEn: 'Japan', storageJa: '常温', storageEn: 'Ambient' },
    { id: 5, catJa: '業務用食材', catEn: 'Foodservice Ingredients', nameJa: 'チキンブイヨン 無添加', nameEn: 'Additive-free Chicken Bouillon', originJa: 'タイ', originEn: 'Thailand', storageJa: '常温', storageEn: 'Ambient' },
    { id: 6, catJa: '冷凍食品', catEn: 'Frozen Foods', nameJa: '冷凍アトランティックサーモン', nameEn: 'Frozen Atlantic Salmon', originJa: 'ノルウェー', originEn: 'Norway', storageJa: '冷凍', storageEn: 'Frozen' },
  ];

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6">{t('商品・取扱分野', 'Products')}</h1>
          <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed">
            {t(
              '外食産業、小売業、食品メーカー様向けに、世界中から厳選した高品質な食材を提供しています。',
              'We provide high-quality ingredients carefully selected from around the world for the foodservice industry, retailers, and food manufacturers.'
            )}
          </p>
        </div>
      </div>

      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white border border-borderGray p-6">
              <div className="flex items-center space-x-2 font-bold text-charcoal mb-6 border-b border-borderGray pb-4">
                <Filter className="w-5 h-5" />
                <span>{t('絞り込み', 'Filters')}</span>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder={t('キーワードで検索...', 'Search by keyword...')} 
                      className="w-full h-10 pl-10 pr-4 border border-borderGray focus:outline-none focus:border-forest text-sm"
                    />
                    <Search className="w-4 h-4 absolute left-3 top-3 text-charcoal/40" />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-bold text-sm mb-3">{t('カテゴリー', 'Categories')}</h4>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    {categories.map((cat, idx) => (
                      <li key={idx}>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="border-borderGray text-forest focus:ring-forest" defaultChecked={idx === 0} />
                          <span>{t(cat.ja, cat.en)}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Storage Condition */}
                <div>
                  <h4 className="font-bold text-sm mb-3">{t('保存温度帯', 'Storage Condition')}</h4>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="border-borderGray text-forest focus:ring-forest" />
                        <span>{t('常温', 'Ambient')}</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="border-borderGray text-forest focus:ring-forest" />
                        <span>{t('冷蔵', 'Chilled')}</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="border-borderGray text-forest focus:ring-forest" />
                        <span>{t('冷凍', 'Frozen')}</span>
                      </label>
                    </li>
                  </ul>
                </div>

                {/* Origin Placeholders */}
                <div>
                  <h4 className="font-bold text-sm mb-3">{t('原産国', 'Country of Origin')}</h4>
                  <div className="relative">
                    <select className="w-full h-10 px-3 border border-borderGray appearance-none text-sm focus:outline-none focus:border-forest bg-white">
                      <option>{t('すべて', 'All Origins')}</option>
                      <option>{t('日本', 'Japan')}</option>
                      <option>{t('アジア', 'Asia')}</option>
                      <option>{t('ヨーロッパ', 'Europe')}</option>
                      <option>{t('北米', 'North America')}</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-3 text-charcoal/40 pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-charcoal/60">{t('全 124 件中 1-6 件を表示', 'Showing 1-6 of 124 products')}</span>
              <div className="flex items-center space-x-2 text-sm">
                <span>{t('並び替え:', 'Sort by:')}</span>
                <select className="border-none bg-transparent font-bold focus:outline-none">
                  <option>{t('新着順', 'Newest')}</option>
                  <option>{t('カテゴリー順', 'By Category')}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white border border-borderGray group">
                  <div className="aspect-[4/3] bg-lightGray relative overflow-hidden">
                    {/* Placeholder image */}
                    <div className="absolute inset-0 flex items-center justify-center text-charcoal/20">
                       <span className="font-sans text-sm tracking-wider uppercase">Product Image</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold text-forest mb-2 uppercase tracking-wider">{t(product.catJa, product.catEn)}</div>
                    <h3 className="font-bold text-lg mb-4 font-serif leading-tight">{t(product.nameJa, product.nameEn)}</h3>
                    
                    <div className="space-y-1 mb-6 text-sm text-charcoal/70">
                      <div className="flex justify-between border-b border-borderGray/50 pb-1">
                        <span>{t('原産国', 'Origin')}</span>
                        <span className="font-medium text-charcoal">{t(product.originJa, product.originEn)}</span>
                      </div>
                      <div className="flex justify-between border-b border-borderGray/50 pb-1 pt-1">
                        <span>{t('温度帯', 'Storage')}</span>
                        <span className="font-medium text-charcoal">{t(product.storageJa, product.storageEn)}</span>
                      </div>
                      <div className="flex justify-between pb-1 pt-1">
                        <span>{t('卸売対応', 'Wholesale')}</span>
                        <span className="font-medium text-charcoal">{t('可能', 'Available')}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full text-sm h-10 group-hover:bg-forest group-hover:text-white group-hover:border-forest">
                      {t('詳細を見る', 'View Details')}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-center mt-12 space-x-2">
              <button className="w-10 h-10 border border-borderGray flex items-center justify-center hover:bg-lightGray transition-colors disabled:opacity-50">&lt;</button>
              <button className="w-10 h-10 border border-forest bg-forest text-white flex items-center justify-center">1</button>
              <button className="w-10 h-10 border border-borderGray flex items-center justify-center hover:bg-lightGray transition-colors">2</button>
              <button className="w-10 h-10 border border-borderGray flex items-center justify-center hover:bg-lightGray transition-colors">3</button>
              <span className="w-10 h-10 flex items-center justify-center">...</span>
              <button className="w-10 h-10 border border-borderGray flex items-center justify-center hover:bg-lightGray transition-colors">&gt;</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
