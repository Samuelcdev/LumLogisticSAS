const HowOperate = ({ items }) => {
    return (
        <section className="flex flex-col bg-[#0C0A0A] py-16">
            <div className="flex flex-col justify-center text-center gap-4 px-6 md:px-20">
                <h1 className="text-[#FFE000] font-bold text-sm md:text-base uppercase tracking-wide">
                    ¿Cómo Operamos?
                </h1>
                <p className="text-white text-3xl md:text-5xl font-semibold leading-tight max-w-[1100px] mx-auto">
                    Nos integramos con varias plataformas de última milla para
                    lograr cumplir con los tiempos establecidos con los clientes
                    y usuarios de cada canal.
                </p>
            </div>

            <div className="hidden lg:flex mt-10">
                <img
                    src="./assets/line_Asset-1.png"
                    alt="Decoración"
                    className="px-6 md:px-20 w-full max-w-[950px] mx-auto"
                />
            </div>

            <div className="flex flex-wrap justify-center gap-6 py-12 px-6">
                {items.map((item, index) => (
                    <article
                        key={index}
                        className="group relative flex flex-col w-full max-w-[360px] min-h-[330px] bg-[#454955] py-8 px-10 gap-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex justify-between items-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-[45px] h-[45px] object-contain"
                            />
                            <span className="text-[#D2D2D2] text-[36px] font-semibold">
                                0{index + 1}
                            </span>
                        </div>
                        <div className="flex flex-col gap-3 mt-2">
                            <h2 className="text-[#F3EFF5] text-2xl font-bold drop-shadow-sm">
                                {item.title}
                            </h2>
                            <p className="text-[#CDCBCE] text-sm md:text-base leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default HowOperate;
