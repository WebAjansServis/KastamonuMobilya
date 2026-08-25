import React from 'react';
import { MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/mockData';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="bolgeler" className="py-20 bg-[#fcfaf7] text-[#1c1c1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm inline-block mb-3">
              Yerel Hızlı Keşif &amp; Montaj
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1c1c] border-l-4 border-[#a67c52] pl-4">
              Hizmet Bölgelerimiz
            </h2>
          </div>

          <p className="text-stone-500 text-sm font-medium max-w-md mt-4 md:mt-0">
            Arnavutköy merkez olmak üzere çevre bölgelerde özel ölçü mobilya, marangozluk, montaj, tamirat ve tadilat hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {SERVICE_AREAS.map((area, idx) => {
            const whatsappMsg = `Merhaba, ${area.name} bölgesinde özel ölçü mobilya hizmeti almak istiyorum. Keşif için bilgi alabilir miyim?`;
            const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={idx}
                className="bg-white p-5 border border-stone-200 shadow-sm hover:border-[#a67c52] transition-colors rounded-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 bg-[#a67c52]/10 text-[#a67c52] flex items-center justify-center font-bold text-xs rounded-sm">
                      <MapPin className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-[#fcfaf7] border border-stone-200 text-stone-600 font-mono">
                      {area.distance}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1c1c1c] mb-1.5 group-hover:text-[#a67c52] transition-colors">
                    {area.name}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed mb-3">
                    {area.desc}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {area.popularServices.map((srv, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-0.5 bg-[#fcfaf7] border border-stone-200 text-stone-700 rounded-sm">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-bold text-[#a67c52] hover:text-[#8b5e3c] pt-3 border-t border-stone-100"
                >
                  <span>Teklif Al</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Local SEO Text Footer Banner */}
        <div className="bg-[#1c1c1c] text-white p-6 sm:p-8 border-l-4 border-[#a67c52] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-[#a67c52]">
              Arnavutköy Marangoz Ustası Ulaşım &amp; Keşif Hattı
            </h4>
            <p className="text-stone-300 text-xs max-w-2xl opacity-90">
              Boğazköy İstiklal Mahallesi, 30 Ağustos Caddesi üzerindeki atölyemizden Arnavutköy'ün tüm mahallelerine, Hadımköy, Kayabaşı, Başakşehir ve Çatalca'ya aynı gün veya sözleşilen saatte adresinizde oluyoruz.
            </p>
          </div>

          <a
            href={`https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent('Merhaba, Arnavutköy içi keşif talebinde bulunmak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs uppercase tracking-wider shadow flex items-center gap-2 rounded-sm"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>Adrese Keşif İste</span>
          </a>
        </div>

      </div>
    </section>
  );
};
