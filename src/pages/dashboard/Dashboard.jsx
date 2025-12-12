import { useNavigate } from "react-router-dom"

export default function Dashboard(){

    const navigate = useNavigate()

    const handleLogout = () => {
        
        localStorage.removeItem("token")
        navigate('/login')

    }

    return <div> 
       <div className="heading">
           <div className="h1 text-center-text-primary">Dashboard Page</div>
       </div>
       <div className="form">
            <button onClick = {handleLogout} > Logout </button>
       </div>
    </div>
}