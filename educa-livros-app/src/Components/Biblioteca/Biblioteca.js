import React from 'react';
import Footer from '../Footer/Footer';
import './Biblioteca.css'; 

const livros = [
    { id: 1, titulo: "ONE PIECE", autor: "Echiro Oda", imagem: "imgs/img OP - livro 1-250px.webp", descricao: "Descrição breve do livro One Piece." },
    { id: 2, titulo: "SENHOR DOS ANEIS", autor: "J.R.R. Tolkien", imagem: "imgs/novaFotoSenhorAneis.jpg", descricao: "Descrição breve do livro Senhor dos Anéis." },
    // Ainda falta adicionar mais livros 
];

function Biblioteca() {
    return (
        <div className="biblioteca">
            <header>
                {/* falta Implementar o cabeçalho (similar ao HomePage) */}
            </header>
            <main>
                <h1>FICÇÃO</h1>
                {livros.map(livro => (
                    <div key={livro.id} className="livro">
                        <img src={livro.imagem} alt={`Capa do livro ${livro.titulo}`} />
                        <h2>{livro.titulo}</h2>
                        <p>{livro.autor}</p>
                        <button onClick={() => alert(`Livro ${livro.titulo} adicionado ao carrinho!`)}>Comprar</button>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default Biblioteca;
