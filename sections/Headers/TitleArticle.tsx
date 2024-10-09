import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  // /**
  //  * @title Página
  //  * @description Escreva aqui o título da página
  //  */
  // page: string;
  // /**
  //  * @title Oferecido por
  //  * @description Escreva o nome do oferecimento
  //  */
  // offer?: string;
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
  // /**
  //  * @title Logo do Menu
  //  * @description Insira o logo do Menu
  //  */
  // menuLogo?: ImageWidget;
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  iconShare?: ImageWidget;
}

export default function Section({ 
    // page = "", 
    // offer = "",
    iconShare = "", 
    title = "", 
    // menuLogo = "",  
    date = "", 
    author = "",
}: Props) {

  return (
    <section className="pb-10">
      <div>
        {/* <div className="py-[26.51px] w-full flex bg-sacramentoState items-center justify-between">
          <p className="pl-4 text-mono text-white-80 text-[11px]">{page}</p>
          <div className="flex-1"></div>
          <div className="pr-4 inline-flex items-center space-x-2">
            <p className="text-mono text-white-80 text-[11px]">{offer}</p>
            {menuLogo && (
              <Image
                className="ml-2"
                src={menuLogo || ""}
              />
            )}
          </div>
        </div> */}
        <div>
            <h1 className="pl-4 pt-10 pr-12 text-[32px] font-medium text-sans text-sacramentoState">{title}</h1>
            <div className="w-full">
              <div className="flex-1"></div>
              <div className="flex justify-between items-start pt-[24px] pr-4">
              <div className="flex flex-col">
                <p className="pl-4 text-sm text-sans font-light">
                  {date}
                  <br />
                </p>
                <p className="pl-4 text-sm text-sans font-light">{author}</p>
              </div>

              {iconShare && (
                <Image
                  className="ml-auto"
                  src={iconShare || ""}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
