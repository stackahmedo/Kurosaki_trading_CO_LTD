import React from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
import { BilingualInput, ImageUrlInput, SectionCard } from './AdminFieldComponents';
import { Plus, Trash2 } from 'lucide-react';

export function HomeEditor() {
  const { content, updateContent, resetSection } = useSiteContent();
  const home = content.home;

  const setHome = (updater: (prev: typeof home) => typeof home) => {
    updateContent((prev) => ({ ...prev, home: updater(prev.home) }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Home Page</h2>
          <p className="text-sm text-muted">Edit every section of the landing page in Japanese and English.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Reset the entire Home page to default content?')) {
              resetSection('home');
            }
          }}
          className="text-xs font-semibold text-deepRed hover:underline cursor-pointer"
        >
          Reset Home Page
        </button>
      </div>

      {/* Hero */}
      <SectionCard title="1. Hero Section" description="Main banner headline, description, buttons, and image">
        <BilingualInput
          label="Top Badge"
          value={home.hero.badge}
          onChange={(badge) => setHome((h) => ({ ...h, hero: { ...h.hero, badge } }))}
        />
        <BilingualInput
          label="Main Headline (use Enter for line break)"
          value={home.hero.title}
          multiline
          rows={2}
          onChange={(title) => setHome((h) => ({ ...h, hero: { ...h.hero, title } }))}
        />
        <BilingualInput
          label="Subtitle"
          value={home.hero.subtitle}
          multiline
          rows={2}
          onChange={(subtitle) => setHome((h) => ({ ...h, hero: { ...h.hero, subtitle } }))}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BilingualInput
            label="Primary Button"
            value={home.hero.primaryCta}
            onChange={(primaryCta) => setHome((h) => ({ ...h, hero: { ...h.hero, primaryCta } }))}
          />
          <BilingualInput
            label="Secondary Button"
            value={home.hero.secondaryCta}
            onChange={(secondaryCta) => setHome((h) => ({ ...h, hero: { ...h.hero, secondaryCta } }))}
          />
        </div>
        <ImageUrlInput
          label="Hero Image"
          value={home.hero.imageUrl}
          onChange={(imageUrl) => setHome((h) => ({ ...h, hero: { ...h.hero, imageUrl } }))}
        />
      </SectionCard>

      {/* Process Banner */}
      <SectionCard title="2. Supply Chain Steps Banner" defaultOpen={false}>
        <div className="space-y-4">
          {home.processSteps.map((step, idx) => (
            <div key={step.id} className="p-4 border border-borderGray rounded bg-warmWhite/40">
              <BilingualInput
                label={`Step 0${idx + 1}`}
                value={step.title}
                onChange={(title) =>
                  setHome((h) => ({
                    ...h,
                    processSteps: h.processSteps.map((s, i) => (i === idx ? { ...s, title } : s)),
                  }))
                }
              />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Company Intro */}
      <SectionCard title="3. Company Introduction" defaultOpen={false}>
        <BilingualInput
          label="Heading"
          value={home.companyIntro.title}
          multiline
          rows={2}
          onChange={(title) => setHome((h) => ({ ...h, companyIntro: { ...h.companyIntro, title } }))}
        />
        <BilingualInput
          label="Description"
          value={home.companyIntro.description}
          multiline
          rows={3}
          onChange={(description) => setHome((h) => ({ ...h, companyIntro: { ...h.companyIntro, description } }))}
        />
        <BilingualInput
          label="Button Label"
          value={home.companyIntro.buttonLabel}
          onChange={(buttonLabel) => setHome((h) => ({ ...h, companyIntro: { ...h.companyIntro, buttonLabel } }))}
        />
        <ImageUrlInput
          label="Section Image"
          value={home.companyIntro.imageUrl}
          onChange={(imageUrl) => setHome((h) => ({ ...h, companyIntro: { ...h.companyIntro, imageUrl } }))}
        />
      </SectionCard>

      {/* Why Choose Us */}
      <SectionCard title="4. Why Choose Kurosaki Trading" defaultOpen={false}>
        <BilingualInput
          label="Section Heading"
          value={home.whyChoose.title}
          onChange={(title) => setHome((h) => ({ ...h, whyChoose: { ...h.whyChoose, title } }))}
        />
        <BilingualInput
          label="Subtitle"
          value={home.whyChoose.subtitle}
          multiline
          rows={2}
          onChange={(subtitle) => setHome((h) => ({ ...h, whyChoose: { ...h.whyChoose, subtitle } }))}
        />
        <div className="space-y-4">
          {home.whyChoose.features.map((feat, idx) => (
            <div key={feat.id} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-3">
              <div className="text-xs font-bold text-forest">Feature Card #{idx + 1}</div>
              <BilingualInput
                label="Title"
                value={feat.title}
                onChange={(title) =>
                  setHome((h) => ({
                    ...h,
                    whyChoose: {
                      ...h.whyChoose,
                      features: h.whyChoose.features.map((f, i) => (i === idx ? { ...f, title } : f)),
                    },
                  }))
                }
              />
              <BilingualInput
                label="Description"
                value={feat.description}
                multiline
                rows={2}
                onChange={(description) =>
                  setHome((h) => ({
                    ...h,
                    whyChoose: {
                      ...h.whyChoose,
                      features: h.whyChoose.features.map((f, i) => (i === idx ? { ...f, description } : f)),
                    },
                  }))
                }
              />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Core Services */}
      <SectionCard title="5. Core Services Grid" defaultOpen={false}>
        <BilingualInput
          label="Badge"
          value={home.coreServices.badge}
          onChange={(badge) => setHome((h) => ({ ...h, coreServices: { ...h.coreServices, badge } }))}
        />
        <BilingualInput
          label="Heading"
          value={home.coreServices.title}
          multiline
          rows={2}
          onChange={(title) => setHome((h) => ({ ...h, coreServices: { ...h.coreServices, title } }))}
        />
        <BilingualInput
          label="Description"
          value={home.coreServices.description}
          multiline
          rows={2}
          onChange={(description) => setHome((h) => ({ ...h, coreServices: { ...h.coreServices, description } }))}
        />
        <div className="space-y-4">
          {home.coreServices.services.map((srv, idx) => (
            <div key={srv.id} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-3">
              <div className="text-xs font-bold text-forest">Service #{idx + 1}</div>
              <BilingualInput
                label="Title"
                value={srv.title}
                onChange={(title) =>
                  setHome((h) => ({
                    ...h,
                    coreServices: {
                      ...h.coreServices,
                      services: h.coreServices.services.map((s, i) => (i === idx ? { ...s, title } : s)),
                    },
                  }))
                }
              />
              <BilingualInput
                label="Description"
                value={srv.description}
                multiline
                rows={2}
                onChange={(description) =>
                  setHome((h) => ({
                    ...h,
                    coreServices: {
                      ...h.coreServices,
                      services: h.coreServices.services.map((s, i) => (i === idx ? { ...s, description } : s)),
                    },
                  }))
                }
              />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Industries */}
      <SectionCard
        title="6. Industries We Support"
        defaultOpen={false}
        actions={
          <button
            type="button"
            onClick={() =>
              setHome((h) => ({
                ...h,
                industries: { ...h.industries, items: [...h.industries.items, { ja: '新規業種', en: 'New Industry' }] },
              }))
            }
            className="inline-flex items-center gap-1 text-xs font-semibold bg-forest text-white px-2.5 py-1.5 rounded cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </button>
        }
      >
        <BilingualInput
          label="Heading"
          value={home.industries.title}
          onChange={(title) => setHome((h) => ({ ...h, industries: { ...h.industries, title } }))}
        />
        <BilingualInput
          label="Description"
          value={home.industries.description}
          multiline
          rows={2}
          onChange={(description) => setHome((h) => ({ ...h, industries: { ...h.industries, description } }))}
        />
        <div className="space-y-3">
          {home.industries.items.map((item, idx) => (
            <div key={idx} className="flex items-end gap-2">
              <div className="flex-1">
                <BilingualInput
                  label={`Industry #${idx + 1}`}
                  value={item}
                  onChange={(val) =>
                    setHome((h) => ({
                      ...h,
                      industries: {
                        ...h.industries,
                        items: h.industries.items.map((it, i) => (i === idx ? val : it)),
                      },
                    }))
                  }
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setHome((h) => ({
                    ...h,
                    industries: { ...h.industries, items: h.industries.items.filter((_, i) => i !== idx) },
                  }))
                }
                className="p-2 text-muted hover:text-deepRed cursor-pointer"
                title="Remove"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Sourcing */}
      <SectionCard title="7. Customized Product Sourcing" defaultOpen={false}>
        <BilingualInput
          label="Heading"
          value={home.sourcing.title}
          onChange={(title) => setHome((h) => ({ ...h, sourcing: { ...h.sourcing, title } }))}
        />
        <BilingualInput
          label="Description"
          value={home.sourcing.description}
          multiline
          rows={2}
          onChange={(description) => setHome((h) => ({ ...h, sourcing: { ...h.sourcing, description } }))}
        />
        <BilingualInput
          label="Button Label"
          value={home.sourcing.buttonLabel}
          onChange={(buttonLabel) => setHome((h) => ({ ...h, sourcing: { ...h.sourcing, buttonLabel } }))}
        />
      </SectionCard>

      {/* Product Categories */}
      <SectionCard title="8. Product Categories & CTA" defaultOpen={false}>
        <div className="space-y-4">
          {home.productCategories.items.map((cat, idx) => (
            <div key={cat.id} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-3">
              <div className="text-xs font-bold text-forest">Category #{idx + 1}</div>
              <BilingualInput
                label="Title"
                value={cat.title}
                onChange={(title) =>
                  setHome((h) => ({
                    ...h,
                    productCategories: {
                      ...h.productCategories,
                      items: h.productCategories.items.map((c, i) => (i === idx ? { ...c, title } : c)),
                    },
                  }))
                }
              />
              <BilingualInput
                label="Description"
                value={cat.description}
                multiline
                rows={2}
                onChange={(description) =>
                  setHome((h) => ({
                    ...h,
                    productCategories: {
                      ...h.productCategories,
                      items: h.productCategories.items.map((c, i) => (i === idx ? { ...c, description } : c)),
                    },
                  }))
                }
              />
            </div>
          ))}
        </div>
        <BilingualInput
          label="Bottom CTA Title"
          value={home.productCategories.ctaTitle}
          onChange={(ctaTitle) =>
            setHome((h) => ({ ...h, productCategories: { ...h.productCategories, ctaTitle } }))
          }
        />
        <BilingualInput
          label="Bottom CTA Description"
          value={home.productCategories.ctaDescription}
          multiline
          rows={2}
          onChange={(ctaDescription) =>
            setHome((h) => ({ ...h, productCategories: { ...h.productCategories, ctaDescription } }))
          }
        />
        <BilingualInput
          label="Bottom CTA Button"
          value={home.productCategories.ctaButton}
          onChange={(ctaButton) =>
            setHome((h) => ({ ...h, productCategories: { ...h.productCategories, ctaButton } }))
          }
        />
      </SectionCard>

      {/* Quality Policy & Global Network */}
      <SectionCard title="9. Quality Policy & Global Network" defaultOpen={false}>
        <BilingualInput
          label="Quality Policy Heading"
          value={home.qualityPolicy.title}
          onChange={(title) => setHome((h) => ({ ...h, qualityPolicy: { ...h.qualityPolicy, title } }))}
        />
        <BilingualInput
          label="Quality Policy Description"
          value={home.qualityPolicy.description}
          multiline
          rows={4}
          onChange={(description) => setHome((h) => ({ ...h, qualityPolicy: { ...h.qualityPolicy, description } }))}
        />
        <ImageUrlInput
          label="Quality Policy Image"
          value={home.qualityPolicy.imageUrl}
          onChange={(imageUrl) => setHome((h) => ({ ...h, qualityPolicy: { ...h.qualityPolicy, imageUrl } }))}
        />
        <BilingualInput
          label="Quality Note"
          value={home.qualityPolicy.note}
          onChange={(note) => setHome((h) => ({ ...h, qualityPolicy: { ...h.qualityPolicy, note } }))}
        />
        <hr className="border-borderGray" />
        <BilingualInput
          label="Global Network Heading"
          value={home.globalNetwork.title}
          onChange={(title) => setHome((h) => ({ ...h, globalNetwork: { ...h.globalNetwork, title } }))}
        />
        <BilingualInput
          label="Global Network Description"
          value={home.globalNetwork.description}
          multiline
          rows={2}
          onChange={(description) => setHome((h) => ({ ...h, globalNetwork: { ...h.globalNetwork, description } }))}
        />
        <ImageUrlInput
          label="World Map Image"
          value={home.globalNetwork.mapImageUrl}
          onChange={(mapImageUrl) => setHome((h) => ({ ...h, globalNetwork: { ...h.globalNetwork, mapImageUrl } }))}
        />
      </SectionCard>

      {/* FAQ */}
      <SectionCard
        title="10. FAQ Section"
        description="Add, edit, or delete Frequently Asked Questions"
        defaultOpen={false}
        actions={
          <button
            type="button"
            onClick={() =>
              setHome((h) => ({
                ...h,
                faq: {
                  ...h.faq,
                  items: [
                    ...h.faq.items,
                    {
                      id: `faq_${Date.now()}`,
                      question: { ja: '新しい質問', en: 'New Question' },
                      answer: { ja: '回答を入力してください。', en: 'Enter answer here.' },
                    },
                  ],
                },
              }))
            }
            className="inline-flex items-center gap-1 text-xs font-semibold bg-forest text-white px-2.5 py-1.5 rounded cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add FAQ
          </button>
        }
      >
        <BilingualInput
          label="FAQ Section Heading"
          value={home.faq.title}
          onChange={(title) => setHome((h) => ({ ...h, faq: { ...h.faq, title } }))}
        />
        <div className="space-y-4">
          {home.faq.items.map((item, idx) => (
            <div key={item.id} className="p-4 border border-borderGray rounded bg-warmWhite/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-forest">FAQ #{idx + 1}</span>
                <button
                  type="button"
                  onClick={() =>
                    setHome((h) => ({
                      ...h,
                      faq: { ...h.faq, items: h.faq.items.filter((_, i) => i !== idx) },
                    }))
                  }
                  className="text-xs text-muted hover:text-deepRed inline-flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
              <BilingualInput
                label="Question"
                value={item.question}
                onChange={(question) =>
                  setHome((h) => ({
                    ...h,
                    faq: {
                      ...h.faq,
                      items: h.faq.items.map((f, i) => (i === idx ? { ...f, question } : f)),
                    },
                  }))
                }
              />
              <BilingualInput
                label="Answer"
                value={item.answer}
                multiline
                rows={2}
                onChange={(answer) =>
                  setHome((h) => ({
                    ...h,
                    faq: {
                      ...h.faq,
                      items: h.faq.items.map((f, i) => (i === idx ? { ...f, answer } : f)),
                    },
                  }))
                }
              />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Final CTA */}
      <SectionCard title="11. Final CTA Banner" defaultOpen={false}>
        <BilingualInput
          label="CTA Headline"
          value={home.finalCta.title}
          onChange={(title) => setHome((h) => ({ ...h, finalCta: { ...h.finalCta, title } }))}
        />
        <BilingualInput
          label="CTA Button"
          value={home.finalCta.buttonLabel}
          onChange={(buttonLabel) => setHome((h) => ({ ...h, finalCta: { ...h.finalCta, buttonLabel } }))}
        />
      </SectionCard>
    </div>
  );
}
