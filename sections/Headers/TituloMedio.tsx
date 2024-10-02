export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título
   */
  title?: string;
}

export default function Section({ 
    title = "", 
}: Props) {

  return (
    <div>
        <p>{title}</p>
    </div>
  );
}
