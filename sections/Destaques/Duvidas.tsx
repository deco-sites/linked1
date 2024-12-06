import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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
   * @title Ícone de Dúvida
   * @description Insira o ícone de dúvida aqui
   */
  icon: ImageWidget;
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
  icon = "",
  title = "",
  button = [],
}: Props) {
  return (
    <section className="bg-mintCream">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <div className="pt-[96px] pb-4 flex justify-center">
            {icon && (
              <Image
                className="w-[32px] h-[32px]"
                src={icon || ""}
                width={32}
              />
            )}
          </div>
          <div className="pb-[32px] text-center">
            <p className="text-[28px] md:text-5xl font-sans font-normal md:font-medium leading-tight-32 md:leading-tight-55 tracking-tight-2 md:tracking-tight-0.96 text-sacramentoState ">
              {title}
            </p>
          </div>
        </div>

        <div className="pb-24 px-4 w-full max-w md:max-w-[465px] flex flex-col rounded-xl items-center justify-center space-y-4">
          {button?.map((btn, index) => (
            <div key={index} className="w-full max-w flex gap-x-[10px] justify-center cursor-pointer">
              <a
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full px-5 py-3 flex-none ${
                  index === 0
                    ? "bg-transparent border-[1px] border-sacramentoState rounded-xl text-center text-sacramentoState"
                    : "bg-sacramentoState rounded-xl text-secondary flex items-center justify-center"
                }`}
              >
                <span className="font-sans text-base font-semibold text-center">
                  {btn.name}
                </span>
                {index === 1 && btn.iconButton && (
                  <img
                    src={btn.iconButton}
                    alt="WhatsApp Icon"
                    className="w-6 h-6 ml-2.5"
                  />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
