import React, { useState } from 'react';
import { X, CheckCircle2, Bike, Store, CreditCard, DollarSign, Smartphone, ArrowRight, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { PIZZERIA_INFO } from '../data/menu';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, items, subtotal, deliveryFee, total, clearCart } = useCart();

  if (!isCheckoutOpen) return null;

  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [nif, setNif] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'MB WAY' | 'Multibanco' | 'Cartão de Crédito' | 'Dinheiro'>('MB WAY');
  const [mbwayPhone, setMbwayPhone] = useState('');
  const [cashChangeFor, setCashChangeFor] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;
    if (orderType === 'delivery' && !address) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedNum = `BN-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderNumber(generatedNum);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }

      clearCart();
    }, 1000);
  };

  const handleFinish = () => {
    setOrderNumber(null);
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-950">
          <h3 className="font-serif text-xl font-bold text-white">
            {orderNumber ? 'Pedido Confirmado!' : 'Finalizar Encomenda'}
          </h3>
          <button
            onClick={closeCheckout}
            className="w-8 h-8 rounded-full bg-white/5 text-slate-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1 text-sm">
          {orderNumber ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-pizza-amber font-bold">
                  Excelente escolha!
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mt-1">
                  A sua pizza já está a caminho do forno!
                </h4>
                <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white font-mono text-sm">
                  Código: <strong className="text-pizza-amber font-bold">{orderNumber}</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Modalidade:</span>
                  <span className="font-semibold text-white">{orderType === 'delivery' ? 'Entrega ao Domicílio' : 'Takeaway (Recolha)'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Tempo Estimado:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    ~30 - 40 minutos
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Contacto:</span>
                  <span className="font-semibold text-white">{phone}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Total a Pagar ({paymentMethod}):</span>
                  <span className="font-bold text-pizza-amber text-sm">{total.toFixed(2)}€</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                Enviámos uma confirmação por SMS para o seu telemóvel. Em caso de dúvidas, ligue para <strong className="text-white">{PIZZERIA_INFO.phone}</strong>.
              </p>

              <button
                onClick={handleFinish}
                className="w-full py-3.5 rounded-xl bg-pizza-red text-white font-bold text-sm hover:bg-red-600 transition-colors shadow-lg"
              >
                Concluir e Voltar à Ementa
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery vs Takeaway choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Como Deseja Receber?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      orderType === 'delivery'
                        ? 'bg-pizza-red/20 border-pizza-red text-white'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Bike className="w-5 h-5 text-pizza-red" />
                    <div className="text-left">
                      <div className="font-bold text-xs text-white">Entrega em Casa</div>
                      <div className="text-[11px] text-slate-400">
                        {deliveryFee === 0 ? 'Grátis' : `+${deliveryFee.toFixed(2)}€`}
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      orderType === 'takeaway'
                        ? 'bg-pizza-red/20 border-pizza-red text-white'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Store className="w-5 h-5 text-pizza-amber" />
                    <div className="text-left">
                      <div className="font-bold text-xs text-white">Takeaway (Recolha)</div>
                      <div className="text-[11px] text-slate-400">Sem taxa</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Dados do Cliente
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nome Completo *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Telemóvel (ex: 912 345 678) *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                    />
                  </div>
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Morada de Entrega (Rua, Nº, Andar, Código Postal) *"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="NIF na Fatura (Opcional)"
                      value={nif}
                      onChange={(e) => setNif(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Notas de entrega (ex: código do portão)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  3. Método de Pagamento
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'MB WAY', icon: <Smartphone className="w-4 h-4 text-pizza-amber" /> },
                    { label: 'Multibanco', icon: <CreditCard className="w-4 h-4 text-blue-400" /> },
                    { label: 'Cartão de Crédito', icon: <CreditCard className="w-4 h-4 text-emerald-400" /> },
                    { label: 'Dinheiro', icon: <DollarSign className="w-4 h-4 text-amber-400" /> },
                  ].map((pm) => (
                    <button
                      key={pm.label}
                      type="button"
                      onClick={() => setPaymentMethod(pm.label as any)}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-medium ${
                        paymentMethod === pm.label
                          ? 'bg-white/15 border-pizza-amber text-white'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {pm.icon}
                      <span>{pm.label}</span>
                    </button>
                  ))}
                </div>

                {paymentMethod === 'MB WAY' && (
                  <div className="mt-3">
                    <input
                      type="tel"
                      placeholder="Número de telemóvel para notificação MB WAY"
                      value={mbwayPhone || phone}
                      onChange={(e) => setMbwayPhone(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                    />
                  </div>
                )}

                {paymentMethod === 'Dinheiro' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Precisa de troco para quanto? (ex: 20€, 50€)"
                      value={cashChangeFor}
                      onChange={(e) => setCashChangeFor(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber"
                    />
                  </div>
                )}
              </div>

              {/* Order Summary & Submit Button */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Itens ({items.length})</span>
                  <span>{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Entrega</span>
                  <span>{orderType === 'takeaway' || deliveryFee === 0 ? 'Grátis' : `${deliveryFee.toFixed(2)}€`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>Total a Pagar</span>
                  <span className="text-pizza-amber font-serif text-lg">
                    {(orderType === 'takeaway' ? subtotal : total).toFixed(2)}€
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-pizza-red via-red-600 to-pizza-amber hover:from-red-500 hover:to-pizza-amber text-white font-bold text-sm shadow-xl shadow-pizza-red/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>A processar o seu pedido...</span>
                ) : (
                  <>
                    <span>Confirmar Encomenda</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

