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
   * @title Texto do Logo
   * @description Texto visível ao lado do SVG no logo
   */
  logoText: string;
  /**
   * @title URL ou Código SVG
   * @description Insira a URL ou código SVG do ícone do logo
   */
  logoSvg: string;
  /**
   * @title Links de Navegação
   * @description Insira os links do menu de navegação
   */
  menu?: Link[];
  /**
   * @title Texto do Botão
   * @description Texto visível no botão de ação
   */
  buttonText: string;
  /**
   * @title URL do Botão
   * @description URL de destino ao clicar no botão
   */
  buttonUrl: string;
}

export default function Navbar({
  logoText = "",
  logoSvg = "",
  menu = [],
  buttonText = "",
  buttonUrl = "#",
}: Props) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {logoText && <span className="navbar-text">{logoText}</span>}
        {logoSvg && (
          <span
            className="navbar-icon"
            dangerouslySetInnerHTML={{ __html: logoSvg }}
          ></span>
        )}
      </div>
      <ul className="navbar-menu">
        {menu.map((item) => (
          <li key={item.name}>
            <a href={item.url} className="navbar-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {buttonText && buttonUrl && (
        <a href={buttonUrl} className="navbar-button">
          {buttonText}
        </a>
      )}
    </nav>
  );
}