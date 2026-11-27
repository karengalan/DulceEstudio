import { Head, Link, usePage } from '@inertiajs/react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import Paginacion from '../Components/Paginacion.jsx'
import { formatearFecha, formatearPrecio } from '../utils/format.js'
import BotonEliminarTaller from '../Components/BotonEliminarTaller.jsx'

export default function Dashboard({ events, permisos = {} }) {
    const { auth } = usePage().props

    return (
        <div className="flex min-h-screen flex-col">
            <Head title="Administración | Dulce Estudio" />

            <Header />

            <main className="flex-1 px-6 py-10">
                <section className="mx-auto max-w-6xl rounded-2xl bg-[#F8F1F8] p-6">
                    <h1 className="text-3xl font-semibold text-[#754075]">
                        Administración de talleres
                    </h1>

                    <p className="mt-4 text-lg">
                        Hola, {auth.user.name}.
                    </p>

                    <p className="mt-2">
                        Desde este panel vas a poder administrar tus talleres.
                    </p>

                    {permisos.crear && (
                        <Link
                            href="/dashboard/talleres/crear"
                            className="mr-3 mt-6 inline-block rounded-lg bg-[#21694E] px-4 py-3 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                        >
                            Nuevo taller
                        </Link>
                    )}

                    <Link
                        href="/eventos"
                        className="mt-6 inline-block rounded-lg bg-[#21694E] px-4 py-3 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                    >
                        Ver catálogo de talleres
                    </Link>
                    <div className="mt-8 space-y-4">
                        <h2 className="text-2xl font-semibold text-[#754075]">
                            Listado de talleres
                        </h2>

                        {events.data.length === 0 ? (
                            <p>No hay talleres para mostrar.</p>
                        ) : (
                            events.data.map((evento) => (
                                <article
                                    key={evento.id}
                                    className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#BD93BD] bg-white p-4"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#754075]">
                                            {evento.title}
                                        </h3>
                                        <p>
                                            Fecha: {formatearFecha(evento.date)}
                                        </p>
                                        <p>
                                            Precio: ${formatearPrecio(evento.price)}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {evento.permisos?.editar && (
                                            <Link
                                                href={`/dashboard/talleres/${evento.id}/editar`}
                                                className="rounded-lg bg-[#21694E] px-4 py-2 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                                            >
                                                Editar taller
                                            </Link>
                                        )}
                                        {evento.permisos?.eliminar && (
    <BotonEliminarTaller evento={evento} />
)}
                                    </div>
                                </article>
                            ))
                        )}

                        <Paginacion paginacion={events} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}