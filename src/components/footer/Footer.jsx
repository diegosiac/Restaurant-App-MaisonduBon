import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer-Container'>

        <div className='Footer-Network'>

          <nav className='Footer-About'>
            <ul>
              <li><a href='#'>Condiciones de uso</a></li>
              <li><a href='#'>Métodos de pago</a></li>
              <li><a href='#'>Aviso de privacidad</a></li>
              <li><a href='#'>Información corporativa</a></li>
            </ul>
          </nav>

          <nav className='Network-Items-Container'>
            <a href='#'><FacebookIcon className='Network-Items' /></a>
            <a href='#'><InstagramIcon className='Network-Items' /></a>
            <a href='#'><TwitterIcon className='Network-Items' /></a>
          </nav>

        </div>

        <p className='Footer-Text'>Copyright © 2022, Restaurante La Maison du Bon. Reservados todos los derechos.</p>

      </div>
    </footer>
  )
}
