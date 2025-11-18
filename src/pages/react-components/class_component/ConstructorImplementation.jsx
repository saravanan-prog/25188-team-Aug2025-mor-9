import { Component } from "react";

export default class ConstructorImplementation extends Component {

    constructor(){
        super()
        console.log("constructor calling...")
        
    }

    render(){

        return(
            <div className="base-container">
                <div className="heading">
                    <h2> Constructor Implementation </h2>
                </div>
            </div>
        )
    }

}