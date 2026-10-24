import React, { useState } from 'react';
import { AudioPlayer } from './AudioPlayer';
import { Menu, X, Heart, Sparkles, PhoneCall } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Announcement', href: '#hero' },
    { name: 'Sacred Union', href: '#quotes' },
    { name: 'Celebrations', href: '#events' },
    { name: 'Bridal Entry', href: '#bridal-entry' },
    { name: 'RSVP & Booking', href: '#rsvp-booking' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full royal-glass shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
        {/* Royal Monogram / Brand */}
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] via-[#aa7c11] to-[#5c0b1a] flex items-center justify-center p-[1px] shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            <div className="w-full h-full bg-[#1e0207] rounded-full flex items-center justify-center">
              <span className="font-cinzel text-xs font-bold text-[#f7e7a9]">A&D</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider gold-gradient-text uppercase">
              Abdullah Ki Dulhan
            </span>
            <span className="text-[10px] text-rose-300/70 font-script -mt-1 hidden sm:inline">
              Royal Wedding Celebration
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs uppercase tracking-widest font-cinzel text-[#eedcb0]/85 hover:text-[#fde68a] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#d4af37] to-[#f472b6] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Controls: Music + Contact CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2.5">
          <AudioPlayer />

          <a
            href="tel:03145492962"
            title="Ali Digital Hub: 0314-5492962"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-cinzel border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 hover:bg-emerald-900/60 transition-all shadow-[0_0_12px_rgba(16,185,129,0.2)]"
          >
            <PhoneCall size={12} className="text-emerald-400" />
            <span>0314-5492962</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-[#eedcb0] hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto royal-glass rounded-2xl p-5 border border-[#d4af37]/30 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="py-2 px-3 text-sm font-cinzel uppercase tracking-wider text-[#eedcb0] hover:text-[#ffd778] hover:bg-white/5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="tel:03145492962"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-emerald-200 text-xs font-cinzel"
              >
                <PhoneCall size={14} />
                <span>Ali Digital Hub: 0314-5492962</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
