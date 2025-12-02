import { useReducer } from "react";
import { calcReducer } from "./reducerCalculator.action";

export default function ReducerCalculator() {
  const [count, dispatch] = useReducer(calcReducer, 0);

  return (
    <div className="base-container">
      <div className="heading">
        <p className="h1 text-primary text-center">Simple Calculator</p>
      </div>
      <div className="count-show">
        <p className="h3"> Count : {count}</p>
      </div>
      <div className="actions">
        <button onClick={() => dispatch({ type: "add"}) }
        >
          ADD
        </button>
        <button onClick={() => dispatch({ type: "sub" })}>SUB</button>
        <button onClick={() => dispatch({ type: "mul" })}>Mul</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
}
