import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Ecommerce from './Components/Ecommerce/Ecommerce';
import HomePage from './Components/Home/HomePage';
import Informacoes from './Components/Informacoes/Informacoes';
import Login from './Components/Login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/informacoes" element={<Informacoes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
