export function Inicio() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#EDDFCF]">
      {/* Imagem de Fundo com Overlay para garantir a leitura do texto */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/src/assets/imagens/background-inicio.png)' }}
      ></div>
      
      {/* Conteúdo Central (Hero) */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
        <span className="font-['Moontime'] text-5xl md:text-7xl text-[#E10B0A] mb-2 drop-shadow-sm">
          Artesanal & Gourmet
        </span>
        
        <h1 className="font-['Belleza'] text-6xl md:text-8xl text-[#7F0605] font-bold tracking-tight mb-6">
          Adoçando seus momentos
        </h1>
        
        <p className="font-['Manjari'] text-xl md:text-2xl text-[#76542D] mb-10 max-w-xl">
          Descubra o verdadeiro sabor da confeitaria afetiva. Encomende agora e receba o melhor da Doces Lud.
        </p>
        
        {/* Call to Action (CTA) */}
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="bg-[#E10B0A] hover:bg-[#7F0605] text-[#EDDFCF] text-lg font-['Manjari'] font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          Ver Cardápio
        </button>
      </div>
    </section>
  );
}