import { useContext } from "react";
import { Link } from "react-router";
import { TicketContext } from "../context/TicketContext";
import { tempoLavagem, formatarTempo } from "../dados/Tempo";
import Menu from "./Menu";

export default function Header(){
    const {tickets} = useContext(TicketContext)

    const esperaTotal = tickets.reduce((total, ticket) => total + tempoLavagem[ticket.tipoLavagem], 0)

    return(
       <header className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <h1 className="text-xl font-bold tracking-tight">
                Lava-Rápido <span className="text-sky-400">Brilho</span>
            </h1>
            <Menu carrosAguardando={tickets.length}/>
        </div>

        <div className="bg-sky-500 px-4 py-2 text-center text-sm">
            {tickets.length === 0 ? (
                <p>
                    Sem fila no momento.{" "}
                    <Link to="/agendamento" className="font-semibold underline underline-offset-2 hover:text-sky-100">
                        Agende agora →
                    </Link>
                </p>
            ) : (
                <p>
                    <strong>{tickets.length} {tickets.length === 1 ? "carro" : "carros"} na fila</strong>
                    {" "}· espera estimada de {formatarTempo(esperaTotal)} ·{" "}
                    <Link to="/fila" className="font-semibold underline underline-offset-2 hover:text-sky-100">
                        Ver fila →
                    </Link>
                </p>
            )}
        </div>
       </header>
    )
}
