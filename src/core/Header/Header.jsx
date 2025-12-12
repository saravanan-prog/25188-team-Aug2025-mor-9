import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header(){
     const isAuth = Boolean(localStorage.getItem("token"));
     const navigate = useNavigate()
     const {pathname} = useLocation()

     console.log("pathname====>",pathname)

      const handleLogout = () => {
        
        localStorage.removeItem("token")
        navigate('/login')

    }

    return <div className = "base-container"> 
            <nav className="navbar navbar-default">


                <ul class="nav navbar-nav">
                    <li> 
                        <Link to = {"/home"}> Home </Link>
                    </li>
                     <li> 
                        <Link to = {"/about"}> About </Link>
                    </li>
                    <li> 
                        <Link to = {"/contact"}> Contact </Link>
                    </li>
                    <li> 
                        <Link to = {"/blog"}> Blog </Link>
                    </li>
                    <li>
                        {!isAuth ?
                           pathname !="/login" && <Link to = {"/login"}> Login </Link>
                        :
                            <button onClick = {handleLogout}> Logout</button>
                         }
                        
                    </li>
                </ul>


            </nav>

          

      </div>
}