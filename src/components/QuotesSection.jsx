import React from 'react';
import { RealisticRose, FloralGarland } from './FloralDecorations';
import { Heart, Sparkles, BookOpen, Quote } from 'lucide-react';

export const QuotesSection = () => {
  const weddingQuotes = [
    {
      source: "Mevlana Rumi",
      quote: "Lovers don't finally meet somewhere. They're in each other all along.",
      urdu: "محبت کی نگاہوں میں تقدیر کا نور ہوتا ہے",
      context: "On Eternal Soulmates & Destiny"
    },
    {
      source: "Prophetic Wisdom (Sunnah of Nikah)",
      quote: "When a person marries, they have fulfilled half of their religion, so let them fear Allah regarding the remaining half.",
      urdu: "النِّكَاحُ مِنْ سُنَّتِي (نکاح میری سنت ہے)",
      context: "Baihaqi & Tirmidhi"
    },
    {
      source: "Poetic Pakistani Vows",
      quote: "Two lives, two hearts, joined together in friendship, united forever in love and prayers.",
      urdu: "دعا ہے ربِّ کائنات اس پاک رشتے میں دائمی محبت اور برکت عطا فرمائے",
      context: "Prayers for the Bride & Groom"
    }
  ];

  return (
    <section id="quotes" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-950/20 rounded-full filter blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-amber-950/20 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-cinzel text-[#f3db98] bg-[#2a0409] border border-[#d4af37]/30 mb-3">
            <Heart size={12} className="text-rose-400 fill-rose-400" />
            <span>Sacred Union & Blessings</span>
            <Heart size={12} className="text-rose-400 fill-rose-400" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text tracking-wide">
            Words of Love, Wisdom & Prayers
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#f0e3cc]/80 max-w-2xl mx-auto mt-2">
            "A wedding is not merely the coming together of two individuals, but a sacred covenant bound by faith, cherished traditions, and infinite family blessings."
          </p>

          <FloralGarland className="max-w-md mx-auto" />
        </div>

        {/* Family Warm Invitation Card */}
        <div className="mb-12 p-6 sm:p-10 rounded-3xl royal-glass gold-border relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Quote size={80} className="text-[#d4af37]" />
          </div>

          <div className="flex justify-center items-center gap-3 mb-4">
            <RealisticRose size={32} color="red" />
            <h3 className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-widest text-[#f3db98]">
              An Invitation From The Heart
            </h3>
            <RealisticRose size={32} color="pink" />
          </div>

          <p className="font-cormorant text-lg sm:text-2xl text-[#fef2f2] leading-relaxed max-w-3xl mx-auto">
            "Together with our beloved parents, elders, and families, we cordially invite you to grace the auspicious wedding ceremonies of <span className="gold-gradient-text font-bold">Abdullah Ki Dulhan</span>. Your presence, prayers, and heartfelt blessings will make this sacred milestone truly unforgettable."
          </p>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm font-cinzel tracking-wider text-[#eedcb0]/80">
            <span className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#d4af37]" />
              The Groom & Bride Families
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="flex items-center gap-1.5">
              <Heart size={14} className="text-rose-400" />
              With Warmest Duas & Regards
            </span>
          </div>
        </div>

        {/* 3 Luxury Wedding Quotes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weddingQuotes.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl royal-glass border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-cinzel uppercase tracking-widest text-[#d4af37] px-2.5 py-0.5 rounded-full bg-[#1e0207] border border-[#d4af37]/30">
                    {item.context}
                  </span>
                  <Quote size={18} className="text-[#d4af37]/50 group-hover:text-[#d4af37] transition-colors" />
                </div>

                <p className="font-cormorant italic text-base sm:text-lg text-[#fbf5ee] leading-relaxed mb-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#d4af37]/20">
                <p className="font-arabic text-sm text-[#fed7aa] text-right mb-1">
                  {item.urdu}
                </p>
                <p className="font-cinzel text-xs font-semibold gold-gradient-text tracking-wide">
                  — {item.source}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
