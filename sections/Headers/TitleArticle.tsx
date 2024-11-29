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
    <section className="">
      <div className="pb-10 md:pt-20">
        {
          /* <div className="py-[26.51px] w-full flex bg-sacramentoState items-center justify-between">
          <p className="pl-4 font-mono text-white-80 text-[11px]">{page}</p>
          <div className="flex-1"></div>
          <div className="pr-4 inline-flex items-center space-x-2">
            <p className="font-mono text-white-80 text-[11px]">{offer}</p>
            {menuLogo && (
              <Image
                className="ml-2"
                src={menuLogo || ""}
              />
            )}
          </div>
        </div> */
        }
        <div className="pl-4 md:pl-10">
          <div className="pt-10 pr-12 w-full md:max-w-[739px]">
            <h1 className="text-[32px] md:text-5xl font-sans font-normal md:font-medium leading-tight-35 md:leading-tight-115 tracking-tight-2 md:tracking-tight-0.96 text-sacramentoState">
              {title}
            </h1>
          </div>
          <div className="w-full">
            <div className="flex-1"></div>
            <div className="flex justify-between items-start pt-[24px] pr-4">
              <div className="flex flex-col md:flex-row md:space-x-[4px]">
                <p className="text-sm font-sans font-light leading-tight-19 text-sacramentoState-80">
                  {date}
                  <br />
                </p>
                <p className="text-sm font-sans font-light leading-tight-19 text-sacramentoState-80">
                  {author}
                </p>
              </div>

              {iconShare && (
                <Image
                  src={iconShare || ""}
                  width={24}
                  className="block md:hidden ml-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
