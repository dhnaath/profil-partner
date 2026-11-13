import React, { useState } from 'react';
import { reviewerData, ArticleItem } from './data/reviewerData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveTabNav } from './components/InteractiveTabNav';
import { MekariProfileSections } from './components/MekariProfileSections';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ArticleModal } from './components/ArticleModal';
import { LicenseModal } from './components/LicenseModal';
import { ContactModal } from './components/ContactModal';
import { CVModal } from './components/CVModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [targetCredentialId, setTargetCredentialId] = useState<string | undefined>(undefined);

  const handleOpenVerifyModal = (code?: string) => {
    setTargetCredentialId(code);
    setIsVerifyModalOpen(true);
  };

  const handleOpenArticles = () => {
    setActiveTab('articles');
    const el = document.getElementById('articles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFB] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Top Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenVerifyModal={() => handleOpenVerifyModal()}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Spacious Minimalist Hero */}
        <HeroSection
          profile={reviewerData}
          onOpenVerifyModal={() => handleOpenVerifyModal()}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onDownloadCV={() => setIsCVModalOpen(true)}
        />

        {/* Interactive Segmented Switcher */}
        <InteractiveTabNav
          activeView={activeTab}
          onSelectView={setActiveTab}
          articleCount={reviewerData.articles.length}
        />

        {/* Core Mekari Reviewer Sections Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MekariProfileSections
            profile={reviewerData}
            onOpenVerifyModal={handleOpenVerifyModal}
          />
        </div>

        {/* Verified Articles Section */}
        <div className="border-t border-slate-200/80 mt-10">
          <ArticlesSection
            articles={reviewerData.articles}
            onSelectArticle={setSelectedArticle}
          />
        </div>
      </main>

      {/* Clean Minimalist Footer */}
      <Footer
        onOpenVerifyModal={() => handleOpenVerifyModal()}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Mobile Sticky Bar (< 15% mobile viewport cap) */}
      <MobileStickyBar
        onOpenArticles={handleOpenArticles}
        onOpenVerifyModal={() => handleOpenVerifyModal()}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenContactModal={() => {
          setSelectedArticle(null);
          setIsContactModalOpen(true);
        }}
      />

      <LicenseModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
        certifications={reviewerData.certifications}
        defaultCredentialId={targetCredentialId}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        profile={reviewerData}
      />
    </div>
  );
}
