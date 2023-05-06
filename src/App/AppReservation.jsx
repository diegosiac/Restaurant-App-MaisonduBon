import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'
import { ReserveProvider } from '../reserve/context'
import { AppRouter } from '../router/AppRouter'
import './app.css'

const AppReservation = () => {
  return (
    <>
      <NavBar />
      <ReserveProvider>
        <AppRouter />
      </ReserveProvider>
      <Footer />
    </>
  )
}

export default AppReservation
