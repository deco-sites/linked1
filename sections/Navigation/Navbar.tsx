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
}

export default function Section({ 
    logo = "", 
    menu = [
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
    </div>
  );
}
