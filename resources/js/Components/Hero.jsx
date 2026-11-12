import imagenPasteleria from '../assets/img/hero-pasteleria.png'

function Hero() {
    return (
        <section
            aria-labelledby="titulo-hero"
            className="mx-auto grid max-w-6xl items-center gap-8 rounded-3xl bg-[#F8F1F8] p-6 md:grid-cols-2 md:p-10"
        >
            <div className="space-y-6">
                <h2
                    id="titulo-hero"
                    className="text-3xl leading-tight font-semibold text-[#754075] md:text-4xl lg:text-5xl"
                >
                    Descubrí tu próximo taller de pastelería
                </h2>

                <p className="text-lg leading-relaxed text-[#242423]">
                    En Dulce Estudio encontrarás talleres y cursos de pastelería,
                    tanto para quienes recién comienzan como para quienes ya
                    tienen experiencia y quieren seguir aprendiendo.
                </p>

                <a
                    href="#eventos"
                    className="inline-block rounded-xl bg-[#21694E] px-6 py-3 font-bold text-white transition-colors hover:bg-[#18513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21694E]"
                >
                    Explorar talleres
                </a>
            </div>

            <img
                src={imagenPasteleria}
                alt="Macarons de distintos colores apilados sobre una superficie clara"
                width="612"
                height="408"
                className="aspect-[3/2] w-full rounded-2xl object-cover shadow-md"
            />
        </section>
    )
}

export default Hero