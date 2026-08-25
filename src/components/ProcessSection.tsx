import React from 'react';
import { WORK_PROCESS } from '../data/mockData';
import { MessageSquare, Ruler, FileText, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <MessageSquare className="w-5 h-5 text-[#a67c52]" />;
      case 1: return <Ruler className="w-5 h-5 text-[#a67c52]" />;
      case 2: return <FileText className="w-5 h-5 text-[#a67c52]" />;
      case 3: return <CheckCircle className="w-5 h-5 text-[#a67c52]" />;
      default: return <CheckCircle className="w-5 h-5 text-[#a67c52]" />;
    }
  };

  return (
    <section className="py-20 bg-[#fcfaf7] text-[#1c1c1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm inline-block mb-3">
              Şeffaf &amp; Adım Adım İmalat
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1c1c] border-l-4 border-[#a67c52] pl-4">
              Nasıl Çalışıyoruz?
            </h2>
          </div>
          <p className="text-stone-500 text-sm font-medium max-w-md mt-4 md:mt-0">
            Sipariş anından montaj gününe kadar her aşamada sizi bilgilendiriyor, tam zamanında teslim ediyoruz.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-stone-200 hover:border-[#a67c52] transition-colors rounded-sm group flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#fcfaf7] border border-[#a67c52]/30 flex items-center justify-center rounded-sm">
                    {getIcon(idx)}
                  </div>

                  <span className="font-serif italic font-bold text-2xl text-[#a67c52]">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1c1c1c] mb-2 group-hover:text-[#a67c52] transition-colors">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200 text-[10px] font-bold uppercase tracking-widest text-[#a67c52]">
                Adım {item.step} / 04
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
