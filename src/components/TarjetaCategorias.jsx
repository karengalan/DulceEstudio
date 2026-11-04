function TarjetaCategorias({
    categoria,
    seleccionada,
    onSeleccionar,
}) {
    const colores = seleccionada
        ? 'bg-[#21694E] text-white hover:bg-[#18513B]'
        : 'bg-[#BFD8C2] text-[#242423] hover:bg-[#BD93BD]'

    return (
        <button
            type="button"
            onClick={() => onSeleccionar(categoria)}
            aria-pressed={seleccionada}
            className={`w-full rounded-xl border border-[#21694E] px-5 py-4 text-center font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E] ${colores}`}
        >
            {categoria}
        </button>
    )
}

export default TarjetaCategorias