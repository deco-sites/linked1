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
     * @title Nome do Recurso
     */
    sectionTitle?: string;
    /**
     * @title Descrição Coluna 1
     * @description Escreva aqui a descrição para a Coluna 1
     */
    resourceDescriptionColumOne?: string[];
    /**
     * @title Descrição Coluna 2
     * @description Escreva aqui a descrição para a Coluna 2
     */
    resourceDescriptionColumnTwo?: string[];
    /**
     * @title Sublinhado na Descrição
     * @description Ative para sublinhar as descrições
     * @default false
     */
    underlineDescription?: boolean;
}

export interface Props {
    content?: Content[];
}

export default function Section({
    content = [],
}: Props) {
    return (
        <section className="px-4">
            {content.map((item, index) => (
                <div
                    key={index}
                    className={`mt-[64px] ${
                        index === content.length - 1 ? "pb-[117px]" : ""
                    }`}
                >
                    {item.sectionTitle && (
                        <div className="pb-4 border-b border-sacramentoState-10">
                            <h3 className="text-[22px] font-sans font-semibold text-sacramentoState">
                                {item.sectionTitle}
                            </h3>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-6">
                        {Array.isArray(item.resourceDescriptionColumOne) && (
                            <div className="pt-8 grid gap-y-4">
                                {item.resourceDescriptionColumOne.map((desc, idx) => (
                                    <p
                                        key={idx}
                                        className="text-base font-sans font-normal text-sacramentoState-80"
                                    >
                                        {desc.split(/(-)/).map((part, partIdx) =>
                                            part === "-" ? (
                                                <span
                                                    key={partIdx}
                                                    className="no-underline"
                                                >
                                                    {part}
                                                </span>
                                            ) : (
                                                <span
                                                    key={partIdx}
                                                    className={item.underlineDescription ? "underline" : ""}
                                                >
                                                    {part}
                                                </span>
                                            )
                                        )}
                                    </p>
                                ))}
                            </div>
                        )}

                        {Array.isArray(item.resourceDescriptionColumnTwo) && (
                            <div className="pt-8 grid gap-y-4">
                                {item.resourceDescriptionColumnTwo.map((desc, idx) => (
                                    <p
                                        key={idx}
                                        className="text-base font-sans font-normal text-sacramentoState-80"
                                    >
                                        {desc.split(/(-)/).map((part, partIdx) =>
                                            part === "-" ? (
                                                <span
                                                    key={partIdx}
                                                    className="no-underline"
                                                >
                                                    {part}
                                                </span>
                                            ) : (
                                                <span
                                                    key={partIdx}
                                                    className={item.underlineDescription ? "underline" : ""}
                                                >
                                                    {part}
                                                </span>
                                            )
                                        )}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}