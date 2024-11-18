import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  // /**
  //  * @title Página
  //  * @description Escreva aqui o título da página
  //  */
  // page?: string;
  //  /**
  //  * @title Ícone de Compartilhamento
  //  * @description Insira o ícone de compartilhamento aqui
  //  */
  //  iconShare?: ImageWidget;
      /**
   * @title Ícone
   * @description Insira o ícone
   */
  icon?: ImageWidget;
  /**
   * @title Título
   * @description Escreva o conteúdo do bloco
   */
  title?: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
  /**
   * @title Descrição
   * @description Escreva a descrição do bloco
   */
  description?: string;
}

export default function Section({ 
    // page = "", 
    // iconShare = "",
    icon = "",
    title = "", 
    highlight = "",
    description = "",
}: Props) {

  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="text-secondary">{part}</span> : part
    );
  };

  return (
    <section className="bg-sacramentoState">
      <div>
        {/* <div>
          <div className="w-full inline-flex">
            <p className="pl-4 pt-7 font-sans font-normal text-white-80 text-[13.5px]">{page}</p>
            <div className="flex-1"></div>
            <div className="pt-[24px] items-end justify-end text-end pr-4">
              {iconShare && (
                <Image
                  className=""
                  src={iconShare || ""}
                />
              )}
            </div>
          </div>
        </div> */}
        <div className="pl-4 lg:pt-[152.5px] pb-3 lg:pb-0 lg:flex lg:justify-center">
          {icon && (
            <Image
              className="w-[30px] h-[29px]"
              src={icon || ""}
              width={30}
            />
          )}
        </div>
        <div className="pl-4 pb-10 lg:pb-[103px] lg:flex lg:justify-center">
          <h1 className="text-[32px] font-sans font-normal leading-tight-35 lg:leading-tight-70 tracking-tight-2 text-white">
            {getHighlightedText(title, highlight)}
          </h1>
          <p className="lg:hidden pt-[10px] pr-[129px] font-sans text-base font-normal leading-tight-18 text-white-80">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
