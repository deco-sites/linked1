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
  
  return (
    <div>
      <FormStepsComponent sections={sections} />
    </div>
  );
}