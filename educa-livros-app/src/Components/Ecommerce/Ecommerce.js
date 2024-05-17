import React from 'react';
import './Ecommerce.css';
import camisaEscolarImg from '../imgs/camisa escolar.jpg';
import calcaEscolarImg from '../imgs/calça escolar.png';
import shortEscolarImg from '../imgs/short escolar.jpg';
import cursoMatematicaImg from '../imgs/img curso de mat.webp';
import cursoProgramacaoImg from '../imgs/capa-programacao.jpg';
import cursoFisicaImg from '../imgs/Curso de fisica.jpg';
import cursoQuimicaImg from '../imgs/Curso de quimica.jpg';
import ingressoEventoImg from '../imgs/Ingresso img.webp';
import livroOnePieceImg from '../imgs/img OP - livro 1-250px.webp';
import livroSenhorAneisImg from '../imgs/novaFotoSenhorAneis.jpg';
import livroHarryPotterImg from '../imgs/FotoLivroHarryPotter.webp';
import livroPaiRicoPaiPobreImg from '../imgs/livroPaiRico-250px.jpg';
import livroInvestidorInteligenteImg from '../imgs/InvestidorinteligenteLIVRO-250px.jpg';
import livroAcoesComunsImg from '../imgs/AÇÕES COMUNS LIVRO-250PX.jpg';
import livroEstruturaRevolucaoImg from '../imgs/A estrutura da Revolução cientifica-250px.jpg';
import livroComoMenteFuncionaImg from '../imgs/Como a mente funciona-250px.jpg';
import livroLimitesInterpretacaoImg from '../imgs/os limites da interpretacao -250 px.jpg';

