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
        <div className="md:w-[350px] pl-[15px] md:pl-10 pb-20 pt-[93px] ">
          <p className="font-sans font-normal text-[28px] leading-tight-32 tracking-tight-2 text-primary">{title}</p>
        </div>
        <div className="md:mx-10 md:w-fit flex md:grid md:grid-cols-3 gap-4 md:gap-x-5 overflow-hidden overflow-x-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                index > 2 ? 'block md:hidden' : ''
              } pl-4 md:pl-0 md:mb-[230px] flex-none w-[274.4px] md:w-full md:max-w-[463px] border-b border-sacramentoState-10 ${
                index === items.length - 1 ? 'pr-4' : ''
              }`}
            >
              <Image
                src={item.image || ""}
                width={274.4}
                className="md:w-[463px] md:h-fit rounded-lg"
                alt={item.SectionTitle2}
              />
              <div className="pt-[12.8px] pb-[53.6px] md:pb-[67px]">
                <p className="text-base leading-snug">
                  {item.SectionTitle2}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden">
          <div className="pb-[30px] pt-[61.6px] px-4 rounded-xl items-center justify-center space-y-4 flex flex-col">
            {button?.map((btn, index) => (
              <div key={index} className="w-full flex justify-center">
                <a
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 flex-none bg-sacramentoState rounded-xl text-secondary flex items-center pr-2.5 justify-center"
                >
                  <span className="font-sans text-base font-medium text-center leading-tight-18">
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
      </div>
    </section>
  );
}
