import styles from './PagAdmin.module.css'

export default function Navbar(){

    const removeSessao = () => {
        localStorage.removeItem('key_id')
        localStorage.removeItem('key_usuario')
        localStorage.removeItem('key_tipo')
    }
    
    return(
        <div className={styles.Navbar}>
            <div className={styles.ladoEsquerdo}>
                <span className={styles.logo}>
                    <img src="Imagens/logoVisiona.png" alt="Logo Visiona"/>
                </span>
                <span className={styles.separador}>
                    |
                </span>
                <span className={styles.txt1}>
                    Operação:
                </span>
                <span className={styles.txt2}>
                    Gerenciamento de usuários
                </span>
            </div>
            <div className={styles.ladoDireito}>
                <div className={styles.dropdown}>
                    <img src="Imagens/user.png" alt="Logo Usuario" />
                    <span className={styles.dropdownMenu}>
                        <a href='/login'>Informações</a>
                        <a href='/'>Editar</a>
                        <a href="/login" onClick={removeSessao}>Sair</a>
                    </span>
                </div>
            </div>
        </div>
    )
}