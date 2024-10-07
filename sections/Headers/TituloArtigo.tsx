import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Página
   * @description Escreva aqui o título da página
   */
  page: string;
  /**
   * @title Oferecido por
   * @description Escreva o nome do oferecimento
   */
  offer?: string;
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
    offer = "",
    iconShare = "", 
    title = "", 
    menuLogo = "",  
    date = "", 
    author = "",
}: Props) {

  return (
    <section className="pt-[110px] pb-10 bg-sacramentoState">
      <div>
        <div className="w-full inline-flex">
          <p className="text-white-80 text-[11px]">{page}</p>
          <div className="flex-1"></div>
          <p className="text-white-80 text-[11px]">{offer}</p>
          {menuLogo && (
                <Image
                  class=""
                  src={menuLogo || ""}
                />
          )}
        </div>
          <h1 className="text-[32px] font-medium text-sans text-sacramentoState">{title}</h1>
          <div className="w-full">
            <div className="flex-1"></div>
            <div className="pt-[24px] pr-4">
              {iconShare && (
                    <Image
                      class=""
                      src={iconShare || ""}
                    />
              )}
              <p>{date} <br /></p>
              <p>{author}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
