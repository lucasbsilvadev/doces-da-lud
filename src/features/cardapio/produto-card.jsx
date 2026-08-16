import { useCarrinho } from '../../hooks/usar-carrinho';
import { IconesPorNome, IconePadrao } from '../../utils/icones-produtos';
import { gerarLinkConsultaProduto } from '../../utils/link-whatsapp-produto';

export function ProdutoCard({ produto }) {
  const { adicionarItem } = useCarrinho();

  const Icone = IconesPorNome[produto.icone] ?? IconePadrao;
  const temPrecoFixo = typeof produto.preco_unitario === 'number';

  return (
    <div className="card-produto relative flex flex-col items-center rounded-3xl border border-camelo/40 bg-white/60 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {produto.disponibilidade === 'sazonal' && (
        <span className="selo-sazonal absolute top-4 right-4 font-body text-[10px] uppercase tracking-wider text-rosso">
          Sazonal
        </span>
      )}

      <div className="circulo-icone mb-5 flex h-32 w-32 items-center justify-center rounded-full border-2 border-camelo/30 bg-almendra shadow-inner">
        <Icone className="text-maroon" size={48} strokeWidth={1.4} />
      </div>

      <h3 className="font-subtitle text-maroon text-xl mb-2">{produto.nome}</h3>
      <p className="font-body text-coyote text-sm flex-grow mb-6 leading-relaxed">
        {produto.descricao}
      </p>

      <div className="mt-auto flex w-full items-center justify-between gap-3">
        {temPrecoFixo ? (
          <span className="font-body text-rosso font-bold text-xl">
            R$ {produto.preco_unitario.toFixed(2).replace('.', ',')}
          </span>
        ) : (
          <span className="font-body text-coyote/80 text-xs italic leading-tight">
            {produto.nota_preco ?? 'Consulte o valor'}
          </span>
        )}

        {temPrecoFixo ? (
          <button
            onClick={() => adicionarItem(produto)}
            className="shrink-0 rounded-full bg-maroon px-5 py-2.5 font-body text-sm font-bold text-almendra shadow-md transition-colors hover:bg-rosso"
          >
            + Adicionar
          </button>
        ) : (
          <a
            href={gerarLinkConsultaProduto(produto)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-maroon px-5 py-2.5 font-body text-sm font-bold text-maroon transition-colors hover:bg-maroon hover:text-almendra"
          >
            Consultar
          </a>
        )}
      </div>
    </div>
  );
}