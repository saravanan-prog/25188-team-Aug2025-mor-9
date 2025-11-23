import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="base-container">
      <div className="heading">
        <h1>Counting Program</h1>
      </div>
      <div className="main ">
        <h3>
          count:<span>{count}</span>
        </h3>

        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)} disabled={count == 0}>
          Sub
        </button>
        <button onClick={() => setCount(count + 5)}>Add+5</button>
        <button onClick={() => setCount(count - 5)} disabled={count == 0}>sub-5</button>
      </div>
    </div>
  );
}
