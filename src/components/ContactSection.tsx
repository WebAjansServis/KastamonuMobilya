import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Mutfak Dolabı',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send formatted WhatsApp message
    const whatsappMsg = `*YENİ TEKLİF TALEBİ*\n*İsim:* ${formData.name}\n*Telefon:* ${formData.phone}\n*Hizmet:* ${formData.service}\n*Not:* ${formData.message || 'Yok'}`;
    const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(whatsappMsg)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const servicesList = [
    "Mutfak Dolabı",
    "Gömme Dolap",
    "Gardırop",
    "Vestiyer",
    "Banyo Dolabı",
    "Mobilya Tamiri",
    "Montaj",
    "Diğer"
  ];

  return (
    <section id="iletisim" className="py-20 bg-[#fcfaf7] text-[#1c1c1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm inline-block mb-3">
              Hızlı Teklif &amp; İletişim
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1c1c] border-l-4 border-[#a67c52] pl-4">
              Projenizi Konuşalım
            </h2>
          </div>

          <p className="text-stone-500 text-sm font-medium max-w-md mt-4 md:mt-0">
            Ölçü almak, fiyat öğrenmek veya fikir danışmak için bize hemen ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Business Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#1c1c1c] text-white p-8 border-l-4 border-[#a67c52] shadow-xl relative overflow-hidden flex flex-col justify-between rounded-sm">
            <div className="absolute inset-0 wood-texture-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-[#a67c52] font-mono text-xs font-semibold uppercase tracking-wider block mb-1">
                  Atölye ve İletişim Bilgileri
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-stone-400 text-xs">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-800">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] flex items-center justify-center shrink-0 rounded-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Atölye Adresi</div>
                    <div className="text-xs text-stone-200 font-medium leading-relaxed">
                      {BUSINESS_INFO.address}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] flex items-center justify-center shrink-0 rounded-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Telefon / WhatsApp</div>
                    <a
                      href={`tel:${BUSINESS_INFO.rawPhone}`}
                      className="text-base text-[#a67c52] font-bold hover:underline"
                    >
                      {BUSINESS_INFO.formattedPhone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] flex items-center justify-center shrink-0 rounded-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Çalışma Saatleri</div>
                    <div className="text-xs text-stone-200 font-medium flex items-center gap-2">
                      <span>{BUSINESS_INFO.workingHours}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Big WhatsApp Direct Action Box */}
              <div className="p-5 bg-stone-900 border border-[#a67c52]/30 text-stone-100 space-y-3 rounded-sm">
                <div className="flex items-center gap-2 text-[#a67c52] font-serif font-bold text-sm">
                  <MessageCircle className="w-5 h-5 fill-[#a67c52] text-stone-950" />
                  <span>Tek Dokunuşla WhatsApp Teklifi</span>
                </div>

                <p className="text-xs text-stone-300 opacity-90">
                  Ölçü, fotoğraf veya dolap çiziminizi WhatsApp'tan gönderin, Sezgin Usta hemen incelesin.
                </p>

                <a
                  href={`https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs uppercase tracking-wider shadow rounded-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-stone-950" />
                  <span>WhatsApp'tan Hemen Yaz</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Form & Map Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Form */}
            <div className="bg-white p-6 sm:p-8 border border-stone-200 shadow-sm rounded-sm">
              
              <h3 className="font-serif text-xl font-bold text-[#1c1c1c] mb-1">
                Teklif Formu Gönderin
              </h3>
              <p className="text-stone-600 text-xs mb-6">
                Formu doldurduğunuzda bilgileriniz WhatsApp mesajı olarak ustamıza iletilir.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-950 text-center space-y-3 rounded-sm">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <div className="font-serif font-bold text-lg">Talebiniz WhatsApp'a Aktarıldı!</div>
                  <p className="text-xs text-emerald-800">
                    Sezgin Usta en kısa sürede mesajınızı inceleyip dönüş yapacaktır.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline"
                  >
                    Yeni Teklif Talebi Oluştur
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-700 mb-1">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Ahmet Yılmaz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fcfaf7] border border-stone-300 text-xs focus:outline-none focus:border-[#a67c52] rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-700 mb-1">
                        Telefon Numarası *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Örn: 053X XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fcfaf7] border border-stone-300 text-xs focus:outline-none focus:border-[#a67c52] rounded-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-700 mb-1">
                      İhtiyacınız Olan Hizmet
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fcfaf7] border border-stone-300 text-xs focus:outline-none focus:border-[#a67c52] font-medium rounded-sm"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-700 mb-1">
                      Mesajınız veya Ölçü / Detay Notları
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Yaklaşık dolap boyutu, istediğiniz renk veya adres bilgisi ekleyebilirsiniz..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fcfaf7] border border-stone-300 text-xs focus:outline-none focus:border-[#a67c52] rounded-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#a67c52] hover:bg-[#8b5e3c] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow rounded-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Teklif Talebi Gönder</span>
                  </button>
                </form>
              )}

            </div>

            {/* Map Block Container */}
            <div className="bg-white p-4 shadow-sm border border-stone-200 rounded-sm">
              <div className="flex items-center justify-between px-2 pb-3 border-b border-stone-100 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1c1c1c]">
                  <MapPin className="w-4 h-4 text-[#a67c52]" />
                  <span>Atölye Harita Konumu (Arnavutköy Boğazköy)</span>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#a67c52] hover:underline"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Haritada Aç &amp; Yol Tarifi</span>
                </a>
              </div>

              <div className="h-64 rounded-sm overflow-hidden bg-stone-100 border border-stone-200 relative">
                <iframe
                  title="Kastamobilya Marangoz Konum Haritası"
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
