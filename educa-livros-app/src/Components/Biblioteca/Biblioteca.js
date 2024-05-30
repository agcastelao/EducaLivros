import React, { useState } from 'react';
import './Biblioteca.css';
import onePieceImg from '../imgs/img OP - livro 1-250px.webp';
import senhorDosAneisImg from '../imgs/novaFotoSenhorAneis.jpg';
import harryPotterImg from '../imgs/FotoLivroHarryPotter.webp';
import paiRicoPaiPobreImg from '../imgs/livroPaiRico-250px.jpg';
import investidorInteligenteImg from '../imgs/InvestidorinteligenteLIVRO-250px.jpg';
import acoesComunsImg from '../imgs/AÇÕES COMUNS LIVRO-250PX.jpg';
import estruturaRevolucaoCientificaImg from '../imgs/A estrutura da Revolução cientifica-250px.jpg';
import comoMenteFuncionaImg from '../imgs/Como a mente funciona-250px.jpg';
import limitesInterpretacaoImg from '../imgs/os limites da interpretacao -250 px.jpg';

const livros = [
  { id: 1, categoria: 'Ficção', titulo: 'ONE PIECE', autor: 'Echiro Oda', img: onePieceImg },
  { id: 2, categoria: 'Ficção', titulo: 'SENHOR DOS ANEIS', autor: 'J.R.R. Tolkien', img: senhorDosAneisImg },
  { id: 3, categoria: 'Ficção', titulo: 'HARRY POTTER', autor: 'J.K. Rowling', img: harryPotterImg },
  { id: 4, categoria: 'Finanças', titulo: 'PAI RICO PAI POBRE', autor: 'Robert T. Kiyosaki', img: paiRicoPaiPobreImg },
  { id: 5, categoria: 'Finanças', titulo: 'O INVESTIDOR INTELIGENTE', autor: 'Benjamin Graham', img: investidorInteligenteImg },
  { id: 6, categoria: 'Finanças', titulo: 'AÇÕES COMUNS, LUCROS EXTRAORDINÁRIOS', autor: 'Philip Fisher', img: acoesComunsImg },
  { id: 7, categoria: 'Conhecimento', titulo: 'A ESTRUTURA DAS REVOLUÇÕES CIENTÍFICAS', autor: 'Thomas S. Kuhn', img: estruturaRevolucaoCientificaImg },
  { id: 8, categoria: 'Conhecimento', titulo: 'COMO A MENTE FUNCIONA', autor: 'Steven Pinker', img: comoMenteFuncionaImg },
  { id: 9, categoria: 'Conhecimento', titulo: 'OS LIMITES DA INTERPRETAÇÃO', autor: 'Umberto Eco', img: limitesInterpretacaoImg },
];

function Biblioteca() {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const livrosFiltrados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
    livro.autor.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  const categorias = [...new Set(livrosFiltrados.map(livro => livro.categoria))];

  return (
    <div className="biblioteca">
      <div className="biblioteca-background"></div>
      <div className="biblioteca-container">
        <h1 className="biblioteca-title">Biblioteca</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Pesquisar livros..."
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
        />
        {categorias.map(categoria => (
          <div key={categoria} className="categoria">
            <h2 className="categoria-title">{categoria}</h2>
            <div className="livros-grid">
              {livrosFiltrados.filter(livro => livro.categoria === categoria).map(livro => (
                <div key={livro.id} className="livro">
                  <img src={livro.img} alt={`Livro ${livro.titulo}`} />
                  <p className="livro-titulo">{livro.autor}</p>
                  <a href="/ecommerce"><button className="comprar-button">Comprar</button></a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Biblioteca;
