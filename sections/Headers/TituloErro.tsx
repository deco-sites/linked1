import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Título
   * @description Escreva o título do erro
   */
  title: string;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  icon: ImageWidget;
}

export default function Section({ 
    title = "", 
    icon = "", 
}: Props) {

  return (
    <div>
        {icon && (
              <Image
                class=""
                src={icon || ""}
              />
        )}
        <p>{title}</p>
    </div>
  );
}
