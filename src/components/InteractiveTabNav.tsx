import React from 'react';
import { Briefcase, GraduationCap, BookOpen, Layers, CheckSquare, Sparkles } from 'lucide-react';

interface InteractiveTabNavProps {
  activeView: string;
  onSelectView: (view: string) => void;
  articleCount: number;
}

export const InteractiveTabNav: React.FC<InteractiveTabNavProps> = ({
  activeView,
  onSelectView,
  articleCount
}) => {
  const tabs = [
    { id: 'all', label: 'Semua Bagian', icon: Sparkles },
    { id: 'profil', label: 'Profil', icon: Layers },
    { id: 'pengalaman', label: 'Pengalaman (8)', icon: Briefcase },
    { id: 'sertifikasi', label: 'Sertifikasi & Lisensi', icon: CheckSquare },
    { id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
    { id: 'latar-belakang', label: 'Latar Belakang', icon: Layers },
    { id: 'articles', label: `Artikel Direview (${articleCount})`, icon: BookOpen },
  ];

  return (
    <div className="sticky top-16 z-30 bg-[#FAFAFB]/95 backdrop-blur-md border-b border-slate-200 py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onSelectView(tab.id);
                  if (tab.id !== 'all') {
                    const el = document.getElementById(tab.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
