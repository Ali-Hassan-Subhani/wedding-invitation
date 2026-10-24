import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Play classical Pakistani wedding scale notes (Bhairavi / Yaman meditative raga notes)
  const playRagaTone = (freq, duration, type = 'sine') => {
    if (!audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Warm gentle envelope like a plucked sitar & gentle shehnai drone
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // AudioContext might be blocked or waiting for gesture
    }
  };

  const startMusic = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    const melodyFrequencies = [
      261.63, // Sa (C4)
      293.66, // Re (D4)
      329.63, // Ga (E4)
      349.23, // Ma (F4)
      392.00, // Pa (G4)
      440.00, // Dha (A4)
      493.88, // Ni (B4)
      523.25  // Sa' (C5)
    ];

    // Elegant peaceful wedding cadence
    const sequence = [
      { note: 261.63, dur: 2.2 },
      { note: 329.63, dur: 1.8 },
      { note: 392.00, dur: 2.0 },
      { note: 440.00, dur: 1.6 },
      { note: 392.00, dur: 2.4 },
      { note: 523.25, dur: 2.8 },
      { note: 493.88, dur: 1.8 },
      { note: 440.00, dur: 2.0 },
      { note: 392.00, dur: 2.5 },
      { note: 329.63, dur: 2.2 },
      { note: 293.66, dur: 2.0 },
      { note: 261.63, dur: 3.5 }
    ];

    let step = 0;
    playRagaTone(sequence[step].note, sequence[step].dur, 'triangle');
    // Soft drone baseline (Tanpura drone on Sa & Pa)
    playRagaTone(130.81, 4.0, 'sine');
    playRagaTone(196.00, 4.0, 'sine');

    intervalRef.current = setInterval(() => {
      step = (step + 1) % sequence.length;
      playRagaTone(sequence[step].note, sequence[step].dur, 'triangle');
      if (step % 3 === 0) {
        // Continuous gentle tanpura drone
        playRagaTone(130.81, 3.5, 'sine');
        playRagaTone(196.00, 3.5, 'sine');
      }
    }, 1800);

    setIsPlaying(true);
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      title={isPlaying ? 'Mute Royal Wedding Chime' : 'Play Royal Wedding Chime'}
      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a0409]/90 border border-[#d4af37]/50 text-[#fbf5ee] text-xs font-cinzel hover:bg-[#430811] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] backdrop-blur-md active:scale-95"
    >
      <Music size={14} className={isPlaying ? 'text-[#f5d061] animate-bounce' : 'text-[#d4af37]'} />
      <span className="hidden sm:inline">
        {isPlaying ? 'Wedding Music Playing' : 'Play Music'}
      </span>
      {isPlaying ? (
        <Volume2 size={16} className="text-[#f5d061]" />
      ) : (
        <VolumeX size={16} className="text-zinc-400" />
      )}
    </button>
  );
};
