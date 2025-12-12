import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = Boolean(localStorage.getItem("token"));

  if (!isAuth) 
    return <Navigate to="/login" />;
  else
    return children;

}
