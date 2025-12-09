import { useEffect,useRef } from "react"

export default function Task(){

    const currentDate = new Date() 
    const featureDate =  new Date()
    const h1ref = useRef()
    const uref = useRef()
   

    const courseList = ["artlifical Inteligence","Machine Learning"]


    useEffect(()=>{
       
        console.log("uref=======>", uref.current.children)



        if(currentDate.getDate() == featureDate.getDate()){
           
            h1ref.current.innerHTML = "<span> 2026 Course List </span>"

            for(let i in courseList){
                 uref.current.children[i].innerText = courseList[i]
            }


           
           
           
        }


        
    },[])

    return <div className="base-container">
         <div className="heading">
             <p className="h1 text-center text-primary">Credo Systems</p>
         </div>
         <div className="courseList" >
            <h1 ref={h1ref}> 2025 course List</h1>
             <ul ref={uref}>
                <li>java</li>
                <li>python</li>
             </ul>
         </div>
    </div>
}