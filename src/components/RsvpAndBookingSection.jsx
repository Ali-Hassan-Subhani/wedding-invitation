import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { RealisticRose, FloralGarland } from './FloralDecorations';
import { 
  Send, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Heart, 
  Sparkles, 
  Calendar, 
  Users, 
  ExternalLink,
  Award,
  Globe,
  Smartphone
} from 'lucide-react';

export const RsvpAndBookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    mehndi: true,
    baraat: true,
    walima: true,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [blessings, setBlessings] = useState([
    {
      name: 'Uncle Tariq & Family',
      city: 'Lahore',
      dua: 'MashaAllah! May Allah bless Abdullah and his bride with endless joy, mutual respect, and prosperity.',
      time: 'Just now'
    },
    {
      name: 'Dr. Shahzad & Family',
      city: 'Islamabad',
      dua: 'Barakallahu lakuma wa baraka alaikuma. Heartiest congratulations to both families on this sacred union!',
      time: '1 hour ago'
    },
    {
      name: 'Farhan & Ayesha',
      city: 'Karachi',
      dua: 'So thrilled for Abdullah Ki Dulhan! Looking forward to celebrating all three joyous occasions with you all.',
      time: '3 hours ago'
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const triggerRoseConfetti = () => {
    // Luxury rose petals & golden stars celebration burst
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#be123c', '#ffd700', '#f472b6', '#ffffff'],
      shapes: ['circle', 'square'],
      scalar: 1.2
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Add to live blessings list
    const newBlessing = {
      name: formData.name,
      city: 'Honored Guest',
      dua: formData.message || 'Heartiest congratulations & lots of prayers for Abdullah Ki Dulhan!',
      time: 'Just now'
    };
    setBlessings([newBlessing, ...blessings]);
    setSubmitted(true);
    triggerRoseConfetti();

    // Prepare WhatsApp message
    const attendingEvents = [
      formData.mehndi ? 'Mehndi' : '',
      formData.baraat ? 'Baraat' : '',
      formData.walima ? 'Walima' : ''
    ].filter(Boolean).join(', ');

    const text = `*Wedding RSVP - Abdullah Ki Dulhan*%0A` +
      `*Guest Name:* ${formData.name}%0A` +
      `*Contact:* ${formData.phone || 'N/A'}%0A` +
      `*Number of Guests:* ${formData.guests}%0A` +
      `*Attending Events:* ${attendingEvents || 'All'}%0A` +
      `*Blessing/Message:* ${formData.message || 'Best wishes for the blessed couple!'}`;

    // Open WhatsApp
    const waUrl = `https://wa.me/923145492962?text=${text}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="rsvp-booking" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-rose-950/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-cinzel text-[#f3db98] bg-[#2a0409] border border-[#d4af37]/30 mb-3">
            <Heart size={12} className="text-rose-400 fill-rose-400" />
            <span>Honour Us With Your Presence</span>
            <Heart size={12} className="text-rose-400 fill-rose-400" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold gold-gradient-text tracking-wide">
            RSVP & Send Your Duas
          </h2>
          <p className="font-cormorant italic text-base sm:text-xl text-[#f0e3cc]/85 max-w-2xl mx-auto mt-2">
            "Your presence and prayers are the greatest gift you could bestow upon the newly wedded couple."
          </p>

          <FloralGarland className="max-w-md mx-auto" />
        </div>

        {/* Form and Live Dua Wall Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Interactive RSVP Card (7 cols) */}
          <div className="lg:col-span-7 royal-glass rounded-3xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#d4af37]/20">
              <div className="flex items-center gap-2">
                <RealisticRose size={28} color="red" />
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f7e7a9]">
                  Confirm Attendance
                </h3>
              </div>
              <span className="text-[11px] font-cinzel text-emerald-400 flex items-center gap-1">
                <Sparkles size={12} /> Instant WhatsApp RSVP
              </span>
            </div>

            {submitted ? (
              <div className="py-10 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle size={36} />
                </div>
                <h4 className="font-cinzel text-xl font-bold gold-gradient-text mb-2">
                  JazakAllah Khair! RSVP Received
                </h4>
                <p className="font-cormorant text-base text-[#fbf5ee]/90 max-w-md mx-auto mb-6">
                  Thank you, <span className="text-[#ffd778] font-bold">{formData.name}</span>. Your blessings and attendance details have been recorded and forwarded. We eagerly look forward to welcoming you!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-cinzel bg-[#2a0409] border border-[#d4af37]/50 text-[#f7e7a9] hover:bg-[#3d060f] transition-all"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel text-[#eedcb0]/90 mb-1.5 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Muhammad Farooq"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#d4af37]/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel text-[#eedcb0]/90 mb-1.5 uppercase tracking-wider">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="03XX-XXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#d4af37]/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-[#eedcb0]/90 mb-1.5 uppercase tracking-wider">
                    Total Attending Guests / Family Members
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-[#d4af37]/30 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="1">1 Person (Self)</option>
                    <option value="2">2 Persons (Couple)</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Persons (Family)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-[#eedcb0]/90 mb-2 uppercase tracking-wider">
                    Which Ceremonies Will You Grace?
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${formData.mehndi ? 'bg-amber-950/40 border-amber-500 text-amber-200' : 'bg-black/30 border-white/10 text-zinc-400'}`}>
                      <input
                        type="checkbox"
                        name="mehndi"
                        checked={formData.mehndi}
                        onChange={handleInputChange}
                        className="rounded accent-amber-500"
                      />
                      <span>Mehndi</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${formData.baraat ? 'bg-rose-950/40 border-rose-500 text-rose-200' : 'bg-black/30 border-white/10 text-zinc-400'}`}>
                      <input
                        type="checkbox"
                        name="baraat"
                        checked={formData.baraat}
                        onChange={handleInputChange}
                        className="rounded accent-rose-500"
                      />
                      <span>Baraat</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${formData.walima ? 'bg-pink-950/40 border-pink-500 text-pink-200' : 'bg-black/30 border-white/10 text-zinc-400'}`}>
                      <input
                        type="checkbox"
                        name="walima"
                        checked={formData.walima}
                        onChange={handleInputChange}
                        className="rounded accent-pink-500"
                      />
                      <span>Walima</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-[#eedcb0]/90 mb-1.5 uppercase tracking-wider">
                    Your Heartfelt Dua / Best Wishes for the Couple
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your prayers, well wishes, or dietary notes..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#d4af37]/30 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a9] to-[#aa7c11] text-black font-cinzel font-bold text-sm uppercase tracking-wider hover:opacity-95 transform active:scale-98 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Send RSVP & Blessings via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Digital Dua & Blessings Wall (5 cols) */}
          <div className="lg:col-span-5 royal-glass rounded-3xl p-6 sm:p-8 border border-[#d4af37]/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#d4af37]/20">
                <div className="flex items-center gap-2">
                  <RealisticRose size={26} color="pink" />
                  <h3 className="font-cinzel text-lg font-bold gold-gradient-text">
                    Digital Dua Wall
                  </h3>
                </div>
                <span className="text-xs font-cinzel text-rose-300">
                  {blessings.length} Blessings
                </span>
              </div>

              <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1">
                {blessings.map((b, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-black/30 border border-white/5 relative group hover:border-[#d4af37]/40 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-cinzel font-semibold text-[#f7e7a9]">
                        {b.name}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-cinzel">
                        {b.time}
                      </span>
                    </div>
                    <p className="font-cormorant italic text-sm text-[#fef2f2]/90 leading-relaxed">
                      "{b.dua}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <p className="font-arabic text-sm text-[#ffd778]">
                جَزَاكُمُ اللَّهُ خَيْرًا وَبَارَكَ فِيكُمْ
              </p>
              <p className="text-[11px] font-cinzel text-[#eedcb0]/70 mt-0.5">
                May Allah reward you all with endless blessings.
              </p>
            </div>
          </div>

        </div>

        {/* ALI DIGITAL HUB SIGNATURE BOOKING SECTION (Required) */}
        <div className="relative rounded-3xl p-8 sm:p-12 royal-glass gold-border-glow shadow-[0_15px_50px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Background Decorative Crest */}
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-emerald-500/10 rounded-full filter blur-[50px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-48 h-48 bg-amber-500/10 rounded-full filter blur-[50px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-cinzel uppercase tracking-widest text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 mb-4">
                <Award size={14} className="text-emerald-400" />
                <span>Signature Digital Invitation Suite</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-2">
                Crafted with Royal Elegance by <span className="gold-gradient-text">Ali Digital Hub</span>
              </h3>

              <p className="font-cormorant text-base sm:text-lg text-[#eedcb0]/90 leading-relaxed mb-6">
                Want a personalized, luxury wedding invitation website like <span className="text-[#ffd778] font-semibold">Abdullah Ki Dulhan</span>? We design bespoke digital wedding experiences with bridal-entry videos, interactive RSVP, ceremony itineraries, Google Maps directions, and background wedding music for families worldwide.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-cinzel text-[#fef2f2]/90 mb-6">
                <div className="flex items-center gap-2">
                  <Smartphone size={14} className="text-[#d4af37]" />
                  <span>100% Mobile Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#d4af37]" />
                  <span>Custom Video Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-[#d4af37]" />
                  <span>Global Web Access</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/50 border border-[#d4af37]/30 inline-block">
                <span className="block text-[11px] font-cinzel uppercase tracking-widest text-[#eedcb0]/70 mb-0.5">
                  Official Booking & Inquiry Hotline:
                </span>
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#ffd778] tracking-wider">
                  0314-5492962
                </span>
              </div>
            </div>

            {/* Right Action Callouts */}
            <div className="flex flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href="https://wa.me/923145492962?text=Hello%20Ali%20Digital%20Hub,%20I%20am%20interested%20in%20booking%20a%20luxury%20wedding%20invitation%20website%20like%20Abdullah%20Ki%20Dulhan."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-cinzel text-sm font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle size={18} />
                <span>Book on WhatsApp (0314-5492962)</span>
              </a>

              <a
                href="tel:03145492962"
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#1e0207] border border-[#d4af37]/60 hover:bg-[#34040d] text-[#f7e7a9] font-cinzel text-sm font-semibold uppercase tracking-wider shadow-md transition-all active:scale-95"
              >
                <Phone size={16} className="text-[#d4af37]" />
                <span>Call Ali Digital Hub Directly</span>
              </a>
            </div>

          </div>
        </div>

        {/* Royal Footer */}
        <footer className="mt-16 text-center text-xs text-[#eedcb0]/60 font-cinzel space-y-2">
          <p className="tracking-widest uppercase">
            Abdullah Ki Dulhan • The Royal Pakistani Wedding Celebration
          </p>
          <p className="text-[11px] text-zinc-400">
            Digital Experience Designed & Developed with Passion by{' '}
            <a 
              href="tel:03145492962" 
              className="text-[#ffd778] hover:underline font-semibold"
            >
              Ali Digital Hub (0314-5492962)
            </a>
          </p>
          <p className="text-[10px] text-zinc-500">
            © 2026 All Rights Reserved • Surrounded by Blessings & Love
          </p>
        </footer>

      </div>
    </section>
  );
};
