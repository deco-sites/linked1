import React from 'react';

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

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="text-secondary">{part}</span> : part
    );
  };

  return (
    <section className="bg-sacramentoState">
      <div className="pl-4 pb-6 w-full max-w-[290px]">
        <p className="text-[28px] text-white font-normal font-sans leading-tight-32 tracking-tight-2">
          {getHighlightedText(title, highlight)}
        </p>
      </div>
    </section>
  );
}