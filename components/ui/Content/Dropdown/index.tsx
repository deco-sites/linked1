import { useSignal } from "@preact/signals";
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
export interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
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
  /**
   * @title Função de Mudança de Categoria
   * @description Função chamada ao mudar a categoria no Dropdown
   */
  onCategoryChange: (selected: string) => void;
}

function Dropdown({
  dropdownText = "",
  arrowIcon,
  button = [],
  logos = [],
}: Props) {
  const selectedCategory = useSignal<string>("");

  const handleChange = (event: Event) => {
    const selectedValue = (event.target as HTMLSelectElement).value;
    selectedCategory.value = selectedValue;
  };

  const filteredLogos = logos.filter(
    (logo) => logo.category === selectedCategory.value,
  );

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[706px] px-4 md:px-0 mt-10 relative">
        <select
          className="w-full pl-2 py-[13.5px] border-b border-sacramentoState rounded-t-lg text-sacramentoState bg-sacramentoState-10 cursor-pointer appearance-none pr-10 bg-[#e9f1ef]"
          onChange={handleChange}
        >
          <option value="" className="text-sacramentoState-80">
            {dropdownText}
          </option>
          {button.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
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
      <div className="w-full mt-6 flex flex-wrap justify-center gap-4">
        {filteredLogos.length > 0
          ? (
            filteredLogos.map((logo, index) => (
              <div
                key={index}
                className="w-24 h-24 flex justify-center items-center"
              >
                <img src={logo.logo} alt={logo.title} className="max-w-full" />
              </div>
            ))
          )
          : <p className=""></p>}
      </div>
    </div>
  );
}

export default Dropdown;