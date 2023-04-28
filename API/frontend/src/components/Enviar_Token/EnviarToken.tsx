import { useState } from "react";
import "./EnviarToken.css";
import logo from "../img/visiona_logo.png"
import LT from "../img/little_tech.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



function EnviarToken() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const validaCampos = () => {
    let vazio = false
    if (email === "") {
      vazio = true
      return vazio
    }
  }

  function msgValidaCampos() {
    Swal.fire({
      title: 'Alerta',
      html: 'Preencha todos os campos.',
      icon: 'warning',
      confirmButtonColor: '#de940a'
    })
  }

  const handleClickEmail = async (event : any) => { // Evento de clique no botão, enviando para o servidor Back-End
    event.preventDefault()

    if (!validaCampos()) {
      await axios.post('http://localhost:3001/enviar-token', {
        email: email
      }).then((response) => {
        console.log(response.data)
        if (response.data.msg !== '') {
          localStorage.setItem('email_para_token', email)
          localStorage.setItem('token', response.data.token)
          navigate('/token/confirmar-token-senha')
        }
      })
    } else {
      msgValidaCampos()
    }
  }

  return (
    <div className="container-tk">
      <div className="container-token">
        <div className="wrap-token">
          <form className="token-form">
            <span className="token-form-title">
              <img src={logo} alt="logo visiona"/>
            </span>
            <span className="text-center"> Digite o seu E-mail para recuperar a sua conta:</span>
            <div className="wrap-input-tk">
              <input
                className={email !== "" ? "has-val input" : "input-tk"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input-tk" data-placeholder="Email"></span>
            </div>         
            <div className="container-token-form-btn">
              <button className="token-form-btn" onClick={handleClickEmail}>Enviar</button>
            </div>
            <div className="text-center">
              <a className="txt1" href="/login">
                Voltar para a página de login
              </a>
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

export default EnviarToken;