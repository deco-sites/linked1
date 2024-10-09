import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Página
   * @description Escreva aqui o título da página
   */
  page: string;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  iconShare?: ImageWidget;
}

export default function Section({ 
    page = "", 
    iconShare = "", 
}: Props) {

  return (
    <section class="pb-7 bg-sacramentoState">
      <div>
        <div className="w-full inline-flex">
          <p className="pl-4 pt-7 text-sans font-medium text-white-80 text-[13.5px]">{page}</p>
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
      </div>
    </section>
  );
}