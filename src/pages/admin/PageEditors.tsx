import React, { useRef, useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
import { SocialPlatform } from '../../types/siteContent';
import { SocialIcon } from '../../components/ui/SocialIcons';
import {
  BilingualInput,
  ColorPickerField,
  ImageUrlInput,
  SectionCard,
  TextInput,
} from './AdminFieldComponents';
import {
  CheckCircle2,
  Download,
  Mail,
  MailOpen,
  Plus,
  RotateCcw,
  Trash2,
  Upload,
} from 'lucide-react';

export function GlobalEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const faviconInputRef = useRef<HTMLInputElement>(null);
  const [faviconError, setFaviconError] = useState('');
  const g = content.global;
  const setGlobal = (updater: (prev: typeof g) => typeof g) =>
    updateContent((prev) => ({ ...prev, global: updater(prev.global) }));

  const handleFaviconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 512 * 1024) {
      setFaviconError('File is too large (max 512 KB for favicon).');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setFaviconError('');
      setGlobal((prev) => ({ ...prev, faviconUrl: String(reader.result) }));
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Global & Branding</h2>
          <p className="text-sm text-muted">Company name, logo, contact info, and footer details used across all pages.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset Global settings to defaults?') && resetSection('global')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Global
        </button>
      </div>

      <SectionCard title="Brand Identity">
        <BilingualInput
          label="Full Company Name (Header)"
          value={g.companyName}
          onChange={(companyName) => setGlobal((prev) => ({ ...prev, companyName }))}
        />
        <BilingualInput
          label="Short Company Name (Footer)"
          value={g.shortName}
          onChange={(shortName) => setGlobal((prev) => ({ ...prev, shortName }))}
        />
        <ImageUrlInput
          label="Logo URL"
          value={g.logoUrl}
          onChange={(logoUrl) => setGlobal((prev) => ({ ...prev, logoUrl }))}
        />

        {/* Favicon Manager */}
        <div className="space-y-2 pt-2 border-t border-borderGray">
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
            Favicon (Browser Tab Icon)
          </label>
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <div className="flex-1 w-full space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={g.faviconUrl ?? ''}
                  placeholder="/favicon.svg, /favicon.png, or https://..."
                  onChange={(e) => {
                    setFaviconError('');
                    setGlobal((prev) => ({ ...prev, faviconUrl: e.target.value }));
                  }}
                  className="flex-1 px-3 py-2 text-sm border border-borderGray rounded bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
                <button
                  type="button"
                  onClick={() => faviconInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border border-forest text-forest rounded hover:bg-forest hover:text-white transition-colors shrink-0 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" /> Upload
                </button>
                <input
                  ref={faviconInputRef}
                  type="file"
                  accept="image/svg+xml,image/png,image/x-icon,image/webp,image/jpeg"
                  onChange={handleFaviconUpload}
                  className="hidden"
                />
              </div>
              {faviconError && <p className="text-xs text-deepRed">{faviconError}</p>}
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                <span>Quick select:</span>
                {['/logo.svg', '/favicon.svg', '/favicon.png', '/logo.png'].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setGlobal((prev) => ({ ...prev, faviconUrl: preset }))}
                    className={`px-2 py-0.5 rounded border font-mono cursor-pointer transition-colors ${
                      g.faviconUrl === preset
                        ? 'border-forest bg-forest/10 text-forest font-bold'
                        : 'border-borderGray bg-white hover:bg-lightGray'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Browser Tab Preview */}
            <div className="border border-borderGray rounded-lg bg-lightGray/70 px-3 py-2.5 flex items-center gap-2.5 shrink-0 min-w-[180px]">
              <div className="w-6 h-6 bg-white rounded border border-borderGray flex items-center justify-center overflow-hidden shrink-0">
                {g.faviconUrl ? (
                  <img src={g.faviconUrl} alt="Favicon preview" className="w-4 h-4 object-contain" />
                ) : null}
              </div>
              <div className="truncate">
                <div className="text-[11px] font-semibold text-charcoal truncate max-w-[120px]">
                  {g.shortName.en || 'Tab Preview'}
                </div>
                <div className="text-[10px] text-muted">Browser tab preview</div>
              </div>
            </div>
          </div>
        </div>
        <BilingualInput
          label="Footer Tagline"
          value={g.footerDescription}
          multiline
          rows={2}
          onChange={(footerDescription) => setGlobal((prev) => ({ ...prev, footerDescription }))}
        />
        <TextInput
          label="Copyright Text"
          value={g.copyright}
          onChange={(copyright) => setGlobal((prev) => ({ ...prev, copyright }))}
        />
      </SectionCard>

      <SectionCard title="Contact Information">
        <BilingualInput
          label="Office Address"
          value={g.address}
          multiline
          rows={3}
          onChange={(address) => setGlobal((prev) => ({ ...prev, address }))}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="Phone Link (digits only, for tel:)"
            value={g.phone}
            onChange={(phone) => setGlobal((prev) => ({ ...prev, phone }))}
          />
          <TextInput
            label="Email Address"
            type="email"
            value={g.email}
            onChange={(email) => setGlobal((prev) => ({ ...prev, email }))}
          />
        </div>
        <BilingualInput
          label="Phone Display Text"
          value={g.phoneDisplay}
          onChange={(phoneDisplay) => setGlobal((prev) => ({ ...prev, phoneDisplay }))}
        />
        <BilingualInput
          label="Business Hours"
          value={g.businessHours}
          onChange={(businessHours) => setGlobal((prev) => ({ ...prev, businessHours }))}
        />
      </SectionCard>

      <SectionCard
        title="Social Media Links (Footer)"
        description="Paste your social media URLs below. Enabled links appear as clickable icons in the website footer."
        actions={
          <button
            type="button"
            onClick={() =>
              setGlobal((prev) => ({
                ...prev,
                socialLinks: [
                  ...(prev.socialLinks ?? []),
                  {
                    id: `soc_${Date.now()}`,
                    platform: 'instagram',
                    label: 'Instagram',
                    url: 'https://',
                    enabled: true,
                  },
                ],
              }))
            }
            className="inline-flex items-center gap-1 text-xs font-semibold bg-forest text-white px-2.5 py-1.5 rounded cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Social Link
          </button>
        }
      >
        <div className="space-y-3">
          {(g.socialLinks ?? []).map((soc, idx) => (
            <div
              key={soc.id}
              className="p-4 border border-borderGray rounded bg-warmWhite/40 flex flex-col lg:flex-row lg:items-center gap-3"
            >
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 rounded-full bg-charcoal text-white flex items-center justify-center">
                  <SocialIcon platform={soc.platform} className="w-4 h-4" />
                </div>
                <select
                  value={soc.platform}
                  onChange={(e) => {
                    const platform = e.target.value as SocialPlatform;
                    const labels: Record<SocialPlatform, string> = {
                      facebook: 'Facebook',
                      instagram: 'Instagram',
                      x: 'X (Twitter)',
                      linkedin: 'LinkedIn',
                      youtube: 'YouTube',
                      line: 'LINE',
                      tiktok: 'TikTok',
                      website: 'Website',
                    };
                    setGlobal((prev) => ({
                      ...prev,
                      socialLinks: prev.socialLinks.map((s, i) =>
                        i === idx ? { ...s, platform, label: labels[platform] } : s
                      ),
                    }));
                  }}
                  className="px-2.5 py-2 text-sm border border-borderGray rounded bg-white text-charcoal focus:outline-none focus:border-forest"
                >
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="x">X (Twitter)</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="youtube">YouTube</option>
                  <option value="line">LINE</option>
                  <option value="tiktok">TikTok</option>
                  <option value="website">Website</option>
                </select>
              </div>

              <div className="flex-1">
                <input
                  type="url"
                  value={soc.url}
                  placeholder="Paste link here (e.g. https://instagram.com/yourpage)"
                  onChange={(e) =>
                    setGlobal((prev) => ({
                      ...prev,
                      socialLinks: prev.socialLinks.map((s, i) =>
                        i === idx ? { ...s, url: e.target.value } : s
                      ),
                    }))
                  }
                  className="w-full px-3 py-2 text-sm border border-borderGray rounded bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-3 shrink-0">
                <label className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal cursor-pointer">
                  <input
                    type="checkbox"
                    checked={soc.enabled}
                    onChange={(e) =>
                      setGlobal((prev) => ({
                        ...prev,
                        socialLinks: prev.socialLinks.map((s, i) =>
                          i === idx ? { ...s, enabled: e.target.checked } : s
                        ),
                      }))
                    }
                    className="text-forest focus:ring-forest"
                  />
                  <span>Show</span>
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setGlobal((prev) => ({
                      ...prev,
                      socialLinks: prev.socialLinks.filter((_, i) => i !== idx),
                    }))
                  }
                  className="p-1.5 text-muted hover:text-deepRed cursor-pointer"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

export function ThemeEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const theme = content.theme;
  const setTheme = (updater: (prev: typeof theme) => typeof theme) =>
    updateContent((prev) => ({ ...prev, theme: updater(prev.theme) }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Theme & Colors</h2>
          <p className="text-sm text-muted">Customize the live color palette across the entire website.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset theme colors to defaults?') && resetSection('theme')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Colors
        </button>
      </div>

      <SectionCard title="Color Palette" description="Changes apply immediately across all pages and components">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorPickerField
            label="Primary Brand Color (Forest)"
            description="Buttons, highlights, icons, and banners"
            value={theme.forest}
            onChange={(forest) => setTheme((t) => ({ ...t, forest }))}
          />
          <ColorPickerField
            label="Primary Hover Color (Deep Forest)"
            description="Hover state for primary buttons"
            value={theme.deepForest}
            onChange={(deepForest) => setTheme((t) => ({ ...t, deepForest }))}
          />
          <ColorPickerField
            label="Accent Color (Deep Red)"
            description="Section dividers, active links, badges"
            value={theme.deepRed}
            onChange={(deepRed) => setTheme((t) => ({ ...t, deepRed }))}
          />
          <ColorPickerField
            label="Dark Surface & Text (Charcoal)"
            description="Headers, footers, and primary typography"
            value={theme.charcoal}
            onChange={(charcoal) => setTheme((t) => ({ ...t, charcoal }))}
          />
          <ColorPickerField
            label="Page Background (Warm White)"
            description="Main page background color"
            value={theme.warmWhite}
            onChange={(warmWhite) => setTheme((t) => ({ ...t, warmWhite }))}
          />
        </div>
      </SectionCard>
    </div>
  );
}

export function AboutEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const about = content.about;
  const setAbout = (updater: (prev: typeof about) => typeof about) =>
    updateContent((prev) => ({ ...prev, about: updater(prev.about) }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">About Page</h2>
          <p className="text-sm text-muted">Edit the President&apos;s message and Company Profile table.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset About page to defaults?') && resetSection('about')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset About Page
        </button>
      </div>

      <SectionCard title="Page Header">
        <BilingualInput
          label="Page Title"
          value={about.title}
          onChange={(title) => setAbout((a) => ({ ...a, title }))}
        />
      </SectionCard>

      <SectionCard
        title="Leadership Message"
        actions={
          <button
            type="button"
            onClick={() =>
              setAbout((a) => ({
                ...a,
                message: { ...a.message, paragraphs: [...a.message.paragraphs, { ja: '', en: '' }] },
              }))
            }
            className="inline-flex items-center gap-1 text-xs font-semibold bg-forest text-white px-2.5 py-1.5 rounded cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Paragraph
          </button>
        }
      >
        <BilingualInput
          label="Section Badge"
          value={about.message.badge}
          onChange={(badge) => setAbout((a) => ({ ...a, message: { ...a.message, badge } }))}
        />
        <BilingualInput
          label="Heading"
          value={about.message.heading}
          onChange={(heading) => setAbout((a) => ({ ...a, message: { ...a.message, heading } }))}
        />
        <div className="space-y-4">
          {about.message.paragraphs.map((para, idx) => (
            <div key={idx} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-forest">Paragraph #{idx + 1}</span>
                <button
                  type="button"
                  onClick={() =>
                    setAbout((a) => ({
                      ...a,
                      message: {
                        ...a.message,
                        paragraphs: a.message.paragraphs.filter((_, i) => i !== idx),
                      },
                    }))
                  }
                  className="text-xs text-muted hover:text-deepRed inline-flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove
                </button>
              </div>
              <BilingualInput
                label="Text"
                value={para}
                multiline
                rows={3}
                onChange={(val) =>
                  setAbout((a) => ({
                    ...a,
                    message: {
                      ...a.message,
                      paragraphs: a.message.paragraphs.map((p, i) => (i === idx ? val : p)),
                    },
                  }))
                }
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BilingualInput
            label="Role / Title"
            value={about.message.role}
            onChange={(role) => setAbout((a) => ({ ...a, message: { ...a.message, role } }))}
          />
          <BilingualInput
            label="President Name"
            value={about.message.presidentName}
            onChange={(presidentName) => setAbout((a) => ({ ...a, message: { ...a.message, presidentName } }))}
          />
        </div>
      </SectionCard>

      <SectionCard
        title="Company Profile Table"
        actions={
          <button
            type="button"
            onClick={() =>
              setAbout((a) => ({
                ...a,
                profile: {
                  ...a.profile,
                  rows: [
                    ...a.profile.rows,
                    { id: `row_${Date.now()}`, label: { ja: '新規項目', en: 'New Field' }, value: { ja: '', en: '' } },
                  ],
                },
              }))
            }
            className="inline-flex items-center gap-1 text-xs font-semibold bg-forest text-white px-2.5 py-1.5 rounded cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Row
          </button>
        }
      >
        <div className="space-y-4">
          {about.profile.rows.map((row, idx) => (
            <div key={row.id} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-forest">Row #{idx + 1}</span>
                <button
                  type="button"
                  onClick={() =>
                    setAbout((a) => ({
                      ...a,
                      profile: { ...a.profile, rows: a.profile.rows.filter((_, i) => i !== idx) },
                    }))
                  }
                  className="text-xs text-muted hover:text-deepRed inline-flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
              <BilingualInput
                label="Label"
                value={row.label}
                onChange={(label) =>
                  setAbout((a) => ({
                    ...a,
                    profile: {
                      ...a.profile,
                      rows: a.profile.rows.map((r, i) => (i === idx ? { ...r, label } : r)),
                    },
                  }))
                }
              />
              <BilingualInput
                label="Value"
                value={row.value}
                multiline
                rows={2}
                onChange={(value) =>
                  setAbout((a) => ({
                    ...a,
                    profile: {
                      ...a.profile,
                      rows: a.profile.rows.map((r, i) => (i === idx ? { ...r, value } : r)),
                    },
                  }))
                }
              />
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

export function SolutionsEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const sol = content.solutions;
  const setSol = (updater: (prev: typeof sol) => typeof sol) =>
    updateContent((prev) => ({ ...prev, solutions: updater(prev.solutions) }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Solutions Page</h2>
          <p className="text-sm text-muted">Manage solutions, benefits, and section images.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset Solutions page to defaults?') && resetSection('solutions')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Solutions
        </button>
      </div>

      <SectionCard title="Page Header">
        <BilingualInput
          label="Title"
          value={sol.title}
          onChange={(title) => setSol((s) => ({ ...s, title }))}
        />
        <BilingualInput
          label="Subtitle"
          value={sol.subtitle}
          multiline
          rows={2}
          onChange={(subtitle) => setSol((s) => ({ ...s, subtitle }))}
        />
      </SectionCard>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() =>
            setSol((s) => ({
              ...s,
              items: [
                ...s.items,
                {
                  id: `sol_${Date.now()}`,
                  title: { ja: '新規ソリューション', en: 'New Solution' },
                  description: { ja: '説明を入力してください。', en: 'Enter description.' },
                  benefits: [{ ja: 'メリット1', en: 'Benefit 1' }],
                  imageUrl: '',
                },
              ],
            }))
          }
          className="inline-flex items-center gap-1.5 text-sm font-semibold bg-forest text-white px-4 py-2 rounded cursor-pointer hover:bg-deepForest"
        >
          <Plus className="w-4 h-4" /> Add Solution
        </button>
      </div>

      {sol.items.map((item, idx) => (
        <SectionCard
          key={item.id}
          title={`${idx + 1}. ${item.title.en || item.title.ja}`}
          defaultOpen={idx === 0}
          actions={
            <button
              type="button"
              onClick={() =>
                setSol((s) => ({ ...s, items: s.items.filter((_, i) => i !== idx) }))
              }
              className="text-xs text-muted hover:text-deepRed inline-flex items-center gap-1 px-2 py-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" /> Delete
            </button>
          }
        >
          <BilingualInput
            label="Solution Title"
            value={item.title}
            onChange={(title) =>
              setSol((s) => ({
                ...s,
                items: s.items.map((it, i) => (i === idx ? { ...it, title } : it)),
              }))
            }
          />
          <BilingualInput
            label="Description"
            value={item.description}
            multiline
            rows={3}
            onChange={(description) =>
              setSol((s) => ({
                ...s,
                items: s.items.map((it, i) => (i === idx ? { ...it, description } : it)),
              }))
            }
          />
          <ImageUrlInput
            label="Solution Image"
            value={item.imageUrl}
            onChange={(imageUrl) =>
              setSol((s) => ({
                ...s,
                items: s.items.map((it, i) => (i === idx ? { ...it, imageUrl } : it)),
              }))
            }
          />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal/80">
                Customer Benefits
              </span>
              <button
                type="button"
                onClick={() =>
                  setSol((s) => ({
                    ...s,
                    items: s.items.map((it, i) =>
                      i === idx ? { ...it, benefits: [...it.benefits, { ja: '', en: '' }] } : it
                    ),
                  }))
                }
                className="text-xs font-semibold text-forest hover:underline cursor-pointer"
              >
                + Add Benefit
              </button>
            </div>
            {item.benefits.map((b, bIdx) => (
              <div key={bIdx} className="flex items-end gap-2">
                <div className="flex-1">
                  <BilingualInput
                    label={`Benefit #${bIdx + 1}`}
                    value={b}
                    onChange={(val) =>
                      setSol((s) => ({
                        ...s,
                        items: s.items.map((it, i) =>
                          i === idx
                            ? { ...it, benefits: it.benefits.map((bn, j) => (j === bIdx ? val : bn)) }
                            : it
                        ),
                      }))
                    }
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setSol((s) => ({
                      ...s,
                      items: s.items.map((it, i) =>
                        i === idx
                          ? { ...it, benefits: it.benefits.filter((_, j) => j !== bIdx) }
                          : it
                      ),
                    }))
                  }
                  className="p-2 text-muted hover:text-deepRed cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </SectionCard>
      ))}
    </div>
  );
}

