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

function setBackGroundIconStatus(value: string) {
  switch (value) {
    case "Primary":
      return "bg-primary";

    case "Secondary":
      return "bg-secondary";

    case "White":
      return "bg-white";

    case "Light":
      return "bg-light";

    default:
      return "bg-white";
  }
}

function countCharacters(text: string): number {
  return [...text.trim()].length;
}

function OrderTracking(
  { order, colorTheme, colorThemeBackgroundIcon }:
    & JSX.IntrinsicElements["div"]
    & Props,
) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px]">
          <div className="pt-[54px] pb-[72px] grid">
            {order.map((status, index) => (
              <div key={index} className="px-4 md:px-0 w-full">
                <div className="flex">
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`h-8 w-8 rounded-full border border-sacramentoState-10 ${
                        setBackGroundIconStatus(colorThemeBackgroundIcon)
                      }`}
                    >
                      <div class="hidden">
                        {status.imageStatus && (
                          <img
                            src={status.imageStatus}
                            alt={status.subtitleOrderStatus}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                    {index !== order.length - 1 && (
                      <div
                        className={`${
                          countCharacters(status.description) > 72
                            ? "h-[114px]"
                            : "h-20"
                        } border-l border-sacramentoState-10`}
                      >
                      </div>
                    )}
                  </div>
                  <div className="ml-[13px] flex flex-col">
                    <h3
                      className={`text-lg font-sans font-semibold leading-tight-115 ${
                        setClass(colorTheme)
                      }`}
                    >
                      {status.subtitleOrderStatus}
                    </h3>
                    <p
                      className={`text-base font-sans font-normal ${
                        setClass(colorTheme)
                      }`}
                    >
                      {status.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTracking;
