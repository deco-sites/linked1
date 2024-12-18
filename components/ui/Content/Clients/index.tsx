import { h } from "preact";
import type { JSX } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface Clients {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Ícone do Cliente
   */
  iconClient?: ImageWidget;
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

export interface Props {
  /**
   * @title Conteúdo da Dúvida
   */
  clients: Clients[];
  /**
   * @title Cor do Tema
   */
  colorTheme:
    | "Primary"
    | "Secondary"
    | "White"
    | "Accent"
    | "Sacramento-State"
    | "Sacramento-State-10"
    | "Mint-Cream";
}

function setClass(value: string) {
  switch (value) {
    case "Primary":
      return "text-primary";
    case "Secondary":
      return "text-secondary";
    case "White":
      return "text-white";
    case "Accent":
      return "text-accent";
    default:
      return "text-primary";
  }
}

function Clients({ clients, colorTheme }: Props) {
  return (
    <div className="flex justify-center md:py-4">
      <div className="w-full max-w-[706px]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {clients && clients.length > 0
            ? (
              clients.map((client, index) => (
                <div
                  key={index}
                  className="py-4 flex flex-col justify-center items-center text-center"
                >
                  {client.iconClient && (
                    <div className="mb-4 w-[100px] h-[100px] rounded-full">
                      <img
                        src={client.iconClient}
                        alt={client.name || "Client Image"}
                        className="w-[100px] h-[100px] object-cover rounded-full"
                      />
                    </div>
                  )}

                  <div className="grid gap-y-1">
                    {client.name && (
                      <h3
                        className={`text-base font-sans font-normal ${
                          setClass(colorTheme)
                        }`}
                      >
                        {client.name}
                      </h3>
                    )}

                    {client.type && (
                      <p
                        className={`text-sm font-sans font-normal ${
                          setClass(colorTheme)
                        }`}
                      >
                        {client.type}
                      </p>
                    )}

                    {client.cityUf && (
                      <p
                        className={`text-sm font-sans font-normal ${
                          setClass(colorTheme)
                        }`}
                      >
                        {client.cityUf}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )
            : <p></p>}
        </div>
      </div>
    </div>
  );
}

export default Clients;
