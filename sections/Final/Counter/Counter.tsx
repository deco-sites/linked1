import type { JSX } from "preact";
import CounterComponent from "../../../islands/Counter.tsx";
import Script, { type Props } from "./script.tsx";

function Counter({ }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
    <div>
        <CounterComponent />
        <Script />
    </div>
    </>
  );
}

export default Counter;