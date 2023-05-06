import { NavLink } from '../../../NavLink/NavLink'
import './burguerMenu.css'

export const BurguerMenu = ({ isOpen }) => {
  const open = isOpen ? 'Burguer-active' : ''
  return (
    <div className={`Burguer-container ${open}`} data-testid='Burguer-container'>
      <div className='Burguer-menu'>
        <NavLink to='/home'>Inicio</NavLink>
        <NavLink to='/reserve'>Reservar</NavLink>
        <NavLink to='/menu'>Menú</NavLink>
      </div>
    </div>
  )
}
