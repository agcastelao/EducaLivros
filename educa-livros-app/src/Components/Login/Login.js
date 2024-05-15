import React, { useState } from 'react';
import Header from '../Header'; 
import './Login.css';  
import Footer from '../Footer/Footer';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "user@example.com" && senha === "password") {
            console.log("Login bem-sucedido");
            alert("Login bem-sucedido!");
        } else {
            console.log("Credenciais inválidas");
            alert("Credenciais inválidas!");
        }
    };

    return (
        <div className="login">
            <Header /> 
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <button type="submit">Login</button>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Login;