export function ProductsEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const prod = content.products;
  const setProd = (updater: (prev: typeof prod) => typeof prod) =>
    updateContent((prev) => ({ ...prev, products: updater(prev.products) }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Products Catalog</h2>
          <p className="text-sm text-muted">Add, edit, or delete products and categories.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset Products page to defaults?') && resetSection('products')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Products
        </button>
      </div>

      <SectionCard title="Page Header">
        <BilingualInput
          label="Title"
          value={prod.title}
          onChange={(title) => setProd((p) => ({ ...p, title }))}
        />
        <BilingualInput
          label="Subtitle"
          value={prod.subtitle}
          multiline
          rows={2}
          onChange={(subtitle) => setProd((p) => ({ ...p, subtitle }))}
        />
      </SectionCard>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() =>
            setProd((p) => ({
              ...p,
              items: [
                {
                  id: `prod_${Date.now()}`,
                  category: p.categories[0] ?? { ja: '農産物・生鮮食品', en: 'Agricultural & Fresh' },
                  name: { ja: '新商品', en: 'New Product' },
                  origin: { ja: '日本', en: 'Japan' },
                  storage: { ja: '常温', en: 'Ambient' },
                  wholesale: { ja: '可能', en: 'Available' },
                  imageUrl: '',
                  description: { ja: '商品説明を入力してください。', en: 'Enter product description.' },
                },
                ...p.items,
              ],
            }))
          }
          className="inline-flex items-center gap-1.5 text-sm font-semibold bg-forest text-white px-4 py-2 rounded cursor-pointer hover:bg-deepForest"
        >
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {prod.items.map((item, idx) => (
        <SectionCard
          key={item.id}
          title={`${item.name.en || item.name.ja}`}
          description={`${item.category.en} • ${item.origin.en} • ${item.storage.en}`}
          defaultOpen={idx === 0}
          actions={
            <button
              type="button"
              onClick={() =>
                setProd((p) => ({ ...p, items: p.items.filter((_, i) => i !== idx) }))
              }
              className="text-xs text-muted hover:text-deepRed inline-flex items-center gap-1 px-2 py-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" /> Delete
            </button>
          }
        >
          <BilingualInput
            label="Product Name"
            value={item.name}
            onChange={(name) =>
              setProd((p) => ({
                ...p,
                items: p.items.map((it, i) => (i === idx ? { ...it, name } : it)),
              }))
            }
          />
          <BilingualInput
            label="Category"
            value={item.category}
            onChange={(category) =>
              setProd((p) => ({
                ...p,
                items: p.items.map((it, i) => (i === idx ? { ...it, category } : it)),
              }))
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BilingualInput
              label="Origin"
              value={item.origin}
              onChange={(origin) =>
                setProd((p) => ({
                  ...p,
                  items: p.items.map((it, i) => (i === idx ? { ...it, origin } : it)),
                }))
              }
            />
            <BilingualInput
              label="Storage Temperature"
              value={item.storage}
              onChange={(storage) =>
                setProd((p) => ({
                  ...p,
                  items: p.items.map((it, i) => (i === idx ? { ...it, storage } : it)),
                }))
              }
            />
          </div>
          <BilingualInput
            label="Wholesale Status"
            value={item.wholesale}
            onChange={(wholesale) =>
              setProd((p) => ({
                ...p,
                items: p.items.map((it, i) => (i === idx ? { ...it, wholesale } : it)),
              }))
            }
          />
          <BilingualInput
            label="Description"
            value={item.description}
            multiline
            rows={2}
            onChange={(description) =>
              setProd((p) => ({
                ...p,
                items: p.items.map((it, i) => (i === idx ? { ...it, description } : it)),
              }))
            }
          />
          <ImageUrlInput
            label="Product Image"
            value={item.imageUrl}
            onChange={(imageUrl) =>
              setProd((p) => ({
                ...p,
                items: p.items.map((it, i) => (i === idx ? { ...it, imageUrl } : it)),
              }))
            }
          />
        </SectionCard>
      ))}
    </div>
  );
}

