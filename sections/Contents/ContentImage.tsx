import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Imagem
   * @description Adicione a imagem aqui
   */
  image: ImageWidget;
  /**
   * @title Tipo de Imagem
   * @description Selecione o tipo de imagem
   */
  type: "Grande" | "Média" | "Pequena" | "Full" | "Cantos Arredondados";
}

export default function Section({ 
    image = "", 
    type = "Média"
}: Props) {

  return (
    <div class="">
        {image && (
          <Image
            className="rounded-full"
            src={image || ""}
          />
        )}
    </div>
  );
}
