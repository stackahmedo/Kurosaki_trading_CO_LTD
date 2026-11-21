import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';
import { BuiltInPageKey } from '../types/siteContent';
import { HomeEditor } from './admin/HomeEditor';
import { CustomPageEditor, PagesManager } from './admin/PagesManager';
import {
  AboutEditor,
  BackupSettingsEditor,
  ContactEditor,
  GlobalEditor,
  InquiriesInbox,
  NewsEditor,
  ProductsEditor,
  QualityEditor,
  SitemapEditor,
  SolutionsEditor,
  SustainabilityEditor,
  ThemeEditor,
} from './admin/PageEditors';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ExternalLink,
  FilePlus2,
  FileText,
  Globe,
  Home as HomeIcon,
  Inbox,
  Layers,
  LayoutDashboard,
  Leaf,
  Lock,
  LogOut,
  Map,
  Menu,
  Newspaper,
  Package,
  Palette,
  Settings,
  ShieldCheck,
  X,
} from 'lucide-react';

const ADMIN_PASS_KEY = 'kurosaki_admin_pass_v1';
const ADMIN_SESSION_KEY = 'kurosaki_admin_auth_v1';
const DEFAULT_PASSCODE = 'admin123';

type StaticTabId =
  | 'dashboard'
  | 'pages'
  | 'global'
  | 'theme'
  | BuiltInPageKey
  | 'inquiries'
  | 'settings';

type TabId = StaticTabId | `custom:${string}`;

const BUILTIN_ICONS: Record<BuiltInPageKey, React.ReactNode> = {
  home: <HomeIcon className="w-4 h-4" />,
  about: <Building2 className="w-4 h-4" />,
  solutions: <Briefcase className="w-4 h-4" />,
  products: <Package className="w-4 h-4" />,
  quality: <ShieldCheck className="w-4 h-4" />,
  sustainability: <Leaf className="w-4 h-4" />,
  news: <Newspaper className="w-4 h-4" />,
  contact: <FileText className="w-4 h-4" />,
  sitemap: <Map className="w-4 h-4" />,
};

