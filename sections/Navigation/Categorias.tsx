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
}

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
  titleForMobile = "",
  titleForDesktop = "",
  tags = [],
}: Props) {
  return (
    <section className="bg-white">
      <div className="pb-[65px] grid gap-8 md:gap-20">
        {/* Título para mobile */}
        <div className="block md:hidden pt-[52px] pl-[17px] pr-[31px] pb-[42px] ">
          <p className="text-[22px] font-sans font-medium leading-tight-25 tracking-tight-2 text-sacramentoState text-left">
            {titleForMobile}
          </p>
        </div>

        {/* Título para desktop */}
        <div className="hidden md:block pt-[144px] px-[240px]">
          <p className="text-5xl font-sans font-medium leading-tight-55 tracking-tight-2 text-sacramentoState text-center">
            {titleForDesktop}
          </p>
        </div>

        <div className="flex justify-start lg:justify-center pl-4 lg:pt-[79px]">
          <div className="flex flex-wrap justify-start lg:justify-center gap-x-[8px] gap-y-[8px] lg:gap-y-[17px] w-full max-w-[350px] lg:max-w-[780px]">
            {tags?.map((tag) => (
              <div
                key={tag.name}
                className="w-fit sm:w-1/2 lg:w-fit rounded-[58px] inline-flex px-4 py-3 bg-mintCream font-sans font-medium text-primary items-center"
              >
                <div className="inline-flex items-center">
                  <Image
                    className="w-4 h-4"
                    src={tag.icon || ""}
                    alt={tag.name}
                    width={10.67}
                  />
                  <a
                    href={tag.url}
                    className="text-md md:text-lg pl-2 pr-[1.5px] font-sans font-medium leading-tight-18"
                  >
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
