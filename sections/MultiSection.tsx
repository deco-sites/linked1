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
        <div className="collapse rounded-none bg-white w-full max-w-[706px] border-t md:border-none border-sacramentoState-10">
          <input
            type="checkbox"
            className="peer"
            id="collapse"
            name="MultiSection"
          />
          <label
            htmlFor="collapse"
            className="collapse-title no-padding-collapse flex items-center gap-x-[10px] text-lg font-sans font-normal cursor-pointer"
          >
            <div className="px-4 flex flex-grow justify-between">
              <p className="text-base font-sans font-semibold after:shadow-[#3BEDB2]">
                {collapse.title}
              </p>

              <svg
                className="transition-transform duration-300 peer-checked:rotate-180"
                width="24"
                height="24"
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
            </div>
          </label>
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
      <div className={`${setClass(background)} md:py-10`}>
        {sections?.map((item) => (
          LoadComponent(item.section)
        ))}
      </div>
    );
  }
}
