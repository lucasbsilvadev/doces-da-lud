import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './navbar/navbar';
import { Rodape } from './rodape/rodape';
import { CarrinhoDrawer } from '../../features/carrinho/carrinho-drawer';

export function LayoutBase() {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const abrirCarrinho = () => setCarrinhoAberto(true);
  const fecharCarrinho = () => setCarrinhoAberto(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#EDDFCF] text-[#76542D] font-['Manjari']">
      <Navbar aoAbrirCarrinho={abrirCarrinho} />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Rodape />
      
      <CarrinhoDrawer 
        aberto={carrinhoAberto} 
        aoFechar={fecharCarrinho} 
      />
    </div>
  );
}