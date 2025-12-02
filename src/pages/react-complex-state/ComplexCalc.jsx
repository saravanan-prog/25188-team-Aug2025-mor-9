import { useState } from "react"
import { additon,subraction,multiplication } from "./compleCalc.action"

export default function ComplexCalc(){

    const [count,setCount] = useState(0)


    return <div className="container">
        <div className="heading">
            <p className="h1 text-center text-primary"> Calculator </p>
        </div>
        <div className="show-count m-3">
            <p className="h1">Count : {count}</p>
        </div>
        <div className="buttons">
            <button onClick = {() => additon(count,setCount)}> ADD </button>
             <button onClick = {() => subraction(count,setCount)}> SUB </button>
             <button onClick = {() => multiplication(count,setCount)}> Mul </button>
        </div>
    </div>
}