import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './Components/LayOut/Main';
import Home from './Components/Pages/Home/Home';
import RegisterPage from './Components/Pages/RegisterPage/RegisterPage';
import UserLogin from './Components/Pages/LogInPage/UserLogin';
import AuthProvider from './Provider/AuthProvider';
import UserProfile from './Components/Pages/UserProfile/UserProfile';
import EditProfile from './Components/Pages/EditProfile/EditProfile';
import AllTrainer from './Components/Pages/All_Triner/AllTrainer';
import PrivetRouter from './PrivetRouter/PrivetRouter';
import DetailsTrainer from './Components/Pages/All_Triner/DetailsTrainer/DetailsTrainer';
import BookingPage from './Components/Pages/BookingPage/BookingPage';
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
      },
      {
        path:"userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path:"editProfile",
        element: <EditProfile></EditProfile>
      },
      {
        path:"allTrainer",
        element: <AllTrainer></AllTrainer>
      },
      {
        path:"detailsTrainer/:id",
        element:<PrivetRouter><DetailsTrainer></DetailsTrainer></PrivetRouter>
        
      },
      {
        path:"booking/:id",
        element: <PrivetRouter><BookingPage></BookingPage></PrivetRouter>
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
