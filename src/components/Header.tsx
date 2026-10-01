import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";
import Menu from "./Menu";

export default function Header(){
    const {tickets} = useContext(TicketContext)

    return(
       <header className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <h1 className="text-xl font-bold tracking-tight">
                Lava-Rápido <span className="text-sky-400">Brilho</span>
            </h1>
            <Menu/>
            <p className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300 ring-1 ring-sky-400/30">
                Carros aguardando: <span className="font-bold text-white">{tickets.length}</span>
            </p>
        </div>
       </header>
    )
}
