import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckSquare, Square, Share2, Check, ArrowUpRight } from 'lucide-react';
import { ArticleItem } from '../data/reviewerData';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onOpenContactModal: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenContactModal
}) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCopyNotes = () => {
    const notes = [
      `Telaah Ahli: ${article.title}`,
      `Reviewer: Ade Fatwa Aulia, S.Ak., CPA, CFP`,
      `Platform: ${article.platform}`,
      '\nPoin Kunci:',
      ...article.keyInsights.map(k => `- ${k}`),
      '\nChecklist Audit:',
      ...article.auditChecklist.map(c => `[ ] ${c}`)
    ].join('\n');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(notes);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-900">{article.platform}</span>
              <span aria-hidden="true">·</span>
              <span>{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
              {article.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors shrink-0"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          
          {/* Reviewer verified signature box */}
          <div className="p-3.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <span className="font-semibold text-emerald-900 block">Ditinjau & Diverifikasi oleh:</span>
                <span className="text-emerald-800">Ade Fatwa Aulia, S.Ak., CPA, CFP</span>
              </div>
            </div>
            <span className="text-emerald-700 font-medium">Status: Valid PSAK & UU HPP</span>
          </div>

          {/* Excerpt summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Ringkasan Panduan
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Key Insights from Ade Fatwa */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
              <span>Catatan Telaah Kritis Reviewer</span>
            </h4>
            <div className="space-y-2.5">
              {article.keyInsights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-slate-800 leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Checklist Audit */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Checklist Kepatuhan & Langkah Audit Internal
              </h4>
              <span className="text-[11px] text-slate-400">
                {Object.values(checkedItems).filter(Boolean).length} / {article.auditChecklist.length} Selesai
              </span>
            </div>

            <div className="space-y-2">
              {article.auditChecklist.map((item, idx) => {
                const isChecked = !!checkedItems[idx];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCheck(idx)}
                    className={`w-full flex items-start gap-2.5 p-2.5 rounded-lg border text-left transition-all text-xs sm:text-sm ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-200 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <span className={isChecked ? 'line-through text-slate-500' : ''}>
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <button
            onClick={handleCopyNotes}
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 font-medium px-3 py-2 rounded-md hover:bg-slate-200/60 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Telaah Disalin</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Salin Catatan Telaah</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenContactModal();
              }}
              className="flex-1 sm:flex-initial px-4 py-2 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              Diskusi Topik Ini
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
