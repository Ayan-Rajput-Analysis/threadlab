'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeIn from '@/components/shared/FadeIn';
import AnimatedText from '@/components/shared/AnimatedText';
import Navbar from '@/components/layout/Navbar';
import UiverseButton from '@/components/ui/UiverseButton';
import UiverseCard from '@/components/ui/UiverseCard';
import ShopTriggerButton from '@/components/ui/ShopTriggerButton';
import ShopGallery from '@/components/shared/ShopGallery';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const textureVideoRef = useRef<HTMLVideoElement>(null);
  const [isShopOpen, setIsShopOpen] = useState(false);

  useEffect(() => {
    // Hero content fade out on scroll
    if (heroContentRef.current) {
      gsap.to(heroContentRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        },
      });
    }

    // Texture video scale on scroll (zoom effect)
    if (textureVideoRef.current) {
      gsap.fromTo(
        textureVideoRef.current,
        { scale: 1 },
        {
          scale: 1.3,
          scrollTrigger: {
            trigger: '#process',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="relative w-full overflow-hidden">

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1: HERO (Dark Theme — Mannequin Silhouette)
        ═══════════════════════════════════════════════════════════════ */}
        <section
          id="hero"
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#0A0A0A' }}
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0A0A0A] pointer-events-none" />

          {/* Content */}
          <div
            ref={heroContentRef}
            className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center"
          >
            <span
              className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-8 block"
              style={{ color: '#C9A96E' }}
            >
              Introducing
            </span>

            <AnimatedText
              as="h1"
              className="text-h1 max-w-5xl mx-auto mb-8"
              style={{ color: '#FFFFFF' }}
            >
              A Global Hub for Fashion Manufacturing in 3D
            </AnimatedText>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Where haute couture meets digital innovation. Experience fashion manufacturing
                reimagined through immersive 3D technology.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <UiverseButton href="#craft" variant="gold">
                Explore Our Craft
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M8 3L8 13M8 13L3 8M8 13L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </UiverseButton>
            </FadeIn>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
            <span className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Scroll to explore
            </span>
            <div className="w-[1px] h-16 relative overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <div className="absolute top-0 left-0 w-full h-full animate-scroll-line" style={{ backgroundColor: '#C9A96E' }} />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2: THE CRAFT (Light/Warm Theme — Fabric Ripples)
        ═══════════════════════════════════════════════════════════════ */}
        <section
          id="craft"
          className="relative min-h-screen w-full flex items-center py-32 md:py-40"
          style={{ backgroundColor: '#F5EDE0', color: '#2A1810' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left side: Video */}
              <FadeIn direction="right">
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/videos/fabric.mp4" type="video/mp4" />
                  </video>
                </div>
              </FadeIn>

              {/* Right side: Content */}
              <div className="flex flex-col justify-center">
                <FadeIn delay={0.2}>
                  <span
                    className="font-mono text-xs tracking-[0.3em] uppercase mb-6 block font-bold"
                    style={{ color: '#8B6914' }}
                  >
                    01 — The Craft
                  </span>
                </FadeIn>

                <AnimatedText
                  as="h2"
                  className="text-h2 mb-8"
                  style={{ color: '#2A1810' }}
                >
                  Where Tradition Meets Innovation
                </AnimatedText>

                <FadeIn delay={0.3}>
                  <p className="text-lg font-light leading-relaxed mb-12 max-w-xl" style={{ color: 'rgba(42,24,16,0.8)' }}>
                    Our network spans the globe, uniting centuries-old textile traditions with
                    cutting-edge 3D visualization and sustainable production methods. We are
                    redefining how fashion is made.
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="grid grid-cols-3 gap-8 pt-8" style={{ borderTop: '1px solid rgba(42,24,16,0.1)' }}>
                    {[
                      { num: '500+', label: 'Manufacturers' },
                      { num: '40+', label: 'Countries' },
                      { num: '10K+', label: 'Designs' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <h3 className="text-3xl md:text-4xl font-heading font-light mb-2" style={{ color: '#8B6914' }}>
                          {stat.num}
                        </h3>
                        <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(42,24,16,0.6)' }}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3: PORTFOLIO SHOWCASE (Deep Navy — Orbit 3D Dress)
        ═══════════════════════════════════════════════════════════════ */}
        <section
          id="portfolio"
          className="relative min-h-screen w-full flex items-center py-32 md:py-40"
          style={{ backgroundColor: '#0A1628', color: '#E8E0D4' }}
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          >
            <source src="/videos/orbit.mp4" type="video/mp4" />
          </video>

          {/* Navy overlay */}
          <div className="absolute inset-0 bg-[#0A1628]/75 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
            <FadeIn>
              <span
                className="font-mono text-xs tracking-[0.3em] uppercase mb-6 block font-bold"
                style={{ color: '#D4A853' }}
              >
                02 — Portfolio
              </span>
            </FadeIn>

            <AnimatedText
              as="h2"
              className="text-h2 mb-20"
              style={{ color: '#E8E0D4' }}
            >
              Bringing Visions to Life
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'Haute Couture Collection',
                  desc: 'Bespoke pieces crafted with precision and unparalleled artistry for the modern runway.',
                },
                {
                  num: '02',
                  title: 'Ready-to-Wear Line',
                  desc: 'Scalable production without compromising on quality, delivered with speed and efficiency.',
                },
                {
                  num: '03',
                  title: 'Textile Innovation',
                  desc: 'Pioneering new sustainable fabrics and advanced material engineering for the future.',
                },
              ].map((item, idx) => (
                <FadeIn key={item.num} delay={0.15 * idx} direction="up">
                  <UiverseCard
                    number={`${item.num} / 03`}
                    title={item.title}
                    description={item.desc}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4: THE PROCESS (Earthy — Texture Zoom)
        ═══════════════════════════════════════════════════════════════ */}
        <section
          id="process"
          className="relative min-h-screen w-full flex items-center justify-center py-32 md:py-40 overflow-hidden"
          style={{ backgroundColor: '#1A1410', color: '#E8D5B7' }}
        >
          {/* Background Video with Zoom Effect */}
          <video
            ref={textureVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/texture.mp4" type="video/mp4" />
          </video>

          {/* Earthy overlay */}
          <div className="absolute inset-0 bg-[#1A1410]/75 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
            <FadeIn>
              <span
                className="font-mono text-xs tracking-[0.3em] uppercase mb-6 block font-bold"
                style={{ color: '#C9A96E' }}
              >
                03 — The Process
              </span>
            </FadeIn>

            <AnimatedText
              as="h2"
              className="text-h2 mb-24"
              style={{ color: '#E8D5B7' }}
            >
              Every Thread Tells a Story
            </AnimatedText>

            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-[1px] -translate-y-1/2 z-0" style={{ backgroundColor: 'rgba(232,213,183,0.15)' }} />

              {['Design', 'Prototype', 'Manufacture', 'Deliver'].map((step, idx) => (
                <FadeIn key={step} delay={0.15 * idx} className="relative z-10 w-full md:w-auto">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border-2 mb-6 font-mono text-sm shadow-lg"
                      style={{
                        backgroundColor: '#1A1410',
                        borderColor: '#C9A96E',
                        color: '#C9A96E',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                      }}
                    >
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg tracking-[0.15em] uppercase font-light">{step}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4.5: THE COLLECTION (Central Shop Trigger)
        ═══════════════════════════════════════════════════════════════ */}
        <section
          id="collection"
          className="relative w-full py-20 bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <ShopTriggerButton onClick={() => setIsShopOpen(true)} />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5: CONTACT / CTA (Dark Theme — matching Hero)
        ═══════════════════════════════════════════════════════════════ */}
        <section
          id="contact"
          className="relative py-40 md:py-56 w-full flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <FadeIn>
              <span
                className="font-mono text-xs tracking-[0.3em] uppercase mb-8 block"
                style={{ color: '#C9A96E' }}
              >
                Let&apos;s Work Together
              </span>
            </FadeIn>

            <AnimatedText
              as="h2"
              className="text-h2 mb-10"
              style={{ color: '#FFFFFF' }}
            >
              Ready to Create Something Extraordinary?
            </AnimatedText>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-16" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Join the world&apos;s most innovative fashion brands and transform your production
                process today. Let&apos;s shape the future of apparel together.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <UiverseButton href="mailto:hello@threadlab.com" variant="gold">
                  Start a Project
                </UiverseButton>
                <UiverseButton href="mailto:hello@threadlab.com" variant="outline">
                  hello@threadlab.com
                </UiverseButton>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════════════════════════════ */}
        <footer
          className="w-full py-10"
          style={{
            backgroundColor: '#0A0A0A',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-mono text-[10px] tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
              © {new Date().getFullYear()} THREADLAB. All rights reserved.
            </span>

            <div className="flex gap-8">
              {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-mono text-[10px] tracking-wider uppercase transition-colors duration-300 hover:text-[#C9A96E]"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  {social}
                </a>
              ))}
            </div>

            <span className="font-mono text-[10px] tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Crafted with precision
            </span>
          </div>
        </footer>

        {/* Scroll indicator animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-line {
            0% { transform: translateY(-100%); }
            50% { transform: translateY(0); }
            100% { transform: translateY(100%); }
          }
          .animate-scroll-line {
            animation: scroll-line 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
          }
        `}} />
      </main>

      <ShopGallery isOpen={isShopOpen} onClose={() => setIsShopOpen(false)} />
    </>
  );
}
