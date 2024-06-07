import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Ecommerce from './Components/Ecommerce/Ecommerce';
import HomePage from './Components/Home/HomePage';
import Informacoes from './Components/Informacoes/Informacoes';
import Equipe from './Components/Equipe/Equipe';
import Login from './Components/Login/Login';
import CreateAccount from './Components/Login/CreateAccount';
import ResetPassword from './Components/Login/ResetPassword';
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
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
