import type { JSX } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface BenefitsPlan {
  /**
   * @title Benefício do Plano
   * @description Escreva o benefício do plano
   */
  benefitDescription?: string[];
}

/**
 * @title {{{title}}}
 */
export interface Props {
  /**
   * @title Título da Seção
   * @description Escreva o título da seção
   */
  title: string;
  /**
   * @title Ícone do Plano Esquerdo
   * @description Insira o ícone do plano da esquerda
   */
  leftPlanIcon: ImageWidget;
  /**
   * @title Nome do Plano Esquerdo
   * @description Insira o nome do plano da esquerda
   */
  leftPlanName: string;
  /**
   * @title Benefícios do Plano Esquerdo
   * @description Insira os benefícios do plano da esquerda
   */
  leftPlanBenefits: BenefitsPlan;
  /**
   * @title Ícone do Plano Direito
   * @description Insira o ícone do plano da direita
   */
  rightPlanIcon: ImageWidget;
  /**
   * @title Nome do Plano Direito
   * @description Insira o nome do plano da direita
   */
  rightPlanName: string;
  /**
   * @title Benefícios do Plano Direito
   * @description Insira os benefícios do plano da direita
   */
  rightPlanBenefits: BenefitsPlan;
}

function ComparisonPlan({
  title = "",
  leftPlanIcon,
  leftPlanName = "",
  leftPlanBenefits,
  rightPlanIcon,
  rightPlanName = "",
  rightPlanBenefits,
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <div className="px-4 my-10 flex justify-center lg:items-center">
      <div className="lg:pt-[43px] lg:pb-[31px] w-full lg:max-w-[706px] grid grid-cols-2 gap-x-6 lg:border lg:border-sacramentoState-10 lg:rounded-lg">
        {/* Plano da Esquerda */}
        <div className="relative lg:pl-[32px] h-full">
          <div className="lg:pr-[32px] h-full flex flex-col">
            <div className="pb-2 mb-[32px] w-full flex items-center border-b border-sacramentoState-10">
              <Image
                src={leftPlanIcon}
                alt={leftPlanName}
                className="w-[30px] h-[30px]"
                width={40}
                height={40}
              />
              <div className="pl-2">
                <h3 className="text-lg font-sans font-semibold leading-tight-20 text-sacramentoState">
                  {leftPlanName}
                </h3>
              </div>
            </div>
            <ul className="pl-5 list-disc list-outside">
              {leftPlanBenefits.benefitDescription?.map((benefit, index) => (
                <li
                  key={index}
                  className={`mb-2 text-base font-sans font-light text-sacramentoState-80 ${
                    index === 0 ? "pb-[32px]" : ""
                  }`}
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Plano da Direita */}
        <div className="lg:pr-[50px] flex flex-col items-center lg:items-start">
          <div className="pb-2 mb-[32px] w-full flex items-center border-b border-sacramentoState-10">
            <Image
              src={rightPlanIcon}
              alt={rightPlanName}
              className="w-[30px] h-[30px]"
              width={40}
              height={40}
            />
            <div className="pl-2">
              <h3 className="text-lg font-sans font-semibold leading-tight-20 text-sacramentoState">
                {rightPlanName}
              </h3>
            </div>
          </div>
          <ul className="lg:pl-6 list-disc list-outside">
            {rightPlanBenefits.benefitDescription?.map((benefit, index) => (
              <li
                key={index}
                className={`mb-2 text-base font-sans font-light text-sacramentoState-80 ${
                  index === 0 ? "pb-[32px]" : ""
                }`}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ComparisonPlan;
