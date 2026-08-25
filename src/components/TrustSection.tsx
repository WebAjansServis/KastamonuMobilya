import React from 'react';
import { Star, Award, ThumbsUp, CheckCircle, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#fcfaf7] text-[#1c1c1c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm inline-block mb-3">
              Gerçek Müşteri Memnuniyeti
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1c1c] border-l-4 border-[#a67c52] pl-4">
              134'ten Fazla Müşterinin Güveniyle
            </h2>
          </div>

          <p className="text-stone-500 text-sm font-medium max-w-md mt-4 md:mt-0">
            Bizim için iyi iş sadece güzel görünen mobilya üretmek değil; <strong className="font-semibold text-[#1c1c1c]">doğru ölçü almak</strong>, <strong className="font-semibold text-[#1c1c1c]">kaliteli işçilik yapmak</strong> ve <strong className="font-semibold text-[#1c1c1c]">söz verilen zamanda teslim etmek</strong>tir.
          </p>
        </div>

        {/* 4 Premium Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-6 border border-stone-200 hover:border-[#a67c52] shadow-sm transition-colors rounded-sm group">
            <div className="w-10 h-10 bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] flex items-center justify-center mb-4 rounded-sm">
              <Star className="w-5 h-5 fill-[#a67c52]" />
            </div>
            <div className="text-3xl sm:text-4xl font-normal text-[#1c1c1c] font-serif mb-1">
              {BUSINESS_INFO.googleRating} <span className="text-base text-[#a67c52] font-sans font-bold">/ 5.0</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c] mb-1">Google Puanı</div>
            <div className="text-[11px] text-stone-500">Mükemmel Müşteri Puanı</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 border border-stone-200 hover:border-[#a67c52] shadow-sm transition-colors rounded-sm group">
            <div className="w-10 h-10 bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] flex items-center justify-center mb-4 rounded-sm">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-normal text-[#1c1c1c] font-serif mb-1">
              {BUSINESS_INFO.googleReviewCount}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c] mb-1">Google Yorumu</div>
            <div className="text-[11px] text-stone-500">Doğrulanmış İnceleme</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 border border-stone-200 hover:border-[#a67c52] shadow-sm transition-colors rounded-sm group">
            <div className="w-10 h-10 bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] flex items-center justify-center mb-4 rounded-sm">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-normal text-[#1c1c1c] font-serif mb-1">
              {BUSINESS_INFO.yandexRating} <span className="text-base text-[#a67c52] font-sans font-bold">/ 5.0</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c] mb-1">Yandex Puanı</div>
            <div className="text-[11px] text-stone-500">{BUSINESS_INFO.yandexReviewCount} Yandex Harita Yorumu</div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 border border-stone-200 hover:border-[#a67c52] shadow-sm transition-colors rounded-sm group">
            <div className="w-10 h-10 bg-[#a67c52]/10 border border-[#a67c52]/30 text-[#a67c52] flex items-center justify-center mb-4 rounded-sm">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-normal text-[#1c1c1c] font-serif mb-1">
              %100
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c] mb-1">Zamanında Teslimat</div>
            <div className="text-[11px] text-stone-500">Verilen Sözün Arkasında</div>
          </div>

        </div>

      </div>
    </section>
  );
};
