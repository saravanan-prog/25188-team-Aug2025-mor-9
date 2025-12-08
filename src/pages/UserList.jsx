import { Fragment } from "react"
import useFetchapi from "../custom-hooks/useFetchapi"


export default function UserList(){

    const userList = useFetchapi("https://fakestoreapi.com/users")

    if (!userList) {

        return <div class="spinner-border text-success text-center" role="status">
            <span class="sr-only">Loading...</span>
         </div>

    }
        
    return <div className="conatainer m-3">
        <div className="show-name">
           <table className = "table table-stripped">
              <thead>
                  <th> Candidate Name </th>
                  <th> Candidate Email </th>
                  <th> Candidate Address </th>
                   <th> Candidate contact number </th>
              </thead>
              <tbody>
                 {userList.map((value,index)=>{
                    return <Fragment>
                        <tr>
                            <td>{value.name.firstname +" "+ value.name.lastname}</td>
                            <td>{value.email}</td>
                            <td>{value.address.city}</td>
                            <td>{value.phone}</td>
                        </tr>
                    </Fragment>
                 })}
              </tbody>
           </table>
        </div>
    </div>
}