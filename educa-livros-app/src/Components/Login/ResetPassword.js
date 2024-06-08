import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ResetPassword.css';

function ResetPassword() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.typeEmailX.value;
    const newPassword = e.target.typeNewPasswordX.value;
    const confirmPassword = e.target.typeConfirmNewPasswordX.value;

    if (newPassword !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post('/auth/reset-password', { email, newPassword });
      if (response.status === 200) {
        setSuccessMessage('Senha redefinida com sucesso');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrorMessage('Erro ao redefinir a senha');
      }
    } catch (error) {
      setErrorMessage('Erro ao redefinir a senha');
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
                    <h2 className="fw-bold mb-2 text-uppercase">Esqueceu a Senha</h2>
                    <p className="text-white-50 mb-5">Por favor, insira seu e-mail e nova senha</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
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
