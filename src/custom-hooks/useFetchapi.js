import { useEffect, useState } from "react";

export default  function useFetchapi(url){

    const [apiResponse,setApiResponse] = useState()

    useEffect( ()=>{
        getApicall()
    },[])

     const  getApicall =  async () =>{
         let response = await fetch(url)
         let responseData = await response.json()
         if(responseData && responseData !=null)
            setApiResponse(responseData)

    }

    return  apiResponse

}