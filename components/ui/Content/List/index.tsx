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
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] p-4 pb-10 md:px-0 md:py-8">
          <ul
            className={`list-disc pl-5 ${setClass(colorTheme)}`}
          >
            {items.map((item) => (
              <li className="text-base font-light">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <Script /> */}
    </>
  );
}

export default List;