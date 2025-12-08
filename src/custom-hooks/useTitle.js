import { useEffect, useState } from "react";

export default function useTitle(name,gender){

    const [data,setData] = useState()

    useEffect(()=>{
        if(gender == "M")
            setData("Mr. " + name)
        else if(gender == "F")
            setData("Miss. " + name)
        else
            setData("Trans.",+ name)


    },[])


    return data

}