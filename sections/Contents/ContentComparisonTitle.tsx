import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */

export interface ContentHeader {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Icone
   * @description Icone do Plano
   */
  icon: ImageWidget;
  /**
   * @title Nome do plano
   */
  planTitle?: string;
  /**
   * @title Descrição do plano
   * @description Escreva aqui a descrição do plano
   */
  planDescription?: string;
  /**
   * @title Valor do plano
   * @description Escreva aqui o valor do plano
   */
  planPrice?: string;
  /**
   * @title Descrição do Botão
   * @description Escreva aqui o texto do botão
   */
  buttonDetails?: string;
}

export interface Body {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;

  /**
   * @title Nome do Recurso
   */
  sectionTitle?: string;
}
export interface ContentBody {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;

  /**
   * @title Nome do Recurso
   */
  sectionTitle?: string;
  /**
   * @title Descrição Coluna 1
   * @description Escreva aqui a descrição para a Coluna 1
   */
  resourceDescriptionColumOne?: Body[];
  /**
   * @title Descrição Coluna 2
   * @description Escreva aqui a descrição para a Coluna 2
   */
  resourceDescriptionColumnTwo?: Body[];
}
/**
 * @title {{{title}}}
 */

export interface Content {
  /**
   * @title Descrição Coluna 1 header
   * @description Escreva aqui a descrição para a Coluna 1 Header
   */
  resourceHeaderDescriptionColumOne?: ContentHeader[];

  /**
   * @title Descrição Coluna 1 header
   * @description Escreva aqui a descrição para a Coluna 1 Header
   */
  resourceHeaderDescriptionColumTwo?: ContentHeader[];

  /**
   * @title Bloco de conteúdo
   */
  resourceContentBody?: ContentBody[];
}

export interface Props {
  /**
   * @title Items
   * @description Configure cada item do Galery
   */
  content?: Content[];
}

