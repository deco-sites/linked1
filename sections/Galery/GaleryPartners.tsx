import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Link {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
  /**
   * @title Ícone
   * @description URL do ícone opcional
   */
  iconButton?: ImageWidget;
};

/**
 * @title {{{SectionTitle}}}
 */
export interface Item {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  SectionTitle: string;
  /**
   * @title Descrição
   * @description Escreva aqui a descrição do item
   */
  description: string;
  /**
   * @title Imagem
   * @description Escolha a imagem do item
   */
  image: ImageWidget;
};

export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título do bloco
   */
  title: string,
  /**
   * @title Items
   * @description Configure cada item do Galery
   */
  items: Item[];
}

export default function Section({ 
  title = '',
  items = [],
}: Props) {

  return (
    <section className="bg-mintCream">
      <div className="pb-[133px] pt-[93px]">
        <div className="px-4 md:pl-10 md:pr-0 pb-12 md:w-[450px]">
            <p className="font-sans font-normal text-[28px] leading-tight-32 tracking-tight-2 text-primary">{title}</p>
        </div>
        <div className="md:mx-10 md:w-fit flex md:grid md:grid-cols-3 gap-4 md:gap-x-5 overflow-hidden overflow-x-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                index > 2 ? 'block md:hidden' : ''
              } pl-4 md:pl-0 flex-none w-[274.4px] md:w-full md:max-w-[463px] border-b border-sacramentoState-10 ${
                index === items.length - 1 ? 'pr-4' : ''
              }`}
            >
              <Image
                src={item.image || ""}
                width={274.4}
                className="md:w-[463px] md:h-fit rounded-lg"
                alt={item.SectionTitle}
              />
              <div className="pt-[12.8px] pb-[54px]">
                <p className=" text-base leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}