import { Home, AlertCircle } from 'lucide-react';

export function NaoEncontrado() {
  return (
    <div className="min-h-screen bg-[#EDDFCF] text-[#76542D] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center space-y-6 bg-[#EDDFCF]/80 p-8 rounded-2xl border border-[#CDA67A] shadow-xl backdrop-blur-sm">
        <div className="flex justify-center text-[#E10B0A]">
          <AlertCircle className="w-16 h-16 animate-bounce" />
        </div>
        
        <h1 className="font-['Belleza'] text-4xl text-[#7F0605]">
          404 - Doce Não Encontrado :(
        </h1>
        
        <p className="font-['Manjari'] text-lg text-[#76542D]">
          A receita, produto ou página que você tentou acessar não existe ou mudou de endereço.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full bg-[#E10B0A] hover:bg-[#7F0605] text-[#EDDFCF] font-bold py-3 px-6 rounded-full border border-[#CDA67A] transition-all duration-300 transform hover:scale-105"
        >
          <Home className="w-5 h-5" />
          Voltar ao Cardápio
        </a>
      </div>
    </div>
  );
}