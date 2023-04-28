import { useState, useEffect } from 'react'
import styles from './PagUsuario.module.css'
import PopupEdicao from '../Popups/PopupEdicao'
import Axios from "axios"


interface Usuario {
    nome: any,
    email: any,
    username: any,
    tipo: any,
    data: any
}


export default function Info(){
    const [IsOpenPopup, setIsOpenPopup] = useState(false)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    const id = localStorage.getItem('key_id')

    useEffect(() => {
        async function obterUsuario(usuarioID : any) {
            try {
                const response = await Axios.get(`http://localhost:3001/read-by-id/${usuarioID}`)
                const data = response.data
                setUsuario(data)
            } catch (error) {
                console.log(error)
            }
        }

        obterUsuario(id)
    }, [])


    return(
        <div className={styles.containerGeralTableUser}>
            <div className={styles.containerInfoDireita}> 
                {usuario ? (
                    <div className={styles.Informações}>
                        <h1 className={styles.paragrafo1}>Informações do usuário</h1>
                        <p className={styles.paragrafo2}><b>Nome: </b> {usuario.nome}</p>
                        <p className={styles.paragrafo2}><b>Email: </b> {usuario.email}</p>
                        <p className={styles.paragrafo2}><b>Usuário: </b>{usuario.username}</p>    
                        <p className={styles.paragrafo2}><b>Tipo: </b>{usuario.tipo}</p>
                        <p className={styles.paragrafo2}><b>Criado: </b>{usuario.data}</p>
                        <button className={styles.botaozao} onClick={setIsOpenPopup.bind(IsOpenPopup, true)}>Editar Informações</button>
                        {IsOpenPopup && <PopupEdicao setIsOpenPopup={setIsOpenPopup} />} 
                    </div>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </div>
    )
}