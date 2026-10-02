import React, { useState } from 'react';
import { MapPin, CheckCircle, Navigation, Search } from 'lucide-react';
import { SERVICE_AREAS } from '../data/initialData';

export const ServiceAreaMap: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTown, setSelectedTown] = useState<string>('Allan');

  const filteredAreas = SERVICE_AREAS.filter((area) =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.postalCode.includes(searchTerm)
  );

  const currentTownData = SERVICE_AREAS.find((a) => a.name === selectedTown) || SERVICE_AREAS[0];

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
      <div className="max-w-3xl mb-6">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
          Zone d’Intervention Locale
        </span>
        <h3 className="font-serif text-2xl font-bold text-stone-900">
          Nous intervenons à Allan, Montélimar et dans toute la Drôme Provençale
        </h3>
        <p className="text-stone-600 text-sm mt-1">
          Basés à <strong>Allan (26780)</strong>, nous nous déplaçons rapidement dans un rayon de 25 km pour vos devis gratuits et l’exécution de vos travaux.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Search & Interactive Town Selector */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Vérifiez votre commune ou code postal (ex: 26200)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2C4E3C] focus:bg-white transition-all"
            />
          </div>

          <div className="max-h-64 overflow-y-auto pr-1 space-y-1.5 custom-scrollbar">
            {filteredAreas.length > 0 ? (
              filteredAreas.map((town) => {
                const isSelected = selectedTown === town.name;
                return (
                  <button
                    key={town.name}
                    onClick={() => setSelectedTown(town.name)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E3A2B] text-white border-[#1E3A2B] shadow-sm'
                        : 'bg-stone-50/80 text-stone-700 hover:bg-stone-100 border-stone-200/70'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className={`w-4 h-4 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-stone-400'}`} />
                      <span className="text-sm font-medium">{town.name}</span>
                      <span className={`text-xs ${isSelected ? 'text-emerald-200' : 'text-stone-400'}`}>
                        ({town.postalCode})
                      </span>
                    </div>
                    <span className={`text-xs tabular-nums ${isSelected ? 'text-emerald-100 font-semibold' : 'text-stone-500'}`}>
                      {town.distance}
                    </span>
                  </button>
                );
              })
            ) : (
              <div className="text-center py-6 text-stone-500 text-xs bg-stone-50 rounded-xl border border-stone-200">
                Votre commune est voisine ? Contactez-nous, nous étudions les déplacements personnalisés.
              </div>
            )}
          </div>

          {/* Active Town Confirmation Box */}
          <div className="bg-[#F4F1EA] p-4 rounded-xl border border-[#DDD5C5] text-xs space-y-1.5">
            <div className="flex items-center gap-2 text-[#1E3A2B] font-semibold">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Secteur couvert : {currentTownData.name} ({currentTownData.postalCode})</span>
            </div>
            <p className="text-stone-600 pl-6 leading-relaxed">
              Visite technique sur place et devis 100% gratuit sous 48h sans aucun frais de déplacement.
            </p>
          </div>
        </div>

        {/* Right: Visual Stylized Regional Map */}
        <div className="lg:col-span-6 bg-[#162D21] text-white rounded-2xl p-6 border border-[#264D37] relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between mb-4 border-b border-[#254F37] pb-3">
            <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              Rayon d’intervention : 25 km autour d’Allan
            </span>
            <span className="text-xs text-stone-300 font-mono">Drôme (26)</span>
          </div>

          {/* Schematic SVG Map representing Allan and surrounding hub */}
          <div className="relative h-64 sm:h-72 w-full bg-[#1A3828] rounded-xl flex items-center justify-center p-4 border border-[#2B563D] overflow-hidden">
            {/* Background contour rings */}
            <div className="absolute w-72 h-72 rounded-full border border-emerald-500/10 animate-pulse pointer-events-none"></div>
            <div className="absolute w-52 h-52 rounded-full border border-emerald-500/20 pointer-events-none"></div>
            <div className="absolute w-28 h-28 rounded-full border border-emerald-500/30 bg-emerald-500/5 pointer-events-none"></div>

            {/* Stylized Node Network */}
            <div className="relative w-full h-full">
              {/* Allan Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                <span className="w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-400/30 animate-ping absolute"></span>
                <span className="w-4 h-4 rounded-full bg-amber-400 ring-2 ring-white relative shadow-md"></span>
                <span className="text-xs font-bold text-white mt-1 bg-black/70 px-2 py-0.5 rounded shadow">
                  Allan (Atelier)
                </span>
              </div>

              {/* Montélimar (North) */}
              <button
                onClick={() => setSelectedTown('Montélimar')}
                className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <span className={`w-3 h-3 rounded-full ${selectedTown === 'Montélimar' ? 'bg-emerald-300 ring-4 ring-emerald-400' : 'bg-stone-300'}`}></span>
                <span className="text-[11px] text-stone-200 mt-0.5 font-medium">Montélimar</span>
              </button>

              {/* Malataverne (North-West) */}
              <button
                onClick={() => setSelectedTown('Malataverne')}
                className="absolute top-14 left-12 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${selectedTown === 'Malataverne' ? 'bg-emerald-300 ring-4 ring-emerald-400' : 'bg-stone-400'}`}></span>
                <span className="text-[10px] text-stone-300">Malataverne</span>
              </button>

              {/* Donzère (South-West) */}
              <button
                onClick={() => setSelectedTown('Donzère')}
                className="absolute bottom-12 left-10 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${selectedTown === 'Donzère' ? 'bg-emerald-300 ring-4 ring-emerald-400' : 'bg-stone-400'}`}></span>
                <span className="text-[10px] text-stone-300">Donzère</span>
              </button>

              {/* Pierrelatte (Far South-West) */}
              <button
                onClick={() => setSelectedTown('Pierrelatte')}
                className="absolute bottom-3 left-6 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${selectedTown === 'Pierrelatte' ? 'bg-emerald-300 ring-4 ring-emerald-400' : 'bg-stone-400'}`}></span>
                <span className="text-[10px] text-stone-300">Pierrelatte</span>
              </button>

              {/* Saint-Paul-Trois-Châteaux (South) */}
              <button
                onClick={() => setSelectedTown('Saint-Paul-Trois-Châteaux')}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${selectedTown === 'Saint-Paul-Trois-Châteaux' ? 'bg-emerald-300 ring-4 ring-emerald-400' : 'bg-stone-400'}`}></span>
                <span className="text-[10px] text-stone-300">St-Paul-3-Châteaux</span>
              </button>

              {/* Grignan (East / South-East) */}
              <button
                onClick={() => setSelectedTown('Grignan')}
                className="absolute bottom-12 right-10 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${selectedTown === 'Grignan' ? 'bg-emerald-300 ring-4 ring-emerald-400' : 'bg-stone-400'}`}></span>
                <span className="text-[10px] text-stone-300">Grignan</span>
              </button>

              {/* Espeluche (North-East) */}
              <button
                onClick={() => setSelectedTown('Espeluche')}
                className="absolute top-12 right-14 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${selectedTown === 'Espeluche' ? 'bg-emerald-300 ring-4 ring-emerald-400' : 'bg-stone-400'}`}></span>
                <span className="text-[10px] text-stone-300">Espeluche</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-300 mt-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              Siège de l’entreprise
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              Secteur d'intervention direct
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
