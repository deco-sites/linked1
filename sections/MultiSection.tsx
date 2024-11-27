import { Section } from "deco/blocks/section.ts";


export interface Props {

    background: "Primary" | "Secondary" | "White" | "Light"
    
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

// Implemente a seção
function setClass(value) {
  switch (value) {
    case "Primary":
        return 'bg-primary'
        break;

    case "Secondary":
        return 'bg-secondary'
        break;

    case "White":
        return 'bg-white'
        break;

    case "Light":
        return 'bg-light'
        break;
  
    default:
        return 'bg-primary'
        break;

  }
    return;
}

export default function MultiSection({ content, background }: Props) {

    return (
        <div className={setClass(background)}>
            {content?.map((section) => (
                LoadComponent(section)
            ))}
        </div>
    )

}