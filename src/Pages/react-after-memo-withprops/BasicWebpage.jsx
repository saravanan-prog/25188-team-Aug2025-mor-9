import { useState } from "react"
import Childcomponent from "./component/Childcomponent"

export default function BasicWebPage(){
 

    const [count,setCount] = useState(0)
    const [applicationName,setApplicationName] = useState("Simple Calculator")
    const [author,setAuthor] = useState("Saravanan")

    return (
        <div className="container">
            <div className="heading">
                <p className="h1 text-center text-primary">Basic Web Page </p>
            </div>

            <div className="show-count">
                <p> Count : {count} </p>
                <button onClick = {()=>setCount(count + 1)}> update Count </button>
            </div>

              {/* Without passing the props updated State */}
            <div className="childs m-5">
              

                    {/* <Childcomponent 
                        applicationName = {applicationName}
                        author = {author}
                    /> */}

            </div>

            {/* With passing the props updated State */}           
             <div className="childs m-5">
                   <Childcomponent 
                        applicationName = {applicationName}
                        author = {author}
                        count = {count}
                    />
            </div>

        </div>
    )
}