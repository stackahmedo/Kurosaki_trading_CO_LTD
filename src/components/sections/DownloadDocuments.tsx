import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FileDown } from 'lucide-react';
import { Button } from '../ui/Button';

export function DownloadDocuments() {
  const { t } = useLanguage();

  const documents = [
    { ja: '会社案内', en: 'Company Brochure' },
    { ja: 'サービス概要', en: 'Service Overview' },
    { ja: '取扱カテゴリー一覧', en: 'Product Categories List' },
    { ja: '商品調達依頼書', en: 'Sourcing Request Form' },
    { ja: '新規取引申込書', en: 'New Business Application' },
    { ja: '品質管理方針', en: 'Quality Management Policy' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-lightGray border-t border-borderGray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl lg:text-[32px] font-bold mb-4 text-charcoal">
            {t('会社・サービス資料', 'Downloadable Documents')}
          </h2>
          <div className="w-12 h-1 bg-deepRed mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {documents.map((doc, idx) => (
            <div key={idx} className="bg-white border border-borderGray p-6 flex items-center justify-between group">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-lightGray/50 flex items-center justify-center text-charcoal/50 group-hover:text-forest group-hover:bg-forest/10 transition-colors">
                  <FileDown strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <span className="font-medium text-[15px] text-charcoal">{t(doc.ja, doc.en)}</span>
              </div>
              <Button to="#" variant="outline" size="sm" className="hidden sm:inline-flex opacity-0 group-hover:opacity-100 transition-opacity">
                {t('資料をダウンロード', 'Download')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
