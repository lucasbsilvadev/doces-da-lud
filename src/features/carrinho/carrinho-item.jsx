import { useCarrinho } from '../../hooks/usar-carrinho';

export function CarrinhoItem({ item }) {
  const { removerItem, atualizarQuantidade } = useCarrinho();

  return (
    <li className="flex flex-col bg-white/60 p-4 rounded-xl border border-[#CDA67A]/50">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-['Belleza'] font-bold text-[#7F0605] text-lg leading-tight">
          {item.nome}
        </h4>
        <button 
          onClick={() => removerItem(item.id)}
          className="text-[#E10B0A] hover:text-[#7F0605] text-sm font-['Manjari'] underline"
        >
          Remover
        </button>
      </div>
      
      <div className="flex justify-between items-center">
        {/* Controle de quantidade */}
        <div className="flex items-center gap-3 bg-[#EDDFCF] rounded-full px-3 py-1 border border-[#CDA67A]">
          <button 
            onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
            className="text-[#7F0605] font-bold px-2"
          >
            -
          </button>
          <span className="font-['Manjari'] text-[#76542D] font-bold">
            {item.quantidade}
          </span>
          <button 
            onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
            className="text-[#7F0605] font-bold px-2"
          >
            +
          </button>
        </div>
        
        <span className="font-['Manjari'] text-[#E10B0A] font-bold text-lg">
          R$ {(item.preco_unitario * item.quantidade).toFixed(2).replace('.', ',')}
        </span>
      </div>
    </li>
  );
}