React Hook - useMemo
====================
     useMemo tells React:

     =>  “Remember the result of this calculation so you don’t have to do it again unless something changes.”
     =>  It helps your app run faster by not repeating work that doesn’t need to be repeated.


Example (simple)
------------------
      Without useMemo:
            => You do a big calculation every time the component renders — even if nothing changed.
      
      With useMemo:
            => React saves the result and only re-calculates when needed.
            => In one sentence
                “Don’t redo this calculation unless the inputs change.”



Before useMemo
==============

      import { useState ,useMemo} from "react"

      export default function Calculation(){

            const [count,setCount] = useState(0)


            const result  = sumofCalculation(count) 
      

            return <div>
                  <div className="heading">
                        <p className="h1"> Use Memo Example - Calculation Program </p>
                  </div>
                  <div className="counter">
                        <p>count : {count} </p>
                        <button onClick={()=>setCount(count + 1)}> ADD count</button>
                        <p>result : {result} </p>
                  </div>
            </div>
      }

const sumofCalculation = (num) => {
   
    for(let i=0; i<1000000000; i++)
        num += 1 


    return num
}






After useMemo
=============


import { useState ,useMemo} from "react"

export function Calculation(){

    const [count,setCount] = useState(0)
    const [author,setAuthor] = useState("Saravanan")
    
    const result  = useMemo(() => sumofCalculation(count) , [count])

    return <div>
          <div className="heading">
              <p className="h1"> Use Memo Example - Calculation Program </p>
          </div>
          <div className="counter">
             <p>count : {count} </p>
             <button onClick={()=>setCount(count + 1)}> ADD count</button>
             <p>result : {result} </p>
          </div>

          <div className="developedby">
            <p> {author} </p>
             <button onClick={()=>setAuthor("pavithra")}> change author </button>
          </div
    </div>
}

const sumofCalculation = (num) => {
   
    for(let i=0; i<1000000000; i++)
        num += 1 


    return num
}