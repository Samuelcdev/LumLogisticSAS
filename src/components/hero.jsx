export default function Hero() {
    return (
        <>
            {/* HERO PRINCIPAL */}
            <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#3A3A3A] items-center gap-10 px-6 lg:px-20 py-12 relative overflow-hidden">
                {/* TEXTO */}
                <div className="flex flex-col w-full max-w-xl justify-center gap-6 z-10 text-center md:text-left animate-fade-in">
                    <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-extrabold text-[#F3EFF5] leading-tight font-montserrat drop-shadow-lg">
                        Aliados de Última Milla
                    </h1>
                    <p className="text-[#D2D2D2] text-base sm:text-lg leading-relaxed drop-shadow">
                        Somos el aliado logístico de su compañía, optimizando
                        costos y mejorando eficiencias bajo modelos
                        colaborativos en nuestros centros de acopio. Conectamos
                        múltiples clientes y canales mediante tecnología
                        desarrollada in-house.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                        <a
                            href="#"
                            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-[#FFE000] text-black font-medium rounded-md shadow-md hover:bg-transparent hover:border hover:border-[#F3EFF5] hover:text-[#FFE000] transition"
                        >
                            Conozca más
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-[#F3EFF5] text-[#F3EFF5] font-medium rounded-md hover:text-[#FFE000] hover:border-[#FFE000] transition"
                        >
                            Contáctenos
                        </a>
                    </div>
                </div>

                {/* IMAGEN */}
                <div className="hidden lg:flex justify-center items-center z-10 animate-fade-in">
                    <img
                        src="./assets/LUM-home-img-2.png"
                        alt="Aliados logísticos"
                        className="w-full max-w-[420px] h-auto object-contain drop-shadow-2xl"
                    />
                </div>
            </section>

            {/* TRABAJE CON NOSOTROS */}
            <section className="grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-20 min-h-[80vh] bg-[#FFE000] py-16 relative overflow-hidden">
                {/* CONTENIDO */}
                <div className="flex flex-col gap-8 z-10 text-center lg:text-left animate-fade-in">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A3A3A] max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
                        ¡Trabaje con nosotros!
                    </h1>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#3A3A3A] max-w-xl mx-auto lg:mx-0">
                        Envíenos su hoja de vida al correo:
                    </h3>
                    <a
                        href="mailto:seleccion.talento@lum.com.co"
                        className="inline-flex items-center justify-center px-6 py-4 bg-[#3A3A3A] text-[#FFE000] font-medium rounded-md shadow hover:bg-[#2A2A2A] transition duration-200 w-fit mx-auto lg:mx-0"
                    >
                        seleccion.talento@lum.com.co
                    </a>
                </div>
                <div className="hidden lg:flex justify-center items-center z-10 animate-fade-in">
                    <img
                        src="./assets/work_with_us.png"
                        alt="Trabaje con nosotros"
                        className="w-full max-w-[400px] h-auto object-contain drop-shadow-xl"
                    />
                </div>
            </section>
        </>
    );
}
