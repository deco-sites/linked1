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
        ? <span key={index} className="text-secondary">{part}</span>
        : part
    );
  };

  return (
    <section className="bg-sacramentoState">
      <div className="pl-4 md:pl-10 pb-[64px] md:pt-[120px] md:pb-12">
        <div className="w-full max-w-[290px] md:max-w-[739px]">
          <p className="text-[28px] md:text-5xl font-sans font-normal md:font-medium leading-tight-32 md:leading-tight-115 tracking-tight-2 md:tracking-tight-0.96 text-white">
            {getHighlightedText(title, highlight)}
          </p>
        </div>
      </div>
    </section>
  );
}
