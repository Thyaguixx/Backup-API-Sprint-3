import "./PagUsuario.module.css"
import Info from "./Info";
import NavbarUser from "./NavBarUser";
import FooterUser from "./FooterUser";
import TabelaUser from "./TabelaUser";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function PaginaUsuario() {
  // const [users, setUsers] = useState({} as any)
  const [acoes, setAcoes] = useState({} as any)

  const id = localStorage.getItem('key_id')

  const getAcoes = async () => {
    try {
      const res = await Axios.get(`http://localhost:3001/readAcoes/${id}`);
      setAcoes(res.data)
    } catch (error) {
        console.log(error)
    };
  };

  // useEffect(() => {
  //   getUsers();
  // }, [setUsers]);

  useEffect(() => {
    getAcoes();
  }, [setAcoes]);

  return (
    <>
    <NavbarUser/>
    <Info/>
    <TabelaUser acoes={acoes}/>
    <FooterUser/>
    </>
    
  )
}