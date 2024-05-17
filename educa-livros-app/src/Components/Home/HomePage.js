import React from 'react';
import './HomePage.css';
import imagemCriancaLivros from '../imgs/imagemCriancaLivros.jpg'; 
import sinalDeInterrogacao from '../imgs/sinal-de-interrogacao.png'; 

function HomePage() {
  return (
    <main>
      <section className="text-energetic home-background">
        <div className="container-fill color-2 px-5" style={{ paddingBottom: '5rem', paddingTop: '16rem' }}>
          <h1>Bem-vindo à Educa Livros</h1>
          <p>Descubra um mundo de aprendizado e aventura</p>
          <a href="/biblioteca" className="btn bg-color1 color-2">Explore a Biblioteca</a>
        </div>
      </section>
      <section className="p-5 text-dark">
        <div className="container" style={{ padding: '4rem 0 4rem 0' }}>
          <div className="container d-flex gap-5 m-0 p-0">
            <div className="col-5">
              <img src={imagemCriancaLivros} className="img-fluid rounded" alt="Criança com livros" />
            </div>
            <div className="col-5 row">
              <h2><strong>Por que escolher EducaLivros?</strong></h2>
              <p><strong>Variedade de Livros</strong><br /><i>Uma ampla seleção de gêneros e títulos para todas as idades.</i></p>
              <p><strong>Ambiente de Aprendizado</strong><br /><i>Espaços dedicados para leitura e estudo.</i></p>
              <p><strong>E-commerce Integrado</strong><br /><i>Compre livros e produtos educacionais diretamente do nosso site.</i></p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark text-white p-5">
        <div className="container d-flex justify-content-center">
          <div>
            <h2 className="color-2" style={{ marginBottom: '3rem' }}>Perguntas Frequentes</h2>
            <div className="d-flex align-items-center gap-3 justify-content-start color-1" style={{ marginBottom: '3.5rem' }}>
              <img src={sinalDeInterrogacao} alt="Interrogação" className="img-fluid" style={{ width: '25px' }} />
              <div>
                <h3>Como posso me associar?</h3>
                <p style={{ color: 'rgb(107, 114, 128)' }}><i>Você pode se associar através do nosso site, visitando a seção 'Biblioteca'.</i></p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 justify-content-start color-1" style={{ marginBottom: '3.5rem' }}>
              <img src={sinalDeInterrogacao} alt="Interrogação" className="img-fluid" style={{ width: '25px' }} />
              <div>
                <h3>Os livros estão disponíveis para compra?</h3>
                <p style={{ color: 'rgb(107, 114, 128)' }}><i>Sim, oferecemos opções de compra e empréstimo de livros.</i></p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 justify-content-start color-1" style={{ marginBottom: '3.5rem' }}>
              <img src={sinalDeInterrogacao} alt="Interrogação" className="img-fluid" style={{ width: '25px' }} />
              <div>
                <h3>Há descontos para instituições de ensino?</h3>
                <p style={{ color: 'rgb(107, 114, 128)' }}><i>Oferecemos descontos especiais para escolas e instituições educacionais.</i></p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 justify-content-start color-1">
              <img src={sinalDeInterrogacao} alt="Interrogação" className="img-fluid" style={{ width: '25px' }} />
              <div>
                <h3>Como posso encontrar o livro que procuro?</h3>
                <p style={{ color: 'rgb(107, 114, 128)' }}><i>Use nossa função de busca para encontrar rapidamente o que você precisa.</i></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
