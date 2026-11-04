import TarjetaEventos from './TarjetaEventos.jsx'

function ListaEventos({ eventos }) {
    return (
        <section
            id="eventos"
            className="mx-auto max-w-6xl space-y-6"
        >
            <h2 className="text-2xl font-semibold text-[#754075]">
                Próximos talleres y actividades
            </h2>

            {eventos.length === 0 ? (
                <div className="rounded-2xl border border-[#BD93BD] bg-[#F8F1F8] px-6 py-10 text-center">
                    <h3 className="text-xl font-semibold text-[#754075]">
                        No se encontraron talleres
                    </h3>

                    <p className="mt-2 text-[#242423]">
                        Probá con otra búsqueda o cambiá la categoría seleccionada.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {eventos.map((evento) => (
                        <TarjetaEventos
                            key={evento.id}
                            evento={evento}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default ListaEventos