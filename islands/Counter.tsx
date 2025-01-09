import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="border rounded-full p-3 text-white border-white"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span className="px-3 text-lg text-white">{count}</span>
      <button
        className="border rounded-full p-3 text-white border-white"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
