import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  const [platformFilter, setPlatformFilter] = useState<'all' | 'Google' | 'Yandex'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredReviews = platformFilter === 'all'
    ? REVIEWS
    : REVIEWS.filter(r => r.platform === platformFilter);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  return (
    <section id="yorumlar" className="py-20 bg-[#1c1c1c] text-white relative overflow-hidden">
      
      {/* Wood texture background */}
      <div className="absolute inset-0 wood-texture-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#a67c52] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>%100 Gerçek Müşteri Yorumları</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-6">
            Müşterilerimiz Ne Diyor?
          </h2>

          {/* Social Proof Header Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4 bg-stone-900 border-l-4 border-[#a67c52] shadow-lg">
            
            <div className="flex items-center gap-3 px-4 py-2 bg-[#1c1c1c] border border-stone-800">
              <div className="w-8 h-8 bg-[#a67c52]/20 border border-[#a67c52]/40 flex items-center justify-center font-bold text-[#a67c52] text-sm">
                G
              </div>
              <div className="text-left">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-stone-200">
                  {BUSINESS_INFO.googleRating} / 5.0 — <span className="text-[#a67c52] font-normal">{BUSINESS_INFO.googleReviewCount} Google Yorumu</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-[#1c1c1c] border border-stone-800">
              <div className="w-8 h-8 bg-[#a67c52]/20 border border-[#a67c52]/40 flex items-center justify-center font-bold text-[#a67c52] text-sm">
                Y
              </div>
              <div className="text-left">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-stone-200">
                  {BUSINESS_INFO.yandexRating} / 5.0 — <span className="text-[#a67c52] font-normal">{BUSINESS_INFO.yandexReviewCount} Yandex Yorumu</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => { setPlatformFilter('all'); setCurrentIndex(0); }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all rounded-sm ${
              platformFilter === 'all'
                ? 'bg-[#a67c52] text-white font-bold'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
            }`}
          >
            Tüm Yorumlar ({REVIEWS.length})
          </button>
          <button
            onClick={() => { setPlatformFilter('Google'); setCurrentIndex(0); }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all rounded-sm ${
              platformFilter === 'Google'
                ? 'bg-[#a67c52] text-white font-bold'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
            }`}
          >
            Google Haritalar ({REVIEWS.filter(r => r.platform === 'Google').length})
          </button>
          <button
            onClick={() => { setPlatformFilter('Yandex'); setCurrentIndex(0); }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all rounded-sm ${
              platformFilter === 'Yandex'
                ? 'bg-[#a67c52] text-white font-bold'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
            }`}
          >
            Yandex Yorumları ({REVIEWS.filter(r => r.platform === 'Yandex').length})
          </button>
        </div>

        {/* Featured Slider Highlight */}
        {filteredReviews.length > 0 && (
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="bg-[#1c1c1c] p-8 sm:p-10 border-l-4 border-[#a67c52] shadow-2xl relative">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-[#a67c52]/10 pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#a67c52] text-white font-bold font-serif italic flex items-center justify-center text-lg shadow-md rounded-sm">
                    {filteredReviews[currentIndex].author.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <div className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <span>{filteredReviews[currentIndex].author}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" title="Doğrulanmış Müşteri" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <span className="px-2 py-0.5 bg-stone-900 text-[#a67c52] border border-stone-800">
                        {filteredReviews[currentIndex].platform} Haritalar
                      </span>
                      {filteredReviews[currentIndex].serviceType && (
                        <span>• {filteredReviews[currentIndex].serviceType}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex text-yellow-400">
                  {[...Array(filteredReviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl font-normal text-stone-200 leading-relaxed italic mb-6">
                "{filteredReviews[currentIndex].comment}"
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-stone-800 text-xs text-stone-400">
                <span>Teslimat Yeri: Arnavutköy &amp; Çevre Bölgeler</span>
                <span className="text-[#a67c52] font-mono">{filteredReviews[currentIndex].date}</span>
              </div>
            </div>

            {/* Slider Nav Buttons */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-3 bg-stone-900 hover:bg-stone-800 text-[#a67c52] border border-stone-800 transition-colors rounded-sm"
                aria-label="Önceki Yorum"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs text-stone-400 font-medium">
                {currentIndex + 1} / {filteredReviews.length}
              </span>

              <button
                onClick={handleNext}
                className="p-3 bg-stone-900 hover:bg-stone-800 text-[#a67c52] border border-stone-800 transition-colors rounded-sm"
                aria-label="Sonraki Yorum"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-900/90 p-6 border-l-2 border-[#a67c52] hover:border-[#a67c52] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                    ))}
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#a67c52]">
                    — {rev.platform}
                  </span>
                </div>

                <p className="text-stone-300 text-xs leading-relaxed mb-4 italic opacity-90">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">{rev.author}</span>
                <span className="text-stone-500 text-[10px]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
