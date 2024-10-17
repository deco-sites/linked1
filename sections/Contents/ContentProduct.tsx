import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
   /**
   * @title Ícone
   * @description Insira o ícone
   */
  icon?: ImageWidget;
  /**
   * @title Título
   * @description Escreva o conteúdo do bloco
   */
  title?: string;
  /**
   * @title Descrição
   * @description Escreva a descrição do bloco
   */
  description?: string;
  /**
   * @title Texto do Botão
   * @description Escreva o texto do botão
   */
  btnTitle?: string;
  /**
   * @title Link do Botão
   * @description Insira o link de destino do botão
   */
  btnLink?: string;
}

export default function Section({ 
    icon = "",
    title = "", 
    description = "",
    btnTitle = "", 
    btnLink = "",
}: Props) {

  return (
    <div>
        <p>{icon}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{btnTitle}</p>
        <p>{btnLink}</p>
    </div>
  );
}
