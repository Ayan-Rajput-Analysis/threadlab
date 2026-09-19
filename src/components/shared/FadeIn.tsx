'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children?: React.ReactNode;
  /** Direction to fade in from */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

/**
 * Scroll-triggered fade-in animation wrapper.
 * Respects prefers-reduced-motion.
 */
export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  style = {},
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const el = ref.current;

    // Starting position based on direction
    const fromVars: gsap.TweenVars = {
      opacity: 0,
      ...(direction === 'up' && { y: 40 }),
      ...(direction === 'down' && { y: -40 }),
      ...(direction === 'left' && { x: 40 }),
      ...(direction === 'right' && { x: -40 }),
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    };

    gsap.fromTo(el, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [direction, delay, duration, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(prefersReducedMotion ? {} : { opacity: 0 }),
      }}
    >
      {children}
    </div>
  );
}
