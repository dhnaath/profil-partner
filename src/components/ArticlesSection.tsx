import React, { useState } from 'react';
import { Search, BookOpen, ExternalLink, ShieldCheck, ArrowRight, Filter } from 'lucide-react';
import { ArticleItem } from '../data/reviewerData';

interface ArticlesSectionProps {
  articles: ArticleItem[];
  onSelectArticle: (article: ArticleItem) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  articles,
  onSelectArticle
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Bidang' },
    { id: 'Perpajakan', label: 'Perpajakan & PPh' },
    { id: 'Audit & Fraud', label: 'Audit & Fraud' },
    { id: 'Payroll & SDM', label: 'Payroll & SDM' },
    { id: 'Manajemen Kas', label: 'Manajemen Kas' },
  ];

  const platforms = [
    { id: 'all', label: 'Semua Platform' },
    { id: 'Mekari Klikpajak', label: 'Mekari Klikpajak' },
    { id: 'Mekari Jurnal', label: 'Mekari Jurnal' },
    { id: 'Mekari Talenta', label: 'Mekari Talenta' },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.keyInsights.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || art.category === selectedCategory;

    const matchesPlatform =
      selectedPlatform === 'all' || art.platform === selectedPlatform;

    return matchesSearch && matchesCategory && matchesPlatform;
  });

  return (
    <section id="articles" className="py-14 border-b border-slate-200/80 scroll-mt-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase block mb-1">
              Koleksi Publikasi & Panduan Terverifikasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Artikel yang Ditulis & Direview
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 max-w-2xl">
              Daftar komprehensif artikel edukasi dan panduan teknis pada ekosistem Mekari yang telah divalidasi keabsahan hukum, akurasi rumus, dan kelayakan praktisnya.
            </p>
          </div>

          <div className="text-xs text-slate-500 text-left md:text-right">
            Menampilkan <span className="font-semibold text-slate-900 tabular-nums">{filteredArticles.length}</span> dari <span className="font-semibold text-slate-900 tabular-nums">{articles.length}</span> ulasan
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan topik (PPh 21, reimbursement fraud, arus kas, audit)..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Platform Selector Filter */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {platforms.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlatform(p.id)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedPlatform === p.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
            <span className="text-xs text-slate-400 font-medium mr-1 shrink-0 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Kategori:
            </span>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedCategory === c.id
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Article Cards Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-12 text-center bg-slate-50 border border-slate-200 rounded-xl p-8">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">Tidak ada artikel yang cocok dengan pencarian</p>
            <p className="text-xs text-slate-500 mt-1">Coba gunakan kata kunci lain seperti "pajak", "kas", atau reset filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPlatform('all');
              }}
              className="mt-4 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer bg-white border border-slate-200/90 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:border-slate-400 hover:shadow-md hover:-translate-y-0.5"
              >
                <div>
                  {/* Unboxed Metadata Line with typographic separators (Zero-pill compliant) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                    <span className="font-semibold text-slate-800">{article.platform}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Primary Title */}
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-slate-800 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Telaah Ahli Selesai</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-900 group-hover:underline">
                    <span>Lihat Telaah</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
