import "./ET.css";
import logo from "../img/visiona_logo.png";
import LT from "../img/little_tech.png";
import email from "../img/email.png";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import Swal from "sweetalert2";


function Envio_Token() {
  const navigate = useNavigate()

  const email_enviado = localStorage.getItem('email_para_token');

  const reenviarToken = async () => {
    Axios.post("http://localhost:3001/enviar-token", {
      email: email_enviado
    }).then((response) => {
      console.log(response.data)
      if (response.data.msg !== '') {
        localStorage.setItem('token', response.data.token)
        Swal.fire({
          title: "Sucesso",
          html: 'Token reenviado com sucesso.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1800
        })
      }
    })
  }
  
  const irParaValidaToken = () => {
    localStorage.getItem('token')
    navigate('/token/inserir-token-senha')
  }

  return (
    <div className="container-et">
      <div className="container-enviar_token">
        <div className="wrap-et">
          <form className="et-form">
            <span className="et-form-title">
              <img src={logo} alt="logo visiona"/>
              <div className='email'>
             <img src={email} alt="email_icon"></img>
             </div>
            </span>
            <span className="text-center">Token de recuperação de senha enviado para: {email_enviado}</span>
            <div className="container-et-form-btn">
              <button className="et-form-btn" onClick={irParaValidaToken}>Confirmar token</button>
            </div>
            <div className="text-center">
              <a className="txt2" href="#" onClick={reenviarToken} >
                Reenviar token
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

export default Envio_Token;