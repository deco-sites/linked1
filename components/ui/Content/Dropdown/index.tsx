import type { JSX } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface filteredCategories {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;

  /**
   * @title Nome
   * @description Nome da categoria filtrada
   */
  name: string;
}

/**
 * @title {{{title}}}
 */
export interface Props {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;

  /**
   * @title Texto do Dropdown
   * @description Insira o texto do dropdown
   */
  dropdownText: string;

  /**
   * @title Ícone de Seta
   * @description Insira o ícone de seta
   */
  arrowIcon: ImageWidget;

  /**
   * @title Categorias Filtradas
   * @description Insira as categorias de integração filtradas
   */
  button?: filteredCategories[];
}

function Dropdown({
  title = "",
  dropdownText = "",
  arrowIcon,
  button,
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      {/* Dropdown de Categorias */}
      <div className="px-4 mt-10 relative">
        <select className="w-full pl-2 py-[13.5px] border-b border-sacramentoState rounded-t-lg text-sacramentoState bg-sacramentoState-10 cursor-pointer appearance-none pr-10 bg-[#e9f1ef]">
          <option
            value=""
            className="text-sacramentoState-80 text-lg font-sans font-normal leading-tight-21"
          >
            {dropdownText}
          </option>

          {button?.map((filteredCategories, index) => (
            <option key={index} value={filteredCategories.name}>
              {filteredCategories.name}
            </option>
          ))}
        </select>

        {/* Ícone de seta */}
        {arrowIcon && (
          <div className="absolute pr-2 right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <img
              className="w-6 h-6"
              src={arrowIcon || ""}
              alt="Arrow Icon"
              width={24}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
