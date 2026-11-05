import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Bike } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PIZZERIA_INFO } from '../data/menu';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    subtotal,
    deliveryFee,
    total,
    openCheckout
  } = useCart();

  if (!isCartOpen) return null;

  const freeDeliveryRemaining = Math.max(0, PIZZERIA_INFO.freeDeliveryThreshold - subtotal);
  const freeDeliveryPercent = Math.min(100, Math.round((subtotal / PIZZERIA_INFO.freeDeliveryThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-950/60">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-pizza-red/20 text-pizza-red flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">O Seu Pedido</h3>
                <p className="text-xs text-slate-400">
                  {items.length === 0 ? 'Carrinho vazio' : `${items.length} ${items.length === 1 ? 'item selecionado' : 'itens selecionados'}`}
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free delivery status bar */}
          {items.length > 0 && (
            <div className="px-6 py-3 bg-slate-950 border-b border-white/5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Bike className="w-4 h-4 text-pizza-amber" />
                  {freeDeliveryRemaining > 0 ? (
                    <>Faltam <strong className="text-pizza-amber">{freeDeliveryRemaining.toFixed(2)}€</strong> para entrega grátis</>
                  ) : (
                    <strong className="text-emerald-400">Entrega GRÁTIS desbloqueada! 🎉</strong>
                  )}
                </span>
                <span className="font-bold text-slate-400">{freeDeliveryPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pizza-amber to-emerald-400 transition-all duration-300 rounded-full"
                  style={{ width: `${freeDeliveryPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-slate-600 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-1">Ainda não escolheu pratos</h4>
                <p className="text-xs text-slate-400 max-w-xs mb-6">
                  Explore as nossas pizzas napolitanas cozidas a lenha, entradas e sobremesas artesanais.
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-full bg-pizza-red text-white text-xs font-semibold hover:bg-red-600 transition-colors"
                >
                  Ver Ementa
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-serif font-bold text-white text-sm">
                        {item.menuItem.name}
                      </h4>
                      {item.size && (
                        <span className="inline-block mt-0.5 text-[11px] font-semibold text-pizza-amber bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/40">
                          {item.size}
                        </span>
                      )}

                      {/* Extra toppings list */}
                      {item.extraToppings.length > 0 && (
                        <div className="mt-1.5 space-y-0.5">
                          {item.extraToppings.map((t) => (
                            <div key={t.id} className="text-[11px] text-slate-400 flex items-center gap-1">
                              <span>+ {t.name}</span>
                              <span className="text-amber-300">({t.price.toFixed(2)}€)</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Notes */}
                      {item.notes && (
                        <p className="mt-1 text-[11px] text-slate-400 italic">
                          "{item.notes}"
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                      title="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1 border border-white/5">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-white px-1.5">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-bold text-white text-sm">
                      {item.totalPrice.toFixed(2)}€
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with totals & Checkout Button */}
          {items.length > 0 && (
            <div className="p-6 bg-slate-950 border-t border-white/10 space-y-4">
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de Entrega</span>
                  <span className={deliveryFee === 0 ? 'text-emerald-400 font-bold' : 'text-white'}>
                    {deliveryFee === 0 ? 'Grátis' : `${deliveryFee.toFixed(2)}€`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-pizza-amber font-serif text-xl">{total.toFixed(2)}€</span>
                </div>
              </div>

              <button
                onClick={openCheckout}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-pizza-red via-red-600 to-pizza-amber hover:from-red-500 hover:to-pizza-amber text-white font-bold text-sm shadow-xl shadow-pizza-red/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Finalizar Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
