import { Head, Link, useForm } from '@inertiajs/react'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    })

    const claseCampo =
        'w-full rounded-lg border border-[#21694E] bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]'

    function enviarFormulario(evento) {
        evento.preventDefault()

        post('/login', {
            onFinish: () => reset('password'),
        })
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Head title="Iniciar sesión | Dulce Estudio" />

            <Header />

            <main className="flex-1 px-6 py-10">
                <section className="mx-auto max-w-md rounded-2xl bg-[#F8F1F8] p-6">
                    <h1 className="mb-6 text-3xl font-bold text-[#754075]">
                        Iniciar sesión
                    </h1>

                    <form onSubmit={enviarFormulario} className="space-y-5" noValidate>
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block font-semibold"
                            >
                                Correo electrónico
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="username"
                                value={data.email}
                                onChange={(evento) =>
                                    setData('email', evento.target.value)
                                }
                                className={claseCampo}
                                maxLength={255}
                                required
                            />

                            {errors.email && (
                                <p role="alert" className="mt-1 text-sm text-red-700">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block font-semibold"
                            >
                                Contraseña
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(evento) =>
                                    setData('password', evento.target.value)
                                }
                                className={claseCampo}
                                required
                            />

                            {errors.password && (
                                <p role="alert" className="mt-1 text-sm text-red-700">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-[#21694E] px-4 py-3 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E] disabled:cursor-wait disabled:opacity-60"
                        >
                            {processing ? 'Ingresando…' : 'Iniciar sesión'}
                        </button>
                    </form>

                    <p className="mt-5">
                        ¿Todavía no tenés una cuenta?{' '}
                        <Link
                            href="/registro"
                            className="text-[#21694E] underline"
                        >
                            Registrate
                        </Link>
                    </p>

                    <Link
                        href="/eventos"
                        className="mt-4 inline-block text-[#21694E] underline"
                    >
                        Volver a los talleres
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    )
}