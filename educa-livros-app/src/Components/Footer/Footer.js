import React, { useEffect, useState } from 'react';
import './Footer.css';
import EducaLivrosLogo from '../imgs/EducaLivrosPNG.png';

function Footer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(isAuth === 'true');
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="row py-5 align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">© 2024 EducaLivros <br /> Promovendo a educação através da leitura.</span>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <img src={EducaLivrosLogo} alt="logo" className="img-fluid" style={{ maxHeight: '5rem' }} />
          </div>
          {isAuthenticated && (
            <div className="col-md-4">
              <ul className="nav justify-content-end">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="/informacoes" className="nav-link px-2 text-muted">Informações</a></li>
                <li className="nav-item"><a href="/ecommerce" className="nav-link px-2 text-muted">E-commerce</a></li>
                <li className="nav-item"><a href="/biblioteca" className="nav-link px-2 text-muted">Biblioteca</a></li>
              </ul>
            </div>
          )}
        </div>
        <hr />
      </div>
    </footer>
  );
}

export default Footer;
