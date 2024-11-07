
import {createBrowserRouter} from "react-router-dom";
import Landing from "../Pages/Landing";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
    },
  ]);