import React, { useState } from 'react';
import { useSite, NavigationTab } from '../context/SiteContext';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, Settings } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentTab, setCurrentTab, companyInfo, openQuoteModal } = useSite();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'services', label: 'Nos Services' },
    { id: 'realisations', label: 'Réalisations' },
    { id: 'a-propos', label: 'L’Atelier' },
    { id: 'contact', label: 'Contact & Devis' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top emergency / regional trust strip */}
      <div className="bg-[#1C3628] text-[#E7E2D5] text-xs py-1.5 px-4 sm:px-8 border-b border-[#2C4E3C]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Bassin de Montélimar & Drôme Provençale
            </span>
            <span className="hidden sm:inline text-stone-400">·</span>
            <span className="hidden sm:inline text-stone-300">Allan (26780)</span>
            <span className="hidden md:inline text-stone-400">·</span>
            <span className="hidden md:inline text-amber-200 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              50% Crédit d'impôt immédiat entretien
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-emerald-200 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <button
              onClick={() => handleNavClick('guide-gestion')}
              className="hidden lg:flex items-center gap-1 text-[11px] text-stone-300 hover:text-white bg-[#264433] px-2 py-0.5 rounded transition-colors"
              title="Accéder au guide de gestion et d'édition du site"
            >
              <Settings className="w-3 h-3" />
              <span>Espace Gestion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar strictly obeying 3-Zone Contract */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text wordmark in display face */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('accueil')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A3324] group-hover:text-[#285038] transition-colors">
                Atelier Allan Paysage
              </span>
            </button>
          </div>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-[#1A3324] ${
                    isActive ? 'text-[#1A3324] font-semibold' : 'text-stone-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2B4E3A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-700 hover:text-[#1A3324] bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#2A4D39]" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>

            <button
              onClick={() => openQuoteModal()}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#1F3D2C] hover:bg-[#2B4F3A] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => openQuoteModal()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1F3D2C] rounded-md whitespace-nowrap cursor-pointer"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#E8E2D5] bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#1F3D2C] text-white'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('guide-gestion')}
                className="flex items-center gap-2 w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-100"
              >
                <Settings className="w-4 h-4 text-stone-500" />
                <span>Espace Gestion du Site (Artisan)</span>
              </button>
            </div>

            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#1F3D2C] rounded-lg shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler le {companyInfo.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 text-sm font-semibold text-stone-800 bg-[#E8E1D3] hover:bg-[#DDD4C4] rounded-lg transition-colors text-center"
              >
                Demande de devis gratuite
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
