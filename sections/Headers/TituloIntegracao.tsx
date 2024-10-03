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
   * @description Escreva o nome da integração
   */
  title: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre a integração
   */
  description: string;
  /**
   * @title Logo da Integração
   * @description Adicione o logo da integração aqui
   */
  integrationLogo: ImageWidget;
  /**
   * @title Ícone do Plano
   * @description Insira o logo da Linked aqui
   */
  linkedLogo: ImageWidget;
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
    integrationLogo = "", 
    linkedLogo = "", 
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
        {integrationLogo && (
              <Image
                class=""
                src={integrationLogo || ""}
              />
        )}
        {linkedLogo && (
              <Image
                class=""
                src={linkedLogo || ""}
              />
        )}
        <p>{description}</p>
    </div>
  );
}
