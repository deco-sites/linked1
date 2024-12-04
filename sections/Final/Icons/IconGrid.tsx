import { ImageWidget } from "apps/admin/widgets.ts";
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
     * @title Ícone
     * @description Insira o ícone para a seção
     */
    ImageWidget: ImageWidget;
    background: "Primary" | "Secondary" | "White" | "Light"
}

export interface Props {
    /**
     * @title Contéudo
     * @description Configure cada item do conteúdo (Max 8 itens)
     */
    content: ContentSection[];
    borderColor: "Primary" | "Secondary" | "White" | "Light"
}

// Implemente a seção
function setClassBorder(value) {
  switch (value) {
    case "Primary":
        return 'bg-white-20'
        break;

    case "Secondary":
        return 'bg-white-20'
        break;

    case "White":
        return 'bg-sacramentoState-10'
        break;

    case "Light":
        return 'bg-primary'
        break;
  
    default:
        return 'bg-primary'
        break;

  }
}

export default function Section({
    content,
    borderColor
  }: Props) {
    return (
  
    <div className={`grid gap-[1px] ${setClassBorder(borderColor)} ${
        content.length === 1
        ? 'grid-cols-1' // 1 item: 1 coluna
        : content.length === 2
        ? 'grid-cols-2' // 2 itens: 2 colunas
        : content.length === 3
        ? 'grid-cols-2 md:grid-cols-3' // 3 itens: 2 colunas mobile, 3 colunas desktop
        : content.length === 4 || content.length === 8 || content.length >= 8
        ? 'grid-cols-2' // 4 ou 8 itens: 2 colunas
        : content.length === 5 || content.length === 7
        ? 'grid-cols-2' // 5 ou 7 itens: comportamento especial
        : 'grid-cols-2 md:grid-cols-3' // 6+ itens padrão: 3 colunas no desktop
    }`}>
    {content.slice(0, 8).map((item, index) => {
        // Detecta se é o último item para layouts especiais
        const isLastItem = index === content.length - 1;
        const isOddSet = content.length % 2 !== 0;

        return (
            <div
                key={index}
                className={`${
                isOddSet && isLastItem ? 'col-span-2' : '' // No último item ímpar, ocupa 2 colunas
                }`}
            >
                <IconBox 
                    // key={index}
                    icon={item.ImageWidget}
                    title={item.title}
                    background={borderColor}
                    backgroundIcon={item.background}
                    // isLastItem={isLastItem}
                    />
            </div>
        );
    })}
    </div>
  );
}