export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título de sucesso
   */
  title?: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo
   */
  subtitle?: string;
}

export default function Section({
  title = "",
  subtitle = "",
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
    <section className="bg-sacramentoState flex justify-center">
      <div className="w-full max-w-[739px] text-center grid gap-3 p-4 py-10 md:p-10 md:pt-20">
        <p className="text-white text-[28px] font-sans font-normal leading-tight-32 tracking-tight-2">
          {getHighlightedText(title, highlight)}
        </p>
        <p className="text-white-80 text-[11px] font-mono font-normal leading-tight-14">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
