import React, { useState } from 'react';
import { Plus, Search, Flame, Leaf, Sparkles, Award } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { Category, MenuItem } from '../types';
import { useCart } from '../context/CartContext';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { addItem, openCustomizer } = useCart();

  const categories: Category[] = [
    'Todas',
    'Pizzas Clássicas',
    'Pizzas Especiais',
    'Calzones',
    'Entradas',
    'Sobremesas',
    'Bebidas'
  ];

  const tags = [
    { label: 'Todas as Opções', value: null },
    { label: 'Vegetarianas', value: 'Vegetariana', icon: <Leaf className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: 'Picantes', value: 'Picante', icon: <Flame className="w-3.5 h-3.5 text-pizza-red" /> },
    { label: 'Ingredientes DOP', value: 'DOP', icon: <Award className="w-3.5 h-3.5 text-amber-400" /> },
    { label: 'Especialidade do Chef', value: 'Chef', icon: <Sparkles className="w-3.5 h-3.5 text-purple-400" /> },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.italianName && item.italianName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !activeTag || (item.tags && item.tags.includes(activeTag as any));

    return matchesCategory && matchesSearch && matchesTag;
  });

  const handleCardClick = (item: MenuItem) => {
    // If it's a pizza with customizable sizes/toppings, open customizer modal
    if (item.availableSizes && item.availableSizes.length > 0) {
      openCustomizer(item);
    } else {
      addItem(item, undefined, [], '', 1);
    }
  };

  return (
    <section id="ementa" className="py-24 relative bg-pizza-charcoal/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-pizza-amber bg-amber-950/60 border border-amber-800/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Ementa Artigianale
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Escolha o Seu Prato Italiano Favorito
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Preparadas diariamente com ingredientes frescos de época, cozidas ao vivo no nosso forno a lenha napolitano.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar pizza, ingrediente (ex: burrata, trufa, picante)..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-pizza-amber transition-colors shadow-inner"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pizza-red to-pizza-darkred text-white shadow-lg shadow-pizza-red/30'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dietary Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tags.map((t) => (
            <button
              key={t.label}
              onClick={() => setActiveTag(t.value)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTag === t.value
                  ? 'bg-white/15 text-white border border-white/30'
                  : 'bg-transparent text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/5 max-w-md mx-auto">
            <p className="text-slate-300 font-serif text-lg mb-2">Nenhum prato encontrado</p>
            <p className="text-slate-500 text-xs mb-4">Tente pesquisar por outro ingrediente ou selecionar outra categoria.</p>
            <button
              onClick={() => {
                setActiveCategory('Todas');
                setSearchQuery('');
                setActiveTag(null);
              }}
              className="px-4 py-2 rounded-full bg-pizza-red text-white text-xs font-semibold"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="card-pizza rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Image & Tags Container */}
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />

                    {/* Tag Badges */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-md ${
                              tag === 'DOP'
                                ? 'bg-amber-500/90 text-slate-950'
                                : tag === 'Picante'
                                ? 'bg-red-600/90 text-white'
                                : tag === 'Vegetariana'
                                ? 'bg-emerald-600/90 text-white'
                                : 'bg-slate-900/90 text-white'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Price Tag Pill */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-pizza-dark/90 backdrop-blur-md border border-white/10 text-white font-bold text-sm">
                      {item.price.toFixed(2)}€
                      {item.priceFamiliar && (
                        <span className="text-slate-400 text-[10px] font-normal ml-1">
                          (Média)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                        {item.name}
                      </h3>
                      {item.italianName && (
                        <span className="text-xs italic text-pizza-amber/90 font-serif block mt-0.5">
                          {item.italianName}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300/90 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Ingredients list */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {item.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleCardClick(item)}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-pizza-red text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 hover:border-pizza-red transition-all shadow-md group-hover:shadow-pizza-red/20"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{item.availableSizes ? 'Personalizar / Adicionar' : 'Adicionar ao Pedido'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
