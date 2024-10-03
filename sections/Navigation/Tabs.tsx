export type Link = {
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
    url: string;
  /**
   * @title Ativo
   * @description Informe se essa é a tab ativa
   */
    status?: boolean;
};

export interface Props {
  menu?: Link[];
}

export default function Section({ 
    menu = [
        {
            name: "Home",
            url: "/",
            status: false
        }
    ] 
}: Props) {

  return (
    <div>
        {menu?.map(item => (
            <a href={item.url}>{item.name}</a>
        ))}
    </div>
  );
}
