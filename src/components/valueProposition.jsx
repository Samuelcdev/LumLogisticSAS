const ValueProposition = ({ items }) => {
    return (
        <section className="bg-[#3A3A3A] px-6 md:px-10 lg:px-20 py-16">
            {/* ENCABEZADO */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-[#FFE000] text-sm md:text-base font-bold uppercase tracking-wide">
                        Somos LUM LOGISTIC
                    </h1>
                    <h2 className="text-[#F3EFF5] text-4xl md:text-5xl font-bold leading-tight">
                        Nuestra Propuesta de Valor
                    </h2>
                </div>
                <p className="lg:w-1/2 text-[#D2D2C9] text-base md:text-lg leading-relaxed">
                    Hacemos nuestra logística de una manera sostenible,
                    cumplimos a cabalidad lo que prometemos, nos adaptamos
                    fácilmente a cada necesidad de nuestros aliados, buscando
                    siempre la mejor solución para lograr mejores eficiencias en
                    toda la cadena de suministro. Todo esto lo hacemos para
                    lograr que los clientes puedan:
                </p>
            </div>

            {/* TARJETAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {items.map((item, index) => (
                    <article
                        key={index}
                        className="group relative min-h-[329px] rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
                    >
                        {/* Imagen de fondo animada */}
                        <div
                            className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 scale-100 group-hover:scale-110"
                            style={{ backgroundImage: `url(${item.image})` }}
                        ></div>

                        {/* Overlay oscuro */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Contenido */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6 gap-4">
                            <h3 className="text-[#F3EFF5] text-2xl font-semibold drop-shadow-md">
                                {item.title}
                            </h3>
                            <p className="text-[#D2D2D2] drop-shadow-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ValueProposition;
