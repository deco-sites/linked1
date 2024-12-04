import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

// Implemente a seção
function setClass(type, value) {
  switch (value) {
    case "Primary":
        return type + '-primary'
        break;

    case "Secondary":
        return type + '-secondary'
        break;

    case "White":
        return type + '-white'
        break;

    case "Light":
        return type + '-light'
        break;
  
    default:
        return type + '-primary'
        break;

  }
  return;
}

function Conection({ 
  content,
  topBackground,
  bottomBackground,
  circleBackground,
  colorText,
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <div class={`relative w-full h-32 ${setClass('bg', topBackground)}`}>
          <div class={`absolute bottom-0 left-0 w-full h-1/2 ${setClass('bg', bottomBackground)}`}></div>
          <div class="absolute inset-0 flex justify-center items-center">
            <div class={`w-16 h-16 ${setClass('bg', circleBackground)} ${setClass('text', colorText)} flex justify-center items-center rounded-full text-xl font-bold`}>
              {content}
            </div>
          </div>
        </div>
        <Script />
    </>
  );
}

export default Conection;