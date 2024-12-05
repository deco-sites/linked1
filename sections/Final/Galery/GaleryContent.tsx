import { ImageWidget } from "apps/admin/widgets.ts";
import GaleryContent from "../../../components/ui/Galery/GaleryContent/index.tsx";

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
  return <GaleryContent items={items} />;
}
