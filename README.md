React Memoization
=================

Defination:

      It improves performance by preventing unnecessary re-renders.


Simple Term:-


       =>     Imagine you have a child component:

       =>     Parent re-renders

       =>     Child also re-renders (even if nothing changed)

       =>     Memoization stops this.


      Memoization in React means caching the result of a computation or component rendering so React doesn’t redo work unnecessarily.

    


    Example
    =======
      
      import {React,memo} from "react";

      export default memo(
            
            function ChildComponent(){
                  return <h1> I am a child Component </h1>
            }
      )






      