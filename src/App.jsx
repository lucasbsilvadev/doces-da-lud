import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// infra / layout
import { BarreiraDeErro } from './componentes/layout/barreira-de-erros';
import { ProvedorCarrinho } from './contexto/provedor-carrinho';
import { LayoutBase } from './componentes/layout/layout-base';
import { PreCarregamento } from './features/instituição/pre-carregamento/pre-carregamento';

// páginas / features
import { PaginaPrincipal } from './features/inicio/pagina-principal';
import { NaoEncontrado } from './features/instituição/nao-encontrado/nao-encontrado';
import { TermosDeUso } from './features/instituição/termos-de-uso/temos-de-uso';

export function App() {
  return (
    <BarreiraDeErro>
      <BrowserRouter>
       <PreCarregamento />
        <ProvedorCarrinho>
          <Routes>
            {/* rotas principais dentro do shell de layout */}
            <Route path="/" element={<LayoutBase />}>
              <Route index element={<PaginaPrincipal />} />
              <Route path="termos-de-uso" element={<TermosDeUso />} />
            </Route>

            {/* tratamento de erros de rota (404) */}
            <Route path="/404" element={<NaoEncontrado />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </ProvedorCarrinho>
      </BrowserRouter>
    </BarreiraDeErro>
  );
}

export default App;