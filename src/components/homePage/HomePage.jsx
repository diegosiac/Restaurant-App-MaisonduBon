import StarIcon from '@mui/icons-material/Star'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeMobile from '../../assets/images/fonds/home-movile.jpg'
import HomeDesktop from '../../assets/images/fonds/home.jpg'
import RelaisRecognition from '../../assets/images/logos/Home-realais.png'
import FiftyRecognition from '../../assets/images/logos/Home-50.png'
import CompanyRecognition from '../../assets/images/logos/Home-B.png'
import Recognition from '../../assets/images/more/recognition.png'
import Quality from '../../assets/images/more/Quality.png'
import Events from '../../assets/images/more/Events.png'
import SteakHouse from '../../assets/images/logos/Steak-logo.png'
import './HomePage.css'

export const HomePage = () => {
  return (
    <main className='HomePage'>
      <section className='SetionMenu'>

        <div className='SectionMenu-img-movile'>
          <img src={HomeMobile} alt='Corte de carne' />
        </div>

        <div className='SectionMenu-text'>

          <div className='SectionMenu-text-container'>
            <h1>La Maison du Bon</h1>
            <h2>Cuidamos con pasión y detalle cada platillo que elaboramos para ti</h2>
          </div>

          <div className='SectionMenu-text-img'>
            <img src={RelaisRecognition} alt='Relais & Chateaux MaisonDuBon' />
            <img src={FiftyRecognition} alt='50 Best restaurants' />
            <img src={CompanyRecognition} alt='B company certified' />
          </div>

        </div>

        <div className='SectionMenu-img'>
          <img src={HomeDesktop} alt='Mesa de cortes' />
        </div>

      </section>

      <div className='SectionMenu-Bar'>
        <span className='SectionMenu-line' />
        <span className='SectionMenu-circle' />
        <span className='SectionMenu-line' />
        <span className='SectionMenu-circle' />
        <span className='SectionMenu-line' />
      </div>

      <section className='SectionInfo'>

        <article className='SectionInfo-item'>
          <img src={Recognition} alt='Image Recognition' />
          <h3>Reconocimiento</h3>
          <p>Tenemos grandes reconocimientos de los mejores críticos y varios premios</p>
        </article>

        <article className='SectionInfo-item'>
          <img src={Quality} alt='Image Quality' />
          <h3>Calidad</h3>
          <p>Hacemos nuestros platillos con la mejor selección de productos calidad</p>
        </article>

        <article className='SectionInfo-item'>
          <img src={Events} alt='Image Events' />
          <h3>Eventos</h3>
          <p>Por celebración de 1er mes de apertura, tenemos nuestros precios a un 20% de descuento</p>
        </article>

      </section>

      <section className='SectionAbout'>

        <img src={SteakHouse} alt='Logo Steak House' className='SectionAbout-img' />

        <div className='SectionAbout-info-container'>

          <article className='SectionAbout-more'>
            <h2>Sobre Nosotros</h2>
            <p>Cocina Especializada en cortes, es un restaurante que reúne a una selección de cocinas dentro de un espacio diseñado para brindar una experiencia agradable a todos los sentidos.</p>
          </article>

          <article className='SectionAbout-container-info'>

            <div className='SectionAbout-info-item'>
              <p className='info-item-top info-item-date'>8 de agosto de 2022</p>
              <h3 className='info-item-footer'>Creación</h3>
            </div>

            <div className='SectionAbout-info-item'>
              <p className='info-item-top info-item-location'>Del Refugio 40, Barrio del Atache, 40250 Taxco, Gro.</p>
              <h3 className='info-item-footer'>Ubicación</h3>
            </div>

            <div className='SectionAbout-info-item'>
              <div className='info-item-top'>
                <StarIcon className='info-item-icon' sx={{ transition: 'color 0.3s', color: '#474747' }} />
                <StarIcon className='info-item-icon' sx={{ transition: 'color 0.3s', color: '#474747' }} />
                <StarIcon className='info-item-icon' sx={{ transition: 'color 0.3s', color: '#474747' }} />
                <StarIcon className='info-item-icon' sx={{ transition: 'color 0.3s', color: '#474747' }} />
                <StarIcon className='info-item-icon' sx={{ transition: 'color 0.3s', color: '#474747' }} />
              </div>
              <h3 className='info-item-footer'>Rating</h3>
            </div>

            <div className='SectionAbout-info-item'>
              <div className='info-item-top'>
                <div className='item-contact'>
                  <MailIcon sx={{ color: '#929292' }} />
                  <p>MaisonContact@gmail.com</p>
                </div>
                <div className='item-contact'>
                  <PhoneIcon sx={{ color: '#929292' }} />
                  <p>+52 55 8725 2956</p>
                </div>
              </div>
              <h3 className='info-item-footer'>Contacto</h3>
            </div>

          </article>

        </div>

      </section>
    </main>
  )
}
