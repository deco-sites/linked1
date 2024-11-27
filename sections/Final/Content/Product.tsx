import { ImageWidget } from "apps/admin/widgets.ts";
import Product from '../../../components/ui/Content/Product/index.tsx';

export interface Link {
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


export interface Props {
  /**
   * @title Ícone
   * @description Escolha o ícone da categoria
   */
  icon: ImageWidget;
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Descrição
   * @description Insira a descrição desejada
   */
  description: string;
  /**
   * @title Botão
   * @description Insira o botão desejado
   */
  button: Link;
  colorTheme: "Primary" | "Secondary" | "White" | "Light"
}

export default function Section({ 
  icon,
  title,
  description,
  button,
  colorTheme
}: Props) {
    return (
      <>
        <Product 
          icon={icon}
          title={title}
          description={description}
          button={button}
          colorTheme={colorTheme}
        />
      </>
    );
  }  