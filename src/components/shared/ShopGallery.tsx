'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';

interface ShopGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUITS = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  src: `/images/suit_${i + 1}.jpg`,
  name: `Suit Collection No. ${i + 1}`,
  price: '$' + (1200 + i * 150).toLocaleString(),
}));

export default function ShopGallery({ isOpen, onClose }: ShopGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedSuit, setSelectedSuit] = useState<number | null>(null);
  const [addedStatus, setAddedStatus] = useState<Record<number, boolean>>({});

  const handleAddToCart = (e: React.MouseEvent, suit: any) => {
    e.stopPropagation();
    useCartStore.getState().addItem(suit);
    
    // Trigger added animation state
    setAddedStatus(prev => ({ ...prev, [suit.id]: true }));
    
    // Animate cart icon
    gsap.fromTo('#gallery-cart-btn', 
      { scale: 1 }, 
      { scale: 1.2, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.inOut' }
    );
    
    setTimeout(() => {
      setAddedStatus(prev => ({ ...prev, [suit.id]: false }));
    }, 1500);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
      document.documentElement.style.overflow = 'hidden'; // Hide root scrollbar completely
      
      gsap.to(containerRef.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power3.inOut',
      });

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 100, scale: 0.9, rotationX: 15 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            delay: 0.2,
          }
        );
      }
    } else {
      document.body.style.overflow = ''; 
      document.documentElement.style.overflow = '';
      gsap.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.4,
      });
      setSelectedSuit(null);
    }
    
    return () => { 
      document.body.style.overflow = ''; 
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      ref={containerRef}
      data-lenis-prevent="true"
      className="fixed inset-0 z-[100] invisible bg-[#0A0A0A]/95 backdrop-blur-xl overflow-y-auto overflow-x-hidden overscroll-contain"
    >
      <div className="min-h-screen w-full relative py-24 px-6 md:px-12">
        <div className="fixed top-8 right-8 z-[110] flex items-center gap-4">
          <button 
            id="gallery-cart-btn"
            onClick={() => useCartStore.getState().setIsOpen(true)}
            className="bg-black/50 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-white hover:border-white/30 transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="text-sm font-bold text-[#C9A96E]">{useCartStore((state) => state.totalItems)} Items</span>
          </button>
          
          <button 
            onClick={onClose}
            className="text-white tracking-widest text-sm uppercase hover:text-[#C9A96E] transition-colors bg-black/50 px-4 py-2 rounded-full border border-white/10"
          >
            Close [X]
          </button>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20 tracking-[0.3em]">
            THE COLLECTION
          </h2>

          <div 
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            style={{ perspective: '1200px' }}
          >
            {SUITS.map((suit, i) => (
              <div
                key={suit.id}
                onClick={() => setSelectedSuit(selectedSuit === i ? null : i)}
                className={`relative cursor-pointer group transition-all duration-700 w-full aspect-[2/3] transform-style-3d ${
                  selectedSuit === i ? 'scale-105 z-50' : 'hover:scale-105 z-10'
                }`}
              >
                {/* Uiverse Hover Card Effect */}
                <div className={`w-full h-full relative transition-all duration-700 ease-out 
                  ${selectedSuit === i ? 'shadow-[0_0_50px_rgba(201,169,110,0.6)]' : 'shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]'}
                `}>
                  <div className="absolute inset-0 bg-[#111] overflow-hidden rounded-md border border-white/10 group-hover:border-[#C9A96E]/60 transition-colors duration-500">
                    <Image
                      src={suit.src}
                      alt={suit.name}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        selectedSuit === i ? 'opacity-100 scale-110' : 'opacity-80 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                  
                  {/* Info Panel that slides up on hover or click */}
                  <div className={`absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transition-all duration-500
                    ${selectedSuit === i 
                      ? 'h-full opacity-100 justify-center items-center text-center bg-black/70 backdrop-blur-sm' 
                      : 'h-1/2 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0'}
                  `}>
                    <h3 className="text-white font-medium tracking-widest mb-2 text-lg">{suit.name}</h3>
                    <p className="text-[#C9A96E] text-md tracking-widest mb-6">{suit.price}</p>
                    
                    {selectedSuit === i && (
                      <button 
                        onClick={(e) => handleAddToCart(e, suit)}
                        className={`px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 animate-[fadeIn_0.5s_ease-out] cursor-pointer active:scale-95 flex items-center justify-center gap-2 min-w-[200px] ${
                          addedStatus[suit.id] 
                            ? 'bg-green-500 text-white hover:bg-green-400' 
                            : 'bg-[#C9A96E] text-black hover:bg-white'
                        }`}
                      >
                        {addedStatus[suit.id] ? (
                          <>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-[bounce_0.5s_ease-out]">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Added!</span>
                          </>
                        ) : (
                          <span>Add to Cart</span>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
