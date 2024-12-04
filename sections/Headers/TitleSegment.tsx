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

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <span key={index} className="text-secondary">{part}</span>
        : part
    );
  };

  return (
    <section className="bg-sacramentoState flex justify-center ">
      <div className="grid gap-3 md:text-center w-full max-w-[739px] px-4 pb-6 pt-8 md:py-12 md:px-10">
        {
          /* <div className="w-full inline-flex">
          <p className="pl-4 pt-7 font-sans font-normal text-white-80 text-[13.5px]">{page}</p>
          <div className="flex-1"></div>
          <div className="pt-[24px] items-end justify-end text-end pr-4">
            {iconShare && (
              <Image
                class=""
                src={iconShare || ""}
              />
            )}
          </div>
        </div> */
        }
        <div className="flex md:justify-center">
          {iconSegment && (
            <Image
              className=""
              src={iconSegment || ""}
              width={32}
            />
          )}
        </div>
        <p className="text-[32px] font-normal font-sans leading-tight-35 tracking-tight-2 text-white">
          {getHighlightedText(title, highlight)}
        </p>

        <p className="text-lg font-normal font-sans leading-tight-21 text-white-80">
          {description}
        </p>
      </div>
    </section>
  );
}
