import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, Navigation, CheckCircle2 } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/menu';

export const LocationSection: React.FC = () => {
  return (
    <section id="contactos" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-pizza-amber bg-amber-950/60 border border-amber-800/60 px-3.5 py-1.5 rounded-full inline-block">
              Visite-nos ou Peça em Casa
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Onde Estamos & Horários
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Estamos situados no coração da cidade com uma sala rústica acolhedora e esplanada exterior aquecida.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pizza-red/10 border border-pizza-red/20 text-pizza-red flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Morada</h4>
                  <p className="text-slate-400 text-xs mt-0.5">{PIZZERIA_INFO.address}</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-pizza-amber hover:underline mt-1 font-semibold"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Ver no Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pizza-amber/10 border border-pizza-amber/20 text-pizza-amber flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Horário do Forno</h4>
                  <p className="text-slate-400 text-xs mt-0.5">
                    <strong>Terça a Domingo:</strong> 12h00 às 15h00 & 19h00 às 23h30<br />
                    <span className="text-red-400 font-semibold">Segunda-feira: Encerrado para descanso da equipa</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Telefone & WhatsApp</h4>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <a
                      href={`tel:${PIZZERIA_INFO.phone}`}
                      className="text-xs text-white hover:text-pizza-amber font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
                    >
                      {PIZZERIA_INFO.phone}
                    </a>
                    <a
                      href={`https://wa.me/${PIZZERIA_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg hover:bg-emerald-900/60"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Direto</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Restaurant Atmosphere Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Ambiente acolhedor da Bella Napoli"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-serif font-bold text-white block">Ambiente Autêntico & Esplanada</span>
                  <span className="text-[11px] text-slate-300">Reserva recomendada aos fins de semana</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Aberto Hoje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
