import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import profilePic from '../imgs/profile-pic.png';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(isAuth === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header>
      <nav className="navbar-do-header navbar-expand-lg navbar-dark bg-dark">
        <div className="container-do-header">
          <Link className="navbar-brand" to="/">EducaLivros</Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/informacoes">Informações</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/biblioteca">Biblioteca</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ecommerce">Nossos Produtos</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#!" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={profilePic} alt="Profile" className="profile-icon" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                      <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item nav-item-special">
                    <Link className="nav-link nav-link-special" to="/login">Login</Link>
                  </li>
                  <li className="nav-item nav-item-special">
                    <Link className="nav-link nav-link-special" to="/create-account">Registre-se</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
