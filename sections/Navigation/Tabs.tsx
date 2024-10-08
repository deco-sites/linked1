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
    <section class="w-full bg-sacramentoState border-b-2 border-white-20">
      <div className="py-2">
        <div className="justify-evenly flex space-x-[37px]">
          {menu?.map(item => (
              <a href={item.url} className="text-sans text-base text-white-80">{item.name}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
