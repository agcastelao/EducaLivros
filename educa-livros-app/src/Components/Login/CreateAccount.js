import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.typeNameX.value;
    const email = e.target.typeEmailX.value;
    const password = e.target.typePasswordX.value;
    const confirmPassword = e.target.typeConfirmPasswordX.value;

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    setErrorMessage('');
    setSuccessMessage('Conta criada com sucesso');
    setTimeout(() => {
      navigate('/login');
    }, 2000); // Redireciona após 2 segundos
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
                    <p className="text-white-50 mb-5">Por favor, preencha os campos abaixo para criar uma conta</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeNameX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeNameX">Nome</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typePasswordX">Senha</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typeConfirmPasswordX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeConfirmPasswordX">Confirme sua Senha</label>
                      </div>
                      <button className="btn btn-outline-light btn-lg px-5" type="submit">Criar Conta</button>
                    </form>
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
