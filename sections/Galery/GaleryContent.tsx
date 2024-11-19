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
    <section className="w-full pb-[59px] md:pb-[178px] bg-sacramentoState">
      <div className="px-4 overflow-x-scroll scrollbar-hide flex flex-nowrap md:grid md:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <div
            className={`shrink-0 w-full max-w-[315px] ${
              index === 0 ? 'lg:pl-10' : ''
            } ${index === items.length - 1 ? 'lg:pr-10' : ''}`}
            key={index}
          >
            <article className="w-full flex flex-col border-t-2 border-white-20">
              <p className="pt-[22.8px] text-base text-white opacity-80 text-left lg:leading-tight-25">
                {item.titleSection}
              </p>
              <div className="flex justify-center py-[26px] px-0">
                <Image
                  src={item.image || ""}
                  width={343}
                  height={486}
                  className="w-[343px] h-[486px]"
                />
              </div>
              <div className="w-full pl-0 text-left">
                <p className="pl-[3px] text-base text-white opacity-80 leading-tight-18 lg:leading-tight-22">
                  {item.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}