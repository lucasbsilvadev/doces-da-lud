import { ProdutoGrid } from './produto-grid';

export function Cardapio() {
  return (
    <section id="cardapio" className="py-20 bg-[#EDDFCF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* titulo - seção */}
        <div className="text-center mb-16">
          <span className="font-['Moontime'] text-5xl md:text-6xl text-[#E10B0A] drop-shadow-sm">
            Nossas Delícias
          </span>
          <h2 className="font-['Belleza'] text-4xl md:text-5xl text-[#7F0605] font-bold mt-2">
            Cardápio Artesanal
          </h2>
          <p className="font-['Manjari'] text-[#76542D] mt-4 text-lg max-w-2xl mx-auto">
            Escolha os seus doces favoritos, adicione ao seu pedido e receba o verdadeiro sabor da confeitaria afetiva.
          </p>
        </div>
        
        <ProdutoGrid />
      </div>
    </section>
  );
}