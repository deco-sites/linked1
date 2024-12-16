import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import ButtonComponent from "../Final/Button/ButtonComponent.tsx";

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

/**
 * @title {{{title}}}
 */
export interface Button {
  title: string;
  /**
   * @title Texto
   * @description Escreva o texto do botão
   */
  text: string;
  /**
   * @title Link
   * @description Escreva o link de redirecionamento
   */
  link: string;
  /**
   * @title Icone
   * @description Selecione o ícone que deseja
   */
  icon?: string;
  /**
   * @title Botão
   * @description Selecione o tipo de botão que deseja
   */
  buttonTheme?:
      | "Primary dark"
      | "Primary white"
      | "Secondary dark"
      | "Secondary white"
      | "Link dark"
      | "Link white"
      | "Faq"
      | "Nenhuma estilização"
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
  button?: Button[];
}

export default function Section({
  icon = "",
  title = "",
  button = [],
}: Props) {
  return (
    <section className="bg-mintCream flex justify-center">
      <div className="grid gap-8 w-full max-w-[706px] px-4 md:px-0 py-24 md:py-32">
        <div className="grid gap-4">
          <div className="flex justify-center">
            {icon && (
              <Image
                className="w-[32px] h-[32px]"
                src={icon || ""}
                width={32}
              />
            )}
          </div>
          <p className="text-[28px] md:text-5xl text-center font-normal md:font-medium leading-tight-32 md:leading-tight-55 tracking-tight-2 md:tracking-tight-0.96 text-sacramentoState ">
            {title}
          </p>
        </div>

        <div className="grid gap-4">
        {button?.map((btn, index) => (
          <div key={index}>
            <ButtonComponent text={btn.text} link={btn.link} icon={btn.icon} buttonTheme={btn.buttonTheme} />
          </div>
        ))}
        </div>

        {/* <div className="pb-24 px-4 w-full max-w md:max-w-[465px] flex flex-col rounded-xl items-center justify-center space-y-4">
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
        </div> */}
      </div>
    </section>
  );
}
