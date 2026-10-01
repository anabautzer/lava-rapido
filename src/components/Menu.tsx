import { Link } from "react-router";

export default function Menu(){

    return(
        <nav>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/agendamento'>Agendamento</Link>
            <span> | </span>
            <Link to='/sobre'>Sobre</Link>
        </nav>
    )
}