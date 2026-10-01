import { Link } from "react-router"

export default function ErrorPage(){

    return(
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 text-center text-white">
            <p className="text-7xl font-bold text-sky-400">404</p>
            <h1 className="mt-4 text-2xl font-bold">Opa! Página não encontrada.</h1>
            <p className="mt-2 text-slate-400">O endereço que você tentou acessar não existe.</p>
            <Link
                to='/'
                className="mt-8 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-colors hover:bg-sky-400">
                Voltar para a Home
            </Link>
        </main>
    )
}
