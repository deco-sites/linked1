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
export interface filteredCategories {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;

  /**
   * @title Nome
   * @description Nome da categoria filtrada
   */
  name: string;
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
   * @title Título da Seção
   * @description Insira o título da seção
   */
  titleSectionText?: string;
  /**
   * @title Texto da Seção
   * @description Insira o texto da seção
   */
  sectionText?: string;
  /**
   * @title Ícone
   * @description Insira o ícone para a seção
   */
  ImageWidget: ImageWidget;
  /**
   * @title Texto da Seção
   * @description Insira o texto da seção
   */
  sectionTextDescription?: string;
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
  titleSectionText = '',
  sectionText = '',
  ImageWidget = '',
  sectionTextDescription = '',
  dropdownText = '',
  arrowIcon,
  categories = [],
}: Props) {
  return (
    <section className="ml-4 mr-4 mb-10 bg-white">
      <div className="pr-[90px] pt-6 pb-10 justify-start">
        <h2 className="text-base font-sans font-normal leading-tight-18">
          {sectionText}
        </h2>
      </div>
      {titleSectionText && (
                <div className="pt-10 pb-10 flex justify-between items-center">
                    <h1 className="text-base font-medium text-sacramentoState leading-tight-18">
                        {titleSectionText}
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
      {sectionTextDescription && (
        <div className="pb-10">
          <p className="font-sans font-normal text-base leading-tight-18 text-sacramentoState-80">
            {sectionTextDescription}
          </p>
        </div>
      )}
      {/* Dropdown de Categorias */}
      <div className="mb-8 relative">
        <select className="w-full pl-2 py-[13.5px] border-b border-sacramentoState rounded-t-lg text-sacramentoState bg-sacramentoState-10 cursor-pointer appearance-none pr-10 bg-[#e9f1ef]">
          <option value="" className="text-sacramentoState-80 text-lg font-sans font-normal leading-tight-21">
            {dropdownText}
          </option>
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
              width={24}
            />
          </div>
        )}
      </div>
      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <div className="">
            <div className="pt-4 pb-4">
              <h2 className="text-base font-sans leading-tight-18 text-sacramentoState">
                {category.name}
              </h2>
            </div>
            <div className="w-full grid grid-cols-3 gap-[11px]">
              {category.images.map((image, imgIndex) => (
                <div key={imgIndex} className="border border-sacramentoState-10 rounded-[14.22px] overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={image || ""}
                    alt={category.name}
                    width={100}
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