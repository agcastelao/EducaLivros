import React from 'react'; 
import './HomePage.css'; 
import Footer from '../Footer/Footer';

function HomePage() {
    return (
        <div className="homepage">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">EducaLivros</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/informacoes">Informações</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/biblioteca">Biblioteca</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/ecommerce">Nossos produtos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className="main-content">
                    {/* falta colocar o conteúdo principal da HomePage */}
                    <h1>Bem-vindo à Educa Livros</h1>
                    <p>Descubra um mundo de aprendizado e aventura com nossos livros e recursos.</p>
                    {/* falta incluir o restante do conteúdo*/}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
