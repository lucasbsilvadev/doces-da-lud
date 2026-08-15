import { ProdutoCard } from './produto-card';

// Dados falsos (mock) provisórios enquanto configuramos a leitura do seu catalogo.json
const mockProdutosTemporarios = [
  { id: '1', nome: 'Brigadeiro Tradicional', descricao: 'Chocolate ao leite com granulado macio artesanal.', preco_unitario: 4.50, imagem: '🍫' },
  { id: '2', nome: 'Beijinho de Coco', descricao: 'Coco ralado fresco com um leve toque de cravo.', preco_unitario: 4.50, imagem: '🥥' },
  { id: '3', nome: 'Bicho de Pé', descricao: 'O clássico e delicioso brigadeiro de morango.', preco_unitario: 4.50, imagem: '🍓' },
  { id: '4', nome: 'Surpresa de Uva', descricao: 'Uva verde sem semente envolta em brigadeiro branco.', preco_unitario: 5.00, imagem: '🍇' },
];

export function ProdutoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {mockProdutosTemporarios.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}