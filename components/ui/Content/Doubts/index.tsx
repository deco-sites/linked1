import { h } from "preact";
import type { JSX } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Section } from "deco/blocks/section.ts";

/**
 * @title {{{title}}}
 */
export interface Item {
  title: string;
  /**
   * @title Conteúdo
   */
  section: Section;
}

/**
 * @title {{{title}}}
 */
export interface Doubts {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Ícone (Fechado)
   * @description Ícone exibido quando o collapse está fechado
   */
  closedIcon?: ImageWidget;
  /**
   * @title Ícone (Aberto)
   * @description Ícone exibido quando o collapse está aberto
   */
  openIcon?: ImageWidget;
  /**
   * @title Subtítulo da Dúvida
   * @description Escreva aqui subtítulo da dúvida
   */
  subtitleDoubtAppear: string;
  /**
   * @title Descrição da Dúvida
   * @description Escreva aqui a descrição da dúvida
   */
  descriptionHiddenDoubt: string;
  /**
   * @title Conteúdo
   */
  sections?: Item[];
}

export interface Props {
  /**
   * @title Conteúdo da Dúvida
   */
  doubt: Doubts[];
  /**
   * @title Cor do Tema
   */
  colorTheme:
    | "Primary"
    | "Secondary"
    | "White"
    | "Accent"
    | "Sacramento-State"
    | "Sacramento-State-10"
    | "Mint-Cream";
}

function LoadComponent({ Component, props }: Section) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}

function setClass(value: string) {
  switch (value) {
    case "Primary":
      return "text-primary";
    case "Secondary":
      return "text-secondary";
    case "White":
      return "text-white";
    case "Accent":
      return "text-accent";
    default:
      return "text-primary";
  }
}

function DoubtsComponent({ doubt, colorTheme }: Props) {
  return (
    <div className="flex justify-center md:py-2">
      <div className="w-full max-w-[706px]">
        {doubt.map((item, index) => (
          <div
            key={index}
            className={`collapse py-4 rounded-none ${
              index !== 0 ? "border-t border-sacramentoState-10" : ""
            }`}
          >
            <input
              type="checkbox"
              className="peer hidden"
              id={`collapse-${index}`}
            />

            <label
              htmlFor={`collapse-${index}`}
              className={`collapse-title no-padding-collapse flex items-center gap-x-[10px] text-lg font-sans font-normal cursor-pointer ${
                setClass(
                  colorTheme,
                )
              }`}
            >
              <img
                src={item.closedIcon}
                alt="icon"
                className="w-6 h-6 peer-checked:hidden"
              />
              <img
                src={item.openIcon}
                alt="icon"
                className="w-6 h-6 hidden peer-checked:block"
              />
              {item.subtitleDoubtAppear}
            </label>

            <div className="collapse-content no-padding-collapse pl-[2rem] peer-checked:pt-4">
              {item.sections?.map((sectionItem) => (
                <div key={sectionItem.title} className="mt-2">
                  {LoadComponent(sectionItem.section)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoubtsComponent;
