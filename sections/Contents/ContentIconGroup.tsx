import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { BackgroundFetch } from "npm:lru-cache@10.2.0";

/**
 * @title {{{title}}}
 */

export interface Props {
    /**
     * @title Título
     * @description Escreva aqui o título da Coluna
     */
    title: string;
    /**
    * @title Ícone
    * @description Insira o ícone
    */
    icon?: ImageWidget;
    isLastItem: string;

    background: string;
}

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

// Implemente a seção
function setClassSubTitle(value) {
  switch (value) {
    case "Primary":
        return 'text-white'
        break;

    case "Secondary":
        return 'text-primary'
        break;

    case "White":
        return 'text-primary'
        break;

    case "Light":
        return 'text-primary'
        break;
  
    default:
        return 'text-primary'
        break;

  }
    return;
}

export default function Section({ 
  title = "",
  icon = "",
  background = "",
//   isLastItem = "",
}: Props) {
  return (
      <div className={`flex flex-col items-center justify-center gap-2 py-3 px-4 h-full min-h-[170px] ${setClass(background)}`}
      >
        <div className="flex justify-center items-center h-[64px] w-[64px] md:h-[76px] md:w-[76px] rounded-full bg-white">
          {icon && (
              <Image
              src={icon}
              alt="Ícone do Bloco"
              width={48}
              className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
              />
          )}
        </div>
          <p className={`text-[13.5px] md:text-base ${ setClassSubTitle(background) } leading-tight font-normal text-center`}>
              {title}
          </p>
      </div>
  );
}