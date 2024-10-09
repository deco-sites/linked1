import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Logo
   * @description Insira o logo
   */
  logo?: ImageWidget;
  /**
   * @title Direitos Reservados
   * @description Texto de direitos reservados
   */
  rightsText: string;
  /**
   * @title Endereço
   * @description Insira o endereço do rodapé
   */
  address: string;
}

export default function Footer({
  logo = "", 
  address = "",
  rightsText = "",
}: Props) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="footer-menu">
          {logo && (
                <Image
                  class=""
                  src={logo || ""}
                />
          )}
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="footer-rights">{rightsText}</p>
        <p className="footer-address">{address}</p>
      </div>
    </footer>
  );
}