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
  titleSection?: string;
  /**
   * @title Imagem
   * @description Escolha a imagem do item
   */
  image: ImageWidget;
  /**
   * @title Texto Testemunha
   * @description Escreva aqui o texto da testemunha
   */
  textTestimony: string;
  /**
   * @title Nome
   * @description Escreva aqui o nome
   */
  nameDescription: string;
}

export interface Props {
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

export default function TestimonySection({ 
  items,
  button = []
}: Props) {
  return (
    <section className="pb-[32px] w-full bg-mintCream">
        <h3 className="pb-[32px] pt-10 pl-4 pr-[90px] text-[22px] font-medium text-sacramentoState leading-tight-25 tracking-tight-2">
            {items[0]?.titleSection}
        </h3>
        <div className="overflow-x-scroll scrollbar-hide swiper-container">
        <div className="swiper-wrapper inline-flex lg:flex-nowrap">
            {items.map((item, index) => (
                <div
                    className={`swiper-slide w-[315px] min-w-[315px] pl-4 ${
                        index === 0 ? 'lg:pl-10' : ''
                    } ${index === items.length - 1 ? 'mr-4' : ''} ${
                        index !== 0 ? 'lg:pl-0' : ''
                    }`}
                    key={index}
                >
                    <div className="flex flex-col items-start border-b border-sacramentoState-10 mb-4 pb-4">
                        <div className="flex flex-col overflow-x-auto space-y-4">
                            {item.image && (
                                <Image
                                    src={item.image}
                                    alt={item.image}
                                    width={309}
                                    height={224}
                                />
                            )}
                            <p className="py-4 text-lg font-medium text-sacramentoState leading-tight-20">
                                {item.textTestimony}
                            </p>
                            <p className="pr-[90px] text-base font-sans font-normal text-sacramentoState leading-tight-18">
                                {item.nameDescription}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className="mt-[75px] px-4 flex flex-col rounded-xl items-center justify-center space-y-4">
            {button && button.length > 0 && (
                <div className="w-full flex justify-center">
                    <a
                        href={button[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full px-4 py-3 flex items-center bg-sacramentoState border-[1px] rounded-xl text-center text-secondary`}
                    >
                        <span className="pl-10 font-sans text-base font-medium leading-tight-18 lg:leading-tight-21 lg:leading-tight-55 lg:tracking-tight-2">
                            {button[0].name}
                        </span>
                        {button[0].iconButton && ( 
                            <img src={button[0].iconButton} 
                            alt="Ícone do botão" 
                            className="w-6 h-6 ml-2.5" />
                        )}
                    </a>
                </div>
            )}
        </div>
    </section>
  );
}