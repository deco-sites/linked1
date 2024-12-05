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
}

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
  button = [],
}: Props) {
  return (
    <section className="bg-mintCream">
      <div className="px-4 md:px-10 pb-[32px] md:py-[120px]">
        <div className="py-[32px] text-start md:text-center">
          <h3 className="text-base font-sans font-normal text-sacramentoState">
            {items[0]?.titleSection}
          </h3>
        </div>
        <div className="overflow-x-scroll scrollbar-hide swiper-container">
          <div className="swiper-wrapper inline-flex md:grid md:grid-cols-3 gap-x-[28px]">
            {items.map((item, index) => (
              <div
                className={`swiper-slide w-full max-w-[309px] md:max-w-none flex-none md:flex md:flex-auto ${
                  index >= 3 ? "block md:hidden" : ""
                }`}
                key={index}
              >
                <div className="flex flex-col items-start border-b border-sacramentoState-10">
                  <div className="flex flex-col overflow-x-auto space-y-4">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.image}
                        width={309}
                        height={224}
                        className="!w-full !h-full object-cover"
                      />
                    )}
                    <div className="py-4 w-full max-w-[309px]">
                      <p className="text-lg font-medium text-sacramentoState leading-tight-20">
                        {item.textTestimony}
                      </p>
                    </div>
                    <div className="pr-[90px] pb-10">
                      <p className="text-base font-sans font-normal text-sacramentoState leading-tight-18">
                        {item.nameDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <div className=" mt-[75px] px-4 flex flex-col rounded-xl items-center justify-center space-y-4">
            {button && button.length > 0 && (
              <div className="w-full flex justify-center">
                <a
                  href={button[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full px-4 py-3 flex items-center bg-sacramentoState border-[1px] rounded-xl text-center text-secondary`}
                >
                  <span
                    className={`font-sans text-base font-medium leading-tight-18 md:leading-none ${
                      button[0].iconButton ? "pl-10" : "text-center w-full"
                    }`}
                  >
                    {button[0].name}
                  </span>
                  {button[0].iconButton && (
                    <img
                      src={button[0].iconButton}
                      alt="Ícone do botão"
                      className="w-6 h-6 ml-2.5"
                    />
                  )}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
