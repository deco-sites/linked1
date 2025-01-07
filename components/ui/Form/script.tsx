import { useScript as useScript } from "@deco/deco/hooks";

export interface Props {}

const setup = ({}: Props) => {
  let currentStep = 0;

  const getFormPages = () => {
    return Array.from(
      document.querySelectorAll('[data-form="formulario"]'),
    ) as HTMLElement[];
  };

  let formPages = getFormPages();
  const totalSteps = () => formPages.length;

  const showCurrentPage = () => {
    formPages.forEach((page, index) => {
      if (index === currentStep) {
        page.classList.add("block");
        page.classList.remove("hidden");
      } else {
        page.classList.add("hidden");
        page.classList.remove("block");
      }
    });

    console.log(`Etapa atual: ${currentStep}`);
    console.log(`Total de páginas: ${totalSteps()}`);
  };

  const button = document.getElementById("botao") as HTMLButtonElement | null;

  const attachButtonEvent = () => {
    if (button) {
      button.removeEventListener("click", handleNext);
      button.addEventListener("click", handleNext);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps() - 1) {
      currentStep++;
      console.log(`Indo para a próxima etapa: ${currentStep}`);
      showCurrentPage();

      window.scrollTo({
        top: formPages[currentStep].offsetTop,
        behavior: "smooth",
      });
    } else {
      alert("Você completou todos os formulários!");
    }
  };

  attachButtonEvent();

  const observer = new MutationObserver(() => {
    console.log(
      "Mudança detectada no DOM, atualizando páginas do formulário...",
    );
    formPages = getFormPages();
    showCurrentPage();

    attachButtonEvent();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  showCurrentPage();
};

function FormSteps({}: Props) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, {}),
      }}
    />
  );
}

export default FormSteps;