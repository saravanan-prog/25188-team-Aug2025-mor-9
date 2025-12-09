import { useEffect, useRef } from "react"

export default function ElementRef(){

    const pref = useRef()
    const inputRef = useRef()

    useEffect(()=>{
        console.log("inputRef====>",inputRef)

        setTimeout(()=>{
            pref.current.innerHTML = "<h1> Hello Vue JS</h1>"
            pref.current.style.color = "red"
        },5000)

        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
        inputRef.current.style.color = "green"

    },[])



    return <div className="base-container">
         <div className="heading">
             <p className="h1 text-center">Element Reference </p>
         </div>

         <div className="body">
              <p ref = {pref}> Hello React JS</p>
         </div>
         <div className="input">
            User Name : <input type="text" ref={inputRef} aria-label="Email Address"/>
         </div>
    </div>

}