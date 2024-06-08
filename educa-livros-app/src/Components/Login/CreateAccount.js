import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateAccount.css';

function CreateAccount() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.typeUsernameX.value;
    const password = e.target.typePasswordX.value;
    const confirmPassword = e.target.typeConfirmPasswordX.value;

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post('/auth/register', { username, password });
      if (response.status === 201) {
        setSuccessMessage('Conta criada com sucesso');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrorMessage('Erro ao criar a conta');
      }
    } catch (error) {
      setErrorMessage('Erro ao criar a conta');
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
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Criar Conta</h2>
                    <p className="text-white-50 mb-5">Por favor preencha os campos abaixo para criar sua conta</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeUsernameX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeUsernameX">Usuário</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typePasswordX">Senha</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typeConfirmPasswordX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeConfirmPasswordX">Confirme sua senha</label>
                      </div>
                      <button className="btn btn-outline-light btn-lg px-5" type="submit">Criar Conta</button>
                    </form>
                  </div>
                  <div>
                    <p className="mb-0">Já possui uma conta? <a href="/login" className="text-white-50 fw-bold">Faça login</a></p>
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

export default CreateAccount;
