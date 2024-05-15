import React from 'react';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Ecommerce from './Components/Ecommerce/Ecommerce';
import HomePage from './Components/HomePage/HomePage';
import Informacoes from './Components/Informacoes/Informacoes';
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <HomePage />
      <Informacoes />
      <Biblioteca />
      <Ecommerce />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
