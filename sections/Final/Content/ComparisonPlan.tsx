import { ImageWidget } from "apps/admin/widgets.ts";
import ComparisonPlan from "../../../components/ui/Content/ComparisonPlan/index.tsx";

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

export default function Section({
    title = "",
    leftPlanIcon,
    leftPlanName = "",
    leftPlanBenefits,
    rightPlanIcon,
    rightPlanName = "",
    rightPlanBenefits,
}: Props) {
    return (
        <ComparisonPlan
            title={title}
            leftPlanIcon={leftPlanIcon}
            leftPlanName={leftPlanName}
            leftPlanBenefits={leftPlanBenefits}
            rightPlanIcon={rightPlanIcon}
            rightPlanName={rightPlanName}
            rightPlanBenefits={rightPlanBenefits}
        />
    );
}