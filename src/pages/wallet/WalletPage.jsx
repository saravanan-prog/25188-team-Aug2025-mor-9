import { useNavigate } from "react-router-dom"

export default function Wallet(){

    const navigate = useNavigate()

    const handleLogout = () => {
        
        localStorage.removeItem("token")
        navigate('/login')

    }

    return <div> 
       <div className="heading">
           <div className="h1 text-center-text-primary">Wallet Page</div>
       </div>
       
    </div>
}