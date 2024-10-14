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
    <section class="bg-sacramentoState">
      <div>
          {/* <div>
            <div className="w-full inline-flex">
              <p className="pl-4 pt-7 text-sans font-medium text-white-80 text-[13.5px]">{page}</p>
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
          <div class="pl-4 pb-10">
            {icon && (
                  <Image
                    class="w-[30px] h-[29px]"
                    src={icon || ""}
                  />
            )}
            <h1 class="pt-[10.5px] text-[32px] text-sans font-medium text-white">{getHighlightedText(title, highlight)}</h1>
            <p class="pt-[10px] pr-[129px] text-sans text-base font-normal text-white-80">{description}</p>
          </div>
      </div>
    </section>
  );
}
