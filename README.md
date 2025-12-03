React Hooks :-
==============
      1. useState   -> State management
      2. useEffect  -> React Life cycle function
      3. useReducer -> State management reduce complex logic.
      4. useContext -> Global Statement Magement.
      5. useRef     -> Element Reference.
      6. useCallback -> Prevent callback 
      7. useMemo     -> Memoization issue.


      Router:
            1. useParam -> to get Url paramater
            2. useNavigate -> to navigate page
            3. useLocation 


      Redux
            1. useDispatch
            2. useSelector




useReducer 
==========


           => useReducer is a React Hook used for state management when:

           =>  Your state logic is complex

           => Updating state depends on the previous state

           => You want a Redux-like reducer pattern (action → reducer → new state)

           =>  It’s an alternative to useState.




Syntax
======

      const [state, dispatch] = useReducer(reducerfn, initialState);


            state – the current state value

            dispatch(action) – sends an action to the reducerfn

            reducerfn(state, action) – a function that returns the new state

            initialState – the starting state



Example
=======

reducerCalculator.action.js
-----------------------------

  export const calcReducer = (state, action) => {
      switch (action.type) {
            case "add":
                  return (state += 1);

            case "sub":
                  return (state -= 1);

            case "mul":
                  return (state *= 5);

            default:
                  return (state = 0);
            }
      };

ReducerCalculator.jsx
---------------------

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

