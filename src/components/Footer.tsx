import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenVerifyModal: () => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVerifyModal, onOpenContactModal }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 pb-20 md:pb-12 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xs bg-red-600 flex items-center justify-center text-white font-bold text-xs tracking-tighter">
                M
              </div>
              <span className="text-base font-bold text-slate-900">
                Mekari <span className="font-normal text-slate-500">Expert Review</span>
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 max-w-lg">
              Halaman verifikasi resmi biografi dan kredensial profesional Ade Fatwa Aulia, S.Ak., CPA, CFP sebagai Expert Reviewer pada ekosistem solusi bisnis Mekari.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
            <button onClick={onOpenVerifyModal} className="hover:text-slate-950 transition-colors">
              Direktori Lisensi
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button onClick={onOpenContactModal} className="hover:text-slate-950 transition-colors">
              Permintaan Telaah
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <a href="#standards" className="hover:text-slate-950 transition-colors">
              Pedoman Editorial
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Mekari (PT Mid Solusi Nusantara). Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Terverifikasi IAPI & FPSB Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
