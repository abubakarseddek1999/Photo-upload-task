import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Images from "../Pages/Dashboard/Images/Images";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
            path: 'images',
            element: <Images></Images>
        }
      ]
    },
  ]);