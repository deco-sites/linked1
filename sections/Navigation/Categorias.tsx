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
   * @title Categorias
   * @description Insira as categorias desejadas
   */
  tags?: Tag[];
}

export default function Section({ 
    titleForMobile = '',
    titleForDesktop = '',
    tags = []
}: Props) {

  return (
    <section className="grid gap-8 lg:gap-20 pb-[65px] bg-white">
      <div>
        {/* Título para mobile */}
        <p className="pt-[52px] md:hidden pl-[17px] pr-[31px] pb-[42px] font-sans font-semibold text-sacramentoState text-[22px] leading-tight-25 tracking-tight-2 text-left">
          {titleForMobile}
        </p>
        {/* Título para desktop */}
        <p className="pt-[144px] px-[240px] hidden md:block font-sans text-sacramentoState text-5xl font-semibold leading-tight-55 tracking-tight-2 text-center">
          {titleForDesktop}
        </p>
        
        <div className="flex justify-start lg:justify-center pl-4 lg:pt-[79px] pb-[65px] lg:pb-[122px]">
          <div className="flex flex-wrap justify-start lg:justify-center gap-x-[8px] gap-y-[8px] lg:gap-y-[17px] w-full max-w-[350px] lg:max-w-[780px]">
            {tags?.map(tag => (
              <div key={tag.name} className="w-fit sm:w-1/2 lg:w-fit rounded-[58px] inline-flex px-4 py-3 bg-mintCream font-sans font-semibold text-primary items-center">
                <div className="inline-flex items-center">
                  <Image 
                    className="w-4 h-4" 
                    src={tag.icon || ""} 
                    alt={tag.name} 
                    width={10.67} 
                  />
                  <a href={tag.url} className="text-md md:text-lg pl-2 pr-[1.5px] font-sans font-semibold leading-tight-18">
                    {tag.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}