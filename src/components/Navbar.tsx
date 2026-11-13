import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Award, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenVerifyModal: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenVerifyModal,
  onOpenContactModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'profil', label: 'Profil' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'sertifikasi', label: 'Sertifikasi & Lisensi' },
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'latar-belakang', label: 'Latar Belakang' },
    { id: 'articles', label: 'Artikel Direview' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Zone 1: Single text element wordmark in display face with subtle brand mark */}
          <a
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            aria-label="Mekari Expert Reviewer Home"
          >
            <div className="w-7 h-7 rounded-sm bg-red-600 flex items-center justify-center text-white font-bold text-sm tracking-tighter">
              M
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors">
              Mekari <span className="font-normal text-slate-500">Expert Review</span>
            </span>
          </a>

          {/* Zone 2: 4-5 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 relative hover:text-slate-950 ${
                  activeTab === item.id
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-600'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVerifyModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-md transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verifikasi Lisensi</span>
            </button>
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
            >
              <span>Hubungi Reviewer</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenVerifyModal}
              aria-label="Verifikasi Lisensi"
              className="p-2 text-slate-600 hover:text-slate-900 rounded-md"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drop-down panel */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-slate-100 text-slate-950 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerifyModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-md"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verifikasi Status Lisensi (CPA & CFP)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-white bg-slate-900 rounded-md"
            >
              Hubungi / Konsultasi
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
