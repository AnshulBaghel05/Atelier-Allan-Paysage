import React, { createContext, useContext, useState, useEffect } from 'react';
import { CompanyInfo, ProjectItem, ReviewItem, ServiceDetail, ServiceId } from '../types';
import { INITIAL_COMPANY_INFO, INITIAL_PROJECTS, INITIAL_REVIEWS, SERVICES_LIST } from '../data/initialData';

export type NavigationTab = 'accueil' | 'services' | 'realisations' | 'a-propos' | 'contact' | 'guide-gestion';

interface SiteContextType {
  currentTab: NavigationTab;
  setCurrentTab: (tab: NavigationTab) => void;
  selectedServiceId: ServiceId;
  setSelectedServiceId: (id: ServiceId) => void;
  navigateToService: (id: ServiceId) => void;
  companyInfo: CompanyInfo;
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;
  projects: ProjectItem[];
  addProject: (project: Omit<ProjectItem, 'id'>) => void;
  deleteProject: (id: string) => void;
  reviews: ReviewItem[];
  addReview: (review: Omit<ReviewItem, 'id'>) => void;
  resetToInitialData: () => void;
  isQuoteModalOpen: boolean;
  openQuoteModal: (preselectedServiceId?: ServiceId) => void;
  closeQuoteModal: () => void;
  preselectedService?: ServiceId;
  toastMessage: string | null;
  showToast: (message: string) => void;
  services: ServiceDetail[];
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COMPANY: 'allan_paysage_company_v2',
  PROJECTS: 'allan_paysage_projects_v2',
  REVIEWS: 'allan_paysage_reviews_v2',
};

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('accueil');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('creation-amenagement');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceId | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Loaded from localStorage or fallback to defaults
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.COMPANY);
      return stored ? JSON.parse(stored) : INITIAL_COMPANY_INFO;
    } catch {
      return INITIAL_COMPANY_INFO;
    }
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return stored ? JSON.parse(stored) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      return stored ? JSON.parse(stored) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  // Save to localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(companyInfo));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [companyInfo]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch {
      // Ignore
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    } catch {
      // Ignore
    }
  }, [reviews]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const updateCompanyInfo = (info: Partial<CompanyInfo>) => {
    setCompanyInfo((prev) => ({ ...prev, ...info }));
    showToast('Coordonnées de l’entreprise mises à jour avec succès.');
  };

  const addProject = (projectData: Omit<ProjectItem, 'id'>) => {
    const newProject: ProjectItem = {
      ...projectData,
      id: `proj-${Date.now()}`,
    };
    setProjects((prev) => [newProject, ...prev]);
    showToast('Nouvelle réalisation ajoutée au catalogue !');
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    showToast('Réalisation supprimée.');
  };

  const addReview = (reviewData: Omit<ReviewItem, 'id'>) => {
    const newRev: ReviewItem = {
      ...reviewData,
      id: `rev-${Date.now()}`,
    };
    setReviews((prev) => [newRev, ...prev]);
    showToast('Avis client enregistré !');
  };

  const resetToInitialData = () => {
    setCompanyInfo(INITIAL_COMPANY_INFO);
    setProjects(INITIAL_PROJECTS);
    setReviews(INITIAL_REVIEWS);
    try {
      localStorage.removeItem(STORAGE_KEYS.COMPANY);
      localStorage.removeItem(STORAGE_KEYS.PROJECTS);
      localStorage.removeItem(STORAGE_KEYS.REVIEWS);
    } catch {
      // Ignore
    }
    showToast('Données réinitialisées aux valeurs initiales d’Allan Paysage.');
  };

  const openQuoteModal = (preselected?: ServiceId) => {
    setPreselectedService(preselected);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPreselectedService(undefined);
  };

  const navigateToService = (id: ServiceId) => {
    setSelectedServiceId(id);
    setCurrentTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SiteContext.Provider
      value={{
        currentTab,
        setCurrentTab: (tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        selectedServiceId,
        setSelectedServiceId,
        navigateToService,
        companyInfo,
        updateCompanyInfo,
        projects,
        addProject,
        deleteProject,
        reviews,
        addReview,
        resetToInitialData,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        preselectedService,
        toastMessage,
        showToast,
        services: SERVICES_LIST,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
