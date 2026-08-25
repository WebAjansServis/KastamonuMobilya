import React from 'react';
import { Hammer, Phone, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <footer className="bg-[#1c1c1c] text-white pt-16 pb-24 lg:pb-12 border-t border-stone-800 relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 wood-texture-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#a67c52] flex items-center justify-center text-white shadow-md rounded-sm">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  KASTAMOBİLYA
                </span>
                <span className="text-[10px] text-[#a67c52] font-bold tracking-wider uppercase block">
                  Marangoz &amp; Mobilya Atölyesi
                </span>
              </div>
            </a>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Arnavutköy ve çevresinde özel ölçü mutfak dolabı, gömme dolap, vestiyer, banyo dolabı ve profesyonel marangozluk hizmetleri.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 bg-stone-900 border border-[#a67c52]/30 text-[#a67c52] text-[10px] font-bold uppercase tracking-wider rounded-sm">
                ★ 5.0 Google Puanı (134+ Yorum)
              </span>
              <span className="px-3 py-1 bg-stone-900 border border-stone-800 text-stone-300 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                Arnavutköy
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 border-b border-stone-800 pb-2">
              Hızlı Menü
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#hero" className="hover:text-[#a67c52] transition-colors">Ana Sayfa</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#ozel-olcu" className="hover:text-[#a67c52] transition-colors">Özel Ölçü Tasarım</a></li>
              <li><a href="#projelerimiz" className="hover:text-[#a67c52] transition-colors">Projelerimiz</a></li>
              <li><a href="#neden-biz" className="hover:text-[#a67c52] transition-colors">Neden Kastamobilya</a></li>
              <li><a href="#yorumlar" className="hover:text-[#a67c52] transition-colors">Müşteri Yorumları</a></li>
              <li><a href="#bolgeler" className="hover:text-[#a67c52] transition-colors">Hizmet Bölgeleri</a></li>
              <li><a href="#sss" className="hover:text-[#a67c52] transition-colors">Sık Sorulan Sorular</a></li>
              <li><a href="#iletisim" className="hover:text-[#a67c52] transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 border-b border-stone-800 pb-2">
              Ana Hizmetlerimiz
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Mutfak Dolabı</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Gömme Dolap</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Gardırop İmalatı</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Vestiyer &amp; Portmanto</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Banyo Dolabı</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Mobilya Tamiri</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Dolap Montajı</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#a67c52] transition-colors">Kapak Değişimi</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm mb-4 border-b border-stone-800 pb-2">
              İletişim Bilgileri
            </h4>

            <div className="text-xs text-stone-300 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-stone-400">{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#a67c52] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="text-[#a67c52] font-bold hover:underline text-xs">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Clock className="w-4 h-4 text-[#a67c52] shrink-0" />
                <span>Çalışma: 24 Saat Açık Atölye</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-stone-950 font-bold text-xs uppercase tracking-wider rounded-sm shadow hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>WhatsApp İletişim</span>
              </a>
            </div>
          </div>

        </div>

        {/* Local SEO Keyword Bar */}
        <div className="py-6 border-b border-stone-900 text-stone-500 text-[10px] leading-relaxed text-center sm:text-left">
          <strong className="text-stone-400 font-semibold">Yerel Arama Etiketleri: </strong>
          <span>Arnavutköy marangoz • Arnavutköy mobilya • Arnavutköy mutfak dolabı • Arnavutköy gömme dolap • Arnavutköy özel ölçü mobilya • Arnavutköy mobilya tamiri • Arnavutköy dolap montajı • Arnavutköy marangoz ustası • Hadımköy marangoz • Başakşehir marangoz • Kayabaşı marangoz • Boğazköy marangoz • Çatalca marangoz</span>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Kastamobilya Marangoz ve Mobilya. Tüm Hakları Saklıdır.
          </div>

          <div className="flex items-center gap-1 text-stone-500">
            <span>Kaliteli Ustalık ve Zamanında Teslimat Sloganıyla</span>
            <Heart className="w-3.5 h-3.5 text-[#a67c52] fill-[#a67c52]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
