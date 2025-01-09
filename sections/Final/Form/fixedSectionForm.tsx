import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import FixedSectionForm from "../../../components/ui/Form/FixedSectionForm/index.tsx";

export type Link = {
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a URL ou o caminho de destino
   */
  url: string;
};

export interface Props {
  /**
   * @title Descrição
   * @description Insira a descrição
   */
  description?: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
  /**
   * @title Ícone do Botão
   * @description Insisra o Ícone do Botão
   */
  ImageWidget: ImageWidget;
}

export default function Section({
  description = "",
  highlight = "",
  ImageWidget,
}: Props) {
  return (
    <div>
      <FixedSectionForm
        description={description}
        highlight={highlight}
        ImageWidget={ImageWidget}
      />
    </div>
  );
}
