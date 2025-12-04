import { useState } from "react"
import Childcomponent from "./component/Childcomponent"

export default function BasicWebPage(){
 

    const [count,setCount] = useState(0)

    return (
        <div className="container">
            <div className="heading">
                <p className="h1 text-center text-primary">Basic Web Page </p>
            </div>

            <div className="show-count">
                <p> Count : {count} </p>
                <button onClick = {()=>setCount(count + 1)}> update Count </button>
            </div>


            <div className="childs m-5">
                <Childcomponent />
            </div>


        </div>
    )
}