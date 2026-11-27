import { Link } from '@inertiajs/react'

export default function Paginacion({ paginacion }) {
    if (paginacion.last_page <= 1) {
        return null
    }

    const claseEnlace =
        'rounded-lg bg-[#21694E] px-4 py-2 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]'

    return (
        <nav
            aria-label="Paginación de talleres"
            className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4"
        >
            {paginacion.prev_page_url ? (
                <Link
                    href={paginacion.prev_page_url}
                    preserveScroll
                    className={claseEnlace}
                >
                    Anterior
                </Link>
            ) : (
                <span
                    aria-disabled="true"
                    className="rounded-lg bg-gray-200 px-4 py-2 text-gray-500"
                >
                    Anterior
                </span>
            )}

            <p>
                Página {paginacion.current_page} de {paginacion.last_page}
            </p>

            {paginacion.next_page_url ? (
                <Link
                    href={paginacion.next_page_url}
                    preserveScroll
                    className={claseEnlace}
                >
                    Siguiente
                </Link>
            ) : (
                <span
                    aria-disabled="true"
                    className="rounded-lg bg-gray-200 px-4 py-2 text-gray-500"
                >
                    Siguiente
                </span>
            )}
        </nav>
    )
}