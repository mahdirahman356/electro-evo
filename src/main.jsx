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
import UpdateQueries from './Components/UpdateQueries';
import QuerieDetails from './Components/QuerieDetails';
import Queries from './Components/Queries';

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
        element:<PrivetRoute><AddQueries></AddQueries></PrivetRoute>
      },
      {
        path:"/update-queries/:id",
        loader: ({params}) => fetch(`http://localhost:5000/queries/${params.id}`),
        element:<UpdateQueries></UpdateQueries>
      },
      {
        path:"/querie-details/:id",
        loader: ({params}) => fetch(`http://localhost:5000/queries/${params.id}`),
        element:<QuerieDetails></QuerieDetails>
      },
      {
        path:"/queries",
        element:<Queries></Queries>
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
