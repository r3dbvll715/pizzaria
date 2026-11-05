import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/menu';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pizza-dark border-t border-white/10 pt-16 pb-12 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pizza-darkred to-pizza-red flex items-center justify-center text-xl shadow-lg shadow-pizza-red/20">
                🍕
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                {PIZZERIA_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Pizzeria napolitana artesanal com forno a lenha tradicional a 480°C. Fermentação natural 72 horas e ingredientes certificados DOP diretamente de Nápoles e da Calábria.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>🇮🇹 Tradição Napolitana</span>
              <span>•</span>
              <span>🇵🇹 Feito com amor em Portugal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#ementa" className="hover:text-white transition-colors">Ementa de Pizzas</a>
              </li>
              <li>
                <a href="#forno" className="hover:text-white transition-colors">O Forno a Lenha</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Opiniões dos Clientes</a>
              </li>
              <li>
                <a href="#contactos" className="hover:text-white transition-colors">Horários & Localização</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contactos & Encomendas
            </h4>
            <div className="text-xs space-y-1.5">
              <p className="text-white font-medium">{PIZZERIA_INFO.address}</p>
              <p>Telefone: <a href={`tel:${PIZZERIA_INFO.phone}`} className="text-pizza-amber hover:underline">{PIZZERIA_INFO.phone}</a></p>
              <p>WhatsApp: <span className="text-emerald-400 font-mono">{PIZZERIA_INFO.whatsapp}</span></p>
              <p className="text-slate-500 pt-2">
                Livro de Reclamações Online disponível. Todos os preços incluem IVA à taxa legal em vigor.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {PIZZERIA_INFO.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
