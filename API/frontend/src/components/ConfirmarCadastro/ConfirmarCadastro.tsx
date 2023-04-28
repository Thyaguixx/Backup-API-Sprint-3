import React, { useState } from "react";
import "./ConfirmarCadastro.css";
import logo from "../img/visiona_logo.png"
import LT from "../img/little_tech.png"
import ampulheta from '../img/ampulheta.png'


function ConfirmarCadastro() {
  return (
    <div className="container-ccd">
      <div className="container-confirma-ccd">
        <div className="wrap-confirma-ccd">
          <form className="confirma-form-ccd">
            <span className="confirma-form-title-ccd">
              <img src={logo} alt="logo visiona"/>
              <div className='ampulheta'>
               <img src={ampulheta} alt="ampulheta"></img>
             </div>
            </span>
            <div className="text-center">
              Falta apenas um passo para finalizar seu cadastro. Confirme o token enviado em seu email para ativar sua conta.
            </div>
            <div className="container-confirma-form-btn-ccd">
              <button className="confirma-form-btn">Digitar Token</button>
            </div>
            <div className="text-center">
              <span className="txt1">Caso não tenha recebido:</span>
              <a className="txt2" href="#">
                Reenviar Token
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

export default ConfirmarCadastro;
