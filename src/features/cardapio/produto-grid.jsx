import { ProdutoCard } from './produto-card';
import catalogo from '../../dados/catalogo.json';

export function ProdutoGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {catalogo.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}