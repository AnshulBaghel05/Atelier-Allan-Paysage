import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Settings, Globe, HelpCircle, Save, RotateCcw, Plus, CheckCircle2, Star, ShieldCheck, Sparkles, BookOpen, ExternalLink, Calendar } from 'lucide-react';

export const AdminGuideView: React.FC = () => {
  const { companyInfo, updateCompanyInfo, reviews, addReview, resetToInitialData, showToast } = useSite();

  // Local form for company details
  const [phone, setPhone] = useState(companyInfo.phone);
  const [phoneDisplay, setPhoneDisplay] = useState(companyInfo.phoneDisplay);
  const [email, setEmail] = useState(companyInfo.email);
  const [address, setAddress] = useState(companyInfo.address);
  const [city, setCity] = useState(companyInfo.city);
  const [postalCode, setPostalCode] = useState(companyInfo.postalCode);
  const [workingHoursWeekday, setWorkingHoursWeekday] = useState(companyInfo.workingHoursWeekday);
  const [workingHoursSaturday, setWorkingHoursSaturday] = useState(companyInfo.workingHoursSaturday);
  const [googleRating, setGoogleRating] = useState(companyInfo.googleRating);
  const [googleReviewCount, setGoogleReviewCount] = useState(companyInfo.googleReviewCount);

  // New review form
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('Montélimar');
  const [newContent, setNewContent] = useState('');
  const [newService, setNewService] = useState('Création paysagère');
  const [newRating, setNewRating] = useState(5);

  const handleSaveCompany = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyInfo({
      phone,
      phoneDisplay,
      email,
      address,
      city,
      postalCode,
      workingHoursWeekday,
      workingHoursSaturday,
      googleRating: Number(googleRating),
      googleReviewCount: Number(googleReviewCount),
    });
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newContent) return;
    addReview({
      author: newAuthor,
      city: newCity,
      content: newContent,
      serviceProvided: newService,
      rating: newRating,
      date: 'Récemment',
      verifiedGoogle: true,
    });
    setNewAuthor('');
    setNewContent('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Intro Header */}
      <div className="bg-[#1C3628] text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#2B543D] space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
          <Settings className="w-4 h-4 text-emerald-400" />
          <span>Espace Artisan & Guide de Passation</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold">
          Guide d'utilisation et gestion autonome de votre site
        </h1>
        <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Bienvenue dans votre espace d'administration simplifié ! Pas besoin d'être informaticien : ici, vous pouvez mettre à jour vos coordonnées en 1 clic, ajouter de nouveaux avis clients, et suivre notre tutoriel pas-à-pas pour le nom de domaine, l'hébergement et le référencement Google avant le printemps.
        </p>
      </div>

      {/* Part 1: Live Quick Editor (Coordonnées & Textes) */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Save className="w-5 h-5 text-emerald-700" />
              <span>1. Modifier vos coordonnées et informations</span>
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Les modifications sont enregistrées instantanément et visibles sur tout le site.
            </p>
          </div>

          <button
            onClick={resetToInitialData}
            className="text-xs text-stone-500 hover:text-red-700 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser aux valeurs d'origine</span>
          </button>
        </div>

        <form onSubmit={handleSaveCompany} className="space-y-6 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="font-semibold text-stone-700 block mb-1">Téléphone d'appel (format brut) :</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0645281934"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Téléphone affiché :</label>
              <input
                type="text"
                value={phoneDisplay}
                onChange={(e) => setPhoneDisplay(e.target.value)}
                placeholder="06 45 28 19 34"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Adresse email :</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@allan-paysage.fr"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Adresse :</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Commune / Ville :</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Code postal :</label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-semibold text-stone-700 block mb-1">Horaires en semaine :</label>
              <input
                type="text"
                value={workingHoursWeekday}
                onChange={(e) => setWorkingHoursWeekday(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Horaires samedi :</label>
              <input
                type="text"
                value={workingHoursSaturday}
                onChange={(e) => setWorkingHoursSaturday(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Note Google :</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                value={googleRating}
                onChange={(e) => setGoogleRating(Number(e.target.value))}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Nombre d'avis Google :</label>
              <input
                type="number"
                value={googleReviewCount}
                onChange={(e) => setGoogleReviewCount(Number(e.target.value))}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1C3628] hover:bg-[#284E39] text-white font-bold rounded-xl shadow cursor-pointer text-xs"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </section>

      {/* Part 2: Quick Review Publisher */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span>2. Ajouter un nouvel avis client reçu</span>
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Un client vous a laissé un gentil mot ou un avis sur votre fiche Google ? Ajoutez-le ici pour qu'il s'affiche sur la page d'accueil !
          </p>
        </div>

        <form onSubmit={handleAddReview} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="font-semibold text-stone-700 block mb-1">Nom du client :</label>
              <input
                type="text"
                required
                placeholder="Ex: Jean-Luc & Marie"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Ville :</label>
              <input
                type="text"
                required
                placeholder="Ex: Montélimar"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Prestation réalisée :</label>
              <input
                type="text"
                placeholder="Ex: Pose de terrasse travertin"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-stone-700 block mb-1">Contenu de l'avis :</label>
            <textarea
              rows={3}
              required
              placeholder="Copiez-collez l'avis de votre client..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl cursor-pointer"
            >
              Ajouter ce témoignage
            </button>
          </div>
        </form>
      </section>

      {/* Part 3: Tutorial Guide for Domain, Hosting, and Google My Business */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
            Formation & Conseils Pratiques
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            Guide pas-à-pas pour la mise en ligne et le référencement
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Toutes les réponses à vos questions pour lancer sereinement votre site avant le printemps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Guide Card 1: Domain & Hosting */}
          <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-3xl border border-[#E7E0D2] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Étape 1 : Choisir votre nom de domaine & hébergement
            </h3>
            <div className="text-xs text-stone-700 space-y-2.5 leading-relaxed">
              <p>
                <strong>Nom de domaine recommandé :</strong> Privilégiez une extension en <code className="bg-stone-200 px-1 py-0.5 rounded">.fr</code>, très appréciée pour les artisans locaux français.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><code className="text-[#1C3628] font-bold">allan-paysage.fr</code> (court, mémorisable)</li>
                <li><code className="text-[#1C3628] font-bold">atelier-allan-paysage.fr</code></li>
                <li><code className="text-[#1C3628] font-bold">paysagiste-drome-montelimar.fr</code> (très fort pour le SEO)</li>
              </ul>
              <p>
                <strong>Hébergeurs recommandés :</strong>
                <br />
                - <strong>OVHcloud</strong> (français, environ 4 à 6 € / mois avec nom de domaine offert la 1ère année).
                <br />
                - <strong>Infomaniak</strong> (serveurs écologiques en Suisse, support très réactif en français).
              </p>
            </div>
          </div>

          {/* Guide Card 2: Google My Business */}
          <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-3xl border border-[#E7E0D2] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Star className="w-5 h-5 fill-amber-700" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Étape 2 : Optimiser votre Fiche Google (My Business)
            </h3>
            <div className="text-xs text-stone-700 space-y-2.5 leading-relaxed">
              <p>
                Votre fiche Google est le moteur #1 d'appels téléphoniques depuis les smartphones.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Ajoutez le lien vers votre nouveau site internet dans le champ <em>"Site Web"</em> de Google Business Profile.</li>
                <li>Définissez vos zones desservies : <strong>Allan, Montélimar, Donzère, Grignan, Pierrelatte</strong>.</li>
                <li>Catégorie principale : <strong>"Paysagiste"</strong> (Services secondaires : <em>Service d'entretien des jardins, Concepteur de jardins</em>).</li>
                <li>Demandez à chaque client satisfait de vous laisser 5 étoiles à la livraison du chantier.</li>
              </ul>
            </div>
          </div>

          {/* Guide Card 3: SEO Montélimar & Drôme */}
          <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-3xl border border-[#E7E0D2] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Étape 3 : Référencement local (SEO)
            </h3>
            <div className="text-xs text-stone-700 space-y-2.5 leading-relaxed">
              <p>
                Ce site a été conçu avec le balisage structuré <strong>Schema.org LocalBusiness</strong> et un ciblage précis de vos mots-clés :
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><em>"paysagiste Montélimar"</em></li>
                <li><em>"entretien jardin Allan 26780"</em></li>
                <li><em>"création terrasse travertin Drôme"</em></li>
                <li><em>"crédit d'impôt 50% jardin Montélimar"</em></li>
              </ul>
              <p>
                <strong>Conseil d'or :</strong> Chaque fois que vous terminez un chantier, ajoutez 2 photos sur la page Réalisations en indiquant la commune. Plus le site est vivant, plus Google le place en tête des résultats !
              </p>
            </div>
          </div>

          {/* Guide Card 4: Spring Peak Planning */}
          <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-3xl border border-[#E7E0D2] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Étape 4 : Plan d'action pour le pic du printemps
            </h3>
            <div className="text-xs text-stone-700 space-y-2.5 leading-relaxed">
              <p>
                La période de février à avril concentre 60% des demandes de création de jardins en Drôme.
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Mettre le site en ligne dès janvier/février pour que Google ait le temps de l'indexer.</li>
                <li>Publier le lien du site sur votre page Facebook pour convertir vos abonnés en demandes de devis.</li>
                <li>Imprimer le QR code pointant vers le formulaire de devis sur vos cartes de visite et flocage de camionnette.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
