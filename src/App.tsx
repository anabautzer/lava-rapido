import { Outlet } from 'react-router'
import Footer from './components/Footer'
import {TicketContextProvider } from './context/TicketContext'
import Header from './components/Header'


export default function App() {
  

  return (
    <TicketContextProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </TicketContextProvider>
  )
}
