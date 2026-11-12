function Buscador({ busqueda, onCambiarBusqueda }) {
    return (
        <div className="mx-auto max-w-6xl space-y-2">
            <label
                htmlFor="busqueda-eventos"
                className="block font-bold text-[#242423]"
            >
                Buscar talleres y actividades
            </label>

            <input
                id="busqueda-eventos"
                type="search"
                placeholder="Por ejemplo: macarons"
                value={busqueda}
                onChange={(e) => onCambiarBusqueda(e.target.value)}
                className="w-full rounded-xl border border-[#21694E] bg-white px-4 py-3 text-[#242423] placeholder:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
            />
        </div>
    )
}

export default Buscador