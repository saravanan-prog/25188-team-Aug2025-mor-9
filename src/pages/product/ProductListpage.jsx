import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllproduct,getSingleProduct } from "./thunk/productListthunk"

export default function ProductListpage(){

    const {loading,data,error} = useSelector((state)=>state.product )
    const dispatch = useDispatch()

    useEffect(()=>{
        //dispatch(getAllproduct())
        dispatch(getSingleProduct(2))
    },[])

    return <div className="basecontainer">
        <div className="heading">
            <div className="h1 tex-center">Products</div>
        </div>
        <div className="data">
            {
                loading && <p> Page is Loading </p>
               
            }
            {
                error && error
            }
            {
                data && JSON.stringify(data)
            }
        </div>
    </div>
}