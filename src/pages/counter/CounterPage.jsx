import { useDispatch, useSelector } from "react-redux"
import { add,sub,mul,div } from "./slice/counterpageSlice"

export default function CounterPage(){

     const count    =  useSelector((state)=> state.counter.count)
     const dispatch =  useDispatch()

    

    return <div>
        <div className="heading">
            <p className="h1 text-center">Counter Program</p>
        </div>
        <div className="show-count">
            <p className="h3">Count : {count} </p>
        </div>
        <div className="actions">
            <button onClick={()=>dispatch(add())}>ADD</button>
            <button onClick={()=>dispatch(sub())}>SUB</button>
            <button onClick={()=>dispatch(mul())}>Mul</button>
            <button onClick={()=>dispatch(div())}>Div</button>
        </div>
    </div>
}