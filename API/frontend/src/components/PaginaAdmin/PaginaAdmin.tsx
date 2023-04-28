import Navbar from "./Navbar"
import Footer from "./Footer"
import Tabelas from "./Tabelas"
import { useState, useEffect } from "react"
import Axios from 'axios'

export default function PaginaAdmin() {
    const [usersAll, setUsersAll] = useState({} as any)
    const [usersActions, setUsersActions] = useState({} as any)

    const getUsersAll = async () => {
        try {
          const res = await Axios.get("http://localhost:3001/allusers");
          setUsersAll(res.data)
        } catch (error) {
            console.log(error)
        };
    };

    const getUserActions = async () => {
        try {
          const res = await Axios.get("http://localhost:3001/usersAllAcoes");
          setUsersActions(res.data)
        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        getUsersAll();
    }, [setUsersAll]);

    useEffect(() => {
        getUserActions();
    }, [setUsersActions]);

    return (
        <>
        <Navbar/>
        <Footer/>
        <Tabelas usersAll={usersAll} usersActions={usersActions}/>
        </>
    )
}