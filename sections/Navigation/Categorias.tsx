import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Tag {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
    /**
     * @title Nome
     * @description Escreva aqui o nome da categoria
     */
    name: string;
    /**
     * @title Destino
     * @description Insira a url ou o caminho de destino
     */
    url: string;
    /**
     * @title Ícone
     * @description Escolha a o ícone da categoria
     */
    icon: ImageWidget;
};

export interface Props {
  /**
   * @title Título para Mobile
   * @description Digite aqui o título do bloco
   */
  titleForMobile?: string;
  /**
   * @title Título para Desktop
   * @description Digite aqui o título do bloco
   */
  titleForDesktop?: string; 
  /**
   * @title Descrição 1
   * @description Digite aqui a descrição da seção
   */
  descriptionTopSection?: string;
  /**
   * @title Categorias
   * @description Insira as categorias desejadas
   */
  tags?: Tag[];
  /**
   * @title Descrição 2
   * @description Digite aqui a descrição
   */
  descriptionBottomSection?: string | string[];
}

export default function Section({ 
    titleForMobile = '',
    titleForDesktop = '',
    tags = [],
    descriptionTopSection = '',
    descriptionBottomSection = "",
}: Props) {

  return (
    <section className="bg-white">
      <div className="px-4 grid gap-8 lg:gap-20 pb-[65px] ">

        {/* Título para mobile */}
        <div className="pt-[52px] md:hidden w-full text-left">
          <p className="font-sans text-[22px] font-medium leading-tight-25 tracking-tight-2 text-sacramentoState">
            {titleForMobile}
          </p>
        </div>

        {/* Título para desktop */}
        <div className="pt-[144px] px-[240px] hidden md:block text-center">
          <p className="font-sans text-5xl font-medium leading-tight-55 tracking-tight-2 text-sacramentoState ">
            {titleForDesktop}
          </p>
        </div>

        <div className="text-start block md:hidden">
          <p className="font-sans text-base font-normal text-sacramentoState-80">
            {descriptionTopSection}
          </p>
        </div>
        
        <div className="md:pt-[79px] flex justify-start md:justify-center">
          <div className="w-full max-w-[350px] lg:max-w-[780px] flex flex-wrap gap-x-[8px] gap-y-[8px] lg:gap-y-[17px] justify-start lg:justify-center">
            {tags?.map(tag => (
              <div key={tag.name} className="px-4 py-3 w-fit sm:w-1/2 lg:w-fit inline-flex items-center bg-mintCream rounded-[58px]">
                <div className="inline-flex items-center">
                  <Image 
                    className="w-4 h-4" 
                    src={tag.icon || ""} 
                    alt={tag.name} 
                    width={10.67} 
                  />
                  <a href={tag.url} className="text-md md:text-lg pl-2 pr-[1.5px] font-sans font-medium leading-tight-18 text-primary">
                    {tag.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {descriptionBottomSection && (
          <div className="md:hidden grid gap-y-4">
            {Array.isArray(descriptionBottomSection) ? (
              descriptionBottomSection.map((text, index) => (
                <div className="text-center">
                  <p
                    key={index}
                    className="font-sans text-sm font-normal text-sacramentoState-80"
                  >
                    {text}
                  </p>
                </div>
              ))
            ) : (
              <p className="font-sans text-sm font-normal text-sacramentoState-80">
                {descriptionBottomSection}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}