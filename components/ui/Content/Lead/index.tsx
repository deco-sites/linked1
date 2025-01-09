import type { JSX } from "preact";

// import Image from "apps/website/components/Image.tsx";
import ButtonComponent from "../../Button/index.tsx";
import TitleComponent from "../Title/index.tsx";

function Lead(
  { title, button, placeholder }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-[706px] p-12 pb-24">
          <TitleComponent
            content={title.content}
            color={title.colorTheme}
            alignment={title.textAlignment}
          />
          <input
            name="email"
            // class="input input-bordered flex-grow"
            class="w-full pb-2 border-b-2 border-sacramentoState bg-transparent text-lg font-normal text-sacramentoState placeholder:text-sacramentoState-40"
            type="text"
            placeholder={placeholder}
          />
          <div className="pt-4">
            <ButtonComponent
              text={button.text}
              link={button.link}
              icon={button.icon}
              buttonTheme={button.buttonTheme}
              tamanho={button.tamanho}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lead;
