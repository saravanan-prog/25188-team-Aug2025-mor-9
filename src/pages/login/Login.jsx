import axios from "axios";
import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate = useNavigate()

    useEffect(()=>{
         const isAuth = Boolean(localStorage.getItem("token"));
         isAuth && navigate('/dashboard')
         

    },[])


    const handleLogin = async () => {
      let payload = { username: "johnd", password: "m38rmF$" };
      let response = await axios.post("https://fakestoreapi.com/auth/login",payload)
      let token = response?.data?.token && response?.data?.token
      token && localStorage.setItem("token",token)
      navigate('/dashboard')

    };

    return <div> 
       <div className="heading">
           <div className="h1 text-center-text-primary">Login</div>
       </div>
       <div className="form">
            <button onClick = {handleLogin} > Login </button>
       </div>
    </div>
}