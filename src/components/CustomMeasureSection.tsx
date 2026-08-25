import React from 'react';
import { Ruler, Compass, Hammer, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../data/mockData';

interface CustomMeasureSectionProps {
  onOpenQuoteModal: () => void;
}

export const CustomMeasureSection: React.FC<CustomMeasureSectionProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = `https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent(WHATSAPP_MESSAGES.closet)}`;

  const steps = [
    {
      num: "01",
      title: "Ölçü Alıyoruz",
      desc: "Adresinize gelip alanınızı lazer cihazı ve hassas marangoz cetvelleriyle milimetrik ölçüyoruz. Girinti, çıkıntı ve kolonları hesaba katıyoruz.",
      icon: Ruler
    },
    {
      num: "02",
      title: "Tasarlıyoruz",
      desc: "İhtiyaçlarınıza, depolama alışkanlıklarınıza ve zevkinize uygun kapak modellerini, renk kartelasını ve iç bölmeleri birlikte seçip netleştiriyoruz.",
      icon: Compass
    },
    {
      num: "03",
      title: "Üretiyor ve Montajını Yapıyoruz",
      desc: "Arnavutköy atölyemizde özenle imal ettiğimiz mobilyanızı söz verdiğimiz günde getirip kusursuz terazi ve temiz işçilikle montajını yapıyoruz.",
      icon: Hammer
    }
  ];

  return (
    <section id="ozel-olcu" className="py-20 bg-[#1c1c1c] text-white relative overflow-hidden">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 wood-texture-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm inline-block mb-4">
            Terzi İşi Marangoz İmalatı
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6 leading-tight">
            Alanınıza Uymayan Mobilya Değil, <br className="hidden sm:inline" />
            <span className="text-[#a67c52] italic">Alanınıza Göre Mobilya</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-light opacity-90">
            Her evin ölçüsü, ihtiyacı ve kullanım şekli farklıdır. Bu nedenle hazır ürünlerle yetinmek zorunda değilsiniz. Alanınızı ölçüyor, ihtiyacınızı dinliyor ve size özel çözümler üretiyoruz.
          </p>
        </div>

        {/* 3 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-stone-900 p-8 border-l-4 border-[#a67c52] shadow-xl group transition-all duration-300 flex flex-col justify-between"
              >
                {/* Number Watermark */}
                <div className="absolute top-4 right-6 text-4xl font-serif italic font-bold text-[#a67c52]/20 select-none">
                  {item.num}
                </div>

                <div>
                  <div className="w-12 h-12 bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] flex items-center justify-center mb-6 rounded-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-stone-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#a67c52]">
                  <span>Adım {item.num}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call To Action Bar */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 bg-stone-900 border-l-4 border-[#a67c52] shadow-xl">
            <span className="text-stone-200 text-xs font-medium">
              Evinizdeki duvar boşluğunun veya projenizin fotoğrafını atın, usta gözüyle inceleyelim:
            </span>

            <div className="flex gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 bg-[#a67c52] hover:bg-[#8b5e3c] text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-sm shadow"
              >
                Projeniz İçin Teklif Alın
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors rounded-sm shadow"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>Fotoğraf Gönder</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
