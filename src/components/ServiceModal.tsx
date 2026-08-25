import React from 'react';
import { X, Check, MessageCircle, Phone } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onOpenQuoteModal }) => {
  if (!service) return null;

  const whatsappMessage = `Merhaba, ${service.title} hizmetiniz hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-sm max-w-2xl w-full overflow-hidden shadow-2xl border-l-4 border-[#a67c52] border-t border-r border-b border-stone-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-sm bg-[#1c1c1c]/80 hover:bg-[#1c1c1c] text-white transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="relative h-48 sm:h-60 overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] font-bold px-2.5 py-1 bg-[#a67c52] text-white uppercase tracking-wider mb-2 inline-block rounded-sm">
              Özel İmalat &amp; Montaj
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
            {service.fullDesc}
          </p>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#1c1c1c] mb-3">
              Öne Çıkan Özellikler &amp; Ustalarımızın Farkı:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 bg-[#fcfaf7] p-2.5 rounded-sm border border-stone-200">
                  <Check className="w-4 h-4 text-[#a67c52] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#fcfaf7] p-4 rounded-sm border-l-4 border-[#a67c52] text-xs text-[#1c1c1c]">
            <strong>Not:</strong> Tüm işlerimizde Sezgin Usta yerinde keşif yaparak milimetrik ölçü alır, malzeme kartelasından renk seçmenizi sağlar.
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 shrink-0 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs uppercase tracking-wider shadow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>WhatsApp'tan Teklif Al</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#a67c52] hover:bg-[#8b5e3c] text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Ustayla Konuş</span>
          </a>
        </div>

      </div>
    </div>
  );
};
