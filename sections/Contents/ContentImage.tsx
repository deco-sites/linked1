import { ImageWidget } from "apps/admin/widgets.ts";
// import ImageComponent from "apps/website/components/Image.tsx";
import ImageComponent from "../Final/Content/Image.tsx";

export interface Props {
  /**
   * @title Imagem Desktop
   * @description Adicione a imagem desktop aqui
   */
  imageDesktop: ImageWidget;
  /**
   * @title Imagem Mobile
   * @description Adicione a imagem mobile aqui
   */
  imageMobile: ImageWidget;
  /**
   * @title Tipo de Imagem
   * @description Selecione o tipo de imagem
   */
  type: "Grande" | "Média" | "Pequena" | "Full" | "Cantos Arredondados";
}

export default function Section({ 
    imageDesktop = "", 
    imageMobile = "", 
    type = "Média"
}: Props) {

  return (
    <div class="">
        {/* {image && (
          <Image
            className="rounded-full"
            src={image || ""}
          />
        )} */}
        {imageDesktop && imageMobile && (
          <ImageComponent
            imageDesktop={imageDesktop || ""}
            imageMobile={imageMobile || ""}
            type={type}
          />
        )}
    </div>
  );
}
