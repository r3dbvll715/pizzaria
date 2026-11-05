import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      author: 'Guilherme Matos',
      date: 'Há 3 dias',
      text: 'A melhor pizza napolitana que comi em Portugal! A massa da Margherita Verace é inacreditavelmente leve, e a burrata de entrada estava fresquíssima. Serviço 5 estrelas.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      author: 'Carolina Esteves',
      date: 'Há 1 semana',
      text: 'Pedimos para entrega em casa e chegou fumegante em 30 minutos! A Diavola com salame picante da Calábria é viciante. O bordo alto com queijo e manjericão é perfeito.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      author: 'Marco Bellini',
      date: 'Há 2 semanas',
      text: 'Sono italiano e vivo a Porto. Posso dire senza esitazione che questa è vera pizza napoletana! Ingredienti di altissima qualità e impasto digeribilissimo.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section id="avaliacoes" className="py-24 relative bg-pizza-charcoal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Classificação 4.9 no Google Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-slate-400 text-sm">
            Mais de 850 avaliações de amantes da autêntica pizza italiana cozida a lenha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-slate-900/80 border border-white/5 flex flex-col justify-between relative group hover:border-pizza-amber/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{r.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={r.avatar}
                  alt={r.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">{r.author}</h4>
                  <span className="text-[11px] text-slate-500">{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
