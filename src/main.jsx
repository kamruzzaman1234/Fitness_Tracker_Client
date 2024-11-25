import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './Components/LayOut/Main';
import Home from './Components/Pages/Home/Home';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
    ]

  },
  // More routes
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
