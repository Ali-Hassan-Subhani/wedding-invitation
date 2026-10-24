import React, { useEffect, useState } from 'react';

// Realistic Rose SVG with deep velvet red, crimson, and blush pink gradients
export const RealisticRose = ({ size = 64, color = 'red', className = '' }) => {
  const isPink = color === 'pink';
  
  const petalGradient1 = isPink 
    ? { id: 'pinkPetalGrad1', start: '#fda4af', mid: '#f43f5e', end: '#be123c' }
    : { id: 'redPetalGrad1', start: '#e11d48', mid: '#9f1239', end: '#4c0519' };
    
  const petalGradient2 = isPink
    ? { id: 'pinkPetalGrad2', start: '#fecdd3', mid: '#fb7185', end: '#e11d48' }
    : { id: 'redPetalGrad2', start: '#f43f5e', mid: '#be123c', end: '#881337' };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] ${className}`}
    >
      <defs>
        <radialGradient id={petalGradient1.id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={petalGradient1.start} />
          <stop offset="60%" stopColor={petalGradient1.mid} />
          <stop offset="100%" stopColor={petalGradient1.end} />
        </radialGradient>
        <radialGradient id={petalGradient2.id} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor={petalGradient2.start} />
          <stop offset="70%" stopColor={petalGradient2.mid} />
          <stop offset="100%" stopColor={petalGradient2.end} />
        </radialGradient>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d6a4f" />
          <stop offset="60%" stopColor="#1b4332" />
          <stop offset="100%" stopColor="#081c15" />
        </linearGradient>
        <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>

      {/* Realistic Leaves */}
      <path d="M22 62C12 55 10 40 18 30C28 35 34 46 32 58Z" fill="url(#leafGrad)" />
      <path d="M22 62C16 52 20 42 24 38" stroke="url(#goldAcc)" strokeWidth="0.8" opacity="0.6" />
      <path d="M78 62C88 55 90 40 82 30C72 35 66 46 68 58Z" fill="url(#leafGrad)" />
      <path d="M78 62C84 52 80 42 76 38" stroke="url(#goldAcc)" strokeWidth="0.8" opacity="0.6" />
      <path d="M50 82C40 92 25 88 20 78C30 76 42 78 50 82Z" fill="url(#leafGrad)" />

      {/* Outer Petals Layer 1 */}
      <path d="M50 12C32 12 18 28 20 46C22 64 38 78 50 82C62 78 78 64 80 46C82 28 68 12 50 12Z" 
            fill={`url(#${petalGradient1.id})`} />
      
      {/* Outer Petals Layer 2 - Left curve */}
      <path d="M24 36C20 48 26 64 42 72C36 60 32 44 38 32C32 30 26 32 24 36Z" 
            fill={`url(#${petalGradient2.id})`} opacity="0.9" />
      
      {/* Outer Petals Layer 2 - Right curve */}
      <path d="M76 36C80 48 74 64 58 72C64 60 68 44 62 32C68 30 74 32 76 36Z" 
            fill={`url(#${petalGradient2.id})`} opacity="0.9" />

      {/* Mid Petals */}
      <path d="M50 26C38 26 30 36 32 50C34 62 44 68 50 70C56 68 66 62 68 50C70 36 62 26 50 26Z" 
            fill={`url(#${petalGradient1.id})`} />
      <path d="M34 40C36 54 44 62 54 64C48 56 46 44 48 36C40 34 36 36 34 40Z" 
            fill={`url(#${petalGradient2.id})`} />
      <path d="M66 40C64 54 56 62 46 64C52 56 54 44 52 36C60 34 64 36 66 40Z" 
            fill={`url(#${petalGradient2.id})`} />

      {/* Inner Petal Heart */}
      <path d="M50 36C44 36 40 42 42 48C44 54 50 58 50 58C50 58 56 54 58 48C60 42 56 36 50 36Z" 
            fill={`url(#${petalGradient2.id})`} />
      <ellipse cx="50" cy="45" rx="5" ry="6" fill="#ffe4e6" opacity="0.25" />

      {/* Gold Dew Drops / Glitter Accent */}
      <circle cx="42" cy="38" r="1.5" fill="#fef08a" opacity="0.8" />
      <circle cx="58" cy="48" r="1.2" fill="#fef08a" opacity="0.7" />
    </svg>
  );
};

// Royal Floral Garland / Arch Divider with alternating Red and Pink Roses
export const FloralGarland = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center my-6 overflow-hidden py-3 ${className}`}>
      {/* Decorative Gold Filigree Line */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"></div>
      
      {/* Center Cluster with Red & Pink Roses */}
      <div className="relative z-10 flex items-center gap-2 sm:gap-4 px-6 bg-[#170206] border border-[#d4af37]/30 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)]">
        <RealisticRose size={28} color="pink" className="transform -rotate-12" />
        <RealisticRose size={36} color="red" className="transform rotate-6" />
        <div className="text-center px-1">
          <span className="block text-[#f3db98] font-cinzel text-xs tracking-widest uppercase">❦</span>
        </div>
        <RealisticRose size={36} color="red" className="transform -rotate-6" />
        <RealisticRose size={28} color="pink" className="transform rotate-12" />
      </div>
    </div>
  );
};

// Luxury Corner Floral Accents for Cards & Sections
export const FloralCorner = ({ position = 'top-left' }) => {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');

  return (
    <div 
      className={`absolute pointer-events-none z-20 ${
        isTop ? 'top-[-14px]' : 'bottom-[-14px]'
      } ${
        isLeft ? 'left-[-14px]' : 'right-[-14px]'
      } ${!isTop ? 'rotate-180' : ''} ${!isLeft ? '-scale-x-100' : ''}`}
    >
      <div className="relative flex items-center">
        <RealisticRose size={40} color="red" className="transform -rotate-15" />
        <RealisticRose size={30} color="pink" className="transform -ml-3 mt-3 rotate-25" />
      </div>
    </div>
  );
};

// Floating Rose Petals Animation Background
export const FloatingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate realistic random falling petals
    const newPetals = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: `${(i * 4.6 + Math.random() * 4).toFixed(1)}%`,
      delay: `${(Math.random() * 12).toFixed(2)}s`,
      duration: `${(10 + Math.random() * 10).toFixed(2)}s`,
      size: 14 + Math.floor(Math.random() * 14),
      isPink: i % 2 === 0,
      opacity: 0.5 + Math.random() * 0.45,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal-particle"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-45 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          >
            <path
              d="M12 2C7 2 2 9 2 17C2 24 7 30 12 30C17 30 22 24 22 17C22 9 17 2 12 2Z"
              fill={petal.isPink ? 'url(#pinkPetalGrad)' : 'url(#redPetalGrad)'}
            />
            <path
              d="M12 4C10 9 10 18 12 28"
              stroke="#ffd700"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
            <defs>
              <linearGradient id="redPetalGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#4c0519" />
              </linearGradient>
              <linearGradient id="pinkPetalGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fecdd3" />
                <stop offset="50%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};
