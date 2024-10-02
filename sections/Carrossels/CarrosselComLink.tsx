import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Item = {
  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  title: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
  /**
   * @title Imagem
   * @description Escolha a imagem do item
   */
    image: ImageWidget;
};

export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título do bloco
   */
  title: string,
  /**
   * @title Items
   * @description Configure cada item do carrossel
   */
  items: Item[];
}

export default function Section({ 
    title = 'Acompanhe as nossas receitas de sucesso',
    items = [
      {
        title: '',
        url: '',
        image: ''
      }
    ] 
}: Props) {

  return (
    <div>
        <p>{title}</p>
        {items.map(item => (
          <div>
            <Image
              class=""
              src={item.image || ""}
            />
            <p>{item.title}</p>
            <p>{item.url}</p>
          </div>
        ))}
    </div>
  );
}
