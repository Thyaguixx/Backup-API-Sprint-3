import styles from './PagUsuario.module.css'

export default function FiltroBarraUser(){
    return(
        <div className={styles.filtroBarraUser}>
                    <span className={styles.filtroUser}>
                        <select>
                            <option value="" disabled>- Categorias -</option>
                            <option value="opcao1">Ação</option>
                            <option value="opcao2">Data</option>
                        </select>
                    </span>
                    <span className={styles.barraUser}>
                        <input type="text"/>
                        <button>Pesquisar</button>
                    </span>
        </div>
    )
}