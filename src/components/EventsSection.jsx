import React, { useState } from 'react';
import { RealisticRose, FloralGarland } from './FloralDecorations';
import { Calendar, Clock, MapPin, Sparkles, Navigation, CalendarPlus, CheckCircle2 } from 'lucide-react';

export const EventsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const events = [
    {
      id: 'mehndi',
      name: 'Mehndi Night',
      urdu: 'جشنِ حنا و شبِ مہندی',
      tagline: 'An evening of rhythm, henna swirls, laughter and lively dholak beats',
      date: 'Thursday, November 19, 2026',
      time: '07:30 PM onwards',
      venue: 'Royal Palm Marquee & Gardens, Club Road, Islamabad',
      mapUrl: 'https://maps.google.com/?q=Royal+Palm+Islamabad',
      calendarDetails: {
        title: 'Mehndi Night | Abdullah Ki Dulhan',
        start: '20261119T143000Z',
        end: '20261119T183000Z',
        details: 'Celebrating the joyous Mehndi night of Abdullah Ki Dulhan with Rasm-e-Heena, Dholki and Festive dinner.',
        location: 'Royal Palm Marquee & Gardens, Islamabad'
      },
      dressCode: 'Vibrant Traditional: Mustard Gold, Emerald Green & Sunny Yellows',
      colorTheme: 'from-amber-600/30 via-emerald-950/40 to-[#190206]',
      accentBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      highlights: [
        'Rasm-e-Heena & Floral Gajra Welcome',
        'Traditional Dholki, Tappay & Sangeet',
        'Live Pakistani Street Food & Live Barbeque'
      ]
    },
    {
      id: 'baraat',
      name: 'The Grand Baraat & Nikah',
      urdu: 'بارات، رسمِ نکاح و رخصتی',
      tagline: 'The sacred covenant of Nikah and royal reception of the Baraat',
      date: 'Friday, November 20, 2026',
      time: '07:00 PM (Nikah Khawan at 8:00 PM)',
      venue: 'The Grand Royal Palace Banquet, Express Highway, Islamabad',
      mapUrl: 'https://maps.google.com/?q=Grand+Royal+Palace+Islamabad',
      calendarDetails: {
        title: 'Grand Baraat & Nikah | Abdullah Ki Dulhan',
        start: '20261120T140000Z',
        end: '20261120T190000Z',
        details: 'The auspicious Baraat and sacred Nikah ceremony of Abdullah Ki Dulhan followed by Royal Feast and Rukhsati.',
        location: 'The Grand Royal Palace Banquet, Islamabad'
      },
      dressCode: 'Royal Formal: Deep Maroon, Crimson, Ivory & Gold Sherwanis / Lehngas',
      colorTheme: 'from-rose-900/40 via-red-950/50 to-[#190206]',
      accentBadge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      highlights: [
        'Arrival & Shahi Reception of the Baraat',
        'Solemn Nikah Ceremony & Khutba',
        'Mughlai Royal Feast & Emotional Rukhsati'
      ]
    },
    {
      id: 'walima',
      name: 'Walima Reception',
      urdu: 'دعوتِ بابرکت ولیمہ',
      tagline: 'Sunnah feast and grand dinner celebration welcoming the newly-wed couple',
      date: 'Sunday, November 22, 2026',
      time: '08:00 PM onwards',
      venue: 'Serena Grand Ballroom, Khayaban-e-Suhrawardy, Islamabad',
      mapUrl: 'https://maps.google.com/?q=Serena+Hotel+Islamabad',
      calendarDetails: {
        title: 'Walima Reception | Abdullah Ki Dulhan',
        start: '20261122T150000Z',
        end: '20261122T193000Z',
        details: 'The blessed Walima feast and dinner reception of Abdullah and his beloved bride.',
        location: 'Serena Grand Ballroom, Islamabad'
      },
      dressCode: 'Black Tie & High Elegance: Pastel Pinks, Champagne & Midnight Blue',
      colorTheme: 'from-pink-900/30 via-purple-950/30 to-[#190206]',
      accentBadge: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
      highlights: [
        'Grand Entry of the Newly-Wed Couple',
        'Blessings, Felicitation & Portrait Session',
        'Exquisite Continental & Traditional Royal Banquet'
      ]
    }
  ];

  const filteredEvents = activeTab === 'all' 
    ? events 
    : events.filter(e => e.id === activeTab);

  const getCalendarUrl = (cal) => {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(cal.title)}&dates=${cal.start}/${cal.end}&details=${encodeURIComponent(cal.details)}&location=${encodeURIComponent(cal.location)}`;
  };

  return (
    <section id="events" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Visual background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-900/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-cinzel text-[#f3db98] bg-[#2a0409] border border-[#d4af37]/30 mb-3">
            <Sparkles size={12} className="text-[#ffd700]" />
            <span>The Wedding Itinerary</span>
            <Sparkles size={12} className="text-[#ffd700]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold gold-gradient-text tracking-wide">
            Celebrations & Ceremonies
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#f0e3cc]/80 max-w-2xl mx-auto mt-2">
            "Three days of timeless Pakistani traditions, heartfelt prayers, and boundless joy."
          </p>

          <FloralGarland className="max-w-md mx-auto" />

          {/* Filter Tabs for Easy Phone Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-cinzel uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold shadow-lg'
                  : 'bg-[#1e0207] text-[#eedcb0]/70 border border-[#d4af37]/30 hover:border-[#d4af37]'
              }`}
            >
              All Events (3)
            </button>
            <button
              onClick={() => setActiveTab('mehndi')}
              className={`px-4 py-2 rounded-full text-xs font-cinzel uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'mehndi'
                  ? 'bg-amber-600 text-amber-50 font-bold shadow-lg'
                  : 'bg-[#1e0207] text-[#eedcb0]/70 border border-amber-500/30 hover:border-amber-400'
              }`}
            >
              Mehndi Night
            </button>
            <button
              onClick={() => setActiveTab('baraat')}
              className={`px-4 py-2 rounded-full text-xs font-cinzel uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'baraat'
                  ? 'bg-rose-700 text-rose-50 font-bold shadow-lg'
                  : 'bg-[#1e0207] text-[#eedcb0]/70 border border-rose-500/30 hover:border-rose-400'
              }`}
            >
              The Grand Baraat
            </button>
            <button
              onClick={() => setActiveTab('walima')}
              className={`px-4 py-2 rounded-full text-xs font-cinzel uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'walima'
                  ? 'bg-pink-700 text-pink-50 font-bold shadow-lg'
                  : 'bg-[#1e0207] text-[#eedcb0]/70 border border-pink-500/30 hover:border-pink-400'
              }`}
            >
              Walima Reception
            </button>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt, idx) => (
            <div
              key={evt.id}
              className={`relative rounded-3xl p-6 sm:p-8 royal-glass border border-[#d4af37]/30 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-[#d4af37]/70 transition-all duration-300 hover:-translate-y-1.5`}
            >
              {/* Event Background Accent */}
              <div className={`absolute inset-0 bg-gradient-to-b ${evt.colorTheme} opacity-60 pointer-events-none`} />

              {/* Top Details & Header */}
              <div className="relative z-10">
                
                {/* Event Badge & Arabic Title */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-cinzel tracking-wider uppercase border ${evt.accentBadge}`}>
                    Function {idx + 1}
                  </span>
                  <span className="font-arabic text-lg text-[#ffd778]">
                    {evt.urdu}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <RealisticRose size={26} color={idx % 2 === 0 ? 'red' : 'pink'} />
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
                    {evt.name}
                  </h3>
                </div>

                <p className="font-cormorant italic text-sm text-[#f0e3cc]/80 mb-6 leading-relaxed">
                  "{evt.tagline}"
                </p>

                {/* Logistics Info (Date, Time, Location) */}
                <div className="space-y-3.5 py-4 border-y border-[#d4af37]/20 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#1e0207] border border-[#d4af37]/30 text-[#f5d061] mt-0.5">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-cinzel uppercase tracking-wider text-[#eedcb0]/60">Date</span>
                      <span className="font-cinzel font-semibold text-[#fef2f2]">{evt.date}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#1e0207] border border-[#d4af37]/30 text-[#f5d061] mt-0.5">
                      <Clock size={16} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-cinzel uppercase tracking-wider text-[#eedcb0]/60">Timing</span>
                      <span className="font-cinzel font-semibold text-[#fef2f2]">{evt.time}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#1e0207] border border-[#d4af37]/30 text-[#f5d061] mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-cinzel uppercase tracking-wider text-[#eedcb0]/60">Venue</span>
                      <span className="font-cinzel font-semibold text-[#fef2f2]">{evt.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Dress Code Recommendation */}
                <div className="my-4 p-3 rounded-xl bg-black/30 border border-white/10">
                  <span className="block text-[10px] font-cinzel uppercase tracking-widest text-[#f5d061] mb-1">
                    Theme & Dress Code
                  </span>
                  <p className="text-xs text-rose-100/90 font-cormorant">
                    {evt.dressCode}
                  </p>
                </div>

                {/* Ceremony Program Highlights */}
                <div className="my-4">
                  <span className="block text-[11px] font-cinzel uppercase tracking-wider text-[#eedcb0]/70 mb-2">
                    Ceremonial Program:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#fef2f2]/90">
                    {evt.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#d4af37] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Buttons: Add to Calendar & Get Directions */}
              <div className="relative z-10 pt-4 mt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                <a
                  href={getCalendarUrl(evt.calendarDetails)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#2a0409] border border-[#d4af37]/50 text-[#f7e7a9] text-xs font-cinzel hover:bg-[#3d060f] transition-all"
                >
                  <CalendarPlus size={14} />
                  <span>Add to Calendar</span>
                </a>
                <a
                  href={evt.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black text-xs font-cinzel font-bold hover:opacity-95 transition-all shadow-md"
                >
                  <Navigation size={14} />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
