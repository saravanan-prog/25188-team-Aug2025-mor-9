import { useMemo, useState } from "react"

export default function CounterAppusememo(){

    const [count,setCount] = useState(0)
    const [price,setPrice] = useState(500)



    const expensiveResult = useMemo(()=>{
       return expensiveCalculation(count)

    },[])
   



    return <div className="base-container">
        <div className="heading">
            <p className="h1 text-center text primary">Counter App </p>
        </div>
        <div className="body-content ms-3">
            <div className="show-count">
                 <p> Count :  {count} </p>
                 <button onClick={()=>setCount(count + 1)}>Add count </button>
            </div>
            <div className="show-price">
                <p> Product Price :  {price} </p>
                 <button onClick={()=>setPrice(price + 1)}>Add price </button>
            </div>

            <div className="show-expensive-result">
                <p>Expensive Result : {expensiveResult} </p>
            </div>
        </div>
    </div>
}

const expensiveCalculation = (count) => {
    let num = count 

    for(let i=0; i<=1000000000; i++)
        num +=1


    return num
}