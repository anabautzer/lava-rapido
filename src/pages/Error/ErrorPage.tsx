import { Link } from "react-router"

export default function ErrorPage(){

    return(
        <main>
            <h1>Opa! Página não encontrada.</h1>
            <Link to='/'>Para voltar ao site clique aqui</Link>
        </main>
    )
}