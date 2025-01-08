import { useScript } from "@deco/deco/hooks";

export interface Props {}

const setup = ({}: Props) => {
  let currentStep = 0;

  const getFormPages = () => {
    return Array.from(
      document.querySelectorAll('[data-form="formulario"]'),
    ) as HTMLElement[];
  };

  const totalSteps = () => getFormPages().length;

  const showCurrentPage = () => {
    const formPages = getFormPages();
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

  const updateProgressBar = () => {
    const progressBar = document.getElementById("progress-bar") as HTMLElement;
    if (progressBar) {
      const progress = (currentStep / (totalSteps() - 1)) * 100;
      console.log("barra de progresso: " + progress);

      progressBar.style.width = `${progress}%`;
    }
  };

  const handleNext = () => {
    const formPages = getFormPages();

    if (currentStep < totalSteps() - 1) {
      currentStep++;
      console.log(`Indo para a próxima etapa: ${currentStep}`);
      showCurrentPage();
      updateProgressBar();

      window.scrollTo({
        top: formPages[currentStep]?.offsetTop || 0,
        behavior: "smooth",
      });
    } else {
      alert("Você completou todos os formulários!");
    }
  };

  const handleBack = () => {
    const formPages = getFormPages();

    if (currentStep > 0) {
      currentStep--;
      console.log(`Voltando para a etapa anterior: ${currentStep}`);
      showCurrentPage();
      updateProgressBar();

      window.scrollTo({
        top: formPages[currentStep]?.offsetTop || 0,
        behavior: "smooth",
      });
    } else {
      alert("Você está na primeira etapa!");
    }
  };

  document.addEventListener("click", (event) => {
    if ((event.target as HTMLElement)?.id === "botao") {
      handleNext();
    }
  });

  document.addEventListener("click", (event) => {
    if ((event.target as HTMLElement)?.id === "back") {
      handleBack();
    }
  });

  showCurrentPage();
  updateProgressBar();
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