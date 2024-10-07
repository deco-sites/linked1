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
   * @description Escreva o título
   */
  title: string;
    /**
   * @title Título com Cor
   * @description Escreva o título com cor
   */
  titleWithColor?: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre a integração
   */
  description: string;
    /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre a integração
   */
  secondDescription: string;
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
    titleWithColor = "",
    integrationLogo = "", 
    linkedLogo = "", 
    description = "", 
    secondDescription = ""
}: Props) {

  return (
    <section class="pt-[110px] pb-10 bg-sacramentoState">
      <div>
        <div className="w-full inline-flex">
          <p className="pl-4 pt-7 font-sans font-medium text-white-80 text-[13.5px]">{page}</p>
          <div className="flex-1"></div>
          <div className="pt-[24px] items-end justify-end text-end pr-4">
            {iconShare && (
                  <Image
                    class=""
                    src={iconShare || ""}
                  />
            )}
          </div>
        </div>
        <div className="pl-4 pt-9 pb-2.5 inline-flex">
          {integrationLogo && (
            <Image
              className="rounded-full"
              src={integrationLogo || ""}
            />
          )}
          {linkedLogo && (
            <Image
              className="bg-sacramentoState rounded-full border-[1px] border-secondary relative absolute -left-2.5"
              src={linkedLogo || ""}
            />
          )}
        </div>
        <p className="pl-4 text-[32px] text-white font-medium font-sans">{title} <span className="text-secondary">{titleWithColor}</span></p>
        <div className="pr-[49px] pt-2.5">
          <p className="pl-4 text-white-80 text-base font-normal">{description}</p>
          <p className="pl-4 pt-3.5 text-white-80 text-base font-normal">{secondDescription}</p>
        </div>
      </div>
    </section>
  );
}
