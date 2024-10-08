import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Título
   * @description Escreva o título do erro
   */
  title: string;
  /**
   * @title Quebra de linha
   * @description Escreva a quebra de linha
   */
  wordBreak?: string;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  icon: ImageWidget;
}

export default function Section({ 
    title = "", 
    wordBreak = "",
    icon = "", 
}: Props) {

  return (
    <section className="pt-[90px] bg-sacramentoState-10">
      <div className="pl-4">
          {icon && (
                <Image
                  class=""
                  src={icon || ""}
                />
          )}
          <p className="pt-4 pb-[25px] pr-[49px] text-[32px] text-sans font-medium text-sacramentoState">{title} <br /> {wordBreak}</p>
      </div>
    </section>
  );
}
