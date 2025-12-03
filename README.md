React Hook use Callback
=======================

Defination:
-----------

      useCallback is a tool in React that “remembers a function” so that React doesn’t create a new one every time the page updates.




      Imagine this scenario:
      ----------------------

            You have a parent component and a child component

            Parent updates → React runs all code again

            If you pass a new function to the child → child also updates even if it didn’t need to

      
      Solution :
      ---------

            useCallback stops the child from updating unnecessarily by keeping the function the same.



Example
========
      Parent Component
      =================
            import React, { useState, useCallback } from "react";


            export default function App() {

                  const [count, setCount] = useState(0);

                  /* This function is "memorized" with useCallback */

                  const handleClick = useCallback(() => {

                        console.log("Button clicked!");

                  }, []); // empty array = no dependency changes

                  return (

                        <div>
                              <h1>Count: {count}</h1>
                              <button onClick={() => setCount(count + 1)}>Increase Count</button>
                              <Child onClick={handleClick} />
                        </div>
                  );
            }


      Child Component
      ===============

            
           export default memo(
            
                  funciton Child({ handleClick }) => {

                        console.log("Child rendered");
                        return <button onClick={ handleClick }>Click Me</button>;

                  }
            );





      