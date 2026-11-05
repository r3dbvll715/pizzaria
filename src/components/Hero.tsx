import React from 'react';
import { Flame, Clock, Award, Bike, ArrowRight, Calendar, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PIZZERIA_INFO } from '../data/menu';

export const Hero: React.FC = () => {
  const { openReservation } = useCart();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* Background Dark Overlay & Ember Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.22),rgba(245,158,11,0.1),rgba(12,15,23,0.95))]" />
      
      {/* Background imagery with dark treatment */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity -z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Italian Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-pizza-amber/30 text-xs sm:text-sm font-medium text-amber-200 mb-6 backdrop-blur-md shadow-lg shadow-black/40">
            <Flame className="w-4 h-4 text-pizza-red animate-pulse" />
            <span>Forno a Lenha Tradicional a 480°C</span>
            <span className="text-white/40">•</span>
            <span className="text-emerald-400 font-semibold">100% Napolitano</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight">
            A autêntica alma de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pizza-amber to-pizza-red">Nápoles</span> no coração da cidade.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Massa artesanal maturada com paciência durante 72 horas, farinha italiana Caputo 00, tomate San Marzano DOP e assada em escassos 90 segundos a quase 500 graus.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#ementa"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pizza-red via-red-600 to-pizza-amber text-white font-bold text-base shadow-xl shadow-pizza-red/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Pedir Online / Ver Ementa</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={openReservation}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5 text-pizza-amber" />
              <span>Reservar Mesa no Restaurante</span>
            </button>
          </div>

          {/* Social Proof Star Rating */}
          <div className="flex items-center gap-4 text-sm text-slate-300 mb-12">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-slate-400 text-xs ml-1.5">(Mais de 850 clientes satisfeitos no Google)</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Badges Bottom Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-pizza-red/20 border border-pizza-red/30 flex items-center justify-center text-pizza-red shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Forno a 480°C</div>
              <div className="text-[11px] text-slate-400">Cozimento rápido e crocante</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-pizza-amber/20 border border-pizza-amber/30 flex items-center justify-center text-pizza-amber shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">72h Fermentação</div>
              <div className="text-[11px] text-slate-400">Digestão leve e perfumada</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">DOP Italiano</div>
              <div className="text-[11px] text-slate-400">San Marzano e Mozzarella</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Entrega em ~{PIZZERIA_INFO.averagePrepTime}</div>
              <div className="text-[11px] text-slate-400">Grátis acima de {PIZZERIA_INFO.freeDeliveryThreshold}€</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
