import React, { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { PIZZERIA_INFO } from '../data/menu';

export const ReservationModal: React.FC = () => {
  const { isReservationOpen, closeReservation } = useCart();

  if (!isReservationOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const availableTimes = [
    '12:30', '13:00', '13:30', '14:00',
    '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !date || !time) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }, 900);
  };

  const handleFinish = () => {
    setIsConfirmed(false);
    closeReservation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-pizza-amber" />
            <h3 className="font-serif text-lg font-bold text-white">
              {isConfirmed ? 'Reserva Confirmada!' : 'Reservar Mesa'}
            </h3>
          </div>
          <button
            onClick={closeReservation}
            className="w-8 h-8 rounded-full bg-white/5 text-slate-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1 text-sm">
          {isConfirmed ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-pizza-amber font-bold">
                  Mesa Reservada com Sucesso
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mt-1">
                  Esperamos por si, {name}!
                </h4>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Data & Hora:</span>
                  <span className="font-semibold text-white">{date} às {time}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Nº de Pessoas:</span>
                  <span className="font-semibold text-white">{guests} {guests === 1 ? 'pessoa' : 'pessoas'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Restaurante:</span>
                  <span className="font-semibold text-white">{PIZZERIA_INFO.name} ({PIZZERIA_INFO.address})</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Tolerância de chegada:</span>
                  <span className="font-semibold text-pizza-amber">15 minutos</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                Enviámos um email de confirmação para <strong className="text-white">{email}</strong>. Para alterar ou cancelar, contacte-nos pelo <strong className="text-white">{PIZZERIA_INFO.phone}</strong>.
              </p>

              <button
                onClick={handleFinish}
                className="w-full py-3.5 rounded-xl bg-pizza-red text-white font-bold text-sm hover:bg-red-600 transition-colors shadow-lg"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Telemóvel *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email de Confirmação *
                </label>
                <input
                  type="email"
                  required
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Data *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-pizza-amber"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Pessoas *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-pizza-amber"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Pessoa' : 'Pessoas'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Hora da Reserva *
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {availableTimes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                        time === t
                          ? 'bg-pizza-amber text-slate-950 shadow-md font-bold'
                          : 'bg-white/5 text-slate-300 border border-white/5 hover:bg-white/10'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Pedidos Especiais / Ocasião (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Aniversário, mesa perto da janela, cadeira para bebé..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pizza-red to-pizza-darkred hover:from-red-500 hover:to-red-700 text-white font-bold text-sm shadow-xl shadow-pizza-red/40 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'A registar a sua reserva...' : 'Confirmar Reserva de Mesa'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
