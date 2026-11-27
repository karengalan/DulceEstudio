import { Head, Link, useForm } from '@inertiajs/react'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'

export default function Registro() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const claseCampo =
        'w-full rounded-lg border border-[#21694E] bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]'

    function enviarFormulario(evento) {
        evento.preventDefault()

        post('/registro', {
            onFinish: () => reset('password', 'password_confirmation'),
        })
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Head title="Crear cuenta | Dulce Estudio" />

            <Header />

            <main className="flex-1 px-6 py-10">
                <section className="mx-auto max-w-md rounded-2xl bg-[#F8F1F8] p-6">
                    <h1 className="mb-6 text-3xl font-bold text-[#754075]">
                        Crear una cuenta
                    </h1>

                    <form onSubmit={enviarFormulario} className="space-y-5" noValidate>
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block font-semibold"
                            >
                                Nombre
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={data.name}
                                onChange={(evento) =>
                                    setData('name', evento.target.value)
                                }
                                className={claseCampo}
                                maxLength={255}
                                required
                            />

                            {errors.name && (
                                <p className="mt-1 text-sm text-red-700">
                                    {errors.name}
                                </p>
                            )}
                        </div>

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
                                autoComplete="email"
                                value={data.email}
                                onChange={(evento) =>
                                    setData('email', evento.target.value)
                                }
                                className={claseCampo}
                                maxLength={255}
                                required
                            />

                            {errors.email && (
                                <p className="mt-1 text-sm text-red-700">
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
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(evento) =>
                                    setData('password', evento.target.value)
                                }
                                className={claseCampo}
                                minLength={8}
                                required
                            />

                            <p className="mt-1 text-sm">
                                Usá al menos 8 caracteres.
                            </p>

                            {errors.password && (
                                <p className="mt-1 text-sm text-red-700">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password_confirmation"
                                className="mb-2 block font-semibold"
                            >
                                Repetir contraseña
                            </label>

                            <input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={(evento) =>
                                    setData(
                                        'password_confirmation',
                                        evento.target.value
                                    )
                                }
                                className={claseCampo}
                                minLength={8}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-[#21694E] px-4 py-3 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E] disabled:cursor-wait disabled:opacity-60"
                        >
                            {processing ? 'Creando cuenta…' : 'Registrarme'}
                        </button>
                    </form>

                    <Link
                        href="/eventos"
                        className="mt-5 inline-block text-[#21694E] underline"
                    >
                        Volver a los talleres
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    )
}