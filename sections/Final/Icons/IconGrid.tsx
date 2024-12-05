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
      return "bg-white-20";

    case "Secondary":
      return "bg-white-20";

    case "White":
      return "bg-sacramentoState-10";

    case "Accent":
      return "bg-primary";

    default:
      return "bg-primary";
  }
}

export default function Section({
  content,
  borderColor,
}: Props) {
  return (
    <div
      className={`grid gap-[1px] ${setClassBorder(borderColor)} ${
        content.length === 1
          ? "grid-cols-1" // 1 item: 1 coluna
          : content.length === 2
          ? "grid-cols-2" // 2 itens: 2 colunas
          : content.length === 3
          ? "grid-cols-2 md:grid-cols-3" // 3 itens: 2 colunas mobile, 3 colunas desktop
          : content.length === 4 || content.length === 8 || content.length >= 8
          ? "grid-cols-2" // 4 ou 8 itens: 2 colunas
          : content.length === 5 || content.length === 7
          ? "grid-cols-2" // 5 ou 7 itens: comportamento especial
          : "grid-cols-2 md:grid-cols-3" // 6+ itens padrão: 3 colunas no desktop
      }`}
    >
      {content.slice(0, 8).map((item, index) => {
        // Detecta se é o último item para layouts especiais
        const isLastItem = index === content.length - 1;
        const isOddSet = content.length % 2 !== 0;

        return (
          <div
            key={index}
            className={`${isOddSet && isLastItem ? "col-span-2" : "" // No último item ímpar, ocupa 2 colunas
            }`}
          >
            <IconBox
              // key={index}
              icon={item.icon}
              title={item.title}
              background={borderColor}
              backgroundIcon={item.background}
              color={item.iconColor}
              // isLastItem={isLastItem}
            />
          </div>
        );
      })}
    </div>
  );
}
