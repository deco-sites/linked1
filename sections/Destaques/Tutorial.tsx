import { ImageWidget } from "apps/admin/widgets.ts";

export type Link = {
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
};
export type ContentItem ={
  image?: ImageWidget;
  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  title?: string;

  icon?: ImageWidget;

  formatterIcon?: ImageWidget;

  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  contentDescription?: string;

}
export type Item = {
  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  title?: string;

  /**
* @subdescription subDescription
* @description Escreva aqui o subDescriçao do item
*/
  informationStep?: string;

  /**
   * @subtitle subTitulo
   * @description Escreva aqui o subtítulo do item
   */
  subTitle?: string;

  /**
 * @subdescription subDescription
 * @description Escreva aqui o subDescriçao do item
 */
  subDescription?: string;

  contentItem?: ContentItem[];
  
  button?: Link[];
};

interface Props {
  /**
 * @title Items
 * @description Tutorial
 */
  items?: Item[];
}

export default function Section({
   
   }: Props) {
  return
}