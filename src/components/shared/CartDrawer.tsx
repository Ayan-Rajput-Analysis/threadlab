'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCartStore();

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#0A0A0A] border-l border-white/10 shadow-2xl h-full flex flex-col animate-[slideInRight_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold tracking-widest uppercase text-white flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#C9A96E]" />
            Your Cart
          </h2>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" data-lenis-prevent="true">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-white/40 space-y-4">
              <ShoppingBag className="w-12 h-12 opacity-20" />
              <p className="tracking-widest uppercase text-sm">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 relative group">
                <div className="relative w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={item.src} alt={item.name} fill className="object-cover" />
                </div>
                
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <h3 className="text-white font-medium text-sm mb-1">{item.name}</h3>
                    <p className="text-[#C9A96E] text-sm font-semibold">{item.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-black/50 rounded-lg p-1 border border-white/10">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 hover:text-[#C9A96E] text-white/60 transition-colors cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-[#C9A96E] text-white/60 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-400/60 hover:text-red-400 uppercase tracking-wider underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#050505]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white/60 uppercase tracking-widest text-sm">Subtotal</span>
              <span className="text-2xl font-bold text-white">${totalPrice.toLocaleString()}</span>
            </div>
            
            <button className="w-full py-4 bg-[#C9A96E] text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
