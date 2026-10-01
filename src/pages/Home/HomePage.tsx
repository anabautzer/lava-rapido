import { Link } from "react-router";
import hero from "../../assets/hero.jpg";
import carro1 from "../../assets/carro1.jpg";
import carro2 from "../../assets/carro2.jpg";
import carro3 from "../../assets/carro3.jpg";


const depoimentos = [
    { id: 1, nome: "Carlos Souza", texto: "Meu carro ficou impecável! Atendimento rápido e muito caprichado.", foto: carro1 },
    { id: 2, nome: "Mariana Lima", texto: "Fiz o polimento e parece que o carro saiu da concessionária.", foto: carro2 },
    { id: 3, nome: "Rafael Oliveira", texto: "Agendei pelo site e não precisei esperar nada. Recomendo!", foto: carro3 },
]


const servicos = [
    { id: 1, nome: "Simples", descricao: "Lavagem externa com shampoo neutro e secagem." },
    { id: 2, nome: "Completa", descricao: "Lavagem externa, aspiração e limpeza do painel." },
    { id: 3, nome: "Polimento", descricao: "Lavagem completa com polimento e cera protetora." },
]

export default function HomePage(){

    return(
        <main>
            <section className="bg-linear-to-br from-slate-900 via-slate-900 to-sky-900 text-white">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                            Lava-Rápido Brilho
                        </p>
                        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                            Seu carro limpo e brilhando em poucos minutos
                        </h1>
                        <p className="mt-6 text-lg text-slate-300">
                            Produtos de qualidade, equipe treinada e cuidado em cada detalhe.
                            Agende online e evite filas.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/agendamento"
                                className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-colors hover:bg-sky-400">
                                Agende sua lavagem
                            </Link>
                            <a
                                href="#servicos"
                                className="rounded-lg px-6 py-3 font-semibold text-slate-200 ring-1 ring-slate-600 transition-colors hover:bg-white/5">
                                Ver serviços
                            </a>
                        </div>
                    </div>
                    <img
                        className="h-80 w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                        src={hero}
                        alt="Carro limpo e brilhando"
                    />
                </div>
            </section>

            <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
                <h2 className="text-center text-3xl font-bold text-slate-900">Nossos serviços</h2>
                <p className="mt-2 text-center text-slate-500">Escolha o cuidado ideal para o seu carro</p>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {servicos.map((serv) => (
                        <article
                            key={serv.id}
                            className="rounded-2xl border-t-4 border-sky-500 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                            <h3 className="text-xl font-semibold text-slate-900">{serv.nome}</h3>
                            <p className="mt-2 text-slate-600">{serv.descricao}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <h2 className="text-center text-3xl font-bold text-slate-900">O que nossos clientes dizem</h2>
                    <p className="mt-2 text-center text-slate-500">Carros que passaram por aqui</p>
                    <div className="mt-10 grid gap-6 sm:grid-cols-3">
                        {depoimentos.map((dep) => (
                            <article key={dep.id} className="overflow-hidden rounded-2xl bg-slate-50 shadow-md ring-1 ring-slate-200">
                                <img className="h-48 w-full object-cover" src={dep.foto} alt={`Carro de ${dep.nome}`} />
                                <div className="p-6">
                                    <p className="text-amber-400" aria-label="5 estrelas">★★★★★</p>
                                    <p className="mt-3 italic text-slate-700">"{dep.texto}"</p>
                                    <p className="mt-4 font-semibold text-slate-900">{dep.nome}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}