export default function Admin() {
  const { content, inquiries } = useSiteContent();
  const [authenticated, setAuthenticated] = useState<boolean>(
    () => sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true'
  );
  const [passInput, setPassInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getStoredPasscode = () => localStorage.getItem(ADMIN_PASS_KEY) || DEFAULT_PASSCODE;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passInput === getStoredPasscode()) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      setAuthenticated(true);
      setAuthError('');
      setPassInput('');
    } else {
      setAuthError('Incorrect passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setAuthenticated(false);
  };

  const handleChangePassword = (next: string) => {
    localStorage.setItem(ADMIN_PASS_KEY, next);
  };

  const unreadCount = inquiries.filter((i) => !i.read).length;

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-warmWhite flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border border-borderGray rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <img src={content.global.logoUrl} alt="Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="font-serif font-bold text-xl text-charcoal">Admin Panel</h1>
              <p className="text-xs text-muted">{content.global.companyName.en}</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-1.5">
                Admin Passcode
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-muted absolute left-3 top-3" />
                <input
                  type="password"
                  value={passInput}
                  onChange={(e) => setPassInput(e.target.value)}
                  placeholder="Enter passcode"
                  autoFocus
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-borderGray rounded focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
              </div>
              {authError && <p className="text-xs text-deepRed mt-1.5">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-forest text-white text-sm font-bold rounded hover:bg-deepForest transition-colors cursor-pointer"
            >
              Sign In to Admin Panel
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-borderGray flex items-center justify-between text-xs text-muted">
            <span>
              Default passcode: <code className="bg-lightGray px-1.5 py-0.5 rounded font-mono text-charcoal">admin123</code>
            </span>
            <Link to="/" className="text-forest font-semibold hover:underline">
              &larr; Back to Site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const pageNavItems: { id: TabId; label: string; icon: React.ReactNode; hidden?: boolean }[] = [
    { id: 'pages', label: 'Manage Pages (Add / Rename)', icon: <Layers className="w-4 h-4" /> },
    ...content.pages.map((p) => ({
      id: (p.builtInKey ? p.builtInKey : `custom:${p.id}`) as TabId,
      label: p.navLabel.en || p.navLabel.ja,
      icon: p.builtInKey ? BUILTIN_ICONS[p.builtInKey] : <FilePlus2 className="w-4 h-4" />,
      hidden: !p.enabled,
    })),
  ];

  const navGroups: {
    label: string;
    items: { id: TabId; label: string; icon: React.ReactNode; badge?: number; hidden?: boolean }[];
  }[] = [
    {
      label: 'Overview',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
        { id: 'inquiries', label: 'Inquiries Inbox', icon: <Inbox className="w-4 h-4" />, badge: unreadCount },
      ],
    },
    {
      label: 'Design & Global',
      items: [
        { id: 'global', label: 'Global & Branding', icon: <Globe className="w-4 h-4" /> },
        { id: 'theme', label: 'Theme & Colors', icon: <Palette className="w-4 h-4" /> },
      ],
    },
    {
      label: 'Pages',
      items: pageNavItems,
    },
    {
      label: 'System',
      items: [
        { id: 'settings', label: 'Backup & Settings', icon: <Settings className="w-4 h-4" /> },
      ],
    },
  ];

  const getPreviewPath = (): string => {
    if (activeTab.startsWith('custom:')) {
      const id = activeTab.slice('custom:'.length);
      return content.pages.find((p) => p.id === id)?.path || '/';
    }
    const builtIn = content.pages.find((p) => p.builtInKey === activeTab);
    return builtIn?.path || '/';
  };

  const renderContent = () => {
    if (activeTab.startsWith('custom:')) {
      const pageId = activeTab.slice('custom:'.length);
      return <CustomPageEditor pageId={pageId} onDeleted={() => setActiveTab('pages')} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-charcoal">Welcome to Kurosaki CMS</h2>
              <p className="text-sm text-muted mt-1">
                Add, rename, or remove pages, edit content in Japanese &amp; English, and customize theme colors in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-borderGray rounded-lg p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted">Active Pages</div>
                <div className="text-3xl font-serif font-bold text-forest mt-2">
                  {content.pages.filter((p) => p.enabled).length}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('pages')}
                  className="text-xs text-deepRed font-semibold mt-1 hover:underline cursor-pointer"
                >
                  Add / Rename / Remove &rarr;
                </button>
              </div>
              <div className="bg-white border border-borderGray rounded-lg p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted">Products</div>
                <div className="text-3xl font-serif font-bold text-forest mt-2">{content.products.items.length}</div>
                <button
                  type="button"
                  onClick={() => setActiveTab('products')}
                  className="text-xs text-deepRed font-semibold mt-1 hover:underline cursor-pointer"
                >
                  Manage catalog &rarr;
                </button>
              </div>
              <div className="bg-white border border-borderGray rounded-lg p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted">News Articles</div>
                <div className="text-3xl font-serif font-bold text-forest mt-2">{content.news.items.length}</div>
                <button
                  type="button"
                  onClick={() => setActiveTab('news')}
                  className="text-xs text-deepRed font-semibold mt-1 hover:underline cursor-pointer"
                >
                  Manage news &rarr;
                </button>
              </div>
              <div className="bg-white border border-borderGray rounded-lg p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted">Inquiries</div>
                <div className="text-3xl font-serif font-bold text-forest mt-2">{inquiries.length}</div>
                <button
                  type="button"
                  onClick={() => setActiveTab('inquiries')}
                  className="text-xs text-deepRed font-semibold mt-1 hover:underline cursor-pointer"
                >
                  {unreadCount > 0 ? `${unreadCount} unread` : 'View inbox'} &rarr;
                </button>
              </div>
            </div>

            <div className="bg-white border border-borderGray rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-charcoal">Quick Edit Pages</h3>
                <button
                  type="button"
                  onClick={() => setActiveTab('pages')}
                  className="text-xs font-semibold text-forest hover:underline cursor-pointer"
                >
                  + Add / Manage Pages
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {content.pages.map((p) => {
                  const targetTab = (p.builtInKey ? p.builtInKey : `custom:${p.id}`) as TabId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveTab(targetTab)}
                      className={`flex items-center justify-between p-4 border border-borderGray rounded hover:border-forest hover:bg-lightGray/40 transition-colors text-left cursor-pointer ${
                        !p.enabled ? 'opacity-50' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-forest shrink-0">
                          {p.builtInKey ? BUILTIN_ICONS[p.builtInKey] : <FilePlus2 className="w-4 h-4" />}
                        </span>
                        <div className="truncate">
                          <div className="font-semibold text-sm text-charcoal truncate">{p.navLabel.en}</div>
                          <div className="text-[11px] font-mono text-muted truncate">{p.path}</div>
                        </div>
                      </div>
                      <span className="text-xs text-muted shrink-0 ml-2">Edit &rarr;</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 'pages':
        return (
          <PagesManager
            onSelectBuiltIn={(key) => setActiveTab(key)}
            onSelectCustom={(id) => setActiveTab(`custom:${id}`)}
          />
        );
      case 'global':
        return <GlobalEditor />;
      case 'theme':
        return <ThemeEditor />;
      case 'home':
        return <HomeEditor />;
      case 'about':
        return <AboutEditor />;
      case 'solutions':
        return <SolutionsEditor />;
      case 'products':
        return <ProductsEditor />;
      case 'quality':
        return <QualityEditor />;
      case 'sustainability':
        return <SustainabilityEditor />;
      case 'news':
        return <NewsEditor />;
      case 'contact':
        return <ContactEditor />;
      case 'sitemap':
        return <SitemapEditor />;
      case 'inquiries':
        return <InquiriesInbox />;
      case 'settings':
        return <BackupSettingsEditor onChangePassword={handleChangePassword} />;
    }
  };

  return (
    <div className="min-h-screen bg-lightGray/60 flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-charcoal text-white flex flex-col shrink-0 transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-16 px-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-sm p-1 flex items-center justify-center">
              <img src={content.global.logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm tracking-wide">KUROSAKI CMS</div>
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Admin Panel</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                {group.label}
              </div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const active = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded text-sm font-medium transition-colors cursor-pointer ${
                        active
                          ? 'bg-forest text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      } ${item.hidden ? 'opacity-45 line-through' : ''}`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        <span className="shrink-0">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </span>
                      {item.badge ? (
                        <span className="text-[11px] font-bold bg-deepRed text-white px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-borderGray px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-charcoal hover:bg-lightGray rounded"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-forest bg-forest/10 px-2.5 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Auto-saved locally</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={getPreviewPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-forest text-white rounded hover:bg-deepForest transition-colors"
            >
              <span>View Live Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-5xl w-full mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
