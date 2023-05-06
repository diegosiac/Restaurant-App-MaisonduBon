import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { BurguerMenu } from '../../../../../src/components/navBar/components/burguerMenu/BurguerMenu'

describe('Pruebas en <BurguerMenu/>', () => {
  test('debe de estar activo el Nav menu y hacer click en el link para navegar a la pagina home', () => {
    render(
      <BrowserRouter>
        <BurguerMenu isOpen />
      </BrowserRouter>
    )

    const div = screen.getByTestId('Burguer-container')
    const a = screen.getByRole('link', { name: 'Inicio' })
    fireEvent.click(a)

    expect(div.classList).toContain('Burguer-active')
    expect(a.classList).toContain('is-active')
    expect(window.location.pathname).toBe('/home')
  })

  test('debe de estar activo el Nav menu y hacer click en el link para navegar a la pagina reserve', () => {
    render(
      <BrowserRouter>
        <BurguerMenu isOpen />
      </BrowserRouter>
    )

    const div = screen.getByTestId('Burguer-container')
    const a = screen.getByRole('link', { name: 'Reservar' })
    fireEvent.click(a)

    expect(div.classList).toContain('Burguer-active')
    expect(a.classList).toContain('is-active')
    expect(window.location.pathname).toBe('/reserve')
  })

  test('debe de estar activo el Nav menu y hacer click en el link para navegar a la pagina menu', () => {
    render(
      <BrowserRouter>
        <BurguerMenu isOpen />
      </BrowserRouter>
    )

    const div = screen.getByTestId('Burguer-container')
    const a = screen.getByRole('link', { name: 'Menú' })
    fireEvent.click(a)

    expect(div.classList).toContain('Burguer-active')
    expect(a.classList).toContain('is-active')
    expect(window.location.pathname).toBe('/menu')
  })
})
