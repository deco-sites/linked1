import type { JSX } from "preact";

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
              <a
                href={left.button.link}
                className="text-base font-sans font-semibold px-4 py-2 rounded-lg border border-sacramentoState text-sacramentoState text-center"
              >
                {left.button.name}
              </a>
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
              <a
                href={right.button.link}
                className="text-base font-sans font-semibold px-4 py-2 rounded-lg border border-sacramentoState text-sacramentoState text-center"
              >
                {right.button.name}
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ComparisonFooter;
