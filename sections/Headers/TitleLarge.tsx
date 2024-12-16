import React from "react";

export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título
   */
  title?: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
}

export default function Section({
  title = "",
  highlight = "",
}: Props) {
  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <span key={index} className="text-accent">{part}</span>
        : part
    );
  };

  return (
    <section className="bg-sacramentoState">
      <div className="px-4 md:px-10 pb-[48px] pt-[32px] md:pt-[120px]">
        <div className="w-full max-w-[343px] md:max-w-[739px]">
          <p className="text-[32px] md:text-5xl font-sans font-normal md:font-medium leading-tight-110 md:leading-tight-115 tracking-tight-0.64 md:tracking-tight-0.96 text-white">
            {getHighlightedText(title, highlight)}
          </p>
        </div>
      </div>
    </section>
  );
}
