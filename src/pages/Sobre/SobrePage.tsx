const integrantes = [
    { id: 1, nome: "Nome do integrante 1", rm: "RM000000", foto: "https://i.pravatar.cc/200?img=1" },
]

export default function SobrePage(){

    return(
        <main>
            <h1>Sobre nós</h1>
            <p>
                Projeto desenvolvido para o Checkpoint 5 de Front-End Design Engineering.
            </p>

            <section>
                <h2>Integrantes</h2>
                {integrantes.map((int) => (
                    <article key={int.id}>
                        <img src={int.foto} alt={`Foto de ${int.nome}`} />
                        <h3>{int.nome}</h3>
                        <p>{int.rm}</p>
                    </article>
                ))}
            </section>
        </main>
    )
}
