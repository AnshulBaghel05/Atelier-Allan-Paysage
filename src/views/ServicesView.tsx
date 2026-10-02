import React from 'react';
import { useSite } from '../context/SiteContext';
import { ServiceId } from '../types';
import { CheckCircle2, ArrowRight, Phone, ShieldCheck, Sparkles, Clock, Hammer, Calendar } from 'lucide-react';
import { TaxCreditBanner } from '../components/TaxCreditBanner';

export const ServicesView: React.FC = () => {
  const { selectedServiceId, setSelectedServiceId, services, openQuoteModal, companyInfo } = useSite();

  const currentService = services.find((s) => s.id === selectedServiceId) || services[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
      {/* Header title */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
          Nos Expertises & Savoir-Faire
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
          Services paysagers sur-mesure à Allan et Montélimar
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          De la première esquisse à l’entretien régulier, découvrez nos prestations adaptées aux contraintes climatiques de la Drôme.
        </p>
      </div>

      {/* Service Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200">
        {services.map((srv) => {
          const isActive = srv.id === selectedServiceId;
          return (
            <button
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-[#1C3628] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
              }`}
            >
              <span>{srv.shortTitle}</span>
              {srv.taxCreditEligible && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${isActive ? 'bg-emerald-400 text-stone-950' : 'bg-emerald-100 text-emerald-800'}`}>
                  -50%
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Service Presentation Card */}
      <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Image with overlay */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[500px]">
            <img
              src={currentService.image}
              alt={currentService.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
              <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">Service</span>
              <h2 className="font-serif text-2xl font-bold">{currentService.title}</h2>
            </div>
          </div>

          {/* Right Column: Detailed info & benefits */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2B4E3A]">
                  Prestation spécialisée
                </span>
                {currentService.taxCreditEligible && (
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    50% Crédit d'impôt immédiat
                  </span>
                )}
              </div>

              <h2 className="hidden lg:block font-serif text-3xl font-bold text-stone-900">
                {currentService.title}
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-medium">
                {currentService.tagline}
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {currentService.longDescription}
              </p>

              {/* Specific features checklist */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                  Ce que comprend notre intervention :
                </span>
                <ul className="space-y-2">
                  {currentService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => openQuoteModal(currentService.id)}
                className="w-full sm:w-auto px-6 py-3 bg-[#1C3628] hover:bg-[#2B523E] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Demander un devis pour ce service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full sm:w-auto px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#1C3628]" />
                <span>Nous contacter directement</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Step Process Section */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
            Méthodologie & Rigueur
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Notre méthode de travail en 4 étapes
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Un déroulement clair, sans mauvaise surprise, depuis le premier rendez-vous jusqu'au nettoyage de fin de chantier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentService.processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-mono font-bold text-emerald-700/80 block mb-3">
                  {step.step}
                </span>
                <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-400 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-emerald-600" />
                <span>Intervention garantie</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special highlight for Maintenance: Annual Contracts & 50% Tax Credit */}
      {currentService.id === 'entretien-jardin' && (
        <div className="space-y-6">
          <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-3xl border border-[#E4DCB] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Formules d'Entretien Annuelles
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Contrats annuels personnalisés : la sérénité au fil des 4 saisons
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Optez pour un contrat annuel d'entretien mensualisé. Nous définissons ensemble le calendrier des passages : tonte au printemps, taille des haies avant l'été, ramassage des feuilles à l'automne et taille d'hiver.
              </p>
              <ul className="text-xs text-stone-700 space-y-1.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mensualisation des paiements sans frais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Passages prioritaires lors des pics de pousse</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Avance Immédiate : vous ne payez que 50% chaque mois</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Exemple de contrat type pour villa avec jardin 800 m²
              </h4>
              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span>14 tontes de pelouse par an</span>
                  <span className="font-medium text-stone-900">Inclus</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span>2 tailles de haies (printemps & automne)</span>
                  <span className="font-medium text-stone-900">Inclus</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span>Désherbage et ramassage des résidus</span>
                  <span className="font-medium text-stone-900">Inclus</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100 font-bold text-stone-900">
                  <span>Coût brut annuel :</span>
                  <span>1 440 € TTC (120 €/mois)</span>
                </div>
                <div className="flex justify-between py-1 font-bold text-emerald-800 bg-emerald-50 px-2 rounded">
                  <span>Reste à charge avec crédit 50% :</span>
                  <span>720 € TTC (60 €/mois)</span>
                </div>
              </div>

              <button
                onClick={() => openQuoteModal('entretien-jardin')}
                className="w-full py-2.5 bg-[#1C3628] hover:bg-[#284E39] text-white text-xs font-semibold rounded-xl text-center transition-colors cursor-pointer"
              >
                Recevoir une proposition de contrat annuel
              </button>
            </div>
          </div>

          <TaxCreditBanner />
        </div>
      )}
    </div>
  );
};
