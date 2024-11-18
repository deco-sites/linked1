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
   * @title Título
   * @description Escreva aqui o título do item
   */
  SectionTitle2: string;
  // /**
  //  * @title Destino
  //  * @description Insira a url ou o caminho de destino
  //  */
  // url: string;
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
  /**
   * @title Botão
   * @description Insira o botão
   */
  button?: Link[];
}

export default function Section({ 
  title = '',
  items = [],
  button = []
}: Props) {

  return (
    <section className="">
      <div>
        <p className="pl-[15px] pb-20 pt-[93px] font-sans font-normal text-[28px] leading-tight-32 tracking-tight-2 text-primary">{title}</p>
        <div className="flex overflow-x-scroll scrollbar-hide">
          {items.map((item, index) => (
            <div
              key={index}
              className={`pl-4 flex-none w-[274.4px] ${index === items.length - 1 ? 'pr-4' : ''}`}
            >
              <Image
                className="rounded-lg"
                src={item.image || ""}
                width={274.4}
                alt={item.SectionTitle2}
              />
              <p className="pt-[12.8px] pb-[53.6px] text-base leading-snug">
                {item.SectionTitle2}
              </p>
            </div>
          ))}
        </div>
        <div className="pb-[30px] pt-[61.6px] px-4 flex flex-col rounded-xl items-center justify-center space-y-4">
          {button?.map((btn, index) => (
            <div key={index} className="w-full flex justify-center">
              <a
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 flex-none bg-sacramentoState rounded-xl text-secondary flex items-center pr-2.5 justify-center"
              >
                <span className="font-sans text-base font-medium text-center leading-tight-18 lg:leading-tight-21 lg:leading-tight-55 lg:tracking-tight-2">
                  {btn.name}
                </span>
                {btn.iconButton && (
                  <img src={btn.iconButton} alt="WhatsApp Icon" className="w-6 h-6 ml-2.5" />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
