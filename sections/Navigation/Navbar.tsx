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
   * @description Insira a url ou o caminho de destino
   */
  url: string;
};

export interface Props {
  /**
   * @title Logo
   * @description Insira o logo
   */
  logo?: ImageWidget;
  /**
   * @title Ícone de Menu
   * @description Insira o ícone de menu
   */
  icon?: ImageWidget;
  /**
   * @title Ícone de Fechar
   * @description Insira o ícone de fechar
   */
  close_icon?: ImageWidget;
  menu?: Link[];
  button?: Link[];
}

export default function Section({
  logo,
  icon,
  close_icon,
  menu = [
    {
      name: "Home",
      url: "/",
    },
  ],
  button = [
    {
      name: "Home",
      url: "/",
    },
  ],
}: Props) {

  // // Efeito para o menu toggle (abrir e fechar)
  // useEffect(() => {
  //   const menuToggle = document.getElementById("menu-toggle") as HTMLInputElement;
  //   const menu = document.getElementById("menu");
  //   const body = document.body;
  //   const hamburgerIcon = document.getElementById("hamburger-icon");
  //   const closeIcon = document.getElementById("close-icon");
  //   const fixedSection = document.getElementById("fixed-section");

  //   const handleToggle = () => {
  //     if (menuToggle.checked) {
  //       menu?.classList.remove("hidden");
  //       body.classList.add("overflow-hidden");
  //       hamburgerIcon?.classList.add("hidden");
  //       closeIcon?.classList.remove("hidden");
  //       fixedSection?.classList.add("hidden");
  //     } else {
  //       menu?.classList.add("hidden");
  //       body.classList.remove("overflow-hidden");
  //       hamburgerIcon?.classList.remove("hidden");
  //       closeIcon?.classList.add("hidden");
  //       fixedSection?.classList.remove("hidden");
  //     }
  //   };

  // menuToggle?.addEventListener("change", handleToggle);

  //   // Limpeza do evento para evitar vazamentos de memória
  //   return () => {
  //     menuToggle?.removeEventListener("change", handleToggle);
  //   };
  // }, []);

  return (
    <nav role="navigation" className="inline-flex pl-4 py-[29.5px] lg:py-9 lg:px-10 w-full bg-sacramentoState border-b-2 border-white-20 relative top-0 left-0 z-50">
      <div className="flex">
        {logo && (
          <Image
            className="lg:pr-[124.94px]"
            src={logo || ""} 
          />
        )}
      </div>

      {/* Ícones de hambúrguer e fechar para mobile */}
      <div className="w-fit md:hidden flex items-center space-x-4">
        <input type="checkbox" id="menu-toggle" class="hidden" />
        <div id="hamburger-icon" class="pl-[137.28px] pr-6">
          {icon && (
            <Image
              className=""
              src={icon || ""}
            />
          )}
        </div>
        <div id="close-icon" className="hidden pl-[137.28px] pr-6">
          {close_icon && (
            <Image
              className=""
              src={close_icon || ""}
            />
          )}
        </div>
      </div>

      <div id="menu" className="hidden md:flex space-x-4 text-sans text-white font-light items-center whitespace-nowrap">
        {menu?.map((item, index) => (
          <a key={index} href={item.url}>
            {item.name}
          </a>
        ))}
      </div>

      <div className="hidden w-fit md:flex ml-8 mr-10 bg-secondary rounded-xl items-center justify-center gap-4">
        {button?.map((btn, index) => (
          <a
            key={index}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-max px-[22px] py-3.5 flex-none text-sans text-base font-light"
          >
            {btn.name}
          </a>
        ))}
      </div>
    </nav>
  );
}