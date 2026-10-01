import { Outlet } from 'react-router'
import Footer from './components/Footer'
import {TicketContextProvider } from './context/TicketContext'
import Header from './components/Header'


export default function App() {
  

  return (
    <TicketContextProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
        <Header/>
        <div className="flex-1">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </TicketContextProvider>
  )
}
