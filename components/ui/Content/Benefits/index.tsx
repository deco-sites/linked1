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
export interface Benefits {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Ícone do Benefício
   * @description Ícone do benefício do plano
   */
  iconBenefit?: ImageWidget;
  /**
   * @title Subtítulo Benefício
   * @description Insira o subtítulo do benefício
   */
  subTitleBenefit?: string;
  /**
   * @title Descrição do Benefício
   * @description Insira a descrição falando sobre o benefício
   */
  descriptionBenefit?: string;
  /**
   * @title Ícone (Fechado)
   * @description Ícone exibido quando o collapse está fechado
   * @conditional collapse.enable
   */
  closedIcon?: ImageWidget;
  /**
   * @title Ícone (Aberto)
   * @description Ícone exibido quando o collapse está aberto
   * @conditional collapse.enable
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
  benefits: Benefits[];

  collapse?: {
    /**
     * @title Ativar Collapse
     * @description Habilitar comportamento de colapso
     */
    enable?: boolean;
  };

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

function Benefits({ benefits, collapse, colorTheme }: Props) {
  if (collapse && collapse.enable) {
    return (
      <div className="flex justify-center md:py-4">
        <div className="px-4 md:px-0 w-full max-w-[706px]">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`collapse py-10 flex flex-col items-center cursor-pointer ${
                index > 0
                  ? "border-t border-sacramentoState-10 rounded-none"
                  : ""
              }`}
            >
              <input
                type="checkbox"
                className="peer"
                id={`collapse-${index}`}
                name="benefits"
              />

              <label
                htmlFor={`collapse-${index}`}
                className={`collapse-title no-padding-collapse w-full flex justify-between items-center ${
                  setClass(
                    colorTheme,
                  )
                }`}
              >
                <div className="max-w-[305px] md:w-full grid gap-y-2">
                  <h3
                    className={`text-lg font-sans font-semibold leading-tight-115 ${
                      setClass(
                        colorTheme,
                      )
                    }`}
                  >
                    {item.subTitleBenefit}
                  </h3>
                  <p
                    className={`text-base font-sans font-normal ${
                      setClass(
                        colorTheme,
                      )
                    }`}
                  >
                    {item.descriptionBenefit}
                  </p>
                </div>

                <svg
                  className="transition-transform duration-300 peer-checked:rotate-270deg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8302 11.73L10.5902 7.49001C10.4972 7.39628 10.3866 7.32189 10.2648 7.27112C10.1429 7.22035 10.0122 7.19421 9.88019 7.19421C9.74818 7.19421 9.61747 7.22035 9.49561 7.27112C9.37375 7.32189 9.26315 7.39628 9.17019 7.49001C8.98394 7.67737 8.87939 7.93083 8.87939 8.19501C8.87939 8.4592 8.98394 8.71265 9.17019 8.90001L12.7102 12.44L9.17019 15.98C8.98394 16.1674 8.87939 16.4208 8.87939 16.685C8.87939 16.9492 8.98394 17.2027 9.17019 17.39C9.26363 17.4827 9.37444 17.556 9.49628 17.6058C9.61812 17.6555 9.74858 17.6808 9.88019 17.68C10.0118 17.6808 10.1423 17.6555 10.2641 17.6058C10.3859 17.556 10.4967 17.4827 10.5902 17.39L14.8302 13.15C14.9239 13.057 14.9983 12.9464 15.0491 12.8246C15.0998 12.7027 15.126 12.572 15.126 12.44C15.126 12.308 15.0998 12.1773 15.0491 12.0554C14.9983 11.9336 14.9239 11.823 14.8302 11.73Z"
                    fill="#3BEDB2"
                  />
                </svg>
              </label>

              <div className="collapse-content no-padding-collapse hidden peer-checked:block">
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
  } else {
    return (
      <div className="flex justify-center md:py-4">
        <div className="w-full max-w-[706px]">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={` pt-10 max-w-[343px] md:w-full flex items-start ${
                index === benefits.length - 1 ? "pb-[0.5rem]" : ""
              }`}
            >
              {item.iconBenefit && (
                <div className="mr-4 w-16 h-16 rounded-full border border-sacramentoState-10">
                  <img
                    src={item.iconBenefit}
                    alt={item.subTitleBenefit}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
              )}

              <div className="max-w-[230px] md:w-full grid gap-y-2">
                <h3
                  className={`text-lg font-sans font-semibold ${
                    setClass(colorTheme)
                  }`}
                >
                  {item.subTitleBenefit}
                </h3>
                <p
                  className={`text-sm font-sans font-normal ${
                    setClass(colorTheme)
                  }`}
                >
                  {item.descriptionBenefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Benefits;