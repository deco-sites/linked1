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
    images: ImageWidget;
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
    title = "",
    titleSectionText = "",
    dropdownText = "",
    arrowIcon = "",
    filters = [],
    clients = [],
}: Props) {
    return (
        <section className="bg-white">
            <div className="px-4">
                {titleSectionText && (
                    <p className="text-gray-600 mb-4">{titleSectionText}</p>
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
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            className="w-full text-left px-4 py-2"
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clients.length > 0
                        ? clients.map((client, index) => (
                            <div
                                key={index}
                                className="p-4 flex flex-col items-center text-center"
                            >
                                {client.images && (
                                    <Image
                                        src={client.images}
                                        alt={client.name || "Client Image"}
                                        width={100}
                                        height={100}
                                        className="w-full h-full"
                                    />
                                )}

                                {client.name && (
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {client.name}
                                    </h3>
                                )}

                                {client.type && (
                                    <p className="text-gray-600">
                                        {client.type}
                                    </p>
                                )}

                                {client.cityUf && (
                                    <p className="text-gray-500 text-sm">
                                        {client.cityUf}
                                    </p>
                                )}
                            </div>
                        ))
                        : <p className=""></p>}
                </div>
            </div>
        </section>
    );
}
