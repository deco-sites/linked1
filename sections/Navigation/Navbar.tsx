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
  menu?: Link[];
  button?: Link[];
}

export default function Section({ 

    logo = "", 
    menu = [
        {
            name: "Home",
            url: "/"
        }
    ] ,
    button = [
        {
            name: "Home",
            url: "/"
        }
    ]
}: Props) {

  return (
    <nav role="navigation" class="inline-flex pl-4 py-[29.5px] lg:py-9 lg:px-10 w-full bg-sacramentoState border-b-2 border-white-20 fixed top-0 left-0 z-50">
        <div>
          {logo && (
                <Image
                  class=""
                  src={logo || ""}
                />
          )}
        </div>
        {/* {logo && (
              <Image
                class=""
                src={logo || ""}
              />
        )} */}

        <div class="hidden md:flex space-x-4 text-white font-light items-center whitespace-nowrap">
          {menu?.map(item => (
              <a href={item.url}>{item.name}</a>
          ))}
        </div>

        <div class="hidden w-fit md:flex ml-6 bg-secondary rounded-xl items-center justify-center gap-4">
          {button?.map(btn => (
              <a href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              class="w-max px-[22px] py-3.5 flex-none text-base font-light">
              {btn.name}
              </a>
          ))}
        </div>  
    </nav>
  );
}
