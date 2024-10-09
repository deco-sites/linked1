import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Ícone do Plano
   * @description Insira o ícone do plano aqui
   */
  iconBack: ImageWidget;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  logo?: ImageWidget;
  /**
   * @title Título
   * @description Escreva o nome do plano
   * @default Monte o plano ideal
   */
  title: string;
  /**
   * @title Título com Cor
   * @description Escreva o nome do plano com cor
   */
  titleWithColor?: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre o plano
   * @default Cada estabelecimento tem suas particularidades. Por isso a Linked Tech permite que você monte a plataforma do jeito que faz sentido para seu negócio. 
   */
  description: string;
}

export default function Section({ 
    logo = "", 
    title = "", 
    titleWithColor = "",
    iconBack = "", 
    description = "", 
}: Props) {

  return (
    <section className="bg-sacramentoState">
      <div className="pb-[13px]">
        <div className="px-4 pt-4 flex items-center justify-between">
          {iconBack && (
            <Image
              className=""
              src={iconBack || ""}
            />
          )}

          <div className="flex-grow"></div>

          {logo && (
            <Image
              className=""
              src={logo || ""}
            />
          )}
        </div>
        <p className="pl-4 pt-[49px] text-[32px] text-white text-sans font-medium">{title} <span className="text-secondary">{titleWithColor}</span></p>
        <p className="pl-4 pt-4 pr-[99px] pb-[13px] text-[13.5px] text-white-80 text-sans font-normal">{description}</p>
      </div>
    </section>
  );
}
