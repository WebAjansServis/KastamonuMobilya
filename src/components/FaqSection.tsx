import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 bg-[#fcfaf7] text-[#1c1c1c] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm inline-block mb-3">
              Merak Edilenler
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1c1c] border-l-4 border-[#a67c52] pl-4">
              Sık Sorulan Sorular
            </h2>
          </div>

          <p className="text-stone-500 text-sm font-medium max-w-md mt-4 md:mt-0">
            Özel ölçü mobilya ve marangozluk süreçleri hakkında aklınıza takılan soruların yanıtları.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border transition-colors bg-white rounded-sm overflow-hidden ${
                  isOpen ? 'border-[#a67c52] shadow-sm' : 'border-stone-200'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 font-serif font-bold text-base sm:text-lg text-[#1c1c1c] flex items-center justify-between gap-4 hover:text-[#a67c52] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-[#fcfaf7] border border-[#a67c52]/30 text-[#a67c52] text-xs font-serif italic flex items-center justify-center font-bold shrink-0 rounded-sm">
                      0{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#a67c52]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-stone-600 text-xs leading-relaxed border-t border-stone-100 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question WhatsApp Helper */}
        <div className="mt-12 p-6 bg-[#1c1c1c] text-white border-l-4 border-[#a67c52] flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm shadow-xl">
          <div className="text-center sm:text-left">
            <div className="font-serif font-bold text-[#a67c52] text-base">Aklınızda başka bir soru mu var?</div>
            <div className="text-xs text-stone-300">Sezgin Usta'ya doğrudan WhatsApp üzerinden sorabilirsiniz.</div>
          </div>

          <a
            href={`https://wa.me/90${BUSINESS_INFO.rawPhone.slice(1)}?text=${encodeURIComponent('Merhaba, web sitenizden ulaşıyorum. Bir sorum var:')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs uppercase tracking-wider rounded-sm shadow shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>WhatsApp'tan Usta'ya Sor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
