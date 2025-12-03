React State
===========

      React State is a built-in object that stores dynamic data inside a component and allows the component to re-render automatically whenever that data changes.

      Even simpler:

            State is the data that changes in a component. When state updates, the UI updates.



      Example
      -------
            const [value, setValue] = useState(initialValue);

            value             →  current state
            setValue          →  function to update the state
            initialValue      →  starting value
      

      Simple Example (Counter)
      ------------------------

            import { useState } from "react";

            export default function App() {
            const [count, setCount] = useState(0);

            return (
            <div>
                  <h1>Count: {count}</h1>
                  <button onClick={ () => setCount(count + 1)}>
                         Increase
                  </button>
            </div>
            );
            }
