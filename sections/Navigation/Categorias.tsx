import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Tag = {
  /**
   * @title Nome
   * @description Escreva aqui o nome da categoria
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
  /**
   * @title Ícone
   * @description Escolha o ícone da categoria
   */
  icon: ImageWidget;
};

export type DisplayOptions = {
  /**
   * @title Mostrar no Desktop
   * @description Escolha se a categoria deve aparecer no desktop
   */
  showOnDesktop?: boolean;
  /**
   * @title Mostrar no Mobile
   * @description Escolha se a categoria deve aparecer no mobile
   */
  showOnMobile?: boolean;
  /**
   * @title Tipo de Estrutura no Desktop
   * @description Escolha o tipo de estrutura desejada para o desktop
   * @oneOf ["Estrutura 1", "Estrutura 2"]
   */
  structureTypeDesktop?: "Estrutura 1" | "Estrutura 2";
  /**
   * @title Tipo de Estrutura no Mobile
   * @description Escolha o tipo de estrutura desejada para o mobile
   * @oneOf ["Estrutura 1", "Estrutura 2"]
   */
  structureTypeMobile?: "Estrutura 1" | "Estrutura 2";
  /**
   * @title Ícone para Estrutura 1
   * @description Escolha o ícone para Estrutura 1
   * @conditional structureTypeDesktop=Estrutura 1 || structureTypeMobile=Estrutura 1
   */
  iconStructure1?: ImageWidget;
  /**
   * @title Ícone para Estrutura 2
   * @description Escolha o ícone para Estrutura 2
   * @conditional structureTypeDesktop=Estrutura 2 || structureTypeMobile=Estrutura 2
   */
  iconStructure2?: ImageWidget;
};

export type Categoria = Tag & DisplayOptions;

export interface Props {
  /**
   * @title Título para Mobile
   * @description Digite aqui o título do bloco
   */
  titleForMobile?: string;
  /**
   * @title Título para Desktop
   * @description Digite aqui o título do bloco
   */
  titleForDesktop?: string;
  /**
   * @title Quebra de Linha
   * @description Escreva aqui a quebra de linha
   */
  wordBreak?: string;
  /**
   * @title Categorias
   * @description Insira as categorias desejadas
   * @title Categoria
   */
  tags?: Categoria[];
}

export default function Section({
  titleForMobile = '',
  titleForDesktop = '',
  wordBreak = '',
  tags = [
    {
      name: '',
      url: '',
      icon: '',
      showOnDesktop: true,
      showOnMobile: true,
      structureTypeDesktop: undefined,
      iconStructure1: '',
      structureTypeMobile: undefined,
      iconStructure2: ''
    }
  ]
}: Props) {
  return (
    <section className="grid gap-8 lg:gap-20 py-36 bg-white">
      <div>
        <p className="md:hidden pl-[17px] pb-[42px] text-sans font-semibold text-sacramentoState text-[22px] font-semibold text-left"> 
          {titleForMobile}
        </p>
        <p className="hidden md:block pb-[42px] text-sans font-semibold text-sacramentoState text-5xl text-center break-words">
          {titleForDesktop} <br /> {wordBreak}
        </p>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-start lg:justify-center pl-6 gap-x-[8px] gap-y-[8px] lg:gap-y-[17px] w-full max-w-[888px] lg:max-w-[780px]">
            {tags?.map(tag => {
              const isStructure1Desktop = tag.structureTypeDesktop === "Estrutura 1";
              const isStructure1Mobile = tag.structureTypeMobile === "Estrutura 1";
              const iconDesktop = tag.structureTypeDesktop ? (isStructure1Desktop ? tag.iconStructure1 : tag.iconStructure2) : tag.icon;
              const iconMobile = tag.structureTypeMobile ? (isStructure1Mobile ? tag.iconStructure1 : tag.iconStructure2) : tag.icon;
              return (
                <>
                  {tag.showOnDesktop && (
                    <div
                      key={`${tag.name}-desktop`}
                      className={`hidden md:inline-flex w-fit rounded-[58px] px-4 py-3 ${isStructure1Desktop ? 'bg-mintCream text-primary' : 'bg-sacramentoState text-secondary'} text-sans font-semibold`}
                    >
                      <div className="pr-[2px] inline-flex">
                        <Image className="" src={iconDesktop || tag.icon || ""} alt={tag.name} />
                        <a href={tag.url} className="text-md md:text-lg pl-2 text-sans font-semibold">
                          {tag.name}
                        </a>
                      </div>
                    </div>
                  )}
                  {tag.showOnMobile && (
                    <div
                      key={`${tag.name}-mobile`}
                      className={`md:hidden w-fit rounded-[58px] px-4 py-3 ${isStructure1Mobile ? 'bg-mintCream text-primary' : 'bg-sacramentoState text-secondary'} text-sans font-semibold`}
                    >
                      <div className="pr-[2px] inline-flex">
                        <Image className="" src={iconMobile || tag.icon || ""} alt={tag.name} />
                        <a href={tag.url} className="text-md md:text-lg pl-2 text-sans font-semibold">
                          {tag.name}
                        </a>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}