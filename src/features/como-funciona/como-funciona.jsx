import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, PartyPopper } from 'lucide-react';
import './como-funciona.css';

const passos = [
  {
    numero: '1',
    Icone: ShoppingBag,
    titulo: 'Monte sua caixa',
    descricao: 'Escolha os brigadeiros, formatos e sabores favoritos direto no cardápio.',
  },
  {
    numero: '2',
    Icone: MessageCircle,
    titulo: 'Envie pelo WhatsApp',
    descricao: 'Seu pedido chega pronto e organizado, sem enrolação, direto para nossa equipe.',
  },
  {
    numero: '3',
    Icone: PartyPopper,
    titulo: 'Combine e aproveite',
    descricao: 'Acertamos entrega ou retirada e o pagamento com você, com o carinho de sempre.',
  },
];

const container = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.18 } },
};

const item = {
  oculto: { opacity: 0, y: 24 },
  visivel: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="secao-como-funciona relative py-24 bg-almendra bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/imagens/background-como-funciona.png')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="cabecalho-como-funciona text-center mb-16"
        >
          <span className="font-highlight text-5xl md:text-6xl text-rosso">
            Passo a passo
          </span>
          <h2 className="font-title text-4xl md:text-5xl text-maroon mt-2">
            Como Funciona
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div
            className="linha-conectora absolute top-12 left-0 hidden h-px w-full origin-left md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
          />

          {passos.map(({ numero, Icone, titulo, descricao }) => (
            <motion.div
              key={numero}
              variants={item}
              whileHover={{ y: -4 }}
              className="card-passo relative z-10 rounded-3xl border border-camelo/40 bg-white/60 p-8 text-center shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-rosso/50 hover:shadow-lg"
            >
              <div className="numero-badge mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-maroon font-title text-2xl text-almendra shadow-md">
                {numero}
              </div>
              <Icone className="icone-passo mx-auto mb-4 text-rosso" size={32} strokeWidth={1.5} />
              <h3 className="font-subtitle text-2xl text-maroon mb-3">{titulo}</h3>
              <p className="font-body text-coyote leading-relaxed">{descricao}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}