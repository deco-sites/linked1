import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {
    
  // document.addEventListener("DOMContentLoaded", function () {
  //   // Obtenha todas as divs com data-index
  //   const items = document.querySelectorAll(`[data-index="formulario"]`);

  //   let qtdSteps = items.length;
    // let step = 0;
    
    // setTimeout(() => {
    //   items[step].classList.remove("hidden");
    // }, 2000);

  // });

  // function handleNext() {
  //   console.log('aqui');
    
  // }

  const button = document.getElementById('botao');

  button?.addEventListener('click', function() {
    alert('Botão clicado!');
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