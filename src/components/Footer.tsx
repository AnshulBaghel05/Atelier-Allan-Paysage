import React from 'react';
import { useSite, NavigationTab } from '../context/SiteContext';
import { Phone, Mail, MapPin, Star, Settings, ExternalLink } from 'lucide-react';
import { ServiceId } from '../types';

export const Footer: React.FC = () => {
  const { companyInfo, setCurrentTab, navigateToService, services } = useSite();

  const handleNav = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (id: ServiceId) => {
    navigateToService(id);
  };

  return (
    <footer className="bg-[#14261C] text-stone-300 pt-16 pb-24 sm:pb-16 border-t border-[#234331]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#234331]">
          {/* Brand & Editorial Presentation */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              Atelier Allan Paysage
            </span>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Artisan paysagiste concepteur basé à <strong>Allan (26780)</strong>. Aménagement extérieur, terrasses méditerranéennes, murets en pierre calcaire et contrats d'entretien de jardins avec déduction fiscale de 50% dans toute la région de Montélimar.
            </p>

            {/* Google Rating Badge */}
            <div className="bg-[#1B3526] p-3.5 rounded-xl border border-[#2B543D] inline-flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white">4.9 / 5</span>
                <span className="text-stone-400"> · 38 avis Google vérifiés</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block">
              Nos Services Paysagers
            </span>
            <ul className="space-y-2 text-xs">
              {services.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleServiceClick(s.id)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('accueil')} className="hover:text-white transition-colors cursor-pointer">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('realisations')} className="hover:text-white transition-colors cursor-pointer">
                  Nos Réalisations (Avant/Après)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('a-propos')} className="hover:text-white transition-colors cursor-pointer">
                  L’Équipe & Savoir-faire
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Demande de Devis Gratuit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('guide-gestion')} className="hover:text-emerald-300 text-stone-400 transition-colors flex items-center gap-1 cursor-pointer pt-2">
                  <Settings className="w-3 h-3" />
                  <span>Guide Artisan & Gestion</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block">
              Coordonnées & Horaires
            </span>

            <div className="space-y-2.5 text-stone-300">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors font-medium text-white"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{companyInfo.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{companyInfo.address}, {companyInfo.postalCode} {companyInfo.city}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-stone-400 border-t border-[#234331] space-y-1">
              <div>{companyInfo.workingHoursWeekday}</div>
              <div>{companyInfo.workingHoursSaturday}</div>
            </div>

            <div className="pt-1">
              <a
                href={companyInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                <span>Voir sur Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {companyInfo.name}</span>
            <span>·</span>
            <span>SIRET & Assurance Décennale Paysage à jour</span>
            <span>·</span>
            <span>Allan (26780) · Drôme</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span>Mentions légales</span>
            <span>·</span>
            <span>Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
