import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Página
   * @description Escreva aqui o título da página
   */
  page: string;
  /**
   * @title Título
   * @description Escreva o nome do tipo de estabelecimento
   */
  title: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre as vantagens para esse tipo de estabelecimento
   */
  description: string;
  /**
   * @title Ícone do Tipo de Estabelecimento
   * @description Insira o ícone do tipo de estabelecimento aqui
   */
  iconSegment: ImageWidget;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  iconShare?: ImageWidget;
}

export default function Section({ 
    page = "", 
    iconShare = "", 
    title = "", 
    iconSegment = "", 
    description = "", 
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
        {iconSegment && (
              <Image
                class=""
                src={iconSegment || ""}
              />
        )}
        <p>{description}</p>
    </div>
  );
}
