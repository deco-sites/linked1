import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface ClientsList {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Imagens
   * @description Imagem do cliente
   */
  images?: ImageWidget;
  /**
   * @title Nome
   * @description Insira o nome do cliente
   */
  name?: string;
  /**
   * @title Tipo
   * @description Insira o tipo de cliente
   */
  type?: string;
  /**
   * @title Cidade/Estado
   * @description Insira a cidade e/ou estado do cliente
   */
  cityUf?: string;
}

/**
 * @title {{{title}}}
 */
export interface filteredClients {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;

  /**
   * @title Estado
   * @description Insira o estado para filtrar cliente
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
   * @title Título da Seção
   * @description Insira o título da seção
   */
  titleSectionText?: string;
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
   * @title Filtro de Clientes
   * @description Insira os filtros disponíveis
   */
  filters: filteredClients[];
  /**
   * @title Lista de Clientes
   * @description Insira a lista de clientes
   */
  clients: ClientsList[];
}

export default function IntegrationsSection({
  titleSectionText = "",
  dropdownText = "",
  arrowIcon = "",
  filters,
  clients,
}: Props) {
  return (
    <section className="bg-white md:bg-sacramentoState-10">
      <div className="md:pt-4 md:pb-[64px] md:flex md:justify-center">
        <div className="md:bg-white md:w-full md:max-w-[706px]">
          <div className="px-4 md:px-10 md:pt-[45px] pb-[27px]">
            {titleSectionText && (
              <p className="text-gray-600 mb-4">
                {titleSectionText}
              </p>
            )}

            {/* Dropdown */}
            <div className="relative mb-8">
              <select className="w-full pl-2 py-[13.5px] border-b border-sacramentoState rounded-t-lg text-sacramentoState bg-sacramentoState-10 cursor-pointer appearance-none pr-10 bg-[#e9f1ef]">
                <option
                  value=""
                  className="text-sacramentoState-80 text-lg font-sans font-normal leading-tight-21"
                >
                  {dropdownText}
                </option>
                {clients.map((client, index) => (
                  <option key={index} value={client.name}>
                    {client.name}
                  </option>
                ))}
              </select>
              {arrowIcon && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              )}
            </div>

            <div className="absolute top-full left-0 mt-2 w-full">
              {Array.isArray(filters) &&
                filters.map((filter, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2"
                  >
                    {filter.name}
                  </button>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-y-[32px]">
              {Array.isArray(clients) && clients.length > 1
                ? clients.map((client, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                  >
                    {client.images &&
                        typeof client.images ===
                          "string"
                      ? (
                        <Image
                          src={client.images}
                          alt={client.name ||
                            "Client Image"}
                          width={100}
                          height={100}
                          className="w-[100] h-[100]"
                        />
                      )
                      : <p></p>}

                    <div className="space-y-[4px] text-center">
                      {client.name && (
                        <div className="pt-[15px]">
                          <h3 className="text-base font-sans font-normal text-sacramentoState">
                            {client.name}
                          </h3>
                        </div>
                      )}

                      {client.type && (
                        <div>
                          <p className="text-sm font-sans font-normal text-sacramentoState-80">
                            {client.type}
                          </p>
                        </div>
                      )}

                      {client.cityUf && (
                        <div>
                          <p className="text-sm font-sans font-normal text-sacramentoState-80">
                            {client.cityUf}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
                : <p></p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
