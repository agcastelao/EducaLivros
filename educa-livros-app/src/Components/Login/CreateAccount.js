import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import api from '../Services/Api';

function CreateAccount() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const username = e.target.value;
    // const password = e.target.value;
    // const confirmPassword = e.target.value;

    if (senha !== confirmSenha) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    const data = {
      login,
      senha
    }

    try {
      const response = await api.post('/auth/register', data);
      if (response.status === 200) {
        setSuccessMessage('Conta criada com sucesso!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrorMessage('Erro ao criar conta 1');
      }
    } catch (error) {
      setErrorMessage('Erro ao criar conta');
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
                    <h2 className="fw-bold mb-2 text-uppercase">Crie sua conta</h2>
                    <p className="text-white-50 mb-5">Por favor preencha os campos abaixo</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typeUsernameX">Usuário</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="typePasswordX">Senha</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="password" value={confirmSenha} onChange={(e) => setConfirmSenha(e.target.value)} className="form-control form-control-lg" required />
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
