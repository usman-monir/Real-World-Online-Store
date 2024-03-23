import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.css"
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements
  (
    <Route path='/' element={<App/>}>
      <Route  index={true} path='/' element={<HomeScreen/>}/>
      <Route  path='/product/:id' element={<ProductScreen/>}/>
    </Route>
  )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
