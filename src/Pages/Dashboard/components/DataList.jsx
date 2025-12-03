import { useContext } from "react"
import { DashboardContext } from "../context/DashboardContext"

export default function DataList(){

    const {productList} = useContext(DashboardContext)


    return(
        <div className="container">
            <p className="h3 bg-primary text-white"> Product List </p>


            <div className="products">
                <nav>
                    <ul className="">
                        {productList && productList.length != 0 &&
                            productList.map((value,index) => <li key={index}> {value} </li>)
                        
                        }
                    </ul>
                </nav>
            </div>


        </div>

        
    )
}