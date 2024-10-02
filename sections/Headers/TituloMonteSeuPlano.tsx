import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Ícone do Plano
   * @description Insira o ícone do plano aqui
   */
  iconBack: ImageWidget;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  logo?: ImageWidget;
  /**
   * @title Título
   * @description Escreva o nome do plano
   * @default Monte o plano ideal
   */
  title: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre o plano
   * @default Cada estabelecimento tem suas particularidades. Por isso a Linked Tech permite que você monte a plataforma do jeito que faz sentido para seu negócio. 
   */
  description: string;
}

export default function Section({ 
    logo = "", 
    title = "", 
    iconBack = "", 
    description = "", 
}: Props) {

  return (
    <div>
        {logo && (
              <Image
                class=""
                src={logo || ""}
              />
        )}
        <p>{title}</p>
        {iconBack && (
              <Image
                class=""
                src={iconBack || ""}
              />
        )}
        <p>{description}</p>
    </div>
  );
}
