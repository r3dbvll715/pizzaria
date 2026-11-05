import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Menu, X, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PIZZERIA_INFO } from '../data/menu';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, subtotal, openCart, openReservation } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ementa', href: '#ementa' },
    { name: 'Forno a Lenha', href: '#forno' },
    { name: 'A Nossa História', href: '#historia' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <>
      {/* Italian Flag Strip */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-white to-red-600 z-50" />

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-pizza-dark/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/40'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pizza-darkred via-pizza-red to-pizza-amber flex items-center justify-center shadow-lg shadow-pizza-red/30 group-hover:scale-105 transition-transform">
                <span className="text-2xl" role="img" aria-label="Pizza">🍕</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  {PIZZERIA_INFO.name}
                  <span className="text-[10px] uppercase font-sans tracking-widest bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 rounded-full font-semibold">
                    DOP
                  </span>
                </span>
                <span className="text-[11px] font-sans tracking-widest text-pizza-amber uppercase font-medium">
                  {PIZZERIA_INFO.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pizza-amber transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Call Link */}
              <a
                href={`tel:${PIZZERIA_INFO.phone}`}
                className="hidden sm:flex items-center gap-2 text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
                title="Ligar para o restaurante"
              >
                <Phone className="w-3.5 h-3.5 text-pizza-amber" />
                <span className="font-mono">{PIZZERIA_INFO.phone}</span>
              </a>

              {/* Reserve Table Button */}
              <button
                onClick={openReservation}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all hover:scale-105"
              >
                <Calendar className="w-3.5 h-3.5 text-pizza-amber" />
                <span>Reservar Mesa</span>
              </button>

              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-pizza-red to-pizza-darkred hover:from-red-500 hover:to-red-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-pizza-red/30 transition-all hover:scale-105 active:scale-95"
                aria-label="Ver carrinho"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Carrinho</span>
                {totalItemsCount > 0 ? (
                  <span className="flex items-center justify-center bg-pizza-amber text-slate-950 font-bold text-xs px-2 py-0.5 rounded-full">
                    {totalItemsCount} • {subtotal.toFixed(2)}€
                  </span>
                ) : (
                  <span className="text-white/80 text-xs">0€</span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10 lg:hidden"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-pizza-dark/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 mt-3 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-medium text-slate-200 hover:text-pizza-amber py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openReservation();
                  }}
                  className="w-full py-3 rounded-xl bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-pizza-amber" />
                  <span>Reservar Mesa no Restaurante</span>
                </button>

                <a
                  href={`tel:${PIZZERIA_INFO.phone}`}
                  className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-pizza-amber" />
                  <span>Ligar: {PIZZERIA_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
