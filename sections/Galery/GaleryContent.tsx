import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Item {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  titleSection: string;
  /**
   * @title Descrição
   * @description Escreva aqui a descrição do item
   */
  description: string;
  /**
   * @title Quebra de Linha
   * @description Escreva aqui a quebra de linha
   */
  wordBreak?: string;
  /**
   * @title Imagem
   * @description Escolha a imagem do item
   */
  image: ImageWidget;
}

export interface Props {
  /**
   * @title Items
   * @description Configure cada item do Galery
   */
  items: Item[];
}

export default function Section({
  items = [],
}: Props) {
  return (
    <section className="bg-sacramentoState">
      <div className="pb-[59px] overflow-x-scroll scrollbar-hide swiper-container">
        <div className="swiper-wrapper px-4 md:px-10 flex gap-x-4 md:gap-x-[20px]">
          {items.map((item, index) => (
            <div
              className="swiper-slide w-full max-w-[343px] flex-none md:flex md:flex-auto"
              key={index}
            >
              <article className="w-full flex flex-col border-t-2 border-white-20">
                <div className="pt-[23px] text-left">
                  <p className="text-base md:text-lg font-normal md:font-light md:leading-tight-25 text-mintCream md:text-white">
                    {item.titleSection}
                  </p>
                </div>
                <div className="flex justify-center py-[26px]">
                  <Image  
                    src={item.image || ""} 
                    width={343}
                    className="rounded-3xl"
                  />
                </div>
                <div className="pl-[3px] w-full text-left">
                  <p className="text-base font-sans font-light leading-tight-18 md:leading-none text-mintCream md:text-white opacity-80">
                    {item.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
