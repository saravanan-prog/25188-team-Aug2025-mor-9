import { useEffect, useRef} from "react"

export default function SimpleWebpage(){

    const pRef = useRef()
    const candidateList = useRef()

    const nameList = ["shiva","saravanan","gopal","vimal"]
    const btnRef = useRef()

    useEffect(()=>{
        console.log("btnRef====>",btnRef)

        pRef.current.style.fontSize = "64px"
        pRef.current.style.color = "green"
        pRef.current.style.textAlign = "center"
        pRef.current.style.borderStyle = "solid"
        pRef.current.style.borderWidth = "5px"
        pRef.current.style.borderColor = "red"



        pRef.current.innerHTML = "<i>Welcome to Next JS Framwork World</i>"

        //candidateList.current.children[0].innerHTML = "Prem kumar"

        for(let key in nameList){
            candidateList.current.children[key].innerHTML = nameList[key]
        }

        btnRef.current.click()




    },[])


    return <div className = "baseContainer">
        <div className="elements">
            <p ref ={pRef}>Hello React JS</p>
        </div>

        <div className="candidate-name-list" ref={candidateList}>
            <p> Saravanan </p>
             <p> Saravanan </p>
              <p> Saravanan </p>
               <p> Saravanan </p>
        </div>

        <div className="button">
             <button onClick = {()=> console.log("button is clicked")} ref={btnRef}>cick me</button>
        </div>
    </div>
}