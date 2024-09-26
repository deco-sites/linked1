import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Result = {
  /**
   * @title Grande Número
   * @description Digite o valor de destaque
   */
  number: number;
  /**
   * @title Descrição
   * @description Fale sobre o grande número
   */
    description: string;
};

export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título do bloco
   */
  title: string,
  /**
   * @title Resultados
   * @description Insira os resultados
   */
  results: Result[];
}

export default function Section({ 
    title = 'Por quê a Linked?',
    results = [
      {
        number: 1,
        description: '',
      }
    ] 
}: Props) {

  return (
    <div>
        <p>{title}</p>
        {results.map(item => (
          <div>
            <p>{item.number}</p>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
}
