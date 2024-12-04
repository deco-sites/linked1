import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface IntegrationCategory {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Nome da Categoria
     * @description Nome da categoria de integração
     */
    name: string;
    /**
     * @title Imagens
     * @description Lista de imagens da categoria
     */
    images: ImageWidget[];
}

/**
 * @title {{{title}}}
 */
export interface Props {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Categorias de Integração
     * @description Insira as categorias de integração
     */
    categories: IntegrationCategory[];
}

export default function IntegrationsSection({
    categories = [],
}: Props) {
    return (
        <section className="bg-white md:bg-sacramentoState-10">
            <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
                <div className="md:bg-white md:w-full md:max-w-[706px]">
                    <div className="px-4 md:px-10 grid grid-cols-1 gap-4 md:grid-cols-4">
                        {categories.map((category, index) => (
                            <div key={index} className="rounded-lg">
                                <div className="pb-4">
                                    <p className="text-base font-sans font-normal leading-tight-18 text-sacramentoState">
                                        {category.name}
                                    </p>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    {category.images.map((image, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className={`border border-sacramentoState-10 rounded-[14.22px] overflow-hidden ${
                                                imgIndex ===
                                                        category.images.length -
                                                            1
                                                    ? "mb-10"
                                                    : ""
                                            }`}
                                        >
                                            <img
                                                src={image}
                                                alt={image}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
