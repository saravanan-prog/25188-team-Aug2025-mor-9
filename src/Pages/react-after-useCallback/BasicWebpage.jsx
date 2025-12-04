import { useCallback, useState } from "react";
import Childcomponent from "./component/Childcomponent";


 export default function BasicWebpage() {

    const [count, setCount] = useState(0);

      const handleClick = useCallback(() => {
            console.log("Child button is  clicked")
       },[])


       const handleClickWithData = useCallback((data) => {
            console.log("Child button is  clicked",data)
       },[])

   
                 

    return (

        <div>
            <div className="show-count text-primary">
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increase Count</button>
            </div>

            <div className="child m-5">

               <Childcomponent 
                    handleClick = {handleClick}
                    handleClickWithData = {handleClickWithData}
               />

            </div>
           
                             
        </div>
    );
}

