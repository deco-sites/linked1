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
};

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
        <div className="swiper-wrapper inline-flex lg:flex-nowrap">
          {items.map((item, index) => (
            <div
              className={`swiper-slide w-[315px] min-w-[315px] pl-4 ${
                index === 0 ? 'lg:pl-10' : ''
              } ${index === items.length - 1 ? 'lg:pr-10' : ''} ${
                index !== 0 ? 'lg:pl-0' : ''
              }`}
              key={index}
            >
              <article className="w-full flex flex-col border-t-2 border-white-20">
                <p className="pt-[22.8px] text-base text-mintCream font-sans text-left lg:leading-tight-21 lg:leading-tight-25">
                  {item.titleSection}
                </p>
                <div className="flex justify-center py-[26px] px-0">
                  <Image className="" src={item.image || ""} width={315} />
                </div>
                <div className="w-full pl-0 text-left">
                  <p className="pl-[3px] text-base font-sans font-normal text-mintCream leading-tight-18 lg:leading-tight-22">
                    {item.description} <br /> {item.wordBreak}
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