import TarjetaCategorias from './TarjetaCategorias.jsx'

const categorias = [
    'Todos',
    'Pastelería',
    'Repostería vegana',
    'Panadería',
    'Decoración',
]

function ListaCategorias({
    categoriaSeleccionada,
    onSeleccionarCategoria,
}) {
    return (
        <section className="mx-auto max-w-6xl space-y-6">
            <h2 className="text-2xl font-semibold text-[#754075]">
                Categorías
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {categorias.map((categoria) => (
                    <TarjetaCategorias
                        key={categoria}
                        categoria={categoria}
                        seleccionada={categoria === categoriaSeleccionada}
                        onSeleccionar={onSeleccionarCategoria}
                    />
                ))}
            </div>
        </section>
    )
}

export default ListaCategorias