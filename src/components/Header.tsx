import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";
import Menu from "./Menu";

export default function Header(){
    const {tickets} = useContext(TicketContext)

    return(
       <header>
        <h1>Nome do lava rápido</h1>
        <Menu/>
        <p>Carros aguradando: {tickets.length}</p>
       </header>
    )
}