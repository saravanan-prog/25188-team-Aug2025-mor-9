import { useContext } from "react"
import { DashboardContext } from "../context/DashboardContext"
import DataList from "./DataList"

export default function AdminList(){

    const {assert, productList } = useContext(DashboardContext)

   


    return(
        <div className="container">
              <div className="current-customer-list m-2">
                   <p className="h3 text-primary">Current Admins</p>
                    <p> Jesnitha </p>
                    <p> Amrutha </p>
                    <p> Shreepal </p>
                    <p> Lakshmi </p>
                </div>

                <p>Current Assert : {assert}</p>

                <div className="data-list">
                    <DataList />
                </div>
                
                
        </div>
    )
}