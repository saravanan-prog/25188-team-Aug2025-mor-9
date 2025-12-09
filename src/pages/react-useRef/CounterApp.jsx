import { useState,useRef,useEffect } from "react"

export default function CounterApp(){

   var count = useRef(0)

   useEffect(()=>{
     console.log("count====>",count)
   },[count])

   const addCount = () => {
   
      count.current++

       console.log("add  is triggered--",count)


      
   }

  

   return <div className="container">
        <div className="counter">
            <p> count : {count.current} </p>
            <button onClick = { addCount }> ADD </button>
        </div>
    </div>
}

