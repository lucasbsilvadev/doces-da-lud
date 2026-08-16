import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoLud from '../../../assets/logos/logo-lud-circle.png';
import './pre-carregamento.css';

const TEMPO_MINIMO_MS = 1800;
const TEMPO_MAXIMO_MS = 4000;

export function PreCarregamento({ aoFinalizar }) {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const prefereMovimentoReduzido = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    document.body.style.overflow = 'hidden';
    const inicio = Date.now();

    const finalizar = () => {
      const decorrido = Date.now() - inicio;
      const restante = prefereMovimentoReduzido
        ? 0
        : Math.max(TEMPO_MINIMO_MS - decorrido, 0);

      setTimeout(() => {
        setVisivel(false);
        document.body.style.overflow = '';
      }, restante);
    };

    if (document.readyState === 'complete') {
      finalizar();
      return;
    }

    window.addEventListener('load', finalizar);
    const tetoMaximo = setTimeout(finalizar, TEMPO_MAXIMO_MS);

    return () => {
      window.removeEventListener('load', finalizar);
      clearTimeout(tetoMaximo);
    };
  }, []);

  useEffect(() => {
    if (!visivel) aoFinalizar?.();
  }, [visivel, aoFinalizar]);

  const particulas = Array.from({ length: 14 });

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-white"
          initial={{ opacity: 1 }}
          exit={{ clipPath: 'circle(0% at 50% 50%)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(127,6,5,0.06)_100%)]" />

          {particulas.map((_, i) => (
            <span
              key={i}
              className="particula-cacau"
              style={{
                left: `${(i * 7.3) % 100}%`,
                animationDelay: `${(i % 7) * 0.4}s`,
                animationDuration: `${5 + (i % 4)}s`,
              }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)', scale: 0.94 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={logoLud}
                alt="Doces Lud"
                className="w-48 md:w-64 drop-shadow-sm"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-3 font-subtitle text-coyote text-xs uppercase tracking-[0.3em]"
            >
              confeitaria artesanal
            </motion.span>

            <div className="mt-6 h-[2px] w-32 overflow-hidden rounded-full bg-camelo/40">
              <motion.div
                className="h-full bg-rosso"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}