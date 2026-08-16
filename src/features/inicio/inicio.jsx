import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './inicio.css';
import { BACKGROUNDS } from '../../utils/assets';

export function Inicio() {
  const referenciaSecao = useRef(null);
  const { scrollYProgress } = useScroll({
    target: referenciaSecao,
    offset: ['start start', 'end start'],
  });
  const deslocamentoFundo = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const irParaComoFunciona = () => {
    document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={referenciaSecao}
      className="textura-grao relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-maroon"
    >
      <motion.div style={{ y: deslocamentoFundo }} className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="h-[120%] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BACKGROUNDS.inicio})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/70 to-maroon/20" />
      </motion.div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center px-4 pt-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-highlight text-3xl text-camelo md:text-4xl"
        >
          Artesanal & Gourmet
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-title mt-3 text-5xl leading-[1.05] tracking-tight text-almendra md:text-7xl"
        >
          Adoçando seus momentos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body mt-6 max-w-xl text-lg text-almendra/80 md:text-xl"
        >
          Brigadeiros artesanais feitos sob encomenda, com o cuidado de quem
          trata cada doce como um presente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10"
        >
          <button
            onClick={irParaComoFunciona}
            className="cta-premium font-body group flex items-center gap-2 rounded-full border border-camelo/60 px-10 py-4 text-sm uppercase tracking-[0.2em] text-almendra transition-colors duration-300 hover:bg-almendra hover:text-maroon"
          >
            Ver Cardápio
            <ArrowRight className="seta" size={16} />
          </button>
        </motion.div>
      </div>

      <div className="indicador-scroll absolute bottom-8 left-1/2 z-10 -translate-x-1/2" />
    </section>
  );
}