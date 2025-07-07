const howOperate = ({ items }) => {
    return (
        <>
            <section className="flex flex-col bg-[#0C0A0A]">
                <div className="flex flex-col py-10 justify-center text-center gap-4 px-6 md:px-20">
                    <h1 className="text-[#FFE000] font-bold text-2xl">
                        ¿Cómo Operamos?
                    </h1>
                    <p className="text-white text-3xl md:text-5xl font-semibold max-w-[1100px] mx-auto">
                        Nos integramos con varias plataformas de última milla
                        para lograr cumplir con los tiempos establecidos con los
                        clientes y usuarios de cada canal.
                    </p>
                </div>

                <div className="hidden lg:flex">
                    <img
                        src="./assets/line_Asset-1.png"
                        alt="Decoración"
                        className="px-6 md:px-20 w-full max-w-[950px] mx-auto"
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-6 py-12 px-6">
                    {items.map((item, index) => (
                        <article
                            className="relative flex flex-col w-full max-w-[360px] min-h-[330px] bg-[#454955] py-8 px-10 gap-5 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                            key={index}
                        >
                            <div className="flex justify-between items-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="size-[45px]"
                                />
                                <h1 className="text-[#D2D2D2] text-[36px] font-semibold">
                                    0{index + 1}
                                </h1>
                            </div>
                            <div className="flex flex-col gap-4 mt-4">
                                <h2 className="text-[#F3EFF5] text-2xl font-bold">
                                    {item.title}
                                </h2>
                                <p className="text-[#CDCBCE] text-md leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default howOperate;
