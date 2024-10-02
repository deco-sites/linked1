import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Página
   * @description Escreva aqui o título da página
   */
  page?: string;
  /**
   * @title Título
   * @description Escreva o conteúdo do bloco
   */
  title?: string;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  iconShare?: ImageWidget;
}

export default function Section({ 
    page = "", 
    title = "", 
    iconShare = "", 
}: Props) {

  return (
    <div>
        {iconShare && (
              <Image
                class=""
                src={iconShare || ""}
              />
        )}
        <p>{page}</p>
        <p>{title}</p>
    </div>
  );
}
