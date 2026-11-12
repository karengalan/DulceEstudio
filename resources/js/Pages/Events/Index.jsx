import { useState } from 'react'
import Header from '../../Components/Header.jsx'
import Hero from '../../Components/Hero.jsx'
import ListaCategorias from '../../Components/ListaCategorias.jsx'
import Buscador from '../../Components/Buscador.jsx'
import ListaEventos from '../../Components/ListaEventos.jsx'
import Footer from '../../Components/Footer.jsx'

export default function Index({ events }) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos')
    const [busqueda, setBusqueda] = useState('')

    const textoBuscado = busqueda.trim().toLowerCase()

    const eventosFiltrados = events.filter((evento) => {
        const coincideCategoria =
            categoriaSeleccionada === 'Todos' ||
            evento.category === categoriaSeleccionada

        const coincideNombre =
            evento.title.toLowerCase().includes(textoBuscado)

        return coincideCategoria && coincideNombre
    })

    return (
        <>
            <Header />

            <main className="space-y-8 px-6 py-8">
                <Hero />

                <ListaCategorias
                    categoriaSeleccionada={categoriaSeleccionada}
                    onSeleccionarCategoria={setCategoriaSeleccionada}
                />

                <Buscador
                    busqueda={busqueda}
                    onCambiarBusqueda={setBusqueda}
                />

                <ListaEventos eventos={eventosFiltrados} />
            </main>

            <Footer />
        </>
    )
}