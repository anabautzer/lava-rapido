import { Link } from "react-router";

export default function Menu({carrosAguardando}:{carrosAguardando: number}){

    return(
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
            <Link className="transition-colors hover:text-white" to='/'>Home</Link>
            <Link className="transition-colors hover:text-white" to='/agendamento'>Agendamento</Link>
            <Link
                className="flex items-center gap-2 transition-colors hover:text-white"
                to='/fila'
                aria-label={`Fila de espera: ${carrosAguardando} carros aguardando`}>
                Fila de espera
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-500 px-1.5 text-xs font-bold text-white">
                    {carrosAguardando}
                </span>
            </Link>
            <Link className="transition-colors hover:text-white" to='/sobre'>Sobre</Link>
        </nav>
    )
}
