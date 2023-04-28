import { useEffect, useState } from "react";
import "./NS.css";
import LT from "../img/little_tech.png";
import logo from "../img/visiona_logo.png";
import eyeIconOpen from '../img/open.png';
import eyeIconClose from '../img/close.png';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios"

interface UsuarioID {
  id: any,
}

function NS() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [id, setId] = useState<UsuarioID | null>(null)
  const navigate = useNavigate();

  useEffect(() => {

    const email = localStorage.getItem('email_para_token')

    async function obterId() {
        try {
            const response = await Axios.get(`http://localhost:3001/read-by-email/${email}`)
            const data = response.data
            setId(data)
        } catch (error) {
            console.log(error)
        }
        
      }

    obterId()
  }, [])

  localStorage.setItem('key_id', id?.id)

  const msgSucesso = () => {
    Swal.fire({
      title: 'Sucesso',
      icon: 'success',
      html: 'Troca de senha realizada com sucesso.',
      showConfirmButton: true,
      confirmButtonText: "Ir para Login",
      confirmButtonColor: '#de940a'
    }).then(() => (navigate('/login')))
  }

  function msgValidaCampos() {
    Swal.fire({
      title: 'Alerta',
      html: 'Preencha todos os campos.',
      icon: 'warning',
      confirmButtonColor: '#de940a'
    })
  }

  function msgConfirmarSenha() {
    Swal.fire({
      title: 'Atenção',
      html: 'Senhas não são equivalentes.',
      icon: 'info',
      confirmButtonColor: '#de940a'
    })
  }

  function removeSessao() {
    localStorage.removeItem('email_para_token')
    localStorage.removeItem('token')
    localStorage.removeItem('key_id')
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const showConfirmHandler = () => {
    setShowConfirm(!showConfirm);
  };

  const camposPreenchidos = (event) => {

    const id = localStorage.getItem('key_id')

    event.preventDefault()
    if (password === "" || confirm === "") {
      return msgValidaCampos()
    }

    if (password !== confirm) {
      return msgConfirmarSenha()
    }
    
    else {
      msgSucesso()
      removeSessao()
      Axios.put(`http://localhost:3001/editarSenha/${id}`, {
        password: password
      })
      return Axios.post(`http://localhost:3001/registrarAcaoSenha/${id}`)
      .then((result) => {
        console.log(result.data.msg)
      })
    }
  };

  const passwordInputTypeSenha = showPassword ? "text" : "password";
  const passwordInputTypeConfirm = showConfirm ? "text" : "password";
  const passwordIconSrc = showPassword ?   eyeIconOpen : eyeIconClose;
  const confirmIconSrc = showConfirm ?   eyeIconOpen : eyeIconClose;


  return (
    <div className="container-ns">
      <div className="container-ns">
        <div className="wrap-ns">
          <form className="ns-form">
            <span className="ns-form-title">
             <img src={logo} alt="logo visiona"/>
            </span>
            <div className="wrap-input-ns">
              <input
                className={password !== "" ? "has-val input" : "input-ns"}
                type={passwordInputTypeSenha}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input-ns" data-placeholder="Nova senha"></span>
              <img src={passwordIconSrc} alt="eye icon" onClick={showPasswordHandler} />
            </div>
            <div className="wrap-input-ns">
              <input
                className={confirm !== "" ? "has-val input" : "input-ns"}
                type={passwordInputTypeConfirm}
                value={confirm}
                onChange={(e) => {
                setConfirm(e.target.value);
                setPasswordMatch(e.target.value === password);}
              }
             />
              <span className="focus-input-ns" data-placeholder="Confirmar senha"></span>
              <img src={confirmIconSrc} alt="eye icon" onClick={showConfirmHandler} />
            </div>

            <div className="container-ns-form-btn">
              <button className="ns-form-btn" onClick={camposPreenchidos}>Atualizar senha</button> 
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

export default NS;