import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Phone, Mail, MapPin, Clock, Send, Upload, CheckCircle2, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { ServiceAreaMap } from '../components/ServiceAreaMap';
import { ServiceId } from '../types';

export const ContactView: React.FC = () => {
  const { companyInfo, services, showToast } = useSite();

  const [selectedServices, setSelectedServices] = useState<ServiceId[]>(['creation-amenagement']);
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Allan');
  const [surfaceArea, setSurfaceArea] = useState('');
  const [timeline, setTimeline] = useState('printemps');
  const [description, setDescription] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (id: ServiceId) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert('Veuillez préciser votre numéro de téléphone.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('Votre demande de devis a été transmise avec succès ! Nous vous recontactons sous 48h.');
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#2B4E3A] block mb-1">
          Contact & Devis Gratuit
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
          Parlons de votre projet de jardin
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          Vous souhaitez un devis pour une création paysagère, une terrasse, une clôture ou un contrat d'entretien avec 50% de crédit d'impôt ? Remplissez ce formulaire ou appelez-nous directement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        {/* Left Column: Direct Phone / Address / Opening hours info cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Call Box */}
          <div className="bg-[#1C3628] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#2A523D] space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block">
              Contact Téléphonique Direct
            </span>
            <p className="text-xs text-stone-300">
              Pour une question rapide ou une prise de rendez-vous immédiate :
            </p>

            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/15"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-400 text-stone-950 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-stone-300 block">Appeler l'artisan</span>
                <span className="text-lg font-bold text-white font-mono">{companyInfo.phoneDisplay}</span>
              </div>
            </a>

            <div className="pt-2 text-xs text-stone-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Devis 100% gratuit et sans engagement</span>
            </div>
          </div>

          {/* Location & Workshop */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-4 text-xs sm:text-sm">
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Coordonnées de l'Atelier
            </h3>

            <div className="space-y-3 text-stone-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">{companyInfo.name}</strong>
                  <span>{companyInfo.address}</span>
                  <br />
                  <span>{companyInfo.postalCode} {companyInfo.city} (Drôme Provençale)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-stone-800 hover:text-emerald-800 font-medium">
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-stone-900">{companyInfo.workingHoursWeekday}</div>
                  <div className="text-stone-500">{companyInfo.workingHoursSaturday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Listing card */}
          <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#E7E0D2] shadow-xs flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="font-bold text-stone-900 text-sm block">4.9 / 5 sur Google</span>
              <span className="text-xs text-stone-500">38 avis clients vérifiés</span>
            </div>

            <a
              href={companyInfo.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 flex items-center gap-1.5 transition-colors"
            >
              <span>Voir la fiche</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Working Quote Request Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Demande transmise avec succès !
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Merci <strong>{firstName}</strong>. Nous étudions votre projet à <strong>{city}</strong> et nous vous recontacterons au <strong>{phone}</strong> dans les 48 heures ouvrées pour convenir d’une visite sur votre terrain.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#1C3628] text-white text-xs font-semibold rounded-xl"
                >
                  Envoyer une autre demande
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Formulaire de demande de devis
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Tous les devis sont gratuits et sans engagement pour Allan et les communes du secteur.
                </p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block mb-2">
                  1. Nature de vos travaux de jardin :
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((srv) => {
                    const isChecked = selectedServices.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.id)}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                          isChecked
                            ? 'bg-[#1C3628] text-white border-[#1C3628]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        <div>
                          <span className="font-medium block">{srv.shortTitle}</span>
                          {srv.taxCreditEligible && (
                            <span className="text-[10px] text-emerald-300">50% crédit d'impôt</span>
                          )}
                        </div>
                        <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${isChecked ? 'bg-emerald-400 border-emerald-400 text-stone-900 text-[10px] font-bold' : 'border-stone-300'}`}>
                          {isChecked && '✓'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location & Surface */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Votre commune :</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Allan, Montélimar..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#1C3628]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Surface estimée :</label>
                  <input
                    type="text"
                    value={surfaceArea}
                    onChange={(e) => setSurfaceArea(e.target.value)}
                    placeholder="Ex: 600 m²"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Délai souhaité :</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none"
                  >
                    <option value="printemps">Avant le printemps</option>
                    <option value="urgent">Au plus vite (urgent)</option>
                    <option value="1-2-mois">D'ici 1 à 2 mois</option>
                    <option value="reflexion">Projet en réflexion</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Décrivez votre projet :
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Expliquez-nous vos attentes, l'état actuel de votre terrain, vos préférences de plantes ou matériaux..."
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#1C3628]"
                />
              </div>

              {/* Photo Upload with preview */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Photo de votre jardin ou façade (optionnel) :
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 px-3 py-2 bg-stone-100 hover:bg-stone-200 border border-dashed border-stone-300 rounded-xl cursor-pointer text-xs text-stone-700 transition-colors">
                    <Upload className="w-4 h-4 text-stone-500" />
                    <span>Sélectionner une photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                  {photoPreview && (
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-stone-300">
                      <img src={photoPreview} alt="Aperçu" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setPhotoPreview(null)}
                        className="absolute inset-0 bg-black/50 text-white flex items-center justify-center text-[10px]"
                      >
                        Supprimer
                      </button>
                    </div>
                  )}
                  <span className="text-[11px] text-stone-500">
                    Idéal pour une première estimation visuelle.
                  </span>
                </div>
              </div>

              {/* Contact info fields */}
              <div className="border-t border-stone-100 pt-4 space-y-3">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                  2. Vos coordonnées :
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Prénom & Nom *"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Téléphone portable *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="email"
                      placeholder="Adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1C3628] hover:bg-[#284E39] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmission...' : 'Envoyer ma demande de devis'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Interactive Map */}
      <ServiceAreaMap />
    </div>
  );
};
