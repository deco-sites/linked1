import { type Section } from "@deco/deco/blocks";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface DescriptionSection {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Descrição
     * @description Escreva a descrição
     */
    descriptionSectionContent?: string[];
    /**
     * @title Descrição Lista
     * @description Escreva a lista de descrição
     */
    descriptionSectionContentList?: string[];
}

export interface Props {
    /**
     * @title Título
     * @description Escreva aqui o título
     */
    title: string;
    /**
     * @title Descrição
     * @description Escreva a descrição
     */
    description?: string;
    /**
     * @title Imagem
     * @description Insira a imagem
     */
    image?: ImageWidget;
    /**
     * @title Descrição
     * @description Escreva a descrição
     */
    descriptionSection?: string;
    /**
     * @title Imagem
     * @description Insira a imagem
     */
    imageContent?: ImageWidget;
    /**
     * @title Número Grande
     * @description Escreva a número grande
     */
    bigNumber?: string;
    /**
     * @title Descrição Pequena
     * @description Escreva a descrição pequena
     */
    smallDescription?: string;
    /**
     * @title Conteúdo de descrição
     * @description Insira o conteúdo com descrição
     */
    sectionContentDescription?: DescriptionSection[];
}

export default function Section({
    title = "",
    description,
    image,
    descriptionSection,
    imageContent,
    bigNumber,
    smallDescription,
    sectionContentDescription = [],
}: Props) {
    return (
        <section className="bg-white">
            <div className="px-4 py-10 text-start">
                {title && (
                    <div className="pb-4 w-full max-w-[290px]">
                        <h1 className="text-[28px] font-sans font-medium leading-tight-32 tracking-tight-0.56 text-sacramentoState">{title}</h1>
                    </div>
                )}

                {description && (
                    <div className="py-4">
                        <p className="text-base font-sans text-normal text-sacramentoState">
                            {description}
                        </p>
                    </div>
                )}

                {image && (
                    <div className="py-4">
                        <img
                            src={image}
                            alt={image || "Section Image"}
                            className="w-full h-full"
                        />
                    </div>
                )}

                {descriptionSection && (
                    <div className="py-4">
                        <p className="text-base font-sans text-normal text-sacramentoState">
                            {descriptionSection}
                        </p>
                    </div>
                )}
                
                {image && (
                    <div className="py-4">
                        <img
                            src={imageContent}
                            alt={imageContent || "Section Image"}
                            className="w-full h-full"
                        />
                    </div>
                )}

                <div className="pt-10">
                    <div className="pb-10 space-y-4">
                        {bigNumber && (
                            <div className="text-start">
                                <span className="text-7xl font-sans font-thin leading-tight-72 tracking-tight-1.44 text-sacramentoState">
                                    {bigNumber}
                                </span>
                            </div>
                        )}

                        {smallDescription && (
                            <div className="w-full max-w-[244px]">
                                <p className="text-base font-sans font-normal text-sacramentoState-80">
                                    {smallDescription}
                                </p>
                            </div>
                        )}
                    </div>

                    {sectionContentDescription.length > 0 && (
                        <div className="pt-4">
                            {sectionContentDescription.map((content, index) => (
                                <div key={index} className="space-y-4">
                                    {content.descriptionSectionContent && (
                                        <div className="space-y-4">
                                            {content.descriptionSectionContent.map((
                                                desc,
                                                idx,
                                            ) => (
                                                <p
                                                    key={idx}
                                                    className="text-base font-sans font-normal text-sacramentoState-80"
                                                >
                                                    {desc}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {content.descriptionSectionContentList && (
                                        <ul className="pt-10 px-4 list-disc list-outside space-y-2">
                                            {content.descriptionSectionContentList
                                                .map((item, idx) => (
                                                    <li key={idx} className="text-base font-sans font-normal text-sacramentoState-80">
                                                        {item}
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
        </section>
    );
}
