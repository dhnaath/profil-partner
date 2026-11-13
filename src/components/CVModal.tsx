import React, { useEffect } from 'react';
import { X, Printer, Check, Building2, GraduationCap, Award } from 'lucide-react';
import { ReviewerProfile } from '../data/reviewerData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ReviewerProfile;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, profile }) => {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <span className="text-xs font-semibold text-slate-600">
            Executive Curriculum Vitae (Ringkasan Resmi)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-800 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm print:p-0">
          
          {/* Header CV */}
          <div className="border-b border-slate-200 pb-5">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              {profile.name}, S.Ak., CPA, CFP®
            </h2>
            <p className="text-slate-600 font-medium mt-1">
              Head of Finance & Accounting · Praktisi Keuangan & Reviewer Ahli Mekari
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-500">
              <span>{profile.location}</span>
              <span aria-hidden="true">·</span>
              <span>25+ Tahun Pengalaman</span>
              <span aria-hidden="true">·</span>
              <span>Terdaftar IAPI & FPSB</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Profil Profesional
            </h3>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              {profile.profileBioParagraphs[0]}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Riwayat Pengalaman Karir
            </h3>
            <div className="space-y-3">
              {profile.experiences.map((c) => (
                <div key={c.id} className="space-y-0.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-950">{c.role} — {c.company}</span>
                    <span className="text-slate-500 text-xs">{c.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Pendidikan
              </h3>
              {profile.education.map((e) => (
                <div key={e.id} className="text-xs">
                  <span className="font-bold text-slate-900 block">{e.degree}</span>
                  <span className="text-slate-600">{e.institution} ({e.period})</span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Sertifikasi & Lisensi
              </h3>
              <div className="space-y-1.5 text-xs">
                {profile.certifications.map((cert) => (
                  <div key={cert.id}>
                    <span className="font-bold text-slate-900">{cert.title}</span>
                    <span className="text-slate-500 block">{cert.issuer || 'Lembaga Sertifikasi'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
