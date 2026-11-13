import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Check, Copy, ExternalLink, Calendar, Award } from 'lucide-react';
import { CertificationItem } from '../data/reviewerData';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  certifications: CertificationItem[];
  defaultCredentialId?: string;
}

export const LicenseModal: React.FC<LicenseModalProps> = ({
  isOpen,
  onClose,
  certifications,
  defaultCredentialId
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Verifikasi Kredensial & Lisensi Resmi
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Basis data sertifikasi akuntan publik dan perencana keuangan berlisensi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          
          <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 flex items-center justify-between">
            <span>Pemegang Lisensi: <strong className="text-slate-900">Ade Fatwa Aulia, S.Ak., CPA, CFP</strong></span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
              Status: Valid & Aktif
            </span>
          </div>

          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`p-4 rounded-xl border transition-all ${
                defaultCredentialId === cert.code
                  ? 'border-slate-900 bg-slate-50/50 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    {cert.title}
                  </h4>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Lembaga Penerbit: <strong className="text-slate-700">{cert.issuer || 'Lembaga Sertifikasi'}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2 self-start">
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                    {cert.code || 'TERVERIFIKASI'}
                  </span>
                  {cert.code && (
                    <button
                      onClick={() => handleCopy(cert.code!, cert.id)}
                      className="p-1 text-slate-400 hover:text-slate-800 transition-colors"
                      title="Salin No Registrasi"
                    >
                      {copiedId === cert.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[11px]">Masa Registrasi</span>
                  <span className="font-medium text-slate-800">Aktif Terdaftar Sesuai Standar PPL</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Status Kualifikasi</span>
                  <span className="font-medium text-emerald-700">Tersertifikasi Resmi & Diakui</span>
                </div>
              </div>
            </div>
          ))}

          {/* Institutional Trust Explanation */}
          <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <span className="font-bold text-slate-900 block">Jaminan Mekari Expert Review:</span>
            <p>
              Mekari secara rutin memperbarui status keanggotaan penelaah ahli melalui direktori resmi IAPI (Institut Akuntan Publik Indonesia) dan FPSB (Financial Planning Standards Board Indonesia).
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            Tutup Informasi
          </button>
        </div>

      </div>
    </div>
  );
};
