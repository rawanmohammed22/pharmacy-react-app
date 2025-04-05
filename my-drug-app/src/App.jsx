import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import Regesiter from './Components/Regesiter/Regesiter'
import Layout from './components/Layout/Layout'
import Home from './Components/Home/Home'




  let routers = createBrowserRouter([
    {path: '', element: <Layout/> , children:[

      {index:true,element:<Home/>},
      {index:'login',element:<Login/>},
      {index:'register',element:<Regesiter/>}

    ]

  }








  ]









  )


function App() {
  
  



  return (
   <>
   <RouterProvider  router={routers}></RouterProvider>
   
   </>
  )
}

export default App
