import React, { useState } from 'react';
import { Bilingual } from '../../types/siteContent';
import { ChevronDown, ChevronRight, Image as ImageIcon, RotateCcw } from 'lucide-react';

interface SectionCardProps {
  key?: string | number;
  title: string;
  description?: string;
  defaultOpen?: boolean;
  onReset?: () => void;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export function SectionCard({
  title,
  description,
  defaultOpen = true,
  onReset,
  actions,
  children,
}: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-borderGray rounded-lg shadow-xs overflow-hidden">
      <div
        className="px-5 py-4 bg-lightGray/50 border-b border-borderGray flex items-center justify-between cursor-pointer select-none"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex items-center gap-2.5">
          {open ? (
            <ChevronDown className="w-4 h-4 text-forest shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-muted shrink-0" />
          )}
          <div>
            <h3 className="font-bold text-[15px] text-charcoal">{title}</h3>
            {description && <p className="text-xs text-muted mt-0.5">{description}</p>}
          </div>
        </div>
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {actions}
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              title="Reset section to defaults"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-deepRed px-2.5 py-1.5 rounded border border-borderGray bg-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
      {open && <div className="p-5 space-y-5">{children}</div>}
    </div>
  );
}

interface BilingualInputProps {
  key?: string | number;
  label: string;
  value: Bilingual;
  onChange: (next: Bilingual) => void;
  multiline?: boolean;
  rows?: number;
  placeholderJa?: string;
  placeholderEn?: string;
}

export function BilingualInput({
  label,
  value,
  onChange,
  multiline = false,
  rows = 3,
  placeholderJa = '日本語を入力...',
  placeholderEn = 'Enter English text...',
}: BilingualInputProps) {
  const baseClass =
    'w-full px-3 py-2 text-sm border border-borderGray rounded bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors';

  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
        {label}
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <span className="block text-[11px] font-semibold text-muted mb-1">日本語 (JA)</span>
          {multiline ? (
            <textarea
              rows={rows}
              value={value.ja}
              placeholder={placeholderJa}
              onChange={(e) => onChange({ ...value, ja: e.target.value })}
              className={baseClass}
            />
          ) : (
            <input
              type="text"
              value={value.ja}
              placeholder={placeholderJa}
              onChange={(e) => onChange({ ...value, ja: e.target.value })}
              className={baseClass}
            />
          )}
        </div>
        <div>
          <span className="block text-[11px] font-semibold text-muted mb-1">English (EN)</span>
          {multiline ? (
            <textarea
              rows={rows}
              value={value.en}
              placeholder={placeholderEn}
              onChange={(e) => onChange({ ...value, en: e.target.value })}
              className={baseClass}
            />
          ) : (
            <input
              type="text"
              value={value.en}
              placeholder={placeholderEn}
              onChange={(e) => onChange({ ...value, en: e.target.value })}
              className={baseClass}
            />
          )}
        </div>
      </div>
    </div>
  );
}

interface TextInputProps {
  label: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  type?: string;
}

export function TextInput({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: TextInputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-borderGray rounded bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
      />
    </div>
  );
}

interface ImageUrlInputProps {
  label: string;
  value: string;
  onChange: (next: string) => void;
}

export function ImageUrlInput({ label, value, onChange }: ImageUrlInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80">
        {label}
      </label>
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <div className="flex-1 w-full">
          <input
            type="text"
            value={value}
            placeholder="https://... or /logo.svg"
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-borderGray rounded bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
          />
          <p className="text-[11px] text-muted mt-1">
            Enter an image URL or path in <code className="bg-lightGray px-1 rounded">/public</code> (leave empty for placeholder).
          </p>
        </div>
        <div className="w-24 h-16 border border-borderGray rounded bg-lightGray/60 flex items-center justify-center overflow-hidden shrink-0">
          {value ? (
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <ImageIcon className="w-5 h-5 text-muted/50" />
          )}
        </div>
      </div>
    </div>
  );
}

interface ColorPickerFieldProps {
  label: string;
  description: string;
  value: string;
  onChange: (next: string) => void;
}

export function ColorPickerField({ label, description, value, onChange }: ColorPickerFieldProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-borderGray rounded-lg bg-warmWhite/40">
      <div>
        <div className="font-bold text-sm text-charcoal">{label}</div>
        <div className="text-xs text-muted">{description}</div>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 rounded border border-borderGray cursor-pointer bg-white p-0.5"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 px-2.5 py-1.5 text-xs font-mono border border-borderGray rounded bg-white text-charcoal"
        />
      </div>
    </div>
  );
}
