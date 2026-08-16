import { ProdutoGrid } from './produto-grid';
import { BACKGROUNDS } from '../../../utils/assets';

export function Cardapio() {
  return (
    <section 
      id="cardapio" 
      className="relative py-20 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BACKGROUNDS.menu})` }}
    >
      {/* 
        OVERLAY DE GRADIENTE:
        Cobre a imagem inteira com uma camada escura. 
        Vai de um preto semi-transparente até o Coyote Brown da sua marca.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#76542D]/80"></div>

      {/* O 'relative z-10' puxa o conteúdo para a frente do overlay escuro */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* titulo - seção */}
        <div className="text-center mb-16">
          {/* Mantivemos o vermelho Rosso, mas com uma leve sombra para destacar no escuro */}
          <span className="font-['Moontime'] text-5xl md:text-6xl text-[#E10B0A] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Nossas Delícias
          </span>
          
          {/* Trocado para a cor Amêndoa (#EDDFCF) para brilhar contra o fundo escuro */}
          <h2 className="font-['Belleza'] text-4xl md:text-5xl text-[#EDDFCF] font-bold mt-2 drop-shadow-lg">
            Cardápio Artesanal
          </h2>
          
          {/* Texto de apoio também em Amêndoa para leitura confortável */}
          <p className="font-['Manjari'] text-[#EDDFCF]/90 mt-4 text-lg max-w-2xl mx-auto drop-shadow-md">
            Escolha os seus doces favoritos, adicione ao seu pedido e receba o verdadeiro sabor da confeitaria afetiva.
          </p>
        </div>
        
        <ProdutoGrid />
      </div>
    </section>
  );
}