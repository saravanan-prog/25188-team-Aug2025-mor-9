import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct,getSingleproduct } from "./thunk/productpage.thunk";

export default function ProductPage() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
   
    dispatch(getProduct())
    //dispatch(getSingleproduct(2))
  },[])

 
const {error,loading,data} = useSelector((state)=> state.product)


  return (
    <div>
      <div className="heading">
        <div className="text-center h1 text-primary">Our Products</div>
      </div>
      <div className="api-data">
          {
            loading && <p> Loding...... </p>
          }  
          {
            !loading && error && <p> {error} </p>
          }  
           
          {
            !loading && data && JSON.stringify(data)
          }  
      </div>
    </div>
  );
}
