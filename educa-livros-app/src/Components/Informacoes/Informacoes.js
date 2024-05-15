import React from 'react';
import Header from '../Header';
import './Informacoes.css'; 
import Footer from '../Footer/Footer';

function Informacoes() {
    return (
        <div className="informacoes">
            <Header />
            <main>
                <h2>Sobre a EducaLivros</h2>
                <p>Nossa missão é proporcionar acesso fácil e acessível a uma ampla variedade de livros e materiais educacionais, incentivando a leitura e o aprendizado em todas as idades.</p>
                <h3>Visão</h3>
                <p>Ser reconhecida como uma líder inovadora no mercado de livros e materiais educativos, inspirando uma sociedade mais informada e educada.</p>
                <h3>Valores</h3>
                <ul>
                    <li><strong>Compromisso com a Educação:</strong> Acreditamos no poder da educação para transformar vidas.</li>
                    <li><strong>Inclusão:</strong> Trabalhamos para tornar o acesso à educação mais inclusivo para todos.</li>
                    <li><strong>Integridade:</strong> Conduzimos nossos negócios com honestidade e ética.</li>
                    <li><strong>Inovação:</strong> Estamos constantemente buscando inovações para melhorar a experiência de aprendizado.</li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}

export default Informacoes;
