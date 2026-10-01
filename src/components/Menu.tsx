import { Link } from "react-router";

export default function Menu(){

    return(
        <nav className="flex gap-6 text-sm font-medium text-slate-300">
            <Link className="transition-colors hover:text-white" to='/'>Home</Link>
            <Link className="transition-colors hover:text-white" to='/agendamento'>Agendamento</Link>
            <Link className="transition-colors hover:text-white" to='/sobre'>Sobre</Link>
        </nav>
    )
}
