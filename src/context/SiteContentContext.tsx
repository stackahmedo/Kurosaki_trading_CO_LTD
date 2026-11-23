import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, ContactInquiry } from '../types/siteContent';
import { defaultSiteContent } from '../data/defaultSiteContent';

const CONTENT_STORAGE_KEY = 'kurosaki_site_content_v1';
const INQUIRIES_STORAGE_KEY = 'kurosaki_inquiries_v1';

interface SiteContentContextType {
  content: SiteContent;
  updateContent: (updater: (prev: SiteContent) => SiteContent) => void;
  setFullContent: (next: SiteContent) => void;
  resetSection: <K extends keyof SiteContent>(section: K) => void;
  resetAll: () => void;
  inquiries: ContactInquiry[];
  addInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'read'>) => void;
  markInquiryRead: (id: string, read: boolean) => void;
  deleteInquiry: (id: string) => void;
}

const SiteContentContext = createContext<SiteContentContextType | undefined>(undefined);

function deepMerge<T>(defaults: T, saved: unknown): T {
  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) {
    return (saved !== undefined ? saved : defaults) as T;
  }
  const result: Record<string, unknown> = { ...(defaults as Record<string, unknown>) };
  const savedObj = saved as Record<string, unknown>;
  for (const key of Object.keys(result)) {
    if (key in savedObj) {
      const defVal = result[key];
      const savVal = savedObj[key];
      if (
        defVal &&
        typeof defVal === 'object' &&
        !Array.isArray(defVal) &&
        savVal &&
        typeof savVal === 'object' &&
        !Array.isArray(savVal)
      ) {
        result[key] = deepMerge(defVal, savVal);
      } else if (savVal !== undefined) {
        result[key] = savVal;
      }
    }
  }
  return result as T;
}

function loadSavedContent(): SiteContent {
  try {
    const raw = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) return defaultSiteContent;
    const parsed = JSON.parse(raw);
    return deepMerge(defaultSiteContent, parsed);
  } catch {
    return defaultSiteContent;
  }
}

function loadSavedInquiries(): ContactInquiry[] {
  try {
    const raw = localStorage.getItem(INQUIRIES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(loadSavedContent);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(loadSavedInquiries);

  // Sync theme CSS variables to :root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-forest', content.theme.forest);
    root.style.setProperty('--color-deepForest', content.theme.deepForest);
    root.style.setProperty('--color-deepRed', content.theme.deepRed);
    root.style.setProperty('--color-charcoal', content.theme.charcoal);
    root.style.setProperty('--color-warmWhite', content.theme.warmWhite);
  }, [content.theme]);

  // Sync favicon to document <head>
  useEffect(() => {
    const href = content.global.faviconUrl?.trim();
    if (!href) return;

    const getMimeType = (url: string) => {
      if (url.startsWith('data:image/svg+xml') || url.endsWith('.svg')) return 'image/svg+xml';
      if (url.startsWith('data:image/png') || url.endsWith('.png')) return 'image/png';
      if (url.startsWith('data:image/webp') || url.endsWith('.webp')) return 'image/webp';
      if (url.startsWith('data:image/x-icon') || url.endsWith('.ico')) return 'image/x-icon';
      return undefined;
    };

    const mime = getMimeType(href);
    const rels = ['icon', 'alternate icon', 'apple-touch-icon'];
    rels.forEach((rel) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      if (rel === 'icon' && mime) {
        link.type = mime;
      } else if (rel === 'icon') {
        link.removeAttribute('type');
      }
      link.href = href;
    });
  }, [content.global.faviconUrl]);

  // Persist content to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
    } catch {
      // Ignore storage quota errors
    }
  }, [content]);

  // Persist inquiries to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(inquiries));
    } catch {
      // Ignore storage quota errors
    }
  }, [inquiries]);

  // Sync changes across open browser tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === CONTENT_STORAGE_KEY && e.newValue) {
        try {
          setContent(deepMerge(defaultSiteContent, JSON.parse(e.newValue)));
        } catch {
          // ignore
        }
      }
      if (e.key === INQUIRIES_STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) setInquiries(parsed);
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const updateContent = (updater: (prev: SiteContent) => SiteContent) => {
    setContent((prev) => updater(prev));
  };

  const setFullContent = (next: SiteContent) => {
    setContent(deepMerge(defaultSiteContent, next));
  };

  const resetSection = <K extends keyof SiteContent>(section: K) => {
    setContent((prev) => ({
      ...prev,
      [section]: defaultSiteContent[section],
    }));
  };

  const resetAll = () => {
    setContent(defaultSiteContent);
  };

  const addInquiry = (inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'read'>) => {
    const entry: ContactInquiry = {
      ...inquiry,
      id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
      read: false,
    };
    setInquiries((prev) => [entry, ...prev]);
  };

  const markInquiryRead = (id: string, read: boolean) => {
    setInquiries((prev) => prev.map((item) => (item.id === id ? { ...item, read } : item)));
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <SiteContentContext.Provider
      value={{
        content,
        updateContent,
        setFullContent,
        resetSection,
        resetAll,
        inquiries,
        addInquiry,
        markInquiryRead,
        deleteInquiry,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) {
    throw new Error('useSiteContent must be used within a SiteContentProvider');
  }
  return ctx;
}
