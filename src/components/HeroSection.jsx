import React, { useState, useEffect } from 'react';
import { RealisticRose, FloralGarland } from './FloralDecorations';
import { Calendar, Heart, Clock, ChevronDown, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  // Wedding Target Date (set for realistic upcoming royal celebration date)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 24); // 24 days countdown
  targetDate.setHours(19, 0, 0, 0);

  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Decor Layer with Dark Burgundy Vignette & Fairy Lights */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 filter blur-[2px]"
        style={{ backgroundImage: `url('/1.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#120205] via-[#200309]/85 to-[#120205]" />
      
      {/* Subtle Fairy Lights Glow Effect */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-400/10 via-transparent to-transparent pointer-events-none" />

      {/* Main Mughal Royal Arch Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        
        {/* Outer Arch Frame inspired by reference 2.png */}
        <div className="relative p-6 sm:p-10 md:p-14 rounded-3xl royal-glass gold-border-glow overflow-hidden">
          
          {/* Corner Floral Rosettes */}
          <div className="absolute -top-3 -left-3 flex items-center">
            <RealisticRose size={52} color="red" className="transform -rotate-12" />
            <RealisticRose size={38} color="pink" className="transform -ml-4 mt-4 rotate-45" />
          </div>
          <div className="absolute -top-3 -right-3 flex items-center">
            <RealisticRose size={38} color="pink" className="transform mr-1 mt-4 -rotate-45" />
            <RealisticRose size={52} color="red" className="transform rotate-12" />
          </div>
          <div className="absolute -bottom-3 -left-3 flex items-center">
            <RealisticRose size={38} color="pink" className="transform ml-2 mb-2 rotate-12" />
            <RealisticRose size={50} color="red" className="transform -rotate-45" />
          </div>
          <div className="absolute -bottom-3 -right-3 flex items-center">
            <RealisticRose size={50} color="red" className="transform rotate-45" />
            <RealisticRose size={38} color="pink" className="transform -ml-2 mb-2 -rotate-12" />
          </div>

          {/* Bismillah Calligraphy */}
          <div className="mb-4">
            <div className="inline-block px-6 py-2 rounded-full bg-black/40 border border-[#d4af37]/30 shadow-inner">
              <span className="font-arabic text-2xl sm:text-3xl md:text-4xl gold-gradient-text tracking-wide leading-relaxed block">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
            </div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#eedcb0]/70 font-cinzel mt-2">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>

          {/* Quranic Verse on Marriage */}
          <div className="max-w-xl mx-auto my-4 py-2 border-y border-[#d4af37]/20">
            <p className="font-arabic text-base sm:text-lg text-rose-200/90 leading-relaxed dir-rtl">
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
            </p>
            <p className="font-cormorant italic text-xs sm:text-sm text-[#f5ebd3]/80 mt-1">
              "And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you love and mercy." (Surah Ar-Rum: 21)
            </p>
          </div>

          {/* Wedding Announcement Tag */}
          <div className="mt-6 mb-2">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-cinzel tracking-widest text-[#f5db98] uppercase shimmer-badge border border-[#d4af37]/40">
              <Sparkles size={12} className="text-[#ffd700]" />
              The Royal Wedding Invitation
              <Sparkles size={12} className="text-[#ffd700]" />
            </span>
          </div>

          {/* The Couple / Title */}
          <div className="my-4">
            <h2 className="font-arabic text-3xl sm:text-5xl text-[#fed7aa] drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] mb-2">
              عبداللہ کی دلہن
            </h2>
            <h1 className="font-cinzel-dec text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight gold-gradient-text drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
              Abdullah Ki Dulhan
            </h1>
            <p className="font-script text-2xl sm:text-3xl md:text-4xl rose-gold-gradient mt-2">
              A Blessed Union of Two Souls & Two Families
            </p>
          </div>

          {/* Floral Garland Centerpiece */}
          <FloralGarland className="my-5" />

          {/* Countdown Clock */}
          <div className="my-6">
            <div className="flex items-center justify-center gap-1 text-xs uppercase tracking-widest font-cinzel text-[#eedcb0]/80 mb-3">
              <Clock size={14} className="text-[#d4af37]" />
              <span>Counting Down To The Sacred Celebrations</span>
            </div>
            
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-2 sm:p-3 rounded-2xl bg-[#1e0207]/90 border border-[#d4af37]/40 shadow-[0_4px_15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center"
                >
                  <span className="font-cinzel text-xl sm:text-3xl font-bold gold-gradient-text">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-cinzel uppercase tracking-wider text-[#eedcb0]/70 mt-0.5">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <a
              href="#events"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3db98] to-[#aa7c11] text-[#190206] font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-95 transform hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95"
            >
              Explore Events (Mehndi, Baraat, Walima)
            </a>
            <a
              href="#bridal-entry"
              className="px-6 py-3 rounded-full bg-[#2a040a] border border-[#d4af37]/60 text-[#fbf5ee] font-cinzel text-xs sm:text-sm uppercase tracking-wider hover:bg-[#3d060f] transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>Watch Bridal Entry</span>
              <Heart size={14} className="text-rose-400 fill-rose-400" />
            </a>
          </div>

          {/* Arabic Dua at Bottom matching reference 2.png */}
          <div className="mt-8 pt-4 border-t border-[#d4af37]/20">
            <p className="font-arabic text-lg sm:text-xl text-[#f3db98]">
              بَارَكَ اللَّهُ لَهُمَا وَبَارَكَ عَلَيْهِمَا وَجَمَعَ بَيْنَهُمَا فِي خَيْرٍ
            </p>
            <p className="text-[11px] font-cinzel text-[#eedcb0]/70 mt-1">
              "May Allah bless them and bestow blessings upon them and bring them together in goodness."
            </p>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex justify-center animate-bounce">
          <a href="#quotes" aria-label="Scroll to Sacred Union section" className="text-[#eedcb0]/60 hover:text-[#ffd778]">
            <ChevronDown size={28} />
          </a>
        </div>

      </div>
    </section>
  );
};
