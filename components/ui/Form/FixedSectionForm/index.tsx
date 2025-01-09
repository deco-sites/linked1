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
   * @description Insisra o Ícone do Botão
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
              data-button="fixed"
              className="w-[56px] h-[56px] flex justify-center items-center rounded-full bg-sacramentoState cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.92 11.6199C17.8724 11.4972 17.801 11.385 17.71 11.2899L12.71 6.28994C12.6168 6.1967 12.5061 6.12274 12.3842 6.07228C12.2624 6.02182 12.1319 5.99585 12 5.99585C11.7337 5.99585 11.4783 6.10164 11.29 6.28994C11.1968 6.38318 11.1228 6.49387 11.0723 6.61569C11.0219 6.73751 10.9959 6.86808 10.9959 6.99994C10.9959 7.26624 11.1017 7.52164 11.29 7.70994L14.59 10.9999H7C6.73478 10.9999 6.48043 11.1053 6.29289 11.2928C6.10536 11.4804 6 11.7347 6 11.9999C6 12.2652 6.10536 12.5195 6.29289 12.707C6.48043 12.8946 6.73478 12.9999 7 12.9999H14.59L11.29 16.2899C11.1963 16.3829 11.1219 16.4935 11.0711 16.6154C11.0203 16.7372 10.9942 16.8679 10.9942 16.9999C10.9942 17.132 11.0203 17.2627 11.0711 17.3845C11.1219 17.5064 11.1963 17.617 11.29 17.7099C11.383 17.8037 11.4936 17.8781 11.6154 17.9288C11.7373 17.9796 11.868 18.0057 12 18.0057C12.132 18.0057 12.2627 17.9796 12.3846 17.9288C12.5064 17.8781 12.617 17.8037 12.71 17.7099L17.71 12.7099C17.801 12.6148 17.8724 12.5027 17.92 12.3799C18.02 12.1365 18.02 11.8634 17.92 11.6199Z"
                  fill="#3BEDB2"
                />
              </svg>
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
