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
  };

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
        <section className="relative px-4 pt-10 bg-white">
            <div className="absolute top-0 left-0 w-full border-t border-sacramentoState-10"></div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {categories.map((category, index) => (
                <div key={index} className="rounded-lg">
                    <p className="pb-4 font-sans text-base font-normal leading-tight-18 text-sacramentoState">
                    {category.name}
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                    {category.images.map((image, imgIndex) => (
                        <div
                        key={imgIndex}
                        className={`border border-sacramentoState-10 rounded-[14.22px] overflow-hidden ${
                            imgIndex === category.images.length - 1 ? 'mb-10' : ''
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
        </section>
    );
}
  