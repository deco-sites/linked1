import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Página
   * @description Escreva aqui o título da página
   */
  page: string;
  /**
   * @title Título
   * @description Escreva o nome da integração
   */
  title: string;
  /**
   * @title Data de Publicação
   * @description Escreva o mês seguido do ano (Maio 2024)
   */
  date: string;
  /**
   * @title Autor
   * @description Escreva o nome do autor da matéria
   */
  author: string;
  /**
   * @title Logo do Menu
   * @description Insira o logo do Menu
   */
  menuLogo?: ImageWidget;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  iconShare?: ImageWidget;
}

export default function Section({ 
    page = "", 
    iconShare = "", 
    title = "", 
    menuLogo = "", 
    author = "", 
    date = "", 
}: Props) {

  return (
    <div>
        <p>{page}</p>
        <p>{title}</p>
        {iconShare && (
              <Image
                class=""
                src={iconShare || ""}
              />
        )}
        {menuLogo && (
              <Image
                class=""
                src={menuLogo || ""}
              />
        )}
        { /* <p>{description}</p> */ }
        <p>{author}</p>
        <p>{date}</p>
    </div>
  );
}
