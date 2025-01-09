import { ImageWidget } from "apps/admin/widgets.ts";
import Product from "../../../components/ui/Content/Product/index.tsx";

/**
 * @title {{{title}}}
 */
export interface Button {
  title: string;
  /**
   * @title Texto
   * @description Escreva o texto do botão
   */
  text: string;

  /**
   * @title Tamanho do botão
   * @description Selecione o tamanho do botão
   */
  tamanho?:
    | "Máximo (100%)"
    | "Mínimo (Tamanho do conteúdo)";

  /**
   * @title Link
   * @description Escreva o link de redirecionamento
   */
  link: string;
  /**
   * @title Icone
   * @description Selecione o ícone que deseja
   */
  icon?: string;
  /**
   * @title Botão
   * @description Selecione o tipo de botão que deseja
   */
  buttonTheme?:
    | "Primary dark"
    | "Primary white"
    | "Secondary dark"
    | "Secondary white"
    | "Link dark"
    | "Link white"
    | "Faq"
    | "Nenhuma estilização";
}

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
  button: Button;
  colorTheme: "Primary" | "Secondary" | "White" | "Accent";
}

export default function Section({
  icon,
  title,
  description,
  button,
  colorTheme,
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
