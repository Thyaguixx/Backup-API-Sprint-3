//import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import "./PopupEdicaoADM.css"
import Axios from "axios";
import Swal from "sweetalert2";

const PopupEdicao = ({ setIsOpenPopup }) => {
  const [nome, setNome] = useState("" as any)
  const [apelido, setApelido] = useState("" as any)
  const [status, setStatus] = useState("" as any)

  const msgSucesso = () => {
    Swal.fire({
      title: "Sucesso",
      html: "Informações salvas com sucesso.",
      icon: "success",
      showConfirmButton: true,
      confirmButtonColor: '#de940a'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }

  const handleEditarInfo =  async (event : any) => {
    event.preventDefault()

    const id = localStorage.getItem('key_id')

    Swal.fire({
      title: "Deseja salvar as alterações?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      confirmButtonColor: '#de940a',
      cancelButtonText: "Não"
    }).then((result) => {
      if (result.isConfirmed !== true) {
        return
      }
      else {
        switch (result.isConfirmed) {

          case (nome !== '' && apelido === ''):
            Axios.put(`http://localhost:3001/editar-info-nome/${id}`, {
              nome: nome,
            }).then((response) => {
              if (response.data.msg !== ''){
                msgSucesso()
                setIsOpenPopup(this, false)
                return Axios.post(`http://localhost:3001/registrarAcaoNome/${id}`)
                .then((result) => {
                  console.log(result.data.msg)
                })
              } 
            })
          break
  
          case (nome === '' && apelido !== ''):
            Axios.put(`http://localhost:3001/editar-info-apelido/${id}`, {
              username: apelido
            }).then((response) => {
              if (response.data.msg !== '') {
                msgSucesso()
                setIsOpenPopup(this, false)
                return Axios.post(`http://localhost:3001/registrarAcaoApelido/${id}`)
                .then((result) => {
                  console.log(result.data.msg)
                })
              }
            })
          break
  
          case (nome !== '' && apelido !== ''):
            Axios.put(`http://localhost:3001/editar-info/${id}`, {
              nome: nome,
              username: apelido
            }).then((response) => {
              if (response.data.msg !== '') {
                msgSucesso()
                setIsOpenPopup(this, false)
                return Axios.post(`http://localhost:3001/registrarAcaoNomeApelido/${id}`)
                .then((response) => {
                  console.log(response.data)
                })
              }
            })
          break
  
          case (nome === '' && apelido === ''):
            Swal.fire({
              title: "Alerta",
              html: "Preencha ao menos um dos campos.",
              icon: 'warning',
              confirmButtonColor: '#de940a'
            }).then(() => {return} )
            
        }
      }
    })
  }

  return (
    <div className="primeiraDiv"
      // onClick={setIsOpenPopup.bind(this, false)}
    >
      {/* Content */}
      <div className="conteudo" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="header">
          {/* // style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }} */}
          <h1 className="h1">Editar informações</h1>
          <div className="titulo"
            // onClick={setIsOpenPopup.bind(this, false)}
          >
          </div>
        </div>

        {/* Body */}
        <div>
          <p className="espaçamento1">Status</p>
          <input className="espaçamento2" type="text" name="nome" value={status} onChange={(e) => setStatus(e.target.value)}/>
        </div>
       {/* Footer */}
        <footer 
          style={{ borderTop: "1px solid lightgray", paddingTop: "8px" }} 
        >
        <button className="botaoADM" type="button" onClick={setIsOpenPopup.bind(this, false)}><strong>Cancelar</strong></button>
        <button className="botaoADM" type="button" onClick={handleEditarInfo}><strong>Salvar</strong></button>  
        </footer> 
      </div>
    </div>
  );
};

export default PopupEdicao;