import React, { useState } from 'react';
import { X, Calculator, ArrowRight, MessageCircle, CheckCircle2, Sparkles, Ruler } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('Mutfak Dolabı');
  const [material, setMaterial] = useState('Akrilik Kapak (Çizilmez / Parlak)');
  const [widthMetres, setWidthMetres] = useState<string>('3.5');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const services = [
    { name: 'Mutfak Dolabı', desc: 'Özel ölçü imalat & kapak değişimi' },
    { name: 'Gömme Dolap', desc: 'Duvar ve tavan arası tam ölçü' },
    { name: 'Gardırop', desc: 'Yatak odasına özel iç bölmeler' },
    { name: 'Vestiyer / Portmanto', desc: 'Giriş antre depolama çözümü' },
    { name: 'Banyo Dolabı', desc: 'Su ve neme dayanıklı malzeme' },
    { name: 'Mobilya Tamiri & Montaj', desc: 'Onarım, menteşe & kurulum' }
  ];

  const materials = [
    'Akrilik Kapak (Çizilmez / Parlak High-Gloss)',
    'Membran Kapak (Desenli / Balon Kapak)',
    'MDF Lam (Ekonomik & Dayanıklı)',
    'Lake Kapak (Özel İpek Mat & Parlak Boya)',
    'Emin Değilim, Usta Önersin'
  ];

  const handleGenerateWhatsApp = () => {
    const formattedMsg = `*HIZLI TEKLİF HESAPLAMA TALEBİ*\n----------------------------------------\n*Proje Tipi:* ${serviceType}\n*Tercih Edilen Malzeme:* ${material}\n*Tahmini Boyut / Metre:* ${widthMetres || 'Belirtilmedi'} metre\n*Müşteri Notu:* ${notes || 'Not yok'}\n----------------------------------------\nSezgin Usta, projem için tahmini fiyat ve keşif randevusu almak istiyorum.`;
    
    const url = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(formattedMsg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#1c1c1c] text-white rounded-sm max-w-xl w-full overflow-hidden shadow-2xl border-l-4 border-[#a67c52] border-t border-r border-b border-stone-800 relative flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-stone-900 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#a67c52]/10 border border-[#a67c52]/40 text-[#a67c52] flex items-center justify-center rounded-sm">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-[#a67c52] font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Özel Ölçü Hesaplayıcı
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Projeniz İçin Hızlı Teklif Oluşturun
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps indicator */}
        <div className="bg-stone-950 px-6 py-3 border-b border-stone-800 flex items-center justify-between text-xs font-semibold text-stone-400">
          <span className={step === 1 ? 'text-[#a67c52] font-bold' : ''}>1. Proje Tipi</span>
          <span>→</span>
          <span className={step === 2 ? 'text-[#a67c52] font-bold' : ''}>2. Malzeme &amp; Ölçü</span>
          <span>→</span>
          <span className={step === 3 ? 'text-[#a67c52] font-bold' : ''}>3. Teklif Gönder</span>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <label className="block text-[10px] font-bold text-stone-300 uppercase tracking-wider">
                Yaptırmak İstediğiniz Mobilya veya İşi Seçin:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((srv, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setServiceType(srv.name)}
                    className={`p-4 text-left border transition-all rounded-sm ${
                      serviceType === srv.name
                        ? 'bg-[#a67c52]/20 border-[#a67c52] text-white'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-white mb-0.5">{srv.name}</div>
                    <div className="text-[11px] text-stone-400">{srv.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <label className="block text-[10px] font-bold text-stone-300 uppercase tracking-wider mb-2">
                  Tercih Ettiğiniz Kapak / Malzeme Türü:
                </label>
                <div className="space-y-2">
                  {materials.map((mat, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setMaterial(mat)}
                      className={`w-full p-3 text-left border text-xs font-medium transition-all flex items-center justify-between rounded-sm ${
                        material === mat
                          ? 'bg-[#a67c52]/20 border-[#a67c52] text-white'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800'
                      }`}
                    >
                      <span>{mat}</span>
                      {material === mat && <CheckCircle2 className="w-4 h-4 text-[#a67c52]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-300 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Tahmini Genişlik / Metre Uzunluğu:</span>
                  <span className="text-[#a67c52] font-mono">{widthMetres} metre</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={widthMetres}
                  onChange={(e) => setWidthMetres(e.target.value)}
                  className="w-full accent-[#a67c52] bg-stone-800 rounded-sm h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 mt-1">
                  <span>1m (Küçük Modül)</span>
                  <span>5m (Standart Mutfak)</span>
                  <span>10m+ (Geniş Proje)</span>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 bg-stone-900 border border-[#a67c52]/30 text-xs space-y-2 text-stone-200 rounded-sm">
                <div className="font-serif font-bold text-[#a67c52] text-sm">Seçtiğiniz Proje Özeti:</div>
                <div>• <strong>Hizmet:</strong> {serviceType}</div>
                <div>• <strong>Malzeme:</strong> {material}</div>
                <div>• <strong>Yaklaşık Boyut:</strong> {widthMetres} Metre</div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-300 uppercase tracking-wider mb-1">
                  Ekstra İstekleriniz veya Adres Notu (Opsiyonel):
                </label>
                <textarea
                  rows={3}
                  placeholder="Örn: Kulpsuz kapak istiyorum, led aydınlatma olsun, Arnavutköy Merkez..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 bg-stone-900 border border-stone-800 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#a67c52] rounded-sm"
                />
              </div>

              <div className="text-[11px] text-stone-400">
                Aşağıdaki butona bastığınızda WhatsApp açılır ve oluşturulan detaylı proje özeti doğrudan Sezgin Usta'ya iletilir.
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-bold uppercase tracking-wider rounded-sm"
            >
              Geri
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-400 text-xs font-bold uppercase tracking-wider rounded-sm"
            >
              İptal
            </button>
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#a67c52] hover:bg-[#8b5e3c] text-white font-bold text-xs uppercase tracking-wider shadow rounded-sm"
            >
              <span>Devam Et</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleGenerateWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg rounded-sm"
            >
              <MessageCircle className="w-4 h-4 fill-stone-950" />
              <span>WhatsApp'tan Usta'ya Gönder</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
