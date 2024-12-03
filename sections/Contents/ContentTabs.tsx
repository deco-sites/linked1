/**
 * @title {{{title}}}
 */
export interface Link {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Nome
     * @description Nome visível para clique
     */
    name: string;
    /**
     * @title Destino
     * @description Insira a url ou o caminho de destino
     */
    url: string;
    /**
     * @title Ativo
     * @description Informe se essa é a tab ativa
     */
    status?: boolean;
}

/**
 * @title {{{title}}}
 */
export interface Content {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Texto da Seção
     * @description Insira o texto da seção
     */
    sectionContentText: string;
}

export interface Props {
    /**
     * @title Subtítulo da Seção
     * @description Insira subtítulo da seção
     */
    subtitleSection: string;
    menu?: Link[];
    content: Content[];
}

export default function Section({
    subtitleSection = "",
    menu = [],
    content = [],
}: Props) {
    return (
        <section className="bg-mintCream md:bg-sacramentoState-10">
            <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
                <div className="md:bg-mintCream md:w-full md:max-w-[500px]">
                    <div className="px-4">
                        {subtitleSection && (
                            <div className="pb-4 pt-20 w-full max-w-[317px]">
                                <h2 className="text-lg font-sans font-normal text-sacramentoState">
                                    {subtitleSection}
                                </h2>
                            </div>
                        )}

                        {menu?.length > 0 && (
                            <div className="flex-1">
                                <div className="flex justify-around space-x-[37px] md:space-x-[71px] border-b border-sacramentoState-10">
                                    {menu.map((item, index) => (
                                        <div key={index} className="py-3">
                                            <a
                                                href={item.url}
                                                className={`text-base font-sans ${
                                                    item.status
                                                        ? "font-semibold text-sacramentoState-80"
                                                        : "hidden"
                                                }`}
                                            >
                                                {item.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {content?.length > 0 && (
                            <div className="pt-10 pb-[120px]">
                                {content.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full max-w-[317px]"
                                    >
                                        <p className="text-[22px] font-sans font-semibold leading-tight-25 tracking-tight-0.44 text-sacramentoState">
                                            {item.sectionContentText}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
