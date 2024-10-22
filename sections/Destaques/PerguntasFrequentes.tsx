import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title Perguntas Frequentes
 * @description Estrutura para perguntas frequentes
 */
export interface TextAskSection {
    /**
     * @title Título da dúvida
     * @description Insira o título da dúvida
     */
    TitleAsk: string;
    /**
     * @title Texto da Resposta
     * @description Insira o texto da resposta
     */
    ResponseAsk?: string;
    /**
     * @title Ícone
     * @description Insira o ícone para a seção
     */
    ImageWidget: ImageWidget;
}

/**
 * @title Seção de Perguntas Frequentes
 * @description Estrutura da seção contendo várias perguntas frequentes
 */
export interface TextSection {
    /**
     * @title Perguntas Frequentes
     * @description Insira a lista de perguntas frequentes associadas a esta seção
     */
    DescriptionAskSection: TextAskSection[];
}

/**
 * @title Seção Principal de Perguntas Frequentes
 * @description Seção principal que encapsula todas as seções de perguntas frequentes
 */
export interface Props {
    /**
     * @title Subtítulo
     * @description Insira o subtítulo para a seção principal
     */
    Subtitle: string;
    /**
     * @title Widget de Imagem
     * @description Insira o widget de imagem para a seção
     */
    ImageWidget: ImageWidget;
    /**
     * @title Seções de Perguntas Frequentes
     * @description Insira as seções de perguntas frequentes e suas descrições
     */
    description: TextSection[];
}

export default function Section({ 
    Subtitle, 
    ImageWidget,
    description 
}: Props) {
    return (
        <section className="px-4">
            {Subtitle && (
                <div className="pt-10 pb-10 flex justify-between items-center">
                    <h1 className="text-base font-semibold text-sacramentoState leading-tight-18">
                        {Subtitle}
                    </h1>
                    {ImageWidget && (
                        <Image
                            className=""
                            src={ImageWidget || ""}
                            alt="Ícone Seta"
                            width={24}
                        />
                    )}
                </div>
            )}

            {description.map((section) => (
                <div key={section.DescriptionAskSection} className="pb-4">
                    {section.DescriptionAskSection.map((askSection, askIndex) => (
                        <div 
                            key={askIndex} 
                            className={`flex items-center ${
                                askIndex !== 0 ? 'pt-4' : ''
                            } ${
                                askIndex === section.DescriptionAskSection.length - 1 
                                    ? 'pb-[39px]' 
                                    : 'border-b border-sacramentoState-10 pb-4'
                            }`}
                        >
                            {askSection.ImageWidget && (
                                <Image
                                    className=""
                                    src={askSection.ImageWidget || ""}
                                    alt="Ícone Seta"
                                    width={24}
                                />
                            )}
                            <h3 className="pl-4 font-sans text-lg font-normal text-sacramentoState leading-tight-21">
                                {askSection.TitleAsk}
                            </h3>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
}