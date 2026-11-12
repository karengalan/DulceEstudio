import '../css/app.css'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'

const paginas = import.meta.glob('./Pages/**/*.jsx', { eager: true })

createInertiaApp({
  resolve: (nombre) => paginas[`./Pages/${nombre}.jsx`].default,
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})