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

    const regex = new RegExp(`(${highlight})`, "giu");

    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return (
          <span key={index} className="text-secondary">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="bg-sacramentoState">
      <div className="pl-4 md:pl-10 pt-[74px] md:pt-[120px] pr-[75px] pb-6 w-full max-w-[290px] md:max-w-[739px]">
        <p className="text-[28px] md:text-5xl text-white font-normal md:font-medium font-sans leading-tight-32 md:leading-tight-115 tracking-tight-2 md:tracking-tight-0.96">
          {getHighlightedText(title, highlight)}
        </p>
      </div>
    </section>
  );
}