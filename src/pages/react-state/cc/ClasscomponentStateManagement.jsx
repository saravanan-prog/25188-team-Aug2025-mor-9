import { Component } from "react";


export default class ClasscomponentStateManagement extends Component{


    constructor(){
        super()
        this.state = {
            heading : "Simple state Mangement",
            author : "Saravanan Durai",
            novels : [
                "Ponniyen selvan",
                "panjali sabatham",
                "Silapathigaram",
                "Sivagasinthamani"
            ],
            authorDetails: {
                dateofBirth : "04-09-1997",
                birthPlace : "Chennai Royapet",
                qualifaction: "Masters in novels",
                currentStatus: "live"
            }
        }
    }

    render(){
        
        return (
            <div className="base-container">
                <div className="heading">
                    <h1> { this?.state?.heading } </h1>
                </div>

                <div className="author-name">
                    <p>Page created By : {this?.state?.author} </p>
                </div>

                <div className="author-books">
                     <h4>Author Books </h4>
                     <ol type = "1">
                        {
                            this?.state?.novels && this?.state?.novels?.length != 0 ?
                              this?.state?.novels?.map((value,index)=>{
                                 return <li key={index}> {value} </li>
                              })
                            :
                            <li> No Books Found</li>
                        }

                     </ol>
                </div>

                <div className="author-details">
                    <h3> Author Details </h3>
                    <div className="details">
                        <p> Date of Birth : {this.state.authorDetails.dateofBirth} </p>
                        <p> Birth Place : {this.state.authorDetails.birthPlace} </p>
                        <p> Qualification : {this.state.authorDetails.qualifaction} </p>
                    </div>
                </div>
            </div>
        )
    }








}