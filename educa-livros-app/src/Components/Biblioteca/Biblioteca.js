import React from 'react';
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

function Biblioteca() {
  return (
    <div className="biblioteca">
      <h1 className="estiloTITULO">FICÇÃO</h1>
      <div className="livro">
        <img src={onePieceImg} alt="Livro ONE PIECE" />
        <p>Echiro Oda</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
      <div className="livro">
        <img src={senhorDosAneisImg} alt="Livro SENHOR DOS ANEIS" />
        <p>J.R.R. Tolkien</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
      <div className="livro">
        <img src={harryPotterImg} alt="Livro HARRY POTTER" />
        <p>J.K. Rowling</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
      <h1 className="estiloTITULO">FINANÇAS</h1>
      <div className="livro">
        <img src={paiRicoPaiPobreImg} alt="Livro PAI RICO PAI POBRE" />
        <p>Robert T. Kiyosaki</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
      <div className="livro">
        <img src={investidorInteligenteImg} alt="livro O INVESTIDOR INTELIGENTE" />
        <p>Benjamin Graham</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
      <div className="livro">
        <img src={acoesComunsImg} alt="livro AÇÕES COMUNS, LUCROS EXTRAORDINÁRIOS" />
        <p>Philip Fisher</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
      <h1 className="estiloTITULO">CONHECIMENTO</h1>
      <div className="livro">
        <img src={estruturaRevolucaoCientificaImg} alt="livro A ESTRUTURA DAS REVOLUÇÕES CIENTÍFICAS" />
        <p>Thomas S. Kuhn</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
      <div className="livro">
        <img src={comoMenteFuncionaImg} alt="livro COMO A MENTE FUNCIONA" />
        <p>Steven Pinker</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
      <div className="livro">
        <img src={limitesInterpretacaoImg} alt="livro OS LIMITES DA INTERPRETAÇÃO" />
        <p>Umberto Eco</p>
        <a href="/ecommerce"><button>Comprar</button></a>
      </div>
    </div>
  );
}

export default Biblioteca;
