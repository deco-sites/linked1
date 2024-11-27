import { ImageWidget } from "apps/admin/widgets.ts";
import ImageLarge from '../../../components/ui/Content/ImageLarge/index.tsx';
import ImageMedium from "../../../components/ui/Content/ImageMedium/index.tsx";
import ImageSmall from "../../../components/ui/Content/ImageSmall/index.tsx";
import ImageFull from "../../../components/ui/Content/ImageFull/index.tsx";
import ImageCircle from "../../../components/ui/Content/ImageCircle/index.tsx";

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
        {image && type === "Grande" && (
          <ImageLarge image={image || ""} />
        )}
        {image && type === "Média" && (
          <ImageMedium image={image || ""} />
        )}
        {image && type === "Pequena" && (
          <ImageSmall image={image || ""} />
        )}
        {image && type === "Full" && (
          <ImageFull image={image || ""} />
        )}
        {image && type === "Cantos Arredondados" && (
          <ImageCircle image={image || ""} />
        )}
    </div>
  );
}
