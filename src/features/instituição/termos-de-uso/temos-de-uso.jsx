export function TermosDeUso() {
  return (
    <div className="min-h-screen bg-[#EDDFCF] pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto bg-white/70 p-8 md:p-12 rounded-3xl shadow-sm border border-[#CDA67A]/50">
        
        <div className="text-center mb-10">
          <span className="font-['Moontime'] text-4xl text-[#E10B0A] drop-shadow-sm">
            Nossas regrinhas
          </span>
          <h1 className="font-['Belleza'] text-4xl md:text-5xl text-[#7F0605] font-bold mt-2">
            Termos de Uso
          </h1>
        </div>

        <div className="font-['Manjari'] text-[#76542D] space-y-6 text-lg leading-relaxed">
          <p>
            Bem-vindo(a) à Doces Lud! Ao utilizar nosso cardápio virtual e enviar o seu pedido, você concorda com as diretrizes descritas abaixo, feitas para garantir que a sua experiência seja a mais doce possível.
          </p>

          <div>
            <h2 className="font-['Belleza'] text-2xl text-[#7F0605] font-bold mb-2">
              1. Pedidos e Orçamentos
            </h2>
            <p>
              Nosso site funciona como um catálogo interativo. Ao adicionar itens ao carrinho e finalizar, você não realiza o pagamento na hora. O sistema gera uma mensagem detalhada para o nosso WhatsApp, onde confirmaremos a disponibilidade, frete e opções de pagamento.
            </p>
          </div>

          <div>
            <h2 className="font-['Belleza'] text-2xl text-[#7F0605] font-bold mb-2">
              2. Confeitaria Artesanal
            </h2>
            <p>
              Trabalhamos com confeitaria afetiva e ingredientes frescos. Por isso, os produtos demandam tempo de preparo. O prazo exato para retirada ou entrega será sempre alinhado diretamente com você no momento do atendimento.
            </p>
          </div>

          <div>
            <h2 className="font-['Belleza'] text-2xl text-[#7F0605] font-bold mb-2">
              3. Imagens e Ilustrações
            </h2>
            <p>
              As fotos apresentadas em nosso cardápio são ilustrativas. Por ser um trabalho 100% manual e artesanal, podem ocorrer pequenas variações estéticas nos doces, mas garantimos que o sabor e a qualidade serão sempre impecáveis.
            </p>
          </div>

          <hr className="border-[#CDA67A]/30 my-8" />

          <p className="text-center text-sm opacity-70">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
        
      </div>
    </div>
  );
}