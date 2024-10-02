export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título de sucesso
   */
  title?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo
   */
  subtitle?: string;
}

export default function Section({ 
    title = "", 
    subtitle = "", 
}: Props) {

  return (
    <div>
        <p>{title}</p>
        <p>{subtitle}</p>
    </div>
  );
}
