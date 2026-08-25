import React, { useState } from 'react';
import { 
  ChefHat, Maximize2, Shirt, DoorOpen, Bath, Ruler, Wrench, Hammer, 
  ArrowRight, Sparkles, Check
} from 'lucide-react';
import { SERVICES, ADDITIONAL_SERVICES, BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ChefHat': return <ChefHat className="w-6 h-6" />;
      case 'Maximize2': return <Maximize2 className="w-6 h-6" />;
      case 'Shirt': return <Shirt className="w-6 h-6" />;
      case 'DoorOpen': return <DoorOpen className="w-6 h-6" />;
      case 'Bath': return <Bath className="w-6 h-6" />;
      case 'Ruler': return <Ruler className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      default: return <Ruler className="w-6 h-6" />;
    }
  };

  return (
    <section id="hizmetlerimiz" className="py-20 bg-[#fcfaf7] text-[#1c1c1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                Marangozluk &amp; İmalat
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1c1c] border-l-4 border-[#a67c52] pl-4">
              Hizmet Alanlarımız
            </h2>
          </div>

          <p className="text-sm text-stone-500 font-medium max-w-md mt-4 md:mt-0">
            Ölçüsünden tasarımına, üretiminden montajına kadar tüm özel mobilya projelerinizi atölyemizde özenle hayata geçiriyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-white rounded-sm overflow-hidden border border-stone-200 hover:border-[#a67c52] transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Image & Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 via-transparent to-transparent" />
                  
                  {/* Step Index Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1c1c1c] text-[#a67c52] font-serif italic text-sm font-bold border border-[#a67c52]/40 rounded-sm">
                    0{idx + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-[#1c1c1c] mb-2 group-hover:text-[#a67c52] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0 mt-auto">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#a67c52] hover:text-[#8b5e3c] py-2.5 px-3 rounded-sm bg-[#fcfaf7] hover:bg-stone-100 border border-stone-200 transition-all group-hover:border-[#a67c52]"
                >
                  <span>Detaylı Bilgi</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services List Box */}
        <div className="bg-[#1c1c1c] text-white rounded-sm p-6 sm:p-8 border-l-4 border-[#a67c52] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="font-serif text-xl font-bold text-[#a67c52]">
              Diğer Özel Marangozluk &amp; Tadilat Hizmetlerimiz
            </h4>
            <p className="text-stone-300 text-xs opacity-90">
              Listede göremediğiniz tüm özel ölçü ahşap işleriniz için bizimle iletişime geçebilirsiniz.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end mb-4">
              {ADDITIONAL_SERVICES.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 text-stone-200 text-xs font-medium border border-stone-800 rounded-sm"
                >
                  <Check className="w-3.5 h-3.5 text-[#a67c52]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>

            <div className="flex justify-center lg:justify-end gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 bg-[#a67c52] hover:bg-[#8b5e3c] text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-sm"
              >
                Tüm Hizmetler İçin Fiyat Al
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </section>
  );
};
