import { Fragment, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function CustomersList() {

    const [userList,setUserlist] = useState()

    const {id} = useParams()

    useEffect(()=>{
        
        console.log("id=======>",id)
        getuserListApi()
    },[id])

    const getuserListApi = async () => {

        let endpointURL  = id ? process.env.REACT_APP_USERSLIST+`/${id}` : process.env.REACT_APP_USERSLIST
        var response = await fetch(endpointURL)
        const responseData =  await response.json()
        responseData && setUserlist(responseData)
        
    }



    return <div className="base-container">
        <div className="heading">
            <a href={`/customers`}>Back</a>
            <p className="h1 text-center text-primary">Customer List </p>
        </div>
        <div className="user-list">
           <table className = "table table-stripped">
               <thead>
                   <th> Serial No </th>
                   <th> user ID </th>
                   <th> user Name </th>
                   <th> Email </th>
                   <th> phone </th>
                    <th> Action </th>
               </thead>
               <tbody>
                  {userList && userList.length &&
                    userList.map((value,index)=>{
                        return <Fragment key = {index}>
                            <tr>
                                <td>{index + 1}</td>
                                 <td>{value.id}</td>
                                  <td>{value.name.firstname +' ' + value.name.lastname}</td>
                                   <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td><Link to= {`/customers/fulldetail/${value.id}`}> full view </Link></td>
                            </tr>
                        </Fragment>
                    })
                  }
               </tbody>
           </table>
        </div>

    </div>
}