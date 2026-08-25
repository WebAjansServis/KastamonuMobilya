import React from 'react';
import { Ruler, Award, Clock, Banknote, CheckCircle2, MapPin } from 'lucide-react';
import { ADVANTAGES } from '../data/mockData';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ruler': return <Ruler className="w-6 h-6 text-[#a67c52]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#a67c52]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#a67c52]" />;
      case 'Banknote': return <Banknote className="w-6 h-6 text-[#a67c52]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#a67c52]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#a67c52]" />;
      default: return <Award className="w-6 h-6 text-[#a67c52]" />;
    }
  };

  return (
    <section id="neden-biz" className="py-20 bg-[#fcfaf7] text-[#1c1c1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm inline-block mb-3">
              Güvenilir Ustalık &amp; Kalite
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1c1c] border-l-4 border-[#a67c52] pl-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
          </div>
          <p className="text-stone-500 text-sm font-medium max-w-md mt-4 md:mt-0">
            Sözümüzün arkasında duruyor, mobilya hayallerinizi sorunsuz ve titiz bir ustalıkla gerçeğe dönüştürüyoruz.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-stone-200 hover:border-[#a67c52] transition-colors rounded-sm shadow-sm group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#fcfaf7] border border-[#a67c52]/30 flex items-center justify-center mb-4 group-hover:bg-[#a67c52] transition-colors rounded-sm group-hover:[&>svg]:text-white">
                  {getIcon(item.icon)}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1c1c1c] mb-2 group-hover:text-[#a67c52] transition-colors">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
