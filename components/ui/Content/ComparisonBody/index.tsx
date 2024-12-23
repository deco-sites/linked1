import type { JSX } from "preact";

interface ContentItem {
  /**
   * @title Título do item
   * @description Título exibido no conteúdo
   */
  title: string;
  /**
   * @title Link
   * @description (Opcional) Insira o link do item
   */
  link?: string;
}

interface Props {
  body: {
    /**
     * @title Título da Seção
     * @description Escreva o título da seção
     */
    title: string;
    /**
     * @title Conteúdo à Esquerda
     * @description Itens exibidos na coluna esquerda
     */
    contentLeft: ContentItem[];
    /**
     * @title Conteúdo à Direita
     * @description Itens exibidos na coluna direita
     */
    contentRight: ContentItem[];
  };
}

function ExampleComponent({ body }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <h2 className="text-[22px] font-semibold leading-tight-25 tracking-tight-0.44 text-sacramentoState col-span-2 break-all">
        {body.title}
      </h2>
      <hr className="col-span-2" />

      {/* Coluna 1 */}
      {Array.isArray(body.contentLeft) && (
        <div className="grid gap-4">
          {body.contentLeft.map((columnItem, colIndex) => (
            <div key={colIndex} className="">
              {columnItem.link
                ? (
                  <a
                    href={columnItem.link}
                    className="text-base font-normal text-sacramentoState-80 break-all underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {columnItem.title}
                  </a>
                )
                : (
                  <h4 className="text-base font-normal text-sacramentoState-80 break-all">
                    {columnItem.title}
                  </h4>
                )}
            </div>
          ))}
        </div>
      )}

      {/* Coluna 2 */}
      {Array.isArray(body.contentRight) && (
        <div className="grid gap-4">
          {body.contentRight.map((columnItem, colIndex) => (
            <div key={colIndex} className="">
              {columnItem.link
                ? (
                  <a
                    href={columnItem.link}
                    className="text-base font-normal text-sacramentoState-80 break-all underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {columnItem.title}
                  </a>
                )
                : (
                  <h4 className="text-base font-normal text-sacramentoState-80 break-all">
                    {columnItem.title}
                  </h4>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExampleComponent;