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
              className="peer"
              id={`collapse-${index}`}
              name="duvidas"
            />

            <label
              htmlFor={`collapse-${index}`}
              className={`collapse-title no-padding-collapse flex items-center gap-x-[10px] text-lg font-sans font-normal cursor-pointer ${
                setClass(
                  colorTheme,
                )
              }`}
            >
              <svg
                className="transition-transform duration-300 peer-checked:rotate-180"
                width="34"
                height="34"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9.28906L12 15.2891L18 9.28906"
                  stroke="#3BEDB2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {item.subtitleDoubtAppear}
            </label>

            <div className="collapse-content no-padding-collapse pl-[1rem] !pb-0">
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
