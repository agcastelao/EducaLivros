import React from 'react';
import './Informacoes.css';
import instagramLogo from '../imgs/instagram-logo.png'; 
import criancaLendo from '../imgs/crianca-lendo.jpg'; 

function Informacoes() {
  return (
    <main>
      <section className="p-5 text-dark bg-color2">
        <div className="container">
          <h2 className="informacoes-header">Sobre a EducaLivros</h2>
          <div className="informacoes-section">
            <div className="informacoes-content">
              <img src={criancaLendo} className="img-fluid rounded" alt="Criança com livros" />
            </div>
            <div className="informacoes-content">
              <h2>Propósito</h2>
              <p>Na EducaLivros, nosso objetivo é promover o conhecimento e a educação.</p>
              <h2>Missão</h2>
              <p>Nossa missão é proporcionar acesso fácil e acessível a uma ampla variedade de livros e materiais educacionais, incentivando a leitura e o aprendizado em todas as idades.</p>
              <h2>Valores</h2>
              <p>Nosso compromisso é com a qualidade, acessibilidade e diversidade, buscando sempre inovar e contribuir para a formação de uma sociedade mais educada e informada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="informacoes-footer">
        <div className="informacoes-footer-left">
          <div className="instagram-logo">
            <img src={instagramLogo} alt="Logo do Instagram" />
            <h2>Siga-nos no Instagram</h2>
          </div>
          <p><strong>@educalivros</strong></p>
        </div>
        <div className="informacoes-footer-right">
          <h2 className="event-header">Evento de Lançamento de Livros</h2>
          <div className="event-details">
            <p><strong>Data:</strong> 15 de Maio de 2024</p>
            <p><strong>Local:</strong> Teatro Municipal</p>
            <p><strong>Descrição:</strong> Junte-se a nós para o lançamento de novos títulos emocionantes e conheça os autores em uma noite de celebração da literatura!</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Informacoes;
