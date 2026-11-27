import { Head, Link, useForm } from '@inertiajs/react'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'
import ErrorCampo from '../../Components/ErrorCampo.jsx'

export default function Create({ categorias = [] }) {
    const { data, setData, errors } = useForm({
        title: '',
        description: '',
        category_id: '',
        date: '',
        location: '',
        price: '',
        image: null,
    })

    const claseCampo =
        'mt-2 w-full rounded-lg border border-[#21694E] bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]'

    return (
        <div className="flex min-h-screen flex-col">
            <Head title="Nuevo taller | Dulce Estudio" />
            <Header />

            <main className="flex-1 px-6 py-10">
                <section className="mx-auto max-w-2xl rounded-2xl bg-[#F8F1F8] p-6">
                    <h1 className="mb-6 text-3xl font-semibold text-[#754075]">
                        Nuevo taller
                    </h1>

                    <form
                        onSubmit={(evento) => evento.preventDefault()}
                        className="space-y-5"
                        noValidate
                    >
                        <div>
                            <label htmlFor="title" className="block font-semibold">
                                Título
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={data.title}
                                onChange={(evento) => setData('title', evento.target.value)}
                                className={claseCampo}
                                maxLength={255}
                                required
                            />
                            <ErrorCampo mensaje={errors.title} />
                        </div>

                        <div>
                            <label htmlFor="description" className="block font-semibold">
                                Descripción
                            </label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(evento) => setData('description', evento.target.value)}
                                className={claseCampo}
                                rows={4}
                                required
                            />
                            <ErrorCampo mensaje={errors.description} />
                        </div>

                        <div>
                            <label htmlFor="category_id" className="block font-semibold">
                                Categoría
                            </label>
                            <select
                                id="category_id"
                                value={data.category_id}
                                onChange={(evento) => setData('category_id', evento.target.value)}
                                className={claseCampo}
                                disabled={categorias.length === 0}
                                required
                            >
                                <option value="">Seleccioná una categoría</option>

                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.name}
                                    </option>
                                ))}
                            </select>
                            <ErrorCampo mensaje={errors.category_id} />

                            {categorias.length === 0 && (
                                <p className="mt-2 text-sm text-[#754075]">
                                    No hay categorías disponibles.
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="date" className="block font-semibold">
                                Fecha
                            </label>
                            <input
                                id="date"
                                type="date"
                                value={data.date}
                                onChange={(evento) => setData('date', evento.target.value)}
                                className={claseCampo}
                                required
                            />
                            <ErrorCampo mensaje={errors.date} />
                        </div>

                        <div>
                            <label htmlFor="location" className="block font-semibold">
                                Ubicación
                            </label>
                            <input
                                id="location"
                                type="text"
                                value={data.location}
                                onChange={(evento) => setData('location', evento.target.value)}
                                className={claseCampo}
                                maxLength={255}
                                required
                            />
                            <ErrorCampo mensaje={errors.location} />
                        </div>

                        <div>
                            <label htmlFor="price" className="block font-semibold">
                                Precio ($)
                            </label>
                            <input
                                id="price"
                                type="number"
                                value={data.price}
                                onChange={(evento) => setData('price', evento.target.value)}
                                className={claseCampo}
                                min="0"
                                step="0.01"
                                required
                            />
                            <ErrorCampo mensaje={errors.price} />
                        </div>

                        <div>
                            <label htmlFor="image" className="block font-semibold">
                                Imagen
                            </label>
                            <input
                                id="image"
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={(evento) =>
                                    setData('image', evento.target.files[0] ?? null)
                                }
                                className={claseCampo}
                                required
                            />
                            <ErrorCampo mensaje={errors.image} />
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                type="submit"
                                disabled
                                className="cursor-not-allowed rounded-lg bg-[#21694E] px-4 py-3 font-semibold text-white opacity-60"
                            >
                                Guardar taller
                            </button>

                            <Link
                                href="/dashboard"
                                className="rounded-lg px-4 py-3 font-semibold text-[#21694E] underline focus-visible:outline-2 focus-visible:outline-[#21694E]"
                            >
                                Volver al panel
                            </Link>
                        </div>
                    </form>
                </section>
            </main>

            <Footer />
        </div>
    )
}