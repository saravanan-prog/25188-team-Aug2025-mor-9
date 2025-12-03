import { useState } from "react";
import AdminList from "./components/AdminList";
import CustomerList from "./components/CustomerList";
import { DashboardContext } from "./context/DashboardContext";

export default function DashboardPage(){

    const [asserts,setAsserts] = useState(1000000)
    const [productList,setProductList] = useState(["apple","Orange","grapes"])


    return(
        <div className="base-container">
            <div className="heading">
                <p className="h1 text-center">Dashboard Page</p>
            </div>
            <div className="body-content">
               
              <DashboardContext.Provider  value = {
                        { 
                            assert:asserts, 
                            productList:productList 
                        }
                }>

                  <CustomerList />
                  <AdminList  />  
                  
              </DashboardContext.Provider>  
                




            </div>
        </div>
    )
}
