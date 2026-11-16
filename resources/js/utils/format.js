export function formatearFecha(fecha) {
    const [anio, mes, dia] = fecha.split('-')
    return `${dia}-${mes}-${anio}`
}

export function formatearPrecio(precio) {
    return Number(precio).toLocaleString('es-AR')
}
