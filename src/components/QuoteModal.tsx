import React, { useState, useEffect } from 'react';
import { X, Check, Upload, Phone, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { ServiceId } from '../types';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, preselectedService, services, companyInfo, showToast } = useSite();

  const [selectedServices, setSelectedServices] = useState<ServiceId[]>([]);
  const [clientType, setClientType] = useState<'particulier' | 'professionnel'>('particulier');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Allan');
  const [surfaceArea, setSurfaceArea] = useState('');
  const [timeline, setTimeline] = useState('printemps');
  const [description, setDescription] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedServices([preselectedService]);
    } else {
      setSelectedServices(['creation-amenagement']);
    }
  }, [preselectedService, isQuoteModalOpen]);

  if (!isQuoteModalOpen) return null;

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
    if (!phone && !email) {
      alert('Veuillez renseigner un numéro de téléphone ou une adresse email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Votre demande de devis a bien été envoyée ! Nous vous rappelons sous 48h.');
    }, 800);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#1C3628] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold text-emerald-300 tracking-wider uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Devis Gratuit & Sans Engagement · Drôme Provençale
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white">
              Demandez votre devis sur-mesure
            </h2>
            <p className="text-xs text-stone-300 mt-1">
              Réponse garantie sous 48h avec visite préalable sur votre propriété à Allan et alentours.
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Merci {firstName ? firstName : ''} ! Votre demande est bien reçue.
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                Nous analysons les caractéristiques de votre projet à <strong>{city}</strong>. Nous vous recontacterons au <strong>{phone}</strong> dans les plus brefs délais pour convenir d’un rendez-vous sur place.
              </p>

              <div className="bg-stone-100 p-4 rounded-xl max-w-md mx-auto border border-stone-200 text-left text-xs space-y-1">
                <span className="font-semibold text-stone-800 block">Besoin d’une réponse urgente ?</span>
                <p className="text-stone-600">
                  Vous pouvez nous appeler directement par téléphone :
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center gap-2 font-bold text-[#1C3628] hover:underline pt-1"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  {companyInfo.phoneDisplay}
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-[#1C3628] text-white text-sm font-semibold rounded-xl hover:bg-[#284E39] transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Client type selection */}
              <div>
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block mb-2">
                  1. Vous êtes :
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setClientType('particulier')}
                    className={`p-3 rounded-xl border text-xs font-medium transition-all text-left flex items-center justify-between cursor-pointer ${
                      clientType === 'particulier'
                        ? 'bg-[#1C3628] text-white border-[#1C3628]'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span>Particulier (Maison / Villa)</span>
                    {clientType === 'particulier' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setClientType('professionnel')}
                    className={`p-3 rounded-xl border text-xs font-medium transition-all text-left flex items-center justify-between cursor-pointer ${
                      clientType === 'professionnel'
                        ? 'bg-[#1C3628] text-white border-[#1C3628]'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span>Entreprise / Copropriété</span>
                    {clientType === 'professionnel' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                </div>
              </div>

              {/* Services multi-selection */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    2. Prestations souhaitées :
                  </label>
                  <span className="text-[11px] text-stone-500">Sélection multiple possible</span>
                </div>
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
                            ? 'bg-[#274635] text-white border-[#274635] shadow-xs'
                            : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <div className="pr-2">
                          <span className="font-semibold block">{srv.shortTitle}</span>
                          {srv.taxCreditEligible && (
                            <span className="text-[10px] text-emerald-300 font-medium">50% crédit d’impôt</span>
                          )}
                        </div>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-emerald-400 border-emerald-400' : 'border-stone-300'}`}>
                          {isChecked && <Check className="w-3 h-3 text-stone-900" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Surface & Location & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Commune / Ville :
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Allan, Montélimar..."
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1C3628] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Surface estimée :
                  </label>
                  <input
                    type="text"
                    value={surfaceArea}
                    onChange={(e) => setSurfaceArea(e.target.value)}
                    placeholder="Ex: 500 m², terrasse 40 m²"
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1C3628] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Période souhaitée :
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1C3628] focus:outline-none"
                  >
                    <option value="urgent">Au plus vite (urgent)</option>
                    <option value="printemps">Avant le printemps (mars-avril)</option>
                    <option value="1-2-mois">D'ici 1 à 2 mois</option>
                    <option value="projet-en-reflexion">Étude en cours / réflexions</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Description de votre projet de jardin :
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez vos envies : création de terrasse, plantations d'oliviers, remise en état de pelouse, pose de clôture..."
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1C3628] focus:outline-none"
                />
              </div>

              {/* Photo Upload feature explicitly requested */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Ajouter une photo de votre propriété / jardin (optionnel) :
                </label>
                <div className="mt-1 flex items-center gap-4">
                  <label className="flex items-center gap-2 px-3 py-2 bg-stone-100 hover:bg-stone-200 border border-dashed border-stone-300 rounded-xl cursor-pointer text-xs text-stone-700 transition-colors">
                    <Upload className="w-4 h-4 text-stone-500" />
                    <span>Choisir une photo</span>
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
                        Retirer
                      </button>
                    </div>
                  )}
                  <span className="text-[11px] text-stone-500">
                    Permet d’évaluer la configuration de votre terrain avant notre venue.
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-stone-200 pt-4">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block mb-2">
                  3. Vos coordonnées pour vous recontacter :
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Prénom & Nom *"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1C3628] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Numéro de téléphone *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1C3628] focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="email"
                      placeholder="Adresse e-mail (optionnelle pour envoi du devis PDF)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1C3628] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-[11px] text-stone-500 text-center sm:text-left">
                  🔒 Données confidentielles. Aucune relance commerciale abusive.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-[#1C3628] hover:bg-[#2A503B] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
