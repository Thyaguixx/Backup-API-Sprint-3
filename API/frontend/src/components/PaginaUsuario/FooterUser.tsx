import styles from './PagUsuario.module.css'

export default function FooterUser(){
    return(
        <div className={styles.FooterUser}>
            <div className={styles.ladoEsquerdoUser}>
                <span className={styles.txt1User}>
                    <p>LITTLE TECH FATEC SÃO JOSÉ DOS CAMPOS</p>
                    <p>2023 © TODOS OS DIREITOS RESERVADOS</p>
                </span>
            </div>
            <div className={styles.ladoDireitoUser}>
                <a href="https://www.facebook.com/VisionaEspacial/?locale=pt_BR">
                    <span className={styles.imgFacebookUser}>
                        <img src="Imagens/facebook.png" alt="facebook" />
                    </span>
                </a>
                <a href="https://br.linkedin.com/company/visiona-tecnologia-espacial-s-a-">
                    <span className={styles.imgLinkedinUser}>
                        <img src="Imagens/linkedin.png" alt="linkedin" />
                    </span>
                </a>
                <a href="mailto:contato@visionaespacial.com.br">
                    <span className={styles.imgEmailUser}>
                        <img src="Imagens/email.png" alt="email" />
                    </span>
                </a>
                <a href="https://github.com/LittleTech10">
                    <span className={styles.imgGitUser}>
                        <img src="Imagens/git.png" alt="git" />
                    </span>
                </a>
            </div>
        </div>
    )
}