import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Ecommerce from './Components/Ecommerce/Ecommerce';
import HomePage from './Components/HomePage/HomePage';
import Informacoes from './Components/Informacoes/Informacoes';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/informacoes" element={<Informacoes />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
