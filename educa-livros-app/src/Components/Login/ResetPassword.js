import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

function ResetPassword() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.typeUsernameX.value;
    const password = e.target.typeNewPasswordX.value;
    const confirmPassword = e.target.typeConfirmNewPasswordX.value;

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username);

    if (!user) {
      setErrorMessage('Nome de usuário não encontrado');
      return;
    }

    user.password = password;
    localStorage.setItem('users', JSON.stringify(users));

    setErrorMessage('');
    setSuccessMessage('Senha redefinida com sucesso');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
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
                    <h2 className="fw-bold mb-2 text-uppercase">Esqueceu a Senha</h2>
                    <p className="text-white-50 mb-5">Por favor, insira seu nome de usuário e nova senha</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeUsernameX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeUsernameX">Nome de usuário</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typeNewPasswordX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeNewPasswordX">Nova Senha</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typeConfirmNewPasswordX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeConfirmNewPasswordX">Confirme Nova Senha</label>
                      </div>
                      <button className="btn btn-outline-light btn-lg px-5" type="submit">Redefinir Senha</button>
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

export default ResetPassword;
