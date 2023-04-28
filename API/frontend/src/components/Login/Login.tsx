import { useState } from "react";
import "./Login.css";
import logo from "../img/visiona_logo.png"
import LT from "../img/little_tech.png"
import eyeIconOpen from '../img/open.png';
import eyeIconClose from '../img/close.png';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("" as any);
  const [password, setPassword] = useState("" as any);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validaCampos = () => {
    let vazio = false
    
    if (email === "" || password === "" ) {
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
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      console.log(data)
      if (data.status === "OK") {
        Swal.fire({
          title: "Sucesso",
          html: data.msg,
          icon: 'success',
          confirmButtonColor: '#de940a'
        }).then(() => {
          localStorage.setItem('key_id', data.id)
          localStorage.setItem('key_usuario', email)
          localStorage.setItem('key_tipo', data.tipo)
          
          if (data.tipo === 'Administrador') {
            navigate('/user-admin')
          } else if (data.tipo === 'Comum') {
            navigate('/user')
          }

        })
      } else {
        Swal.fire({
          title: "Erro",
          html: data.msg,
          icon: 'error',
          confirmButtonColor: '#de940a'
        })
      }
    } else {
      msgValidaCampos()
    }

  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const passwordInputType = showPassword ? "text" : "password";
  const passwordIconSrc = showPassword ?   eyeIconOpen : eyeIconClose;

  return (
    <div className="container-lg">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title">
              <img src={logo} alt="logo visiona"/>
            </span>
            <span className="login-form-title"> Bem vindo </span>
            <div className="wrap-input-lg">
              <input
                className={email !== "" ? "has-val input" : "input-lg"}
                type="text"
                id="email"
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
              />
              <span className="focus-input" data-placeholder="Email / Usuário"></span>
            </div>
            <div className="wrap-input-lg">
              <input
                className={password !== "" ? "has-val input" : "input-lg"}
                type={passwordInputType}
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
              <img src={passwordIconSrc} alt="eye icon" onClick={showPasswordHandler} />
            </div>          
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="/cadastro">
                Criar conta
              </a>
            </div>
            <div className="text-center">
              <a className="txt2" href="/token">
                Esqueci minha senha
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

export default Login;