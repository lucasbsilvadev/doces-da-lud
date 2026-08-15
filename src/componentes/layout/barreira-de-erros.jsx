import React from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export class BarreiraDeErro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temErro: false, erro: null };
  }


  static getDerivedStateFromError(erro) {
    return { temErro: true, erro };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Erro crítico capturado na interface Doces Lud:", error, errorInfo);
  }

  render() {
    if (this.state.temErro) {
      return (
        <div className="min-h-screen bg-[#EDDFCF] text-[#76542D] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-[#EDDFCF]/90 p-8 rounded-2xl border border-[#CDA67A] shadow-xl backdrop-blur-sm space-y-4">
            <div className="flex justify-center text-[#E10B0A]">
              <AlertTriangle className="w-12 h-12" />
            </div>
            
            <h2 className="font-['Belleza'] text-3xl text-[#7F0605]">
              Ops! Tivemos um imprevisto
            </h2>
            
            <p className="font-['Manjari'] text-sm">
              Ocorreu um erro ao tentar processar essa interface. Tente atualizar a página.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 w-full bg-[#E10B0A] hover:bg-[#7F0605] text-[#EDDFCF] font-bold py-3 px-6 rounded-full border border-[#CDA67A] transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
              Recarregar Aplicação
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}