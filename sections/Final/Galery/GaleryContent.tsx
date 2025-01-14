import { ImageWidget } from "apps/admin/widgets.ts";
import GaleryContent from "../../../components/ui/Galery/GaleryContent/index.tsx";

/**
 * @title {{{title}}}
 */
export interface Order {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Descrição do Pedido
   * @description Escreva a descrição do pedido
   */
  descriptionOrder: string;
  /**
   * @title Ícone
   * @description Insira o ícone do bloco
   */
  image: ImageWidget;
  /**
   * @title Subtítulo do Bloco
   * @description Escreva o subtítulo do bloco
   */
  subtitleOrder: string;
}

/**
 * @title {{{title}}}
 */
export interface SectionImage {
  /**
   * @title {{{title}}}
   */
  title: string;
  /**
   * @title Ícone
   * @description Insira o ícone do bloco
   */
  image: ImageWidget;
}

/**
 * @title {{{title}}}
 */
export interface Item {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Descrição
   * @description Escreva aqui a descrição do item
   */
  description: string;
  /**
   * @title Imagem
   * @description Escolha a imagem do item
   */
  image: ImageWidget;
  /**
   * @title Pedidos
   * @description Insira pedidos que ficará por cima da imagem principal
   */
  order?: Order[];
  /**
   * @title Imagem do bloco
   * @description Insira a imagem que ficará por cima da imagem principal
   */
  SectionImage?: SectionImage;
}

/**
 * @title {{{title}}}
 */
export interface Props {
  /**
   * @title Items
   * @description Configure cada item do Galery
   */
  items: Item[];
}

export default function Section({
  items = [],
}: Props) {
  const validatedItems = items.map((item) => {
    if (item.order && item.SectionImage) {
      console.log(
        "O item " + item.title +
          " não pode ter tanto 'order' quanto 'SectionImage' definidos simultaneamente. Por favor, escolha apenas um.",
      );
    }
    return item;
  });

  return <GaleryContent items={validatedItems} />;
}