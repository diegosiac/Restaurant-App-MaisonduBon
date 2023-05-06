import { useState } from 'react'
import { menuBar, menuTasting } from './data'
import './MenuPage.css'

export const MenuPage = () => {
  const [menu, setMenu] = useState('Bar')
  const setActiveBar = () => setMenu('Bar')
  const setActiveTasting = () => setMenu('Tasting')
  const getActive = (type) => menu === type ? 'MenuPage-NavBar-active' : undefined
  return (
    <main className='MenuPage'>
      <section className='MenuPage-Container'>

        <h2 className='MenuPage-title'>Menú</h2>

        <nav className='MenuPage-NavBar'>
          <h3 onClick={setActiveBar} className={getActive('Bar')}>Barra de Cocina</h3>
          <h3 onClick={setActiveTasting} className={getActive('Tasting')}>Menú Degustación</h3>
        </nav>

        <article className='MenuPage-season'>
          <h4>MENÚ VERANO</h4>
          <h4>- AGOSTO 2023 -</h4>
        </article>

        <article className='MenuPage-Menu'>
          {menu === 'Tasting' && menuTasting.map(food => <p key={food}>{food}</p>)}
          {menu === 'Bar' && menuBar.map(food => <p key={food}>{food}</p>)}
        </article>

      </section>
    </main>
  )
}
