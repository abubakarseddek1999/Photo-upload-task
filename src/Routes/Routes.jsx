import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";


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
      path: "/",
      element: <div>This is dashboard</div>,
      children:[
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);