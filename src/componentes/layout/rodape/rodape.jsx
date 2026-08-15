import './rodape.css';

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <div className="rodape-info">
          <h3>Doces Lud</h3>
          <p>Confeitaria Artesanal & Brigadeiros Gourmet</p>
          <p>Ar 07 conjunto 07 casa 10</p>
        </div>
        
        <div className="rodape-links">
          <a 
            href="https://wa.me/5561991413865" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="rodape-creditos">
        <p>
          © {new Date().getFullYear()} Doces Lud. Todos os direitos reservados.
        </p>
        <p className="powered-by">
          Powered by <a href="https://liberstack.com" target="_blank" rel="noopener noreferrer">liberstack</a>
        </p>
      </div>
    </footer>
  );
}