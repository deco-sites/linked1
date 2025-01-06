import { Section } from "deco/blocks/section.ts";
import type { JSX } from "preact";
// import { ImageWidget } from "apps/admin/widgets.ts";
// import Image from "apps/website/components/Image.tsx";
// import IconComponent from "../Icons/IconGrid.tsx";
import Script, { type Props } from "./script.tsx";
import { useState } from "preact/hooks";

// Implemente a seção
function LoadComponent(
  { Component, props }: Section,
) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}

function FormComponent({ sections }: JSX.IntrinsicElements["div"] & Props) {

  return (
    <>
      <div className="flex justify-center">
        <div className="h-dvh grid grid-rows-[80px_1fr_96px] w-full max-w-[706px]">
          <div className="grid grid-cols-[32px_minmax(137px,_1fr)_32px] items-center justify-between gap-4 px-4 py-6">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="#003330"/>
              </svg>
            </button>
            <div className="flex justify-center items-center">
                <div className={`w-full max-w-[137px] h-[5px] bg-sacramentoState-10 rounded-full after:h-[5px] after:bg-[#3BEDB2] after:rounded-full after:block`}></div>
            </div>
          </div>
          <div className="px-6 py-6 border-y border-gray-100 flex flex-col gap-12 h-full overflow-auto">
            {sections?.map((item, index) => (
              // <div data-index={index} className="hidde">
              <div data-index="formulario" className="hidde">
                <div className="grid gap-2">
                  <h1 className="text-sm font-light text-primary">
                    {/* {sections[currentStep.value].text} 1 */}
                    Solicitar plano
                  </h1>
                  <h2 className="text-2xl font-semibold text-primary">
                    {/* {sections[currentStep.value].description} */}
                    Primeiramente, qual o seu nome completo?
                  </h2>
                </div>
                {/* // Renderizando o componente
                // {LoadComponent(item.section)} */}
                <LoadComponent 
                  {...item.section}
                  // value={inputValue}
                  // onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center px-4">
            <button id="botao" className="flex justify-center items-center h-[56px] w-[56px] rounded-full bg-sacramentoState disabled:bg-sacramentoState-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.92 11.6199C17.8724 11.4972 17.801 11.385 17.71 11.2899L12.71 6.28994C12.6168 6.1967 12.5061 6.12274 12.3842 6.07228C12.2624 6.02182 12.1319 5.99585 12 5.99585C11.7337 5.99585 11.4783 6.10164 11.29 6.28994C11.1968 6.38318 11.1228 6.49387 11.0723 6.61569C11.0219 6.73751 10.9959 6.86808 10.9959 6.99994C10.9959 7.26624 11.1017 7.52164 11.29 7.70994L14.59 10.9999H7C6.73478 10.9999 6.48043 11.1053 6.29289 11.2928C6.10536 11.4804 6 11.7347 6 11.9999C6 12.2652 6.10536 12.5195 6.29289 12.707C6.48043 12.8946 6.73478 12.9999 7 12.9999H14.59L11.29 16.2899C11.1963 16.3829 11.1219 16.4935 11.0711 16.6154C11.0203 16.7372 10.9942 16.8679 10.9942 16.9999C10.9942 17.132 11.0203 17.2627 11.0711 17.3845C11.1219 17.5064 11.1963 17.617 11.29 17.7099C11.383 17.8037 11.4936 17.8781 11.6154 17.9288C11.7373 17.9796 11.868 18.0057 12 18.0057C12.132 18.0057 12.2627 17.9796 12.3846 17.9288C12.5064 17.8781 12.617 17.8037 12.71 17.7099L17.71 12.7099C17.801 12.6148 17.8724 12.5027 17.92 12.3799C18.02 12.1365 18.02 11.8634 17.92 11.6199Z" fill="#3BEDB2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Script />
    </>
  );
}

export default FormComponent;
