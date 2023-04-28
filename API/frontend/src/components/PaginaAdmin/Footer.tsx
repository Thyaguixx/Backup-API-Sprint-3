import styles from './PagAdmin.module.css'

export default function Footer(){
    return(
        <div className={styles.Footer}>
            <div className={styles.ladoEsquerdo}>
                <span className={styles.txt1}>
                    <p>LITTLE TECH FATEC SÃO JOSÉ DOS CAMPOS</p>
                    <p>2023 © TODOS OS DIREITOS RESERVADOS</p>
                </span>
            </div>
            <div className={styles.ladoDireito}>
                <a href="https://www.facebook.com/VisionaEspacial/?locale=pt_BR">
                    <span className={styles.imgFacebook}>
                        <img src="Imagens/facebook.png" alt="facebook" />
                    </span>
                </a>
                <a href="https://br.linkedin.com/company/visiona-tecnologia-espacial-s-a-">
                    <span className={styles.imgLinkedin}>
                        <img src="Imagens/linkedin.png" alt="linkedin" />
                    </span>
                </a>
                <a href="mailto:contato@visionaespacial.com.br">
                    <span className={styles.imgEmail}>
                        <img src="Imagens/email.png" alt="email" />
                    </span>
                </a>
                <a href="https://github.com/LittleTech10">
                    <span className={styles.imgGit}>
                        <img src="Imagens/git.png" alt="git" />
                    </span>
                </a>
            </div>
        </div>
    )
}