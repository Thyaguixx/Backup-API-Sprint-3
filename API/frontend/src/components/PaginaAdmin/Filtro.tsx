import styles from './PagAdmin.module.css'

export default function FiltroBarra(){
    return(
        <div className={styles.filtroBarra}>
                    <span className={styles.filtro}>
                        <select>
                            <option value="" disabled>- Categorias -</option>
                            <option value="opcao1">A-Z</option>
                            <option value="opcao2">Data de Criação</option>
                        </select>
                    </span>
                    <span className={styles.barra}>
                        <input type="text"/>
                        <button>Pesquisar</button>
                    </span>
        </div>
    )
}