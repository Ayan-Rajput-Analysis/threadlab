'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  children: string;
  /** HTML tag to render */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** Split mode — animate by word or character */
  splitBy?: 'word' | 'char';
  /** Stagger delay between each unit */
  stagger?: number;
  /** Additional className */
  className?: string;
  /** Inline style */
  style?: React.CSSProperties;
}

/**
 * Scroll-triggered text reveal animation.
 * Splits text into words or characters and animates them in sequence.
 */
export default function AnimatedText({
  children,
  as: Tag = 'h2',
  splitBy = 'word',
  stagger = 0.05,
  className = '',
  style = {},
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const units = splitBy === 'word'
    ? children.split(' ')
    : children.split('');

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const spans = containerRef.current.querySelectorAll('.anim-unit');

    gsap.fromTo(
      spans,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, [stagger, prefersReducedMotion]);

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={style}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          className="anim-unit inline-block"
          style={prefersReducedMotion ? {} : { opacity: 0 }}
        >
          {unit}
          {splitBy === 'word' && i < units.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
}
