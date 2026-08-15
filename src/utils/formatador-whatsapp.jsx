export function gerarLinkWhatsApp({ itens, formaPagamento, tipoEntrega, observacao, valorTotal, telefone = "5511999999999" }) {
  // cabeçalho da mensagem
  let mensagem = `*NOVO PEDIDO - DOCES LUD* 🧁\n\n`;
  
  // lista de itens / preco unitario
  itens.forEach(item => {
    const subtotal = item.preco_unitario * item.quantidade;
    mensagem += `• ${item.quantidade}x ${item.nome} (R$ ${subtotal.toFixed(2).replace('.', ',')})\n`;
  });

  // resumo financeiro e logístico
  mensagem += `\n*RESUMO DO PEDIDO:*`;
  mensagem += `\n• Total: *R$ ${valorTotal.toFixed(2).replace('.', ',')}*`;
  mensagem += `\n• Pagamento: ${formaPagamento}`;
  mensagem += `\n• Entrega: ${tipoEntrega}`;
  
  // observações (se houver)
  if (observacao) {
    mensagem += `\n• Obs: ${observacao}`;
  }

  // transforma texto em formato válido para URL
  const textoCodificado = encodeURIComponent(mensagem);
  
  // retorna o link final
  return `https://api.whatsapp.com/send?phone=${telefone}&text=${textoCodificado}`;
}