import React, { useState } from "react";

import logo from "../img/visiona_logo.png";
import LT from "../img/little_tech.png";

import email_icon from '../img/email.png'


function CE() {

  return (
    <div className="container-ce">
      <div className="container-ce">
        <div className="wrap-ce">
          <form className="ce-form">
            <span className="ce-form-title">
              <img src={logo} alt="logo visiona"/>
              <div className='email'>
              <img src={email_icon} alt="email confirm icon"></img>
             </div>
            </span>
            <span className="text-center">E-mail confirmado com sucesso, faça login na página de dentrada.</span>
            <div className="container-ce-form-btn">
              <button className="ce-form-btn">Fazer login</button>
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

export default CE;
