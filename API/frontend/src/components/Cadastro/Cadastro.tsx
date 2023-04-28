import { useState } from "react";
import "./Cadastro.css";
import LT from "../img/little_tech.png"
import logo from "../img/visiona_logo.png"
import eyeIconOpen from '../img/open.png';
import eyeIconClose from '../img/close.png';
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Cadastro() {
  const [nome, setNome] = useState("" as any)
  const [email, setEmail] = useState("" as any)
  const [nomeUsuario, setNomeUsuario] = useState("" as any)
  const [password, setPassword] = useState("" as any)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const validaCampos = () => {
    let vazio = false
    if (nome === '' || email === '' || nomeUsuario === '' || password === '') {
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

  const handleSubmit = async (event : any) => {
    event.preventDefault()
    
    if (!validaCampos()) {
      await Axios.post("http://localhost:3001/registro", {
        nome: nome,
        email: email,
        nomeUsuario: nomeUsuario,
        senha: password,
      }).then((response) => {
        console.log(response.data)
        if (response.data.msg !== " "){
          Swal.fire({
            title: 'Sucesso',
            html: response.data.msg,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: "Ir para Login",
            confirmButtonColor: '#de940a'
          }).then(() => (navigate('/login')))
        } else if (response.data.erro) {
          console.log(response.data.erro)
        }

      })
    } else {
      msgValidaCampos()
    }
    
  }
    
  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }

  const passwordInputTypeSenha = showPassword ? "text" : "password";
  const passwordIconSrc = showPassword ?   eyeIconOpen : eyeIconClose;


  return (
    <div className="container-cd">
      <div className="container-cadastro">
        <div className="wrap-cadastro">
          <form className="cadastro-form" onSubmit={handleSubmit}>
            <span className="cadastro-form-title">
             <img src={logo} alt="logo visiona"/>
            </span>
            <div className="wrap-input-cd">
              <input
                className= {nome !== "" ? "has-val input" : "input-cd"}
                type="text"
                name="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
              <span className="focus-input-cd" data-placeholder="Nome"></span>

            </div>
            <div className="wrap-input-cd">
              <input
                className={email !== "" ? "has-val input" : "input-cd"}
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="focus-input-cd" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input-cd">
              <input
                className= {nomeUsuario !== "" ? "has-val input" : "input-cd"}
                type="text"
                name="nomeUsuario"
                value={nomeUsuario}
                onChange={(event) => setNomeUsuario(event.target.value)}
              />
              <span className="focus-input-cd" data-placeholder="Nome de usuário"></span>

            </div>
            <div className="wrap-input-cd">
              <input
                className={password !== "" ? "has-val input" : "input-cd"}
                type={passwordInputTypeSenha}
                name="senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="focus-input-cd" data-placeholder="Senha"></span>
              <img src={passwordIconSrc} alt="eye icon" onClick={showPasswordHandler} />
            </div>

            <div className="container-cadastro-form-btn">
              <button className="cadastro-form-btn">Cadastrar</button> 
            </div>

            <div className="text-center">
              <span className="txt1">Já possui uma conta? </span>
              <a className="txt2" href="/login">
                Login
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

export default Cadastro;