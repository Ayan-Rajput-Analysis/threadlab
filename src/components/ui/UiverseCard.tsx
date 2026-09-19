'use client';
import React from 'react';

interface GlassCard3DProps {
  title: string;
  description: string;
  number: string;
}

export default function GlassCard3D({ title, description, number }: GlassCard3DProps) {
  return (
    <div className="group relative w-full h-full p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(212,168,83,0.2)] transition-all duration-500 hover:-translate-y-2 hover:rotate-1 flex flex-col justify-between">
      {/* 3D Glowing Accent Gradient (from PDF) */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#D4A853] to-[#C9A96E] opacity-0 group-hover:opacity-30 blur-xl transition duration-500 -z-10" />
      
      <div>
        <span className="text-xs font-semibold px-4 py-2 rounded-full bg-[#D4A853]/10 text-[#D4A853] border border-[#D4A853]/30 tracking-widest">
          {number}
        </span>
        <h3 className="mt-10 text-2xl md:text-3xl font-light text-white group-hover:text-[#D4A853] transition-colors">{title}</h3>
      </div>
      
      <p className="mt-8 text-sm md:text-base text-slate-300 leading-relaxed font-light">
        {description}
      </p>
      
      {/* Decorative arrow that slides in */}
      <div className="mt-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
