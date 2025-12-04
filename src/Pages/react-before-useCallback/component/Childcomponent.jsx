import { memo } from "react";

export default memo(
    function Childcomponent(){

        console.log("Child component is re-rendering")

        return <div className="container">
             <p> I am Child Component </p>
        </div>
    }
)