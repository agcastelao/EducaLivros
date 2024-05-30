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

const produtos = [
  {
    categoria: 'Fardas Escolares',
    itens: [
      { id: 1, nome: 'Camisa escolar', desc: 'Camisas confortáveis para o dia a dia do seu filho.', preco: 'R$40,00', img: camisaEscolarImg },
      { id: 2, nome: 'Calça Escolar', desc: 'Calças confortáveis para o uso diário escolar.', preco: 'R$40,00', img: calcaEscolarImg },
      { id: 3, nome: 'Short Escolar', desc: 'Shorts leves e confortáveis para atividades escolares.', preco: 'R$40,00', img: shortEscolarImg }
    ]
  },
  {
    categoria: 'Livros',
    itens: [
      { id: 4, nome: 'ONE PIECE', desc: 'Echiro Oda', preco: 'R$30,00', img: livroOnePieceImg },
      { id: 5, nome: 'SENHOR DOS ANEIS', desc: 'J.R.R. Tolkien', preco: 'R$45,00', img: livroSenhorAneisImg },
      { id: 6, nome: 'HARRY POTTER', desc: 'J.K. Rowling', preco: 'R$50,00', img: livroHarryPotterImg },
      { id: 7, nome: 'PAI RICO PAI POBRE', desc: 'Robert T. Kiyosaki', preco: 'R$35,00', img: livroPaiRicoPaiPobreImg },
      { id: 8, nome: 'O INVESTIDOR INTELIGENTE', desc: 'Benjamin Graham', preco: 'R$40,00', img: livroInvestidorInteligenteImg },
      { id: 9, nome: 'AÇÕES COMUNS, LUCROS EXTRAORDINÁRIOS', desc: 'Philip Fisher', preco: 'R$45,00', img: livroAcoesComunsImg },
      { id: 10, nome: 'A Estrutura das Revoluções Científicas', desc: 'Thomas S. Kuhn', preco: 'R$55,00', img: livroEstruturaRevolucaoImg },
      { id: 11, nome: 'Como a Mente Funciona', desc: 'Steven Pinker', preco: 'R$60,00', img: livroComoMenteFuncionaImg },
      { id: 12, nome: 'Os Limites da Interpretação', desc: 'Umberto Eco', preco: 'R$50,00', img: livroLimitesInterpretacaoImg }
    ]
  },
  {
    categoria: 'Cursos Particulares',
    itens: [
      { id: 13, nome: 'Curso de Matemática', desc: 'Melhore suas habilidades matemáticas com nosso curso interativo.', preco: 'R$100,00', img: cursoMatematicaImg },
      { id: 14, nome: 'Curso de Programação para Iniciantes', desc: 'Introdução à programação com foco prático e didático.', preco: 'R$60,00', img: cursoProgramacaoImg },
      { id: 15, nome: 'Curso de Física', desc: 'Explore os fundamentos da física com abordagens interativas.', preco: 'R$100,00', img: cursoFisicaImg },
      { id: 16, nome: 'Curso de Química', desc: 'Aprenda química de forma prática e engajadora.', preco: 'R$100,00', img: cursoQuimicaImg }
    ]
  },
  {
    categoria: 'Ingressos para Eventos',
    itens: [
      { id: 17, nome: 'Ingresso para o Evento de Lançamento de Livros', desc: 'Participe do nosso evento de lançamento e encontre seus autores favoritos.', preco: 'R$50,00', img: ingressoEventoImg }
    ]
  }
];

function Ecommerce() {
  return (
    <main className="ecommerce-main">
      <div className="background"></div>
      <div className="container">
        <h2 className="main-title">Explore Nossos Produtos</h2>
        {produtos.map(categoria => (
          <div key={categoria.categoria} className="categoria">
            <h3 className="section-header">{categoria.categoria}</h3>
            <div className="flex">
              {categoria.itens.map(produto => (
                <div key={produto.id} className="produto-container">
                  <img src={produto.img} alt={produto.nome} className="produto-img" />
                  <div className="produto-info">
                    <h3 className="produto-titulo">{produto.nome}</h3>
                    <p className="produto-desc">{produto.desc}</p>
                    <span className="produto-preco">{produto.preco}</span>
                    <button className="btn-comprar" onClick={() => alert(`${produto.nome} adicionado ao carrinho!`)}>Comprar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Ecommerce;
