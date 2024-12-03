import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Título
   * @description Escreva o título do erro
   */
  title: string;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  icon: ImageWidget;
}

export default function Section({
  title = "",
  icon = "",
}: Props) {
  return (
    <section className="bg-sacramentoState-10">
      <div className="pl-4 md:pl-0 pt-[90px] flex flex-col md:justify-center md:items-center">
        {icon && (
          <Image
            className=""
            src={icon || ""}
            width={64}
          />
        )}
        <div className="pt-4 pb-[25px] w-full max-w-[311px] md:max-w-[632px] md:text-center">
          <p className="text-[32px] md:text-[64px] font-sans font-normal md:font-medium leading-tight-35 md:leading-tight-70 tracking-tight-2 md:tracking-tight-1.28 text-sacramentoState">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
}
