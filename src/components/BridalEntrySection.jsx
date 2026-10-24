import React, { useRef, useState } from 'react';
import { RealisticRose, FloralGarland } from './FloralDecorations';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Heart, Film, Sparkles, Image as ImageIcon } from 'lucide-react';

export const BridalEntrySection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="bridal-entry" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-rose-950/30 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-cinzel text-[#f3db98] bg-[#2a0409] border border-[#d4af37]/30 mb-3">
            <Film size={12} className="text-rose-400" />
            <span>Cinematic Wedding Showcase</span>
            <Film size={12} className="text-rose-400" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold gold-gradient-text tracking-wide">
            The Royal Bridal Entry
          </h2>
          <p className="font-cormorant italic text-base sm:text-xl text-[#f0e3cc]/85 max-w-2xl mx-auto mt-2">
            "A breathtaking walk towards forever, blessed with unconditional love, cherished prayers, and petals underfoot."
          </p>

          <FloralGarland className="max-w-md mx-auto" />
        </div>

        {/* Video Cinema Container */}
        <div className="relative max-w-3xl mx-auto rounded-3xl royal-glass gold-border-glow p-3 sm:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Top Cinema Floral Crest */}
          <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-[#d4af37]/25">
            <div className="flex items-center gap-2">
              <RealisticRose size={24} color="pink" />
              <span className="font-cinzel text-xs font-semibold uppercase tracking-widest text-[#f5db98]">
                Dulhan's Royal Walk Down The Aisle
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-rose-300 text-xs font-cinzel">
              <Sparkles size={12} className="text-amber-400" />
              <span>Full HD Video</span>
            </div>
          </div>

          {/* Video Player Wrapper */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner group">
            <video
              ref={videoRef}
              src="/Bride_walking_down_wedding_aisle_20261023203719.mp4"
              playsInline
              preload="metadata"
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Play Overlay Button if Paused */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-black/30"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#aa7c11] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)] transform group-hover:scale-110 transition-transform">
                  <Play size={28} className="text-black fill-black ml-1" />
                </div>
              </div>
            )}

            {/* Floating Luxury Controls Bar */}
            <div className="absolute bottom-3 inset-x-3 sm:inset-x-5 py-2 px-4 rounded-xl royal-glass flex items-center justify-between text-[#eedcb0] opacity-90 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 hover:text-[#ffd778] transition-colors"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-1.5 hover:text-[#ffd778] transition-colors"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button
                  onClick={handleRestart}
                  className="p-1.5 hover:text-[#ffd778] transition-colors"
                  title="Replay from start"
                >
                  <RotateCcw size={16} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-cinzel text-rose-200 hidden sm:inline">
                  Abdullah Ki Dulhan Official Entry
                </span>
                <button
                  onClick={handleFullscreen}
                  className="p-1.5 hover:text-[#ffd778] transition-colors"
                  title="Fullscreen"
                >
                  <Maximize size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Bridal Walk Quote Beneath Video */}
          <div className="mt-4 p-4 rounded-xl bg-[#1e0207]/80 border border-[#d4af37]/20 text-center">
            <p className="font-cormorant italic text-base sm:text-lg text-[#fed7aa]">
              "With red roses lining her path and glowing chandeliers illuminating every step, she walks towards a lifetime of shared dreams and blessed beginnings."
            </p>
            <span className="block text-[11px] font-cinzel uppercase tracking-widest text-[#d4af37] mt-1">
              — Special Bridal Entrance Moment
            </span>
          </div>

        </div>

        {/* Real Reference Wedding Design & Stage Decor Showcase */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-cinzel text-[#eedcb0] bg-black/40 border border-white/10 mb-2">
              <ImageIcon size={12} className="text-[#d4af37]" />
              <span>Royal Stage & Card Inspiration</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-3xl font-bold gold-gradient-text">
              Wedding Decor & Design Elements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Stage Decor Reference Card */}
            <div 
              onClick={() => setActivePhoto('/1.png')}
              className="group cursor-pointer rounded-2xl royal-glass border border-[#d4af37]/30 p-4 overflow-hidden shadow-xl hover:border-[#d4af37]/80 transition-all duration-300"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3">
                <img 
                  src="/1.png" 
                  alt="Royal Pakistani Wedding Stage Decor" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] uppercase tracking-widest font-cinzel text-[#ffd778] px-2 py-0.5 rounded bg-black/60 border border-[#d4af37]/30">
                    Stage Decor Reference
                  </span>
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-white mt-1">
                    Royal Crimson & Rose Stage Setup
                  </h4>
                </div>
              </div>
              <p className="font-cormorant text-xs sm:text-sm text-[#eedcb0]/80">
                Featuring rich velvet burgundy drapes, fairy lights backdrop, gold geometric stands, crystal chandeliers, and lush red and white rose floral arrangements along the aisle.
              </p>
            </div>

            {/* Design Reference Card */}
            <div 
              onClick={() => setActivePhoto('/2.png')}
              className="group cursor-pointer rounded-2xl royal-glass border border-[#d4af37]/30 p-4 overflow-hidden shadow-xl hover:border-[#d4af37]/80 transition-all duration-300"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3">
                <img 
                  src="/2.png" 
                  alt="Royal Islamic Wedding Card Arch Design Reference" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] uppercase tracking-widest font-cinzel text-[#ffd778] px-2 py-0.5 rounded bg-black/60 border border-[#d4af37]/30">
                    Design Reference
                  </span>
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-white mt-1">
                    Mughal Arch & Floral Calligraphy Artwork
                  </h4>
                </div>
              </div>
              <p className="font-cormorant text-xs sm:text-sm text-[#eedcb0]/80">
                Traditional Islamic arch framing with intricate blush pink roses, emerald vine borders, gold foil calligraphy, and the timeless Nikah blessing: "Barakallahu lahuma".
              </p>
            </div>

          </div>
        </div>

        {/* Modal for Expanded Photo Inspection */}
        {activePhoto && (
          <div 
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-[#d4af37] p-2 bg-[#190206]">
              <img src={activePhoto} alt="Zoomed reference" className="max-h-[80vh] w-auto mx-auto rounded-lg" />
              <p className="text-center text-xs font-cinzel text-[#eedcb0] mt-2">
                Click anywhere to close
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
