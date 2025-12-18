import { useDispatch, useSelector } from "react-redux"
import { add ,sub} from "./slice/countepageSlice"

export default function CounterPage(){

   const count =  useSelector((state)=> state.counter.count)
   const dispatch = useDispatch()

    return <div>
          <div className="text-center text-primar h1">Counter</div>
          <div className="show-count">count : {count} </div>
          <div className="actions">
             <button onClick={()=>dispatch(add())}>add</button>
             <button  onClick={()=>dispatch(sub())}>sub</button>
          </div>
    </div>
}