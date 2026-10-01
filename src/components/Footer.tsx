export default function Footer(){

    return(
        <footer className="bg-slate-900 text-sm text-slate-400">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
                <p className="text-base font-bold text-white">
                    Lava-Rápido <span className="text-sky-400">Brilho</span>
                </p>
                <p>Rua Abroba, 123 - São Paulo/SP</p>
                <p>Segunda a sábado, das 8h às 18h</p>
            </div>
            <p className="border-t border-slate-800 py-4 text-center">
                &copy; 2026 Lava-Rápido Brilho. Todos os direitos reservados.
            </p>
        </footer>
    )
}