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
    <section className="bg-sacramentoState">
      <div className="px-4 md:px-10 pt-6">
        <div className="flex justify-between items-center">
          <p className="text-sm font-sans font-normal leading-tight-15.86 text-white-80">
            {page}
          </p>
          <div className="">
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
