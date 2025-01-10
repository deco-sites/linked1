import Script, { type Props } from "./script.tsx";

export interface Open {
  /**
   * @title Título
   * @description Escreva aqui o título da abertura
   */
  title?: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo da abertura
   */
  subtitleDescription?: string;
}

/**
 * @title {{{title}}}
 */
export interface Props {
  /**
   * @title Título do Bloco
   * @description Escreva aqui o título do bloco
   */
  title?: string;
  /**
   * @title Títulos de Abertura
   * @description Lista de títulos de abertura com suas propriedades
   */
  open?: Open[];
}

export default function Section({
  title = "",
  open = [],
}: Props) {
  const getHighlightedText = (text: string, highlight?: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? (
          <span key={index} className="text-accent">
            {part}
          </span>
        )
        : part
    );
  };

  return (
    <>
      <div className="bg-sacramentoState h-[80vh] flex">
        <div className="ml-4 md:ml-10 w-full flex flex-col items-start justify-center">
          {open.map((item, index) => (
            <div
              key={index}
              data-slide={String(index)}
              className={`pt-[10px] md:pt-[21px] w-full
                ${
                index === 0
                  ? "block slide-in-left"
                  : "slide-in-left hidden"
              }
                transition-all duration-800 ease-out`}
            >
              <div className="grid gap-y-[14px]">
                {item.title && (
                  <div className="max-w-[320px] md:max-w-[548px]">
                    <p className="font-sans text-white font-medium text-[32px] lg:text-[64px] leading-tight-35 lg:leading-tight-70 tracking-tight-2 fade-in-animation">
                      {getHighlightedText(item.title, item.highlight)}
                    </p>
                  </div>
                )}
                {item.subtitleDescription && (
                  <div className="pr-10 md:pr-0 w-full !max-w-none">
                    <p className="text-base md:text-lg font-sans font-normal leading-tight-18 md:leading-tight-25 text-white-80 fade-in-animation">
                      {item.subtitleDescription}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Script />
    </>
  );
}