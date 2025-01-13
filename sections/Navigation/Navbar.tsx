import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Navbar from "../Final/Navbar/index.tsx";

// import { useState } from "react";
import { useEffect } from "react";

/**
 * @title {{{title}}}
 */
export type Link = {
  title: string;
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
};

/**
 * @title {{{title}}}
 */
export type IconLink = {
  title: string;
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  image: ImageWidget;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
};

/**
 * @title {{{title}}}
 */
export type Button = {
  title: string;
  /**
   * @title Texto
   * @description Escreva o texto do botão
   */
  text: string;
  /**
   * @title Link
   * @description Escreva o link de redirecionamento
   */
  link: string;
  /**
   * @title Icone
   * @description Selecione o ícone que deseja
   */
  icon?: string;
  /**
   * @title Botão
   * @description Selecione o tipo de botão que deseja
   */
  buttonTheme?:
    | "Primary dark"
    | "Primary white"
    | "Secondary dark"
    | "Secondary white"
    | "Link dark"
    | "Link white"
    | "Faq"
    | "Nenhuma estilização";
};
export interface Props {
  /**
   * @title Logo
   * @description Insira o logo
   */
  logo?: ImageWidget;
  /**
   * @title Ítens do Menu (Mobile e Desktop)
   * @description Insira os links que aparecerão no desktop e mobile Obs.: cuidado com  a quantidade de links
   */
  menu?: Link[];
  /**
   * @title Botão
   * @Description Botões
   */
  button?: Button[];
  /**
   * @title Ítens do Menu (Mobile)
   * @description Insira os links que aparecerão apenas no mobile Obs.: cuidado com  a quantidade de links
   */
  subMenu?: Button[];
  /**
   * @title Links de ícones (Mobile)
   * @description Insira os ícones e links que aparecerão no menu
   */
  linkIcons?: IconLink[];
}

export default function Section({
  logo,
  menu = [
    {
      title: "Home",
      name: "Home",
      url: "/",
    },
  ],
  subMenu = [
    {
      title: "Home",
      name: "Home",
      url: "/",
    },
  ],
  linkIcons = [],
  button = [
    {
      title: "Botão",
      text: "Home",
      link: "/",
      icon: "",
      buttonTheme: "Primary dark",
    },
  ],
}: Props) {
  return (
    <Navbar
      logo={logo}
      menu={menu}
      button={button}
      subMenu={subMenu}
      linkIcons={linkIcons}
    />
  );
}
