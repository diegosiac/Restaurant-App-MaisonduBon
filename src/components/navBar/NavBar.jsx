import { useState } from 'react'
import { BurguerButton, BurguerMenu } from './components'
import './navBar.css'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openOrClose = () => setIsOpen(!isOpen)
  return (
    <nav className='Navbar'>

      <div className='Nav-left'>
        <p className='Nav-left-text'>Mora<span>.</span></p>
      </div>

      <div className='Nav-right'>
        <BurguerMenu isOpen={isOpen} />
        <BurguerButton isOpen={isOpen} openOrClose={openOrClose} />
      </div>

    </nav>
  )
}
