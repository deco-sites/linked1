import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */

export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título da Coluna
   */
  title: string;
  /**
   * @title Ícone
   * @description Insira o ícone
   */
  icon?: ImageWidget;
  background: string;
}

function setClass(value: string) {
  switch (value) {
    case "Primary":
      return "bg-primary";

    case "Secondary":
      return "bg-secondary";

    case "White":
      return "bg-white";

    case "Light":
      return "bg-light";

    default:
      return "bg-primary";
  }
}

// Implemente a seção
function setClassSubTitle(value: string) {
  switch (value) {
    case "Primary":
      return "text-white";

    case "Secondary":
      return "text-primary";

    case "White":
      return "text-primary";

    case "Light":
      return "text-primary";

    default:
      return "text-primary";
  }
}

export default function Section({
  title = "",
  icon = "",
  background = "",
}: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 py-3 px-4 h-full min-h-[170px] ${
        setClass(background)
      }`}
    >
      <div className="flex justify-center items-center h-[64px] w-[64px] md:h-[76px] md:w-[76px] rounded-full bg-white">
        {icon && (
          <Image
            src={icon}
            alt="Ícone do Bloco"
            width={48}
            className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
          />
        )}
      </div>
      <p
        className={`text-[13.5px] md:text-base ${
          setClassSubTitle(background)
        } leading-tight font-normal text-center`}
      >
        {title}
      </p>
    </div>
  );
}
