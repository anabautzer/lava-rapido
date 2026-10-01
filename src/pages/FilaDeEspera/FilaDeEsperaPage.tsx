import { useContext } from "react"
import { Link } from "react-router"
import { TicketContext } from "../../context/TicketContext"
import { tempoLavagem, formatarTempo } from "../../dados/Tempo"

export default function FilaDeEsperaPage(){
const {tickets, removerTicket} = useContext(TicketContext)

    const calcularEspera = (posicao: number) =>
        tickets.slice(0, posicao).reduce((total, ticket) => total + tempoLavagem[ticket.tipoLavagem], 0)

    const [atual, ...proximos] = tickets

    return(
        <main>
            <section className="bg-linear-to-br from-slate-900 via-slate-900 to-sky-900 text-white">
                <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Fila de espera</p>
                    <h1 className="mt-2 text-4xl font-bold">Acompanhe sua lavagem</h1>

                    {tickets.length === 0 ? (
                        <div className="mt-8 rounded-2xl bg-white/5 p-10 text-center ring-1 ring-white/10">
                            <p className="text-lg text-slate-300">Nenhum carro na fila no momento.</p>
                            <Link
                                to="/agendamento"
                                className="mt-6 inline-block rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-colors hover:bg-sky-400">
                                Agendar uma lavagem
                            </Link>
                        </div>
                    ) : (
                        <article className="mt-8 flex flex-col gap-6 rounded-2xl bg-white/5 p-8 ring-1 ring-sky-400/30 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="flex items-center gap-2 text-sm font-semibold text-sky-300">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400"></span>
                                    Lavando agora
                                </p>
                                <p className="mt-3 text-3xl font-bold">{atual.nomeCliente}</p>
                                <p className="text-slate-300">{atual.modelo} · {atual.tipoLavagem}</p>
                                <p className="mt-4 inline-block rounded border-2 border-white px-4 py-1 font-mono text-xl font-bold tracking-widest">
                                    {atual.placa}
                                </p>
                            </div>
                            <button
                                className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-colors hover:bg-sky-400"
                                onClick={() => removerTicket(atual.id)}>
                                Concluir lavagem
                            </button>
                        </article>
                    )}
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
                <h2 className="text-3xl font-bold text-slate-900">Próximos</h2>

                {proximos.length === 0 ? (
                    <p className="mt-6 rounded-2xl border-2 border-dashed border-slate-300 p-10 text-center text-slate-500">
                        Nenhum carro aguardando na sequência.
                    </p>
                ) : (
                    <ol className="mt-6 space-y-4">
                        {proximos.map((ticket, index) => (
                            <li key={ticket.id} className="grid items-center gap-4 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 sm:grid-cols-3">
                                <div className="flex items-center gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
                                        {index + 2}º
                                    </span>
                                    <div className="min-w-0 wrap-break-word">
                                        <p className="font-semibold text-slate-900">{ticket.nomeCliente}</p>
                                        <p className="text-sm text-slate-500">{ticket.modelo} · {ticket.tipoLavagem}</p>
                                    </div>
                                </div>
                                <p className="justify-self-start rounded border-2 border-slate-800 px-3 py-1 font-mono font-bold tracking-widest text-slate-900 sm:justify-self-center">
                                    {ticket.placa}
                                </p>
                                <p className="text-sm text-slate-500 sm:text-right">
                                    Espera estimada: <span className="font-semibold text-slate-900">{formatarTempo(calcularEspera(index + 1))}</span>
                                </p>
                            </li>
                        ))}
                    </ol>
                )}
            </section>
        </main>
    )

}