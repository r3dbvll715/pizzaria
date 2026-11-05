import React, { useState } from 'react';
import { X, Check, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { EXTRA_TOPPINGS } from '../data/menu';
import { PizzaSize, Topping } from '../types';

export const CustomItemModal: React.FC = () => {
  const { customizingItem, closeCustomizer, addItem } = useCart();

  if (!customizingItem) return null;

  const [selectedSize, setSelectedSize] = useState<PizzaSize>('Média (30cm)');
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  const basePrice = selectedSize === 'Familiar (38cm)' && customizingItem.priceFamiliar
    ? customizingItem.priceFamiliar
    : customizingItem.price;

  const toppingsTotal = selectedToppings.reduce((sum, t) => sum + t.price, 0);
  const unitPrice = basePrice + toppingsTotal;
  const totalPrice = unitPrice * quantity;

  const toggleTopping = (topping: Topping) => {
    setSelectedToppings(prev => {
      const exists = prev.some(t => t.id === topping.id);
      if (exists) {
        return prev.filter(t => t.id !== topping.id);
      } else {
        return [...prev, topping];
      }
    });
  };

  const handleConfirm = () => {
    addItem(customizingItem, selectedSize, selectedToppings, notes, quantity);
    closeCustomizer();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header with image */}
        <div className="relative h-44 sm:h-52 bg-slate-950 overflow-hidden shrink-0">
          <img
            src={customizingItem.image}
            alt={customizingItem.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={closeCustomizer}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/90 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-pizza-amber">
              Personalizar Pizza
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              {customizingItem.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Customization Content */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 text-sm">
          {/* Size Choice */}
          {customizingItem.availableSizes && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Escolha o Tamanho
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSize('Média (30cm)')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedSize === 'Média (30cm)'
                      ? 'bg-pizza-red/20 border-pizza-red text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-white">Média (30cm)</div>
                  <div className="text-xs text-slate-400">Ideal para 1 a 2 pessoas</div>
                  <div className="mt-2 font-bold text-pizza-amber">{customizingItem.price.toFixed(2)}€</div>
                </button>

                {customizingItem.priceFamiliar && (
                  <button
                    type="button"
                    onClick={() => setSelectedSize('Familiar (38cm)')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedSize === 'Familiar (38cm)'
                        ? 'bg-pizza-red/20 border-pizza-red text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-white">Familiar (38cm)</div>
                    <div className="text-xs text-slate-400">Ideal para 2 a 3 pessoas</div>
                    <div className="mt-2 font-bold text-pizza-amber">{customizingItem.priceFamiliar.toFixed(2)}€</div>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Extra Toppings */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                2. Ingredientes Extra (Opcional)
              </label>
              <span className="text-[11px] text-slate-400">Selecione quantos desejar</span>
            </div>

            <div className="space-y-2">
              {EXTRA_TOPPINGS.map((topping) => {
                const isSelected = selectedToppings.some(t => t.id === topping.id);
                return (
                  <button
                    key={topping.id}
                    type="button"
                    onClick={() => toggleTopping(topping)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-colors ${
                      isSelected
                        ? 'bg-white/15 border-pizza-amber text-white'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isSelected ? 'bg-pizza-amber border-pizza-amber text-slate-950 font-bold' : 'border-white/20'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{topping.name}</span>
                    </div>
                    <span className="text-xs font-bold text-amber-300">+{topping.price.toFixed(2)}€</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Requests / Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              3. Notas para o Pizzaiolo
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: sem orégãos, massa bem tostada, cortar em 8 fatias..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-pizza-amber resize-none"
            />
          </div>
        </div>

        {/* Footer with Quantity & Add Button */}
        <div className="p-4 sm:p-6 bg-slate-950/80 border-t border-white/10 flex items-center justify-between gap-4 shrink-0">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 bg-slate-800 rounded-xl p-1.5 border border-white/10">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-white px-2 text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-white/10"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={handleConfirm}
            className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-pizza-red to-pizza-darkred hover:from-red-500 hover:to-red-700 text-white font-bold text-sm shadow-lg shadow-pizza-red/30 transition-all flex items-center justify-between"
          >
            <span>Adicionar ao Pedido</span>
            <span className="bg-black/25 px-2.5 py-1 rounded-lg text-amber-200">
              {totalPrice.toFixed(2)}€
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
