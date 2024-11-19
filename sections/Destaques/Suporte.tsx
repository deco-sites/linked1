import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface ContentSection {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Ícone
   * @description Insira o ícone para a seção
   */
  ImageWidget: ImageWidget;
  /**
   * @title Descrição
   * @description Escreva a descrição do bloco
   */ 
  textSectionDescription: string;
}

export interface Props {
    /**
     * @title Ícone
     * @description Insira o ícone para a seção
     */
    ImageWidget: ImageWidget;
    /**
     * @title Subtítulo
     * @description Escreva aqui o subtítulo da seção
     */
    subTitle: string;
    /**
     * @title Contéudo
     * @description Configure cada item do conteúdo
     */
    content: ContentSection[];
}

export default function Section({
    ImageWidget,
    subTitle,
    content,
  }: Props) {
    return (
      <section className="pl-4 pr-4 bg-sacramentoState">
        <div className="md:flex md:flex-col md:justify-center md:items-center mx-auto text-center">
          <div className="pt-[78px] block justify-between items-center">
            {ImageWidget && (
              <div className="">
                <Image
                  src={ImageWidget}
                  alt="Ícone da Seção"
                  className="mx-auto"
                  width={234}
                  height={338}
                />
              </div>
            )}
            <div className="pt-[43px] pb-[32px] md:w-[300px]">
              <h2 className="text-[28px] font-sans text-mintCream font-normal text-center leading-tight-32 tracking-tight-2">
                {subTitle}
              </h2>
            </div>
          </div>
  
          <div className="pb-[55px] md:pb-[120px] grid grid-cols-2 md:grid-cols-3 md:gap-x-8">
            {content.map((item, index) => {
              const isFirstTwo = index < 2;
              const isLast = index === content.length - 1;
              const isThirdDesktop = index === 2;

              return (
                <div
                  key={index}
                  className={`${
                    isFirstTwo ? 'border-b border-white-20 md:border-none' : 'border-t border-white-20 md:border-none'
                  } ${
                    isLast ? 'block md:hidden' : 'border-0 md:border-none pt-[23.5px]'
                  } p-4 text-center ${
                    index % 2 === 0 ? 'border-r border-white-20 md:border-none' : 'md:border-none'
                  } ${isThirdDesktop ? 'md:w-[225px]' : ''}`}
                >
                  <div className="flex flex-col items-center justify-center">
                    {item.ImageWidget && (
                      <Image
                        src={item.ImageWidget}
                        alt="Ícone do Bloco"
                        width={27}
                        className=""
                      />
                    )}
                    <p
                      className={`text-[13.5px] text-white-80 leading-tight font-[300] ${
                        index === 0 ? 'px-[26px]' : 'px-4'
                      } pt-2 pb-[25px]`}
                    >
                      {item.textSectionDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
}