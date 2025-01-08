import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface FilteredCategories {
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

  /**
   * @title ID da Categoria
   * @description ID único associado à categoria
   */
  id: string;
}

/**
 * @title {{{title}}}
 */
export interface Logos {
  /**
   * @title Nome da Categoria
   * @description Nome da categoria a qual o logo pertence
   */
  category: string;

  /**
   * @title Nome do Logo
   * @description Título do logo
   */
  title: string;

  /**
   * @title Imagens
   * @description Adicione as imagens do logotipo
   */
  logo: ImageWidget[];

  /**
   * @title ID único do logo
   * @description ID único associado ao logo e suas imagens
   */
  id: string;
}

/**
 * @title {{{title}}}
 */
export interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
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
  button?: FilteredCategories[];

  /**
   * @title Logos
   * @description Lista de logos associados às categorias
   */
  logos: Logos[];
}

function DropdownWithLogos({
  dropdownText = "",
  arrowIcon,
  button = [],
  logos = [],
}: Props) {
  const selectedId = useSignal<string>("");

  // Função chamada quando o valor do dropdown muda
  const handleChange = (event: Event) => {
    console.log("Mudou!");
    const selectedValue = (event.target as HTMLSelectElement).value;
    selectedId.value = selectedValue.toString();
    console.log(selectedId.value);
  };

  // Filtra os logos com base no valor selecionado
  const filteredLogos = selectedId.value === ""
    ? logos // Se nenhum valor foi selecionado, retorna todos os logos
    : logos.filter((logo) => logo.id === selectedId.value); // Caso contrário, filtra os logos pelo id

  console.log(filteredLogos);

  // Filtra as categorias com base no valor selecionado
  const filteredCategories = button.filter((category) =>
    category.id === selectedId.value // Filtra as categorias pelo id correspondente
  );

  console.log(filteredCategories);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[706px] px-4 md:px-0 my-10 relative">
        <select
          className="w-full pl-2 py-[13.5px] border-b border-sacramentoState rounded-t-lg text-sacramentoState bg-sacramentoState-10 cursor-pointer appearance-none pr-10 bg-[#e9f1ef]"
          onChange={handleChange}
        >
          <option value="all" className="text-sacramentoState-80">
            {dropdownText || "Por categoria"}
          </option>
          {button.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
          {logos.map((logo) => (
            <option key={logo.id} value={logo.id}>
              {logo.title}
            </option>
          ))}
        </select>

        {arrowIcon && (
          <div className="absolute pr-2 right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <img
              className="w-6 h-6"
              src={arrowIcon}
              alt="Arrow Icon"
              width={24}
            />
          </div>
        )}
      </div>

      {/* Categorias Filtradas */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] grid gap-4 px-4 bg-white">
          {filteredCategories.length > 0 &&
            filteredCategories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col gap-2"
              >
                <p className="text-base font-normal text-sacramentoState">
                  {category.title}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Logos */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] grid gap-4 px-4 bg-white">
          {filteredLogos.length > 0
            ? (
              filteredLogos.map((item) => (
                <div key={item.id} className="flex flex-col space-y-4 gap-2">
                  <p className="text-base font-normal text-sacramentoState">
                    {item.title}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {item.logo.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="border rounded-lg p-2 flex justify-center items-center"
                      >
                        <img
                          className="w-24 h-24 object-contain"
                          src={image}
                          alt={`${item.title} Logo ${imgIndex + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )
            : <p className=""></p>}
        </div>
      </div>
    </div>
  );
}

export default DropdownWithLogos;
