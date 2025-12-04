import { memo } from "react";

export default memo(
    function Childcomponent(
        {
            handleClick,
            handleClickWithData
        }
    ){

        console.log("Child component is re-rendering")

        return <div className="container">
             <p> I am Child Component </p>


             <div className="child-button">

                <button onClick = { handleClick } className=" m-2"> click button </button>

                <button onClick = {() => handleClickWithData("saravanan")} > click button with pass data</button>
             </div>
        </div>
    }
)