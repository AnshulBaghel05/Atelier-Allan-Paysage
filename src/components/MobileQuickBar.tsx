import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const MobileQuickBar: React.FC = () => {
  const { companyInfo, openQuoteModal } = useSite();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#193223]/95 backdrop-blur-md border-t border-[#2F523D] px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${companyInfo.phone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-transform active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-stone-950 shrink-0" />
          <span className="truncate">Appeler direct</span>
        </a>

        {/* Request Quote Button */}
        <button
          onClick={() => openQuoteModal()}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-transform active:scale-95 cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
          <span className="truncate">Devis Gratuit</span>
        </button>
      </div>
    </div>
  );
};
