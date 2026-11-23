import { useState } from 'react'
import Header from '../../Components/Header.jsx'
import Hero from '../../Components/Hero.jsx'
import ListaCategorias from '../../Components/ListaCategorias.jsx'
import Buscador from '../../Components/Buscador.jsx'
import ListaEventos from '../../Components/ListaEventos.jsx'
import Footer from '../../Components/Footer.jsx'
import { router } from '@inertiajs/react'
import Paginacion from '../../Components/Paginacion.jsx'

export default function Index({ events, categorias, filtros }) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(filtros.categoria)
    const [busqueda, setBusqueda] = useState(filtros.busqueda)

    function aplicarFiltros(nuevaBusqueda, nuevaCategoria) {
        router.get('/eventos', {
            busqueda: nuevaBusqueda,
            categoria: nuevaCategoria,
        }, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        })
    }

    function cambiarBusqueda(valor) {
        setBusqueda(valor)
        aplicarFiltros(valor, categoriaSeleccionada)
    }

    function cambiarCategoria(valor) {
        setCategoriaSeleccionada(valor)
        aplicarFiltros(busqueda, valor)
    }

    return (
        <>
            <Header />

            <main className="space-y-8 px-6 py-8">
                <Hero />

                <ListaCategorias
                    categorias={['Todos', ...categorias]}
                    categoriaSeleccionada={categoriaSeleccionada}
                    onSeleccionarCategoria={cambiarCategoria}
                />

                <Buscador
                    busqueda={busqueda}
                    onCambiarBusqueda={cambiarBusqueda}
                />

                <ListaEventos eventos={events.data} />

                <Paginacion paginacion={events} />
            </main>

            <Footer />
        </>
    )
}