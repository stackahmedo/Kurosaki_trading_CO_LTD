import React, { useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
import { BuiltInPageKey, ManagedPage } from '../../types/siteContent';
import { BilingualInput, ImageUrlInput, SectionCard, TextInput } from './AdminFieldComponents';
import {
  ArrowDown,
  ArrowUp,
  Eye,
  EyeOff,
  ExternalLink,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function normalizePath(raw: string): string {
  const trimmed = raw.trim().toLowerCase().replace(/\s+/g, '-');
  if (!trimmed || trimmed === '/') return '/';
  const cleaned = trimmed.replace(/^\/+/, '').replace(/[^a-z0-9\-_/]/g, '');
  return cleaned ? `/${cleaned}` : '/';
}

export function PagesManager({
  onSelectBuiltIn,
  onSelectCustom,
}: {
  onSelectBuiltIn: (key: BuiltInPageKey) => void;
  onSelectCustom: (pageId: string) => void;
}) {
  const { content, updateContent, resetSection } = useSiteContent();
  const [newNameJa, setNewNameJa] = useState('');
  const [newNameEn, setNewNameEn] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [formError, setFormError] = useState('');

  const setPages = (updater: (prev: ManagedPage[]) => ManagedPage[]) =>
    updateContent((prev) => ({ ...prev, pages: updater(prev.pages) }));

  const handleAddPage = (e: React.FormEvent) => {
    e.preventDefault();
    const en = newNameEn.trim() || newNameJa.trim();
    const ja = newNameJa.trim() || newNameEn.trim();
    if (!en) {
      setFormError('Please enter a page name (Japanese or English).');
      return;
    }
    const rawSlug = newSlug.trim() || en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `page-${Date.now()}`;
    const path = normalizePath(rawSlug);
    if (path === '/' || path.startsWith('/admin')) {
      setFormError('Path cannot be "/" or start with "/admin".');
      return;
    }
    if (content.pages.some((p) => p.path === path)) {
      setFormError(`A page with path "${path}" already exists.`);
      return;
    }

    const newPage: ManagedPage = {
      id: `custom_${Date.now()}`,
      path,
      navLabel: { ja, en },
      enabled: true,
      showInHeader: true,
      showInFooter: true,
      footerGroup: 'corporate',
      title: { ja, en },
      subtitle: {
        ja: `${ja}に関するご案内ページです。`,
        en: `Information and details about ${en}.`,
      },
      heroImageUrl: '',
      sections: [
        {
          id: `sec_${Date.now()}`,
          heading: { ja: '概要', en: 'Overview' },
          body: {
            ja: 'ここに本文を入力してください。管理画面からいつでも編集できます。',
            en: 'Write your page content here. You can edit or add more sections anytime from the Admin Panel.',
          },
          imageUrl: '',
        },
      ],
    };

    setPages((prev) => [...prev, newPage]);
    setNewNameJa('');
    setNewNameEn('');
    setNewSlug('');
    setFormError('');
    onSelectCustom(newPage.id);
  };

  const movePage = (idx: number, dir: -1 | 1) => {
    const target = idx + dir;
    if (target < 0 || target >= content.pages.length) return;
    setPages((prev) => {
      const next = [...prev];
      const [moved] = next.splice(idx, 1);
      next.splice(target, 0, moved);
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Pages Manager</h2>
          <p className="text-sm text-muted">
            Add new custom pages, rename any page (JA / EN & URL), reorder navigation, or remove pages.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset page list and names to defaults?') && resetSection('pages')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Pages
        </button>
      </div>

      {/* Add New Page Form */}
      <SectionCard title="Add New Page" description="Create a new bilingual page and add it to your site navigation">
        <form onSubmit={handleAddPage} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TextInput
              label="Page Name (日本語)"
              value={newNameJa}
              placeholder="例: プライバシーポリシー"
              onChange={setNewNameJa}
            />
            <TextInput
              label="Page Name (English)"
              value={newNameEn}
              placeholder="e.g. Privacy Policy"
              onChange={setNewNameEn}
            />
            <TextInput
              label="URL Path (optional)"
              value={newSlug}
              placeholder="e.g. /privacy"
              onChange={setNewSlug}
            />
          </div>
          {formError && <p className="text-xs text-deepRed font-medium">{formError}</p>}
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest text-white text-sm font-semibold rounded hover:bg-deepForest transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Create Page
          </button>
        </form>
      </SectionCard>

      {/* Existing Pages List */}
      <div className="space-y-4">
        {content.pages.map((page, idx) => {
          const isHome = page.builtInKey === 'home';
          const isCustom = !page.builtInKey;

          return (
            <div
              key={page.id}
              className={`bg-white border rounded-lg p-5 space-y-4 transition-opacity ${
                page.enabled ? 'border-borderGray' : 'border-dashed border-borderGray opacity-65'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-borderGray pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex flex-col">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => movePage(idx, -1)}
                      className="text-muted hover:text-charcoal disabled:opacity-25 cursor-pointer"
                      title="Move up"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === content.pages.length - 1}
                      onClick={() => movePage(idx, 1)}
                      className="text-muted hover:text-charcoal disabled:opacity-25 cursor-pointer"
                      title="Move down"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-charcoal">{page.navLabel.en}</span>
                      <span className="text-xs text-muted">({page.navLabel.ja})</span>
                      <span
                        className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                          isCustom
                            ? 'bg-deepRed/10 text-deepRed'
                            : 'bg-forest/10 text-forest'
                        }`}
                      >
                        {isCustom ? 'Custom' : 'Built-in'}
                      </span>
                      {!page.enabled && (
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-charcoal/10 text-charcoal">
                          Removed / Hidden
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-muted">{page.path}</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      page.builtInKey ? onSelectBuiltIn(page.builtInKey) : onSelectCustom(page.id)
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded bg-forest text-white hover:bg-deepForest cursor-pointer"
                  >
                    <Pencil className="w-3.5 h-3.5" /> Edit Content
                  </button>

                  {page.enabled && (
                    <Link
                      to={page.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded border border-borderGray text-charcoal hover:bg-lightGray"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Open
                    </Link>
                  )}

                  {!isHome && (
                    <button
                      type="button"
                      onClick={() =>
                        setPages((prev) =>
                          prev.map((p) => (p.id === page.id ? { ...p, enabled: !p.enabled } : p))
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded border border-borderGray text-charcoal hover:bg-lightGray cursor-pointer"
                      title={page.enabled ? 'Remove from live site' : 'Restore page'}
                    >
                      {page.enabled ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" /> Hide
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" /> Restore
                        </>
                      )}
                    </button>
                  )}

                  {isCustom && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Permanently delete custom page "${page.navLabel.en}"?`)) {
                          setPages((prev) => prev.filter((p) => p.id !== page.id));
                        }
                      }}
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded border border-deepRed/30 text-deepRed hover:bg-deepRed hover:text-white transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  )}
                </div>
              </div>

              {/* Rename & Path Controls */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                <div className="lg:col-span-7">
                  <BilingualInput
                    label="Rename Page Label (Header / Footer / Sitemap)"
                    value={page.navLabel}
                    onChange={(navLabel) =>
                      setPages((prev) =>
                        prev.map((p) => (p.id === page.id ? { ...p, navLabel } : p))
                      )
                    }
                  />
                </div>
                <div className="lg:col-span-5">
                  {isHome ? (
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
                        URL Path
                      </label>
                      <input
                        type="text"
                        value="/"
                        disabled
                        className="w-full px-3 py-2 text-sm border border-borderGray rounded bg-lightGray text-muted font-mono"
                      />
                    </div>
                  ) : (
                    <TextInput
                      label="URL Path"
                      value={page.path}
                      onChange={(val) => {
                        const normalized = normalizePath(val);
                        if (normalized !== '/' && !normalized.startsWith('/admin')) {
                          setPages((prev) =>
                            prev.map((p) => (p.id === page.id ? { ...p, path: normalized } : p))
                          );
                        }
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Placement Controls */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-charcoal">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={page.showInHeader}
                    onChange={(e) =>
                      setPages((prev) =>
                        prev.map((p) =>
                          p.id === page.id ? { ...p, showInHeader: e.target.checked } : p
                        )
                      )
                    }
                    className="text-forest focus:ring-forest"
                  />
                  <span className="font-medium">Show in Header Nav</span>
                </label>

                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={page.showInFooter}
                    onChange={(e) =>
                      setPages((prev) =>
                        prev.map((p) =>
                          p.id === page.id
                            ? {
                                ...p,
                                showInFooter: e.target.checked,
                                footerGroup: e.target.checked && p.footerGroup === 'none' ? 'corporate' : p.footerGroup,
                              }
                            : p
                        )
                      )
                    }
                    className="text-forest focus:ring-forest"
                  />
                  <span className="font-medium">Show in Footer</span>
                </label>

                {page.showInFooter && (
                  <label className="inline-flex items-center gap-2">
                    <span className="text-muted">Footer Column:</span>
                    <select
                      value={page.footerGroup}
                      onChange={(e) =>
                        setPages((prev) =>
                          prev.map((p) =>
                            p.id === page.id
                              ? { ...p, footerGroup: e.target.value as ManagedPage['footerGroup'] }
                              : p
                          )
                        )
                      }
                      className="px-2 py-1 border border-borderGray rounded bg-white text-xs"
                    >
                      <option value="corporate">Corporate</option>
                      <option value="business">Business Areas</option>
                      <option value="bottom">Bottom Bar</option>
                    </select>
                  </label>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CustomPageEditor({
  pageId,
  onDeleted,
}: {
  pageId: string;
  onDeleted: () => void;
}) {
  const { content, updateContent } = useSiteContent();
  const page = content.pages.find((p) => p.id === pageId);

  if (!page) {
    return (
      <div className="bg-white border border-borderGray rounded-lg p-8 text-center text-muted">
        Page not found.
      </div>
    );
  }

  const updatePage = (updater: (p: ManagedPage) => ManagedPage) =>
    updateContent((prev) => ({
      ...prev,
      pages: prev.pages.map((p) => (p.id === pageId ? updater(p) : p)),
    }));

  const sections = page.sections ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">
            Edit Custom Page: {page.navLabel.en}
          </h2>
          <p className="text-sm text-muted font-mono">{page.path}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (window.confirm(`Permanently delete "${page.navLabel.en}"?`)) {
              updateContent((prev) => ({
                ...prev,
                pages: prev.pages.filter((p) => p.id !== pageId),
              }));
              onDeleted();
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" /> Delete Page
        </button>
      </div>

      <SectionCard title="Page Settings & Hero">
        <BilingualInput
          label="Navigation Name"
          value={page.navLabel}
          onChange={(navLabel) => updatePage((p) => ({ ...p, navLabel }))}
        />
        <TextInput
          label="URL Path"
          value={page.path}
          onChange={(val) => {
            const normalized = normalizePath(val);
            if (normalized !== '/' && !normalized.startsWith('/admin')) {
              updatePage((p) => ({ ...p, path: normalized }));
            }
          }}
        />
        <BilingualInput
          label="Hero Title"
          value={page.title ?? page.navLabel}
          onChange={(title) => updatePage((p) => ({ ...p, title }))}
        />
        <BilingualInput
          label="Hero Subtitle"
          value={page.subtitle ?? { ja: '', en: '' }}
          multiline
          rows={2}
          onChange={(subtitle) => updatePage((p) => ({ ...p, subtitle }))}
        />
        <ImageUrlInput
          label="Hero Background Image (optional)"
          value={page.heroImageUrl ?? ''}
          onChange={(heroImageUrl) => updatePage((p) => ({ ...p, heroImageUrl }))}
        />
      </SectionCard>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() =>
            updatePage((p) => ({
              ...p,
              sections: [
                ...(p.sections ?? []),
                {
                  id: `sec_${Date.now()}`,
                  heading: { ja: '新しいセクション', en: 'New Section' },
                  body: { ja: '本文を入力してください。', en: 'Enter section content.' },
                  imageUrl: '',
                },
              ],
            }))
          }
          className="inline-flex items-center gap-1.5 text-sm font-semibold bg-forest text-white px-4 py-2 rounded hover:bg-deepForest cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add Section
        </button>
      </div>

      {sections.map((sec, idx) => (
        <SectionCard
          key={sec.id}
          title={`Section ${idx + 1}: ${sec.heading.en || sec.heading.ja || 'Untitled'}`}
          actions={
            <button
              type="button"
              onClick={() =>
                updatePage((p) => ({
                  ...p,
                  sections: (p.sections ?? []).filter((_, i) => i !== idx),
                }))
              }
              className="text-xs text-muted hover:text-deepRed inline-flex items-center gap-1 px-2 py-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" /> Delete
            </button>
          }
        >
          <BilingualInput
            label="Section Heading"
            value={sec.heading}
            onChange={(heading) =>
              updatePage((p) => ({
                ...p,
                sections: (p.sections ?? []).map((s, i) => (i === idx ? { ...s, heading } : s)),
              }))
            }
          />
          <BilingualInput
            label="Section Body"
            value={sec.body}
            multiline
            rows={5}
            onChange={(body) =>
              updatePage((p) => ({
                ...p,
                sections: (p.sections ?? []).map((s, i) => (i === idx ? { ...s, body } : s)),
              }))
            }
          />
          <ImageUrlInput
            label="Section Image (optional)"
            value={sec.imageUrl}
            onChange={(imageUrl) =>
              updatePage((p) => ({
                ...p,
                sections: (p.sections ?? []).map((s, i) => (i === idx ? { ...s, imageUrl } : s)),
              }))
            }
          />
        </SectionCard>
      ))}
    </div>
  );
}
