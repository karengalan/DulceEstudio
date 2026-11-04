import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ListaCategorias from './components/ListaCategorias.jsx'
import Buscador from './components/Buscador.jsx'
import ListaEventos from './components/ListaEventos.jsx'
import Footer from './components/Footer.jsx'
import events from './data/events.js'

function App() {
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

export default App