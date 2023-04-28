import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from '../components/Login/Login'
import Cadastro from "../components/Cadastro/Cadastro";
import PaginaAdmin from "../components/PaginaAdmin/PaginaAdmin";
import NS from "../components/Nova_senha/NS";
import ConfirmaSenha from "../components/Confirmar_Senha/ConfirmarSenha";
import ConfirmarCadastro from "../components/ConfirmarCadastro/ConfirmarCadastro";
import EnviarToken from "../components/Enviar_Token/EnviarToken";
import Envio_Token from "../components/Envio_Token/ET";
import ValidarTokenSenha from "../components/V_T_S/ValidarTokenSenha";
import PagUsuario from "../components/PaginaUsuario/PagUsuario";
import { PrivateRoute, PrivateRouteAdmin, PrivateRouteInserirToken, PrivateRouteSenha, PrivateRouteToken } from "./authentication";



export const Rotas = () => {
    return (
        //Rotas da aplicação
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cadastro/confirmar-cadastro" element={<ConfirmarCadastro />} />
                <Route path="/token" element={<EnviarToken />} />



                <Route path="/alterar-senha/confirmacao" element={<ConfirmaSenha />} />

                <Route path="/user-admin"
                    element={
                        <PrivateRouteAdmin>
                            <PaginaAdmin />
                        </PrivateRouteAdmin>}
                />

                <Route path="/user"
                    element={
                        <PrivateRoute>
                            <PagUsuario />
                        </PrivateRoute>
                    }
                />

                <Route path="/alterar-senha"
                    element={
                        <PrivateRouteSenha>
                            <NS />
                        </PrivateRouteSenha>

                    }
                />

                <Route path="/token/confirmar-token-senha"
                    element={
                        <PrivateRouteToken>
                            <Envio_Token />
                        </PrivateRouteToken>
                    }
                />

                <Route path="/token/inserir-token-senha"
                    element={
                        <PrivateRouteInserirToken>
                            <ValidarTokenSenha />
                        </PrivateRouteInserirToken>
                    }
                />

                <Route path="/" element={<Navigate to={'/login'} />} />
                <Route path="*" element={<h1>PÁGINA NÃO ENCONTRADA</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}