export function QualityEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const q = content.quality;
  const setQ = (updater: (prev: typeof q) => typeof q) =>
    updateContent((prev) => ({ ...prev, quality: updater(prev.quality) }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Quality Assurance Page</h2>
          <p className="text-sm text-muted">Edit quality control processes, cold chain info, and CTA.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset Quality page to defaults?') && resetSection('quality')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Quality
        </button>
      </div>

      <SectionCard title="Page Header">
        <BilingualInput label="Title" value={q.title} onChange={(title) => setQ((prev) => ({ ...prev, title }))} />
        <BilingualInput
          label="Subtitle"
          value={q.subtitle}
          multiline
          rows={2}
          onChange={(subtitle) => setQ((prev) => ({ ...prev, subtitle }))}
        />
      </SectionCard>

      <SectionCard title="Quality Control Processes">
        <BilingualInput
          label="Section Title"
          value={q.processTitle}
          onChange={(processTitle) => setQ((prev) => ({ ...prev, processTitle }))}
        />
        {q.processes.map((proc, idx) => (
          <div key={proc.id} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-3">
            <div className="text-xs font-bold text-forest">Process #{idx + 1}</div>
            <BilingualInput
              label="Title"
              value={proc.title}
              onChange={(title) =>
                setQ((prev) => ({
                  ...prev,
                  processes: prev.processes.map((p, i) => (i === idx ? { ...p, title } : p)),
                }))
              }
            />
            <BilingualInput
              label="Description"
              value={proc.description}
              multiline
              rows={2}
              onChange={(description) =>
                setQ((prev) => ({
                  ...prev,
                  processes: prev.processes.map((p, i) => (i === idx ? { ...p, description } : p)),
                }))
              }
            />
          </div>
        ))}
      </SectionCard>

      <SectionCard title="Cold Chain & Traceability">
        <BilingualInput
          label="Heading"
          value={q.coldChain.title}
          onChange={(title) => setQ((prev) => ({ ...prev, coldChain: { ...prev.coldChain, title } }))}
        />
        {q.coldChain.paragraphs.map((p, idx) => (
          <BilingualInput
            key={idx}
            label={`Paragraph #${idx + 1}`}
            value={p}
            multiline
            rows={3}
            onChange={(val) =>
              setQ((prev) => ({
                ...prev,
                coldChain: {
                  ...prev.coldChain,
                  paragraphs: prev.coldChain.paragraphs.map((para, i) => (i === idx ? val : para)),
                },
              }))
            }
          />
        ))}
        <ImageUrlInput
          label="Diagram / Image URL (optional)"
          value={q.coldChain.imageUrl}
          onChange={(imageUrl) => setQ((prev) => ({ ...prev, coldChain: { ...prev.coldChain, imageUrl } }))}
        />
      </SectionCard>

      <SectionCard title="Bottom CTA">
        <BilingualInput
          label="CTA Title"
          value={q.cta.title}
          onChange={(title) => setQ((prev) => ({ ...prev, cta: { ...prev.cta, title } }))}
        />
        <BilingualInput
          label="CTA Description"
          value={q.cta.description}
          multiline
          rows={2}
          onChange={(description) => setQ((prev) => ({ ...prev, cta: { ...prev.cta, description } }))}
        />
        <BilingualInput
          label="Button Label"
          value={q.cta.buttonLabel}
          onChange={(buttonLabel) => setQ((prev) => ({ ...prev, cta: { ...prev.cta, buttonLabel } }))}
        />
      </SectionCard>
    </div>
  );
}

