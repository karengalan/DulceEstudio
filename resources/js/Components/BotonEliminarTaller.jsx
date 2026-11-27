import { useRef } from 'react'

export default function BotonEliminarTaller({ evento }) {
    const dialogo = useRef(null)
    const idTitulo = 'eliminar-taller-' + evento.id

    return (
        <>
            <button
                type="button"
                onClick={() => dialogo.current.showModal()}
                className="rounded-lg border border-red-700 px-4 py-2 font-semibold text-red-700 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            >
                Eliminar taller
            </button>

            <dialog
                ref={dialogo}
                aria-labelledby={idTitulo}
                className="m-auto w-[90%] max-w-md rounded-2xl bg-[#F8F1F8] p-6 text-[#242423] shadow-xl backdrop:bg-black/50"
            >
                <h2
                    id={idTitulo}
                    className="text-2xl font-semibold text-[#754075]"
                >
                    Eliminar taller
                </h2>

                <p className="mt-4">
                    ¿Querés eliminar el taller «{evento.title}»?
                </p>

                <div className="mt-6 flex flex-wrap justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => dialogo.current.close()}
                        className="rounded-lg bg-[#21694E] px-4 py-2 font-semibold text-white hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        disabled
                        className="cursor-not-allowed rounded-lg bg-red-700 px-4 py-2 font-semibold text-white opacity-60"
                    >
                        Eliminar
                    </button>
                </div>
            </dialog>
        </>
    )
}