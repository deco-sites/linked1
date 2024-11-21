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
     * @title Icone
     * @description Icone do Benefício
     */
    iconBenfits?: ImageWidget;
    /**
     * @title Texto da Seção
     * @description Insira o texto da seção
     */
    TextOne?: string;
    /**
     * @title Descrição
     * @description Insira a descrição da seção
     */
    TextTwo: string;
  };

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
     * @title Descrição
     * @description Insira a descrição para a seção
     */
    description: SectionContent[];
}

export interface Props {
    content?: Content[];
}

export default function Section({
    content = [],
  }: Props) {
    return (
        <section className="bg-white">
            <div className="px-4 py-6">
                {content.map((block, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <div className="pb-10 flex justify-between">
                            <div>
                                <p className="text-base font-sans font-semibold text-sacramentoState">{block.Subtitle}</p>
                            </div>
                            {block.ImageWidget && (
                                <Image
                                    src={block.ImageWidget}
                                    alt={block.ImageWidget || block.title}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 no-restrict"
                                />
                            )}
                            
                        </div>

                        {block.description.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="pb-10 flex items-start">
                                <div className="py-4 px-4 mr-4 w-fit flex justify-center items-center bg-white border border-sacramentoState-10  rounded-full">
                                    {section.iconBenfits && (
                                        <Image
                                            src={section.iconBenfits}
                                            alt={section.iconBenfits || section.title}
                                            width={32}
                                            height={32}
                                            className="w-8 h-8"
                                        />
                                    )}
                                </div>
                                <div className="grid gap-y-2">
                                    {section.TextOne && (
                                        <p className="text-lg font-sans font-semibold leading-tight-20 text-sacramentoState">
                                            {section.TextOne}
                                        </p>
                                    )}
                                    <p className="text-sm font-sans font-normal text-sacramentoState">
                                        {section.TextTwo}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}