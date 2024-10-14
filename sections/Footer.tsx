import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Link = {
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a URL ou o caminho de destino
   */
  url: string;
};

export interface Props {
  /**
   * @title Menu de Navegação
   * @description Insira os links do menu de navegação
   */
  linkedText: string;
  /**
   * @title URL do Link de Texto
   * @description URL do link adicional
   */
  linkedUrl: string;
  /**
   * @title Imagem do Link
   * @description Insira a imagem para o link adicional
   */
  imageWidget: ImageWidget;
  /**
   * @title Endereço
   * @description Representa o endereço físico associado à entidade.
   */
  address: string;
    /**
   * @title Quebra de Linha
   * @description Insira a quebra de linha
   */
  wordBreak?: string;
  /**
   * @title Direitos Reservados
   * @description Texto de direitos reservados
   */
  rightsText: string;
}

export default function Footer({
  linkedText = "",
  linkedUrl = "#",
  imageWidget = "",
  rightsText = "",
  address = "",
  wordBreak = "",
}: Props) {
  return (
    <footer className="bg-sacramentoState">
      <div className="w-full pt-[159px] text-center">
        <div className="text-center">
          <a href={linkedUrl} className="text-center">
            {imageWidget && (
              <Image src={imageWidget} alt={linkedText} className="block md:hidden mx-auto" />
            )}
            <span className="hidden md:block text-[60px] text-caribbeanGreen">{linkedText}</span>
          </a>
        </div>
        <p className="pt-[22px] pb-[66px] font-light font-mono text-[11px] lg:text-xs text-center text-mintCream">
          {rightsText}
        </p>
        <div className="pb-[160px] lg:pb-[72px] border-t-2 border-white-20 w-full">
          <p className="pt-[38px] text-[11px] font-mono lg:text-xs text-center text-mintCream">
            {address} <br /> {wordBreak}
          </p>
        </div>
      </div>
    </footer>
  );
}