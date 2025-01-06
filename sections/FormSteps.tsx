import { Section } from "deco/blocks/section.ts";
import FormStepsComponent from "../components/ui/Form/index.tsx";

/**
 * @title {{{title}}}
 */
export interface Item {
  title: string;
  /**
   * @title Title
   * @description Título da página
   */
  text: string;
  /**
   * @title Descrição
   * @description Descrição
   */
  description: string;
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

export default function FormSteps({ sections }: Props) {
  if (!sections || sections.length === 0) {
    return <div>Nenhum conteúdo encontrado</div>;
  }
  return (
    <div>
      <FormStepsComponent
        sections={sections.map((item) => ({
          Component: item.section.Component,
          props: item.section.props,
        }))}
      />
    </div>
  );
}