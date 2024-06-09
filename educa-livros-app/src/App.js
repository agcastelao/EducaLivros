import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
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
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/biblioteca" element={isLoggedIn ? <Biblioteca /> : <Navigate to="/login" />} />
          <Route path="/ecommerce" element={isLoggedIn ? <Ecommerce /> : <Navigate to="/login" />} />
          <Route path="/informacoes" element={isLoggedIn ? <Informacoes /> : <Navigate to="/login" />} />
          <Route path="/equipe" element={isLoggedIn ? <Equipe /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
