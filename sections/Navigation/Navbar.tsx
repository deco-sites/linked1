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
    <div>
        {logo && (
              <Image
                class=""
                src={logo || ""}
              />
        )}

        {menu?.map(item => (
            <a href={item.url}>{item.name}</a>
        ))}

        {button?.map(btn => (
            <a href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            class="font-normal btn btn-primary">
            {btn.name}
            </a>
        ))}
    </div>
  );
}
