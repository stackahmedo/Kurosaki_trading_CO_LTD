import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SiteContentProvider, useSiteContent } from './context/SiteContentContext';
import { BuiltInPageKey } from './types/siteContent';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Quality from './pages/Quality';
import Sustainability from './pages/Sustainability';
import News from './pages/News';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import CustomPage from './pages/CustomPage';
import Admin from './pages/Admin';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <div className="py-32 max-w-xl mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <div className="text-deepRed text-xs font-bold uppercase tracking-[0.2em] mb-3">404</div>
      <h1 className="font-serif text-3xl font-bold text-charcoal mb-4">
        {t('ページが見つかりません', 'Page Not Found')}
      </h1>
      <p className="text-sm text-charcoal/70 mb-8">
        {t(
          'お探しのページは削除されたか、URLが変更された可能性があります。',
          'The page you are looking for may have been removed or its URL has changed.'
        )}
      </p>
      <Link
        to="/"
        className="px-6 py-2.5 bg-forest text-white text-sm font-bold rounded hover:bg-deepForest transition-colors"
      >
        {t('トップページへ戻る', 'Return to Home')}
      </Link>
    </div>
  );
}

const BUILTIN_COMPONENTS: Record<BuiltInPageKey, React.ReactNode> = {
  home: <Home />,
  about: <About />,
  solutions: <Solutions />,
  products: <Products />,
  quality: <Quality />,
  sustainability: <Sustainability />,
  news: <News />,
  contact: <Contact />,
  sitemap: <Sitemap />,
};

function AppRoutes() {
  const location = useLocation();
  const { content } = useSiteContent();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    );
  }

  const activePages = content.pages.filter((p) => p.enabled);

  return (
    <Layout>
      <Routes>
        {activePages.map((page) => (
          <Route
            {...({ key: page.id } as Record<string, unknown>)}
            path={page.path}
            element={
              page.builtInKey ? BUILTIN_COMPONENTS[page.builtInKey] : <CustomPage page={page} />
            }
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <SiteContentProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <AppRoutes />
        </Router>
      </LanguageProvider>
    </SiteContentProvider>
  );
}
