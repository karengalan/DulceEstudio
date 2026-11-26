export default function ErrorCampo({ mensaje }) {
    if (!mensaje) {
        return null
    }

    return (
        <p role="alert" className="mt-1 text-sm text-red-700">
            {mensaje}
        </p>
    )
}