import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import type { JSX } from "preact";

export type Link = {
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a URL ou o caminho de destino
   */
  url: string;
};

export interface Props {
  /**
   * @title Descrição
   * @description Insira a descrição
   */
  description?: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
  /**
   * @title Ícone do Botão
   * @description Insira o Ícone do Botão
   */
  ImageWidget: ImageWidget;
}

function FixedSectionForm({
  description = "",
  highlight = "",
  ImageWidget = "",
}: Props) {
  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text;

    const regex = new RegExp(`(${highlight})`, "giu");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return (
          <span
            key={index}
            className="font-bold text-sacramentoState"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <>
      <div
        id="fixed-section"
        className="fixed bottom-0 left-0 w-full flex justify-center bg-white z-40"
      >
        <div className="flex flex-col flex-grow">
          <div className="pr-4 mb-5 flex justify-end mt-auto">
            <button
              data-next="next"
              className="w-[56px] h-[56px] flex justify-center items-center rounded-full bg-sacramentoState cursor-pointer"
            >
            </button>
          </div>
          <div className="px-4 pt-[14px] pb-5 w-full flex justify-between items-center gap-x-4 shadow-top">
            <div className="w-full max-w-[236px] text-start">
              <p className="text-base font-sans font-normal text-sacramentoState-80">
                {getHighlightedText(description, highlight)}
              </p>
            </div>
            <div className="w-fit flex items-center">
              <div className="w-[92px] cursor-pointer">
                {ImageWidget && (
                  <div className="w-full h-full px-5 py-2.5 flex justify-center items-center bg-darkMintCream rounded-[10px]">
                    <Image
                      src={ImageWidget}
                      alt="Section Image"
                      className="w-6 h-6"
                      width={24}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FixedSectionForm;