function TarjetaEvento({ evento }) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#BD93BD] bg-white text-[#242423] shadow-sm">
            <img
                src={evento.image}
                alt={evento.title}
                className="h-52 w-full object-cover"
            />

            <div className="flex flex-1 flex-col items-start gap-4 p-5">
                <span className="inline-block rounded-full bg-[#BFD8C2] px-3 py-1 text-sm font-semibold">
                    {evento.category}
                </span>

                <h3 className="text-2xl font-semibold text-[#754075]">
                    {evento.title}
                </h3>

                <div className="space-y-2">
                    <p>
                        <strong>Fecha:</strong> {evento.date}
                    </p>

                    <p>
                        <strong>Ubicación:</strong> {evento.location}
                    </p>

                    <p className="text-lg font-bold">
                        Precio: ${evento.price}
                    </p>
                </div>

                <button
                    type="button"
                    className="mt-auto w-full rounded-lg bg-[#21694E] px-4 py-3 font-bold text-white transition-colors hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                >
                    Ver evento
                </button>
            </div>
        </article>
    )
}

export default TarjetaEvento