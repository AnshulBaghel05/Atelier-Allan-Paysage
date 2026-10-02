import { CompanyInfo, ProjectItem, ReviewItem, ServiceDetail } from '../types';
import { IMAGES } from '../assets/images';

export const INITIAL_COMPANY_INFO: CompanyInfo = {
  name: "Atelier Allan Paysage",
  tagline: "Artisan Paysagiste Concepteur & Entretien de Jardins",
  phone: "0645281934",
  phoneDisplay: "06 45 28 19 34",
  email: "contact@allan-paysage.fr",
  address: "Chemin des Oliviers, Le Village",
  postalCode: "26780",
  city: "Allan",
  region: "Drôme Provençale & Bassin de Montélimar",
  googleRating: 4.9,
  googleReviewCount: 38,
  googleMapsUrl: "https://maps.google.com/?q=Allan+26780+Drome",
  facebookUrl: "https://facebook.com/atelierallanpaysage",
  workingHoursWeekday: "Du lundi au vendredi : 07h30 – 19h00",
  workingHoursSaturday: "Samedi : 08h30 – 12h30 (urgences et rendez-vous sur devis)",
  taxCreditRate: 50,
};

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'creation-amenagement',
    title: 'Création & Aménagement Paysager',
    shortTitle: 'Création de Jardins',
    tagline: 'Conception sur-mesure de jardins méditerranéens et contemporains adaptés au climat de la Drôme.',
    description: 'Transformez votre terrain en un espace de vie harmonieux : étude de sol, modélisation 3D, plantation de végétaux adaptés à la sécheresse (oliviers, cyprès, lavandes, graminées), engazonnement et rocailles.',
    longDescription: 'Nous concevons des jardins durables, esthétiques et économes en eau. En Drôme Provençale, les étés chauds et les épisodes de mistral nécessitent une sélection végétale rigoureuse. Nous marions pierres régionales et essences méditerranéennes pour créer des havres de paix qui prennent de la valeur au fil des saisons.',
    image: IMAGES.gardenCreation,
    popular: true,
    features: [
      'Étude paysagère personnalisée et plan 2D/3D',
      'Sélection rigoureuse d’arbres et arbustes de pépinières locales',
      'Création de massifs fleuris méditerranéens et rocailles de garrigue',
      'Gazon en rouleaux haute résistance ou semis avec préparation fine du sol',
      'Paillage minéral (galets de la Drôme, ardoise) et végétal (copeaux de bois)'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Visite conseil sur votre terrain',
        description: 'Nous venons chez vous à Allan ou dans le secteur de Montélimar pour écouter vos envies, analyser l’ensoleillement, la terre et les contraintes techniques.'
      },
      {
        step: '02',
        title: 'Proposition et chiffrage transparent',
        description: 'Élaboration du plan d’aménagement paysager, palette végétale détaillée et devis gratuit poste par poste, sans surprise.'
      },
      {
        step: '03',
        title: 'Chantier et réalisation soignée',
        description: 'Terrassement, enrichissement du sol, plantations dans les règles de l’art avec apport de terreau organique et installation du paillage.'
      },
      {
        step: '04',
        title: 'Livraison et conseils d’entretien',
        description: 'Explication du calendrier de pousse, premiers arrosages et suivi de reprise garanti sur l’ensemble de nos plantations.'
      }
    ]
  },
  {
    id: 'entretien-jardin',
    title: 'Entretien d’Espaces Verts (50% Crédit d’Impôt)',
    shortTitle: 'Entretien & Tonte',
    tagline: 'Tonte, taille de haies, débroussaillage et entretien annuel avec déduction fiscale immédiate.',
    description: 'Profitez d’un jardin impeccable toute l’année sans effort. Tonte de pelouse, taille soignée de haies et d’arbustes, désherbage manuel et évacuation des déchets verts. Éligible à 50% de crédit d’impôt.',
    longDescription: 'Dans le cadre du dispositif Services à la Personne (SAP), nos prestations d’entretien de jardin ouvrent droit à 50% de crédit d’impôt. Grâce à l’Avance Immédiate de l’URSSAF, vous ne payez que la moitié du montant de la facture au moment du règlement ! Nous proposons des interventions ponctuelles de remise en état ou des contrats annuels avec passages planifiés.',
    image: IMAGES.maintenanceLawn,
    taxCreditEligible: true,
    features: [
      'Avance immédiate de 50% du crédit d’impôt (vous ne payez que le reste à charge)',
      'Tonte de pelouse avec finitions rotofil au millimètre',
      'Taille raisonnée de haies (cyprès, lauriers, photinias, troènes)',
      'Débroussaillage légal obligatoire (norme DFCI Drôme)',
      'Évacuation et valorisation en compostage de 100% des déchets verts'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Diagnostic de votre jardin',
        description: 'Évaluation des volumes de taille, des surfaces de pelouse et des fréquences de passage adaptées aux saisons.'
      },
      {
        step: '02',
        title: 'Devis sur-mesure ou contrat annuel',
        description: 'Formule ponctuelle ou contrat annuel d’entretien mensualisé avec le calcul automatique de votre économie fiscale de 50%.'
      },
      {
        step: '03',
        title: 'Passages réguliers par nos équipes',
        description: 'Matériel professionnel thermique et électrique silencieux. Travail soigné et ramassage complet des résidus.'
      },
      {
        step: '04',
        title: 'Facturation simplifiée URSSAF',
        description: 'Transmission de l’attestation fiscale et prélèvement uniquement des 50% nets grâce à la plateforme Urssaf Avance Immédiate.'
      }
    ]
  },
  {
    id: 'terrasses-allees',
    title: 'Terrasses, Allées & Pavage',
    shortTitle: 'Terrasses & Pavage',
    tagline: 'Aménagement de terrasses en travertin, pierre naturelle, bois et allées carrossables.',
    description: 'Structurez vos extérieurs avec des matériaux nobles et durables : terrasses en travertin beige de Provence, dallage en calcaire, platelage bois exotique ou composite, allées en gravier stabilisé Alvéostar.',
    longDescription: 'La terrasse est le prolongement naturel de votre salon vers le jardin. Nous réalisons les fondations, la pose sur chape drainante ou plots réglables, ainsi que les allées de garage carrossables et cheminements piétons. Une étanchéité soignée et une pente d’écoulement garantie pour les orages de la vallée du Rhône.',
    image: IMAGES.terraceStone,
    features: [
      'Pose de travertin Opus Romain et dalles grand format',
      'Terrasses en bois naturel (Ipé, Cumaru, Pin traité) ou bois composite',
      'Allées carrossables avec dalles alvéolaires et graviers régionaux',
      'Bordures de séparation en pierre taillée ou acier corten',
      'Escaliers paysagers intégrés aux dénivelés naturels du terrain'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Relevé de niveaux et géométrie',
        description: 'Prise de cotes précises, analyse du terrain et orientation pour assurer une évacuation optimale des eaux pluviales.'
      },
      {
        step: '02',
        title: 'Choix des matériaux et échantillons',
        description: 'Présentation d’échantillons réels de travertin, grès cérame, dalles de pierre et bois afin d’accorder le style à votre maison.'
      },
      {
        step: '03',
        title: 'Terrassement et sous-couche renforcée',
        description: 'Décaissement, géotextile anti-repousse, pose de grave concassée compactée pour une planéité et une solidité décennale.'
      },
      {
        step: '04',
        title: 'Pose artisanale et finitions soignées',
        description: 'Pose millimétrée, jointoiement étanche ou drainant, découpes d’angles nettes et nettoyage de fin de chantier.'
      }
    ]
  },
  {
    id: 'clotures-murets',
    title: 'Clôtures, Murets & Portails',
    shortTitle: 'Clôtures & Murets',
    tagline: 'Délimitez et valorisez votre propriété avec des murets en pierre et clôtures durables.',
    description: 'Pose de clôtures rigides avec lames d’occultation brise-vue, ganivelles bois, murets de soutènement en pierre calcaire du pays ou agglo enduit, et pose de portails battants ou coulissants.',
    longDescription: 'Pour préserver votre intimité face au voisinage ou sécuriser vos enfants et animaux, nous installons des clôtures robustes capables de résister aux assauts du mistral. Spécialistes des murets en pierre calcaire de la Drôme, nous recréons le charme authentique des restanques provençales.',
    image: IMAGES.fenceWall,
    features: [
      'Panneaux grillagés rigides avec lamelles d’occultation PVC ou bois',
      'Murets en pierre sèche traditionnelle ou maçonnerie paysagère',
      'Clôtures décoratives aluminium et claustras ajourés',
      'Ganivelles en châtaignier et clôtures champêtres',
      'Scellement béton armé sur massifs isolés ou longrine continue'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Implantation et bornage',
        description: 'Repérage précis des limites de parcelle et détermination de la hauteur idéale selon les règles du PLU local.'
      },
      {
        step: '02',
        title: 'Choix de la solution technique',
        description: 'Sélection des couleurs (Anthracite RAL 7016, Vert mousse, Aspect bois) et du niveau d’occultation souhaité.'
      },
      {
        step: '03',
        title: 'Ancrage et maçonnerie',
        description: 'Fondations solides, pose des poteaux à sceller ou sur platines renforcées, montage des murets et chaperons de finition.'
      },
      {
        step: '04',
        title: 'Vérification de tenue et réglages',
        description: 'Contrôle d’alignement au laser, tension des panneaux et essais de manœuvre des portillons.'
      }
    ]
  },
  {
    id: 'arrosage-automatique',
    title: 'Arrosage Automatique Intelligent',
    shortTitle: 'Arrosage Automatique',
    tagline: 'Systèmes d’arrosage goutte-à-goutte et tuyères programmables pour économiser jusqu’à 40% d’eau.',
    description: 'Installation et dépannage d’arrosage intégré enterré : réseau de micro-irrigation pour massifs et haies, tuyères escamotables pour gazon, programmateur connecté avec sonde d’humidité et pluie.',
    longDescription: 'Dans notre région sujette aux restrictions estivales d’eau en Drôme, un arrosage automatisé bien calibré permet de maintenir un jardin verdoyant tout en respectant la ressource. Nous calculons la pression et le débit pour créer des zones indépendantes et installer des programmateurs intelligents pilotables depuis votre smartphone.',
    image: IMAGES.wateringSystem,
    features: [
      'Réseau goutte-à-goutte économique pour haies, oliviers et massifs',
      'Tuyères et turbines escamotables Rain Bird / Hunter pour pelouse',
      'Programmateurs connectés Wi-Fi ajustant l’eau selon la météo locale',
      'Sonde pluviométrique coupant automatiquement le cycle en cas de pluie',
      'Hivernage et purge d’automne pour protéger contre le gel hivernal'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Étude hydraulique & débit',
        description: 'Mesure de votre pression dynamique au robinet ou forage pour dimensionner le nombre d’électrovannes requises.'
      },
      {
        step: '02',
        title: 'Plan de calepinage des réseaux',
        description: 'Tracé précis des tranchées pour recouvrir 100% de la pelouse sans gaspillage et alimenter chaque plante au pied.'
      },
      {
        step: '03',
        title: 'Pose souterraine discrète',
        description: 'Tranchées soignées, raccordement des regards d’électrovannes étanches et pose des buses de qualité professionnelle.'
      },
      {
        step: '04',
        title: 'Programmation et prise en main',
        description: 'Réglage des plages horaires (arrosage de nuit sans évaporation) et formation à l’utilisation de votre boîtier ou application.'
      }
    ]
  },
  {
    id: 'elagage-abattage',
    title: 'Élagage & Abattage d’Arbres',
    shortTitle: 'Élagage & Abattage',
    tagline: 'Taille raisonnée, abattage délicat et rognage de souches en toute sécurité.',
    description: 'Intervention sur arbres d’ornement et fruitiers : taille d’éclaircie, suppression des branches mortes, abattage par démontage en milieu contraint, broyage de branches et rognage de souche.',
    longDescription: 'Nos arboristes interviennent avec du matériel adapté pour sécuriser vos extérieurs avant les tempêtes ou redonner de la lumière à votre propriété. Nous privilégions une taille douce respectueuse de la physiologie de l’arbre (arbres remarquables, chênes, pins, platanes, oliviers centenaires).',
    image: IMAGES.pruningTree,
    features: [
      'Taille sanitaire, taille d’allègement et réduction de couronne',
      'Abattage par rétention et démontage au-dessus des toitures ou vérandas',
      'Taille de formation et fructification des oliviers et arbres fruitiers',
      'Broyage sur place avec possibilité de réutiliser le broyat en paillage',
      'Intervention d’urgence après coup de vent ou tempête'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Inspection sanitaire de l’arbre',
        description: 'Contrôle visuel de la structure du houppier, recherche de cavités ou champignons et évaluation des risques environnants.'
      },
      {
        step: '02',
        title: 'Planification sécurisée',
        description: 'Définition du périmètre de sécurité et du matériel requis (cordes de rétention, nacelle ou grimpeur-élagueur diplômé).'
      },
      {
        step: '03',
        title: 'Intervention d’élagage ou coupe',
        description: 'Découpe des branches par morceaux avec désinfection des outils pour préserver la santé des sujets avoisinants.'
      },
      {
        step: '04',
        title: 'Nettoyage complet du chantier',
        description: 'Évacuation du bois ou débitage en stères pour votre cheminée, broyage des branchages et passage du souffleur.'
      }
    ]
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Création d’un jardin contemporain méditerranéen',
    serviceId: 'creation-amenagement',
    serviceName: 'Création & Aménagement',
    city: 'Allan',
    postalCode: '26780',
    year: '2025',
    description: 'Aménagement complet d’un terrain nu suite à la construction d’une villa moderne. Création d’allées en dalles de travertin, plantation d’un olivier centenaire de 120 ans, massifs de lavandes et santolines avec paillage en ardoise concassée.',
    beforeImage: IMAGES.gardenCreation,
    afterImage: IMAGES.heroGarden,
    duration: '3 semaines',
    materials: ['Olivier centenaire', 'Travertin beige', 'Paillage ardoise', 'Goutte-à-goutte connecté']
  },
  {
    id: 'proj-2',
    title: 'Terrasse en pierre naturelle et muret en calcaire',
    serviceId: 'terrasses-allees',
    serviceName: 'Terrasses, Allées & Pavage',
    city: 'Montélimar',
    postalCode: '26200',
    year: '2025',
    description: 'Rénovation d’une ancienne cour en terre battue en un espace lounge convivial. Pose de 80 m² de travertin Opus Romain, création d’un muret banquette en pierre sèche calcaire de la Drôme et intégration d’éclairages basse tension.',
    beforeImage: IMAGES.fenceWall,
    afterImage: IMAGES.terraceStone,
    duration: '2 semaines',
    materials: ['Travertin Opus Romain', 'Pierre sèche calcaire', 'Éclairage LED encastré']
  },
  {
    id: 'proj-3',
    title: 'Remise en état et contrat annuel d’entretien',
    serviceId: 'entretien-jardin',
    serviceName: 'Entretien d’Espaces Verts',
    city: 'Grignan',
    postalCode: '26230',
    year: '2025',
    description: 'Taille sévère d’une haie de cyprès de Provence de 4 mètres de haut laissée à l’abandon, tonte et scarification d’une pelouse de 900 m², puis mise en place d’un contrat annuel avec déduction fiscale de 50% immédiate pour les propriétaires.',
    beforeImage: IMAGES.wateringSystem,
    afterImage: IMAGES.maintenanceLawn,
    duration: '3 jours de remise en état + suivi mensuel',
    materials: ['Taille de haie de cyprès', 'Scarification gazon', 'Avance Immédiate Urssaf']
  },
  {
    id: 'proj-4',
    title: 'Clôture occultante résistant au mistral & portillon',
    serviceId: 'clotures-murets',
    serviceName: 'Clôtures & Murets',
    city: 'Saint-Paul-Trois-Châteaux',
    postalCode: '26130',
    year: '2025',
    description: 'Pose de 65 mètres linéaires de panneaux rigides soudés haute résistance avec lamelles d’occultation thermo-laquées gris anthracite (RAL 7016) et scellement renforcé pour résister aux rafales de vent de la vallée.',
    beforeImage: IMAGES.gardenCreation,
    afterImage: IMAGES.fenceWall,
    duration: '4 jours',
    materials: ['Panneaux rigides 2m', 'Lamelles occultantes PVC', 'Massifs béton dosés à 350kg']
  },
  {
    id: 'proj-5',
    title: 'Installation d’arrosage goutte-à-goutte connecté',
    serviceId: 'arrosage-automatique',
    serviceName: 'Arrosage Automatique',
    city: 'Donzère',
    postalCode: '26290',
    year: '2024',
    description: 'Création de 4 réseaux indépendants avec programmateur Wi-Fi commandé à distance. Réduction constatée de 38% sur la facture d’eau estivale de la propriété tout en doublant la vigueur des plantes.',
    beforeImage: IMAGES.heroGarden,
    afterImage: IMAGES.wateringSystem,
    duration: '3 jours',
    materials: ['Goutte-à-goutte autorégulant', 'Programmateur Wi-Fi', 'Sonde météo']
  },
  {
    id: 'proj-6',
    title: 'Élagage de pins d’Alep et sécurisation de toiture',
    serviceId: 'elagage-abattage',
    serviceName: 'Élagage & Abattage',
    city: 'Malataverne',
    postalCode: '26780',
    year: '2024',
    description: 'Allègement de la charpente de trois grands pins surplombant une véranda. Suppression des branches maîtresses dangereuses par rétention avec cordage, broyage de 15 m³ de rémanents transformés en paillis pour le potager.',
    beforeImage: IMAGES.maintenanceLawn,
    afterImage: IMAGES.pruningTree,
    duration: '2 jours',
    materials: ['Grimpeur-élagueur certifié', 'Broyage sur site', 'Sécurisation cordage']
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Michel & Françoise Dupont',
    city: 'Allan',
    rating: 5,
    date: 'Il y a 3 semaines',
    content: 'Un travail remarquable pour la création de notre jardin à Allan ! L’équipe a su nous conseiller des végétaux qui supportent la chaleur de l’été sans réclamer des litres d’eau. L’olivier est splendide et la terrasse en travertin donne une allure folle à notre maison. Des artisans sérieux, ponctuels et passionnés.',
    serviceProvided: 'Création paysagère & Terrasse',
    verifiedGoogle: true
  },
  {
    id: 'rev-2',
    author: 'Stéphane Morel',
    city: 'Montélimar',
    rating: 5,
    date: 'Il y a 1 mois',
    content: 'Nous avons souscrit un contrat d’entretien annuel pour notre terrain de 1 200 m². Quel bonheur d’arriver le vendredi soir et de trouver la pelouse tondue et les haies de lauriers parfaitement taillées. Cerise sur le gâteau : avec l’avance immédiate du crédit d’impôt 50%, nous ne payons que la moitié de la facture directement. Je recommande les yeux fermés !',
    serviceProvided: 'Entretien annuel & Crédit d’impôt',
    verifiedGoogle: true
  },
  {
    id: 'rev-3',
    author: 'Céline & Patrick V.',
    city: 'Grignan',
    rating: 5,
    date: 'Il y a 2 mois',
    content: 'Réfection de nos murets en pierres calcaires et pose d’une clôture avec lames occultantes. Finitions très soignées, chantier laissé parfaitement propre tous les soirs. Devis clair et respecté au centime près. Bravo pour votre professionnalisme.',
    serviceProvided: 'Murets de pierre & Clôture',
    verifiedGoogle: true
  },
  {
    id: 'rev-4',
    author: 'Laurent Barrot',
    city: 'Saint-Paul-Trois-Châteaux',
    rating: 5,
    date: 'Il y a 3 mois',
    content: 'Installation d’un arrosage automatique enterré et goutte-à-goutte. Malgré un sol caillouteux difficile, le réseau a été installé sans abîmer les plantations existantes. Le programmateur sur smartphone est ultra pratique quand on s’absente l’été.',
    serviceProvided: 'Arrosage automatique',
    verifiedGoogle: true
  },
  {
    id: 'rev-5',
    author: 'Hélène Roubaud',
    city: 'Donzère',
    rating: 5,
    date: 'Il y a 4 mois',
    content: 'Élagage délicat de deux cyprès et abattage d’un pin malade très proche de notre toiture. Intervention ultra sécurisée, personnel très courtois et broyage de toutes les branches. Nous ferons appel à eux au printemps pour nos massifs.',
    serviceProvided: 'Élagage & Sécurisation',
    verifiedGoogle: true
  }
];

