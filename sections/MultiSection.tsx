import { Section } from "deco/blocks/section.ts";


export interface Props {
    /**
     * @title Conteúdo
     */
    content: Section[];
}

// Implemente a seção
function LoadComponent(
  { Component, props } : Section
) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}

export default function MultiSection({ content }: Props) {

    return (
        <div>
            {content?.map((section) => (
                LoadComponent(section)
            ))}
        </div>
    )

}