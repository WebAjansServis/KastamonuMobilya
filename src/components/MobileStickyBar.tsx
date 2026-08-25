import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';

export const MobileStickyBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1c1c1c]/95 backdrop-blur-lg border-t border-stone-800 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        
        {/* Phone Button */}
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-[#a67c52] hover:bg-[#8b5e3c] text-white font-bold text-[11px] uppercase tracking-wider shadow transition-all"
        >
          <Phone className="w-3.5 h-3.5 fill-white" />
          <span>TELEFON ET</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-[11px] uppercase tracking-wider shadow transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-stone-950" />
          <span>WHATSAPP TEKLİF</span>
        </a>

      </div>
    </div>
  );
};
