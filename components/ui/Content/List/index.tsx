import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

// Implemente a seção
function setClass(value) {
  switch (value) {
    case "Primary":
        return 'text-primary'
        break;

    case "Secondary":
        return 'text-secondary'
        break;

    case "White":
        return 'text-white'
        break;

    case "Light":
        return 'text-light'
        break;
  
    default:
        return 'text-primary'
        break;

  }
  return;
}

function List({ items, colorTheme }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <ul
        className={`list-disc list-outside pl-5 text-base text-sacramentoState-80 ${setClass(colorTheme)}`}
      >
        {items.map((item) => (
          <li className="pl-2 pt-2 leading-tight-18">
            {item}
          </li>
        ))}
      </ul>
      {/* <Script /> */}
    </>
  );
}

export default List;