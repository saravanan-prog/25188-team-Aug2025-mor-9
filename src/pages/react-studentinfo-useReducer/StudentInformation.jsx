import { useReducer } from "react"
import { studentAction } from "./studentinformation.action"
import studentData from './student.json'

export default function StudentInformation(){

    const [studentInformation,dispatch] = useReducer(studentAction,studentData)


    return <div className="base-container">
            <div className="heading">
                <p className="h1 text-primary tex-center">Student Information</p>
            </div>
            <div className="student-data">
                <table className="table table-bordered text-center">
                   <thead>
                        <tr>
                            <th> Serial Number </th>
                            <th> Student Name </th>
                            <th> Student Address</th>
                            <th> Actions </th>
                        </tr>
                   </thead>
                   <tbody>
                       {studentInformation && studentInformation.length!=0 ? 
                            studentInformation.map((value,index)=>{
                              return  <tr key = {index}>
                                        <td> {index + 1} </td>
                                        <td>  {value.studentName} </td>
                                        <td>  {value.address}</td>
                                        <td >
                                            <button onClick = {()=>dispatch({type:"update",id:index})} className="ms-3" > update </button >
                                            <button onClick = {()=>dispatch({type:"delete",id:index})} > delete </button>
                                        </td>
                                    </tr>
                            })
                        :
                            <tr>
                                <th colSpan={4} className="text-center text-danger">No Record Found</th>
                            </tr>
                         
                       }
                   </tbody>
                </table>

            </div>

                    
                
            
    </div>
}