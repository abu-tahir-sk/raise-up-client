import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../components/AddCampaign";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
    children:[
      {
            path:"/",
            element: <Home/>,
      },
      {
            path:"/allCampaign",
            element: <AllCampaign/>,
      },
      {
            path:"/addNewCampaign",
            element: <AddCampaign/>,
      },
    ]
  },
]);


export default router;