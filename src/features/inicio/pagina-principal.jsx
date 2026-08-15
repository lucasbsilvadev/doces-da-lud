import { Inicio } from './inicio';
import { ComoFunciona } from '../como-funciona/como-funciona';
import { Cardapio } from '../cardapio/cardapio';

export function PaginaPrincipal() {
  return (
    <>
      <Inicio />
      <ComoFunciona />
      <Cardapio />
    </>
  );
}