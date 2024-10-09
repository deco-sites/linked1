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
   * @title Título com Cor
   * @description Escreva o nome do tipo de estabelecimento com cor
   */
  titleWithColor?: string;
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
    titleWithColor = "",
    iconSegment = "", 
    description = "", 
}: Props) {

  return (
    <section class="pb-10 bg-sacramentoState">
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
          <div className="pl-4 pt-[84px] pb-6">
            {iconSegment && (
                  <Image
                    class=""
                    src={iconSegment || ""}
                  />
            )}
            <p className="pt-2.5 text-[32px] font-medium text-sans text-white">{title} <br /> <span className="text-secondary">{titleWithColor}</span></p>
            <p className="pt-2.5 pr-[89px] text-lg font-normal text-sans text-white-80">{description}</p>
          </div>
      </div>
    </section>
  );
}
