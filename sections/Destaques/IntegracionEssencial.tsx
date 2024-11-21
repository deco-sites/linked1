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
     * @title Imagens
     * @description Lista de imagens
     */
    images: ImageWidget[];
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
     * @title Conteúdo
     * @description Insira o conteúdo da seção
     */
    SectionContent: SectionContent;
}

export interface Props {
    content?: Content[];
}

export default function Section({
    content = [],
  }: Props) {
    return (

        <section className="bg-white">
            <div className="px-4 py-6 border-y border-sacramentoState-10">
                {content.map((block, index) => (
                    <div
                        key={index}
                        className="flex flex-col"
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
                                    className="w-6 h-6"
                                />
                            )}
                        </div>

                        <div className="">
                            {block.SectionContent.description && (
                                <div className="pb-10 w-[322px]">
                                    <p className="font-sans text-base font-normal text-sacramentoState-80">
                                        {block.SectionContent.description}
                                    </p>
                                </div>
                            )}

                            <div className="w-full grid grid-cols-3 gap-[11px]">
                                {block.SectionContent.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="border border-sacramentoState-10 rounded-[14.22px] overflow-hidden">
                                        <Image
                                            className="w-full h-full object-cover"
                                            src={image || ""}
                                            alt={image || `Imagem ${imgIndex + 1}`}
                                            width={100}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}