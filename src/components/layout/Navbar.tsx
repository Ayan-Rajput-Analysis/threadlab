'use client';

import React, { useState, useEffect } from 'react';

import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';

const SECTIONS = ['hero', 'craft', 'portfolio', 'process', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.totalItems);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const isLight = activeSection === 'craft';

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
    scrolled ? 'backdrop-blur-md ' + (isLight ? 'bg-white/70' : 'bg-black/70') : 'bg-transparent'
  }`;

  const textClass = isLight ? 'text-[#2A1810]' : 'text-white';
  const accentClass = isLight ? 'text-[#8B6914]' : 'text-[#C9A96E]';
  const menuBtnClass = isLight ? 'bg-[#2A1810]' : 'bg-white';

  const links = [
    { name: 'Home', id: 'hero' },
    { name: 'The Craft', id: 'craft' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a 
                href="#hero" 
                onClick={(e) => scrollToSection('hero', e)}
                className={`font-bold text-2xl tracking-[0.2em] transition-colors duration-500 ${textClass}`}
              >
                THREAD<span className={accentClass}>LAB</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(link.id, e)}
                  className={`text-sm tracking-widest uppercase font-medium transition-colors duration-500 hover:opacity-70 ${textClass} ${activeSection === link.id ? accentClass : ''}`}
                  style={activeSection === link.id ? { color: isLight ? '#8B6914' : '#C9A96E' } : {}}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Cart Button */}
              <button 
                onClick={() => useCartStore.getState().setIsOpen(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${isLight ? 'bg-[#2A1810]/5 border-[#2A1810]/10' : 'bg-white/5 border-white/10'}`}
              >
                <ShoppingBag className={`w-4 h-4 ${accentClass}`} />
                <span className={`text-xs font-bold ${textClass}`}>{cartCount} Items</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => useCartStore.getState().setIsOpen(true)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border cursor-pointer ${isLight ? 'bg-[#2A1810]/5 border-[#2A1810]/10' : 'bg-white/5 border-white/10'}`}
              >
                <ShoppingBag className={`w-4 h-4 ${accentClass}`} />
                <span className={`text-xs font-bold ${textClass}`}>{cartCount}</span>
              </button>
              
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              >
                <span className={`block w-6 h-0.5 transition-all duration-300 ${menuBtnClass} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 transition-all duration-300 ${menuBtnClass} ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 transition-all duration-300 ${menuBtnClass} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} ${isLight ? 'bg-[#F5EDE0]' : 'bg-[#0A0A0A]'}`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(link.id, e)}
                className={`block px-3 py-3 text-base font-medium tracking-wider uppercase transition-colors duration-500 ${textClass} ${activeSection === link.id ? accentClass : ''}`}
                style={activeSection === link.id ? { color: isLight ? '#8B6914' : '#C9A96E' } : {}}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
