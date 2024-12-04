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
     * @title Subtítulo da Seção
     * @description Insira o subtítulo da seção
     */
    subtitleSectionContent?: string;
    /**
     * @title Lista de Texto
     * @description Insira a lista de texto da seção
     */
    listContentTextSection?: string[];
}

export interface Props {
    /**
     * @title Subtítulo Bloco
     * @description Escreva o subtítulo do bloco
     */
    sectionContentSubtitle?: string;
    /**
     * @title Subtítulo da Seção
     * @description Insira subtítulo da seção
     */
    subtitleSection: string;
    menu?: Link[];
    content: Content[];
}

export default function Section({
    sectionContentSubtitle = "",
    subtitleSection = "",
    menu = [],
    content = [],
}: Props) {
    return (
        <section className="bg-white md:bg-sacramentoState-10">
            <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
                <div className="md:bg-white md:w-full md:max-w-[706px]">
                    <div className="px-4 md:px-10">
                        {sectionContentSubtitle && (
                            <div className="pb-4 pt-20 w-full max-w-[275px]">
                                <h2 className="text-[22px] font-sans font-semibold leading-tight-25 tracking-tight-0.44 text-sacramentoState">
                                    {sectionContentSubtitle}
                                </h2>
                            </div>
                        )}
                        {subtitleSection && (
                            <div className="py-4 w-full max-w-[344px]">
                                <h2 className="text-lg font-sans font-normal text-sacramentoState-80">
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
                                                        : "text-sacramentoState-50"
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
                            <div className="">
                                {content.map((item, index) => (
                                    <div
                                        key={index}
                                        className=""
                                    >
                                        {item.subtitleSectionContent && (
                                            <div className="pt-10 pb-4 w-full max-w-[218px]">
                                                <p className="text-[22px] font-sans font-semibold leading-tight-25 tracking-tight-0.44 text-sacramentoState">
                                                    {item
                                                        .subtitleSectionContent}
                                                </p>
                                            </div>
                                        )}

                                        {item.listContentTextSection &&
                                            item.listContentTextSection.length >
                                                0 &&
                                            (
                                                <ul className="pt-4 pb-10 pl-4 w-full max-w-[160px] list-disc list-outside">
                                                    {item.listContentTextSection
                                                        .map((text, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="text-base font-sans font-light text-sacramentoState underline"
                                                            >
                                                                {text}
                                                            </li>
                                                        ))}
                                                </ul>
                                            )}
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
