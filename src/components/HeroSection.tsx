import React, { useState } from 'react';
import {
  CheckCircle2,
  Share2,
  FileDown,
  ShieldCheck,
  Building2,
  MapPin,
  Check,
  Mail,
  CalendarCheck
} from 'lucide-react';
import { ReviewerProfile } from '../data/reviewerData';
import portraitImg from '../assets/images/ade_fatwa_portrait_1790534208312.jpg';

interface HeroSectionProps {
  profile: ReviewerProfile;
  onOpenVerifyModal: () => void;
  onOpenContactModal: () => void;
  onDownloadCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenVerifyModal,
  onOpenContactModal,
  onDownloadCV
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="pt-8 pb-14 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs: Clean unboxed text with typographic separators (Zero-pill compliant) */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="hover:text-slate-800 transition-colors">Beranda</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-800 transition-colors">Mekari Expert Network</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-800 transition-colors">Reviewer Keuangan & Pajak</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-900 font-medium">Ade Fatwa Aulia, S.Ak., CPA, CFP</span>
          </div>
        </nav>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Bold Typographic Hierarchy & Bio */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Reviewer Verification Badge line (Clean text, no pill box) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 tracking-wide">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-700">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Reviewer Ahli Mekari Terverifikasi</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Spesialisasi Akuntansi, Pajak & Audit</span>
            </div>

            {/* Profile Title / Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-950 text-balance leading-tight">
                {profile.name}
                <span className="text-slate-500 font-normal block sm:inline sm:ml-2 text-2xl sm:text-3xl">
                  , S.Ak., CPA, CFP®
                </span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-700">
                {profile.currentRole} di {profile.currentCompany}
              </p>
            </div>

            {/* Executive Bio Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base sm:text-[16.5px] leading-relaxed max-w-3xl">
              <p>
                {profile.profileBioParagraphs[0]}
              </p>
              {profile.profileBioParagraphs[1] && (
                <p>
                  {profile.profileBioParagraphs[1]}
                </p>
              )}
            </div>

            {/* Credential Indicators: Unboxed typographic labels with hairline dividers */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-100">
              <div>
                <span className="text-xs text-slate-400 block">Pengalaman</span>
                <span className="text-2xl font-bold text-slate-900 tabular-nums">25+</span>
                <span className="text-xs text-slate-600 block mt-0.5">Tahun Industri</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Sertifikasi Utama</span>
                <span className="text-2xl font-bold text-slate-900">CPA & CFP</span>
                <span className="text-xs text-slate-600 block mt-0.5">IAPI & FPSB</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Artikel Diulas</span>
                <span className="text-2xl font-bold text-slate-900 tabular-nums">120+</span>
                <span className="text-xs text-slate-600 block mt-0.5">Mekari Network</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Standar Kepatuhan</span>
                <span className="text-2xl font-bold text-emerald-700 tabular-nums">100%</span>
                <span className="text-xs text-slate-600 block mt-0.5">Regulasi Kemenkeu</span>
              </div>
            </div>

            {/* Interactive Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-medium text-sm rounded-md hover:bg-slate-800 transition-colors shadow-xs active:scale-[0.99]"
              >
                <Mail className="w-4 h-4" />
                <span>Konsultasi & Diskusi</span>
              </button>

              <button
                onClick={onOpenVerifyModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 text-slate-800 font-medium text-sm rounded-md hover:bg-slate-50 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Cek Validitas Lisensi</span>
              </button>

              <button
                onClick={onDownloadCV}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors"
                title="Unduh ringkasan kurikulum vitae format teks/cetak"
              >
                <FileDown className="w-4 h-4 text-slate-500" />
                <span className="hidden sm:inline">Ringkasan CV</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors text-sm"
                title="Salin tautan profil"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 text-xs font-medium">Tautan Tersalin</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Bagikan</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: High Fidelity Portrait & Verification Card */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
            
            <div className="w-full max-w-[340px] bg-slate-50 border border-slate-200/90 rounded-xl overflow-hidden shadow-xs">
              
              {/* Photo Frame with graceful fallback */}
              <div className="relative aspect-square w-full bg-slate-200 overflow-hidden">
                <img
                  src={portraitImg}
                  alt="Ade Fatwa Aulia, S.Ak., CPA, CFP - Expert Reviewer Mekari"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Graceful fallback container if asset load fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 text-slate-700">
                          <span class="text-3xl font-bold tracking-tight">AFA</span>
                          <span class="mt-2 text-sm font-semibold">Ade Fatwa Aulia, S.Ak., CPA, CFP</span>
                          <span class="text-xs text-slate-500 mt-1">Head of Finance & Accounting</span>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Subtle verified overlay strip at bottom of photo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-3 text-white flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Expert</span>
                  </div>
                  <span className="text-[11px] text-slate-300">ID: MKR-REV-048</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 space-y-3 text-xs text-slate-600 bg-white border-t border-slate-200">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Afiliasi Industri</span>
                    <span className="font-medium text-slate-900">Fez Kinara Dining & Lounge</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Lokasi Praktik</span>
                    <span className="font-medium text-slate-900">{profile.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CalendarCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Kontribusi di Mekari</span>
                    <span className="font-medium text-slate-900">Klikpajak · Jurnal · Talenta</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Akreditasi Profesi</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    IAPI & FPSB Aktif
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
