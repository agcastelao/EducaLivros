import React from 'react';
import './Equipe.css';
import Cau from '../imgs/Cau.jpg';
import Castelao from '../imgs/Castelao.jpg';
import Vital from '../imgs/Vital.jpg';
import Moraes from '../imgs/Moraes.jpg';

function Equipe() {
  return (
    <main className="equipe-main">
      <div className="container">
        <h1 className="equipe-title">Nossa Equipe de Desenvolvedores</h1>
        <div className="equipe-grid">
          <div className="membro">
            <img src={Cau} alt="Cau" className="membro-img" />
            <h3 className="membro-nome">Cau</h3>
            <p className="membro-funcao">Back-End</p>
          </div>
          <div className="membro">
            <img src={Castelao} alt="Castelao" className="membro-img" />
            <h3 className="membro-nome">Castelao</h3>
            <p className="membro-funcao">Back-End</p>
          </div>
          <div className="membro">
            <img src={Vital} alt="Vital" className="membro-img" />
            <h3 className="membro-nome">Vital</h3>
            <p className="membro-funcao">Front-End</p>
          </div>
          <div className="membro">
            <img src={Moraes} alt="Moraes" className="membro-img" />
            <h3 className="membro-nome">Moraes</h3>
            <p className="membro-funcao">Front-End</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Equipe;
