import { fireEvent, render, screen } from '@testing-library/react'
import { ReservePage } from '../../../src/reserve/pages/ReservePage'
import { BrowserRouter } from 'react-router-dom'
import { ReserveContext } from '../../../src/reserve/context/ReserveContext'
import { pageCurrent } from '../../../src/helpers/pageCurrent'

describe('Pruebas en <ReservePage/>', () => {
  test('debe de estar activo el Nav menu y hacer click en el link para el pathname /create', () => {
    const contextValue = {
      process: pageCurrent.SEARCH,
      resetContext: () => {}
    }

    render(
      <BrowserRouter>
        <ReserveContext.Provider value={contextValue}>
          <ReservePage />
        </ReserveContext.Provider>
      </BrowserRouter>
    )

    const a = screen.getByRole('link', { name: 'Reservar' })
    fireEvent.click(a)

    expect(a.classList).toContain('is-active')
    expect(window.location.pathname).toBe('/create')
  })

  test('debe de estar activo el Nav menu y hacer click en el link para el pathname /search', () => {
    const contextValue = {
      process: pageCurrent.SEARCH,
      resetContext: () => {}
    }

    render(
      <BrowserRouter>
        <ReserveContext.Provider value={contextValue}>
          <ReservePage />
        </ReserveContext.Provider>
      </BrowserRouter>
    )

    const a = screen.getByRole('link', { name: 'Buscar Reservación' })
    fireEvent.click(a)

    expect(a.classList).toContain('is-active')
    expect(window.location.pathname).toBe('/search')
  })
})
