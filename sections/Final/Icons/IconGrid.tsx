import { AvailableIcons } from "../../../components/ui/Icon.tsx";
import IconBox from "../../../components/ui/Content/IconBox/index.tsx";

/**
 * @title {{{title}}}
 */
export interface ContentSection {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @format icon-select
   * @options site/loaders/availableIcons.ts
   */
  icon: AvailableIcons;
  iconColor: "Primary" | "Secondary" | "White" | "Accent";
  background: "Primary" | "Secondary" | "White" | "Accent";
}

export interface Props {
  /**
   * @title Contéudo
   * @description Configure cada item do conteúdo (Max 8 itens)
   */
  content: ContentSection[];
  borderColor: "Primary" | "Secondary" | "White" | "Accent";
}

// Implemente a seção
function setClassBorder(value: string) {
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

export default function Section({
  content,
  borderColor,
}: Props) {
  return (
    <div className="flex justify-center px-4 md:px-0">
      <div
        className={`grid gap-[1px] w-full max-w-[899px] ${
          setClassBorder(borderColor)
        } ${
          content.length === 1
            ? "grid-cols-1" // 1 item: 1 coluna
            : content.length === 2
            ? "grid-cols-2" // 2 itens: 2 colunas
            : content.length === 3
            ? "grid-cols-2 md:grid-cols-3" // 3 itens: 2 colunas mobile, 3 colunas desktop
            : content.length >= 4
            ? "grid-cols-2" // 4 ou mais itens: 2 colunas
            : "grid-cols-2 md:grid-cols-3"
        }`}
      >
        {content.slice(0, 8).map((item, index) => {
          const isFirstTwo = index < 2;
          const isLastTwo = index >= content.length - 2;

          return (
            <div
              key={index}
              className={`${isFirstTwo ? "mt-10" : ""} ${
                !isLastTwo ? "border-b" : ""
              } ${(index + 1) % 2 !== 0 ? "border-r" : ""} ${
                isLastTwo ? "mb-10" : ""
              } ${setClassBorder(borderColor)}`}
            >
              <IconBox
                icon={item.icon}
                title={item.title}
                background={borderColor}
                backgroundIcon={item.background}
                color={item.iconColor}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}