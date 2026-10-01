import { Link } from "react-router";

const depoimentos = [
    { id: 1, nome: "Carlos Souza", texto: "Meu carro ficou impecável! Atendimento rápido e muito caprichado.", foto: "https://loremflickr.com/400/300/car?lock=1" },
    { id: 2, nome: "Mariana Lima", texto: "Fiz o polimento e parece que o carro saiu da concessionária.", foto: "https://loremflickr.com/400/300/car?lock=2" },
    { id: 3, nome: "Rafael Oliveira", texto: "Agendei pelo site e não precisei esperar nada. Recomendo!", foto: "https://loremflickr.com/400/300/car?lock=3" },
]

const servicos = [
    { id: 1, nome: "Simples", descricao: "Lavagem externa com shampoo neutro e secagem." },
    { id: 2, nome: "Completa", descricao: "Lavagem externa, aspiração e limpeza do painel." },
    { id: 3, nome: "Polimento", descricao: "Lavagem completa com polimento e cera protetora." },
]

export default function HomePage(){

    return(
        <main>
            <section>
                <h1>Lava-Rápido Brilho</h1>
                <p>
                    Seu carro limpo e brilhando em poucos minutos, com produtos de qualidade
                    e cuidado em cada detalhe.
                </p>
                <Link to="/agendamento">Agende sua lavagem</Link>
            </section>

            <section>
                <h2>Nossos serviços</h2>
                {servicos.map((serv) => (
                    <article key={serv.id}>
                        <h3>{serv.nome}</h3>
                        <p>{serv.descricao}</p>
                    </article>
                ))}
            </section>

            <section>
                <h2>O que nossos clientes dizem</h2>
                {depoimentos.map((dep) => (
                    <article key={dep.id}>
                        <img src={dep.foto} alt={`Carro de ${dep.nome}`} />
                        <p>"{dep.texto}"</p>
                        <p>{dep.nome}</p>
                    </article>
                ))}
            </section>
        </main>
    )
}
