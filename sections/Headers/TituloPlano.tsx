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
   * @description Escreva o nome do plano
   */
  title: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre o plano
   */
  description: string;
  /**
   * @title Ícone do Plano
   * @description Insira o ícone do plano aqui
   */
  iconPlan: ImageWidget;
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
    iconPlan = "", 
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
        {iconPlan && (
              <Image
                class=""
                src={iconPlan || ""}
              />
        )}
        <p>{description}</p>
    </div>
  );
}
