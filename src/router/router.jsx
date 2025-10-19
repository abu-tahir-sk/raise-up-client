import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../components/AddCampaign";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Forgot from "../components/Forgot";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../components/Profile";
import Details from "../components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allCampaign",
        element: <AllCampaign />,
        loader: () => fetch("http://localhost:5000/campaign"),
      },
      {
        path: "/addNewCampaign",
        element: <PrivateRoute><AddCampaign /></PrivateRoute>,
      },                
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader:(({params})=>fetch(`http://localhost:5000/campaign/${params.id}`))
      },
    ],
  },
]);

export default router;
