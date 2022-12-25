import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NuevoCliente,{action as nuevoClienteAction} from "./pages/NuevoCliente.jsx";
import Index, {loader as clientesLoader} from "./pages/Index.jsx";
import ErrorPage from "./components/ErrorPage";
import Editar, {loader as editarClienteLoader,action as editarAction} from "./pages/Editar";
import {action as eliminarAction} from "./components/Cliente.jsx"

const router=createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement:<ErrorPage/>
      },
        {
      path: "/clientes/nuevo",
      element: <NuevoCliente/>,
          action: nuevoClienteAction,
          errorElement:<ErrorPage/>
    },
      {
        path:"/clientes/:clienteId/editar",
        element:<Editar/>,
        loader: editarClienteLoader,
        action: editarAction,
        errorElement: <ErrorPage/>
      },
      {
        path:"/clientes/:clienteId/eliminar",
        action: eliminarAction
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
