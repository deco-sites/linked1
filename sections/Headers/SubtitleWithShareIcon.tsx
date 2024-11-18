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
    <section className="lg:hidden pb-7 bg-sacramentoState">
      <div>
        <div className="w-full inline-flex">
          <p className="pl-4 pt-7 font-sans font-normal text-white-80 text-[13.5px] leading-tight-15.86">
            {page}
          </p>
          <div className="flex-1"></div>
          <div className="pt-[24px] items-end justify-end text-end pr-4">
            {iconShare && (
              <Image
                className=""
                src={iconShare || ""}
                width={24}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}