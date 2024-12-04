import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function ExampleComponent({ body }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <h2 className="text-2xl font-bold text-sacramentoState col-span-2 break-all">{body.title}</h2>
        <hr className="col-span-2" />

        {/* Coluna 1 */}
        {Array.isArray(body.contentLeft) && (
        <div className="grid gap-4">
            {body.contentLeft.map((columnItem, colIndex) => (
            <div key={colIndex} className="">
                <h4 className="text-base font-normal text-sacramentoState break-all">{columnItem.title}</h4>
            </div>
            ))}
        </div>
        )}

        {/* Coluna 2 */}
        {Array.isArray(body.contentRight) && (
        <div className="grid gap-4">
            {body.contentRight.map((columnItem, colIndex) => (
            <div key={colIndex} className="">
                <h4 className="text-base font-normal text-sacramentoState break-all">{columnItem.title}</h4>
            </div>
            ))}
        </div>
        )}
      </div>
      <Script />
    </>
  );
}

export default ExampleComponent;