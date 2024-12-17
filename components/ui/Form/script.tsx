import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {
    
  document.addEventListener("DOMContentLoaded", function () {
    // Obtenha todas as divs com data-index
    const items = document.querySelectorAll("[data-index]");

    // Verifique se há elementos e remova a classe "hidden" do primeiro
    // if (items.length > 0) {
      items[0].classList.remove("hidden");
    // }
  });

}

function FormSteps(
  { }: Props,
) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, { }),
      }}
    />
  );
}
export default FormSteps;