import type { JSX } from "preact";

function ExampleComponent({ body }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <h2 className="text-[22px] font-bold leading-tight-25 tracking-tight-0.44 text-sacramentoState col-span-2 break-all">
          {body.title}
        </h2>
        <hr className="col-span-2" />

        {/* Coluna 1 */}
        {Array.isArray(body.contentLeft) && (
          <div className="grid gap-4">
            {body.contentLeft.map((columnItem, colIndex) => (
              <div key={colIndex} className="">
                <h4 className="text-base font-normal text-sacramentoState-80 break-all">
                  {columnItem.title}
                </h4>
              </div>
            ))}
          </div>
        )}

        {/* Coluna 2 */}
        {Array.isArray(body.contentRight) && (
          <div className="grid gap-4">
            {body.contentRight.map((columnItem, colIndex) => (
              <div key={colIndex} className="">
                <h4 className="text-base font-normal text-sacramentoState-80 break-all">
                  {columnItem.title}
                </h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ExampleComponent;
