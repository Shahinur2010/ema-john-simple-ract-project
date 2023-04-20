import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Shop from './components/Shop/Shop'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import cartProductsLoader from './loaders/cartProductsLoader'
import Checkout from './components/Checkout/Checkout'
import SignUp from './components/SignUp/SignUp'
import AuthProvider from './components/providers/AuthProvider'
import PrivateRoute from './routes/PrivateRoute'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order review',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/manage inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
