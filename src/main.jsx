import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainRoute from './MainRoute/MainRoute';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Context from './Context/Context';
import ErrorRoute from './ErrorRoute/ErrorRoute';
import MyQueries from './Components/MyQueries';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import AddQueries from './Components/AddQueries';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement:<ErrorRoute></ErrorRoute>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/my-queries",
        element:<PrivetRoute><MyQueries></MyQueries></PrivetRoute>
      },
      {
        path:"/add-queries",
        element:<AddQueries></AddQueries>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
