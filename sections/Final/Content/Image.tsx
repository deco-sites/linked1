import { ImageWidget } from "apps/admin/widgets.ts";
import ImageLarge from "../../../components/ui/Content/ImageLarge/index.tsx";
import ImageMedium from "../../../components/ui/Content/ImageMedium/index.tsx";
import ImageSmall from "../../../components/ui/Content/ImageSmall/index.tsx";
import ImageFull from "../../../components/ui/Content/ImageFull/index.tsx";
import ImageCircle from "../../../components/ui/Content/ImageCircle/index.tsx";

export interface Props {
  /**
   * @title Imagem
   * @description Adicione a imagem Desktop aqui
   */
  imageDesktop: ImageWidget;
  /**
   * @title Imagem
   * @description Adicione a imagem Mobile aqui
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
  type = "Média",
}: Props) {
  return (
    <div class="">
      {imageDesktop && imageMobile && type === "Grande" && (
        <ImageLarge
          imageDesktop={imageDesktop || ""}
          imageMobile={imageMobile || ""}
        />
      )}
      {imageDesktop && imageMobile && type === "Média" && (
        <ImageMedium
          imageDesktop={imageDesktop || ""}
          imageMobile={imageMobile || ""}
        />
      )}
      {imageDesktop && type === "Pequena" && (
        <ImageSmall imageDesktop={imageDesktop || ""} />
      )}
      {imageDesktop && imageMobile && type === "Full" && (
        <ImageFull
          imageDesktop={imageDesktop || ""}
          imageMobile={imageMobile || ""}
        />
      )}
      {imageDesktop && imageMobile && type === "Cantos Arredondados" && (
        <ImageCircle
          imageDesktop={imageDesktop || ""}
          imageMobile={imageMobile || ""}
        />
      )}
    </div>
  );
}
