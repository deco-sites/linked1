import { ImageWidget } from "apps/admin/widgets.ts";
import GaleryPartners from "../../../components/ui/Galery/GaleryPartners/index.tsx";

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
   * @title Título
   * @description Escreva aqui o título do item
   */
  description: string;
  /**
   * @title Imagem
   * @description Escolha a imagem do item
   */
  image: ImageWidget;
}

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
  return <GaleryPartners items={items} />;
}
