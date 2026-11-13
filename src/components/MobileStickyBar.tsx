import React from 'react';
import { BookOpen, ShieldCheck, Mail } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenArticles: () => void;
  onOpenVerifyModal: () => void;
  onOpenContactModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenArticles,
  onOpenVerifyModal,
  onOpenContactModal
}) => {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg"
      style={{ height: '56px' }}
      role="region"
      aria-label="Aksi Cepat Mobile"
    >
      <div className="flex items-center justify-around h-full gap-2">
        <button
          onClick={onOpenArticles}
          className="flex-1 h-10 inline-flex items-center justify-center gap-1.5 px-2 text-xs font-semibold text-slate-700 bg-slate-50 active:bg-slate-100 rounded-lg border border-slate-200"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-500" />
          <span>Artikel</span>
        </button>

        <button
          onClick={onOpenVerifyModal}
          className="flex-1 h-10 inline-flex items-center justify-center gap-1.5 px-2 text-xs font-semibold text-slate-700 bg-slate-50 active:bg-slate-100 rounded-lg border border-slate-200"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Lisensi</span>
        </button>

        <button
          onClick={onOpenContactModal}
          className="flex-1 h-10 inline-flex items-center justify-center gap-1.5 px-2 text-xs font-semibold text-white bg-slate-900 active:bg-slate-800 rounded-lg shadow-xs"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Hubungi</span>
        </button>
      </div>
    </div>
  );
};
