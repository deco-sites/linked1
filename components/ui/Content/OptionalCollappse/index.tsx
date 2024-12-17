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
export interface Optional {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Ícone da Marca
   * @description Ícone da marca no collapse
   */
  iconBrand?: ImageWidget;
  /**
   * @title Nome da Marca
   * @description Insira o nome da marca
   */
  brandNameSubtitle?: string;
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
   * @title Conteúdo
   */
  sections?: Item[];
}

export interface Props {
  /**
   * @title Conteúdo da Dúvida
   */
  optional: Optional[];
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

function OptionalCollappseComponent({ optional, colorTheme }: Props) {
  return (
    <div className="flex justify-center md:py-2">
      <div className="w-full max-w-[706px]">
        {optional.map((item, index) => (
          <div
            key={index}
            className="collapse px-4 py-4 w-ful"
          >
            <input
              type="checkbox"
              className="peer hidden"
              id={`collapse-${index}`}
            />

            <label
              htmlFor={`collapse-${index}`}
              className={`collapse-title no-padding-collapse flex justify-between items-center w-full cursor-pointer ${
                setClass(colorTheme)
              }`}
            >
              <div className="flex items-center gap-x-4">
                {item.iconBrand && (
                  <div className="w-[60px] h-[60px] rounded-full bg-white">
                    <img
                      src={item.iconBrand}
                      alt="Brand Icon"
                      className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                  </div>
                )}
                <span className="text-base font-sans font-semibold">
                  {item.brandNameSubtitle}
                </span>
              </div>

              <div className="ml-auto flex items-center">
                <img
                  src={item.closedIcon}
                  alt="Closed Icon"
                  className="w-6 h-6 peer-checked:hidden"
                />
                <img
                  src={item.openIcon}
                  alt="Open Icon"
                  className="w-6 h-6 hidden peer-checked:block"
                />
              </div>
            </label>

            <div className="collapse-content pl-[2rem] peer-checked:pt-4">
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

export default OptionalCollappseComponent;
