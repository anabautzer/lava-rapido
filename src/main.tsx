import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import ErrorPage from './pages/Error/ErrorPage.tsx'
import HomePage from './pages/Home/HomePage.tsx'
import AgendamentoPage from './pages/Agendamento/AgendamentoPage.tsx'
import SobrePage from './pages/Sobre/SobrePage.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: 'agendamento',
        element: <AgendamentoPage/>
      },
      {
        path: 'sobre',
        element: <SobrePage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
