import { useScript } from "@deco/deco/hooks";

export interface Props {
  step?: number;
}

const setup = (_: Props) => {
  const stepElement = Array.from(document.querySelectorAll("[data-step]"));
  let currentStep = 0;

  const totalSteps = () => stepElement.length;

  const showCurrentPage = (): void => {
    stepElement.forEach((page, index) => {
      page.classList.toggle("block", index === currentStep);
      page.classList.toggle("hidden", index !== currentStep);
    });
    console.log(`Etapa atual: ${currentStep}`);
  };

  const updateProgressBar = () => {
    const progressBar = document.querySelector('[data-bar="progress"]') as HTMLElement; 
    const total = totalSteps();

    console.log("TOTAL: " + total);

    if (!progressBar.style.background) {
      progressBar.style.width = "15%";
      console.log("aqui")
    }

    const progress = (currentStep / (total - 1)) * 100;
    console.log("Barra de progresso: " + progress);

    progressBar.style.background = "#000000";
    progressBar.style.width = `${progress}%`;
  };

  const handleNext = () => {
    const total = totalSteps();
    if (currentStep < total - 1) {
      currentStep++;
      console.log(`Indo para a próxima etapa: ${currentStep}`);
      showCurrentPage();
      updateProgressBar();

      globalThis.scrollTo({
        top: stepElement[currentStep]?.offsetTop || 0,
        behavior: "smooth",
      });
    } else {
      console.log("Você completou todos os formulários!");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      currentStep--;
      console.log(`Voltando para a etapa anterior: ${currentStep}`);
      showCurrentPage();
      updateProgressBar();

      globalThis.scrollTo({
        top: stepElement[currentStep]?.offsetTop || 0,
        behavior: "smooth",
      });
    } else {
      console.log("Você está na primeira etapa!");
    }
  };

  const bindEvents = () => {
    const nextButtons = document.querySelectorAll('[data-next="next"]');
    const backButtons = document.querySelectorAll('[data-back="back"]');

    nextButtons.forEach((button) => {
      button.addEventListener("click", handleNext);
    });

    backButtons.forEach((button) => {
      button.addEventListener("click", handleBack);
    });
  };

  bindEvents();
  showCurrentPage();
  updateProgressBar();
};


function FormSteps({ step }: Props) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, { step }),
        __html: useScript(setup, { step }),
      }}
    />
  );
}

export default FormSteps;

