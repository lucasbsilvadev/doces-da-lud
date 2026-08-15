import { Link } from 'react-router-dom';

export function Navbar({ aoAbrirCarrinho }) {
  return (
    <header className="fixed top-0 w-full bg-[#EDDFCF]/90 backdrop-blur-md z-50 shadow-sm border-b border-[#CDA67A] transition-all">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          {/* Se a logo não carregar, temos o texto de fallback na fonte correta */}
          <img src="/src/assets/logos/logo-lud-nobg.png" alt="Doces Lud" className="h-12 w-auto object-contain" />
          <span className="font-['Belleza'] text-2xl text-[#7F0605] hidden sm:block">Doces Lud</span>
        </Link>

        {/* Menu & Carrinho */}
        <nav className="flex items-center gap-6">
          <button 
            onClick={aoAbrirCarrinho}
            className="flex items-center gap-2 bg-[#E10B0A] hover:bg-[#7F0605] text-white px-5 py-2.5 rounded-full font-['Manjari'] font-bold transition-colors"
          >
            <span>Meu Pedido</span>
          </button>
        </nav>
      </div>
    </header>
  );
}