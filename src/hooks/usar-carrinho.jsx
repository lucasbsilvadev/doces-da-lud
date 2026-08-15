import { useContext } from 'react';
import { ContextoCarrinho } from '../contexto/contexto-carrinho';

export function useCarrinho() {
  const contexto = useContext(ContextoCarrinho);

  if (!contexto) {
    throw new Error('useCarrinho deve ser utilizado dentro de um ProvedorCarrinho');
  }

  return contexto;
}