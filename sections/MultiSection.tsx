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

  background: "Primary" | "Secondary" | "White" | "Light";
  collapse: {
    enable: boolean,
    title: string
  };
  /**
   * @title Conteúdo
   */
  sections: Item[];

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
function setClass(value) {
  switch (value) {
    case "Primary":
      return "bg-primary";
      break;

    case "Secondary":
      return "bg-secondary";
      break;

    case "White":
      return "bg-white";
      break;

    case "Light":
      return "bg-light";
      break;

    case "Sacramento-State":
      return "bg-sacramentoState";
      break;

    case "Sacramento-State-10":
      return "bg-sacramentoState-10";
      break;

    case "Mint-Cream":
      return "bg-mintCream";
      break;

    default:
      return "bg-primary";
      break;
  }
  return;
}

export default function MultiSection({ sections, background, collapse }: Props) {

  if(collapse.enable) {
    return (
      <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
        <div className="collapse-title text-xl font-medium">{ collapse.title }</div>
        <div className="collapse-content">
          {sections?.map((item) => (
            LoadComponent(item.section)
          ))}
        </div>
      </div>
    );
  } else {
    <div className={`${setClass(background)} md:py-10`}>
      {sections?.map((item) => (
        LoadComponent(item.section)
      ))}
    </div>
  }
}
