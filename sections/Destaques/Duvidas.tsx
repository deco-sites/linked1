import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    /**
     * @title Ícone de Dúvida
     * @description Insira o ícone de dúvida aqui
     */
    icon: ImageWidget;
    /**
     * @title Título
     * @description Escreva o título do bloco
     */
    title: string;
}

export default function Section({ 
    icon = "", 
    title = "", 
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
