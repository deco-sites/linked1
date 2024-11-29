export interface Props {
    /**
     * @title Texto Testemunha
     * @description Escreva aqui o texto da testemunha
     */
    textTestimony: string;
    /**
     * @title Nome
     * @description Escreva aqui o nome
     */
    nameDescription: string;
}

export default function TestimonySection({
    textTestimony = "",
    nameDescription = "",
}: Props) {
    return (
        <section className="bg-sacramentoState md:bg-sacramentoState-10">
            <div className="md:flex md:justify-center">
                <div className="md:bg-sacramentoState md:w-full md:max-w-[500px]">
                    <div className="py-20 px-4">
                        <div className="border-b-2 border-white">
                            <div className="pb-10 grid gap-y-4">
                                <p className="text-[22px] font-sans font-semibold leading-tight-25 tracking-tight-0.44 text-white">
                                    {textTestimony}
                                </p>
                                <div className="w-full max-w-[255px]">
                                    <p className="text-base font-sans font-normal text-white">
                                        {nameDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
