import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row py-5 align-items-center">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="text-muted">© 2024 EducaLivros <br /> Promovendo a educação através da leitura.</span>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src="/imgs/EducaLivrosPNG.png" alt="logo" className="img-fluid" style={{ maxHeight: '5rem' }} />
                    </div>
                    <div className="col-md-4">
                        <ul className="nav justify-content-end">
                            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                            <li className="nav-item"><Link to="/informacoes" className="nav-link px-2 text-muted">Informações</Link></li>
                            <li className="nav-item"><Link to="/ecommerce" className="nav-link px-2 text-muted">E-commerce</Link></li>
                            <li className="nav-item"><Link to="/biblioteca" className="nav-link px-2 text-muted">Biblioteca</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        </footer>
    );
}

export default Footer;
