import logo from '../assets/img/logo.webp'

function Header() {
    return (
        <header className="border-b border-[#754075] bg-[#BD93BD] text-[#242423]">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-3">
                <img
                    src={logo}
                    alt="Logo de Dulce Estudio"
                    className="h-16 w-16 object-contain"
                />

                <h1 className="text-3xl font-semibold">
                    Dulce Estudio
                </h1>
                </div>

                <nav
                aria-label="Navegación principal"
                className="flex flex-wrap items-center gap-2"
                >
                <button
                    type="button"
                    className="rounded-lg px-3 py-2 font-semibold transition-colors hover:bg-[#F8F1F8] focus-visible:outline-2 focus-visible:outline-[#21694E]"
                >
                    Inicio
                </button>

                <button
                    type="button"
                    className="rounded-lg px-3 py-2 font-semibold transition-colors hover:bg-[#F8F1F8] focus-visible:outline-2 focus-visible:outline-[#21694E]"
                >
                    Eventos
                </button>

                <button
                    type="button"
                    className="rounded-lg px-3 py-2 font-semibold transition-colors hover:bg-[#F8F1F8] focus-visible:outline-2 focus-visible:outline-[#21694E]"
                >
                    Favoritos
                </button>

                <button
                    type="button"
                    className="rounded-lg bg-[#21694E] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                >
                    Iniciar sesión
                </button>
                </nav>

            </div>
        </header>
    )
}

export default Header