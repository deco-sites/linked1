export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título da abertura
   */
  title?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo da abertura
   */
  subtitle?: string;
}

export default function Section({ 
    title = "Gestão inteligente para sonhar mais", 
    subtitle = "A Linked entende as dores do seu negócio e pode te ajudar a economizar e lucrar", 
}: Props) {

  return (
    <div>
        <p>{title}</p>
        <p>{subtitle}</p>
    </div>
  );
}
