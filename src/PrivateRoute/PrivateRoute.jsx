import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if(loading){
     return <h2>loading....</h2> 
  }

  if (!user) {
    return <Navigate to="/signIn"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
