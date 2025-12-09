React UseRef
=============
      => useRef is a React hook that lets you store a value that does NOT cause the component to re-render when it changes.

      => Think of it like a small box where you can put something and React will not refresh the UI when the value inside changes.
      
   When to use useRef?
   -------------------
      ✔️ 1. Accessing DOM elements

            Like getting a reference to an input box.
      
      2. Storing values that should NOT trigger re-render

                  Like storing:
                  previous values
                  timers
                  counters
                  API call flags



Simple Example 1: Access DOM element
====================================

import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


Simple Example 2: Value that does NOT re-render
-------------------------------------------------

import { useRef } from "react";

function App() {
  const countRef = useRef(0);

  function increase() {
    countRef.current++;
    console.log(countRef.current);
  }

  return (
    <button onClick={increase}>Click</button>
  );
}

  