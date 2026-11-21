import React, { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { Button } from '../components/ui/Button';
import { ProductItem } from '../types/siteContent';
import { Search, Filter, ChevronDown, X } from 'lucide-react';

export default function Products() {
  const { t } = useLanguage();
  const { content } = useSiteContent();
  const prod = content.products;

  const [keyword, setKeyword] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStorages, setSelectedStorages] = useState<string[]>([]);
  const [selectedOrigin, setSelectedOrigin] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'category'>('newest');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const origins = useMemo(() => {
    const map = new Map<string, { ja: string; en: string }>();
    prod.items.forEach((p) => {
      if (!map.has(p.origin.en)) map.set(p.origin.en, p.origin);
    });
    return Array.from(map.values());
  }, [prod.items]);

  const toggleCategory = (catEn: string) => {
    setSelectedCategories((prev) =>
      prev.includes(catEn) ? prev.filter((c) => c !== catEn) : [...prev, catEn]
    );
  };

  const toggleStorage = (storageEn: string) => {
    setSelectedStorages((prev) =>
      prev.includes(storageEn) ? prev.filter((s) => s !== storageEn) : [...prev, storageEn]
    );
  };

  const filteredProducts = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    const list = prod.items.filter((item) => {
      if (q) {
        const hay = `${item.name.ja} ${item.name.en} ${item.category.ja} ${item.category.en} ${item.origin.ja} ${item.origin.en}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (selectedCategories.length > 0 && !selectedCategories.includes(item.category.en)) {
        return false;
      }
      if (selectedStorages.length > 0 && !selectedStorages.includes(item.storage.en)) {
        return false;
      }
      if (selectedOrigin !== 'All' && item.origin.en !== selectedOrigin) {
        return false;
      }
      return true;
    });
    if (sortBy === 'category') {
      return [...list].sort((a, b) => a.category.en.localeCompare(b.category.en));
    }
    return list;
  }, [prod.items, keyword, selectedCategories, selectedStorages, selectedOrigin, sortBy]);

  return (
    <div className="bg-warmWhite min-h-screen">
      <div className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6">{t(prod.title.ja, prod.title.en)}</h1>
          <p className="text-warmWhite/80 max-w-2xl mx-auto leading-relaxed">
            {t(prod.subtitle.ja, prod.subtitle.en)}
          </p>
        </div>
      </div>

      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white border border-borderGray p-6">
              <div className="flex items-center justify-between font-bold text-charcoal mb-6 border-b border-borderGray pb-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>{t('絞り込み', 'Filters')}</span>
                </div>
                {(keyword || selectedCategories.length > 0 || selectedStorages.length > 0 || selectedOrigin !== 'All') && (
                  <button
                    type="button"
                    onClick={() => {
                      setKeyword('');
                      setSelectedCategories([]);
                      setSelectedStorages([]);
                      setSelectedOrigin('All');
                    }}
                    className="text-xs text-deepRed hover:underline cursor-pointer"
                  >
                    {t('クリア', 'Clear')}
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={t('キーワードで検索...', 'Search by keyword...')}
                    className="w-full h-10 pl-10 pr-4 border border-borderGray focus:outline-none focus:border-forest text-sm"
                  />
                  <Search className="w-4 h-4 absolute left-3 top-3 text-charcoal/40" />
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-bold text-sm mb-3">{t('カテゴリー', 'Categories')}</h4>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    {prod.categories.map((cat, idx) => (
                      <li key={idx}>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat.en)}
                            onChange={() => toggleCategory(cat.en)}
                            className="border-borderGray text-forest focus:ring-forest"
                          />
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
                    {[
                      { ja: '常温', en: 'Ambient' },
                      { ja: '冷蔵', en: 'Chilled' },
                      { ja: '冷凍', en: 'Frozen' },
                    ].map((st) => (
                      <li key={st.en}>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedStorages.includes(st.en)}
                            onChange={() => toggleStorage(st.en)}
                            className="border-borderGray text-forest focus:ring-forest"
                          />
                          <span>{t(st.ja, st.en)}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Origin */}
                <div>
                  <h4 className="font-bold text-sm mb-3">{t('原産国', 'Country of Origin')}</h4>
                  <div className="relative">
                    <select
                      value={selectedOrigin}
                      onChange={(e) => setSelectedOrigin(e.target.value)}
                      className="w-full h-10 px-3 border border-borderGray appearance-none text-sm focus:outline-none focus:border-forest bg-white"
                    >
                      <option value="All">{t('すべて', 'All Origins')}</option>
                      {origins.map((orig) => (
                        <option key={orig.en} value={orig.en}>
                          {t(orig.ja, orig.en)}
                        </option>
                      ))}
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
              <span className="text-sm text-charcoal/60">
                {t(`全 ${filteredProducts.length} 件を表示`, `Showing ${filteredProducts.length} products`)}
              </span>
              <div className="flex items-center space-x-2 text-sm">
                <span>{t('並び替え:', 'Sort by:')}</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'category')}
                  className="border-none bg-transparent font-bold focus:outline-none cursor-pointer"
                >
                  <option value="newest">{t('新着順', 'Newest')}</option>
                  <option value="category">{t('カテゴリー順', 'By Category')}</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-borderGray p-12 text-center text-charcoal/60">
                {t('条件に一致する商品が見つかりませんでした。', 'No products match the selected filters.')}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-borderGray group flex flex-col">
                    <div className="aspect-[4/3] bg-lightGray relative overflow-hidden">
                      {product.imageUrl ? (
                        <img
                          src={product.imageUrl}
                          alt={t(product.name.ja, product.name.en)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-charcoal/20">
                          <span className="font-sans text-sm tracking-wider uppercase">Product Image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs font-bold text-forest mb-2 uppercase tracking-wider">
                        {t(product.category.ja, product.category.en)}
                      </div>
                      <h3 className="font-bold text-lg mb-4 font-serif leading-tight">
                        {t(product.name.ja, product.name.en)}
                      </h3>

                      <div className="space-y-1 mb-6 text-sm text-charcoal/70 flex-1">
                        <div className="flex justify-between border-b border-borderGray/50 pb-1">
                          <span>{t('原産国', 'Origin')}</span>
                          <span className="font-medium text-charcoal">{t(product.origin.ja, product.origin.en)}</span>
                        </div>
                        <div className="flex justify-between border-b border-borderGray/50 pb-1 pt-1">
                          <span>{t('温度帯', 'Storage')}</span>
                          <span className="font-medium text-charcoal">{t(product.storage.ja, product.storage.en)}</span>
                        </div>
                        <div className="flex justify-between pb-1 pt-1">
                          <span>{t('卸売対応', 'Wholesale')}</span>
                          <span className="font-medium text-charcoal">{t(product.wholesale.ja, product.wholesale.en)}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => setActiveProduct(product)}
                        className="w-full text-sm h-10 group-hover:bg-forest group-hover:text-white group-hover:border-forest cursor-pointer"
                      >
                        {t('詳細を見る', 'View Details')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="bg-white max-w-lg w-full border border-borderGray shadow-xl p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              className="absolute right-4 top-4 p-1.5 text-muted hover:text-charcoal cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-xs font-bold text-forest uppercase tracking-wider mb-2">
              {t(activeProduct.category.ja, activeProduct.category.en)}
            </div>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
              {t(activeProduct.name.ja, activeProduct.name.en)}
            </h2>
            {activeProduct.imageUrl && (
              <div className="aspect-[16/9] bg-lightGray mb-4 overflow-hidden">
                <img
                  src={activeProduct.imageUrl}
                  alt={t(activeProduct.name.ja, activeProduct.name.en)}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
              {t(activeProduct.description.ja, activeProduct.description.en)}
            </p>
            <div className="space-y-2 text-sm border-t border-b border-borderGray py-4 mb-6">
              <div className="flex justify-between">
                <span className="text-muted">{t('原産国', 'Origin')}</span>
                <span className="font-semibold">{t(activeProduct.origin.ja, activeProduct.origin.en)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">{t('温度帯', 'Storage')}</span>
                <span className="font-semibold">{t(activeProduct.storage.ja, activeProduct.storage.en)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">{t('卸売対応', 'Wholesale')}</span>
                <span className="font-semibold">{t(activeProduct.wholesale.ja, activeProduct.wholesale.en)}</span>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setActiveProduct(null)} className="cursor-pointer">
                {t('閉じる', 'Close')}
              </Button>
              <Button to="/contact?type=sourcing" variant="primary" size="sm">
                {t('この商品について問い合わせる', 'Inquire About Product')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
