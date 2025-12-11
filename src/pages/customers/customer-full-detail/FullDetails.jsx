import { Fragment, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function FullDetails() {

    const [userList,setUserlist] = useState()

    const {id} = useParams()

    useEffect(()=>{
        
        console.log("id=======>",id)
        getuserListApi()
    },[id])

    const getuserListApi = async () => {

        let endpointURL  = process.env.REACT_APP_USERSLIST+`/${id}`
        let response = await fetch(endpointURL)
        const responseData =  await response.json()
        responseData && setUserlist(responseData)
        
    }



    return <div className="base-container">
        <div className="heading">
            <a href={`/customers`}>Back</a>
            <p className="h1 text-center text-primary">Customer List </p>
        </div>
        <div className="user-list">
            {JSON.stringify(userList)}
           
        </div>

    </div>
}