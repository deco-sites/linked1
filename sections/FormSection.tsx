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
  /**
   * @title Conteúdo
   */
  sections?: Item[];
}

// Implemente a seção
function LoadComponent(
  { Component, props }: Section,
  index,
) {
  props.step = index;

  return (
    <div>
      <Component {...props} />
    </div>
  );
}

function FormSection(
  { sections }: Props,
) {
  return (
    <div data-form="formulario">
      {sections?.map((item, index) => (
        LoadComponent(item.section, index)
      ))}
    </div>
  );
}

export default FormSection;
