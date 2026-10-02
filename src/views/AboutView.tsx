import React from 'react';
import { useSite } from '../context/SiteContext';
import { ShieldCheck, HeartHandshake, Leaf, Award, MapPin, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { companyInfo, openQuoteModal } = useSite();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Intro Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
          L’Atelier & Nos Valeurs
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
          L’amour des paysages de la Drôme Provençale et le sens du travail bien fait
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
          Installés à Allan (26780), à quelques minutes de Montélimar, nous façonnons des jardins vivants, durables et adaptés à notre climat du Sud.
        </p>
      </div>

      {/* Main Story & Team Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200">
            <img
              src="/src/assets/images/team_craftsmen_portrait_1790943600170.jpg"
              alt="Artisans paysagistes d'Atelier Allan Paysage en Drôme"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-stone-200 max-w-xs hidden sm:block">
            <div className="flex items-center gap-2 text-[#1C3628] font-bold text-sm">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Atelier basé à Allan (26780)</span>
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              Rayon d'action direct : Montélimar, Donzère, Grignan, Pierrelatte.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2B4E3A] block">
            Notre Philosophie Artisanale
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
            Un interlocuteur unique pour concevoir et choyer votre jardin
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed">
            Notre aventure est née d'une conviction simple : un beau jardin en Drôme n'est pas un décor figé, mais un écosystème qui doit résister aux fortes chaleurs de l'été, supporter les rafales de mistral et rester facile à vivre au quotidien.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            Nous avons choisi de privilégier la proximité avec nos clients particuliers. Pas d'intermédiaires, pas de sous-traitance anonyme : de la visite initiale à Allan ou Montélimar jusqu'au coup de balai final sur votre terrasse, vous échangez directement avec les artisans qui travaillent vos extérieurs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Devis gratuit & conseils personnalisés</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Végétaux issus de pépinières régionales</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>50% crédit d'impôt immédiat Urssaf</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantie décennale maçonnerie paysagère</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Commitments */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
            Nos Engagements
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Pourquoi nous confier vos extérieurs ?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Végétaux adaptés à la sécheresse
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Nous sélectionnons des essences rustiques et méditerranéennes (oliviers, lavandes, santolines, cistes, graminées) qui s'épanouissent naturellement sans gaspillage d'eau.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Matériaux nobles & pierres locales
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Travertin naturel, murets en pierres calcaires de la Drôme, dalles alvéolaires drainantes : nous valorisons des matériaux solides qui vieillissent magnifiquement.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Propreté & respect des délais
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Un chantier propre chaque soir et une communication fluide. Nous tenons nos engagements calendaires et laissons votre propriété impeccable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="bg-[#FAF7F0] p-8 sm:p-10 rounded-3xl border border-[#E7E0D2] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Envie de faire connaissance et d'échanger sur votre jardin ?
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Venez nous rencontrer à Allan ou invitez-nous pour une première visite conseil sur votre terrain.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openQuoteModal()}
            className="px-6 py-3 bg-[#1C3628] hover:bg-[#284E39] text-white text-xs font-bold rounded-xl shadow transition-all whitespace-nowrap cursor-pointer"
          >
            Prendre rendez-vous
          </button>
          <a
            href={`tel:${companyInfo.phone}`}
            className="px-4 py-3 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#1C3628]" />
            <span>{companyInfo.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
