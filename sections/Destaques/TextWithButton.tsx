import { ImageWidget } from "apps/admin/widgets.ts";

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
   * @title Ícone
   * @description URL do ícone opcional
   */
  iconButton?: ImageWidget;
}

export interface Props {
  /**
   * @title Título
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Botão
   * @description Insira o botão
   */
  button?: Link[];
}

export default function Section({
  title = "",
  button = [],
}: Props) {
  return (
    <section className="bg-white md:bg-sacramentoState-10">
      <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
        <div className="md:bg-white md:w-full md:max-w-[706px]">
          <div className="px-4 md:px-10 pb-[160px] flex flex-col justify-center items-center">
            <div className="py-10 w-full max-w-[343px] md:max-w-none text-start">
              <p className="text-lg font-sans font-normal text-sacramentoState-80">
                {title}
              </p>
            </div>

            <div className="flex flex-col w-full space-y-4">
              {button?.map((btn, index) => (
                <div
                  key={index}
                  className="w-full flex justify-center cursor-pointer"
                >
                  <a
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full px-4 py-3 flex-none ${
                      index === 0
                        ? "pr-2.5 flex justify-center items-center bg-transparent border border-sacramentoState rounded-xl text-center text-sacramentoState"
                        : "pr-2.5 flex justify-center items-center bg-sacramentoState rounded-xl text-secondary"
                    }`}
                  >
                    <span className="text-base font-sans font-semibold">
                      {btn.name}
                    </span>
                    {btn.iconButton && (
                      <img
                        src={btn.iconButton}
                        alt={btn.iconButton}
                        className="w-6 h-6 ml-2.5"
                      />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
