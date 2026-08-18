import { CarrinhoItem } from './carrinho-item';
import { useCarrinho } from '../../hooks/usar-carrinho';
import { gerarLinkWhatsApp } from '../../utils/formatador-whatsapp';
import { NUMERO_WHATSAPP } from '../../utils/config';

export function CarrinhoDrawer({ aberto, aoFechar }) {
  const { carrinho, valorTotal } = useCarrinho();

const handleFinalizarPedido = () => {
  if (carrinho.length === 0) return;
  
  const link = gerarLinkWhatsApp({
    itens: carrinho,
    formaPagamento: 'A combinar',
    tipoEntrega: 'A combinar',
    valorTotal: valorTotal,
    telefone: NUMERO_WHATSAPP
  });
  

  window.open(link, '_blank');
};
  return (
    <>
      {/* fundo escuro (overlay) - Clicar nele fecha o carrinho */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          aberto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={aoFechar}
      />

      {/* Gaveta do Carrinho */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#EDDFCF] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          aberto ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b border-[#CDA67A]">
          <h2 className="font-['Belleza'] text-3xl text-[#7F0605] font-bold">Meu Pedido</h2>
          <button 
            onClick={aoFechar}
            className="text-[#7F0605] hover:text-[#E10B0A] font-bold text-2xl transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Área dos Produtos (Scroll) */}
        <div className="flex-1 overflow-y-auto p-6">
          {carrinho.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-80">
              <span className="text-6xl mb-4">🧁</span>
              <p className="font-['Manjari'] text-xl text-[#76542D]">Seu carrinho está vazio.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {carrinho.map((item) => (
                <CarrinhoItem key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>

        {/* Rodapé e Checkout */}
        {carrinho.length > 0 && (
          <div className="p-6 bg-white/50 border-t border-[#CDA67A]">
            <div className="flex justify-between items-center mb-6">
              <span className="font-['Manjari'] text-[#76542D] text-xl">Total:</span>
              <span className="font-['Belleza'] text-3xl font-bold text-[#7F0605]">
                R$ {valorTotal.toFixed(2).replace('.', ',')}
              </span>
            </div>
            
            <button 
              onClick={handleFinalizarPedido}
              className="w-full bg-[#E10B0A] hover:bg-[#7F0605] text-[#EDDFCF] text-xl font-['Manjari'] font-bold py-4 rounded-full shadow-md transition-colors"
            >
              Pedir pelo WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}