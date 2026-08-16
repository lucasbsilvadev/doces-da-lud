import { useState, useEffect } from 'react';
import { ContextoCarrinho } from './contexto-carrinho';

const CHAVE_LOCAL_STORAGE = 'doces_lud_carrinho_v1'; // provisório, será substituído se um backend for adicionado

export function ProvedorCarrinho({ children }) {
  const [carrinho, setCarrinho] = useState(() => {
    try {
      const salvo = localStorage.getItem(CHAVE_LOCAL_STORAGE);
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_LOCAL_STORAGE, JSON.stringify(carrinho));
    } catch (erro) {
      console.error('Erro ao salvar carrinho no localStorage:', erro);
    }
  }, [carrinho]);

  const adicionarItem = (produto, quantidade = 1) => {
    setCarrinho((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === produto.id);
      if (itemExistente) {
        return itensAtuais.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...itensAtuais, { ...produto, quantidade }];
    });
  };

  const removerItem = (id) => {
    setCarrinho((itensAtuais) => itensAtuais.filter((item) => item.id !== id));
  };

  const atualizarQuantidade = (id, quantidade) => {
    if (quantidade <= 0) {
      removerItem(id);
      return;
    }
    setCarrinho((itensAtuais) =>
      itensAtuais.map((item) => (item.id === id ? { ...item, quantidade } : item))
    );
  };

  const limparCarrinho = () => setCarrinho([]);

  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  const valorTotal = carrinho.reduce(
    (acc, item) => acc + item.preco_unitario * item.quantidade,
    0
  );

  return (
    <ContextoCarrinho.Provider
      value={{ carrinho, adicionarItem, removerItem, atualizarQuantidade, limparCarrinho, totalItens, valorTotal }}
    >
      {children}
    </ContextoCarrinho.Provider>
  );
}