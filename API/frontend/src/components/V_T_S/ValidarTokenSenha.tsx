import logo from '../img/visiona_logo.png';
import LT from "../img/little_tech.png"
import './ValidarTokenSenha.css';
import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ValidarTokenSenha() {
  const [token, setToken] = useState("" as any);
  const navigate = useNavigate()

  const validaCampos = () => {
    let vazio = false
    if (token === '') {
      vazio = true
      return vazio
    }
  };

  function msgValidaCampos() {
    Swal.fire({
      title: 'Alerta',
      html: 'Preencha todos os campos.',
      icon: 'warning',
      confirmButtonColor: '#de940a'
    })
  }

  const tokenCorreto = localStorage.getItem('token')

  const validaToken = (event) => {
    event.preventDefault(); //Página não recarrega!

    if (!validaCampos()) {
      if (token !== tokenCorreto) {
        Swal.fire({
          title: "Erro",
          html: "Token digitado não corresponde ao token enviado para o email.",
          icon: 'error',
          confirmButtonColor: '#de940a'
        })
      } else {
        Swal.fire({
          title: "Sucesso",
          html: "Token validado com sucesso.",
          icon: "success",
          confirmButtonColor: '#de940a'
        }).then(() => navigate('/alterar-senha'))
      }
    } else {
      msgValidaCampos()
    }
  }
  

  return (
    <div className="container-vts">
      <div className="container-token-vts">
        <div className="wrap-vts">
          <form className="vts-form">
            <span className="vts-form-title">
              <img src={logo} alt="logo visiona"/>
            </span>
            <div className="wrap-input-vts">
              <input
                className={token !== "" ? "has-val input" : "input"}
                type="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <span className="focus-input-vts" data-placeholder="Token"></span>
            </div>         
            <div className="container-vts-form-btn">
              <button className="vts-form-btn" onClick={validaToken}>Validar Token</button>
            </div>
          </form>
        </div>
        <div className='logo'>
          <img src={LT} alt="little_tech"></img>
        </div>
      </div>
    </div>
  );
}

export default ValidarTokenSenha;