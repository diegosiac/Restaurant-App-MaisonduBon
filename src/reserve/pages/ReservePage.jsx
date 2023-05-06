import { NavLink } from '../../components/NavLink/NavLink'
import { ReserveRoutes } from '../routes/ReserveRoutes'
import './reservePage.css'

export const ReservePage = () => {
  return (
    <main className='ReservePage'>

      <div className='RerservePage-Container'>

        <nav className='ReservePage-Card-Nav'>

          <NavLink to='create' id='PageReserve'>Reservar</NavLink>
          <NavLink to='search' id='PageSerch'>Buscar Reservación</NavLink>

        </nav>

        <ReserveRoutes />

      </div>

    </main>
  )
}
