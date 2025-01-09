import type { JSX } from "preact";
import ButtonComponent from "../../../../sections/Final/Button/ButtonComponent.tsx";

function ComparisonFooter(
  { left, right }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {left && (
          <div className="grid gap-8">
            {left.price && (
              <div className="w-full max-w-[90px]">
                <p className="text-base font-sans font-bold text-sacramentoState">
                  {left.price}
                </p>
              </div>
            )}
            {left.button && (
              <ButtonComponent
                text={left.button.text}
                link={left.button.link}
                icon={left.button.icon}
                buttonTheme={left.button.buttonTheme}
              />
            )}
          </div>
        )}
        {right && (
          <div className="grid gap-8">
            {right.price && (
              <div className="w-full max-w-[90px]">
                <p className="text-base font-sans font-bold text-sacramentoState">
                  {right.price}
                </p>
              </div>
            )}
            {right.button && (
              <ButtonComponent
                text={right.button.text}
                link={right.button.link}
                icon={right.button.icon}
                buttonTheme={right.button.buttonTheme}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ComparisonFooter;
