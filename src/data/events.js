import fotoPasteleria from '../assets/img/pasteleria-francesa.png'
import fotoVegana from '../assets/img/reposteria-vegana.png'
import fotoPanaderia from '../assets/img/panaderia-artesanal.png'
import fotoGalletitas from '../assets/img/galletitas-caseras.png'
import fotoDecoracion from '../assets/img/galletitas-decoradas.png'
import fotoMerengue from '../assets/img/merengue-italiano.jpg'
import fotoMacarons from '../assets/img/macarons.png'
import fotoCelebraciones from '../assets/img/galletitas-celebraciones.png'

const events = [
  {
    id: 1,
    title: 'Pastelería francesa',
    description:
      'Aprendé a preparar clásicos de la pastelería francesa y conocé sus técnicas principales.',
    category: 'Pastelería',
    date: '07-11-2026',
    location: 'Dulce Estudio - Aula 1',
    image: fotoPasteleria,
    price: 18000,
  },
  {
    id: 2,
    title: 'Repostería vegana',
    description:
      'Descubrí cómo preparar postres sin ingredientes de origen animal.',
    category: 'Repostería vegana',
    date: '14-11-2026',
    location: 'Online',
    image: fotoVegana,
    price: 15000,
  },
  {
    id: 3,
    title: 'Panadería artesanal',
    description:
      'Conocé las bases del amasado y la fermentación para elaborar panes caseros.',
    category: 'Panadería',
    date: '21-11-2026',
    location: 'Dulce Estudio - Aula 2',
    image: fotoPanaderia,
    price: 16000,
  },
  {
    id: 4,
    title: 'Galletitas caseras',
    description:
      'Prepará galletitas de manteca, avena y chips de chocolate con recetas sencillas.',
    category: 'Pastelería',
    date: '28-11-2026',
    location: 'Dulce Estudio - Aula 1',
    image: fotoGalletitas,
    price: 12000,
  },
  {
    id: 5,
    title: 'Galletitas decoradas con glasé',
    description:
      'Practicá técnicas de delineado y relleno para decorar tus galletitas.',
    category: 'Decoración',
    date: '05-12-2026',
    location: 'Online',
    image: fotoDecoracion,
    price: 14000,
  },
  {
    id: 6,
    title: 'Técnicas de merengue',
    description:
      'Aprendé las diferencias y los usos del merengue italiano, suizo y francés.',
    category: 'Pastelería',
    date: '12-12-2026',
    location: 'Dulce Estudio - Aula 2',
    image: fotoMerengue,
    price: 15000,
  },
  {
    id: 7,
    title: 'Macarons desde cero',
    description:
      'Conocé los pasos para preparar macarons, desde las tapas hasta sus rellenos.',
    category: 'Pastelería',
    date: '19-12-2026',
    location: 'Dulce Estudio - Aula 1',
    image: fotoMacarons,
    price: 20000,
  },
  {
    id: 8,
    title: 'Decoración de galletitas para celebraciones',
    description:
      'Combiná colores y diseños para crear galletitas decoradas para distintas ocasiones.',
    category: 'Decoración',
    date: '09-01-2027',
    location: 'Online',
    image: fotoCelebraciones,
    price: 16000,
  },
]

export default events
