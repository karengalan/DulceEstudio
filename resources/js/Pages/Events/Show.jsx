import { Link } from '@inertiajs/react'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'
import { formatearFecha, formatearPrecio } from '../../utils/format.js'

export default function Show({ event }) {
    const fechaVisible = formatearFecha(event.date)
    const precioVisible = formatearPrecio(event.price)

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8 text-[#242423]">
                <Link
                    href="/eventos"
                    className="mb-5 inline-block font-bold text-[#21694E] underline"
                >
                    ← Volver a los talleres
                </Link>

                <article className="grid items-center gap-6 rounded-3xl bg-[#F8F1F8] p-6 md:grid-cols-2 md:gap-8 md:p-10">
                    <div className="space-y-4">
                        <span className="inline-block rounded-full bg-[#BFD8C2] px-3 py-1 text-sm font-semibold">
                            {event.category}
                        </span>

                        <h2 className="text-3xl font-semibold text-[#754075] md:text-4xl">
                            {event.title}
                        </h2>

                        <p className="leading-relaxed">{event.description}</p>

                        <div className="space-y-2">
                            <p><strong>Fecha:</strong> {fechaVisible}</p>
                            <p><strong>Ubicación:</strong> {event.location}</p>
                            <p className="text-lg font-bold">Precio: ${precioVisible}</p>
                        </div>
                    </div>

                    <img
                        src={event.image}
                        alt={event.title}
                        className="aspect-[3/2] w-full rounded-2xl object-cover shadow-sm"
                    />
                </article>
            </main>

            <Footer />
        </div>
    )
}