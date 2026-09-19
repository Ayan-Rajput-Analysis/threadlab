'use client';
import React from 'react';

interface ShopTriggerButtonProps {
  onClick: () => void;
}

export default function ShopTriggerButton({ onClick }: ShopTriggerButtonProps) {
  return (
    <div className="flex items-center justify-center w-full py-20">
      {/* Inspired by Uiverse "Cyber/Neon" buttons */}
      <button 
        onClick={onClick}
        className="group relative inline-flex items-center justify-center px-16 py-8 font-bold text-white tracking-[0.3em] uppercase text-xl overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95"
      >
        {/* Glow behind */}
        <div className="absolute inset-0 bg-[#C9A96E] blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
        
        {/* Border / Shape */}
        <div className="absolute inset-0 border border-white/20 group-hover:border-[#C9A96E]/80 transition-colors duration-700" />
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

        <span className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-[#C9A96E] text-xs font-medium tracking-[0.4em] mb-2 opacity-70">Exclusive Access</span>
          <span>Explore The Collection</span>
        </span>
      </button>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%) skewX(12deg);
          }
        }
      `}</style>
    </div>
  );
}
