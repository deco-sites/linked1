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
    <section className="w-full pb-[59px] bg-sacramentoState">
      <div className="overflow-x-scroll scrollbar-hide swiper-container">
        <div className="swiper-wrapper inline-flex lg:flex-nowrap gap-6">
          {items.map((item, index) => (
            <div
              className={`swiper-slide w-[343px] ml-4 ${
                index === 0 ? 'lg:ml-10' : ''
              } ${index === items.length - 1 ? 'lg:mr-10' : ''} ${
                index !== 0 ? 'lg:ml-0' : ''
              }`}
              key={index}
            >
              <article className="w-full flex flex-col border-t-2 border-white-20">
                <p className="pt-[22.8px] text-base text-white opacity-80 text-left lg:leading-tight-21 lg:leading-tight-25">
                  {item.titleSection}
                </p>
                <div className="flex justify-center py-[26px] px-0 w-[343px] h-[485px]">
                  <Image className="w-full h-full object-cover rounded-xl" src={item.image || ""} width={315} />
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
