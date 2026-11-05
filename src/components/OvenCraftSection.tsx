import React from 'react';
import { Flame, Clock, Award, ShieldCheck } from 'lucide-react';

export const OvenCraftSection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Fermentação Lenta 72 Horas',
      desc: 'Massa leve como uma nuvem. A longa maturação a frio decompõe os açúcares complexos, garantindo digestibilidade perfeita e aroma inconfundível.',
      icon: <Clock className="w-5 h-5 text-pizza-amber" />
    },
    {
      step: '02',
      title: 'Farinha Caputo Tipo 00',
      desc: 'Diretamente dos moinhos de Nápoles desde 1924. Uma farinha elástica e tenaz, sem aditivos químicos, que confere o autêntico bordo alto e aerado (cornicione).',
      icon: <Award className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '03',
      title: 'San Marzano & Mozzarella DOP',
      desc: 'Molho feito apenas com tomates doces colhidos maduros ao pé do Monte Vesúvio e Mozzarella di Bufala Campana DOP com certificação de origem.',
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />
    },
    {
      step: '04',
      title: 'Forno a Lenha a 480°C',
      desc: 'Cozedura relâmpago de 60 a 90 segundos. A lenha de carvalho e oliveira sela a humidade interna, mantendo a massa suculenta e com o clássico leopardo nas bordas.',
      icon: <Flame className="w-5 h-5 text-pizza-red" />
    }
  ];

  return (
    <section id="forno" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background ember glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pizza-red/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=1200&q=80"
                alt="Forno a lenha artesanal da Bella Napoli"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase font-bold text-pizza-amber tracking-widest block mb-1">
                  Mestres Pizzaioli Napoletani
                </span>
                <p className="font-serif text-2xl font-bold text-white">
                  O ritual do fogo e da farinha transmitido de geração em geração.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-pizza-charcoal border border-pizza-amber/30 shadow-2xl items-center gap-3 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-pizza-red/20 text-pizza-red flex items-center justify-center font-bold text-xl">
                🔥
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase">Temperatura do Forno</div>
                <div className="text-xl font-serif font-bold text-amber-200">480°C • 90 Segundos</div>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-pizza-amber bg-amber-950/60 border border-amber-800/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
                O Segredo Napolitano
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Não é apenas pizza. É património cultural e paixão italiana.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Na Bella Napoli seguimos escrupulosamente o regulamento tradicional da pizza verace napoletana. Sem atalhos, sem misturas industriais: apenas paciência, paixão e ingredientes autênticos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.step}
                  className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-pizza-amber/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center">
                      {p.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-white mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

