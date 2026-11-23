import { Head, Link, usePage } from '@inertiajs/react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

export default function Dashboard() {
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

                    <Link
                        href="/dashboard/talleres/crear"
                        className="mr-3 mt-6 inline-block rounded-lg bg-[#21694E] px-4 py-3 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                    >
                        Nuevo taller
                    </Link>

                    <Link
                        href="/eventos"
                        className="mt-6 inline-block rounded-lg bg-[#21694E] px-4 py-3 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                    >
                        Ver catálogo de talleres
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    )
}