function Ecommerce() {
  return (
    <main className="ecommerce-main">
      <h2>Explore Nossos Produtos</h2>
      <h3 className="section-header">Fardas Escolares</h3>
      <div className="flex">
        <div className="produto-container">
          <img src={camisaEscolarImg} alt="Camisa escolar" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Camisa escolar</h3>
            <p className="produto-desc">Camisas confortáveis para o dia a dia do seu filho.</p>
            <span className="produto-preco">R$40,00</span>
            <button className="btn-comprar" onClick={() => alert('Camisa escolar adicionada ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={calcaEscolarImg} alt="Calça Escolar" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Calça Escolar</h3>
            <p className="produto-desc">Calças confortáveis para o uso diário escolar.</p>
            <span className="produto-preco">R$40,00</span>
            <button className="btn-comprar" onClick={() => alert('Calça Escolar adicionada ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={shortEscolarImg} alt="Short Escolar" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Short Escolar</h3>
            <p className="produto-desc">Shorts leves e confortáveis para atividades escolares.</p>
            <span className="produto-preco">R$40,00</span>
            <button className="btn-comprar" onClick={() => alert('Short Escolar adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
      </div>

      <h3 className="section-header">Cursos Particulares</h3>
      <div className="flex">
        <div className="produto-container">
          <img src={cursoMatematicaImg} alt="Curso de Matematica" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Curso de Matemática</h3>
            <p className="produto-desc">Melhore suas habilidades matemáticas com nosso curso interativo.</p>
            <span className="produto-preco">R$100,00</span>
            <button className="btn-comprar" onClick={() => alert('Curso de Matemática adicionado ao carrinho!')}>Inscrever-se</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={cursoProgramacaoImg} alt="Curso de Programação" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Curso de Programação para Iniciantes</h3>
            <p className="produto-desc">Introdução à programação com foco prático e didático.</p>
            <span className="produto-preco">R$60,00</span>
            <button className="btn-comprar" onClick={() => alert('Curso de Programação adicionado ao carrinho!')}>Inscrever-se</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={cursoFisicaImg} alt="Curso de Física" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Curso de Física</h3>
            <p className="produto-desc">Explore os fundamentos da física com abordagens interativas.</p>
            <span className="produto-preco">R$100,00</span>
            <button className="btn-comprar" onClick={() => alert('Curso de Física adicionado ao carrinho!')}>Inscrever-se</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={cursoQuimicaImg} alt="Curso de Química" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Curso de Química</h3>
            <p className="produto-desc">Aprenda química de forma prática e engajadora.</p>
            <span className="produto-preco">R$100,00</span>
            <button className="btn-comprar" onClick={() => alert('Curso de Química adicionado ao carrinho!')}>Inscrever-se</button>
          </div>
        </div>
      </div>

      <h3 className="section-header">Ingressos para Eventos</h3>
      <div className="flex">
        <div className="produto-container">
          <img src={ingressoEventoImg} alt="Ingresso para Evento" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Ingresso para o Evento de Lançamento de Livros</h3>
            <p className="produto-desc">Participe do nosso evento de lançamento e encontre seus autores favoritos.</p>
            <span className="produto-preco">R$50,00</span>
            <button className="btn-comprar" onClick={() => alert('Ingresso para Evento adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
      </div>

      <h3 className="section-header">Livros</h3>
      <div className="flex">
        <div className="produto-container">
          <img src={livroOnePieceImg} alt="Livro ONE PIECE" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">ONE PIECE</h3>
            <p className="produto-desc">Echiro Oda</p>
            <span className="produto-preco">R$30,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro ONE PIECE adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={livroSenhorAneisImg} alt="Livro SENHOR DOS ANEIS" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">SENHOR DOS ANEIS</h3>
            <p className="produto-desc">J.R.R. Tolkien</p>
            <span className="produto-preco">R$45,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro SENHOR DOS ANEIS adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={livroHarryPotterImg} alt="Livro HARRY POTTER" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">HARRY POTTER</h3>
            <p className="produto-desc">J.K. Rowling</p>
            <span className="produto-preco">R$50,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro HARRY POTTER adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={livroPaiRicoPaiPobreImg} alt="Livro PAI RICO PAI POBRE" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">PAI RICO PAI POBRE</h3>
            <p className="produto-desc">Robert T. Kiyosaki</p>
            <span className="produto-preco">R$35,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro PAI RICO PAI POBRE adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={livroInvestidorInteligenteImg} alt="Livro O INVESTIDOR INTELIGENTE" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">O INVESTIDOR INTELIGENTE</h3>
            <p className="produto-desc">Benjamin Graham</p>
            <span className="produto-preco">R$40,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro O INVESTIDOR INTELIGENTE adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={livroAcoesComunsImg} alt="Livro AÇÕES COMUNS, LUCROS EXTRAORDINÁRIOS" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">AÇÕES COMUNS, LUCROS EXTRAORDINÁRIOS</h3>
            <p className="produto-desc">Philip Fisher</p>
            <span className="produto-preco">R$45,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro AÇÕES COMUNS, LUCROS EXTRAORDINÁRIOS adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={livroEstruturaRevolucaoImg} alt="A Estrutura das Revoluções Científicas" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">A Estrutura das Revoluções Científicas</h3>
            <p className="produto-desc">Thomas S. Kuhn</p>
            <span className="produto-preco">R$55,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro A Estrutura das Revoluções Científicas adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={livroComoMenteFuncionaImg} alt="Como a Mente Funciona" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Como a Mente Funciona</h3>
            <p className="produto-desc">Steven Pinker</p>
            <span className="produto-preco">R$60,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro Como a Mente Funciona adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
        <div className="produto-container">
          <img src={livroLimitesInterpretacaoImg} alt="Os Limites da Interpretação" className="produto-img" />
          <div className="produto-info">
            <h3 className="produto-titulo">Os Limites da Interpretação</h3>
            <p className="produto-desc">Umberto Eco</p>
            <span className="produto-preco">R$50,00</span>
            <button className="btn-comprar" onClick={() => alert('Livro Os Limites da Interpretação adicionado ao carrinho!')}>Comprar</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Ecommerce;
