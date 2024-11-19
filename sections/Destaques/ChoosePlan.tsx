import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface PlanBenefits {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Icone
     * @description Icone do Benefício
     */
    iconBenfits?: ImageWidget;
    /**
     * @title Descrição
     * @description Descrição do Benefício
     */
    descriptionBenefits?: string;
}

/**
 * @title {{{title}}}
 */
export interface Content {
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
     * @title Benefícios
     * @description Benefícios do Plano
     */
    planBenefits?: PlanBenefits[];
}

export interface Props {
    /**
     * @title Título
     * @description Título da Seção
     */
    title: string;
    /**
     * @title Descrição
     * @description Descrição da Seção
     */
    description?: string;
    /**
     * @title Botão
     * @description Descrição do Botão
     */
    buttonCompare?: string;
    /**
     * @title Conteúdo
     * @description Conteúdo da Seção
     */
    content?: Content[];
}

export default function Section({
  title = "",
  description = "",
  buttonCompare = "",
  content = [],
}: Props) {
    return (
        <section className="bg-white">
          <div className="pb-[101px] md:flex md:flex-col md:justify-center md:items-center">
            <div className="pt-10 flex flex-col justify-center items-center text-center">
                <h2 className="text-[28px] font-sans font-medium leading-tight-32 tracking-tight-0.56 text-sacramentoState">{title}</h2>
                  {description && 
                    <div className="pt-4 flex justify-center md:w-[350px]">
                      <p className="text-lg mb-8">{description}</p>
                    </div>
                  }
            </div>
      
            <div className="pl-[17px] pr-[15px] md:pr-[43px] md:pl-[43px] md:w-[706px] md:h-full grid grid-cols-2 gap-x-6 md:gap-8 md:border md:border-sacramentoState-10 md:rounded-2xl">
              {content?.length > 0 ? (
                content.map(({ icon, planTitle, planBenefits }, index) => (
                  <div
                    key={index}
                    className={`md:w-full flex flex-col justify-start ${
                      index === 0 ? 'md:pr-8 md:border-r md:border-sacramentoState-10 h-full' : ''
                    }`}
                  >
                  <div className="md:py-[43px]">
                    <div className="">
                      {icon && (
                        <Image
                          src={icon}
                          alt={planTitle || "Ícone do Plano"}
                          width={32}
                          height={32}
                          className="w-8 h-8"
                        />
                      )}
                    </div>

                    {planTitle && 
                      <div className="pt-[4px] border-b border-sacramentoState-10">
                        <h3 className="text-xl font-semibold mb-4">{planTitle}</h3>
                      </div>
                    }  
                      {Array.isArray(planBenefits) && planBenefits.length > 0 && (
                        <ul className="pt-8 text-left list-disc list-inside">
                            {planBenefits.map((benefit, idx) => {
                              if (!benefit) return null;
                              const { iconBenfits, descriptionBenefits } = benefit;

                              const listItemClass = idx === 0 ? "pb-8 flex items-start" : "pb-[4px] flex items-start";

                              return (
                                  <li key={idx} className={listItemClass}>
                                      {iconBenfits && (
                                          <Image
                                          src={iconBenfits}
                                          alt={title || "Ícone do Benefício"}
                                          width={24}
                                          height={24}
                                          className="w-6 h-6 mr-2"
                                          />
                                      )}
                                      <div>
                                          {descriptionBenefits && (
                                          <p className="text-base font-sans font-light text-sacramentoState-80">
                                              {descriptionBenefits}
                                          </p>
                                          )}
                                      </div>
                                  </li>
                                  );
                              })}
                        </ul>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="">.</p>
              )}
            </div>
      
            {buttonCompare && (
              <div className="mt-10 ml-4 mr-[14px] border border-sacramentoState rounded-xl">
                  <a
                      href=""
                      className="w-full"
                  >
                      <div className="py-[13px] md:px-[22px] text-center">
                          <p className="text-base font-sans font-semibold text-sacramentoState">
                              {buttonCompare}
                          </p>
                      </div>
                  </a>
              </div>
              )}
          </div>
        </section>
    );
}