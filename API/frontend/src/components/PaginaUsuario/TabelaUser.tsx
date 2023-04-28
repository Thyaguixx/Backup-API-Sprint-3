import { useEffect, useState } from "react";
import styles from "./PagUsuario.module.css";

export const data = [
  ["Task", "Hours Per Day"],
  ["Ativos", 10],
];

export default function TabelaUser({ acoes }) {

  const [valorFiltro, setValorFiltro] = useState(""); // Estado para o valor do filtro
  const [registrosFiltrados, setRegistrosFiltrados] = useState(acoes); // Estado para os dados filtrados

  const [paginaAtual, setPaginaAtual] = useState(1)
  const [ordenarPeloMaisRecente, setOrdenarPeloMaisRecente] = useState(false); // Estado para controlar a ordem de recentes



  const RegistrosPagina = 10;
  const ultimoIndex = paginaAtual * RegistrosPagina;
  const primeiroIndex = ultimoIndex - RegistrosPagina;
  const records = registrosFiltrados && registrosFiltrados.slice && registrosFiltrados.slice(primeiroIndex, ultimoIndex);
  const totalPaginas = Math.ceil(registrosFiltrados.length / RegistrosPagina) // Calcula o número total de páginas
  const ultimaPagina = totalPaginas; // Calcula a última página

  function prePage() {
    if (paginaAtual !== 1) {
      setPaginaAtual(paginaAtual - 1)
    }
  }

  function nextPage() {
    if (paginaAtual < ultimaPagina) {
      setPaginaAtual(paginaAtual + 1)
    }
  }

  useEffect(() => {
    const filtrado =
      valorFiltro === ""
        ? acoes
        : acoes.filter((item) => item.tipo_acao.startsWith(valorFiltro));

    setRegistrosFiltrados(filtrado); // Atualiza o estado dos dados filtrados
  }, ["", acoes]); // Coloque as dependências do useEffect aqui

  // Função para lidar com a mudança de valor do select
  const handleMudançaFiltro = (event) => {
    const valorSelecionado = event.target.value;
    setValorFiltro(valorSelecionado); // Atualiza o estado do valor do filtro

    // Filtra os dados com base no valor selecionado
    const filtrado = acoes.filter((item) => {

      if (valorSelecionado === "trocaNome") {
        return item.tipo_acao === "Troca de nome"
      }

      if (valorSelecionado === "trocaUsuario") {
        return item.tipo_acao === "Troca de usuário"
      }

      if (valorSelecionado === "trocaNomeUsuario") {
        return item.tipo_acao === "Troca de nome e usuário"
      }

      if (valorSelecionado === "trocaSenha") {
        return item.tipo_acao === "Troca de senha"
      }

      else {
        return item.tipo_acao
      }

    });
    setRegistrosFiltrados(filtrado); // Atualiza o estado dos dados filtrados
  };


  useEffect(() => {
    if (ordenarPeloMaisRecente) {
      const registrosFiltradosOrdenados = registrosFiltrados.sort((a, b) => registrosFiltrados.indexOf(b) - registrosFiltrados.indexOf(a))
      setRegistrosFiltrados(registrosFiltradosOrdenados);
    }
  }, [valorFiltro, ordenarPeloMaisRecente]);

  return (
    <div className={styles.containerGeralTableUser}>
      <div className={styles.containerTableDireitaUser}>
        <div className={styles.tableUser}>
          <div className={styles.filtroBarraUser}>
            <span className={styles.relogioUser}>
              <a href="#" onClick={() => setOrdenarPeloMaisRecente(prevState => !prevState)}>
                <img src="Imagens/relogio.png" alt="relogio" title="Ordenar por tempo: Mais novo - Mais antigo"/>
              </a>
            </span>
            <span className={styles.filtroUser}>
              <select value={valorFiltro} onChange={handleMudançaFiltro}>
                <option disabled>
                  - Categorias -
                </option>
                <option value="todasAcoes" selected>Todas as ações</option>
                <option value="trocaNome">Troca de nome</option>
                <option value="trocaUsuario">Troca de usuario</option>
                <option value="trocaNomeUsuario">Troca de nome e usuario</option>
                <option value="trocaSenha">Troca de senha</option>
              </select>
            </span>
          </div>
          <table>
            <thead>
              <tr>
                <th className={styles.mesclaUser} colSpan={2}>
                  Histórico de atividades da conta
                </th>
              </tr>

              <tr>
                <th>Ação</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {records &&
                records.map &&
                records.map((item, i) => (
                  <tr key={i}>
                    <td>{item.tipo_acao}</td>
                    <td>{item.to_char}</td>
                  </tr>
                ))}
            </tbody>

            <tfoot>
              <tr>
                <td className={styles.mesclaUser} colSpan={2}>
                  <button className={styles.botaoPaginacao01User} onClick={prePage}>◄</button>
                  <button className={styles.botaoPaginacao02User} onClick={nextPage}>►</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );


}
