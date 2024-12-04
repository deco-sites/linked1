import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  // /**
  //  * @title Página
  //  * @description Escreva aqui o título da página
  //  */
  // page: string;
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
  // /**
  //  * @title Ícone de Compartilhamento
  //  * @description Insira o ícone de compartilhamento aqui
  //  */
  // iconShare?: ImageWidget;
}

export default function Section({ 
    // page = "", 
    // iconShare = "", 
    title = "", 
    titleWithColor = "",
    integrationLogo = "", 
    linkedLogo = "", 
    description = "", 
    secondDescription = ""
}: Props) {

  return (
    <section className="bg-sacramentoState flex justify-center">
      <div className="grid gap-3 md:text-center w-full max-w-[739px] px-4 pb-6 pt-8 md:py-12 md:px-10">
        {/* <div className="w-full inline-flex">
          <p className="pl-4 pt-7 font-sans font-normal text-white-80 text-[13.5px]">{page}</p>
          <div className="flex-1"></div>
          <div className="pt-[24px] items-end justify-end text-end pr-4">
            {iconShare && (
              <Image
                className=""
                src={iconShare || ""}
              />
            )}
          </div>
        </div> */}
        <div className="flex md:justify-center md:pl-2.5">
          {integrationLogo && (
            <Image
              className="rounded-full"
              src={integrationLogo || ""}
              width={54.45}
            />
          )}
          {linkedLogo && (
            <Image
              className="bg-sacramentoState rounded-full border-[1px] border-secondary relative absolute -left-2.5"
              src={linkedLogo || ""}
              width={54.6}
            />
          )}
        </div>
        <p className="text-[32px] text-white font-normal font-sans leading-tight-35 tracking-tight-2">
          {title} <span className="text-secondary">{titleWithColor}</span>
        </p>
        <div className="">
          <p className="text-white-80 font-sans text-base font-normal leading-tight-18">
            {description}
          </p>
          <p className="pt-3.5 text-white-80 font-sans text-base font-normal leading-tight-18">
            {secondDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