export function SustainabilityEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const s = content.sustainability;
  const setS = (updater: (prev: typeof s) => typeof s) =>
    updateContent((prev) => ({ ...prev, sustainability: updater(prev.sustainability) }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Sustainability Page</h2>
          <p className="text-sm text-muted">Edit sustainability initiatives and 2030 KPI targets.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset Sustainability page to defaults?') && resetSection('sustainability')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Sustainability
        </button>
      </div>

      <SectionCard title="Page Header">
        <BilingualInput label="Title" value={s.title} onChange={(title) => setS((prev) => ({ ...prev, title }))} />
        <BilingualInput
          label="Subtitle"
          value={s.subtitle}
          multiline
          rows={2}
          onChange={(subtitle) => setS((prev) => ({ ...prev, subtitle }))}
        />
      </SectionCard>

      <SectionCard title="Key Initiatives">
        <BilingualInput
          label="Section Title"
          value={s.initiativesTitle}
          onChange={(initiativesTitle) => setS((prev) => ({ ...prev, initiativesTitle }))}
        />
        {s.initiatives.map((item, idx) => (
          <div key={item.id} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-3">
            <div className="text-xs font-bold text-forest">Initiative #{idx + 1}</div>
            <BilingualInput
              label="Title"
              value={item.title}
              onChange={(title) =>
                setS((prev) => ({
                  ...prev,
                  initiatives: prev.initiatives.map((it, i) => (i === idx ? { ...it, title } : it)),
                }))
              }
            />
            <BilingualInput
              label="Description"
              value={item.description}
              multiline
              rows={2}
              onChange={(description) =>
                setS((prev) => ({
                  ...prev,
                  initiatives: prev.initiatives.map((it, i) => (i === idx ? { ...it, description } : it)),
                }))
              }
            />
          </div>
        ))}
      </SectionCard>

      <SectionCard title="Targets & KPIs">
        <BilingualInput
          label="Section Title"
          value={s.targetsTitle}
          onChange={(targetsTitle) => setS((prev) => ({ ...prev, targetsTitle }))}
        />
        {s.kpis.map((kpi, idx) => (
          <div key={kpi.id} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-3">
            <div className="text-xs font-bold text-forest">KPI #{idx + 1}</div>
            <BilingualInput
              label="Metric Label"
              value={kpi.label}
              onChange={(label) =>
                setS((prev) => ({
                  ...prev,
                  kpis: prev.kpis.map((k, i) => (i === idx ? { ...k, label } : k)),
                }))
              }
            />
            <TextInput
              label="Metric Value (e.g. 50%)"
              value={kpi.value}
              onChange={(value) =>
                setS((prev) => ({
                  ...prev,
                  kpis: prev.kpis.map((k, i) => (i === idx ? { ...k, value } : k)),
                }))
              }
            />
            <BilingualInput
              label="Description"
              value={kpi.description}
              onChange={(description) =>
                setS((prev) => ({
                  ...prev,
                  kpis: prev.kpis.map((k, i) => (i === idx ? { ...k, description } : k)),
                }))
              }
            />
          </div>
        ))}
      </SectionCard>
    </div>
  );
}

