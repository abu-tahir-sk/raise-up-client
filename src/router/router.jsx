import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../components/AddCampaign";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Forgot from "../components/Forgot";

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
        element: <AddCampaign />,
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
    ],
  },
]);

export default router;
