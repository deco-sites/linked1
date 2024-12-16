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

export interface Props {
  background:
    | "Primary"
    | "Secondary"
    | "White"
    | "Light"
    | "Sacramento-State"
    | "Sacramento-State-10"
    | "Mint-Cream";

  collapse?: {
    enable?: boolean;
    title?: string;
  };
  /**
   * @title Conteúdo
   */
  sections?: Item[];
}

// Implemente a seção
function LoadComponent(
  { Component, props }: Section,
) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}

// Implemente a seção
function setClass(value: string) {
  switch (value) {
    case "Primary":
      return "bg-primary";

    case "Secondary":
      return "bg-secondary";

    case "White":
      return "bg-white";

    case "Light":
      return "bg-light";

    case "Sacramento-State":
      return "bg-sacramentoState";

    case "Sacramento-State-10":
      return "bg-sacramentoState-10";

    case "Mint-Cream":
      return "bg-mintCream";

    default:
      return "bg-primary";
  }
}

export default function MultiSection(
  { sections, background, collapse }: Props,
) {
  if (collapse && collapse.enable) {
    return (
      <div className="bg-sacramentoState-10 flex justify-center md:py-2">
        <div
          className="collapse collapse-arrow rounded-none bg-white w-full max-w-[706px] border-t md:border-none border-sacramentoState-10"
        >
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium after:shadow-[#3BEDB2]">
            {collapse.title}
          </div>
          <div className="collapse-content bg-white">
            {sections?.map((item) => (
              LoadComponent(item.section)
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${setClass(background)} py-6 md:py-10`}>
        {sections?.map((item) => (
          LoadComponent(item.section)
        ))}
      </div>
    );
  }
}
