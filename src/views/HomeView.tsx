import React from 'react';
import { useSite } from '../context/SiteContext';
import { Phone, ArrowRight, ShieldCheck, Star, Sparkles, CheckCircle2, ChevronRight, Award, Clock } from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { TaxCreditBanner } from '../components/TaxCreditBanner';
import { ServiceAreaMap } from '../components/ServiceAreaMap';
import { ServiceId } from '../types';

export const HomeView: React.FC = () => {
  const { companyInfo, openQuoteModal, navigateToService, setCurrentTab, services, projects, reviews } = useSite();

  const featuredProject = projects[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. Hero Section: Single dominant focal carrier with authentic Drôme atmosphere */}
      <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden rounded-b-3xl sm:rounded-b-[40px] bg-[#14261C]">
        {/* Hero Background image with measured scrim */}
        <img
          src="/src/assets/images/hero_drome_garden_1790943498607.jpg"
          alt="Jardin méditerranéen aménagé en Drôme Provençale à Allan"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14261C] via-[#14261C]/50 to-[#14261C]/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center space-y-6">
          {/* Subtle unboxed metadata kicker */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-300 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
            <span>Artisan Paysagiste Concepteur</span>
            <span aria-hidden="true">·</span>
            <span>Allan (26780)</span>
            <span aria-hidden="true">·</span>
            <span>Montélimar & Drôme Provençale</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-[1.15] text-balance">
            Créateur d’espaces verts d’exception & entretien de jardins
          </h1>

          <p className="max-w-2xl mx-auto text-stone-200 text-base sm:text-lg leading-relaxed font-normal">
            De la conception de jardins méditerranéens sur-mesure aux terrasses en travertin, murets de pierre et contrats d’entretien avec <strong>50% de crédit d’impôt immédiat</strong>.
          </p>

          {/* Action CTAs: High intent call & quote buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 max-w-md mx-auto">
            <button
              onClick={() => openQuoteModal('creation-amenagement')}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/25 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
          </div>

          {/* Social Proof Trust markers */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-stone-300 border-t border-white/15 max-w-3xl mx-auto">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-semibold text-white">4.9/5 sur Google</span>
              <span className="text-stone-400">(38 avis clients)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>50% Avance Immédiate URSSAF</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-300" />
              <span>Garantie Décennale & Végétale</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-300" />
              <span>Devis sous 48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities & Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
            Savoir-Faire & Métiers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Nos prestations pour embellir et entretenir vos extérieurs
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Des interventions sur-mesure pour les particuliers à Allan, Montélimar et dans toute la Drôme.
          </p>
        </div>

        {/* Bento Grid with editorial numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const editorialNumber = `0${index + 1}`;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 text-xs font-mono font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
                      {editorialNumber}
                    </div>

                    {service.taxCreditEligible && (
                      <div className="absolute top-3 right-3 text-xs font-semibold text-emerald-950 bg-emerald-400 px-2.5 py-1 rounded shadow-sm">
                        50% Crédit d’impôt
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-serif text-lg font-bold leading-snug">
                        {service.shortTitle}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-stone-100 text-xs text-stone-700">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-3 border-t border-stone-100/80 mt-2">
                  <button
                    onClick={() => navigateToService(service.id)}
                    className="text-xs font-semibold text-[#1C3628] hover:text-[#2E5841] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Découvrir la méthode</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openQuoteModal(service.id)}
                    className="text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Devis
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Realisation Before/After Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E7E0D2]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block">
                Chantier Récent · Allan (26780)
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
                {featuredProject.title}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block">
                  Matériaux et végétaux intégrés :
                </span>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.materials?.map((mat, i) => (
                    <span key={i} className="text-xs text-stone-700 bg-white border border-stone-200 px-2.5 py-1 rounded-md">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setCurrentTab('realisations')}
                  className="text-xs font-bold text-[#1C3628] hover:text-[#2E5841] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Voir toutes nos réalisations Avant/Après</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={featuredProject.beforeImage}
                afterImage={featuredProject.afterImage}
                title={featuredProject.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tax Credit Educational Block (50% Avance Immédiate Urssaf) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TaxCreditBanner />
      </div>

      {/* 5. Google Customer Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
              Témoignages & Avis Clients
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Ce que nos clients disent de notre travail
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Avis authentiques déposés par des propriétaires d'Allan, Montélimar et de la Drôme.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={companyInfo.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-stone-800 bg-white border border-stone-200 px-3.5 py-2 rounded-xl hover:bg-stone-50 transition-colors shadow-xs"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Consulter notre fiche Google</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-900 block">{review.author}</span>
                  <span className="text-stone-500 text-[11px]">{review.city} ({review.serviceProvided})</span>
                </div>
                {review.verifiedGoogle && (
                  <span className="text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Avis Google
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Service Area Interactive Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceAreaMap />
      </section>

      {/* 7. Final Conversion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C3628] rounded-3xl p-8 sm:p-12 text-center text-white space-y-5 shadow-xl border border-[#2B543D]">
          <span className="text-xs font-semibold text-emerald-300 tracking-wider uppercase inline-block">
            Anticipez la saison du jardin
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto">
            Vous avez un projet pour votre jardin à Allan ou autour de Montélimar ?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Nous réalisons une visite technique gratuite sur votre propriété pour étudier vos besoins et vous proposer un chiffrage précis sous 48 heures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm rounded-xl shadow transition-all cursor-pointer"
            >
              Demander une étude & devis gratuit
            </button>
            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Appeler le {companyInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
