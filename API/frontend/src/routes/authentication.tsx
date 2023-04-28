import { Navigate } from 'react-router-dom'

export function PrivateRoute({ children }){
    const dados = {
        id: localStorage.getItem('key_id'),
        tipo: localStorage.getItem('key_tipo')
    }

    if (dados.id !== null) {
        return children
    } else {
        return <Navigate to={'/login'} />
    }

}

export function PrivateRouteAdmin({ children }) {
    const dados = {
        id: localStorage.getItem('key_id'),
        tipo: localStorage.getItem('key_tipo')
    }

    return dados.tipo === 'Administrador' ? children : <Navigate to={'/user'} />
}

export function PrivateRouteToken({ children }){
    const dados = localStorage.getItem('email_para_token')

    return dados !== null ? children : <Navigate to={'/token'} />

}

export function PrivateRouteSenha({ children }){
    const dados = {
        id: localStorage.getItem('key_id'),
        token: localStorage.getItem('token')
    }

    return dados.token !== null ? children : <Navigate to={'/token'} />
}

export function PrivateRouteInserirToken({ children }){
    const dados = {
        token: localStorage.getItem('token')
    }

    return dados.token !== null ? children : <Navigate to={'/token'} />
}