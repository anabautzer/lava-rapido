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
        <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900
              sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">
                    Agende sua lavagem
                </h1>
                <form onSubmit={handleSubmit(agendamentoSubmit)} className="mt-6 rounded-2xl border border-slate-200 bg-white
                      p-6 shadow-xl shadow-slate-200/60 sm:p-8">
                    <fieldset className="space-y-5">
                        <legend className="mb-6 text-lg font-semibold text-slate-950">
                            Dados do agendamento
                        </legend>

                        <label className="block text-sm font-medium text-slate-700">
                            Nome do Cliente
                            <input
                                className="mt-2 block w-full rounded-lg border
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text"
                                {...register('nomeCliente')}
                                placeholder="Digite o nome do cliente"
                            />
                            <span className="text-red-600">{errors.nomeCliente?.message}</span>
                        </label>

                        <label className="block text-sm font-medium text-slate-700">
                            Modelo
                            <input
                                className="mt-2 block w-full rounded-lg border
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                type="text"
                                {...register('modelo')}
                                placeholder="Ex.: Onix"
                            />
                            <span className="text-red-600">{errors.modelo?.message}</span>
                        </label>

                        <label className="block text-sm font-medium text-slate-700">
                            Placa
                            <input
                                className="mt-2 block w-full rounded-lg border
                                border-slate-300 bg-white px-4 py-3 text-slate-900 uppercase"
                                type="text"
                                maxLength={7}
                                {...register('placa')}
                                placeholder="ABC1D23"
                            />
                            <span className="text-red-600">{errors.placa?.message}</span>
                        </label>

                        <label className="block text-sm font-medium text-slate-700">
                            Tipo de Lavagem
                            <select
                                className="mt-2 block w-full rounded-lg border
                                border-slate-300 bg-white px-4 py-3 text-slate-900"
                                {...register('tipoLavagem')}
                            >
                                <option value="">Selecione</option>
                                <option value="Simples">Simples</option>
                                <option value="Completa">Completa</option>
                                <option value="Polimento">Polimento</option>
                            </select>
                            <span className="text-red-600">{errors.tipoLavagem?.message}</span>
                        </label>

                        <button
                            className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold
                            text-white shadow-lg shadow-indigo-600/20"
                            type="submit">
                            Agendar
                        </button>
                    </fieldset>
                </form>
            </div>

            <section className="w-full mt-8 rounded-2xl border border-slate-200
               bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Tíquetes aguardando</h2>

                <div className="flex gap-2 flex-wrap justify-evenly">
                    {tickets.map((ticket) => (
                        <article key={ticket.id} className="w-3/12 mt-4 rounded-2xl border border-yellow-400
                           bg-yellow-200 p-6 shadow-xl shadow-slate-200/60 sm:p-8">
                            <p className="font-bold mb-2">Cliente: {ticket.nomeCliente}</p>
                            <p className="font-bold mb-2">Modelo: {ticket.modelo}</p>
                            <p className="font-bold mb-2">Placa: {ticket.placa}</p>
                            <p className="font-bold mb-2">Lavagem: {ticket.tipoLavagem}</p>
                            <button
                                className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white"
                                onClick={() => removerTicket(ticket.id)}>
                                Excluir
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