export function NewsEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const news = content.news;
  const setNews = (updater: (prev: typeof news) => typeof news) =>
    updateContent((prev) => ({ ...prev, news: updater(prev.news) }));

  const selectableCategories = news.categories.filter((c) => c.id !== 'All');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">News & Updates</h2>
          <p className="text-sm text-muted">Publish, edit, or delete news announcements.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset News page to defaults?') && resetSection('news')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset News
        </button>
      </div>

      <SectionCard title="Page Header">
        <BilingualInput
          label="Title"
          value={news.title}
          onChange={(title) => setNews((n) => ({ ...n, title }))}
        />
      </SectionCard>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            const today = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
            setNews((n) => ({
              ...n,
              items: [
                {
                  id: `news_${Date.now()}`,
                  date: today,
                  categoryId: 'Corporate',
                  title: { ja: '新しいお知らせ', en: 'New Announcement' },
                  excerpt: { ja: '概要を入力してください。', en: 'Enter a short summary.' },
                  content: { ja: '本文を入力してください。', en: 'Enter full article content.' },
                },
                ...n.items,
              ],
            }));
          }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold bg-forest text-white px-4 py-2 rounded cursor-pointer hover:bg-deepForest"
        >
          <Plus className="w-4 h-4" /> Add News Article
        </button>
      </div>

      {news.items.map((item, idx) => (
        <SectionCard
          key={item.id}
          title={`${item.date} — ${item.title.en || item.title.ja}`}
          defaultOpen={idx === 0}
          actions={
            <button
              type="button"
              onClick={() =>
                setNews((n) => ({ ...n, items: n.items.filter((_, i) => i !== idx) }))
              }
              className="text-xs text-muted hover:text-deepRed inline-flex items-center gap-1 px-2 py-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" /> Delete
            </button>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label="Publish Date (YYYY.MM.DD)"
              value={item.date}
              onChange={(date) =>
                setNews((n) => ({
                  ...n,
                  items: n.items.map((it, i) => (i === idx ? { ...it, date } : it)),
                }))
              }
            />
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
                Category
              </label>
              <select
                value={item.categoryId}
                onChange={(e) =>
                  setNews((n) => ({
                    ...n,
                    items: n.items.map((it, i) => (i === idx ? { ...it, categoryId: e.target.value } : it)),
                  }))
                }
                className="w-full px-3 py-2 text-sm border border-borderGray rounded bg-white text-charcoal focus:outline-none focus:border-forest"
              >
                {selectableCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label.en} ({c.label.ja})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <BilingualInput
            label="Title"
            value={item.title}
            onChange={(title) =>
              setNews((n) => ({
                ...n,
                items: n.items.map((it, i) => (i === idx ? { ...it, title } : it)),
              }))
            }
          />
          <BilingualInput
            label="Excerpt (shown in list)"
            value={item.excerpt}
            multiline
            rows={2}
            onChange={(excerpt) =>
              setNews((n) => ({
                ...n,
                items: n.items.map((it, i) => (i === idx ? { ...it, excerpt } : it)),
              }))
            }
          />
          <BilingualInput
            label="Full Article Content"
            value={item.content}
            multiline
            rows={4}
            onChange={(contentVal) =>
              setNews((n) => ({
                ...n,
                items: n.items.map((it, i) => (i === idx ? { ...it, content: contentVal } : it)),
              }))
            }
          />
        </SectionCard>
      ))}
    </div>
  );
}