export const SERVICE_AREAS = [
  { name: 'Allan', postalCode: '26780', distance: 'Siège social (0 km)', freeQuote: true },
  { name: 'Montélimar', postalCode: '26200', distance: '8 km (10 min)', freeQuote: true },
  { name: 'Malataverne', postalCode: '26780', distance: '5 km (7 min)', freeQuote: true },
  { name: 'Donzère', postalCode: '26290', distance: '11 km (12 min)', freeQuote: true },
  { name: 'Châteauneuf-du-Rhône', postalCode: '26780', distance: '8 km (9 min)', freeQuote: true },
  { name: 'Saint-Paul-Trois-Châteaux', postalCode: '26130', distance: '16 km (18 min)', freeQuote: true },
  { name: 'Pierrelatte', postalCode: '26700', distance: '18 km (20 min)', freeQuote: true },
  { name: 'Grignan', postalCode: '26230', distance: '17 km (19 min)', freeQuote: true },
  { name: 'Roussas', postalCode: '26230', distance: '7 km (8 min)', freeQuote: true },
  { name: 'Valaurie', postalCode: '26230', distance: '9 km (10 min)', freeQuote: true },
  { name: 'Espeluche', postalCode: '26780', distance: '6 km (7 min)', freeQuote: true },
  { name: 'Dieulefit & environs', postalCode: '26220', distance: '28 km (sur étude)', freeQuote: true }
];
