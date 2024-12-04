import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './Components/LayOut/Main';
import Home from './Components/Pages/Home/Home';
import RegisterPage from './Components/Pages/RegisterPage/RegisterPage';
import UserLogin from './Components/Pages/LogInPage/UserLogin';
import AuthProvider from './Provider/AuthProvider';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"registerPage",
        element:<RegisterPage></RegisterPage>
      },
      {
        path:"userLogin",
        element: <UserLogin></UserLogin>
      }
    ]

  },
  // More routes
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
