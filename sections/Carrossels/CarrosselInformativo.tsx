import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Item = {
  /**
   * @title Título
   * @description Escreva aqui o título do item
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
};

export interface Props {
  /**
   * @title Items
   * @description Configure cada item do carrossel
   */
  items: Item[];
}

export default function Section({ 
    items = [
      {
        title: '',
        description: '',
        image: ''
      }
    ] 
}: Props) {

  return (
    <div>
        <hr />
        {items.map(item => (
          <div>
            <Image
              class=""
              src={item.image || ""}
            />
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
}
