import React from 'react';
import './Informacoes.css';
import instagramLogo from '../imgs/instagram-logo.png'; 
import criancaLendo from '../imgs/crianca-lendo.jpg'; 

function Informacoes() {
  return (
    <main>
      <section className="p-5 text-dark bg-color2">
        <div className="container" style={{ padding: '4rem 0 4rem 0' }}>
          <h2 className="color-3">Sobre a EducaLivros</h2>
          <div className="container d-flex gap-5 m-0 p-0">
            <div className="col-5">
              <img src={criancaLendo} className="img-fluid rounded" alt="Criança com livros" />
            </div>
            <div className="col-5 row">
              <h2><strong>Propósito</strong></h2>
              <p><strong>Na EducaLivros, nosso objetivo é promover o conhecimento e a educação.</strong></p>
              <p><strong>Missão</strong><br /><i>Nossa missão é proporcionar acesso fácil e acessível a uma ampla variedade de livros e materiais educacionais, incentivando a leitura e o aprendizado em todas as idades.</i></p>
              <p><strong>Valores</strong><br /><i>Nosso compromisso é com a qualidade, acessibilidade e diversidade, buscando sempre inovar e contribuir para a formação de uma sociedade mais educada e informada.</i></p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white p-5">
        <div className="container d-flex align-items-center">
          <img src={instagramLogo} alt="Logo do Instagram" style={{ width: '30px', height: '30px', marginRight: '10px', marginBottom: '20px' }} />
          <h2 className="color-2 mb-4">Siga-nos no Instagram</h2>
        </div>
        <div className="container">
          <p className="color-2 mb-4"><strong>@educalivros</strong></p>
          <h2 className="color-2 mb-4">Evento de Lançamento de Livros</h2>
          <p className="color-2 mb-4"><strong>Data:</strong> 15 de Maio de 2024</p>
          <p className="color-2 mb-4"><strong>Local:</strong> Teatro Municipal</p>
          <p className="color-2 mb-4"><strong>Descrição:</strong> Junte-se a nós para o lançamento de novos títulos emocionantes e conheça os autores em uma noite de celebração da literatura!</p>
        </div>
      </section>
    </main>
  );
}

export default Informacoes;
