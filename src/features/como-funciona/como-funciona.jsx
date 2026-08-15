export function ComoFunciona() {
  const passos = [
    {
      numero: "1",
      titulo: "Escolha suas delícias",
      descricao: "Navegue pelo nosso cardápio e adicione seus doces favoritos ao carrinho.",
      icone: "🧁"
    },
    {
      numero: "2",
      titulo: "Envie seu pedido",
      descricao: "Ao finalizar, você será redirecionado para o nosso WhatsApp com tudo somado e detalhado.",
      icone: "📱"
    },
    {
      numero: "3",
      titulo: "Aproveite!",
      descricao: "Combinamos o pagamento e a entrega/retirada, e aí é só saborear a confeitaria afetiva.",
      icone: "✨"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <span className="font-['Moontime'] text-5xl md:text-6xl text-[#E10B0A] drop-shadow-sm">
            Passo a passo
          </span>
          <h2 className="font-['Belleza'] text-4xl md:text-5xl text-[#7F0605] font-bold mt-2">
            Como Funciona
          </h2>
        </div>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Linha decorativa de conexão (aparece só no desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#CDA67A]/30 z-0"></div>

          {passos.map((passo, index) => (
            <div 
              key={index} 
              className="bg-[#EDDFCF] p-8 rounded-3xl text-center border border-[#CDA67A]/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative z-10"
            >
              {/* Bolinha com o Número */}
              <div className="w-14 h-14 bg-[#7F0605] text-[#EDDFCF] rounded-full flex items-center justify-center text-2xl font-bold font-['Belleza'] mx-auto mb-6 shadow-md border-4 border-white">
                {passo.numero}
              </div>
              
              <div className="text-5xl mb-4">{passo.icone}</div>
              
              <h3 className="font-['Belleza'] text-[#7F0605] text-2xl font-bold mb-3">
                {passo.titulo}
              </h3>
              
              <p className="font-['Manjari'] text-[#76542D] leading-relaxed">
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}