export function ContactEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const c = content.contact;
  const setC = (updater: (prev: typeof c) => typeof c) =>
    updateContent((prev) => ({ ...prev, contact: updater(prev.contact) }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Contact Page</h2>
          <p className="text-sm text-muted">Customize the contact form headings, inquiry types, and thank-you message.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset Contact page to defaults?') && resetSection('contact')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Contact
        </button>
      </div>

      <SectionCard title="Header & Confirmation">
        <BilingualInput label="Title" value={c.title} onChange={(title) => setC((prev) => ({ ...prev, title }))} />
        <BilingualInput
          label="Subtitle"
          value={c.subtitle}
          multiline
          rows={2}
          onChange={(subtitle) => setC((prev) => ({ ...prev, subtitle }))}
        />
        <BilingualInput
          label="Submitted Confirmation Title"
          value={c.submittedTitle}
          onChange={(submittedTitle) => setC((prev) => ({ ...prev, submittedTitle }))}
        />
        <BilingualInput
          label="Submitted Confirmation Message"
          value={c.submittedMessage}
          multiline
          rows={2}
          onChange={(submittedMessage) => setC((prev) => ({ ...prev, submittedMessage }))}
        />
      </SectionCard>

      <SectionCard
        title="Inquiry Type Dropdown Options"
        actions={
          <button
            type="button"
            onClick={() =>
              setC((prev) => ({
                ...prev,
                inquiryTypes: [...prev.inquiryTypes, { ja: '新規お問い合わせ種別', en: 'New Inquiry Type' }],
              }))
            }
            className="inline-flex items-center gap-1 text-xs font-semibold bg-forest text-white px-2.5 py-1.5 rounded cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Option
          </button>
        }
      >
        <div className="space-y-3">
          {c.inquiryTypes.map((type, idx) => (
            <div key={idx} className="flex items-end gap-2">
              <div className="flex-1">
                <BilingualInput
                  label={`Option #${idx + 1}`}
                  value={type}
                  onChange={(val) =>
                    setC((prev) => ({
                      ...prev,
                      inquiryTypes: prev.inquiryTypes.map((it, i) => (i === idx ? val : it)),
                    }))
                  }
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setC((prev) => ({
                    ...prev,
                    inquiryTypes: prev.inquiryTypes.filter((_, i) => i !== idx),
                  }))
                }
                className="p-2 text-muted hover:text-deepRed cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

export function SitemapEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const sm = content.sitemap;
  const setSm = (updater: (prev: typeof sm) => typeof sm) =>
    updateContent((prev) => ({ ...prev, sitemap: updater(prev.sitemap) }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Sitemap Page</h2>
          <p className="text-sm text-muted">Edit the headings and CTA banner on the Sitemap page.</p>
        </div>
        <button
          type="button"
          onClick={() => window.confirm('Reset Sitemap page to defaults?') && resetSection('sitemap')}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Sitemap
        </button>
      </div>

      <SectionCard title="Header & CTA">
        <TextInput label="Top Badge" value={sm.badge} onChange={(badge) => setSm((prev) => ({ ...prev, badge }))} />
        <BilingualInput label="Title" value={sm.title} onChange={(title) => setSm((prev) => ({ ...prev, title }))} />
        <BilingualInput
          label="Subtitle"
          value={sm.subtitle}
          multiline
          rows={2}
          onChange={(subtitle) => setSm((prev) => ({ ...prev, subtitle }))}
        />
        <BilingualInput
          label="CTA Title"
          value={sm.ctaTitle}
          onChange={(ctaTitle) => setSm((prev) => ({ ...prev, ctaTitle }))}
        />
        <BilingualInput
          label="CTA Description"
          value={sm.ctaDescription}
          multiline
          rows={2}
          onChange={(ctaDescription) => setSm((prev) => ({ ...prev, ctaDescription }))}
        />
        <BilingualInput
          label="CTA Button"
          value={sm.ctaButton}
          onChange={(ctaButton) => setSm((prev) => ({ ...prev, ctaButton }))}
        />
      </SectionCard>
    </div>
  );
}

export function InquiriesInbox() {
  const { inquiries, markInquiryRead, deleteInquiry } = useSiteContent();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-serif font-bold text-charcoal">Contact Inquiries Inbox</h2>
        <p className="text-sm text-muted">
          Messages submitted through the public Contact Us form appear here.
        </p>
      </div>

      {inquiries.length === 0 ? (
        <div className="bg-white border border-borderGray rounded-lg p-12 text-center text-muted">
          <Mail className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p className="font-medium text-charcoal mb-1">No inquiries yet</p>
          <p className="text-xs">Submit a test message on /contact to see it appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inq) => (
            <div
              key={inq.id}
              className={`bg-white border rounded-lg p-5 transition-colors ${
                inq.read ? 'border-borderGray opacity-80' : 'border-forest shadow-xs'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-borderGray pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    {!inq.read && (
                      <span className="inline-block w-2 h-2 rounded-full bg-deepRed" />
                    )}
                    <span className="font-bold text-charcoal">{inq.companyName}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-forest/10 text-forest font-semibold">
                      {inq.inquiryType}
                    </span>
                  </div>
                  <div className="text-xs text-muted mt-1">
                    {inq.contactPerson} {inq.department ? `(${inq.department})` : ''} • {inq.email} • {inq.phone} • {inq.country}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted font-mono">
                    {new Date(inq.createdAt).toLocaleString()}
                  </span>
                  <button
                    type="button"
                    onClick={() => markInquiryRead(inq.id, !inq.read)}
                    className="p-1.5 text-muted hover:text-forest cursor-pointer"
                    title={inq.read ? 'Mark as unread' : 'Mark as read'}
                  >
                    {inq.read ? <Mail className="w-4 h-4" /> : <MailOpen className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteInquiry(inq.id)}
                    className="p-1.5 text-muted hover:text-deepRed cursor-pointer"
                    title="Delete inquiry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {(inq.product || inq.quantity) && (
                <div className="text-xs text-charcoal/80 mb-2 flex flex-wrap gap-4">
                  {inq.product && <span><strong>Product:</strong> {inq.product}</span>}
                  {inq.quantity && <span><strong>Est. Quantity:</strong> {inq.quantity}</span>}
                </div>
              )}
              <p className="text-sm text-charcoal/90 whitespace-pre-line leading-relaxed">{inq.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function BackupSettingsEditor({
  onChangePassword,
}: {
  onChangePassword: (next: string) => void;
}) {
  const { content, setFullContent, resetAll } = useSiteContent();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [newPass, setNewPass] = useState('');

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kurosaki-site-content-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setStatusMsg('Exported site content JSON.');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        setFullContent(parsed);
        setStatusMsg('Successfully imported site content!');
      } catch {
        setStatusMsg('Error: Invalid JSON file.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-serif font-bold text-charcoal">Backup & Admin Settings</h2>
        <p className="text-sm text-muted">Export/import your entire site configuration or update admin security.</p>
      </div>

      {statusMsg && (
        <div className="p-3 bg-forest/10 border border-forest/30 text-forest text-sm rounded flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{statusMsg}</span>
        </div>
      )}

      <SectionCard title="Export & Import Configuration" description="Back up your edits or transfer them to another browser/environment">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest text-white text-sm font-semibold rounded hover:bg-deepForest cursor-pointer"
          >
            <Download className="w-4 h-4" /> Export JSON Backup
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-forest text-forest text-sm font-semibold rounded hover:bg-forest hover:text-white cursor-pointer"
          >
            <Upload className="w-4 h-4" /> Import JSON Backup
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            onChange={handleImport}
            className="hidden"
          />
        </div>
      </SectionCard>

      <SectionCard title="Admin Passcode">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (newPass.trim().length < 4) {
              setStatusMsg('Passcode must be at least 4 characters.');
              return;
            }
            onChangePassword(newPass.trim());
            setNewPass('');
            setStatusMsg('Admin passcode updated.');
          }}
          className="flex flex-col sm:flex-row gap-3 items-end"
        >
          <div className="flex-1 w-full">
            <TextInput
              label="New Admin Passcode"
              type="password"
              value={newPass}
              placeholder="Enter new passcode (min 4 chars)"
              onChange={setNewPass}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-charcoal text-white text-sm font-semibold rounded hover:bg-forest cursor-pointer"
          >
            Update Passcode
          </button>
        </form>
      </SectionCard>

      <SectionCard title="Danger Zone">
        <p className="text-sm text-muted">
          Reset all pages, branding, and theme colors back to the original factory defaults.
        </p>
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Reset ALL site content and theme colors to defaults? This cannot be undone.')) {
              resetAll();
              setStatusMsg('All site content has been reset to defaults.');
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-deepRed text-white text-sm font-semibold rounded hover:opacity-90 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" /> Reset Entire Site to Defaults
        </button>
      </SectionCard>
    </div>
  );
}
