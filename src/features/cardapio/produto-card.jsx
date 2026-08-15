import { useCarrinho } from '../../hooks/usar-carrinho';

export function ProdutoCard({ produto }) {
  // Puxando a função de adicionar do seu contexto
  const { adicionarItem } = useCarrinho();

  return (
    <div className="bg-white/60 border border-[#CDA67A]/40 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      
      {/* Círculo para a imagem do produto (usando emoji temporário) */}
      <div className="w-32 h-32 bg-[#EDDFCF] border-2 border-[#CDA67A]/30 rounded-full flex items-center justify-center text-6xl mb-5 shadow-inner">
        {produto.imagem}
      </div>
      
      {/* Textos */}
      <h3 className="font-['Belleza'] text-[#7F0605] text-xl font-bold mb-2">
        {produto.nome}
      </h3>
      <p className="font-['Manjari'] text-[#76542D] text-sm flex-grow mb-6 leading-relaxed">
        {produto.descricao}
      </p>
      
      {/* Rodapé do Card: Preço e Botão */}
      <div className="w-full flex items-center justify-between mt-auto">
        <span className="font-['Manjari'] text-[#E10B0A] font-bold text-xl">
          R$ {produto.preco_unitario.toFixed(2).replace('.', ',')}
        </span>
        
        <button
          onClick={() => adicionarItem(produto)}
          className="bg-[#7F0605] hover:bg-[#E10B0A] text-[#EDDFCF] px-5 py-2.5 rounded-full font-['Manjari'] font-bold text-sm shadow-md transition-colors"
        >
          + Adicionar
        </button>
      </div>
    </div>
  );
}