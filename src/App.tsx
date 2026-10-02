/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SiteProvider, useSite } from './context/SiteContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { QuoteModal } from './components/QuoteModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { ProjectsView } from './views/ProjectsView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { AdminGuideView } from './views/AdminGuideView';
import { CheckCircle2 } from 'lucide-react';

const MainContent: React.FC = () => {
  const { currentTab, toastMessage } = useSite();

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-800 font-sans selection:bg-[#1E3A2B] selection:text-white">
      {/* Toast Notification alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#1C3628] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm border border-[#305842] animate-in fade-in slide-in-from-top-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header />

      {/* Dynamic View rendering */}
      <main className="flex-1">
        {currentTab === 'accueil' && <HomeView />}
        {currentTab === 'services' && <ServicesView />}
        {currentTab === 'realisations' && <ProjectsView />}
        {currentTab === 'a-propos' && <AboutView />}
        {currentTab === 'contact' && <ContactView />}
        {currentTab === 'guide-gestion' && <AdminGuideView />}
      </main>

      {/* Fixed quick bar on mobile */}
      <MobileQuickBar />

      {/* Quote Request Modal */}
      <QuoteModal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <SiteProvider>
      <MainContent />
    </SiteProvider>
  );
}
