import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Página
   * @description Escreva aqui o título da página
   * @default Planos
   */
  page: string;
  /**
   * @title Título
   * @description Escreva o nome do plano
   */
  title: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre o plano
   */
  description: string;
  /**
   * @title Ícone do Plano
   * @description Insira o ícone do plano aqui
   */
  iconPlan?: ImageWidget;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  iconShare?: ImageWidget;
}

export default function Section({
  iconPlan = "",
  title = "",
  highlight = "",
  description = "",
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
    <div className="bg-sacramentoState flex justify-center">
      <div className="px-4 pb-6 pt-8 w-full max-w-[735px] md:text-center flex flex-col gap-3 md:items-center">
        {iconPlan && (
          <Image
            width={45}
            height={45}
            class="w-[30px] h-[30px] md:w-[45px] md:h-[45px]"
            src={iconPlan || ""}
          />
        )}
        <p className="text-[28px] md:text-5xl text-white font-normal md:font-medium font-sans leading-tight-32 md:leading-tight-115 tracking-tight-2 md:tracking-tight-0.96">
          {getHighlightedText(title, highlight)}
        </p>
        <p className="text-base md:text-lg font-sans font-normal leading-tight-18 md:leading-tight-25 text-white-80">
          {description}
        </p>
      </div>
    </div>
  );
}
