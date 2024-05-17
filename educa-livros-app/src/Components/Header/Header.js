import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div>
            <a className="navbar-brand" href="/">EducaLivros</a>
          </div>
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
                <a className="nav-link active" href="/biblioteca">Biblioteca</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/ecommerce">Nossos produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/login" tabIndex="-1" aria-disabled="true">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
