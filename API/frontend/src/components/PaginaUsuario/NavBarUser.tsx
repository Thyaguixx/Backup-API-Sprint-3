import styles from './PagUsuario.module.css'

export default function NavbarUser(){
    const removerSessao = () => {
        localStorage.removeItem('key_id')
        localStorage.removeItem('key_usuario')
        localStorage.removeItem('key_tipo')
    }

    return(
        <div className={styles.NavbarUser}>
            <div className={styles.ladoEsquerdoUser}>
                <span className={styles.logoUser}>
                    <img src="Imagens/logoVisiona.png" alt="Logo Visiona"/>
                </span>
                <span className={styles.separadorUser}>
                    |
                </span>
                <span className={styles.txt1User}>
                    Operação:
                </span>
                <span className={styles.txt2User}>
                    Informações do usuário
                </span>
            </div>
            <div className={styles.ladoDireitoUser}>
                <div className={styles.dropdownUser}>
                    <img src="Imagens/user.png" alt="Logo Usuario" />
                    <span className={styles.dropdownMenuUser}>
                        <a href="/">Informações</a>
                        <a href="/">Editar</a>
                        <a href="/" onClick={removerSessao}>Sair</a>
                    </span>
                </div>
            </div>
        </div>
    )
}