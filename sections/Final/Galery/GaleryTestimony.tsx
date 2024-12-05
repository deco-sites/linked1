import { ImageWidget } from "apps/admin/widgets.ts";
import GaleryTestimony from "../../../components/ui/Galery/GaleryTestimony/index.tsx";

/**
 * @title {{{title}}}
 */
export interface Item {
  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  title?: string;
  /**
   * @title Imagem
   * @description Escolha a imagem do item
   */
  image: ImageWidget;
  /**
   * @title Texto Testemunha
   * @description Escreva aqui o texto da testemunha
   */
  textTestimony: string;
  /**
   * @title Nome
   * @description Escreva aqui o nome
   */
  nameDescription: string;
}

export interface Props {
  /**
   * @title Items
   * @description Configure cada item do Galery
   */
  items: Item[];
}

export default function TestimonySection({
  items,
}: Props) {
  return <GaleryTestimony items={items} />;
}
