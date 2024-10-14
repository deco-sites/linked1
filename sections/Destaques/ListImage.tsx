import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type IntegrationCategory = {
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

export type filteredCategories = {
  /**
   * @title Nome
   * @description Nome da categoria filtrada
   */
  name: string;
};

export interface Props {
  /**
   * @title Texto da Seção
   * @description Insira o texto da seção
   */
  sectionText: string;
  /**
   * @title Texto do Dropdown
   * @description Insira o texto do dropdown
   */
  dropdownText: string;
   /**
   * @title Ícone de Seta
   * @description Insira o ícone de seta
   */
   arrowIcon: ImageWidget;
  /**
   * @title Categorias Filtradas
   * @description Insira as categorias de integração filtradas
   */
  button?: filteredCategories[];
  /**
   * @title Categorias de Integração
   * @description Insira as categorias de integração
   */
  categories: IntegrationCategory[];
}

export default function IntegrationsSection({
  sectionText = '',
  dropdownText = '',
  arrowIcon,
  categories = [],
}: Props) {
  return (
    <section className="ml-4 mr-4 mb-10 bg-white">
      <div className="pr-[90px] pt-6 pb-10 justify-start">
        <h2 className="text-base text-sans font-normal">{sectionText}</h2>
      </div>
        {/* Dropdown de Categorias */}
        <div className="mb-8 relative">
        <select className="w-full pl-2 py-[13.5px] border-b border-sacramentoState rounded-t-lg text-sacramentoState bg-sacramentoState-10 cursor-pointer appearance-none pr-10 bg-[#e9f1ef]">
            <option value="" className="text-sacramentoState-80 text-lg text-sans font-normal">{dropdownText}</option>
            {categories.map((category, index) => (
            <option key={index} value={category.name}>
                {category.name}
            </option>
            ))}
        </select>

        {/* Ícone de seta */}
        {arrowIcon && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <Image
                className="w-6 h-6"
                src={arrowIcon || ""}
                alt="Arrow Icon"
            />
            </div>
        )}
        </div>
        {categories.map((category, index) => (
        <div
            key={index}
            className="mb-8"
        >
          <div className="">
            <div className="pt-4 pb-4">
                <h2 className="text-base text-sans text-sacramentoState">{category.name}</h2>
            </div>
            <div className="grid grid-cols-3 gap-[11px] w-full">
              {category.images.map((image, imgIndex) => (
                <div key={imgIndex} className="border border-sacramentoState-10 rounded-[14.22px] overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={image || ""}
                    alt={category.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}