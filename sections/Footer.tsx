import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
interface Link {
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
}

export interface Props {
  /**
   * @title URL do Link de Texto
   * @description URL do link adicional
   */
  linkedUrl: string;
  /**
   * @title Logo da Marca (Mobile)
   * @description Insira o logo da marca para dispositivos mobile
   */
  brandLogoMobile: ImageWidget;
  /**
   * @title Logo da Marca (Desktop)
   * @description Insira o logo da marca para desktop
   */
  brandLogoDesktop: ImageWidget;
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
  linkedUrl = "/",
  brandLogoMobile = "",
  brandLogoDesktop = "",
  rightsText = "",
  address = "",
  wordBreak = "",
}: Props) {
  return (
    <footer className="bg-sacramentoState">
      <div className="w-full pt-[159px] text-center">
        <div className="text-center">

          <a href={linkedUrl} className="text-center">
            {brandLogoMobile && (
              <Image
                src={brandLogoMobile}
                alt="Logo da Marca"
                className="block md:hidden mx-auto"
                width={195.49}
              />
            )}
          </a>

          <a href={linkedUrl} className="text-center">
            {brandLogoDesktop && (
              <Image
                src={brandLogoDesktop}
                alt="Logo da Marca"
                className="hidden md:block mx-auto"
                width={253.24}
              />
            )}
          </a>

        </div>
        <p className="pt-[22px] pb-[66px] font-light font-mono text-[11px] lg:text-xs leading-tight-14 lg:leading-tight-15 text-center text-mintCream">
          {rightsText}
        </p>
        <div className="pb-[160px] lg:pb-[72px] border-t-2 border-white-20 w-full">
          <p className="pt-[38px] text-[11px] font-mono lg:text-xs leading-tight-14 lg:leading-tight-15 text-center text-mintCream">
            {address} <br /> {wordBreak}
          </p>
        </div>
      </div>
    </footer>
  );
}
