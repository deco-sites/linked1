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
              <p className="text-base font-bold text-sacramentoState">
                {left.price}
              </p>
            )}
            {left.button && (
              <a
                href={left.button.link}
                className="text-sacramentoState px-4 py-2 rounded-lg border border-sacramentoState"
              >
                {left.button.name}
              </a>
            )}
          </div>
        )}
        {right && (
          <div className="grid gap-8">
            {right.price && (
              <p className="text-base font-bold text-sacramentoState">
                {right.price}
              </p>
            )}
            {right.button && (
              <a
                href={right.button.link}
                className="text-sacramentoState px-4 py-2 rounded-lg border border-sacramentoState"
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
