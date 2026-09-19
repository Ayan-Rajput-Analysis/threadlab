'use client'

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface VideoSectionProps {
  src: string;
  overlay?: boolean;
  overlayColor?: string;
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export default function VideoSection({
  src,
  overlay = false,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  className = '',
  children,
  id
}: VideoSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[130%] object-cover -z-10 origin-top"
      />
      
      {overlay && (
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: overlayColor }}
        />
      )}

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}
