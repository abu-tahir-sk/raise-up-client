import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/signIn"></Navigate>;
};

export default PrivateRoute;
