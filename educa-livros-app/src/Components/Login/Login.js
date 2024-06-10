import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import api from '../Services/Api';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      login,
      senha
    };

    try {
      const response = await api.post('/auth/login', userData);
      if (response.status === 200) {
        setErrorMessage(''); 
        setSuccessMessage('Login sucedido!');
        localStorage.setItem('user', login);
        localStorage.setItem('accessToken', response.data.token);
        localStorage.setItem('isAuthenticated', 'true');
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 2000);
      } else {
        setSuccessMessage(''); 
        setErrorMessage('Usuário ou senha incorretos');
      }
    } catch (error) {
      setSuccessMessage(''); 
      setErrorMessage('Usuário ou senha incorretos');
    }
  };

  return (
    <main>
      <section className="vh-100 gradient-custom login-background">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Por favor digite seu usuário e senha</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeUsernameX">Usuário</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typePasswordX">Senha</label>
                      </div>
                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="/reset-password">Esqueceu a senha?</a>
                      </p>
                      <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                      </div>
                    </form>
                  </div>
                  <div>
                    <p className="mb-0">Não possui uma conta? <a href="/create-account" className="text-white-50 fw-bold">Crie sua conta</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
