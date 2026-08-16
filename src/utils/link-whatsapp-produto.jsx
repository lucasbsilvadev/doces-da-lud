import { NUMERO_WHATSAPP } from './config';

export function gerarLinkConsultaProduto(produto) {
  const mensagem = `Olá! Vim pelo site e gostaria de saber mais sobre: *${produto.nome}*`;
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}