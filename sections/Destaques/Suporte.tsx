import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
// import ImageComponent from "../Final/Content/Image.tsx";
import ImageComponent from "../Contents/ContentImage.tsx";
import IconGroupComponent from "../Contents/ContentIconGroup.tsx";

/**
 * @title {{{title}}}
 */

export interface ContentSection {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Ícone
   * @description Insira o ícone para a seção
   */
  ImageWidget: ImageWidget;
  /**
   * @title Descrição
   * @description Escreva a descrição do bloco
   */ 
  textSectionDescription: string;
}

export interface Props {
    /**
     * @title Ícone
     * @description Insira o ícone para a seção
     */
    ImageWidget: ImageWidget;
    /**
     * @title Subtítulo
     * @description Escreva aqui o subtítulo da seção
     */
    subTitle: string;
    /**
     * @title Contéudo
     * @description Configure cada item do conteúdo (Max 8 itens)
     */
    content: ContentSection[];
    
    background: "Primary" | "Secondary" | "White" | "Light"
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

// Implemente a seção
function setClassBorder(value) {
  switch (value) {
    case "Primary":
        return 'bg-white-20'
        break;

    case "Secondary":
        return 'bg-white-20'
        break;

    case "White":
        return 'bg-sacramentoState-10'
        break;

    case "Light":
        return 'bg-primary'
        break;
  
    default:
        return 'bg-primary'
        break;

  }
    return;
}

// Implemente a seção
function setClassTitle(value) {
  switch (value) {
    case "Primary":
        return 'text-mintCream'
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
    ImageWidget,
    subTitle,
    content,
    background
  }: Props) {
    return (
      <section className={`pl-4 pr-4 ${setClass(background)}`}>
        <div className="container mx-auto text-center pt-[56px] pb-[120px]">
          <div className=" block justify-between items-center">
            {ImageWidget && (
              // <div className="">
              //   <Image
              //     src={ImageWidget}
              //     alt="Ícone da Seção"
              //     className="mx-auto"
              //     width={234}
              //     height={338}
              //   />
              // </div>
              <ImageComponent 
                  imageDesktop={ImageWidget}
                  imageMobile={ImageWidget}
                  type="Cantos Arredondados"
              />
            )}
            <h2 className={`pt-[43px] pb-[32px] text-[28px] md:text-5xl font-sans ${setClassTitle(background)} font-normal text-center leading-tight-32 tracking-tight-2`}>
              {subTitle}
            </h2>
          </div>
  
          <div className={`grid gap-[1px] ${setClassBorder(background)} ${
              content.length === 1
                ? 'grid-cols-1' // 1 item: 1 coluna
                : content.length === 2
                ? 'grid-cols-2' // 2 itens: 2 colunas
                : content.length === 3
                ? 'grid-cols-2 md:grid-cols-3' // 3 itens: 2 colunas mobile, 3 colunas desktop
                : content.length === 4 || content.length === 8 || content.length >= 8
                ? 'grid-cols-2' // 4 ou 8 itens: 2 colunas
                : content.length === 5 || content.length === 7
                ? 'grid-cols-2' // 5 ou 7 itens: comportamento especial
                : 'grid-cols-2 md:grid-cols-3' // 6+ itens padrão: 3 colunas no desktop
          }`}>
            {content.slice(0, 8).map((item, index) => {
                // Detecta se é o último item para layouts especiais
                const isLastItem = index === content.length - 1;
                const isOddSet = content.length % 2 !== 0;

                return (
                    <div
                      key={index}
                      className={`${
                        isOddSet && isLastItem ? 'col-span-2' : '' // No último item ímpar, ocupa 2 colunas
                      }`}
                    >
                      <IconGroupComponent 
                        // key={index}
                        icon={item.ImageWidget}
                        title={item.textSectionDescription}
                        background={background}
                        // isLastItem={isLastItem}
                      />
                    </div>
                );
            })}
          </div>
      </div>
    </section>
  );
}