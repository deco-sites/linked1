import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface SectionContent {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Descrição
     * @description Insira a descrição da seção
     */
    description?: string;
    /**
     * @title Requisitos
     * @description Insira os requisitos do plano
     */
    requirements?: string[];
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
     * @title Subtítulo
     * @description Insira o subtítulo para a seção
     */
    Subtitle: string;
    /**
     * @title Ícone
     * @description Insira o ícone para a seção
     */
    ImageWidget: ImageWidget;
    /**
     * @title Conteúdo
     * @description Insira o conteúdo da seção
     */
    SectionContent: SectionContent;
}

export interface Props {
    content?: Content[];
    button?: string;
    url?: string;
}

export default function Section({
    content = [],
    button = "",
    url = "",
  }: Props) {
    return (

        <section className="bg-white">
            <div className="px-4 py-6 border-y border-sacramentoState-10">
                {content.map((block, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="pb-10 flex justify-between">
                            <div>
                                <p className="text-base font-sans font-semibold text-sacramentoState">
                                    {block.Subtitle}
                                </p>
                            </div>
                            {block.ImageWidget && (
                                <Image
                                    src={block.ImageWidget}
                                    alt={block.ImageWidget || block.title}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            )}
                        </div>

                        <div className="pb-10 w-[322px]">
                            {block.SectionContent.description && (
                                <p className="font-sans text-base font-normal text-sacramentoState">
                                    {block.SectionContent.description}
                                </p>
                            )}

                            {block.SectionContent.requirements && block.SectionContent.requirements.length > 0 && (
                                <ul className="pt-6 px-4 list-disc list-outside">
                                    {block.SectionContent.requirements.map((requirement, reqIndex) => (
                                        <li key={reqIndex} className="font-sans text-base text-light text-sacramentoState-80">
                                            {requirement}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="py-[10px] w-full flex justify-center items-center bg-sacramentoState rounded-[10px]">
                            <a
                                href={url}
                                className="w-full font-sans text-base font-semibold text-secondary text-center"
                            >
                                {button}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}