export default function Section({
  content = [],
}: Props) {
  return (
    // <div className="grid gap-8 px-3 pt-8 pb-20">
    //     <div className="grid grid-cols-2 gap-6 py-4 border-b">
    //         <div className="flex items-center gap-2">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    //                 <path d="M12.0001 22.6667H17.3334C19.1015 22.6667 20.7972 21.9643 22.0475 20.714C23.2977 19.4638 24.0001 17.7681 24.0001 16V14.6667H25.3334C26.3943 14.6667 27.4117 14.2452 28.1618 13.4951C28.912 12.7449 29.3334 11.7275 29.3334 10.6667C29.3334 9.6058 28.912 8.58839 28.1618 7.83824C27.4117 7.08809 26.3943 6.66667 25.3334 6.66667H24.0001V5.33333C24.0001 4.97971 23.8596 4.64057 23.6096 4.39052C23.3595 4.14048 23.0204 4 22.6667 4H6.66675C6.31313 4 5.97399 4.14048 5.72394 4.39052C5.47389 4.64057 5.33341 4.97971 5.33341 5.33333V16C5.33341 17.7681 6.03579 19.4638 7.28604 20.714C8.53628 21.9643 10.232 22.6667 12.0001 22.6667ZM24.0001 9.33333H25.3334C25.687 9.33333 26.0262 9.47381 26.2762 9.72386C26.5263 9.97391 26.6667 10.313 26.6667 10.6667C26.6667 11.0203 26.5263 11.3594 26.2762 11.6095C26.0262 11.8595 25.687 12 25.3334 12H24.0001V9.33333ZM8.00008 6.66667H21.3334V16C21.3334 17.0609 20.912 18.0783 20.1618 18.8284C19.4117 19.5786 18.3943 20 17.3334 20H12.0001C10.9392 20 9.9218 19.5786 9.17165 18.8284C8.42151 18.0783 8.00008 17.0609 8.00008 16V6.66667ZM28.0001 25.3333H4.00008C3.64646 25.3333 3.30732 25.4738 3.05727 25.7239C2.80722 25.9739 2.66675 26.313 2.66675 26.6667C2.66675 27.0203 2.80722 27.3594 3.05727 27.6095C3.30732 27.8595 3.64646 28 4.00008 28H28.0001C28.3537 28 28.6928 27.8595 28.9429 27.6095C29.1929 27.3594 29.3334 27.0203 29.3334 26.6667C29.3334 26.313 29.1929 25.9739 28.9429 25.7239C28.6928 25.4738 28.3537 25.3333 28.0001 25.3333Z" fill="#3BEDB2"/>
    //             </svg>
    //             <p className="text-lg font-semibold text-sacramentoState">Essencial</p>
    //         </div>
    //         <div className="flex items-center gap-2">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    //                 <path d="M20.4533 13.5065C20.9874 13.5132 21.5174 13.4127 22.012 13.2112C22.5066 13.0097 22.9559 12.7112 23.3333 12.3332L27.1066 8.55988C27.355 8.31007 27.4944 7.97213 27.4944 7.61988C27.4944 7.26764 27.355 6.9297 27.1066 6.67988C26.9827 6.55491 26.8352 6.45572 26.6727 6.38803C26.5103 6.32034 26.336 6.28548 26.16 6.28548C25.984 6.28548 25.8097 6.32034 25.6472 6.38803C25.4847 6.45572 25.3373 6.55491 25.2133 6.67988L21.4 10.4399C21.276 10.5649 21.1286 10.664 20.9661 10.7317C20.8036 10.7994 20.6293 10.8343 20.4533 10.8343C20.2773 10.8343 20.103 10.7994 19.9405 10.7317C19.7781 10.664 19.6306 10.5649 19.5066 10.4399L24.2266 5.73322C24.351 5.6089 24.4496 5.46131 24.5169 5.29888C24.5841 5.13645 24.6188 4.96236 24.6188 4.78655C24.6188 4.61074 24.5841 4.43665 24.5169 4.27422C24.4496 4.11179 24.351 3.9642 24.2266 3.83988C24.1023 3.71556 23.9547 3.61695 23.7923 3.54967C23.6299 3.48239 23.4558 3.44776 23.28 3.44776C23.1042 3.44776 22.9301 3.48239 22.7676 3.54967C22.6052 3.61695 22.4576 3.71556 22.3333 3.83988L17.6266 8.55988C17.3783 8.31007 17.2389 7.97213 17.2389 7.61988C17.2389 7.26764 17.3783 6.9297 17.6266 6.67988L21.4 2.90655C21.5243 2.78223 21.6229 2.63464 21.6902 2.47222C21.7575 2.30979 21.7921 2.1357 21.7921 1.95988C21.7921 1.78407 21.7575 1.60998 21.6902 1.44755C21.6229 1.28512 21.5243 1.13753 21.4 1.01322C21.2757 0.888898 21.1281 0.790284 20.9656 0.723003C20.8032 0.655723 20.6291 0.621094 20.4533 0.621094C20.2775 0.621094 20.1034 0.655723 19.941 0.723003C19.7786 0.790284 19.631 0.888898 19.5066 1.01322L15.7333 4.78655C14.9842 5.53655 14.5635 6.55321 14.5635 7.61322C14.5635 8.67322 14.9842 9.68988 15.7333 10.4399L14 12.1599L2.97332 1.09322L2.83998 1.01322C2.77182 0.953749 2.69549 0.904358 2.61332 0.866549L2.37332 0.773216L2.21332 0.666549H2.11998H1.85332C1.77382 0.653838 1.69281 0.653838 1.61332 0.666549C1.5326 0.695928 1.45632 0.736309 1.38665 0.786549L1.17332 0.919883H1.07998L0.999983 1.05322C0.943551 1.12361 0.894411 1.19956 0.853317 1.27988C0.814268 1.36119 0.783016 1.44601 0.759983 1.53322C0.759983 1.53322 0.759983 1.62655 0.759983 1.67988C0.43643 3.9351 0.642717 6.23468 1.36249 8.3963C2.08226 10.5579 3.29571 12.5221 4.90665 14.1332L8.42665 17.6399L1.21332 24.8399C1.08835 24.9638 0.989153 25.1113 0.921461 25.2738C0.85377 25.4363 0.818919 25.6105 0.818919 25.7866C0.818919 25.9626 0.85377 26.1368 0.921461 26.2993C0.989153 26.4618 1.08835 26.6093 1.21332 26.7332C1.3379 26.8568 1.48566 26.9546 1.64811 27.0209C1.81056 27.0873 1.98451 27.1209 2.15998 27.1199C2.33546 27.1209 2.50941 27.0873 2.67186 27.0209C2.83431 26.9546 2.98206 26.8568 3.10665 26.7332L11.2 18.7599L14.9733 14.9865L17.64 12.3199C18.384 13.0719 19.3955 13.4986 20.4533 13.5065ZM10.2533 15.9332L6.74665 12.4132C4.82459 10.4649 3.62111 7.92157 3.33332 5.19988L12.1466 13.9999L10.2533 15.9332ZM18.5733 16.6932C18.3222 16.4404 17.981 16.2976 17.6247 16.2964C17.2684 16.2951 16.9262 16.4355 16.6733 16.6866C16.4205 16.9376 16.2777 17.2789 16.2765 17.6352C16.2752 17.9915 16.4156 18.3337 16.6666 18.5865L25.0666 26.9865C25.3213 27.2183 25.6558 27.3425 26 27.3332C26.1755 27.3342 26.3494 27.3006 26.5119 27.2342C26.6743 27.1679 26.8221 27.0701 26.9466 26.9465C27.0716 26.8226 27.1708 26.6751 27.2385 26.5127C27.3062 26.3502 27.341 26.1759 27.341 25.9999C27.341 25.8239 27.3062 25.6496 27.2385 25.4871C27.1708 25.3246 27.0716 25.1772 26.9466 25.0532L18.5733 16.6932Z" fill="#3BEDB2"/>
    //             </svg>
    //             <p className="text-lg font-semibold text-sacramentoState">Total</p>
    //         </div>
    //     </div>
    //     <div className="grid grid-cols-2 gap-6">
    //         <p className="text-base font-">Performance e gestão objetiva para estabelecimentos de micro e pequeno porte com poucos itens em cardápio.</p>
    //         <p>Alta performance e gestão completa. Ideal para estabelecimentos com muitos itens em cardápio e múltiplos perfis de usuários.</p>
    //     </div>
    // </div>
    <section className="">
      <div className="relative">
        <div className="px-4 pt-[47px] pb-[64px] flex justify-center items-center gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className={`grid gap-[64px]`}
            >
              <div className="grid grid-cols-2 gap-6">
                {Array.isArray(item.resourceHeaderDescriptionColumOne) && (
                  <div className="">
                    {item.resourceHeaderDescriptionColumOne.map((
                      header,
                      idx,
                    ) => (
                      <div key={idx} className="grid gap-8">
                        <div className="flex gap-2 items-center">
                          {header.icon && (
                            <Image
                              src={header.icon}
                              alt={header.icon || "Ícone Plano"}
                              width={32}
                              height={32}
                              className="w-8 h-8"
                            />
                          )}
                          {header.planTitle && (
                            <h4 className="text-lg font-semibold text-sacramentoState">
                              {header.planTitle}
                            </h4>
                          )}
                        </div>
                        <hr />
                        {header.planDescription && (
                          <p className="text-base font-light text-sacramentoState-80">
                            {header.planDescription}
                          </p>
                        )}
                        {header.planPrice && (
                          <p className="text-base font-bold text-sacramentoState">
                            {header.planPrice}
                          </p>
                        )}
                        {header.buttonDetails && (
                          <button className="text-sacramentoState px-4 py-2 rounded-lg border border-sacramentoState">
                            {header.buttonDetails}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {Array.isArray(item.resourceHeaderDescriptionColumTwo) && (
                  <div className="">
                    {item.resourceHeaderDescriptionColumTwo.map((
                      header,
                      idx,
                    ) => (
                      <div key={idx} className="grid gap-8">
                        <div className="flex gap-2 items-center">
                          {header.icon && (
                            <Image
                              src={header.icon}
                              alt={header.icon || "Ícone Plano"}
                              width={32}
                              height={32}
                              className="w-8 h-8"
                            />
                          )}
                          {header.planTitle && (
                            <h4 className="text-lg font-semibold text-sacramentoState">
                              {header.planTitle}
                            </h4>
                          )}
                        </div>
                        <hr />
                        {header.planDescription && (
                          <p className="text-base font-light text-sacramentoState-80">
                            {header.planDescription}
                          </p>
                        )}
                        {header.planPrice && (
                          <p className="text-base font-bold text-sacramentoState">
                            {header.planPrice}
                          </p>
                        )}
                        {header.buttonDetails && (
                          <button className="text-sacramentoState px-4 py-2 rounded-lg border border-sacramentoState">
                            {header.buttonDetails}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Content Body Section */}
              {Array.isArray(item.resourceContentBody) &&
                item.resourceContentBody.map((body, bodyIndex) => (
                  <div key={bodyIndex} className="grid grid-cols-2 gap-6">
                    <h2 className="text-2xl font-bold text-sacramentoState col-span-2 break-all">
                      {body.title}
                    </h2>
                    <hr className="col-span-2" />

                    {/* Coluna 1 */}
                    {Array.isArray(body.resourceDescriptionColumOne) && (
                      <div className="grid gap-4">
                        {body.resourceDescriptionColumOne.map((
                          columnItem,
                          colIndex,
                        ) => (
                          <div key={colIndex} className="">
                            <h4 className="text-base font-normal text-sacramentoState break-all">
                              {columnItem.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Coluna 2 */}
                    {Array.isArray(body.resourceDescriptionColumnTwo) && (
                      <div className="grid gap-4">
                        {body.resourceDescriptionColumnTwo.map((
                          columnItem,
                          colIndex,
                        ) => (
                          <div key={colIndex} className="">
                            <h4 className="text-base font-normal text-sacramentoState break-all">
                              {columnItem.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
            // <div key={index} className="text-start">
            //     <div className="flex gap-x-2 items-center">
            //         {item.icon && (
            //             <Image
            //                 src={item.icon}
            //                 alt={item.icon || "Ícone Plano"}
            //                 width={32}
            //                 height={32}
            //                 className="w-8 h-8"
            //             />
            //         )}
            //         <div className="flex items-center">
            //             {item.planTitle && (
            //                 <h3 className="font-sans text-lg font-semibold leading-tight-20">
            //                     {item.planTitle}
            //                 </h3>
            //             )}
            //         </div>
            //     </div>
            //     <div className="pt-4 pb-5 absolute left-0 w-full">
            //         <div className="border-b border-sacramentoState-10"></div>
            //     </div>
            //     {item.planDescription && (
            //         <div className="mt-10 -w-[160px]">
            //             <p className="text-base font-sans font-light text-sacramentoState-80">
            //                 {item.planDescription}
            //             </p>
            //         </div>
            //     )}
            //     {item.planPrice && (
            //         <div className="mt-8 w-[100px] ">
            //             <p className="text-base font-sans font-bold text-sacramentoState">
            //                 {item.planPrice}
            //             </p>
            //         </div>
            //     )}
            //     {item.buttonDetails && (
            //         <div className="mt-8 border border-sacramentoState rounded-xl">
            //             <a href="" className="w-full">
            //                 <div className="py-[13px] md:px-[31px] text-center">
            //                     <p className="text-base font-sans font-semibold text-sacramentoState">
            //                         {item.buttonDetails}
            //                     </p>
            //                 </div>
            //             </a>
            //         </div>
            //     )}
            // </div>
          ))}
        </div>
      </div>
      {
        /* <div className="px-4">
            {content.map((item, index) => (
                <div
                    key={index}
                    className={`mt-[64px] ${
                        index === content.length - 1 ? "pb-[117px]" : ""
                    }`}
                >
                    {item.sectionTitle && (
                        <div className="pb-4 border-b border-sacramentoState-10">
                            <h3 className="text-[22px] font-sans font-semibold text-sacramentoState">
                                {item.sectionTitle}
                            </h3>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-6">
                        {Array.isArray(item.resourceDescriptionColumOne) && (
                            <div className="pt-8 grid gap-y-4">
                                {item.resourceDescriptionColumOne.map((desc, idx) => (
                                    <p
                                        key={idx}
                                        className="text-base font-sans font-normal text-sacramentoState-80"
                                    >
                                        {desc.split(/(-)/).map((part, partIdx) =>
                                            part === "-" ? (
                                                <span
                                                    key={partIdx}
                                                    className="no-underline"
                                                >
                                                    {part}
                                                </span>
                                            ) : (
                                                <span
                                                    key={partIdx}
                                                    className={item.underlineDescription ? "underline" : ""}
                                                >
                                                    {part}
                                                </span>
                                            )
                                        )}
                                    </p>
                                ))}
                            </div>
                        )}

                        {Array.isArray(item.resourceDescriptionColumnTwo) && (
                            <div className="pt-8 grid gap-y-4">
                                {item.resourceDescriptionColumnTwo.map((desc, idx) => (
                                    <p
                                        key={idx}
                                        className="text-base font-sans font-normal text-sacramentoState-80"
                                    >
                                        {desc.split(/(-)/).map((part, partIdx) =>
                                            part === "-" ? (
                                                <span
                                                    key={partIdx}
                                                    className="no-underline"
                                                >
                                                    {part}
                                                </span>
                                            ) : (
                                                <span
                                                    key={partIdx}
                                                    className={item.underlineDescription ? "underline" : ""}
                                                >
                                                    {part}
                                                </span>
                                            )
                                        )}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div> */
      }
    </section>
  );
}
