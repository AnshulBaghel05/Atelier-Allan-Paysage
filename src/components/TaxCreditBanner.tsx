import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Calculator, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const TaxCreditBanner: React.FC = () => {
  const { openQuoteModal } = useSite();
  const [budgetSlider, setBudgetSlider] = useState<number>(1200);

  const netCost = Math.round(budgetSlider * 0.5);
  const taxSavings = budgetSlider - netCost;

  return (
    <section className="bg-gradient-to-br from-[#1C3829] via-[#1F3D2E] to-[#152B1F] text-stone-100 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl my-12 border border-[#2F5841]">
      <div className="max-w-5xl mx-auto">
        {/* Header & Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-[#2C523C] px-3 py-1 rounded-full border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            Dispositif Officiel Services à la Personne
          </span>
          <span className="text-xs font-semibold text-amber-300 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30">
            Avance Immédiate URSSAF
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Payez votre entretien de jardin à 50% de son prix réel
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Pour les particuliers résidant en France (résidence principale ou secondaire en Drôme), 
              les petits travaux d’entretien de jardin ouvrent droit à <strong className="text-emerald-300 font-semibold">50% de crédit d’impôt</strong> (Plafond de 5 000 €/an par foyer fiscal).
            </p>

            <div className="bg-[#162D21]/80 rounded-xl p-4 border border-[#2D543C] space-y-2 text-xs sm:text-sm">
              <div className="font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Avec l'Avance Immédiate : zéro avance de trésorerie !</span>
              </div>
              <p className="text-stone-300 pl-6">
                Fini d'attendre un an votre déclaration d’impôts. Grâce à l’adhésion gratuite au service de l’URSSAF, vous ne réglez que les 50% restants dès la validation de votre facture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Tonte de pelouse & finitions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Taille de haies & massifs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Débroussaillage légal (DFCI)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Évacuation des déchets verts</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Simulator */}
          <div className="lg:col-span-5 bg-[#254A36] rounded-2xl p-6 border border-[#3C6E50] shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-[#356146] mb-5">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-200 flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-emerald-400" />
                Simulateur d’économie
              </span>
              <span className="text-xs text-stone-300 font-mono">50% déduit</span>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs text-stone-200">Budget entretien estimé :</label>
                  <span className="text-lg font-bold text-white font-mono tabular-nums">
                    {budgetSlider} € <span className="text-xs font-normal text-stone-300">TTC</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="4000"
                  step="100"
                  value={budgetSlider}
                  onChange={(e) => setBudgetSlider(Number(e.target.value))}
                  className="w-full h-2 bg-[#173122] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>200 € (ponctuel)</span>
                  <span>4 000 € (grand parc annuel)</span>
                </div>
              </div>

              {/* Result Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#1A3827] rounded-xl p-3.5 border border-[#315D43]">
                  <span className="text-[11px] text-stone-300 block mb-1">Votre coût réel :</span>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-300 font-mono tabular-nums">
                    {netCost} €
                  </div>
                  <span className="text-[10px] text-emerald-400/80">après déduction</span>
                </div>

                <div className="bg-[#1A3827] rounded-xl p-3.5 border border-[#315D43]">
                  <span className="text-[11px] text-stone-300 block mb-1">Votre économie :</span>
                  <div className="text-xl sm:text-2xl font-bold text-amber-300 font-mono tabular-nums">
                    - {taxSavings} €
                  </div>
                  <span className="text-[10px] text-amber-300/80">pris en charge par l'État</span>
                </div>
              </div>

              <button
                onClick={() => openQuoteModal('entretien-jardin')}
                className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Demander mon devis entretien déductible</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
