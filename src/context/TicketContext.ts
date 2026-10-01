import {createContext, createElement, useState } from "react";

export type Ticket = {
    id: number;
    nomeCliente: string;
    modelo: string;
    placa: string;
    tipoLavagem: string
}

type TicketContextValue = {
    tickets: Ticket[];
    adicionarTicket: (ticket: Ticket) => void;
    removerTicket: (id: number) => void
}

export const TicketContext = createContext<TicketContextValue>({
    tickets: [],
    adicionarTicket: ()=>{},
    removerTicket: ()=>{}
})

export function TicketContextProvider({children}:{children: React.ReactNode}){
    const[tickets, setTickets] = useState<Ticket[]>([])

    const adicionarTicket = (ticket: Ticket) =>{
        setTickets([...tickets, ticket])
    }

    const removerTicket = (id: number) =>{
        setTickets(tickets.filter(t => t.id !== id))
    }

    return createElement(
        TicketContext.Provider, {value: {tickets, adicionarTicket, removerTicket}}, children
    )
}

