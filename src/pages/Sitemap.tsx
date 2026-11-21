import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { ArrowRight, Building2, Briefcase, FileText, HelpCircle, Home as HomeIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Sitemap() {
  const { t } = useLanguage();
  const { content } = useSiteContent();
  const sm = content.sitemap;

  const activePages = content.pages.filter((p) => p.enabled);

  const builtInDescs: Record<string, { ja: string; en: string }> = {
    home: {
      ja: '黒崎トレーディング株式会社の公式サイトトップページ。主な事業、強み、グローバルネットワークをご紹介します。',
      en: 'Official homepage of Kurosaki Trading Co., Ltd., highlighting our core capabilities and global network.',
    },
    about: {
      ja: '代表者からのメッセージ、会社情報、所在地、主要取引銀行などの基本情報を掲載しています。',
      en: 'Message from the President, company profile, office address, and corporate information.',
    },
    news: {
      ja: '新商品のご案内や事業に関する最新のお知らせ・プレスリリースをご覧いただけます。',
      en: 'Latest announcements, product updates, and corporate news.',
    },
    solutions: {
      ja: '国内外の食材調達、卸売、加工、物流まで一貫したサプライチェーンソリューションをご案内します。',
      en: 'End-to-end food supply chain solutions spanning sourcing, wholesale, processing, and logistics.',
    },
    products: {
      ja: '輸入米穀・国産米をはじめ、業務用厨房・小売店向けの多様な取扱商品分野をご紹介します。',
      en: 'Overview of our product categories including imported and domestic rice and professional food ingredients.',
    },
    quality: {
      ja: '厳格な品質管理プロセス、コールドチェーン管理、トレーサビリティ体制についてご紹介します。',
      en: 'Our quality control processes, cold chain management, and end-to-end traceability standards.',
    },
    sustainability: {
      ja: '持続可能な食の供給に向けた重点取り組みと目標・進捗をご報告しています。',
      en: 'Our key sustainability initiatives, targets, and progress toward responsible sourcing.',
    },
    contact: {
      ja: '法人取引、商品調達、お見積もり、パートナーシップに関するご相談フォームです。',
      en: 'Inquiry form for B2B partnerships, product sourcing, and quotation requests.',
    },
    sitemap: {
      ja: '当サイト内の全ページ一覧と構成をご確認いただけます。',
      en: 'Complete directory and structure of all pages on this website.',
    },
  };

  const groups = [
    {
      titleJa: 'ホーム',
      titleEn: 'Home',
      subtitle: 'TOP',
      icon: <HomeIcon className="w-5 h-5 text-forest" />,
      pages: activePages.filter((p) => p.builtInKey === 'home'),
    },
    {
      titleJa: '企業情報',
      titleEn: 'Corporate',
      subtitle: 'CORPORATE',
      icon: <Building2 className="w-5 h-5 text-forest" />,
      pages: activePages.filter((p) => p.builtInKey === 'about' || p.builtInKey === 'news'),
    },
    {
      titleJa: '事業領域・商品',
      titleEn: 'Business & Products',
      subtitle: 'BUSINESS',
      icon: <Briefcase className="w-5 h-5 text-forest" />,
      pages: activePages.filter(
        (p) =>
          p.builtInKey === 'solutions' ||
          p.builtInKey === 'products' ||
          p.builtInKey === 'quality' ||
          p.builtInKey === 'sustainability'
      ),
    },
    {
      titleJa: 'カスタムページ',
      titleEn: 'Additional Pages',
      subtitle: 'PAGES',
      icon: <FileText className="w-5 h-5 text-forest" />,
      pages: activePages.filter((p) => !p.builtInKey),
    },
    {
      titleJa: 'お問い合わせ・その他',
      titleEn: 'Support & Other',
      subtitle: 'SUPPORT',
      icon: <HelpCircle className="w-5 h-5 text-forest" />,
      pages: activePages.filter((p) => p.builtInKey === 'contact' || p.builtInKey === 'sitemap'),
    },
  ].filter((g) => g.pages.length > 0);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="text-center mb-16">
        <span className="text-deepRed text-xs font-bold uppercase tracking-[0.2em] block mb-3">
          {sm.badge}
        </span>
        <h1 className="font-serif text-3xl lg:text-[40px] font-bold mb-6 text-charcoal">
          {t(sm.title.ja, sm.title.en)}
        </h1>
        <div className="w-12 h-1 bg-deepRed mx-auto mb-6"></div>
        <p className="text-charcoal/75 text-[15px] max-w-2xl mx-auto leading-relaxed">
          {t(sm.subtitle.ja, sm.subtitle.en)}
        </p>
      </div>

      <div className="space-y-12">
        {groups.map((group) => (
          <section key={group.subtitle} className="bg-white border border-borderGray p-8 lg:p-10 shadow-sm">
            <div className="flex items-center justify-between border-b border-borderGray pb-5 mb-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-[2px] w-6 bg-deepRed"></div>
                  <span className="text-deepRed text-xs font-bold uppercase tracking-[0.2em]">
                    {group.subtitle}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-charcoal flex items-center gap-3">
                  {group.icon}
                  <span>{t(group.titleJa, group.titleEn)}</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {group.pages.map((page) => {
                const desc = page.builtInKey
                  ? builtInDescs[page.builtInKey]
                  : page.subtitle ?? { ja: '', en: '' };
                return (
                  <Link
                    key={page.id}
                    to={page.path}
                    className="group block p-5 border border-borderGray/80 bg-warmWhite/60 hover:bg-lightGray/70 hover:border-forest/50 transition-all rounded-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[16px] text-charcoal group-hover:text-forest transition-colors">
                        {t(page.navLabel.ja, page.navLabel.en)}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-muted group-hover:text-deepRed group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    {desc && (desc.ja || desc.en) && (
                      <p className="text-[13px] text-charcoal/70 leading-relaxed mb-3">
                        {t(desc.ja, desc.en)}
                      </p>
                    )}
                    <span className="text-[11px] font-mono text-muted/80">{page.path}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 bg-forest text-white p-8 lg:p-12 text-center shadow-sm">
        <h2 className="font-serif text-2xl font-bold mb-3">
          {t(sm.ctaTitle.ja, sm.ctaTitle.en)}
        </h2>
        <p className="text-white/80 text-[15px] mb-6 max-w-xl mx-auto leading-relaxed">
          {t(sm.ctaDescription.ja, sm.ctaDescription.en)}
        </p>
        <Button to="/contact" variant="primary" className="bg-white text-forest hover:bg-lightGray border-none font-bold">
          {t(sm.ctaButton.ja, sm.ctaButton.en)}
        </Button>
      </div>
    </div>
  );
}
