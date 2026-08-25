import React from 'react';
import { MessageCircle, ArrowRight, Star, ShieldCheck, Clock, Ruler, Calculator, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-stone-950 text-white">
      
      {/* Background Image with Dark Wood Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85"
          alt="Kastamobilya Mutfak ve Gömme Dolap Uygulaması"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/80 to-[#1C1917]/60" />
        <div className="absolute inset-0 wood-texture-bg opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl">
          
          {/* Top Pill / Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
              Arnavutköy &amp; Çevresi
            </span>
            <div className="flex text-yellow-400 text-xs">★★★★★</div>
            <span className="text-stone-400 text-xs font-medium ml-1">5.0/5 Google Puanı</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-white mb-6">
            Hayalinizdeki Mobilyayı <br className="hidden sm:inline" />
            <span className="text-[#a67c52] italic">Ölçünüze Göre</span> Üretiyoruz
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 font-light leading-relaxed mb-8 max-w-2xl opacity-90">
            Özel ölçü mutfak dolabı, gömme dolap ve tüm marangozluk işlerinizde kaliteli işçilik ve zamanında teslim garantisi.
          </p>

          {/* Primary & Secondary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a67c52] hover:bg-[#8b5e3c] text-white px-8 py-4 font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg transition-colors text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WHATSAPP'TAN TEKLİF AL</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="border border-white/40 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-colors"
            >
              <Calculator className="w-4 h-4 text-[#a67c52]" />
              <span>ANINDA TEKLİF HESAPLA</span>
            </button>

            <a
              href="#hizmetlerimiz"
              className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/20 hover:bg-white/5 text-stone-300 font-bold text-sm tracking-wide transition-colors"
            >
              <span>HİZMETLERİMİZ</span>
              <ArrowRight className="w-4 h-4 text-[#a67c52]" />
            </a>
          </div>

          {/* Master Sezgin Usta Trust Callout */}
          <div className="p-4 bg-[#1c1c1c]/90 border border-[#a67c52]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#a67c52] flex items-center justify-center text-white font-serif italic font-bold text-lg rounded-sm">
                SU
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Sezgin Usta Güvencesiyle</span>
                  <span className="text-[10px] px-2 py-0.5 bg-[#a67c52]/20 text-[#a67c52] border border-[#a67c52]/40 font-mono uppercase tracking-wider">
                    Sözümüz Söz
                  </span>
                </div>
                <div className="text-xs text-stone-400">
                  "Atölyeden doğrudan usta işçiliği, aracı komisyonu yok."
                </div>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex items-center gap-2 text-xs font-bold text-[#a67c52] hover:text-white transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Direkt Ustayla Görüş: {BUSINESS_INFO.formattedPhone}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Hero Bottom Social Proof & Trust Badges */}
      <div className="relative z-10 border-t border-stone-800/80 bg-stone-950/90 backdrop-blur-md mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center text-center sm:text-left">
            
            {/* Badge 1 */}
            <div className="flex items-center justify-center sm:justify-start gap-3 p-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-none">5.0 / 5.0</div>
                <div className="text-[11px] text-stone-400">Google Puanı</div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 p-2 border-l sm:border-l border-stone-800">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white leading-none">134+ Yorum</div>
                <div className="text-[11px] text-stone-400">Google Değerlendirme</div>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 p-2 border-l border-stone-800">
              <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
              <div>
                <div className="text-sm font-bold text-white leading-none">5.0 / 13+ Yandex</div>
                <div className="text-[11px] text-stone-400">Yandex Yorumu</div>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 p-2 border-l border-stone-800">
              <Ruler className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white leading-none">Özel Ölçü</div>
                <div className="text-[11px] text-stone-400">Milimetrik İmalat</div>
              </div>
            </div>

            {/* Badge 5 */}
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-2.5 p-2 border-l border-stone-800">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white leading-none">Zamanında Teslim</div>
                <div className="text-[11px] text-stone-400">Verilen Günde Montaj</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
