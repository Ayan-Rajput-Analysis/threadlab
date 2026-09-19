'use client';
import React from 'react';

interface UiverseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'gold' | 'dark' | 'outline';
}

export default function UiverseButton({ 
  children, 
  href, 
  className = '', 
  variant = 'gold',
  ...props 
}: UiverseButtonProps) {
  
  // Uiverse.io inspired "Sweep" & "Glow" button
  const baseClasses = "relative inline-flex items-center justify-center overflow-hidden font-medium transition-all duration-500 active:scale-95 group uppercase tracking-[0.2em] text-xs md:text-sm h-14 px-10";
  
  let variantClasses = "";
  if (variant === 'gold') {
    variantClasses = "border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black hover:shadow-[0_0_30px_rgba(201,169,110,0.4)]";
  } else if (variant === 'dark') {
    variantClasses = "border border-[#2A1810] text-[#2A1810] hover:bg-[#2A1810] hover:text-[#F5EDE0] hover:shadow-[0_0_30px_rgba(42,24,16,0.3)]";
  } else if (variant === 'outline') {
    variantClasses = "border border-white/30 text-white hover:border-white hover:bg-white hover:text-black";
  }

  const content = (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {/* Sweep overlay */}
      <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-15deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-15deg)_translateX(150%)]">
        <div className="relative h-full w-12 bg-white/30 blur-[4px]" />
      </span>
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={props.onClick as any}>
        {content}
      </a>
    );
  }
  return content;
}
