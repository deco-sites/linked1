import type { JSX } from "preact";

function setClass(value: string) {
  switch (value) {
    case "Primary":
      return "text-primary";

    case "Secondary":
      return "text-secondary";

    case "White":
      return "text-white";

    case "Accent":
      return "text-accent";

    default:
      return "text-primary";
  }
}

interface Props {
  items: string[];
  colorTheme: string;
  isFirst: boolean;
  isLast: boolean;
}

function List({ items, colorTheme, isFirst, isLast }: Props) {
  return (
    <>
      <div className="flex md:justify-center">
        <div className="md:w-full md:max-w-[706px]">
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
        </div>
      </div>
    </>
  );
}

export default List;
