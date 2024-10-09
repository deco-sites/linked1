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
   * 
   */
  linkedText: string;
  /**
   * @title URL do Link de Texto
   * @description URL do link adicional
   */
  linkedUrl: string;
  /**
   * @title Endereço
   * @description Representa o endereço físico associado à entidade.
   */
  address: string;
  /**
   * @title Direitos Reservados
   * @description Texto de direitos reservados
   */
  rightsText: string;
  /**
   * @title Link de Texto
   * @description Insira o texto para o link adicional
   */
}

export default function Footer({

  linkedText = "",
  linkedUrl = "#",
  address = "",
  rightsText = "",

}: Props) {
  return (
    <footer className="bg-sacramentoState">
      <div className="w-full pt-[159px] text-center">
        <div className="text-center">
          <a href={linkedUrl} className="text-center text-[60px] text-caribbeanGreen">
            {linkedText}
          </a>
        </div>
        <p className="pt-[22px] pb-[66px] font-light lg:text-xs text-center text-mintCream">
          {rightsText}
        </p>
        <div className="pb-[72px] border-t-2 border-white-20 w-full">
          <p className="pt-[38px] sm:text-[11px] lg:text-xs text-center text-mintCream">
            {address}
          </p>
        </div>
      </div>
    </footer>
  );
}