import { memo } from "react"

export default memo(
    function Childcomponent(){

        console.log("Child Component is Rendering....")
        
        return(
            <div className="container">
                <p> I am Child Compoent </p>
            </div>
        )

    }

) 

