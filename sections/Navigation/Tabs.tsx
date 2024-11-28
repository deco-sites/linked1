/**
 * @title {{{title}}}
 */
export interface Link {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
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
  /**
   * @title Ativo
   * @description Informe se essa é a tab ativa
   */
  status?: boolean;
}

export interface Props {
  menu?: Link[];
}

export default function Section({
  menu = [],
}: Props) {
  return (
    <section className="w-full bg-sacramentoState border-b-2 border-white-20">
      <div className="py-2 md:pl-10 flex md:justify-start">
        <div className="flex justify-evenly space-x-[37px] md:space-x-[71px]">
          {menu?.map((item) => (
            <div className="">
              <a
                href={item.url}
                className="text-base font-sans leading-tight-18 text-white-80"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
