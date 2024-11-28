import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

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
   * @title Logo
   * @description Insira a logo do bloco
   */
  logo: ImageWidget;
  /**
   * @title Botão
   * @description Insira o texto do botão
   */
  button?: string;
  /**
   * @title Descrição do bloco
   * @description Escreva a descrição do bloco
   */
  description: string;
}

interface Props {
  /**
   * @title Conteúdo
   */
  items?: Item[];
  /**
   * @title Botão
   * @description Insira o texto do botão
   */
  buttonMore?: string;
  /**
   * @title Ícone
   * @description Insira o ícone do botão
   */
  iconButton?: ImageWidget;
}

export default function Section({
  items = [],
  buttonMore = "",
  iconButton,
}: Props) {
  return (
    <section className="bg-white md:bg-sacramentoState-10">
      <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
        <div className="md:bg-white md:w-full md:max-w-[500px]">
          <div className="flex flex-col justify-center items-center">
            <div className="px-4 md:px-10 flex flex-wrap justify-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start border-b border-sacramentoState-10 ${
                    index === items.length - 1 ? "mb-[65.6px]" : ""
                  }`}
                >
                  {item.logo && (
                    <div className="pt-10">
                      <Image
                        src={item.logo}
                        width={343}
                        height={232}
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}

                  <div className="flex">
                    {item.button && (
                      <div className="px-2 py-2 my-3 text-center rounded-md bg-mintCream">
                        <p className="text-sm font-sans font-normal text-sacramentoState">
                          {item.button}
                        </p>
                      </div>
                    )}
                  </div>

                  {item.description && (
                    <p className="pt-[12.8px] pb-10 font-sans text-base font-normal leading-tight-18 text-sacramentoState">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {buttonMore && iconButton && (
              <div className="py-[14px] px-[22px] mb-[139px] w-fit flex items-center gap-x-[10px] border border-sacramentoState bg-white-80 rounded-xl cursor-pointer">
                <div className="">
                  <p className="text-lg font-sans font-semibold text-sacramentoState">
                    {buttonMore}
                  </p>
                </div>
                <div className="">
                  <Image
                    src={iconButton}
                    width={24}
                    height={24}
                    alt="Icon Button"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
