import { useContext } from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { TicketContext } from "../../context/TicketContext"

const schema = yup.object({
    nomeCliente: yup.string().required("O nome do cliente é obrigatório"),
    modelo: yup.string().required("O modelo é obrigatório"),
    placa: yup.string().length(7, "A placa deve ter 7 caracteres").required("A placa é obrigatória"),
    tipoLavagem: yup.string().required("Selecione o tipo de lavagem")
}).required()

type Agendamento = {
    nomeCliente: string,
    modelo: string,
    placa: string,
    tipoLavagem: string
}

const gerarId = () => Date.now()
const estiloCampo = "mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"


export default function AgendamentoPage(){
    const {tickets, adicionarTicket, removerTicket} = useContext(TicketContext)

    const {register, handleSubmit, formState: {errors}, reset} = useForm<Agendamento>({
        resolver: yupResolver(schema)
    })

    const agendamentoSubmit = (agendamento: Agendamento) => {
        adicionarTicket({
            id: gerarId(),
            ...agendamento,
            placa: agendamento.placa.toUpperCase()
        })
        reset()
    }

        return(
        <main className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-5">
            <section className="lg:col-span-2">
                <h1 className="text-3xl font-bold text-slate-900">Agende sua lavagem</h1>
                <p className="mt-2 text-slate-500">Preencha os dados para gerar o tíquete.</p>

                <form onSubmit={handleSubmit(agendamentoSubmit)} className="mt-6 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 sm:p-8">
                    <fieldset className="space-y-5">
                        <legend className="mb-6 text-lg font-semibold text-slate-900">
                            Dados do agendamento
                        </legend>

                        <label className="block text-sm font-medium text-slate-700">
                            Nome do Cliente
                            <input
                                className={estiloCampo}
                                type="text"
                                {...register('nomeCliente')}
                                placeholder="Digite o nome do cliente"
                            />
                            <span className="mt-1 block text-red-600">{errors.nomeCliente?.message}</span>
                        </label>

                        <label className="block text-sm font-medium text-slate-700">
                            Modelo
                            <input
                                className={estiloCampo}
                                type="text"
                                {...register('modelo')}
                                placeholder="Ex.: Onix"
                            />
                            <span className="mt-1 block text-red-600">{errors.modelo?.message}</span>
                        </label>

                        <label className="block text-sm font-medium text-slate-700">
                            Placa
                            <input
                                className={`${estiloCampo} uppercase`}
                                type="text"
                                maxLength={7}
                                {...register('placa')}
                                placeholder="ABC1D23"
                            />
                            <span className="mt-1 block text-red-600">{errors.placa?.message}</span>
                        </label>

                        <label className="block text-sm font-medium text-slate-700">
                            Tipo de Lavagem
                            <select
                                className={estiloCampo}
                                {...register('tipoLavagem')}
                            >
                                <option value="">Selecione</option>
                                <option value="Simples">Simples</option>
                                <option value="Completa">Completa</option>
                                <option value="Polimento">Polimento</option>
                            </select>
                            <span className="mt-1 block text-red-600">{errors.tipoLavagem?.message}</span>
                        </label>

                        <button
                            className="w-full rounded-lg bg-sky-500 px-4 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-colors hover:bg-sky-400"
                            type="submit">
                            Agendar
                        </button>
                    </fieldset>
                </form>
            </section>

            <section className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-slate-900">Tíquetes aguardando</h2>
                <p className="mt-2 text-slate-500">Ordem de chegada para a lavagem.</p>

                {tickets.length === 0 ? (
                    <p className="mt-6 rounded-2xl border-2 border-dashed border-slate-300 p-10 text-center text-slate-500">
                        Nenhum carro aguardando no momento.
                    </p>
                ) : (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {tickets.map((ticket, index) => (
                            <article key={ticket.id} className="rounded-2xl border-l-4 border-sky-500 bg-white p-5 shadow-md ring-1 ring-slate-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-sky-600">{index + 1}º na fila</span>
                                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                                        {ticket.tipoLavagem}
                                    </span>
                                </div>
                                <p className="mt-4 text-lg font-semibold text-slate-900">{ticket.nomeCliente}</p>
                                <p className="text-slate-600">{ticket.modelo}</p>
                                <p className="mt-3 inline-block rounded border-2 border-slate-800 px-3 py-1 font-mono font-bold tracking-widest text-slate-900">
                                    {ticket.placa}
                                </p>
                                <button
                                    className="mt-4 block w-full rounded-lg px-4 py-2 text-sm font-semibold text-red-600 ring-1 ring-red-200 transition-colors hover:bg-red-50"
                                    onClick={() => removerTicket(ticket.id)}>
                                    Excluir
                                </button>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}
