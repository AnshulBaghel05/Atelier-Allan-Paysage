import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Plus, MapPin, Calendar, Layers, X, Upload, Check, Trash2, ArrowRight } from 'lucide-react';
import { ServiceId, ProjectItem } from '../types';
import { IMAGES } from '../assets/images';

export const ProjectsView: React.FC = () => {
  const { projects, addProject, deleteProject, openQuoteModal, services } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTown, setSelectedTown] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newServiceId, setNewServiceId] = useState<ServiceId>('creation-amenagement');
  const [newCity, setNewCity] = useState('Allan');
  const [newPostalCode, setNewPostalCode] = useState('26780');
  const [newYear, setNewYear] = useState('2026');
  const [newDescription, setNewDescription] = useState('');
  const [newDuration, setNewDuration] = useState('2 semaines');
  const [newMaterials, setNewMaterials] = useState('');
  const [newBeforeImage, setNewBeforeImage] = useState<string>('');
  const [newAfterImage, setNewAfterImage] = useState<string>(IMAGES.heroGarden);

  // Filter logic
  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.serviceId === selectedCategory;
    const matchesTown = selectedTown === 'all' || p.city.toLowerCase() === selectedTown.toLowerCase();
    return matchesCategory && matchesTown;
  });

  const availableTowns = Array.from(new Set(projects.map((p) => p.city)));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isBefore: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isBefore) {
          setNewBeforeImage(reader.result as string);
        } else {
          setNewAfterImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDescription) {
      alert('Veuillez renseigner un titre et une description.');
      return;
    }

    const matchedService = services.find((s) => s.id === newServiceId);
    const materialsArray = newMaterials ? newMaterials.split(',').map((m) => m.trim()) : ['Végétaux méditerranéens', 'Pierre de taille'];

    addProject({
      title: newTitle,
      serviceId: newServiceId,
      serviceName: matchedService ? matchedService.shortTitle : 'Aménagement paysager',
      city: newCity,
      postalCode: newPostalCode,
      year: newYear,
      description: newDescription,
      duration: newDuration,
      materials: materialsArray,
      beforeImage: newBeforeImage || undefined,
      afterImage: newAfterImage,
    });

    // Reset
    setNewTitle('');
    setNewDescription('');
    setNewBeforeImage('');
    setIsAddModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 sm:space-y-12">
      {/* Header and Add Project CTA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
            Galerie & Réalisations
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Nos chantiers en images : Avant / Après
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Découvrez nos transformations de jardins, terrasses et clôtures à Allan, Montélimar, Grignan et dans les communes voisines.
          </p>
        </div>

        {/* Add Project Button (CMS mode for the gardener) */}
        <div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-5 py-3 bg-[#1C3628] hover:bg-[#284E39] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Ajouter une réalisation</span>
          </button>
        </div>
      </div>

      {/* Filter Bar (Buttons with active states per constitution) */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-white rounded-2xl border border-stone-200 shadow-xs">
        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#1C3628] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            Tous les chantiers ({projects.length})
          </button>
          {services.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setSelectedCategory(srv.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === srv.id
                  ? 'bg-[#1C3628] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {srv.shortTitle}
            </button>
          ))}
        </div>

        {/* Town Filter */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-500 font-medium">Commune :</span>
          <select
            value={selectedTown}
            onChange={(e) => setSelectedTown(e.target.value)}
            className="px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 text-xs focus:ring-1 focus:ring-[#1C3628] focus:outline-none"
          >
            <option value="all">Toutes les communes</option>
            {availableTowns.map((town) => (
              <option key={town} value={town}>{town}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Interactive Before/After slider */}
              <div className="p-3">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  title={project.title}
                  heightClass="h-64 sm:h-80"
                />
              </div>

              {/* Card Meta & Details */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1.5 font-medium text-[#1C3628]">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{project.city} ({project.postalCode})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{project.year}</span>
                    </span>
                    {project.duration && (
                      <span className="text-stone-400">· {project.duration}</span>
                    )}
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Materials & techniques */}
                {project.materials && project.materials.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-md"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between gap-3 mt-2">
              <button
                onClick={() => openQuoteModal(project.serviceId)}
                className="text-xs font-semibold text-[#1C3628] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Projet similaire ? Demandez un devis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Delete button if user added a custom project */}
              {project.id.startsWith('proj-') && Number(project.id.replace('proj-', '')) > 10 && (
                <button
                  onClick={() => {
                    if (confirm('Supprimer cette réalisation ?')) {
                      deleteProject(project.id);
                    }
                  }}
                  className="p-1.5 text-stone-400 hover:text-red-600 transition-colors"
                  title="Supprimer la réalisation"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-3">
          <p className="text-stone-600 text-sm">
            Aucun projet ne correspond à ces critères pour l'instant.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedTown('all');
            }}
            className="text-xs font-semibold text-[#1C3628] underline cursor-pointer"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* "Ajouter une réalisation" Modal for the landscape gardener */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
            <div className="bg-[#1C3628] text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold">Ajouter une nouvelle réalisation</h3>
                <p className="text-xs text-stone-300">
                  Ajoutez facilement vos chantiers récents avec photos Avant/Après sans modifier le code.
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-stone-300 hover:text-white p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="p-6 overflow-y-auto space-y-4 text-xs">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Titre de la réalisation * :</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Création d'une terrasse en travertin et rocailles"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:ring-2 focus:ring-[#1C3628] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Prestation principale :</label>
                  <select
                    value={newServiceId}
                    onChange={(e) => setNewServiceId(e.target.value as ServiceId)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>{s.shortTitle}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Commune / Ville :</label>
                  <input
                    type="text"
                    required
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="Allan, Montélimar..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Code postal :</label>
                  <input
                    type="text"
                    value={newPostalCode}
                    onChange={(e) => setNewPostalCode(e.target.value)}
                    placeholder="26780"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Année :</label>
                  <input
                    type="text"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    placeholder="2026"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Durée :</label>
                  <input
                    type="text"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    placeholder="2 semaines"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Description des travaux réalisés :</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Décrivez l'état initial, les étapes et le résultat final..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Matériaux & végétaux utilisés (séparés par des virgules) :</label>
                <input
                  type="text"
                  placeholder="Olivier, Travertin, Paillage ardoise, Gazon..."
                  value={newMaterials}
                  onChange={(e) => setNewMaterials(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
                />
              </div>

              {/* Photo Uploads: Before & After */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-200">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Photo AVANT (optionnel) :</label>
                  <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-stone-300 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors text-center">
                    <Upload className="w-5 h-5 text-stone-400 mb-1" />
                    <span className="text-[11px] text-stone-600">Choisir image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, true)}
                      className="hidden"
                    />
                  </label>
                  {newBeforeImage && (
                    <div className="mt-2 text-[10px] text-emerald-700 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Image chargée
                    </div>
                  )}
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Photo APRÈS (terminé) :</label>
                  <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-stone-300 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors text-center">
                    <Upload className="w-5 h-5 text-stone-400 mb-1" />
                    <span className="text-[11px] text-stone-600">Choisir image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, false)}
                      className="hidden"
                    />
                  </label>
                  {newAfterImage && (
                    <div className="mt-2 text-[10px] text-emerald-700 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Image prête
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-stone-600 hover:text-stone-800"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#1C3628] hover:bg-[#284E39] text-white font-bold rounded-xl shadow cursor-pointer"
                >
                  Publier la réalisation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
