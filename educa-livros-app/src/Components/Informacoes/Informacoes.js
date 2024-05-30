import React from 'react';
import { Link } from 'react-router-dom';
import './Informacoes.css';
import instagramLogo from '../imgs/instagram-logo.png'; 
import criancaLendo from '../imgs/crianca-lendo.jpg'; 
import seta from '../imgs/seta.png';

function Informacoes() {
  return (
    <main>
      <section className="p-5 text-dark bg-color2">
        <div className="container" style={{ padding: '4rem 0 4rem 0' }}>
          <h2 className="color-3 mb-5">Sobre a EducaLivros</h2>
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
          <div className="text-center mt-4 equipe-button-container">
            <img src={seta} alt="Seta" className="seta-img" />
            <Link to="/equipe" className="btn btn-primary equipe-button mt-3">Conheça nossa equipe de desenvolvedores!</Link>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white p-5">
        <div className="container text-center">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <img src={instagramLogo} alt="Logo do Instagram" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            <h2 className="color-2 mb-0">Siga-nos no Instagram</h2>
          </div>
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
