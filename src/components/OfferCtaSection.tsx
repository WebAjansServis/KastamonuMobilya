import React from 'react';
import { Phone, MessageCircle, Hammer, Calculator } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';

interface OfferCtaSectionProps {
  onOpenQuoteModal: () => void;
}

export const OfferCtaSection: React.FC<OfferCtaSectionProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <section className="py-20 bg-[#1c1c1c] text-white relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 wood-texture-bg opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm mb-6">
          <Hammer className="w-3.5 h-3.5" />
          <span>Arnavutköy Özel Ölçü Mobilya İmalatı</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight">
          Mobilyanız Hazır Ölçülerle Değil, <br className="hidden sm:inline" />
          <span className="text-[#a67c52] italic">Size Özel Olsun.</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light opacity-90">
          Mutfağınız, gardırobunuz, vestiyeriniz veya özel mobilya projeniz için bizimle iletişime geçin. Usta işçiliği uygun fiyatla buluşturuyoruz.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#a67c52] hover:bg-[#8b5e3c] text-white font-bold text-sm tracking-wide shadow-xl transition-colors rounded-sm"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>HEMEN ARA: {BUSINESS_INFO.formattedPhone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-sm tracking-wide shadow-xl transition-colors rounded-sm"
          >
            <MessageCircle className="w-5 h-5 fill-stone-950" />
            <span>WHATSAPP'TAN YAZ</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 hover:bg-stone-800 text-stone-200 font-bold text-sm tracking-wide border border-stone-800 transition-colors rounded-sm"
          >
            <Calculator className="w-4 h-4 text-[#a67c52]" />
            <span>FİYAT HESAPLA</span>
          </button>

        </div>

        {/* Guarantees */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#a67c52]" /> Ücretsiz Keşif &amp; Danışma
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#a67c52]" /> Söz Verilen Gün Teslim
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#a67c52]" /> %100 Müşteri Memnuniyeti
          </span>
        </div>

      </div>
    </section>
  );
};
