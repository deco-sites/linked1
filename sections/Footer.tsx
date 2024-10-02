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
  menu?: Link[];
  /**
   * @title Endereço
   * @description Insira o endereço do rodapé
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
  linkedText: string;
  /**
   * @title URL do Link de Texto
   * @description URL do link adicional
   */
  linkedUrl: string;
}

export default function Footer({
  menu = [
    {
      name: "",
      url: "/",
    },
  ],
  address = "",
  rightsText = "",
  linkedText = "",
  linkedUrl = "#",
}: Props) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="footer-menu">
          {menu?.map((item) => (
            <a href={item.url} key={item.name} className="footer-link">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="footer-rights">{rightsText}</p>
        <p className="footer-address">{address}</p>
        <a href={linkedUrl} className="footer-linked">
          {linkedText}
        </a>
      </div>
    </footer>
  );
}