import { NUMERO_WHATSAPP } from './config';

export function gerarLinkWhatsApp({ itens, formaPagamento, tipoEntrega, observacao, valorTotal, telefone = NUMERO_WHATSAPP }) {
  
  let mensagem = `*NOVO PEDIDO - DOCES LUD* \n\n`;
  
  itens.forEach(item => {
    const subtotal = item.preco_unitario * item.quantidade;
    mensagem += `• ${item.quantidade}x ${item.nome} (R$ ${subtotal.toFixed(2).replace('.', ',')})\n`;
  });

  mensagem += `\n*RESUMO DO PEDIDO:*`;
  mensagem += `\n• Total: *R$ ${valorTotal.toFixed(2).replace('.', ',')}*`;
  mensagem += `\n• Pagamento: ${formaPagamento}`;
  mensagem += `\n• Entrega: ${tipoEntrega}`;
  
  if (observacao) {
    mensagem += `\n• Obs: ${observacao}`;
  }

  const textoCodificado = encodeURIComponent(mensagem);
  
  // MUDAR PARA wa.me (mais confiável)
  return `https://wa.me/${telefone}?text=${textoCodificado}`;
}