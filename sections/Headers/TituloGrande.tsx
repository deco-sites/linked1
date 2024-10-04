import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Página
   * @description Escreva aqui o título da página
   */
  page?: string;
   /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
   iconShare?: ImageWidget;
      /**
   * @title Ícone
   * @description Insira o ícone
   */
  icon?: ImageWidget;
  /**
   * @title Título
   * @description Escreva o conteúdo do bloco
   */
  title?: string;
    /**
   * @title Título com Cor
   * @description Escreva o conteúdo do bloco com cor
   */
    titleWithColor?: string;
  /**
   * @title Descrição
   * @description Escreva a descrição do bloco
   */
  description?: string;
}

export default function Section({ 
    page = "", 
    iconShare = "",
    icon = "",
    title = "", 
    titleWithColor = "",
    description = "",
}: Props) {

  return (
    <section class="pt-[103px] bg-sacramentoState">
      <div>
          <div class="inline-flex">
            <p class="pl-4 pt-7 font-sans font-medium text-white-80 text-[13.5px]">{page}</p>
            <div class="pl-[276px] pt-[24px] pr-4">
              {iconShare && (
                    <Image
                      class=""
                      src={iconShare || ""}
                    />
              )}
            </div>
          </div>
          <div class="pl-4 pt-[34px] pb-10">
            {icon && (
                  <Image
                    class="w-[26.5px] h-[30px]"
                    src={icon || ""}
                  />
            )}
            <h1 class="pt-[10.5px] text-[32px] font-sans font-medium text-white">{title} <span class="text-secondary">{titleWithColor}</span></h1>
            <p class="pt-[10px] text-base font-normal text-white-80">{description}</p>
          </div>
      </div>
    </section>
  );
}
