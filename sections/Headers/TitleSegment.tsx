import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  // /**
  //  * @title Página
  //  * @description Escreva aqui o título da página
  //  */
  // page: string;
  /**
   * @title Título
   * @description Escreva o nome do tipo de estabelecimento
   */
  title: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre as vantagens para esse tipo de estabelecimento
   */
  description: string;
  /**
   * @title Ícone do Tipo de Estabelecimento
   * @description Insira o ícone do tipo de estabelecimento aqui
   */
  iconSegment: ImageWidget;
  // /**
  //  * @title Ícone de Compartilhamento
  //  * @description Insira o ícone de compartilhamento aqui
  //  */
  // iconShare?: ImageWidget;
}

export default function Section({ 
    // page = "", 
    // iconShare = "", 
    title = "", 
    highlight = "",
    iconSegment = "", 
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
    <section className="pb-10 bg-sacramentoState">
      <div>
        {/* <div className="w-full inline-flex">
          <p className="pl-4 pt-7 font-sans font-medium text-white-80 text-[13.5px]">{page}</p>
          <div className="flex-1"></div>
          <div className="pt-[24px] items-end justify-end text-end pr-4">
            {iconShare && (
              <Image
                class=""
                src={iconShare || ""}
              />
            )}
          </div>
        </div> */}
        <div className="pl-4 pt-5 pb-6">
          {iconSegment && (
            <Image
              className=""
              src={iconSegment || ""}
              width={32}
            />
          )}
          <p className="pt-2.5 pr-[69px] text-[32px] font-medium font-sans leading-tight-35 tracking-tight-2 text-white">
            {getHighlightedText(title, highlight)}
          </p>
          <p className="pt-2.5 pr-[40px] text-lg font-normal font-sans leading-tight-21 text-white-80">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
