import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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
     * @title Descrição da Seção
     * @description Escreva a descrição da seção no topo
     */
    descriptionSectionTop?: string[];
    /**
     * @title Descrição da Seção
     * @description Escreva a descrição da seção embaixo
     */
    descriptionSectionBottom?: string[];
}

/**
 * @title {{{title}}}
 */
export interface IconBenefits {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Ícone
     * @description Ícone da seção
     */
    icon?: ImageWidget;
    /**
     * @title Descrição do Ícone
     * @description Escreva a descrição do ícone
     */
    descriptionIcon?: string;
}

export interface Props {
    /**
     * @title Conteúdo
     * @description Descrição do conteúdo da seção
     */
    content?: Content[];
    /**
     * @title Imagem
     * @description Imagem da Seção
     */
    image?: ImageWidget;
    /**
     * @title Ícone Benefício
     */
    benefits?: IconBenefits[];
    /**
     * @title Lista de Benefícios
     * @description Escreva a lista de benefícios
     */
    benefitsDescription: string[];
}

export interface Props {
    content?: Content[];
    image?: ImageWidget;
    benefits?: IconBenefits[];
    benefitsDescription: string[];
}

export default function Section({
    content = [],
    image,
    benefits = [],
    benefitsDescription = [],
}: Props) {
    return (
        <section className="bg-white">
            <div className="px-4 py-10">
                {content.map((block, index) => (
                    <div key={index} className="mb-12">
                        {block.descriptionSectionTop && block.descriptionSectionTop.length > 0 && (
                            <div className="pb-4 space-y-4">
                                {block.descriptionSectionTop.map((paragraph, paragraphIndex) => (
                                    <p
                                        key={paragraphIndex}
                                        className="text-base font-sans font-normal text-sacramentoState-80 text-start"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        {image && (
                            <div className="py-4 flex justify-center">
                                <Image
                                    src={image}
                                    alt={image || "Imagem da seção"}
                                    width={100}
                                    className="w-auto h-auto max-w-full rounded-xl"
                                />
                            </div>
                        )}

                        {block.descriptionSectionBottom && block.descriptionSectionBottom.length > 0 && (
                            <div className="pt-4 space-y-4">
                                {block.descriptionSectionBottom.map((paragraph, paragraphIndex) => (
                                    <p
                                        key={paragraphIndex}
                                        className="text-base font-sans font-normal text-sacramentoState-80 text-start"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {benefits.length > 0 && (
                    <div className="my-10 grid grid-cols-2">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`py-[27px] px-[66px] flex flex-col items-center ${
                                    index === 0
                                        ? "border-r border-b border-sacramentoState-10"
                                        : index === benefits.length - 1
                                        ? "border-l border-t border-sacramentoState-10"
                                        : ""
                                }`}
                            >
                                {benefit.icon && (
                                    <div className="flex justify-center mb-2">
                                        <Image
                                            src={benefit.icon}
                                            alt={benefit.icon || "Ícone do benefício"}
                                            width={32}
                                            height={32}
                                            className="w-8 h-8"
                                        />
                                    </div>
                                )}

                                {benefit.descriptionIcon && (
                                    <p className="text-base font-light text-gray-600 mb-4">
                                        {benefit.descriptionIcon}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {benefitsDescription && benefitsDescription.length > 0 && (
                    <ul className="pt-10 list-disc list-outside px-4">
                        {benefitsDescription.map((benefitDesc, descIndex) => (
                            <li key={descIndex} className="font-sans text-base font-light text-sacramentoState-80">
                                {benefitDesc}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}