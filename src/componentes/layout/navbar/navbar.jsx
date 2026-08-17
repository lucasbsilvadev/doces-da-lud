import { Link } from 'react-router-dom';
import { LOGOS } from '../../../utils/assets';

export function Navbar({ aoAbrirCarrinho }) {
  return (
    <header className="fixed top-0 w-full bg-[#EDDFCF]/90 backdrop-blur-md z-50 shadow-sm border-b border-[#CDA67A] transition-all">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={LOGOS.logoLudNoBg}  
            alt="Doces Lud" 
            className="h-20 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
          <span className="font-['Belleza'] text-2xl text-[#7F0605] hidden sm:block">
            Doces Lud
          </span>
        </Link>

        {/* Links de Navegação (Centralizados em telas maiores) */}
        <nav className="hidden md:flex items-center gap-8 font-['Manjari'] text-[#7F0605] font-semibold text-lg">
          <a href="#inicio" className="hover:text-[#E10B0A] hover:-translate-y-0.5 transition-all">Início</a>
          <a href="#como-funciona" className="hover:text-[#E10B0A] hover:-translate-y-0.5 transition-all">Como Funciona</a>
          <a href="#cardapio" className="hover:text-[#E10B0A] hover:-translate-y-0.5 transition-all">Cardápio</a>
        </nav>

        {/* Carrinho & CTA */}
        <div className="flex items-center gap-4">
          <button 
            onClick={aoAbrirCarrinho}
            className="flex items-center gap-2 bg-[#E10B0A] hover:bg-[#7F0605] text-white px-5 py-2.5 rounded-full font-['Manjari'] font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            aria-label="Abrir carrinho"
          >
            {/* Ícone de Carrinho SVG Inline */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1"/>
              <circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            <span className="hidden sm:inline">Meu Pedido</span>
          </button>
        </div>
      </div>
    </header>
  );
}